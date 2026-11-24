import path from 'path';

import { defineConfig } from 'vite';
import { compression } from 'vite-plugin-compression2';
import { ViteFaviconsPlugin as favicons } from 'vite-plugin-favicon2';
import critical from 'rollup-plugin-critical';
import Inspect from 'vite-plugin-inspect';
import tailwindcss from '@tailwindcss/vite';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
	base: command === 'serve' ? '' : '/dist/',
	publicDir: path.resolve(import.meta.dirname, 'src/public'),
	resolve: {
		alias: {
			'#': path.resolve(import.meta.dirname, 'src'),
			'@css': path.resolve(import.meta.dirname, 'src/styles'),
			'@': path.resolve(import.meta.dirname, 'src/ts'),
		},
	},

	build: {
		target: 'es2025',
		commonjsOptions: {
			transformMixedEsModules: true,
		},
		manifest: true,
		sourcemap: false,
		outDir: path.resolve(import.meta.dirname, 'public_html/dist/'),
		rolldownOptions: {
			input: {
				app: path.resolve(import.meta.dirname, 'src/ts/app.ts'),
			},
		},
	},

	plugins: [
		tailwindcss(),
		Inspect(),
		...(command === 'build'
			? [
					favicons({
						logo: './src/img/favicon/favicon-src.svg',
						inject: false,
						outputPath: 'favicons',
					}),
				]
			: []),
		compression({
			include: /\.(js|mjs|json|css|map)/i,
			algorithms: ['gzip', 'brotliCompress'],
		}),

		// We don't need Critical CSS locally
		...(process.env.BUDDY === 'true'
			? [
					critical({
						criticalUrl: 'https://craft-baseplate.ddev.site',
						criticalBase: './public_html/dist/critical/',
						criticalPages: [{ uri: '/', template: 'index' }],
						criticalConfig: {},
					}),
				]
			: []),

		// Reload the browser when a template changes
		{
			name: 'reload',
			configureServer(server) {
				const { ws, watcher } = server;

				function handleFileChange(file: string) {
					if (file.endsWith('.twig')) {
						ws.send({ type: 'full-reload' });
					}
				}

				watcher.on('add', handleFileChange);
				watcher.on('change', handleFileChange);
				watcher.on('unlink', handleFileChange);
			},
		},
	],

	server: {
		host: '0.0.0.0',
		port: 3000,
		strictPort: true,
		origin: `${process.env.DDEV_PRIMARY_URL}:3000`,
		cors: {
			origin: /https?:\/\/([A-Za-z0-9\-.]+)?(\.ddev\.site)(?::\d+)?$/,
		},
	},
}));
