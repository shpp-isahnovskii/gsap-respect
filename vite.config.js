import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { compression } from 'vite-plugin-compression2';
import { analyzer } from 'vite-bundle-analyzer';

const ASSET_URL = process.env.NODE_ENV === 'development' ? '/' : `/gsap-respect/`;

// https://vitejs.dev/config/
export default defineConfig({
  base: ASSET_URL,
  plugins: [vue(), compression(), analyzer({analyzerMode: 'server', analyzerPort: '8888'})],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    port: 3000,
  },
});
