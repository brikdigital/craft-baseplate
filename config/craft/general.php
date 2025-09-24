<?php
/**
 * General Configuration
 *
 * All of your system's general configuration settings go in here. You can see a
 * list of the available settings in vendor/craftcms/cms/src/config/GeneralConfig.php.
 *
 * @see \craft\config\GeneralConfig
 */

use craft\config\GeneralConfig;
use craft\helpers\App;

return GeneralConfig::create()
    ->securityKey(App::env('CRAFT_SECURITY_KEY'))
    ->allowedFileExtensions(['jpg', 'png', 'jpeg', 'webp', 'gif', 'svg', 'mp4', 'wov', 'mp3', 'wav', 'pdf', 'zip', 'csv', 'rar'])
    ->maxUploadFileSize('256M')
    ->userSessionDuration(30*(24*60*60))
    ->defaultWeekStartDay(1)
    ->preloadSingles()
    ->preventUserEnumeration()
    ->enableGql(false)
    ->defaultSearchTermOptions(['subLeft' => true, 'subRight' => true])
    ->errorTemplatePrefix('errors/')
    ->timezone('Europe/Amsterdam')
    ->usePathInfo(true)
    ->useEmailAsUsername(true)
    ->sendPoweredByHeader(false)
    ->extraAllowedFileExtensions(['json'])
    ->addTrailingSlashesToUrls(true)
    ->cpTrigger(App::env('CP_TRIGGER') ?: 'brikcp')
    ->baseCpUrl(App::env('CRAFT_BASE_CP_URL'))
    ->runQueueAutomatically(false)
    ->maxRevisions(5)
    ->maxBackups(2)
    ->aliases([
        '@web' => rtrim(App::env('PRIMARY_SITE_URL'), '/'),
        '@webroot' => dirname(__DIR__) . '/public_html',
        '@assetsUrl' => App::env('ASSETS_URL'),
        '@cloudfrontUrl' => App::env('CLOUDFRONT_URL'),
    ]);
