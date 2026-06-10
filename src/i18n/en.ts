/**
 * English dictionary. Mirrors the shape of de.ts (the canonical source).
 */
import type { Dictionary } from './de';

export const en: Dictionary = {
  meta: {
    htmlLang: 'en',
    ogLocale: 'en',
  },

  site: {
    role: 'Coach & Mentor',
    tagline: 'Clarity. Courage. Change that lasts.',
    description:
      'Personal coaching & mentoring with heart, clarity and the highest professionalism. For people ready to take their next step.',
  },

  nav: {
    start: 'Home',
    about: 'About',
    references: 'Testimonials',
    contact: 'Contact',
  },

  common: {
    locationCity: 'Gran Canaria & Online',
    whatsappDefault:
      'Hi Carmen, I saw your website and would love to learn more.',
  },

  header: {
    writeMe: 'Message me',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    directContact: 'Reach me directly',
    whatsappSub: 'Straight to me',
    bookTitle: 'Book a call',
    bookSub: 'Save your date',
  },

  fab: {
    bookAria: 'Book a free call (Calendly)',
    bookTip: 'Book a call',
    telegramAria: 'Message on Telegram',
    telegramTip: 'Telegram',
    whatsappAria: 'Message on WhatsApp',
    whatsappTip: 'WhatsApp',
  },

  contactTiles: {
    whatsappTitle: 'WhatsApp',
    whatsappSub: 'Personal. Fast. Straight to me.',
    telegramTitle: 'Telegram',
    bookTitle: 'Book a free call',
    bookSub: 'online',
  },

  footer: {
    navHeading: 'Navigation',
    directHeading: 'Reach me directly',
    bookOnline: 'Book a call online',
    rights: 'Made with love.',
  },

  programCard: {
    duration: 'Duration:',
    format: 'Format:',
    invest: 'Invest:',
    askWhatsapp: 'Ask via WhatsApp',
    writeTelegram: 'Message on Telegram',
  },

  customCta: {
    eyebrow: 'Bespoke & flexible',
    titleHtml:
      "Nothing quite right? Let's <span class=\"italic text-clay-soft\">tailor it</span>.",
    body: "Every journey is individual. If none of the formats fits you exactly, we'll design a process together that follows your situation, your pace and your goals.",
    ctaPrimary: 'Request bespoke coaching',
    ctaSecondary: 'Secure a free call',
    requestMessage:
      "Hi Carmen, I'd love bespoke coaching tailored to my situation. Could we talk about it?",
  },

  programs: [
    {
      eyebrow: 'GRANDIOS',
      title: 'Your fresh start in 7 weeks',
      subtitle: '7-week coaching · Online',
      short:
        "A space for you. Seven weeks: clear, quiet, honest. With impulses that aren't loud, but work.",
      bullets: [
        'Clarity about who you are and what you truly want',
        'Calm and order in your mind and your life',
        'Self-love and accepting yourself as you are',
        'Recognising your strengths and using them deliberately',
      ],
      duration: '7 weeks',
      format: 'Online · once a week',
      price: 'On request',
      contactMessage:
        "Hi Carmen, I'm interested in GRANDIOS, the 7-week coaching.",
    },
    {
      eyebrow: 'UNIQUE MENTORING',
      title: 'Exclusive 1:1 guidance',
      subtitle: '12 weeks · Online + optional Gran Canaria',
      short:
        'Honest. Direct. Personal. We go deep, release blocks and create your path, for change that truly lasts.',
      bullets: [
        '12 weeks of individual mentoring at the highest level',
        'Clarity, structure and focus for work and life',
        'Optional add-on: two intensive 1:1 days on Gran Canaria',
        'Discreet, exclusive, personal',
      ],
      duration: '12 weeks',
      format: 'Online · optional in person',
      price: 'Price on request',
      contactMessage:
        "Hi Carmen, I'm interested in the exclusive 1:1 guidance (Unique Mentoring).",
    },
    {
      eyebrow: 'RENACER',
      title: 'Live Events',
      subtitle: 'Exclusive live experience · Small group',
      short:
        'Pure energy, clear impulses, real connection in inspiring places.',
      bullets: [
        'Incl. catering during coaching hours',
        'Exclusive mentoring at special locations',
        'Strategies for confident decisions and next steps',
        'Inner calm, energy and focus, tools for everyday life',
      ],
      duration: '2 - 4 days',
      format: 'In person',
      price: 'Dates on request',
      contactMessage: "Hi Carmen, I'm interested in the Live Event.",
    },
  ],

  testimonials: [
    {
      highlight: "One of Europe's best coaches",
      quote:
        'Carmen is without question one of the best coaches in Europe, you feel it in every conversation. She helped me release blocks, gain clarity and take bold, focused steps. I now act with confidence and focus, professionally and privately.',
    },
    {
      highlight: 'The clarity and courage to truly set off',
      quote:
        "The 7-week coaching didn't just bring me clarity, but also the courage to truly set off. I left old blocks behind, reset my priorities and within a short time made big steps, professionally and privately.",
    },
    {
      highlight: 'My life turned around 180 degrees',
      quote:
        "I've never met a mentor who hit the nail on the head like Carmen. I've booked many things, but what I experience with Carmen is pure fulfilment. Her clarity, her presence, her open nature. My life has turned around 180 degrees.",
    },
    {
      highlight: 'My expectations were far exceeded',
      quote:
        "For me, Carmen Bereiter is a different calibre than other coaches. Competent, warm and inspiring. She gets to the core and creates clarity in life's themes. In challenging times she was a valuable help. My life has become even more worth living, more meaningful.",
    },
    {
      highlight: 'A breathtaking journey',
      quote:
        'Right after my first conversation with Carmen I felt this sense of safety, this feeling of being allowed to be exactly who I am. The days on Gran Canaria were heart-filling, impressive and life-changing.',
    },
    {
      quote:
        'Carmen has an inimitable formula she uses to help people get out of anything. She helped me dissolve all my issues, in an honest, loving way that I wish for everyone from the bottom of my heart.',
    },
    {
      quote:
        "The moment I said YES to Carmen's guidance, all the dams broke and my heart opened. My life has completely changed. Thank you for your dedication, your honesty and your energy.",
    },
    {
      quote:
        "I'm fascinated again and again by how passionately you guide people. It's incredible how you feel and perceive everything. I had such big dreams and still can't believe how many of them came true so quickly.",
    },
    {
      quote:
        "Carmen's way of guiding people surpasses everything I ever imagined. It's incredible that Carmen feels me more than I feel myself. The last three months have completely changed my life.",
    },
    {
      quote:
        "Carmen's comprehensive, inspiring and powerful work shows how quickly it's possible to recover when life brings challenges. You'll come back higher than you ever thought possible, with grace and ease.",
    },
    {
      quote:
        'I find working with Carmen very clear, right to the point. I have even more clients without losing the overview or feeling more stress. My self-confidence has risen noticeably. Every woman should get to experience a journey like this.',
    },
    {
      quote:
        'Thank you Carmen Bereiter, for everything you make possible for me! What you do exceeds every idea I ever had about mentoring. This is truly special and incomparable to anything else I have ever experienced! For me, the very best there is.',
    },
    {
      quote:
        "I took part in a 7-week journey and can't stop thinking about how much I learned and what I gained for a happy life. Thank you for the heart-touching and deeply enriching time. You inspired me to change my life.",
    },
    {
      quote:
        'Carmen met me exactly where I stood within my existing business structure. With exceptional warmth, sensitivity and clarity she showed me ways to take my business to a new level. Today I run my company more successfully than ever. The Unique 1:1 guidance is transformative and incomparable.',
    },
  ],

  endorsements: [
    {
      role: 'Motivational speaker & entertainer',
      quote:
        'Carmen is one of the most empathetic and honest people I know. Her great gift of helping others to a happier and more successful life makes her truly special.',
    },
    {
      role: 'CEO',
      quote:
        "Carmen's aura is so warm, kind and natural that everyone feels safe and understood with her. With great ease she connects her clients with their true essence.",
    },
    {
      role: 'Entrepreneur & bestselling author',
      quote:
        'The first time Carmen sat at my Round Table, she captivated everyone with her presence and energy. I highly recommend her mentoring.',
    },
  ],

  pages: {
    home: {
      metaTitle: 'Carmen Bereiter — Coach & Mentor · Gran Canaria & Online',
      metaDescription:
        'Personal coaching & mentoring with heart, clarity and the highest professionalism. 7-week coaching, exclusive 1:1 mentoring and live events — online and on Gran Canaria.',
      hero: {
        eyebrow: 'Coach & Mentor · Gran Canaria & Online',
        titleHtml:
          'Clarity, courage and a <span class="italic text-forest" style="font-variation-settings: \'opsz\' 144, \'SOFT\' 100;">real</span> new beginning.',
        body: 'I guide you personally, honestly, clearly and with heart as you walk your path. Online, 1:1, or at a live event.',
        ctaPrimary: 'Message me on WhatsApp',
        ctaSecondary: 'Secure a free call',
        note: 'I reply personally, usually the same day.',
        portraitAlt: 'Portrait of Carmen Bereiter',
        badgeKicker: 'Since 2018',
        badgeText: 'Coaching with heart, clarity and depth.',
      },
      brand: {
        tagline:
          'Coach & mentor with heart, clarity and the highest professionalism. For real change that lasts.',
        trustLabel: 'Trust',
        trustText: 'Trusted by strong brands and first-class resorts.',
      },
      approach: {
        eyebrow: 'What I do',
        titleHtml:
          'Coaching that <span class="italic text-forest">works</span>, because it holds.',
        body: 'My approach is deep, honest and follows a clear structure. These three steps guide you through every process.',
        steps: [
          {
            title: 'Clarity',
            body: 'Recognising and naming inner patterns. We look calmly at what carries you and what holds you back.',
          },
          {
            title: 'Alignment',
            body: 'Recalibrating your own compass. Bringing values, needs and energy back into one line.',
          },
          {
            title: 'Movement',
            body: 'From understanding into doing. Small, sustainable steps that prove themselves in everyday life, without being forced.',
          },
        ],
      },
      programsSection: {
        eyebrow: 'Programs',
        titleHtml:
          'Three paths. One <span class="italic text-forest">goal</span>: you, fully yourself again.',
        body: 'Choose what fits your moment. Not sure which one? Just ask me, one message is enough.',
      },
      endorsementsSection: {
        eyebrow: 'Heartfelt recommendations',
        titleHtml:
          'Voices that <span class="italic text-forest">matter</span>.',
      },
      voices: {
        eyebrow: 'Client voices',
        titleHtml:
          'What people <span class="italic text-forest">experience</span> who have walked this path.',
        allLink: 'See all testimonials',
      },
      finalCta: {
        eyebrow: 'Ready?',
        titleHtml:
          'Your next step is just one <span class="italic text-clay-soft">message</span> away.',
        body: "Tell me briefly what's on your mind, I reply personally, usually the same day.",
        ctaPrimary: 'Message me on WhatsApp',
        ctaSecondary: 'All ways to reach me',
      },
    },

    about: {
      metaTitle: 'About · Carmen Bereiter',
      metaDescription:
        'Carmen Bereiter — certified coach & mentor. From Lake Constance through state government, top-tier hospitality and Relais & Châteaux to guiding people, leaders and teams.',
      hero: {
        eyebrow: "Hola, I'm Carmen",
        titleHtml:
          'Mentor with heart, clarity and deep <span class="italic text-forest" style="font-variation-settings: \'opsz\' 144, \'SOFT\' 100;">trust</span> in life.',
        body: 'Together and with devotion, I guide people to unfold their holistic growth, gain inner clarity and experience a true connection with life.',
        portraitAlt: 'Portrait of Carmen Bereiter',
      },
      werdegang: {
        eyebrow: 'My path',
        titleHtml:
          'From Lake Constance into worlds where <span class="italic text-forest">excellence</span> is a given.',
        paras: [
          'Before I began guiding people, I worked in worlds where the highest standards, a fine intuition and real responsibility shape everyday life, in Switzerland, Germany and Austria.',
          'These chapters taught me to understand people on every level: from the team to the top leadership. Anyone at home in demanding structures meets others as a true equal.',
        ],
        timeline: [
          {
            kicker: 'Politics & responsibility',
            title: 'State Government',
            body: 'Responsibility at the highest level. Here I experienced how decisions take effect and how to guide people in demanding structures with composure.',
          },
          {
            kicker: 'Hospitality & leadership',
            title: 'Head of Concierge',
            body: "A host by passion. I led teams and learned to read people's unspoken wishes, before they put them into words themselves.",
          },
          {
            kicker: 'Excellence & discretion',
            title: 'Relais & Châteaux',
            body: 'In a world of excellence and discretion I learned what true quality means: attention to detail and a real encounter as equals.',
          },
        ],
      },
      qualification: {
        stat: '10+',
        statLabel: 'years of training & development',
        eyebrow: 'Coaching & Mentoring',
        titleHtml:
          'Certified coach & <span class="italic text-clay-soft">mentor</span>.',
        body: 'For over a decade I trained and developed in this field, certified several times and continuously deepened. This grounding is the foundation for guidance that truly holds.',
      },
      facts: {
        languagesLabel: 'Languages',
        languagesValue: 'German · English · Spanish',
        experienceLabel: 'Experience in',
        experienceValue: 'Switzerland · Germany · Austria · Spain',
        qualificationLabel: 'Qualification',
        qualificationValue: 'MBA — Tourism & Leisure',
      },
      business: {
        eyebrow: 'In business too',
        titleHtml:
          'Strength begins with the <span class="italic text-clay-soft">people</span> who carry a company.',
        body: "My work doesn't end with the individual. I also guide entrepreneurs, leaders and companies, and coach the employees who fill a company with life every day.",
        cta: 'Make a no-obligation enquiry',
        items: [
          {
            title: 'Entrepreneurs & leaders',
            body: 'Clarity in decisions, resilience under pressure and a leadership that comes from inner strength rather than exhaustion.',
          },
          {
            title: 'Teams & companies',
            body: 'A culture that holds: collaboration that grows on real trust and a shared alignment.',
          },
          {
            title: 'Employee coaching',
            body: 'Personal guidance for the people who make the difference, through change, growth and new roles.',
          },
        ],
      },
      guiding: {
        eyebrow: 'What guides me',
        titleHtml:
          "Trust, in life, in myself, in what isn't always visible but <span class=\"italic text-forest\">tangible</span>.",
        paras: [
          "My work is integrative, intuitive and profound. It's not about superficial methods, but about real change that my clients feel and that lasts.",
          "You don't have to do it all alone, and there's no perfect moment. If you sense that now is your moment, reach out with no obligation. Together we'll find your path. Step by step.",
        ],
      },
      story: {
        eyebrow: 'My story',
        titleHtml:
          'What <span class="italic text-forest">truly</span> shaped me.',
        imgAlt: 'Carmen Bereiter',
        paras: [
          "Many see me as a woman with charisma, a fine sense for moments of wellbeing and visible success. But behind what's visible lies a path rarely seen from the outside.",
          'There was a time when the ground was pulled out from under me. Losses I didn’t see coming, that called into question everything once taken for granted. Maybe you know such moments — they often come unexpectedly and change how you look at your own life.',
        ],
        cards: [
          {
            label: 'Head',
            body: 'Sound knowledge and clear structure, coaching you can follow.',
          },
          {
            label: 'Heart',
            body: 'Empathy, meeting as equals and the courage to look honestly.',
          },
          {
            label: 'Soul',
            body: 'Change that works from within and lasts.',
          },
        ],
      },
      finalCta: {
        eyebrow: 'Ready?',
        titleHtml:
          'If you feel that your moment is <span class="italic text-forest">now</span>, message me.',
        ctaPrimary: 'Message me on WhatsApp',
        ctaSecondary: 'Secure a free call',
      },
    },

    contact: {
      metaTitle: 'Contact · Carmen Bereiter',
      metaDescription:
        "Tell me briefly what's on your mind — via WhatsApp, Telegram or email. I reply personally, usually the same day. Sessions online via Zoom or in person on Gran Canaria.",
      hero: {
        eyebrow: "Let's talk",
        titleHtml:
          'Your next step is just one <span class="italic text-forest" style="font-variation-settings: \'opsz\' 144, \'SOFT\' 100;">message</span> away.',
        body: "Tell me briefly what's on your mind. Together we'll see if it's a fit, professionally and personally. No obligation, and honest.",
      },
      email: {
        label: 'Prefer email?',
        text: 'Of course, write to me at',
      },
      expect: {
        eyebrow: 'What to expect',
        titleHtml:
          'An honest answer, <span class="italic text-forest">personally</span> from me.',
        steps: [
          {
            title: 'You message me',
            body: "In a few sentences: what's on your mind and where you stand right now. That's all you need.",
          },
          {
            title: 'I reply personally',
            body: 'Usually the same day. No auto-reply, no template, just me.',
          },
          {
            title: 'We find a time',
            body: 'This call is your first step to maximum clarity and the foundation of our work together.',
          },
        ],
      },
      where: {
        eyebrow: 'Where we meet',
        body: 'Sessions take place online via Zoom, or in person on Gran Canaria, at a live event.',
      },
    },

    references: {
      metaTitle: 'Testimonials · Carmen Bereiter',
      metaDescription:
        'Words from people who have walked this path — from the German-speaking region, Portugal and Switzerland. Real voices on coaching & mentoring with Carmen Bereiter.',
      hero: {
        eyebrow: 'Testimonials',
        titleHtml:
          'For me, success means touching hearts and seeing people <span class="italic text-forest" style="font-variation-settings: \'opsz\' 144, \'SOFT\' 100;">blossom</span> into new life.',
        body: 'Words from people who have walked this path, from the German-speaking region, Portugal and Switzerland.',
      },
      finalCta: {
        eyebrow: 'Your chapter',
        titleHtml:
          "If what you've read <span class=\"italic text-clay-soft\">touches</span> something in you, let's talk.",
        ctaPrimary: 'Message me on WhatsApp',
        ctaSecondary: 'Message me on Telegram',
      },
    },
  },
};
