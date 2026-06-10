import type { APIRoute } from 'astro';

/**
 * robots.txt zur Build-Zeit erzeugt — die Sitemap-URL kommt aus `site`
 * (astro.config.mjs), nicht hartkodiert.
 */
export const GET: APIRoute = ({ site }) => {
  const sitemap = new URL('sitemap-index.xml', site).href;
  const body = `User-agent: *
Allow: /

Sitemap: ${sitemap}
`;
  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
