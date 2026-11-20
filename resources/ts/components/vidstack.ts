declare module '*.css';

export default async function () {
	await import('vidstack/player');
	await import('vidstack/player/layouts/default');
	await import('vidstack/player/ui');
	await import('vidstack/player/styles/default/theme.css');
	await import('vidstack/player/styles/default/layouts/video.css');
}
