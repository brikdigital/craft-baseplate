# Brik Craft CMS Baseplate

## Setup guide

It's possible to do this setup without first setting up a blank DDEV project; but you'll need a local install of PHP and Composer.
This approach is completely possible but _unsupported_, and as such will not be documented.

```
mkdir -p project-name/public_html && cd project-name
ddev config --php-version 8.3 --database mysql:8.0 --docroot public_html --project-type craftcms
rm -rf public_html
ddev composer create-project brikdigital/craft-baseplate .
# edit .ddev/config.yaml to contain the correct project name
ddev restart
```

## Development

To start the Vite dev server, use either `ddev pnpm serve` or `make dev`. (the latter of which is a legacy command)

Additionally, there is a Storybook install that you can start with `make storybook`. This will be accessible on `project-name.ddev.site:3001`.

## Instructions for migrating singles to indexes (separated by site)

### Prepare
1. Create section “Indexes” with all entry types of existing singles
    1. Type: Structure
    2. URI: `{parent.uri}/{slug}`
    3. Template: `_sections/indexes/entry.twig`
    4. Propagation: Only save entries to the site they were created in
    5. Default table columns: Entry Type, Status, Date Updated, Authors, Link
2. Settings > Users > For each user group: Assign permissions for indexes
3. Navigation > Edit Settings for each menu > Permissions: Enable indexes
    1. Remember to check all sites for menu's, since some menu’s may only be on specific site
4. Templates
    1. Create `templates/_sections/indexes/entry.twig` containing `{% include '_sections/indexes/' ~ entry.type.handle ~ '.twig' %}`
    2. Move all templates of singles into indexes directory and rename each template to the handle of the entry type it is used for
    3. Check the single templates for extends/includes query that use `..` in path and may now be incorrect
    4. Search project for usage of section handles of singles in queries. Replace these with `section('indexes').type(ENTRY_TYPE_HANDLE)`

### Execute
When ready to deploy to production
1. Create manual backup of production database
2. Run `ddev craft site-module/migrate-singles/set-legacy-uri-format` locally
   1. Deploy these changes first. The site will be broken now.
3. After configuration changes have been deployed, execute the following commands directly on the server
   1. `php craft site-module/migrate-singles/migrate-singles`
   2. `php craft site-module/migrate-singles/migrate-fields`
   3. If Navigation-plugin is used: `php craft site-module/migrate-singles/migrate-nav-nodes`
4. When confirmed everything is working: Delete all old sections of singles

## Notes when updating dependencies

### Storybook

Do NOT manually bump Storybook's version through `pnpm` commands or `package.json` edits.

`pnpm dlx storybook@latest upgrade` will guide you through the process and make the necessary edits to the code if needed.

### React and Webpack

These are solely here for Storybook. Do NOT update these unless Storybook itself has updated React or Webpack.

### Biome, Prettier & Lefthook

If there is a major version upgrade, please consult the release notes on the respective repositories to see if there are any breaking changes.

