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
        'profiles' => [
            'default' => [
                'sourceName' => '...',
                'signToken' => '...',
                'useCloudSourcePath' => true,
            ]
        ],
        'defaultProfile' => 'default'
    ],
];