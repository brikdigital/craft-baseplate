<?php

use craft\helpers\App;

return [
    'project' => App::env('MARKER_PROJECT_ID'),
    'enableWidgetFe' => App::env('MARKER_ENABLE_FRONTEND'),
    'enableWidgetCp' => App::env('MARKER_ENABLE_BACKEND'),
    'requireLogin' => false,
    'silent' => false,
    'renderDelay' => 1200,
    'keyboardShortcuts' => false,
    'useNativeScreenshot' => false,
    'extension' => false,
];
