import path from 'path';

import { defineConfig } from 'vite';
import restart from 'vite-plugin-restart';
import { compression, defineAlgorithm } from 'vite-plugin-compression2';
import { ViteFaviconsPlugin as favicons } from 'vite-plugin-favicon2';
import critical from 'rollup-plugin-critical';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  base: command === 'serve' ? '' : '/dist/',
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
  publicDir: path.resolve(__dirname, './src/public'),
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@css': path.resolve(__dirname, 'src/pcss'),
      '@ts': path.resolve(__dirname, 'src/ts'),
    },
  },
  server: {
    host: '0.0.0.0',
    port: 3000,
    strictPort: true,
  },
  plugins: [
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
      algorithms: ['gzip', 'brotliCompress', defineAlgorithm('deflate', { level: 9 })],
    }),
    restart({
      reload: ['templates/**/*'],
    }),
  ],
}));
