import '@css/app.css';
import ComponentLoader, { type Component } from './loader';

const componentLoader = new ComponentLoader();
const components: Component[] = [
	{
		name: 'skipToContent',
		selector: '#skipToContent',
	},
	{
		name: 'swup',
		selector: '#main',
	},
	{
		name: 'lazysizes',
		selector: '.lazyload',
	},
	{
		name: 'swiper',
		selector: '[data-swiper]',
	},
	{
		name: 'videojs',
		selector: 'video-player',
	},
	{
		name: 'lightgallery',
		selector: '[data-lightbox]',
	},
	{
		name: 'alpine',
		selector: '[data-alpine]',
	},
	{
		name: 'datastar',
		selector: '[data-signals], [data-bind]',
	},
	{
		name: 'datastar-inspector',
		selector: 'datastar-inspector',
	},
];

for (const component of components) {
	componentLoader.loadComponent(component.name, component.selector, component.plugins ?? []);
}

if (import.meta.hot) {
	import.meta.hot.accept();
}
