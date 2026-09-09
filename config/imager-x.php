<?php
/**
 * General Configuration
 *
 * All of your system's general configuration settings go in here. You can see a
 * list of the available settings in vendor/craftcms/cms/src/config/GeneralConfig.php.
 *
 * @see craft\config\GeneralConfig
 */

use craft\helpers\App;

return [
    // Global settings
    '*' => [
        'cacheDuration' => '31536000',
        'fillTransforms' => 'auto',
        'autoFillCount' => 'auto',
        'removeTransformsOnAssetFileops' => true, // Required for proper Gumlet purging
    ],
    'dev' => [
        'transformer' => 'craft',
        'imagerUrl' => App::env('IMGIX_DEV_URL')
    ],
    // Staging environment settings
    'staging' => [
        'transformer' => 'gumlet',
    ],

    // Production environment settings
    'production' => [
        'transformer' => 'gumlet',
    ],
];