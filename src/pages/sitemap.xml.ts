import type { APIRoute } from 'astro';
import { routes, langCodes, localizedPath, getAlternates } from '../i18n';

/**
 * Sitemap zur Build-Zeit erzeugt — kennt die lokalisierten Slugs aus der
 * `routes`-Map und setzt für jede Seite korrekte hreflang-Alternates
 * (inkl. x-default). Origin kommt aus `site` (astro.config.mjs).
 *
 * Bewusst eigener Endpoint statt @astrojs/sitemap: dessen i18n-Verlinkung setzt
 * identische Slugs je Sprache voraus, was hier nicht gilt.
 */
const trail = (p: string) => (p === '/' || p.endsWith('/') ? p : `${p}/`);

export const GET: APIRoute = ({ site }) => {
  const abs = (p: string) => new URL(p, site).href;
  const urls: string[] = [];

  // Lokalisierte Seiten: je Route eine URL pro Sprache, mit Alternates.
  (Object.keys(routes) as (keyof typeof routes)[]).forEach((key) => {
    const links = getAlternates(key)
      .map(
        (a) =>
          `<xhtml:link rel="alternate" hreflang="${a.hreflang}" href="${abs(a.path)}"/>`,
      )
      .join('');
    langCodes.forEach((lang) => {
      const loc = abs(trail(localizedPath(key, lang)));
      urls.push(`<url><loc>${loc}</loc>${links}</url>`);
    });
  });

  // Rechtstexte: nur unter der Wurzel (Spanisch), ohne Alternates.
  ['/aviso-legal/', '/politica-de-privacidad/'].forEach((p) => {
    urls.push(`<url><loc>${abs(p)}</loc></url>`);
  });

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join('\n')}
</urlset>
`;

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
