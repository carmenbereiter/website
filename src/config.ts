/**
 * Zentrale Stammdaten der Website.
 * Hier sind alle Inhalte gepflegt, die regelmäßig gewartet werden:
 * Kontaktdaten, Programme, Testimonials, Empfehlungen.
 *
 * TODO vor Go-Live ersetzen:
 *  - contact.whatsapp.number  → echte WhatsApp-Nummer (Format: ohne +, z.B. "436641234567")
 *  - contact.email            → echte E-Mail
 *  - location.city            → falls abweichend
 */

export const site = {
  name: 'Carmen Bereiter',
  shortName: 'Carmen',
  role: 'Coach & Mentorin',
  tagline: 'Klarheit. Mut. Veränderung, die bleibt.',
  description:
    'Persönliches Coaching & Mentoring mit Herz, Klarheit und höchster Professionalität. Für Menschen, die ihren nächsten Schritt gehen wollen.',
} as const;

export const location = {
  city: 'Gran Canaria & Online',
  base: 'Gran Canaria',
} as const;

/**
 * Kontaktkanäle.
 * Reihenfolge bestimmt die Priorität in der UI.
 */
export const contact = {
  whatsapp: {
    /** Telefonnummer ohne +, Leerzeichen oder Bindestriche. Bsp.: "4366412345678" */
    number: '34627631257',
    /** Vorab ausgefüllter Text */
    defaultMessage:
      'Hallo Carmen, ich habe deine Website gesehen und würde gerne mehr erfahren.',
  },
  telegram: {
    handle: 'Carmen_Bereiter',
    url: 'https://t.me/Carmen_Bereiter',
  },
  calendly: {
    url: 'https://calendly.com/deinticketzudeinerklarheit/mentorincarmenbereiter',
    label: 'Erstgespräch buchen',
  },
  email: 'hola@carmenbereiter.com',
} as const;

/** Aus den Bausteinen oben den fertigen WhatsApp-Link generieren. */
export const whatsappUrl = (message?: string) => {
  const text = encodeURIComponent(message ?? contact.whatsapp.defaultMessage);
  return `https://wa.me/${contact.whatsapp.number}?text=${text}`;
};

export const telegramUrl = (message?: string) => {
  const base = contact.telegram.url;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
};

/**
 * Programme / Angebote.
 * Werden auf der Startseite als Karten gerendert.
 */
export type Program = {
  slug: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  short: string;
  bullets: string[];
  duration: string;
  format: string;
  price: string;
  image: string;
  /** Fokuspunkt im Bild beim Crop. Default: 'center'. Bei Portraits mit Kopf oben: 'top'. */
  imagePosition?: 'top' | 'center' | 'bottom';
  contactMessage: string;
};

export const programs: Program[] = [
  {
    slug: 'grandios',
    eyebrow: 'GRANDIOS',
    title: 'Dein Neustart in 7 Wochen',
    subtitle: '7-Wochen-Coaching · Online',
    short:
      'Ein Raum für dich. Sieben Wochen klar, still, ehrlich. Mit Impulsen, die nicht laut sind, aber wirken.',
    bullets: [
      'Klarheit darüber, wer du bist und was du wirklich willst',
      'Ruhe und Ordnung im Kopf und im Leben',
      'Selbstliebe und Annahme, wie du bist',
      'Stärken erkennen und gezielt einsetzen',
    ],
    duration: '7 Wochen',
    format: 'Online · 1× pro Woche',
    price: 'Auf Anfrage',
    image: '/images/7-Wochen-Coaching_Google-scaled.webp',
    imagePosition: 'top',
    contactMessage:
      'Hallo Carmen, ich interessiere mich für GRANDIOS, das 7-Wochen-Coaching.',
  },
  {
    slug: 'unique',
    eyebrow: 'UNIQUE MENTORING',
    title: 'Exklusive 1:1 Begleitung',
    subtitle: '12 Wochen · Online + optional Gran Canaria',
    short:
      'Ehrlich. Direkt. Persönlich. Wir gehen tief, lösen Blockaden und schaffen deinen Weg, für Veränderung, die wirklich bleibt.',
    bullets: [
      '12 Wochen individuelles Mentoring auf höchstem Niveau',
      'Klarheit, Struktur und Fokus für Beruf und Leben',
      'Optional zubuchbar: zwei intensive 1:1 Tage auf Gran Canaria',
      'Diskret, exklusiv, persönlich',
    ],
    duration: '12 Wochen',
    format: 'Online · optional Vor-Ort',
    price: 'Preis auf Anfrage',
    image: '/images/carmen-bereiter_coaching-mentoring_unique-mentoring.webp',
    contactMessage:
      'Hallo Carmen, ich interessiere mich für die exklusive 1:1 Begleitung (Unique Mentoring).',
  },
  {
    slug: 'live-events',
    eyebrow: 'RENACER',
    title: 'Live-Events',
    subtitle: 'Exklusives Live-Erlebnis · Kleine Gruppe',
    short:
      'Pure Energie, klare Impulse, echter Austausch an inspirierenden Orten.',
    bullets: [
      'Inkl. Verpflegung während den Coaching-Zeiten',
      'Exklusives Mentoring an besonderen Locations',
      'Strategien für sichere Entscheidungen und nächste Schritte',
      'Innere Ruhe, Energie und Fokus, Werkzeuge für den Alltag',
    ],
    duration: '2 - 4 Tage',
    format: 'Vor Ort',
    price: 'Termine auf Anfrage',
    image: '/images/dive-deep-group-exp-portait-2-Kopie-1024x683.webp',
    contactMessage:
      'Hallo Carmen, ich interessiere mich für das Live-Event.',
  },
];

/**
 * Kunden-Stimmen.
 * Auf der Startseite werden die ersten 3 als Auszug gezeigt,
 * alle erscheinen auf /referenzen.
 */
export type Testimonial = {
  name: string;
  city: string;
  quote: string;
  highlight?: string;
};

export const testimonials: Testimonial[] = [
  {
    name: 'Lena',
    city: 'München',
    highlight: 'Eine der besten Coaches Europas',
    quote:
      'Ohne Frage zählt Carmen zu den besten Coaches Europas, das merkt man in jedem Gespräch. Sie hat mir geholfen Blockaden zu lösen, Klarheit zu gewinnen und mutige, zielgerichtete Schritte zu gehen. Ich handle jetzt selbstbewusst und fokussiert, beruflich wie privat.',
  },
  {
    name: 'Mira',
    city: 'Sankt Gallen',
    highlight: 'Klarheit und Mut, wirklich loszugehen',
    quote:
      'Das 7-Wochen-Coaching hat mir nicht nur Klarheit gebracht, sondern auch den Mut, wirklich loszugehen. Ich habe alte Blockaden hinter mir gelassen, meine Prioritäten neu gesetzt und innerhalb kurzer Zeit beruflich wie privat große Schritte gemacht.',
  },
  {
    name: 'Sabrina',
    city: 'Liechtenstein',
    highlight: 'Mein Leben hat sich um 180 Grad gewendet',
    quote:
      'Noch nie habe ich eine Mentorin getroffen, die es so auf den Punkt getroffen hat, wie Carmen. Ich habe schon vieles gebucht, aber das, was ich mit Carmen erlebe, ist die absolute Erfüllung. Ihre Klarheit, ihre Präsenz, ihre offene Art. Mein Leben hat sich um 180 Grad gewendet.',
  },
  {
    name: 'Stefan',
    city: 'Dornbirn',
    highlight: 'Meine Erwartungen wurden deutlich übertroffen',
    quote:
      'Carmen Bereiter hat für mich eine andere Qualität als andere Coaches. Kompetent, herzlich und inspirierend. Sie geht auf den Kern und schafft Klarheit in den Lebensthemen. In herausfordernden Zeiten war sie eine wertvolle Hilfe. Mein Leben ist noch lebenswerter, sinngeladener geworden.',
  },
  {
    name: 'Anna',
    city: 'Portugal',
    highlight: 'Eine atemberaubende Reise',
    quote:
      'Bereits nach meinem ersten Gespräch mit Carmen spürte ich diese Geborgenheit, dieses Gefühl, so sein zu dürfen wie ich bin. Die Tage auf Gran Canaria waren herzerfüllend, eindrucksvoll und lebensverändernd.',
  },
  {
    name: 'Caithlyn',
    city: 'München',
    quote:
      'Carmen hat eine unnachahmliche Formel, mit der sie Menschen dabei hilft, aus allem herauszukommen. Sie hat mir geholfen, alle meine Themen aufzulösen, auf eine ehrliche, liebevolle Art, wie ich sie jedem von Herzen wünsche.',
  },
  {
    name: 'Verena',
    city: 'Bregenz',
    quote:
      'In dem Moment, als ich JA gesagt habe zu der Begleitung von Carmen, sind alle Dämme gebrochen und mein Herz öffnete sich. Mein Leben hat sich komplett verändert. Danke für deine Hingabe, deine Ehrlichkeit und deine Energie.',
  },
  {
    name: 'Ramona',
    city: 'Tirol',
    quote:
      'Ich bin immer wieder fasziniert, wie leidenschaftlich du Menschen begleitest. Es ist unglaublich, wie du alles fühlst und wahrnimmst. Ich hatte so große Träume und kann immer noch nicht glauben, dass so viele davon so schnell wahr geworden sind.',
  },
  {
    name: 'Lea Mari',
    city: 'Zürich',
    quote:
      'Carmens Art Menschen zu begleiten übertrifft alles, was ich mir je vorgestellt habe. Es ist unglaublich, dass Carmen mich mehr fühlt als ich mich selbst. Die letzten drei Monate haben mein Leben komplett verändert.',
  },
  {
    name: 'Juliet',
    city: 'Schwyz',
    quote:
      'Die umfassende, inspirierende und kraftvolle Arbeit von Carmen zeigt, wie schnell es möglich ist, sich zu erholen, wenn das Leben Herausforderungen bringt. Sie werden höher zurückkommen, als Sie es jemals für möglich gehalten hätten, mit Anmut und Leichtigkeit.',
  },
  {
    name: 'Jasmijn',
    city: 'St. Gallen',
    quote:
      'Ich finde die Zusammenarbeit mit Carmen sehr klar, auf den Punkt. Ich habe noch mehr Kunden, ohne den Überblick zu verlieren oder mehr Stress zu erleben. Mein Selbstvertrauen ist deutlich gestiegen. Jede Frau sollte so eine Reise erleben dürfen.',
  },
  {
    name: 'Maria',
    city: 'Bregenzerwald',
    quote:
      'Danke Carmen Bereiter, für alles was du mir möglich machst! Dein Wirken übertrifft sämtliche Vorstellungen, die ich je über ein Mentoring hatte. Das hier ist echt besonders und unvergleichbar mit allem anderen, was ich je erlebt habe! Für mich das Beste, was es gibt.',
  },
  {
    name: 'Laura',
    city: 'Vorarlberg',
    quote:
      'Ich habe an einer 7-wöchigen Begleitung teilgenommen und kann nicht aufhören darüber nachzudenken, wie viel ich gelernt habe und was ich für ein glückliches Leben mitbekommen habe. Vielen Dank für die herzberührende und sehr lehrreiche Zeit. Du hast mich beflügelt, mein Leben zu verändern.',
  },
  {
    name: 'Amara',
    city: 'Montreux',
    quote:
      'Carmen hat mich in meiner bestehenden Business-Struktur genau dort abgeholt, wo ich stand. Mit außergewöhnlicher Herzlichkeit, Feingefühl und Klarheit hat sie mir Wege gezeigt, mein Business auf ein neues Level zu heben. Heute führe ich mein Unternehmen erfolgreicher denn je. Die Unique 1:1 Begleitung ist transformierend und unvergleichlich.',
  },
];

/**
 * Empfehlungen von Persönlichkeiten.
 */
export type Endorsement = {
  name: string;
  role?: string;
  image: string;
  quote: string;
};

export const endorsements: Endorsement[] = [
  {
    name: 'Dr. Biyon Kattilathu',
    role: 'Motivationstrainer & Entertainer',
    image: '/images/Dr-Biyon-Kattilathu-763x1024-1.webp',
    quote:
      'Carmen ist einer der empathischsten und ehrlichsten Menschen, die ich kenne. Ihre große Gabe, anderen Menschen zu einem glücklicheren und erfolgreichen Leben zu verhelfen, macht sie ganz besonders.',
  },
  {
    name: 'Kirsten Bühne',
    role: 'CEO',
    image: '/images/CEObabe-12-Kopie.webp',
    quote:
      'Carmens Aura ist so herzlich, warm und natürlich, sodass sich jeder bei ihr sicher und verstanden fühlt. Mit großer Leichtigkeit verbindet sie ihre Kunden mit ihrer wahren Essenz.',
  },
  {
    name: 'Torben Platzer',
    role: 'Unternehmer & Bestsellerautor',
    image: '/images/Torben-Platzer-836x1024-1.webp',
    quote:
      'Als Carmen das erste Mal bei mir beim Round Table saß, hat sie mit ihrer Ausstrahlung und Energie jeden in ihren Bann gezogen. Ich kann ihr Mentoring sehr empfehlen.',
  },
];

/**
 * Navigationspunkte. Zentral verwaltet, Header und Footer ziehen sich daraus.
 */
export const nav = [
  { href: '/', label: 'Start' },
  { href: '/ueber-mich', label: 'Über mich' },
  { href: '/referenzen', label: 'Referenzen' },
  { href: '/kontakt', label: 'Kontakt' },
] as const;

/**
 * Datos legales, para Aviso Legal y Política de Privacidad
 * (cumplimiento LSSI-CE + RGPD + LOPDGDD).
 *
 * TODO vor Go-Live ersetzen:
 *  - nif          → echte NIE/NIF (z.B. "Y1234567X")
 *  - direccion    → echte Fiscaladresse in Spanien
 *  - telefono     → echte Telefonnummer (mit +34 ...)
 *  - fechaActualizacion → bei Änderungen aktualisieren
 */
export const legal = {
  /** Vor- und Nachname der Inhaberin */
  titular: 'Carmen Bereiter',
  /** Berufsbezeichnung in Spanien */
  actividad: 'Coach & Mentora (Autónoma)',
  /** NIE oder NIF, Platzhalter */
  nif: 'X5832201E',
  /** Fiscaladresse in Spanien, Platzhalter */
  direccion: 'Calle Prudencio Morales 73, 35009 Las Palmas de Gran Canaria',
  /** Kontakt, wird aus contact.* gespiegelt für Konsistenz */
  email: 'hola@carmenbereiter.com',
  telefono: '+34 627 63 12 57',
  /** Datum der letzten Aktualisierung (für Política de Privacidad sichtbar) */
  fechaActualizacion: '2026-05-26',
  /** Hosting-Anbieter (wenn bekannt), sonst leer lassen */
  hostingProveedor: '',
} as const;
