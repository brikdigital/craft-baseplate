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
        'fillInterval' => '500',
        'fillTransforms' => true,
        'imgixConfig' => [
            'default' => [
                'domain' => App::env('IMGIX_DOMAIN'),
                'useHttps' => true,
                'signKey' => App::env('IMGIX_SIGNKEY'),
                'addPath' => [
                    'images' => 'images',
                    'files' => 'files',
                ],
                'sourceIsWebProxy' => false,
                'useCloudSourcePath' => false,
                'getExternalImageDimensions' => true,
                'defaultParams' => ['auto'=>'compress,format', 'q'=>70],
            ],
            'live' => [
                'domain' => App::env('IMGIX_DOMAIN'),
                'useHttps' => true,
                'signKey' => App::env('IMGIX_SIGNKEY'),
                'addPath' => [
                    'images' => 'images',
                    'files' => 'files',
                ],
                'sourceIsWebProxy' => false,
                'useCloudSourcePath' => false,
                'getExternalImageDimensions' => true,
                'defaultParams' => ['auto'=>'compress,format', 'q'=>70],
            ]
        ],
        'imgixApiKey' => App::env('IMGIX_APIKEY'),
    ],
    'dev' => [
        'transformer' => 'craft',
        // 'imgixProfile' => 'live',
        'fillTransforms' => false
    ],
    // Staging environment settings
    'staging' => [
        'transformer' => 'imgix',
        'imgixProfile' => 'live'
    ],

    // Production environment settings
    'production' => [
        'transformer' => 'imgix',
        'imgixProfile' => 'live'
    ],
];