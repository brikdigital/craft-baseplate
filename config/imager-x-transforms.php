<?php

function getImagePosition($image) {
    if ($image instanceof \craft\elements\Asset) {
        return $image->getFocalPoint();
    }
    return '50% 50%';
}

function generateTransforms(
    $name,
    $transforms = [400, 3800],
    $options = []
) {
    return [
        $name => [
            'transforms' => $transforms,
            'defaults' => [
                ...$options,
                'position' => static function ($image) {
                    return getImagePosition($image);
                }
            ]
        ],
        $name . 'Webp' => [
            'transforms' => $name,
            'defaults' => [
                'format' => 'webp'
            ]
        ],
        $name . 'Avif' => [
            'transforms' => $name,
            'defaults' => [
                'format' => 'avif'
            ]
        ]
    ];
}

return [
    ...generateTransforms('default'),
    ...generateTransforms('heroImage', [1600, 3800, 16/9]),
    ...generateTransforms('heroImageMobile', [400, 1400, 1]),
    ...generateTransforms('heroProfile', [1600, 3800, 1]),
    ...generateTransforms('heroProfileMobile', [400, 1400, 39/41]),
    ...generateTransforms('heroImage', [1600, 3800, 9/5]),
    ...generateTransforms('heroImageMobile', [400, 1400, 4/3]),
    ...generateTransforms('newsCard', [1600, 3800, 16/9]),
    ...generateTransforms('newsCardMobile', [400, 1400, 4/3]),
    ...generateTransforms('eventsCard', [1600, 3800, 86/57]),
    ...generateTransforms('eventsCardMobile', [400, 1400, 23/13]),
    ...generateTransforms('icon', [100, 200]),
    ...generateTransforms('aspect-1/1', [400, 3800, 1]),
    ...generateTransforms('aspect-4/3', [400, 3800, 4/3]),
    ...generateTransforms('aspect-16/9', [400, 3800, 16/9]),
    ...generateTransforms('aspect-5/2', [400, 3800, 5/2]),
    ...generateTransforms('aspect-3/4', [400, 3800, 3/4]) ,
    ...generateTransforms('themCardLargeVertical', [1600, 3800, 43/58]),
    ...generateTransforms('themCardLargeVerticalMoble', [400, 1400, 3/2]),
    ...generateTransforms('themeCardLarge', [1600, 3800, 91/57]),
    ...generateTransforms('themeCardLargeMobile', [400, 1400, 3/2]),
    ...generateTransforms('themeCardSmall', [1600, 3800, 44/57]),
];