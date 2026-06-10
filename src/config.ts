/**
 * Sprach-UNABHÄNGIGE Stammdaten der Website.
 * Übersetzbare Texte liegen in src/i18n/ (de.ts / en.ts / es.ts).
 *
 * Hier nur Daten, die in allen Sprachen identisch sind:
 * Kontaktkanäle, Bildpfade, Namen/Orte der Stimmen, Legal-Daten.
 *
 * TODO vor Go-Live ersetzen:
 *  - contact.whatsapp.number  → echte WhatsApp-Nummer (Format: ohne +, z.B. "436641234567")
 *  - legal.nif / direccion / telefono → echte Daten
 */

export const site = {
  name: 'Carmen Bereiter',
  shortName: 'Carmen',
} as const;

export const location = {
  base: 'Gran Canaria',
} as const;

/**
 * Kontaktkanäle (sprachunabhängig).
 * Die vorausgefüllten Nachrichten sind übersetzbar und liegen im i18n-Dictionary.
 */
export const contact = {
  whatsapp: {
    /** Telefonnummer ohne +, Leerzeichen oder Bindestriche. */
    number: '34627631257',
  },
  telegram: {
    handle: 'Carmen_Bereiter',
    url: 'https://t.me/Carmen_Bereiter',
  },
  calendly: {
    url: 'https://calendly.com/deinticketzudeinerklarheit/mentorincarmenbereiter',
  },
  email: 'hola@carmenbereiter.com',
} as const;

/** WhatsApp-Deeplink, optional mit vorausgefülltem Text. */
export const whatsappUrl = (message?: string) => {
  const base = `https://wa.me/${contact.whatsapp.number}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
};

export const telegramUrl = (message?: string) => {
  const base = contact.telegram.url;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
};

/**
 * Programme — sprachunabhängige Teile (Reihenfolge = Reihenfolge auf der Seite).
 * Die übersetzbaren Texte liegen pro Sprache in i18n unter `programs`, ausgerichtet an dieser Reihenfolge via `slug`.
 */
export type ProgramMeta = {
  slug: string;
  image: string;
  /** Fokuspunkt im Bild beim Crop. Default: 'center'. */
  imagePosition?: 'top' | 'center' | 'bottom';
};

export const programMeta: ProgramMeta[] = [
  {
    slug: 'grandios',
    image: '/images/7-Wochen-Coaching_Google-scaled.webp',
    imagePosition: 'top',
  },
  {
    slug: 'unique',
    image: '/images/carmen-bereiter_coaching-mentoring_unique-mentoring.webp',
  },
  {
    slug: 'live-events',
    image: '/images/dive-deep-group-exp-portait-2-Kopie-1024x683.webp',
  },
];

/**
 * Kunden-Stimmen — sprachunabhängige Teile (Name + Ort).
 * Übersetzbare Zitate liegen pro Sprache in i18n unter `testimonials`, ausgerichtet an dieser Reihenfolge.
 */
export type TestimonialMeta = {
  name: string;
  city: string;
};

export const testimonialMeta: TestimonialMeta[] = [
  { name: 'Lena', city: 'München' },
  { name: 'Mira', city: 'Sankt Gallen' },
  { name: 'Sabrina', city: 'Liechtenstein' },
  { name: 'Stefan', city: 'Dornbirn' },
  { name: 'Anna', city: 'Portugal' },
  { name: 'Caithlyn', city: 'München' },
  { name: 'Verena', city: 'Bregenz' },
  { name: 'Ramona', city: 'Tirol' },
  { name: 'Lea Mari', city: 'Zürich' },
  { name: 'Juliet', city: 'Schwyz' },
  { name: 'Jasmijn', city: 'St. Gallen' },
  { name: 'Maria', city: 'Bregenzerwald' },
  { name: 'Laura', city: 'Vorarlberg' },
  { name: 'Amara', city: 'Montreux' },
];

/**
 * Empfehlungen von Persönlichkeiten — sprachunabhängige Teile (Name + Bild).
 * Übersetzbare Rolle + Zitat liegen pro Sprache in i18n unter `endorsements`.
 */
export type EndorsementMeta = {
  name: string;
  image: string;
};

export const endorsementMeta: EndorsementMeta[] = [
  {
    name: 'Dr. Biyon Kattilathu',
    image: '/images/Dr-Biyon-Kattilathu-763x1024-1.webp',
  },
  {
    name: 'Kirsten Bühne',
    image: '/images/CEObabe-12-Kopie.webp',
  },
  {
    name: 'Torben Platzer',
    image: '/images/Torben-Platzer-836x1024-1.webp',
  },
];

/**
 * Datos legales — para Aviso Legal y Política de Privacidad (LSSI-CE + RGPD + LOPDGDD).
 * Sólo en español por requisito legal (empresa con sede en España).
 *
 * TODO vor Go-Live ersetzen: nif, direccion, telefono.
 */
export const legal = {
  titular: 'Carmen Bereiter',
  actividad: 'Coach & Mentora (Autónoma)',
  nif: 'X5832201E',
  direccion: 'Calle Prudencio Morales 73, 35009 Las Palmas de Gran Canaria',
  email: 'hola@carmenbereiter.com',
  telefono: '+34 627 63 12 57',
  fechaActualizacion: '2026-05-26',
  hostingProveedor: '',
} as const;
