import '@css/app.pcss';
import ComponentLoader, { Component } from './loader';

const componentLoader = new ComponentLoader();
const components: Component[] = [
  {
    name: 'skipToContent',
    selector: '#skipToContent',
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
    name: 'vidstack',
    selector: 'media-player',
  },
  {
    name: 'glightbox',
    selector: '.video-popup, .glightbox',
  },
  {
    name: 'alpine',
    selector: '[data-alpine]',
  },
];

for (let component of components) {
  componentLoader.loadComponent(component.name, component.selector, component.plugins ?? []);
}

if (import.meta.hot) {
  import.meta.hot.accept();
}
