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
                'sourceName' => 'cda',
                'signToken' => 'f560e1822bc59aaa732c9f8b66fc665cda25e3d8c3ac32b9299cf8273fe3dff4',
                'useCloudSourcePath' => true,
            ]
        ],
        'defaultProfile' => 'default'
    ],
];