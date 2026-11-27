export type Locale = "en" | "es";

export const DEFAULT_LOCALE: Locale = "en";

export const LOCALE_LABELS: Record<Locale, string> = {
  en: "EN",
  es: "ES",
};

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
  reviews: {
    eyebrow: string;
    heading: string;
    subtitle: string;
    cardPlaceholder: string;
  };
  footer: {
    navAria: string;
    tagline: string;
    rights: string;
    placeholderNote: string;
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
    reviews: {
      eyebrow: "TRAVELER STORIES",
      heading: "Reviews Carousel",
      subtitle: "Placeholder for upcoming traveler reviews and testimonials carousel.",
      cardPlaceholder: "Review card placeholder",
    },
    footer: {
      navAria: "Footer navigation",
      tagline: "Curated journeys and bespoke travel itineraries across the world.",
      rights: "All rights reserved.",
      placeholderNote: "Placeholder footer — ready for contact details & legal links.",
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
    reviews: {
      eyebrow: "HISTORIAS DE VIAJEROS",
      heading: "Reseñas de viajeros",
      subtitle: "Espacio para próximas reseñas y testimonios de viajes a medida.",
      cardPlaceholder: "Tarjeta de reseña",
    },
    footer: {
      navAria: "Navegación del pie de página",
      tagline: "Viajes curados e itinerarios a medida alrededor del mundo.",
      rights: "Todos los derechos reservados.",
      placeholderNote: "Pie de página provisional — listo para contacto y legales.",
    },
  },
};

export function getNavLinks(locale: Locale) {
  const { links } = COPY[locale].nav;
  return [
    { label: links.destinations, href: "#destinations" },
    { label: links.howItWorks, href: "#how-it-works" },
    { label: links.stories, href: "#stories" },
    { label: links.contact, href: "#contact" },
  ];
}
