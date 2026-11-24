const visible = new WeakMap<HTMLVideoElement, boolean>();
const pausedByUser = new WeakSet<HTMLVideoElement>();
let observer: IntersectionObserver | undefined;

function getObserver() {
	observer ??= new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				const video = entry.target as HTMLVideoElement;
				if (!video.isConnected) {
					observer?.unobserve(video);
					continue;
				}

				visible.set(video, entry.isIntersecting);
				if (entry.isIntersecting) {
					if (video.paused && !pausedByUser.has(video)) video.play().catch(() => {});
				} else if (!video.paused) {
					video.pause();
				}
			}
		},
		{ threshold: 0.25 },
	);
	return observer;
}

export default async function () {
	await import('@videojs/html/ui/container');
	await import('@videojs/html/video/player');
	await import('@videojs/html/ui/poster');
	await import('@videojs/html/ui/play-button');

	if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

	for (const video of document.querySelectorAll<HTMLVideoElement>(
		'video-player video[data-autoplay]',
	)) {
		if (video.dataset.autoplayInit) continue;
		video.dataset.autoplayInit = 'true';

		video.addEventListener('pause', () => {
			if (visible.get(video)) pausedByUser.add(video);
		});
		video.addEventListener('play', () => pausedByUser.delete(video));

		getObserver().observe(video);
	}
}
