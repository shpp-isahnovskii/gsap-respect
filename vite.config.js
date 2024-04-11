import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

const ASSET_URL = process.env.NODE_ENV ===  'development' ? '/' : `/gsap-respect/`;

// https://vitejs.dev/config/
export default defineConfig({
  base: ASSET_URL,
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    port: 3000,
  },
});
