import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

export default function swiper() {
	let sliders = document.querySelectorAll('[data-swiper]') as NodeListOf<HTMLElement>;

	sliders.forEach((slider, _index) => {
		let slides = slider.querySelectorAll('.swiper-slide');
		// we can be certain this is present, otherwise this module wouldn't be called
		let sliderData = JSON.parse(slider.dataset.swiper!);
		let buttonNext = slider.querySelector('.button-next');
		let buttonPrev = slider.querySelector('.button-prev');
		let pagination = slider.querySelector('.swiper-pagination');
		let defaultOptions = {
			slidesPerView: 1.2,
			spaceBetween: 12,
			initialSlide: 0,
			grabCursor: true,
			centeredSlides: false,
			loop: false,
			navigation: {
				nextEl: buttonNext,
				prevEl: buttonPrev,
				disabledClass: 'opacity-50',
			},
			pagination: {
				el: pagination,
				clickable: true,
			},
		};

		let typeOptions = {};
		switch (sliderData.type) {
			case 'fullWidth':
				typeOptions = {
					spaceBetween: 0,
					slidesPerView: 1,
				};
				break;
			case 'cards':
				typeOptions = {
					spaceBetween: 16,
					slidesPerView: 1.2,
					// centeredSlides: false,
					breakpoints: {
						768: {
							slidesPerView: 1.8,
							// centeredSlides: true,
						},
						1024: {
							slidesPerView: 2.6,
							// centeredSlides: true,
						},
						1280: {
							slidesPerView: 3.4,
							// centeredSlides: true,
						},
						// 1440: {
						//   slidesPerView: 3.2,
						//   // centeredSlides: true,
						// },
						// 1600: {
						//   slidesPerView: 5,
						//   // centeredSlides: true,
						// },
					},
				};
				break;
		}

		let options = {
			...{
				...defaultOptions,
				...typeOptions,
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

		new Swiper(slider, options);

		// TODO: change these when implementing a regular slider component
		// let additionalButtonNext = slider.closest('section')!.querySelectorAll('.mobile-button-next');
		// let additionalButtonPrev = slider.closest('section')!.querySelectorAll('.mobile-button-prev');

		// additionalButtonNext.forEach((button) => {
		//   button.addEventListener('click', () => swiper.slideNext());
		// });

		// additionalButtonPrev.forEach((button) => {
		//   button.addEventListener('click', () => swiper.slidePrev());
		// });
	});
}
