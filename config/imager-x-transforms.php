<?php

function getImagePosition($image) {
    if ($image instanceof \craft\elements\Asset) {
        return $image->getFocalPoint();
    }
    return '50% 50%';
}

return [
    'default' => [
        'transforms' => [
            ['width' => 3800],
            ['width' => 1600],
        ],
        'defaults' => [
            'jpegQuality' => 70,
            'position' => static function ($image) {
                return getImagePosition($image);
            }
        ]
    ],
    'icon' => [
        'transforms' => [
            ['width' => 200],
            ['width' => 100],
        ],
        'defaults' => [
            'fillInterval' => '200',
            'position' => static function ($image) {
                return getImagePosition($image);
            }
        ]
    ],
    'hero' => [
        'transforms' => [
            ['width' => 3800],
            ['width' => 1600],
        ],
        'defaults' => [
            'ratio' => 9/4,
            'jpegQuality' => 50,
            'position' => static function ($image) {
                return getImagePosition($image);
            }
        ]
    ],
    'heroMobile' => [
        'transforms' => [
            ['width' => 1400],
            ['width' => 400],
        ],
        'defaults' => [
            'ratio' => 78/115,
            'jpegQuality' => 50,
            'position' => static function ($image) {
                return getImagePosition($image);
            }
        ]
    ],
    'textImage' => [
        'transforms' => [
            ['width' => 3800],
            ['width' => 1600],
        ],
        'defaults' => [
            'jpegQuality' => 70,
            'ratio' => 29/31,
            'position' => static function ($image) {
                return getImagePosition($image);
            }
        ]
    ],
    'aspect-1/1' => [
        'transforms' => [
            ['ratio' => 1/1, 'height' => 1200],
        ],
        'defaults' => [
            'jpegQuality' => 70,
            'position' => static function ($image) {
                return getImagePosition($image);
            }
        ]
    ],
    'aspect-4/3' => [
        'transforms' => [
            ['ratio' => 4/3, 'height' => 1200],
        ],
        'defaults' => [
            'jpegQuality' => 70,
            'position' => static function ($image) {
                return getImagePosition($image);
            }
        ]
    ],
    'aspect-16/9' => [
        'transforms' => [
            ['ratio' => 16/9, 'height' => 1200],
        ],
        'defaults' => [
            'jpegQuality' => 70,
            'position' => static function ($image) {
                return getImagePosition($image);
            }
        ]
    ],
    'aspect-5/2' => [
        'transforms' => [
            ['ratio' => 5/2, 'height' => 1200],
        ],
        'defaults' => [
            'jpegQuality' => 70,
            'position' => static function ($image) {
                return getImagePosition($image);
            }
        ]
    ],
];