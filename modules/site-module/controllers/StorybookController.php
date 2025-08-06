<?php

namespace brikdigital\sitemodule\controllers;

use brikdigital\sitemodule\exceptions\ComponentNotFoundException;
use Craft;
use craft\web\Controller;

class StorybookController extends Controller
{
    public array|bool|int $allowAnonymous = true;
    public $enableCsrfValidation = false;

    public function actionIndex()
    {
        $request = Craft::$app->getRequest();
        $response = Craft::$app->getResponse();
        $response->headers->set('Access-Control-Allow-Origin', '*');

        if ($request->getMethod() === "OPTIONS")
            return $this->returnEarlyForCors();

        $component = $this->getComponent();

        return $component;
    }

    private function getComponent(): string
    {
        $request = Craft::$app->getRequest();
        $filename = $request->get('storyFileName');
        if (!$filename) {
            throw new ComponentNotFoundException("Impossible to find a story with an empty story file name.");
        }
        $filename = str_replace(
            array('./templates', 'stories.json', 'stories.yml', 'stories.ts', 'stories.tsx'),
            array('', 'twig', 'twig', 'twig', 'twig'),
            $filename
        );

        $path = Craft::$app->path->getSiteTemplatesPath() . str_replace('stories.json', 'twig', $filename);
        $component = file_get_contents($path);

        $component = "{% extends \"_layouts/storybook.twig\" %}\n{% set STORYBOOK = true %}\n{% block html %}\n$component\n{% endblock %}";

        return Craft::$app->view->renderString($component, $request->post());
    }

    private function returnEarlyForCors()
    {
        $response = Craft::$app->getResponse();

        $response->headers->set(
            "Access-Control-Allow-Methods",
            "POST, OPTIONS"
        );
        $response->headers->set("Access-Control-Allow-Headers", "Content-Type");
        $response->headers->set("Content-Type", "application/json");

        // for CORS preflight we need to return the request early.
        return $response;
    }
}