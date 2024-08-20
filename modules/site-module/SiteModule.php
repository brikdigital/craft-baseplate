<?php

namespace brikdigital\sitemodule;

use brikdigital\sitemodule\variables\SiteVariable;
use Craft;
use craft\web\twig\variables\CraftVariable;
use yii\base\Event;
use yii\base\Module as BaseModule;

/**
 * General site module for custom functionality
 *
 * @method static SiteModule getInstance()
 */
class SiteModule extends BaseModule
{
    public function init(): void
    {
        Craft::setAlias('@brikdigital/sitemodule', __DIR__);

        // Set the controllerNamespace based on whether this is a console or web request
        if (Craft::$app->request->isConsoleRequest) {
            $this->controllerNamespace = 'brikdigital\\sitemodule\\console\\controllers';
        } else {
            $this->controllerNamespace = 'brikdigital\\sitemodule\\controllers';
        }

        parent::init();

        $this->attachEventHandlers();

        // Any code that creates an element query or loads Twig should be deferred until
        // after Craft is fully initialized, to avoid conflicts with other plugins/modules
        Craft::$app->onInit(function() {
            // ...
        });
    }

    private function attachEventHandlers(): void
    {
        Event::on(
            CraftVariable::class,
            CraftVariable::EVENT_INIT,
            function (Event $event) {
                /** @var CraftVariable $variable */
                $variable = $event->sender;
                $variable->set('site', SiteVariable::class);
            }
        );
    }
}
