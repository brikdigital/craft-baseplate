<?php

namespace brikdigital\sitemodule\console\controllers;

use Craft;
use craft\base\Element;
use craft\base\Field;
use craft\commerce\elements\Order;
use craft\commerce\elements\Product;
use craft\commerce\elements\Subscription;
use craft\commerce\elements\Transfer;
use craft\commerce\elements\Variant;
use craft\commerce\models\ProductType;
use craft\commerce\Plugin;
use craft\console\Controller;
use craft\elements\Address;
use craft\elements\Asset;
use craft\elements\Category;
use craft\elements\db\EntryQuery;
use craft\elements\Entry;
use craft\elements\GlobalSet;
use craft\elements\Tag;
use craft\elements\User;
use craft\fields\Entries as EntriesField;
use craft\models\CategoryGroup;
use craft\models\EntryType;
use craft\models\TagGroup;
use craft\models\Volume;
use craft\services\Addresses;
use craft\services\Categories;
use craft\services\Elements;
use craft\services\Entries;
use craft\services\Globals;
use craft\services\Tags;
use craft\services\Volumes;
use verbb\hyper\fields\HyperField;
use verbb\hyper\links\Entry as EntryLink;
use verbb\hyper\models\LinkCollection;
use verbb\navigation\elements\Node;

class MigrateSinglesController extends Controller
{
    private const FIELD_HANDLERS = [
        EntriesField::class => [
            'migrate' => 'migrateEntriesField',
            'validate' => 'validateEntriesField',
        ],
        HyperField::class => [
            'migrate' => 'migrateHyperField',
            'validate' => 'validateHyperField',
        ],
    ];

    private Addresses $addressesService;
    private Categories $categoriesService;
    private Elements $elementsService;
    private Entries $entriesService;
    private Globals $globalsService;
    private Tags $tagsService;
    private Volumes $volumesService;

    private array $singleSectionIds = [];

    public function init(): void
    {
        parent::init();

        $this->addressesService = Craft::$app->getAddresses();
        $this->categoriesService = Craft::$app->getCategories();
        $this->elementsService = Craft::$app->getElements();
        $this->entriesService = Craft::$app->getEntries();
        $this->globalsService = Craft::$app->getGlobals();
        $this->tagsService = Craft::$app->getTags();
        $this->volumesService = Craft::$app->getVolumes();

        // Cache sections ID's of type single
        foreach ($this->entriesService->getSectionsByType('single') as $single) {
            $this->singleSectionIds[$single->uid] = $single->id;
        }
    }

    public function actionSetLegacyUriFormat()
    {
        foreach ($this->entriesService->getSectionsByType('single') as $single) {
            $siteSettings = [];

            foreach ($single->getSiteSettings() as $siteSetting) {
                if (!str_ends_with($siteSetting->uriFormat, '/legacy')) {
                    $siteSetting->uriFormat = rtrim($siteSetting->uriFormat, '/') . '/legacy';
                }

                $siteSettings[] = $siteSetting;
            }

            $single->setSiteSettings($siteSettings);
            $this->entriesService->saveSection($single);

            $this->stdout("Updated uri format for: $single->handle\n");
        }
    }

    public function actionMigrateSingles()
    {
        $indexesSection = $this->entriesService->getSectionByHandle('indexes');
        if (!$indexesSection) {
            $this->stderr('Indexes section not found');
            return;
        }

        foreach ($this->entriesService->getSectionsByType('single') as $single) {
            $singleEntry = Entry::find()
                ->section($single->handle)
                ->siteId('*')
                ->status(null)
                ->unique()
                ->one();
            if (!$singleEntry) {
                $this->stderr("No single found for $single->handle\n");
                continue;
            }

            foreach ($single->getSiteSettings() as $siteId => $siteSetting) {
                $newAttributes = [
                    'sectionId' => $indexesSection->id,
                    'siteId' => $siteId,
                    'slug' => preg_replace('#/legacy$#', '',  $siteSetting->uriFormat),
                ];

                $this->elementsService->duplicateElement($singleEntry, $newAttributes);

                $this->stdout("Migrated single $single->handle for siteId $siteId\n");
            }
        }
    }

    public function actionMigrateNavNodes()
    {
        foreach ($this->entriesService->getSectionsByType('single') as $single) {
            $singleEntry = Entry::find()
                ->section($single->handle)
                ->siteId('*')
                ->status(null)
                ->unique()
                ->one();
            if (!$singleEntry) {
                $this->stderr("No single found for $single->handle\n");
                continue;
            }

            $navNodes = Node::find()
                ->elementId($singleEntry->id)
                ->site('*')
                ->status(null)
                ->all();
            foreach ($navNodes as $navNode) {
                // slug stores the target site ID (e.g. on NL-site you can link to entry on FR-site)
                $newEntry = $this->getReplacementEntry($navNode->slug, $singleEntry->typeId);
                if (!$newEntry) {
                    $this->stderr("No indexes entry found for $single->handle on site ID $navNode->slug\n");
                    return;
                }

                $navNode->elementId = $newEntry->id;
                $this->elementsService->saveElement($navNode);

                $this->stdout("Updated menu node $navNode->title ($navNode->id) on site ID $navNode->siteId to reference $newEntry->title ($newEntry->id)\n");
            }
        }
    }

    public function actionMigrateFields()
    {
        // Addresses
        $this->processFieldLayoutProviders(
            [$this->addressesService],
            fn(Addresses $addresses) => Address::find(),
        );

        // Categories
        $this->processFieldLayoutProviders(
            $this->categoriesService->getAllGroups(),
            fn(CategoryGroup $categoryGroup) => Category::find()->groupId($categoryGroup->id),
        );

        // Entry types
        $this->processFieldLayoutProviders(
            $this->entriesService->getAllEntryTypes(),
            fn(EntryType $entryType) => Entry::find()->typeId($entryType->id),
        );

        // Global sets
        $this->processFieldLayoutProviders(
            $this->globalsService->getAllSets(),
            fn(GlobalSet $globalSet) => GlobalSet::find()->id($globalSet->id),
        );

        // Tag groups
        $this->processFieldLayoutProviders(
            $this->tagsService->getAllTagGroups(),
            fn(TagGroup $tagGroup) => Tag::find()->groupId($tagGroup->id),
        );

        // Users
        $this->processFieldLayoutProviders(
            [new User()],
            fn(User $user) => User::find(),
        );

        // Volumes
        $this->processFieldLayoutProviders(
            $this->volumesService->getAllVolumes(),
            fn(Volume $volume) => Asset::find()->volumeId($volume->id),
        );

        // Commerce
        if (Craft::$app->getPlugins()->isPluginEnabled('commerce')) {
            $productTypes = Plugin::getInstance()->getProductTypes()->getAllProductTypes();

            // Orders
            $this->processFieldLayoutProviders(
                [new Order()],
                fn(Order $order) => Order::find(),
            );

            // Products
            $this->processFieldLayoutProviders(
                $productTypes,
                fn(ProductType $productType) => Product::find()->typeId($productType->id),
                'getProductFieldLayout'
            );

            // Subscriptions
            $this->processFieldLayoutProviders(
                [new Subscription()],
                fn(Subscription $order) => Subscription::find(),
            );

            // Transfers
            $this->processFieldLayoutProviders(
                [new Transfer()],
                fn(Transfer $order) => Transfer::find(),
            );

            // Variants
            $this->processFieldLayoutProviders(
                $productTypes,
                fn(ProductType $productType) => Variant::find()->typeId($productType->id),
                'getVariantFieldLayout'
            );
        }
    }

    private function processFieldLayoutProviders(
        array $providers,
        callable $elements,
        string $fieldLayoutMethod = 'getFieldLayout'
    ): void {
        foreach ($providers as $provider) {
            $class = $provider::class;
            $handle = $provider->handle ?? '';
            $this->stdout("Handling $class: $handle\n");

            // Check layout for fields that are supported for migration
            $supportedFields = collect($provider->$fieldLayoutMethod()->getCustomFields())
                ->filter(function (Field $field) {
                    $handlers = self::FIELD_HANDLERS[$field::class] ?? null;
                    if (!$handlers) {
                        return false;
                    }

                    return $this->{$handlers['validate']}($field);
                });

            // Skip layouts that don't contain supported fields
            if ($supportedFields->isEmpty()) {
                $this->stdout("    Layout doesn't contain supported fields for migration\n");
                continue;
            }

            // Process elements that have supported fields
            foreach ($elements($provider)->site('*')->status(null)->batch() as $batch) {
                /** @var Element $element */
                foreach ($batch as $element) {
                    $class = $element::class;
                    $this->stdout("    Handling $class ($element->id) on site ID $element->siteId\n");

                    // Process each field
                    foreach ($supportedFields as $field) {
                        $this->stdout("        Handling field $field->handle\n");

                        $handlers = self::FIELD_HANDLERS[$field::class] ?? null;
                        if ($handlers) {
                            $this->{$handlers['migrate']}($element, $field);
                        }
                    }

                    // Save element if dirty (a supported field contained link to old single)
                    if ($element->getDirtyFields()) {
                        if ($this->elementsService->saveElement($element)) {
                            $this->stdout("        Done.\n");
                        } else {
                            $this->stderr("        Failed to save $element ($element->id) on site ID $element->siteId.\n");
                        }
                    }
                }
            }
        }
    }

    /**
     * Only process Entries fields that have Singles as allowed source
     */
    private function validateEntriesField(EntriesField $field): bool
    {
        return $this->validateSourcesForSingles($field->getInputSources());
    }

    /**
     * Only process Hyper fields that have Link type of Entry enabled and have Singles as allowed source
     */
    private function validateHyperField(HyperField $field): bool
    {
        foreach ($field->getLinkTypes() as $linkType) {
            if ($linkType instanceof EntryLink) {
                return $this->validateSourcesForSingles($linkType->getAvailableSources());
            }
        }

        return false;
    }

    /**
     * Check list of sources for sections of type Single
     */
    private function validateSourcesForSingles(array|null|string $sources): bool
    {
        if (empty($sources) || $sources === '*') {
            return $sources === '*';
        }

        foreach ($sources as $source) {
            // section:{uid}
            if (str_starts_with($source, 'section:') && isset($this->singleSectionIds[substr($source, 8)])) {
                return true;
            }
        }

        return false;
    }

    /**
     * Migration logic for Entries field
     */
    private function migrateEntriesField(Element $element, EntriesField $field): bool
    {
        /** @var EntryQuery $entryQuery */
        $entryQuery = $element->getFieldValue($field->handle);

        // Incorporate disabled and cross-site elements. Default to the element's site since relations don't store the selected site. This ensures entries not propagated to all sites are caught.
        $relatedEntries = $entryQuery
            ->site('*')
            ->status(null)
            ->unique()
            ->preferSites([$element->siteId])
            ->all();

        $dirty = false;
        $newEntries = [];
        foreach ($relatedEntries as $relatedEntry) {
            // Check if entry is a single
            if (!in_array($relatedEntry->sectionId, $this->singleSectionIds)) {
                $newEntries[] = $relatedEntry;
                continue;
            }

            // Find migrated single entry
            $newEntry = $this->getReplacementEntry($relatedEntry->siteId, $relatedEntry->typeId);
            if (!$newEntry) {
                $this->stderr("        No indexes entry found for $newEntry->handle on site ID $newEntry->siteId\n");
                $newEntries[] = $relatedEntry;
                continue;
            }

            $newEntries[] = $newEntry;
            $dirty = true;
        }

        // Set field value to mark dirty, else it won't save with updated value in _saveElementInternal()
        if ($dirty) {
            $element->setFieldValue($field->handle, $newEntries);
        }

        return $dirty;
    }

    /**
     * Migration logic for Hyper field
     */
    private function migrateHyperField(Element $element, HyperField $field): bool
    {
        /** @var LinkCollection $value */
        $value = $element->getFieldValue($field->handle);

        // Get links in HyperField
        $dirty = false;
        foreach ($value->getLinks() as $link) {
            // Only links related to entry
            if (!$link instanceof EntryLink) {
                continue;
            }

            // Check if entry is a single
            $linkElement = $link->getElement(null);
            if (!$linkElement instanceof Entry || !in_array($linkElement->sectionId, $this->singleSectionIds)) {
                continue;
            }

            // Find migrated single entry
            $newEntry = $this->getReplacementEntry($linkElement->siteId, $linkElement->typeId);
            if (!$newEntry) {
                $this->stderr("        No indexes entry found for $linkElement->handle on site ID $linkElement->siteId\n");
                continue;
            }

            // Update HyperField entry
            $link->setAttributes([
                'linkValue' => $newEntry->id,
            ]);
            $dirty = true;
        }

        // Set field value to mark dirty, else it won't save with updated value in _saveElementInternal()
        if ($dirty) {
            $element->setFieldValue($field->handle, $value);
        }
        return $dirty;
    }

    private function getReplacementEntry(int $siteId, int $typeId): ?Entry
    {
        return Entry::find()
            ->section('indexes')
            ->siteId($siteId)
            ->typeId($typeId)
            ->status(null)
            ->one();
    }
}