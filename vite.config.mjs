import { defineConfig } from 'vite';
import legacy from '@vitejs/plugin-legacy';
import ViteRestart from 'vite-plugin-restart';
import viteCompression from 'vite-plugin-compression';
import { ViteFaviconsPlugin } from 'vite-plugin-favicon2';
import manifestSRI from 'vite-plugin-manifest-sri';
import path from 'path';

import PluginCritical from 'rollup-plugin-critical';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  base: command === 'serve' ? '' : '/dist/',
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    manifest: true,
    sourcemap: false,
    outDir: path.resolve(__dirname, 'public_html/dist/'),
    rollupOptions: {
      input: {
        app: path.resolve(__dirname, 'src/js/app.js'),
      },
    },
  },
  publicDir: path.resolve(__dirname, './src/public'),
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@css': path.resolve(__dirname, 'src/pcss'),
      '@js': path.resolve(__dirname, 'src/js'),
    },
  },
  server: {
    host: '0.0.0.0',
    port: 3000,
    strictPort: true,
  },
  plugins: [
    PluginCritical({
      criticalUrl: 'https://craft-baseplate.ddev.site',
      criticalBase: './public_html/dist/critical/',
      criticalPages: [{ uri: '/', template: 'index' }],
      criticalConfig: {},
    }),
    // ViteFaviconsPlugin({
    //   logo: "./src/img/favicon-src.png",
    //   favicons: {
    //     // theme_color: '#000000',
    //   },
    //   inject: false,
    //   outputPath: 'favicons',
    // }),
    legacy({
      targets: ['defaults', 'not IE 11'],
    }),
    manifestSRI(),
    viteCompression({
      filter: /\.(js|mjs|json|css|map)$/i,
    }),
    ViteRestart({
      reload: ['templates/**/*'],
    }),
  ],
}));
