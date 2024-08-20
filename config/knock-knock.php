<?php

use craft\helpers\App;

return [
    '*' => [
        'enabled' => false,
        'loginPath' => 'knock-knock/who-is-there',
        'template' => '',
        'forcedRedirect' => '',
        'password' => App::env('KNOCK_KNOCK_PASS'),
        'siteSettings' => [],

        'checkInvalidLogins' => false,
        'invalidLoginWindowDuration' => '3600',
        'maxInvalidLogins' => 10,
        'allowIps' => [],
        'denyIps' => '',
        'useRemoteIp' => false,

        'protectedUrls' => '',
        'unprotectedUrls' => ['/actions/_statuspaginator/(.*)'],
    ],
    'staging' => [
        'enabled' => true,
    ],
];
