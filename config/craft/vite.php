<?php

use CraftCms\Aliases\Aliases;
use CraftCms\Cms\Support\Env;

return [
    'useDevServer' => Env::get('CRAFT_ENVIRONMENT') == 'dev' ? true : false,
    'checkDevServer' => true,
    'devServerInternal' => 'http://localhost:3000',
    'devServerPublic' => Aliases::get('@web') . ':3000',
    'errorEntry' => 'src/js/app.js',
    'manifestPath' => Aliases::get('@webroot') . '/dist/.vite/manifest.json',
    'serverPublic' => '/dist/',

    /**
     * @var string File system path (or URL) to where the Critical CSS files are stored
     */
    'criticalPath' => '@webroot/dist/critical',

    /**
     * @var string the suffix added to the name of the currently rendering template for the critical css file name
     */
    'criticalSuffix' =>'_critical.min.css',
];
