<?php

return [
    // Custom  palettes, fixed options [label, default (boolean), colour (array(colour, customOptions)) ]
    'palettes' => [
        'Blocks' => [
            [
                'label'   => 'White',
                'default' => true,
                'color'   =>  [
                    [
                        'color'             => '#ffffff',
                        'bgColor'           => 'bg-white',
                    ],
                ],
            ],
            [
                'label'   => 'Purple',
                'default' => false,
                'color'   =>  [
                    [
                        'color'             => '#250436',
                        'bgColor'           => 'bg-primary',
                    ],
                ],
            ],
        ],
        'Theme' => [
            [
                'label'   => 'White',
                'default' => true,
                'color'   =>  [
                    [
                        'color'             => '#FFFFFF',
                        'bgColor'           => 'bg-white',
                        'heading'           => 'text-black',
                        'preHeading'        => 'text-primary',
                        'text'              => 'text-black',
                        'prose'             => 'prose',
                        'btnPrimary'        => 'red',
                        'btnSecondary'      => 'black',
                        'btnText'           => 'textBlack',
                    ],
                ],
            ],
            [
                'label'   => 'Red',
                'default' => false,
                'color'   =>  [
                    [
                        'color'             => '#E35E64',
                        'bgColor'           => 'bg-primary',
                        'heading'           => 'text-white',
                        'preHeading'        => 'text-white',
                        'text'              => 'text-white',
                        'prose'             => 'prose-white',
                        'btnPrimary'        => 'white',
                        'btnSecondary'      => 'black',
                        'btnText'           => 'textWhite',
                    ],
                ],
            ],
        ],
    ],
];
