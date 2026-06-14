// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
// Déploiement GitHub Pages : https://jorisvilardell.github.io/insertion-pro/
export default defineConfig({
  site: 'https://jorisvilardell.github.io',
  base: '/insertion-pro',
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
});
