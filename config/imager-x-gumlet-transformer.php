<?php

use craft\helpers\App;

return [
    'apiKey' => '$GUMLET_API_KEY',
    'autoPurge' => true,
    'profiles' => [
        'default' => [
            'domain' => '$GUMLET_DOMAIN',
            'signKey' => '$GUMLET_SIGN_SECRET',
        ],
    ],
];