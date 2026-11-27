export type Locale = "en" | "es";

export const DEFAULT_LOCALE: Locale = "en";

export const LOCALE_LABELS: Record<Locale, string> = {
  en: "EN",
  es: "ES",
};

export interface StepItem {
  number: string;
  title: string;
  description: string;
}

export interface ReviewItem {
  quote: string;
  author: string;
  trip: string;
}

export interface Copy {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    homeAria: string;
    mainAria: string;
    mobileAria: string;
    openMenu: string;
    closeMenu: string;
    myItinerary: string;
    planTrip: string;
    links: {
      destinations: string;
      howItWorks: string;
      stories: string;
      contact: string;
    };
  };
  hero: {
    eyebrow: string;
    followJourney: string;
    featuredAria: string;
    upcomingAria: string;
    chooseAria: string;
    socialAria: string;
    prevAria: string;
    nextAria: string;
    goTo: string;
    previewPrefix: string;
    rated: string;
    bookmark: string;
    removeBookmark: string;
  };
  howItWorks: {
    eyebrow: string;
    heading: string;
    subtitle: string;
    pricingNote: string;
    steps: StepItem[];
  };
  destinations: {
    eyebrow: string;
    heading: string;
    subtitle: string;
    quoteCta: string;
  };
  quoteAndAccess: {
    quoteEyebrow: string;
    quoteHeading: string;
    quoteSubtitle: string;
    destinationLabel: string;
    datesLabel: string;
    datesPlaceholder: string;
    travelersLabel: string;
    tierLabel: string;
    tiers: string[];
    submitCta: string;
    accessEyebrow: string;
    accessHeading: string;
    accessSubtitle: string;
    codeLabel: string;
    codePlaceholder: string;
    accessCta: string;
    accessHint: string;
  };
  reviews: {
    eyebrow: string;
    heading: string;
    subtitle: string;
    items: ReviewItem[];
  };
  footer: {
    navAria: string;
    tagline: string;
    contactLabel: string;
    email: string;
    hours: string;
    rights: string;
  };
  contact: {
    eyebrow: string;
    heading: string;
    subtitle: string;
    channels: Array<{ label: string; value: string; note: string }>;
  };
}

export const COPY: Record<Locale, Copy> = {
  en: {
    meta: {
      title: "ItineriaPlan — Bespoke Travel & Custom Itineraries",
      description:
        "Discover extraordinary destinations with ItineriaPlan. Custom itineraries and tailored quotes from Bali to Iceland.",
    },
    nav: {
      homeAria: "ItineriaPlan home",
      mainAria: "Main navigation",
      mobileAria: "Mobile navigation",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      myItinerary: "My Itinerary",
      planTrip: "Plan Trip",
      links: {
        destinations: "Destinations",
        howItWorks: "How it works",
        stories: "Stories",
        contact: "Contact",
      },
    },
    hero: {
      eyebrow: "THE WORLD IS YOURS",
      followJourney: "FOLLOW THE JOURNEY",
      featuredAria: "Featured destinations",
      upcomingAria: "Upcoming destinations",
      chooseAria: "Choose destination",
      socialAria: "Social media",
      prevAria: "Previous destination",
      nextAria: "Next destination",
      goTo: "Go to",
      previewPrefix: "Preview",
      rated: "rated",
      bookmark: "Bookmark",
      removeBookmark: "Remove bookmark for",
    },
    howItWorks: {
      eyebrow: "TAILORED PROCESS",
      heading: "How your trip comes together",
      subtitle:
        "Every journey is built from scratch around your pace, dates, and budget tier.",
      pricingNote:
        "Market rates shift daily—we quote live availability so you never pay inflated static markups.",
      steps: [
        {
          number: "01",
          title: "Share your vision",
          description:
            "Tell us where you want to go, approximate dates, who is traveling, and your preferred comfort level.",
        },
        {
          number: "02",
          title: "Receive a live custom quote",
          description:
            "We design a day-by-day itinerary with curated stays and real-time market pricing with clear validity.",
        },
        {
          number: "03",
          title: "Refine via private link",
          description:
            "Review your itinerary with your group using an anonymous access code—no account needed—and confirm when ready.",
        },
      ],
    },
    destinations: {
      eyebrow: "CURATED INSPIRATION",
      heading: "Destinations built around you",
      subtitle:
        "Suggested durations and styles—each route is adapted to your dates and preferences.",
      quoteCta: "Request quote",
    },
    quoteAndAccess: {
      quoteEyebrow: "BESPOKE QUOTE",
      quoteHeading: "Start planning your journey",
      quoteSubtitle:
        "No fixed packages. Tell us what matters and we will craft your custom route.",
      destinationLabel: "Destination or region",
      datesLabel: "Approximate dates",
      datesPlaceholder: "e.g. Oct 2026 · Flexible 10 days",
      travelersLabel: "Travelers",
      tierLabel: "Comfort tier",
      tiers: ["Essential", "Boutique", "Luxury"],
      submitCta: "Request custom quote",
      accessEyebrow: "CLIENT PORTAL",
      accessHeading: "Open your itinerary or quote",
      accessSubtitle:
        "Already working with us? Enter your private quote code—no password required.",
      codeLabel: "Access code",
      codePlaceholder: "e.g. ITN-4829",
      accessCta: "View itinerary",
      accessHint: "Private link access keeps your quote details protected without creating an account.",
    },
    reviews: {
      eyebrow: "TRAVELER STORIES",
      heading: "Crafted for real journeys",
      subtitle:
        "What travelers say about planning custom routes and live quotes with ItineriaPlan.",
      items: [
        {
          quote:
            "Having a private link to share our Japan itinerary with my family made every change effortless—zero back-and-forth PDFs.",
          author: "Camila R.",
          trip: "Kyoto & Tokyo · 12 days",
        },
        {
          quote:
            "They adapted our Peru route twice as flight prices shifted and still kept the boutique lodges we wanted.",
          author: "Daniel M.",
          trip: "Sacred Valley & Machu Picchu · 8 days",
        },
        {
          quote:
            "Everything from aurora timing in Iceland to private transfers was clear before we paid a single deposit.",
          author: "Sofía & Lucas",
          trip: "Reykjavik & South Coast · 7 days",
        },
      ],
    },
    footer: {
      navAria: "Footer navigation",
      tagline: "Curated journeys and bespoke travel itineraries across the world.",
      contactLabel: "Direct concierge",
      email: "hello@itineriaplan.com",
      hours: "Mon–Sat · Live quote support",
      rights: "All rights reserved.",
    },
    contact: {
      eyebrow: "DIRECT CONCIERGE",
      heading: "Talk with a travel designer",
      subtitle:
        "Prefer WhatsApp, email, or a quick discovery call? Reach us directly to start your custom route.",
      channels: [
        { label: "Email", value: "hello@itineriaplan.com", note: "Replies within 24h" },
        { label: "WhatsApp", value: "+1 (305) 555-0194", note: "Mon–Sat · 9:00–19:00" },
        { label: "Video call", value: "20-min consultation", note: "By appointment" },
      ],
    },
  },
  es: {
    meta: {
      title: "ItineriaPlan — Viajes e Itinerarios a Medida",
      description:
        "Descubre destinos extraordinarios con ItineriaPlan. Itinerarios y cotizaciones personalizadas desde Bali hasta Islandia.",
    },
    nav: {
      homeAria: "Inicio de ItineriaPlan",
      mainAria: "Navegación principal",
      mobileAria: "Navegación móvil",
      openMenu: "Abrir menú",
      closeMenu: "Cerrar menú",
      myItinerary: "Mi Itinerario",
      planTrip: "Cotizar",
      links: {
        destinations: "Destinos",
        howItWorks: "Cómo funciona",
        stories: "Historias",
        contact: "Contacto",
      },
    },
    hero: {
      eyebrow: "EL MUNDO ES TUYO",
      followJourney: "SIGUE EL VIAJE",
      featuredAria: "Destinos destacados",
      upcomingAria: "Próximos destinos",
      chooseAria: "Elegir destino",
      socialAria: "Redes sociales",
      prevAria: "Destino anterior",
      nextAria: "Siguiente destino",
      goTo: "Ir a",
      previewPrefix: "Ver",
      rated: "calificación",
      bookmark: "Guardar",
      removeBookmark: "Quitar de guardados",
    },
    howItWorks: {
      eyebrow: "PROCESO A MEDIDA",
      heading: "Cómo armamos tu viaje",
      subtitle:
        "Cada itinerario se diseña desde cero según tu ritmo, fechas y nivel de viaje.",
      pricingNote:
        "Las tarifas del mercado cambian a diario; cotizamos con disponibilidad real para no inflar precios fijos.",
      steps: [
        {
          number: "01",
          title: "Cuéntanos tu idea",
          description:
            "Compártenos destino, fechas aproximadas, quiénes viajan y el estilo de hospedaje que prefieres.",
        },
        {
          number: "02",
          title: "Recibe tu cotización real",
          description:
            "Armamos tu itinerario día por día con opciones curadas y tarifa vigente al momento de cotizar.",
        },
        {
          number: "03",
          title: "Revisa con acceso privado",
          description:
            "Abre y comparte tu itinerario con tu grupo usando un código único—sin crear cuenta—y confirma cuando estés listo.",
        },
      ],
    },
    destinations: {
      eyebrow: "INSPIRACIÓN CURADA",
      heading: "Destinos adaptados a ti",
      subtitle:
        "Duraciones y estilos sugeridos; cada ruta se ajusta a tus fechas y presupuesto.",
      quoteCta: "Cotizar ruta",
    },
    quoteAndAccess: {
      quoteEyebrow: "COTIZACIÓN A MEDIDA",
      quoteHeading: "Empieza a planear tu viaje",
      quoteSubtitle:
        "Sin paquetes rígidos. Dinos qué buscas y preparamos tu ruta personalizada.",
      destinationLabel: "Destino o región",
      datesLabel: "Fechas aproximadas",
      datesPlaceholder: "Ej. Oct 2026 · 10 días flexibles",
      travelersLabel: "Viajeros",
      tierLabel: "Nivel de experiencia",
      tiers: ["Esencial", "Boutique", "Luxury"],
      submitCta: "Solicitar cotización",
      accessEyebrow: "PORTAL DE CLIENTES",
      accessHeading: "Abre tu itinerario o cotización",
      accessSubtitle:
        "¿Ya tienes una propuesta con nosotros? Ingresa tu código privado sin contraseña.",
      codeLabel: "Código de acceso",
      codePlaceholder: "Ej. ITN-4829",
      accessCta: "Ver itinerario",
      accessHint: "El acceso por código protege tu cotización sin obligarte a crear una cuenta.",
    },
    reviews: {
      eyebrow: "HISTORIAS DE VIAJEROS",
      heading: "Diseñado para viajes reales",
      subtitle:
        "Lo que cuentan nuestros viajeros sobre planear rutas y cotizaciones a medida.",
      items: [
        {
          quote:
            "Tener un enlace privado para revisar el itinerario de Japón en familia hizo cada ajuste súper rápido, sin PDFs eternos.",
          author: "Camila R.",
          trip: "Kioto y Tokio · 12 días",
        },
        {
          quote:
            "Ajustaron nuestra ruta en Perú cuando cambiaron los vuelos y lograron mantener los hoteles boutique que queríamos.",
          author: "Daniel M.",
          trip: "Valle Sagrado y Machu Picchu · 8 días",
        },
        {
          quote:
            "Todo desde las ventanas de auroras en Islandia hasta los traslados estuvo claro antes de confirmar.",
          author: "Sofía y Lucas",
          trip: "Reikiavik y Costa Sur · 7 días",
        },
      ],
    },
    footer: {
      navAria: "Navegación del pie de página",
      tagline: "Viajes curados e itinerarios a medida alrededor del mundo.",
      contactLabel: "Asesoría directa",
      email: "hello@itineriaplan.com",
      hours: "Lun–Sáb · Cotizaciones en vivo",
      rights: "Todos los derechos reservados.",
    },
    contact: {
      eyebrow: "ASESORÍA DIRECTA",
      heading: "Habla con un diseñador de viajes",
      subtitle:
        "¿Prefieres WhatsApp, correo o una llamada rápida? Escríbenos directo para empezar tu ruta a medida.",
      channels: [
        { label: "Correo", value: "hello@itineriaplan.com", note: "Respuesta en menos de 24h" },
        { label: "WhatsApp", value: "+1 (305) 555-0194", note: "Lun–Sáb · 9:00–19:00" },
        { label: "Videollamada", value: "Sesión de 20 min", note: "Con cita previa" },
      ],
    },
  },
};

export function getHomeBase(locale: Locale) {
  return locale === "en" ? "/" : "/es/";
}

export function getItineraryPath(locale: Locale) {
  return locale === "en" ? "/itinerary" : "/es/itinerary";
}

export function getNavLinks(locale: Locale, prefixAnchors = false) {
  const { links } = COPY[locale].nav;
  const base = prefixAnchors ? getHomeBase(locale) : "";
  return [
    { label: links.howItWorks, href: `${base}#how-it-works` },
    { label: links.destinations, href: `${base}#destinations` },
    { label: links.stories, href: `${base}#stories` },
    { label: links.contact, href: `${base}#contact` },
  ];
}
