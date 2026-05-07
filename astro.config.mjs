import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  output: 'static',
  build: {
    assets: 'static',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
