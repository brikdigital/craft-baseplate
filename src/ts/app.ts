import '@css/app.pcss';
import ComponentLoader, { Component } from './loader';

const componentLoader = new ComponentLoader();
const components: Component[] = [
  {
    name: 'lazysizes',
    selector: '.lazyload',
  },
  {
    name: 'swiper',
    selector: '[data-swiper]',
  },
  {
    name: 'vidstack',
    selector: 'media-player',
  },
  {
    name: 'glightbox',
    selector: '.video-popup, .glightbox',
  },
];

for (let component of components) {
  componentLoader.loadComponent(component.name, component.selector, component.plugins ?? []);
}

// @ts-expect-error apparently import.meta is not supported in es2023?
if (import.meta.hot) {
  // @ts-expect-error apparently import.meta is not supported in es2023?
  import.meta.hot.accept();
}
