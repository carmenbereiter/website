// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://carmen-bereiter.pages.dev',
  i18n: {
    locales: ['de', 'en', 'es'],
    defaultLocale: 'de',
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    icon(),
    sitemap({
      i18n: {
        defaultLocale: 'de',
        locales: {
          de: 'de',
          en: 'en',
          es: 'es',
        },
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
