import path from 'path';

import { defineConfig } from 'vite';
import restart from 'vite-plugin-restart';
import { compression, defineAlgorithm } from 'vite-plugin-compression2';
import { ViteFaviconsPlugin as favicons } from 'vite-plugin-favicon2';
import critical from 'rollup-plugin-critical';
import Inspect from 'vite-plugin-inspect';

import inlineSVG from 'postcss-inline-svg';
import pxtorem from 'postcss-pxtorem';
import tailwindcss from '@tailwindcss/postcss';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
	base: command === 'serve' ? '' : '/dist/',
	publicDir: path.resolve(__dirname, './src/public'),
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src'),
			'@css': path.resolve(__dirname, 'src/pcss'),
			'@ts': path.resolve(__dirname, 'src/ts'),
		},
	},

	build: {
		target: 'es2023',
		commonjsOptions: {
			transformMixedEsModules: true,
		},
		manifest: true,
		sourcemap: false,
		outDir: path.resolve(__dirname, 'public_html/dist/'),
		rollupOptions: {
			input: {
				app: path.resolve(__dirname, 'src/ts/app.ts'),
			},
		},
	},

	css: {
		postcss: {
			plugins: [inlineSVG, pxtorem, tailwindcss],
		},
	},

	plugins: [
		Inspect(),
		// We don't need Critical CSS locally
		...(process.env.BUDDY === true || process.env.BUDDY === 'true'
			? [
					critical({
						criticalUrl: 'https://craft-baseplate.ddev.site',
						criticalBase: './public_html/dist/critical/',
						criticalPages: [{ uri: '/', template: 'index' }],
						criticalConfig: {},
					}),
				]
			: []),
		favicons({
			logo: './src/img/favicon/favicon-src.svg',
			inject: false,
			outputPath: 'favicons',
		}),
		compression({
			include: /\.(js|mjs|json|css|map)/i,
			algorithms: ['gzip', 'brotliCompress'],
		}),
		restart({
			reload: ['templates/**/*'],
		}),
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
