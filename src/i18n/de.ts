/**
 * Deutsches Dictionary — kanonische Quelle (Standardsprache).
 * Die Form dieses Objekts definiert den Typ `Dictionary`; en.ts und es.ts müssen ihr entsprechen.
 *
 * Konvention:
 *  - `*Html`-Felder werden mit `set:html` gerendert (enthalten Inline-Markup wie <span>).
 *  - Alle übrigen Felder sind reiner Text.
 */
export const de = {
  meta: {
    /** für <html lang> und og:locale */
    htmlLang: 'de',
    ogLocale: 'de_DE',
  },

  site: {
    role: 'Coach & Mentorin',
    tagline: 'Klarheit. Mut. Veränderung, die bleibt.',
    description:
      'Persönliches Coaching & Mentoring mit Herz, Klarheit und höchster Professionalität. Für Menschen, die ihren nächsten Schritt gehen wollen.',
  },

  nav: {
    start: 'Start',
    about: 'Über mich',
    references: 'Referenzen',
    contact: 'Kontakt',
  },

  common: {
    locationCity: 'Gran Canaria & Online',
    /** vorausgefüllte WhatsApp-Standardnachricht */
    whatsappDefault:
      'Hallo Carmen, ich habe deine Website gesehen und würde gerne mehr erfahren.',
  },

  header: {
    writeMe: 'Schreib mir',
    langLabel: 'Sprache wählen',
    menuOpen: 'Menü öffnen',
    menuClose: 'Menü schließen',
    directContact: 'Direkt erreichen',
    whatsappSub: 'Direkt zu mir',
    bookTitle: 'Termin buchen',
    bookSub: 'Save your date',
  },

  fab: {
    bookAria: 'Erstgespräch buchen (Calendly)',
    bookTip: 'Termin buchen',
    whatsappAria: 'Auf WhatsApp schreiben',
    whatsappTip: 'WhatsApp',
    talkAria: 'Vortrag oder Keynote anfragen (WhatsApp)',
    talkTip: 'Vortrag anfragen',
    mailAria: 'E-Mail schreiben',
    mailTip: 'E-Mail schreiben',
    openAria: 'Kontaktmöglichkeiten anzeigen',
    closeAria: 'Kontaktmöglichkeiten schließen',
    menuLabel: 'Direkter Kontakt',
  },

  contactTiles: {
    whatsappTitle: 'WhatsApp',
    whatsappSub: 'Persönlich. Schnell. Direkt zu mir.',
    bookTitle: 'Erstgespräch buchen',
    bookSub: 'online',
    talkHeading: 'Für Veranstalter & Unternehmen',
    talkTitle: 'Vortrag anfragen',
    talkSub: 'Keynote oder Impulsvortrag',
    mailTitle: 'E-Mail schreiben',
  },

  footer: {
    navHeading: 'Navigation',
    directHeading: 'Direkt erreichen',
    bookOnline: 'Termin online buchen',
    rights: 'Mit Liebe gemacht.',
  },

  programCard: {
    duration: 'Dauer:',
    format: 'Format:',
    invest: 'Invest:',
    askWhatsapp: 'Per WhatsApp anfragen',
  },

  customCta: {
    eyebrow: 'Individuell & flexibel',
    titleHtml:
      'Nichts Passendes dabei? Lass es uns <span class="italic text-clay-soft">maßschneidern</span>.',
    body: 'Jede Begleitung ist individuell. Wenn keines der Formate genau zu dir passt, gestalten wir gemeinsam eine Beratung, die sich an deiner Situation, deinem Tempo und deinen Zielen orientiert.',
    ctaPrimary: 'Maßgeschneiderte Beratung anfragen',
    ctaSecondary: 'Erstgespräch sichern',
    requestMessage:
      'Hallo Carmen, ich wünsche mir eine maßgeschneiderte Beratung, die genau zu meiner Situation passt. Können wir dazu sprechen?',
  },

  /** Reihenfolge identisch zu programMeta in config.ts */
  programs: [
    {
      eyebrow: 'Zurück zu dir',
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
      contactMessage:
        'Hallo Carmen, ich interessiere mich für Zurück zu dir, das 7-Wochen-Coaching.',
    },
    {
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
      contactMessage:
        'Hallo Carmen, ich interessiere mich für die exklusive 1:1 Begleitung (Unique Mentoring).',
    },
    {
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
      contactMessage: 'Hallo Carmen, ich interessiere mich für das Live-Event.',
    },
  ],

  /** Reihenfolge identisch zu testimonialMeta in config.ts */
  testimonials: [
    {
      highlight: 'Eine der besten Coaches Europas',
      quote:
        'Ohne Frage zählt Carmen zu den besten Coaches Europas, das merkt man in jedem Gespräch. Sie hat mir geholfen Blockaden zu lösen, Klarheit zu gewinnen und mutige, zielgerichtete Schritte zu gehen. Ich handle jetzt selbstbewusst und fokussiert, beruflich wie privat.',
    },
    {
      highlight: 'Klarheit und Mut, wirklich loszugehen',
      quote:
        'Das 7-Wochen-Coaching hat mir nicht nur Klarheit gebracht, sondern auch den Mut, wirklich loszugehen. Ich habe alte Blockaden hinter mir gelassen, meine Prioritäten neu gesetzt und innerhalb kurzer Zeit beruflich wie privat große Schritte gemacht.',
    },
    {
      highlight: 'Mein Leben hat sich um 180 Grad gewendet',
      quote:
        'Noch nie habe ich eine Mentorin getroffen, die es so auf den Punkt getroffen hat, wie Carmen. Ich habe schon vieles gebucht, aber das, was ich mit Carmen erlebe, ist die absolute Erfüllung. Ihre Klarheit, ihre Präsenz, ihre offene Art. Mein Leben hat sich um 180 Grad gewendet.',
    },
    {
      highlight: 'Meine Erwartungen wurden deutlich übertroffen',
      quote:
        'Carmen Bereiter hat für mich eine andere Qualität als andere Coaches. Kompetent, herzlich und inspirierend. Sie geht auf den Kern und schafft Klarheit in den Lebensthemen. In herausfordernden Zeiten war sie eine wertvolle Hilfe. Mein Leben ist noch lebenswerter, sinngeladener geworden.',
    },
    {
      highlight: 'Eine atemberaubende Reise',
      quote:
        'Bereits nach meinem ersten Gespräch mit Carmen spürte ich diese Geborgenheit, dieses Gefühl, so sein zu dürfen wie ich bin. Die Tage auf Gran Canaria waren herzerfüllend, eindrucksvoll und lebensverändernd.',
    },
    {
      quote:
        'Carmen hat eine unnachahmliche Formel, mit der sie Menschen dabei hilft, aus allem herauszukommen. Sie hat mir geholfen, alle meine Themen aufzulösen, auf eine ehrliche, liebevolle Art, wie ich sie jedem von Herzen wünsche.',
    },
    {
      quote:
        'In dem Moment, als ich JA gesagt habe zu der Begleitung von Carmen, sind alle Dämme gebrochen und mein Herz öffnete sich. Mein Leben hat sich komplett verändert. Danke für deine Hingabe, deine Ehrlichkeit und deine Energie.',
    },
    {
      quote:
        'Ich bin immer wieder fasziniert, wie leidenschaftlich du Menschen begleitest. Es ist unglaublich, wie du alles fühlst und wahrnimmst. Ich hatte so große Träume und kann immer noch nicht glauben, dass so viele davon so schnell wahr geworden sind.',
    },
    {
      quote:
        'Carmens Art Menschen zu begleiten übertrifft alles, was ich mir je vorgestellt habe. Es ist unglaublich, dass Carmen mich mehr fühlt als ich mich selbst. Die letzten drei Monate haben mein Leben komplett verändert.',
    },
    {
      quote:
        'Die umfassende, inspirierende und kraftvolle Arbeit von Carmen zeigt, wie schnell es möglich ist, sich zu erholen, wenn das Leben Herausforderungen bringt. Sie werden höher zurückkommen, als Sie es jemals für möglich gehalten hätten, mit Anmut und Leichtigkeit.',
    },
    {
      quote:
        'Ich finde die Zusammenarbeit mit Carmen sehr klar, auf den Punkt. Ich habe noch mehr Kunden, ohne den Überblick zu verlieren oder mehr Stress zu erleben. Mein Selbstvertrauen ist deutlich gestiegen. Jede Frau sollte so eine Reise erleben dürfen.',
    },
    {
      quote:
        'Danke Carmen Bereiter, für alles was du mir möglich machst! Dein Wirken übertrifft sämtliche Vorstellungen, die ich je über ein Mentoring hatte. Das hier ist echt besonders und unvergleichbar mit allem anderen, was ich je erlebt habe! Für mich das Beste, was es gibt.',
    },
    {
      quote:
        'Ich habe an einer 7-wöchigen Begleitung teilgenommen und kann nicht aufhören darüber nachzudenken, wie viel ich gelernt habe und was ich für ein glückliches Leben mitbekommen habe. Vielen Dank für die herzberührende und sehr lehrreiche Zeit. Du hast mich beflügelt, mein Leben zu verändern.',
    },
    {
      quote:
        'Carmen hat mich in meiner bestehenden Business-Struktur genau dort abgeholt, wo ich stand. Mit außergewöhnlicher Herzlichkeit, Feingefühl und Klarheit hat sie mir Wege gezeigt, mein Business auf ein neues Level zu heben. Heute führe ich mein Unternehmen erfolgreicher denn je. Die Unique 1:1 Begleitung ist transformierend und unvergleichlich.',
    },
  ],

  /** Reihenfolge identisch zu endorsementMeta in config.ts */
  endorsements: [
    {
      role: 'Motivationstrainer & Mehrfacher Spiegel-Bestsellerautor',
      quote:
        'Carmen ist einer der empathischsten und ehrlichsten Menschen, die ich kenne. Ihre große Gabe, anderen Menschen zu einem glücklicheren und erfolgreichen Leben zu verhelfen, macht sie ganz besonders.',
    },
    {
      role: 'CEO & Markenexpertin',
      quote:
        'Carmens Aura ist so herzlich, warm und natürlich, sodass sich jeder bei ihr sicher und verstanden fühlt. Mit großer Leichtigkeit verbindet sie ihre Kunden mit ihrer wahren Essenz.',
    },
    {
      role: 'Unternehmer & Spiegel-Bestsellerautor',
      quote:
        'Als Carmen das erste Mal bei mir beim Round Table saß, hat sie mit ihrer Ausstrahlung und Energie jeden in ihren Bann gezogen. Ich kann ihr Mentoring sehr empfehlen.',
    },
  ],

  pages: {
    home: {
      metaTitle: 'Carmen Bereiter — Coach & Mentorin · Gran Canaria & Online',
      metaDescription:
        'Persönliches Coaching & Mentoring mit Herz, Klarheit und höchster Professionalität. 7-Wochen-Coaching, exklusives 1:1 Mentoring und Live-Events — online und auf Gran Canaria.',
      hero: {
        eyebrow: 'Coach & Mentorin · Gran Canaria & Online',
        titleHtml:
          'Klarheit, Mut und ein <span class="italic text-forest" style="font-variation-settings: \'opsz\' 144, \'SOFT\' 100;">echter</span> Neustart.',
        body: 'Ich begleite dich persönlich, ehrlich, klar und mit Herz dabei, deinen Weg zu gehen. Online, im 1:1, oder bei einem Live-Event.',
        ctaPrimary: 'Direkt auf WhatsApp schreiben',
        ctaSecondary: 'Erstgespräch sichern',
        note: 'Ich antworte dir persönlich, meist noch am selben Tag.',
        portraitAlt: 'Portrait von Carmen Bereiter',
        badgeKicker: 'Seit 2018',
        badgeText: 'Coaching mit Herz, Klarheit und Tiefe.',
      },
      brand: {
        tagline:
          'Coach & Mentorin mit Herz, Klarheit und höchster Professionalität. Für echte Veränderung, die bleibt.',
        trustLabel: 'Vertrauen',
        trustText: 'Vertrauen von führenden Marken, erstklassigen Resorts und starken Frauen-Netzwerken.',
      },
      approach: {
        eyebrow: 'Was ich tue',
        titleHtml:
          'Coaching, das <span class="italic text-forest">wirkt</span>, weil es trägt.',
        body: 'Mein Weg ist tiefgründig, ehrlich und folgt einem klaren Aufbau. Diese drei Schritte begleiten dich durch jeden Prozess.',
        steps: [
          {
            title: 'Klarheit',
            body: 'Innere Muster erkennen und benennen. Wir schauen ruhig hin, auf das, was trägt, und auf das, was bremst.',
          },
          {
            title: 'Ausrichtung',
            body: 'Den eigenen Kompass neu kalibrieren. Werte, Bedürfnisse und Energie wieder in eine Linie bringen.',
          },
          {
            title: 'Bewegung',
            body: 'Vom Verstehen ins Tun. Kleine, tragfähige Schritte, die sich im Alltag bewähren, nicht erzwingen.',
          },
        ],
      },
      programsSection: {
        eyebrow: 'Programme',
        titleHtml:
          'Drei Wege. Ein <span class="italic text-forest">Ziel</span>: du, wieder ganz bei dir.',
        body: 'Such dir, was zu deinem Moment passt. Nicht sicher welches? Frag mich einfach kurz, eine Nachricht reicht.',
      },
      speaking: {
        eyebrow: 'Keynotes & Vorträge',
        titleHtml:
          'Starke Impulse. Einzigartige <span class="italic text-forest">Transformation</span>.',
        body: 'Als Rednerin bringe ich exklusive, bewegende Impulse auf die Bühnen von Unternehmen, Events und Netzwerktreffen in Deutschland, Österreich und der Schweiz. Meine Vorträge informieren nicht nur – sie berühren, inspirieren und setzen langanhaltende Veränderungen in Gang. Jeder Auftritt wird präzise auf den jeweiligen Anlass, das Publikum und den exklusiven Zeitrahmen zugeschnitten.',
        bullets: [
          'Premium Keynotes für Firmen- und Kundenevents',
          'Inspirierende Impulsvorträge für Netzwerke, Verbände und Frauen-Communities',
          'Vor Ort in D-A-CH',
        ],
        note: 'Thema, Länge und der exklusive Rahmen werden vorab im persönlichen Dialog individuell abgestimmt.',
        ctaPrimary: 'Vortrag anfragen',
        ctaSecondary: 'Verfügbarkeit besprechen',
        requestMessage:
          'Hallo Carmen, wir planen eine Veranstaltung und würden dich gerne als Rednerin buchen. Können wir dazu sprechen?',
        imageAlt: 'Portrait von Carmen Bereiter',
      },
      endorsementsSection: {
        eyebrow: 'Herzensempfehlungen',
        titleHtml:
          'Stimmen, die etwas <span class="italic text-forest">bedeuten</span>.',
      },
      voices: {
        eyebrow: 'Kunden-Stimmen',
        titleHtml:
          'Was Menschen <span class="italic text-forest">erleben</span>, die diesen Weg gegangen sind.',
        allLink: 'Alle Referenzen ansehen',
      },
      finalCta: {
        eyebrow: 'Bereit?',
        titleHtml:
          'Dein nächster Schritt ist nur eine <span class="italic text-clay-soft">Nachricht</span> entfernt.',
        body: 'Schreib mir kurz, was dich beschäftigt, ich antworte persönlich, meist noch am selben Tag.',
        ctaPrimary: 'Auf WhatsApp schreiben',
        ctaSecondary: 'Alle Kontaktwege',
      },
    },

    about: {
      metaTitle: 'Über mich · Carmen Bereiter',
      metaDescription:
        'Carmen Bereiter — zertifizierte Coachin & Mentorin. Vom Bodensee über Landesregierung, Spitzen-Hotellerie und Relais & Châteaux zur Begleitung von Menschen, Führungskräften und Teams.',
      hero: {
        eyebrow: 'Hola, ich bin Carmen',
        titleHtml:
          'Mentorin mit Herz, Klarheit und tiefem <span class="italic text-forest" style="font-variation-settings: \'opsz\' 144, \'SOFT\' 100;">Vertrauen</span> ins Leben.',
        body: 'Gemeinsam und mit Hingabe begleite ich Menschen, ihr ganzheitliches Wachstum zu entfalten, innere Klarheit zu gewinnen und eine echte Verbindung mit dem Leben zu erleben.',
        portraitAlt: 'Portrait von Carmen Bereiter',
      },
      werdegang: {
        eyebrow: 'Mein Werdegang',
        titleHtml:
          'Vom Bodensee in Welten, in denen <span class="italic text-forest">Exzellenz</span> selbstverständlich ist.',
        paras: [
          'Bevor ich Menschen begleitet habe, habe ich in Welten gearbeitet, in denen höchste Ansprüche, feines Gespür und echte Verantwortung den Alltag bestimmen, in der Schweiz, in Deutschland und in Österreich.',
          'Diese Stationen haben mich gelehrt, Menschen auf jeder Ebene zu verstehen: vom Team bis zur Führungsspitze. Wer in anspruchsvollen Strukturen zuhause war, begegnet anderen auf echter Augenhöhe.',
        ],
        timeline: [
          {
            kicker: 'Politik & Verantwortung',
            title: 'Landesregierung',
            body: 'Verantwortung auf höchster Ebene. Hier habe ich erlebt, wie Entscheidungen wirken und wie man Menschen in anspruchsvollen Strukturen souverän begleitet.',
          },
          {
            kicker: 'Gastgeberschaft & Führung',
            title: 'Head of Concierge',
            body: 'Gastgeberin aus Leidenschaft. Ich habe Teams geführt und gelernt, die unausgesprochenen Wünsche von Menschen zu lesen, noch bevor sie sie selbst in Worte fassen.',
          },
          {
            kicker: 'Exzellenz & Diskretion',
            title: 'Relais & Châteaux',
            body: 'In einer Welt der Exzellenz und Diskretion habe ich erfahren, was wahre Qualität ausmacht: Aufmerksamkeit für das Detail und echte Begegnung auf Augenhöhe.',
          },
        ],
      },
      qualification: {
        stat: '10+',
        statLabel: 'Jahre Aus- & Weiterbildung',
        eyebrow: 'Coaching & Mentoring',
        titleHtml:
          'Zertifizierte Coachin & <span class="italic text-clay-soft">Mentorin</span>.',
        body: 'Über ein Jahrzehnt habe ich mich in diesem Fach aus- und weitergebildet, mehrfach zertifiziert und kontinuierlich vertieft. Diese Fundierung ist die Grundlage für eine Begleitung, die wirklich trägt.',
      },
      facts: {
        languagesLabel: 'Sprachen',
        languagesValue: 'Deutsch · Englisch · Spanisch',
        experienceLabel: 'Erfahrung in',
        experienceValue: 'Schweiz · Deutschland · Österreich · Spanien',
        qualificationLabel: 'Qualifikation',
        qualificationValue: 'MBA — Tourismus & Freizeit',
      },
      business: {
        eyebrow: 'Auch im Business',
        titleHtml:
          'Stärke beginnt bei den <span class="italic text-clay-soft">Menschen</span>, die ein Unternehmen tragen.',
        body: 'Meine Arbeit endet nicht beim Einzelnen. Ich begleite auch UnternehmerInnen, Führungskräfte und Firmen, und coache auch die Mitarbeitenden, die ein Unternehmen jeden Tag mit Leben füllen.',
        cta: 'Unverbindlich anfragen',
        items: [
          {
            title: 'UnternehmerInnen & Führungskräfte',
            body: 'Klarheit in Entscheidungen, Resilienz unter Druck und eine Führung, die aus innerer Stärke kommt statt aus Erschöpfung.',
          },
          {
            title: 'Teams & Firmen',
            body: 'Eine Kultur, die trägt: Zusammenarbeit, die auf echtem Vertrauen und einer gemeinsamen Ausrichtung wächst.',
          },
          {
            title: 'Mitarbeiter-Coaching',
            body: 'Persönliche Begleitung für die Menschen, die den Unterschied machen, in Veränderung, Wachstum und neuen Rollen.',
          },
        ],
      },
      guiding: {
        eyebrow: 'Was mich leitet',
        titleHtml:
          'Vertrauen, in das Leben, in mich selbst, in das, was nicht immer sichtbar, aber <span class="italic text-forest">fühlbar</span> ist.',
        paras: [
          'Meine Arbeit ist integrativ, intuitiv und tiefgehend. Es geht nicht um oberflächliche Methoden, sondern um echte Veränderung, die bei meinen Klienten spürbar und nachhaltig wirkt.',
          'Du musst nicht alles allein schaffen, und es gibt keinen perfekten Zeitpunkt. Wenn du spürst, dass jetzt dein Moment ist, melde dich ganz unverbindlich. Gemeinsam finden wir deinen Weg. Schritt für Schritt.',
        ],
      },
      story: {
        eyebrow: 'Meine Geschichte',
        titleHtml:
          'Was mich <span class="italic text-forest">wirklich</span> geprägt hat.',
        imgAlt: 'Carmen Bereiter',
        paras: [
          'Viele sehen mich als Frau mit Charisma, einem feinen Gespür für Wohlfühlmomente und sichtbarem Erfolg. Doch hinter dem, was sichtbar ist, liegt ein Weg, den man von außen selten sieht.',
          'Es gab eine Zeit, in der mir der Boden unter den Füßen weggezogen wurde. Verluste, die ich nicht kommen sah und die alles in Frage stellten, was vorher selbstverständlich war. Vielleicht kennst du solche Momente — sie kommen oft unerwartet und verändern, wie man auf das eigene Leben schaut.',
        ],
        cards: [
          {
            label: 'Kopf',
            body: 'Fundiertes Wissen und klare Struktur, Coaching, das nachvollziehbar ist.',
          },
          {
            label: 'Herz',
            body: 'Empathie, Augenhöhe und der Mut, ehrlich hinzuschauen.',
          },
          {
            label: 'Seele',
            body: 'Veränderung, die von innen wirkt und langfristig bleibt.',
          },
        ],
      },
      finalCta: {
        eyebrow: 'Bereit?',
        titleHtml:
          'Wenn du fühlst, dass dein Moment <span class="italic text-forest">jetzt</span> ist, schreib mir.',
        ctaPrimary: 'Auf WhatsApp schreiben',
        ctaSecondary: 'Erstgespräch sichern',
      },
    },

    contact: {
      metaTitle: 'Kontakt · Carmen Bereiter',
      metaDescription:
        'Schreib mir kurz, was dich beschäftigt — per WhatsApp oder E-Mail. Ich antworte persönlich, meist noch am selben Tag. Sitzungen online oder vor Ort auf Gran Canaria.',
      hero: {
        eyebrow: 'Lass uns reden',
        titleHtml:
          'Dein nächster Schritt ist nur eine <span class="italic text-forest" style="font-variation-settings: \'opsz\' 144, \'SOFT\' 100;">Nachricht</span> entfernt.',
        body: 'Schreib mir kurz, was dich beschäftigt. Wir schauen gemeinsam, ob es passt, fachlich und menschlich. Unverbindlich und ehrlich.',
      },
      expect: {
        eyebrow: 'Was dich erwartet',
        titleHtml:
          'Eine ehrliche Antwort, <span class="italic text-forest">persönlich</span> von mir.',
        steps: [
          {
            title: 'Du schreibst mir',
            body: 'In wenigen Sätzen: was dich beschäftigt und wo du gerade stehst. Mehr brauchst du nicht.',
          },
          {
            title: 'Ich antworte persönlich',
            body: 'Meist noch am selben Tag. Keine Auto-Antwort, keine Vorlage, sondern ich.',
          },
          {
            title: 'Wir finden einen Termin',
            body: 'Dieser Call ist dein erster Schritt zu maximaler Klarheit und der Grundstein für unsere gemeinsame Zusammenarbeit.',
          },
        ],
      },
      where: {
        eyebrow: 'Wo wir uns treffen',
        body: 'Sitzungen finden online statt oder vor Ort auf Gran Canaria. Auf Anfrage fliege ich auch zu dir.',
      },
    },

    references: {
      metaTitle: 'Referenzen · Carmen Bereiter',
      metaDescription:
        'Worte von Menschen, die diesen Weg gegangen sind. Echte Stimmen über Coaching & Mentoring mit Carmen Bereiter.',
      hero: {
        eyebrow: 'Referenzen',
        titleHtml:
          'Erfolg bedeutet für mich, Herzen zu berühren und zu sehen, wie Menschen zu neuem Leben <span class="italic text-forest" style="font-variation-settings: \'opsz\' 144, \'SOFT\' 100;">erblühen</span>.',
        body: 'Worte von Menschen, die diesen Weg gegangen sind.',
      },
      finalCta: {
        eyebrow: 'Dein Kapitel',
        titleHtml:
          'Wenn das, was du gelesen hast, etwas in dir <span class="italic text-clay-soft">berührt</span>, lass uns reden.',
        ctaPrimary: 'Auf WhatsApp schreiben',
        ctaSecondary: 'Erstgespräch sichern',
      },
    },
  },
};

/** Form aller Dictionaries — Deutsch ist die kanonische Quelle. */
export type Dictionary = typeof de;
