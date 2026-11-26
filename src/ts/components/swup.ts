import SwupA11yPlugin from '@swup/a11y-plugin';
import SwupHeadPlugin from '@swup/head-plugin';
import SwupPreloadPlugin from '@swup/preload-plugin';
import SwupProgressPlugin from '@swup/progress-plugin';
import SwupScrollPlugin from '@swup/scroll-plugin';
import Swup from 'swup';

let swup: Swup;

export default function pageTransitions() {
	if (swup) return;

	swup = new Swup({
		containers: ['#header', '#main', '#footer'],
		animationSelector: '#main',
		ignoreVisit: (_url, { el } = {}) => !!el?.closest('[data-no-swup], [data-lightbox]'),
		plugins: [
			new SwupHeadPlugin({
				persistAssets: true,
				persistTags: (el) => el.matches('style[data-vite-dev-id]'),
			}),
			new SwupScrollPlugin({
				animateScroll: { betweenPages: false, samePageWithHash: true, samePage: true },
			}),
			new SwupA11yPlugin(),
			new SwupPreloadPlugin(),
			new SwupProgressPlugin(),
		],
	});
}
