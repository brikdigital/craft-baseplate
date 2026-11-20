import Alpine from 'alpinejs';

declare global {
	interface Window {
		Alpine: typeof Alpine;
	}
}

export default function alpine() {
	loadModules().then(() => {
		window.Alpine = Alpine;
		Alpine.start();
	});
}

async function loadModules() {
	const modules = import.meta.glob('../alpine/*.ts');
	for (const mod of Object.entries(modules)) {
		await mod[1]();
	}
}
