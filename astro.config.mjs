// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';

// https://astro.build/config
// Sitemap & robots werden als eigene Endpoints erzeugt
// (src/pages/sitemap.xml.ts, src/pages/robots.txt.ts) — sie kennen die
// lokalisierten Slugs, was @astrojs/sitemap nicht abbilden kann.
export default defineConfig({
  site: 'https://carmenbereiter.com',
  i18n: {
    locales: ['de', 'en', 'es'],
    defaultLocale: 'de',
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [icon()],
  vite: {
    plugins: [tailwindcss()],
  },
});
