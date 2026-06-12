/**
 * i18n-Kern: Sprachen, Dictionaries, Helfer.
 *
 * Standardsprache Deutsch wird ohne Präfix unter `/` ausgeliefert,
 * Englisch unter `/en/…`, Spanisch unter `/es/…` (siehe astro.config.mjs).
 */
import { de } from './de';
import { en } from './en';
import { es } from './es';
import { programMeta, testimonialMeta, endorsementMeta } from '../config';

export const languages = {
  de: 'Deutsch',
  en: 'English',
  es: 'Español',
} as const;

export type Lang = keyof typeof languages;
export const langCodes = Object.keys(languages) as Lang[];
export const defaultLang: Lang = 'de';

/** Form des Dictionaries — Deutsch ist die kanonische Quelle. */
export type Dictionary = typeof de;

const dictionaries: Record<Lang, Dictionary> = { de, en, es };

/** Übersetzungs-Dictionary für eine Sprache. */
export function useTranslations(lang: Lang): Dictionary {
  return dictionaries[lang] ?? dictionaries[defaultLang];
}

/** Aktuelle Sprache aus Astro ermitteln (Fallback: Standardsprache). */
export function getLang(currentLocale: string | undefined): Lang {
  return (currentLocale && currentLocale in languages
    ? currentLocale
    : defaultLang) as Lang;
}

/**
 * Routen-Definition: pro Seiten-Key der lokalisierte Slug (OHNE Sprachpräfix) je Sprache.
 * Die physischen Dateien unter src/pages/<lang>/ müssen zu diesen Slugs passen.
 */
export const routes = {
  home: { de: '/', en: '/', es: '/' },
  about: { de: '/ueber-mich', en: '/about', es: '/sobre-mi' },
  references: { de: '/referenzen', en: '/testimonials', es: '/referencias' },
  contact: { de: '/kontakt', en: '/contact', es: '/contacto' },
} as const;

export type RouteKey = keyof typeof routes;

/**
 * Rechtstext-Seiten: pro Key der vollständige Pfad je Sprache.
 * Die spanische Fassung ist rechtlich maßgeblich (Sitz in Spanien) und liegt
 * an der Wurzel; DE/EN sind Übersetzungen. Bewusst NICHT Teil von `routes`
 * (keine Navigation, keine hreflang-Alternates, nicht in der Sitemap).
 */
export const legalRoutes = {
  notice: { de: '/impressum', en: '/en/legal-notice', es: '/aviso-legal' },
  privacy: {
    de: '/datenschutz',
    en: '/en/privacy-policy',
    es: '/politica-de-privacidad',
  },
} as const;

export type LegalKey = keyof typeof legalRoutes;

/** Aus einer URL den passenden Rechtstext-Key ermitteln (oder null). */
export function matchLegal(pathname: string): LegalKey | null {
  const p = pathname.length > 1 ? pathname.replace(/\/$/, '') : pathname;
  const keys = Object.keys(legalRoutes) as LegalKey[];
  return (
    keys.find((k) => langCodes.some((l) => legalRoutes[k][l] === p)) ?? null
  );
}

/** Sprachumschalter-Links für eine Rechtstext-Seite. */
export function getLegalSwitch(key: LegalKey, current: Lang) {
  return langCodes.map((lang) => ({
    lang,
    label: languages[lang],
    href: legalRoutes[key][lang],
    isCurrent: lang === current,
  }));
}

/** Reihenfolge + Label-Key der Hauptnavigation. */
const navOrder: { route: RouteKey; labelKey: keyof Dictionary['nav'] }[] = [
  { route: 'home', labelKey: 'start' },
  { route: 'about', labelKey: 'about' },
  { route: 'references', labelKey: 'references' },
  { route: 'contact', labelKey: 'contact' },
];

/** Vollständiger Pfad (inkl. Sprachpräfix) für eine Route in einer Sprache. */
export function localizedPath(key: RouteKey, lang: Lang): string {
  const slug = routes[key][lang];
  if (lang === defaultLang) return slug;
  return slug === '/' ? `/${lang}` : `/${lang}${slug}`;
}

/**
 * Aus einer tatsächlichen URL den passenden Route-Key ermitteln
 * (für Sprachumschalter & Alternates). Fallback: 'home'.
 */
export function matchRoute(pathname: string, lang: Lang): RouteKey {
  // Sprachpräfix entfernen + abschließenden Slash normalisieren
  let p = pathname.length > 1 ? pathname.replace(/\/$/, '') : pathname;
  if (lang !== defaultLang) {
    const prefix = `/${lang}`;
    if (p === prefix) p = '/';
    else if (p.startsWith(`${prefix}/`)) p = p.slice(prefix.length);
  }
  const slug = p || '/';
  const keys = Object.keys(routes) as RouteKey[];
  return keys.find((k) => routes[k][lang] === slug) ?? 'home';
}

/** Sprachumschalter-Links für eine Route. */
export function getLangSwitch(key: RouteKey, current: Lang) {
  return langCodes.map((lang) => ({
    lang,
    label: languages[lang],
    href: localizedPath(key, lang),
    isCurrent: lang === current,
  }));
}

/** Abschließenden Slash sicherstellen (passt zu Astros Verzeichnis-Output / Canonical). */
function withTrailingSlash(p: string): string {
  if (p === '/') return p;
  return p.endsWith('/') ? p : `${p}/`;
}

/** hreflang-Alternates für eine Route (alle Sprachen + x-default). */
export function getAlternates(key: RouteKey) {
  const alternates: { hreflang: string; path: string }[] = langCodes.map(
    (lang) => ({
      hreflang: lang,
      path: withTrailingSlash(localizedPath(key, lang)),
    }),
  );
  // x-default zeigt auf die Standardsprache
  alternates.push({
    hreflang: 'x-default',
    path: withTrailingSlash(localizedPath('home', defaultLang)),
  });
  return alternates;
}

/** Navigation mit übersetzten Labels und sprachspezifischen Pfaden. */
export function getNav(lang: Lang) {
  const t = useTranslations(lang);
  return navOrder.map((item) => ({
    href: localizedPath(item.route, lang),
    label: t.nav[item.labelKey],
  }));
}

/**
 * Voll zusammengesetzte Programme für eine Sprache
 * (sprachunabhängige Bild-/Slug-Daten + übersetzte Texte).
 */
export function getPrograms(lang: Lang) {
  const t = useTranslations(lang);
  return programMeta.map((meta, i) => ({ ...meta, ...t.programs[i] }));
}

export type Program = ReturnType<typeof getPrograms>[number];

/** Voll zusammengesetzte Kunden-Stimmen für eine Sprache. */
export function getTestimonials(lang: Lang) {
  const t = useTranslations(lang);
  return testimonialMeta.map((meta, i) => ({ ...meta, ...t.testimonials[i] }));
}

export type Testimonial = ReturnType<typeof getTestimonials>[number];

/** Voll zusammengesetzte Empfehlungen für eine Sprache. */
export function getEndorsements(lang: Lang) {
  const t = useTranslations(lang);
  return endorsementMeta.map((meta, i) => ({ ...meta, ...t.endorsements[i] }));
}

export type Endorsement = ReturnType<typeof getEndorsements>[number];
