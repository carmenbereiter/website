/**
 * JSON-LD strukturierte Daten (schema.org), sprachbewusst aufgebaut.
 *
 * Die Origin kommt aus `Astro.site` (astro.config.mjs) und wird von den Views
 * an die Builder übergeben — nicht hartkodiert.
 *
 * Bewusste Entscheidung: KEIN `aggregateRating` / `reviewRating`.
 * Die Stimmen auf der Seite sind echte Empfehlungen, aber ohne nummerische
 * Sternebewertung. Erfundene Sterne würden gegen Googles Rich-Result-Richtlinien
 * verstoßen. Sobald eine echte Bewertungsquelle existiert (z.B. Google-Rezensionen),
 * kann hier `aggregateRating` ergänzt werden.
 */
import { site, contact, legal } from '../config';
import {
  useTranslations,
  getPrograms,
  getTestimonials,
  localizedPath,
  type Lang,
} from '../i18n';

/** Fallback, falls Astro.site (wider Erwarten) nicht gesetzt ist. */
const FALLBACK_ORIGIN = 'https://carmen-bereiter.pages.dev';

/**
 * Erzeugt die sprachabhängigen JSON-LD-Helfer für eine konkrete Origin.
 * `origin` ist typischerweise `Astro.site` (URL aus astro.config.mjs).
 */
function builders(origin: URL | undefined) {
  const base = origin ?? new URL(FALLBACK_ORIGIN);
  const abs = (path: string) => new URL(path, base).href;

  const BUSINESS_ID = abs('/#business');
  const PERSON_ID = abs('/#carmen');
  const WEBSITE_ID = abs('/#website');

  const reviewNodes = (lang: Lang) =>
    getTestimonials(lang).map((t) => ({
      '@type': 'Review',
      author: { '@type': 'Person', name: t.name },
      reviewBody: t.quote,
      ...(t.highlight ? { name: t.highlight } : {}),
    }));

  const offerNodes = (lang: Lang) => {
    const t = useTranslations(lang);
    return getPrograms(lang).map((p) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: `${p.eyebrow} — ${p.title}`,
        serviceType: t.site.role,
        description: p.short,
        provider: { '@id': BUSINESS_ID },
        areaServed: ['Online', 'Gran Canaria'],
      },
    }));
  };

  type BusinessOpts = { withOffers?: boolean; withReviews?: boolean };

  const businessNode = (lang: Lang, opts: BusinessOpts = {}) => {
    const t = useTranslations(lang);
    return {
      '@type': 'ProfessionalService',
      '@id': BUSINESS_ID,
      name: site.name,
      description: t.site.description,
      url: abs(localizedPath('home', lang)),
      image: abs('/og-image.jpg'),
      telephone: legal.telefono,
      email: contact.email,
      priceRange: '€€€',
      knowsLanguage: ['de', 'en', 'es'],
      areaServed: [
        'Gran Canaria',
        'Online',
        'Deutschland',
        'Österreich',
        'Schweiz',
      ],
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Las Palmas de Gran Canaria',
        addressRegion: 'Las Palmas',
        postalCode: '35009',
        addressCountry: 'ES',
      },
      sameAs: [contact.telegram.url],
      founder: { '@id': PERSON_ID },
      ...(opts.withOffers ? { makesOffer: offerNodes(lang) } : {}),
      ...(opts.withReviews ? { review: reviewNodes(lang) } : {}),
    };
  };

  const personNode = (lang: Lang, detailed = false) => {
    const t = useTranslations(lang);
    return {
      '@type': 'Person',
      '@id': PERSON_ID,
      name: site.name,
      jobTitle: t.site.role,
      image: abs('/images/DSC_6300-14.13.23-scaled.webp'),
      url: abs(localizedPath('about', lang)),
      worksFor: { '@id': BUSINESS_ID },
      knowsLanguage: ['de', 'en', 'es'],
      ...(detailed
        ? {
            description: t.pages.about.hero.body,
            knowsAbout: [
              'Coaching',
              'Mentoring',
              'Leadership',
              'Persönlichkeitsentwicklung',
            ],
          }
        : {}),
    };
  };

  const websiteNode = (lang: Lang) => {
    const t = useTranslations(lang);
    return {
      '@type': 'WebSite',
      '@id': WEBSITE_ID,
      url: abs(localizedPath('home', lang)),
      name: site.name,
      inLanguage: t.meta.htmlLang,
      publisher: { '@id': BUSINESS_ID },
    };
  };

  const graph = (nodes: object[]) => ({
    '@context': 'https://schema.org',
    '@graph': nodes,
  });

  return { businessNode, personNode, websiteNode, graph };
}

export function homeJsonLd(lang: Lang, origin?: URL) {
  const b = builders(origin);
  return b.graph([
    b.businessNode(lang, { withOffers: true, withReviews: true }),
    b.personNode(lang),
    b.websiteNode(lang),
  ]);
}

export function aboutJsonLd(lang: Lang, origin?: URL) {
  const b = builders(origin);
  return b.graph([b.personNode(lang, true), b.businessNode(lang)]);
}

export function referencesJsonLd(lang: Lang, origin?: URL) {
  const b = builders(origin);
  return b.graph([b.businessNode(lang, { withReviews: true })]);
}

export function contactJsonLd(lang: Lang, origin?: URL) {
  const b = builders(origin);
  return b.graph([b.businessNode(lang), b.personNode(lang)]);
}
