// import GLightbox from 'glightbox';

export default async function lazysizes() {
	const { default: GLightbox } = await import('glightbox');
	await import('glightbox/dist/css/glightbox.css');

	const lightboxOnPage = document.querySelectorAll('.glightbox');

	if (lightboxOnPage.length > 0) {
		GLightbox({
			touchNavigation: true,
			loop: true,
		});
	}

	const lightboxVideoOnPage = document.querySelectorAll('.video-popup');

	if (lightboxVideoOnPage.length > 0) {
		GLightbox({
			selector: '.video-popup',
			touchNavigation: true,
			loop: false,
			autoplayVideos: true,
			autofocusVideos: true,
		});
	}
}
