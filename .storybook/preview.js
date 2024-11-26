/**
 * Majority of this module is courtesy of storybook-drupal-addon
 * @see https://github.com/Lullabot/storybook-drupal-addon/blob/main/src/fetchStoryHtml.ts
 */

import twig from 'react-syntax-highlighter/dist/esm/languages/prism/twig';
import { SyntaxHighlighter } from '@storybook/components';

SyntaxHighlighter.registerLanguage('twig', twig);

/** @type {import('@storybook/server').Preview} */
const preview = {
  parameters: {
    controls: {
      disableSaveFromUI: true,
    },
    server: {
      url: `${window.location.protocol}//${window.location.hostname}`,
      fetchStoryHtml,
    },
    marker: {
      project: '',
      mode: 'advanced',
    },
  },

  tags: ['autodocs'],
};
export default preview;

/**
 * @typedef {object} StorybookContext
 *
 * @property {Record<string, unknown>} args
 * @property {{
 *   options: {
 *     variant: string
 *   },
 *   fileName: string,
 * }} parameters
 */

/**
 * @param {Document} htmlDoc
 * @returns {HTMLElement}
 */
function createNewBody(htmlDoc) {
  console.log(htmlDoc);
  const main = htmlDoc.getElementById('main');
  const scripts = htmlDoc.getElementsByTagName('script');
  const newBody = htmlDoc.createElement('body');

  htmlDoc.body.getAttributeNames().forEach((attr) => {
    newBody.setAttribute(attr, htmlDoc.body.getAttribute(attr));
  });
  newBody.innerHTML = main.innerHTML;

  const footerScripts = htmlDoc.createElement('div');
  footerScripts.append(...Array.from(scripts));
  newBody.append(footerScripts);

  return newBody;
}

/**
 * @param {string} url
 * @param {string} path
 * @param {Record<string, unknown>} params
 * @param {StorybookContext} context
 */
async function fetchStoryHtml(url, path, params, context) {
  url = url.replace(/\/$/, '');

  const variant = context.parameters?.options?.variant;

  const fetchUrl = new URL(`${url}/actions/site-module/storybook`);
  const init = {
    storyFileName: context.parameters.fileName,
  };
  if (variant) {
    init.variant = variant;
  }
  fetchUrl.search = new URLSearchParams(init).toString();

  fetchUrl.username = '';
  fetchUrl.password = '';

  const response = await fetch(fetchUrl.toString(), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(params),
  });
  const htmlContents = await response.text();

  if (response.status >= 399) {
    const statusText = `${response.status} (${response.statusText})`;
    let headersText = '';
    response.headers.forEach((value, key) => {
      headersText += `${key}: ${value}\n`;
    });
    const requestedUrl = response.url;
    throw new Error(
      `There was an error while making the request to Craft. Locate the request in the Network tab of your browser's developer tools for more information.\nRequested URL: ${requestedUrl}\nResponse code: ${statusText}\nResponse Headers:\n${headersText}\nResponse body: ${htmlContents}.`,
    );
  }

  try {
    const parser = new DOMParser();
    const htmlDoc = parser.parseFromString(htmlContents, 'text/html');
    htmlDoc.body = createNewBody(htmlDoc);
    return htmlDoc.children[0].outerHTML;
  } catch (e) {
    console.error(e);
    throw e;
  }
}
