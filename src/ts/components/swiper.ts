// @ts-expect-error jfc, swiper specifies this in its package.json yet tsserver doesn't want to resolve it
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

export default function swiper() {
  let sliders = document.querySelectorAll('[data-swiper]') as NodeListOf<HTMLElement>;

  sliders.forEach((slider, _index) => {
    let slides = slider.querySelectorAll('.swiper-slide');
    let sliderData = JSON.parse(slider.dataset.swiper);

    let buttonNext = slider.querySelector('.button-next');
    let buttonPrev = slider.querySelector('.button-prev');

    let additionalButtonNext = slider.closest('section').querySelectorAll('.mobile-button-next');
    let additionalButtonPrev = slider.closest('section').querySelectorAll('.mobile-button-prev');

    additionalButtonNext.forEach((button) => {
      button.addEventListener('click', () => swiper.slideNext());
    });

    additionalButtonPrev.forEach((button) => {
      button.addEventListener('click', () => swiper.slidePrev());
    });

    let defaultOptions = {
      slidesPerView: 1.2,
      spaceBetween: 12,
      initialSlide: 0,
      grabCursor: true,
      centeredSlides: true,
      loop: true,
      navigation: {
        nextEl: buttonNext,
        prevEl: buttonPrev,
        disabledClass: 'hidden',
      },
    };

    // NOTE: For reference, this line is where you'd construct your `typeOptions`
    //       (e.g. the big switch statement that decides the Swiper type)

    let options = {
      ...{
        ...defaultOptions,
        // ...typeOptions
      },
      ...sliderData,
    };

    if (slides.length <= sliderData.minSlides) {
      options = {
        ...options,
        ...{
          loop: false,
          centeredSlides: false,
        },
      };
    }

    const _swiper = new Swiper(slider, options);
  });
}
