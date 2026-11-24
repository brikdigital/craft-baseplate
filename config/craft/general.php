<?php
/**
 * General Configuration
 *
 * All of your system's general configuration settings go in here. You can see a
 * list of the available settings in vendor/craftcms/cms/src/config/GeneralConfig.php.
 *
 * @see \CraftCms\Cms\Config\GeneralConfig
 * @link https://craftcms.com/docs/5.x/reference/config/general.html
 */

use CraftCms\Cms\Config\GeneralConfig;

return GeneralConfig::create()
    ->allowedFileExtensions(['jpg', 'png', 'jpeg', 'webp', 'gif', 'svg', 'mp4', 'wov', 'mp3', 'wav', 'pdf', 'zip', 'csv', 'rar'])
    ->maxUploadFileSize('256M')
    ->extraAllowedFileExtensions(['json'])
//    ->userSessionDuration(30*(24*60*60))
    ->defaultWeekStartDay(1)
    ->preloadSingles()
    ->preventUserEnumeration()
    ->enableGql(false)
    ->defaultSearchTermOptions(['subLeft' => true, 'subRight' => true])
//    ->errorTemplatePrefix('errors/')
    ->timezone('Europe/Amsterdam')
    ->defaultCountryCode('NL')
//    ->defaultCpLanguage('nl-NL') // this causes an exception?
    ->defaultCpLocale('nl-NL')
//    ->omitScriptNameInUrls(true)
//    ->usePathInfo(true)
    ->sendPoweredByHeader(false)
    ->cpTrigger(env('CP_TRIGGER', 'brikcp'))
    ->baseCpUrl(env('CRAFT_BASE_CP_URL'))
    ->runQueueAutomatically(false)
    ->maxRevisions(5)
    ->maxBackups(2)
//    ->asyncCsrfInputs()
//    ->generateTransformsBeforePageLoad()
    ->loginPath(false)
    ->aliases([
        '@webroot' => public_path(),
    ])
;
