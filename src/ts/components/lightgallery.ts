import lightGallery from 'lightgallery';
import lgVideo from 'lightgallery/plugins/video';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-video.css';
import '@css/components/lightgallery.css';

const isEmbed = (url: string) => /youtu\.?be|vimeo\./.test(url);

export default function lightgallery() {
	const links = document.querySelectorAll<HTMLAnchorElement>('[data-lightbox]');

	links.forEach((link) => {
		if (link.dataset.lgInit) return;
		link.dataset.lgInit = 'true';

		const autoplay = link.dataset.autoplay === 'true';
		const poster = autoplay ? undefined : link.dataset.poster;
		const ext = link.pathname.split('.').pop() ?? 'mp4';
		const item = isEmbed(link.href)
			? { src: link.href, poster }
			: {
					poster,
					video: {
						source: [{ src: link.href, type: `video/${ext}` }],
						tracks: [],
						attributes: {
							preload: 'metadata',
							controls: true,
							playsinline: true,
							poster,
						} as unknown as HTMLVideoElement,
					},
				};

		const gallery = lightGallery(link, {
			dynamic: true,
			dynamicEl: [item],
			plugins: [lgVideo],
			licenseKey: import.meta.env.VITE_LIGHTGALLERY_LICENSE_KEY || undefined,
			autoplayFirstVideo: autoplay,
			videoFacade: !autoplay,
			counter: false,
			download: false,
			loop: false,
		});

		link.addEventListener('click', (event) => {
			event.preventDefault();
			gallery.openGallery(0);
		});
	});
}
