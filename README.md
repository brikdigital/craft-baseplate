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

## Notes when updating dependencies

### Storybook

Do NOT manually bump Storybook's version through `pnpm` commands or `package.json` edits.

`pnpm dlx storybook@latest upgrade` will guide you through the process and make the necessary edits to the code if needed.

### React and Webpack

These are solely here for Storybook. Do NOT update these unless Storybook itself has updated React or Webpack.

### Biome, Prettier & Lefthook

If there is a major version upgrade, please consult the release notes on the respective repositories to see if there are any breaking changes.

