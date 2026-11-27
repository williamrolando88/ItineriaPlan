import type { Locale } from "../i18n/translations";

export interface SlideItem {
  id: number;
  slug: string;
  tag: string;
  title: string;
  description: string;
  ctaText: string;
  duration: string;
  styleLabel: string;
  rating: string;
  bgImage: string;
  cardImage: string;
}

export interface NavLink {
  label: string;
  href: string;
}

const SLIDE_MEDIA: Record<number, { slug: string; rating: string; bgImage: string; cardImage: string }> = {
  1: {
    slug: "bali",
    rating: "4.9",
    bgImage:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1920&q=80",
    cardImage:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&q=80",
  },
  2: {
    slug: "machu-picchu",
    rating: "4.8",
    bgImage:
      "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=1920&q=80",
    cardImage:
      "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=600&q=80",
  },
  3: {
    slug: "santorini",
    rating: "4.9",
    bgImage:
      "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1920&q=80",
    cardImage:
      "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=600&q=80",
  },
  4: {
    slug: "kyoto",
    rating: "4.7",
    bgImage:
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1920&q=80",
    cardImage:
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=600&q=80",
  },
  5: {
    slug: "reykjavik",
    rating: "5.0",
    bgImage:
      "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=1920&q=80",
    cardImage:
      "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=600&q=80",
  },
};

const SLIDE_COPY: Record<
  Locale,
  Array<Omit<SlideItem, "slug" | "rating" | "bgImage" | "cardImage">>
> = {
  en: [
    {
      id: 1,
      tag: "INDONESIA",
      title: "BALI ARCHIPELAGO",
      description:
        "Emerald rice terraces, sacred cliffside temples, and tranquil volcanic shores curated for travelers seeking culture, surf, and quiet luxury.",
      ctaText: "QUOTE THIS TRIP",
      duration: "8–12 days · Custom",
      styleLabel: "Culture & Quiet Luxury",
    },
    {
      id: 2,
      tag: "PERU",
      title: "MACHU PICCHU",
      description:
        "Ancient Inca stonework high above the Sacred Valley, surrounded by cloud-forest ridges and timeless Andean mountain trails.",
      ctaText: "QUOTE THIS TRIP",
      duration: "6–9 days · Custom",
      styleLabel: "Andean Heritage",
    },
    {
      id: 3,
      tag: "GREECE",
      title: "SANTORINI CLIFFS",
      description:
        "Whitewashed villages perched over the Aegean caldera, golden-hour sea breezes, and sun-drenched coastal retreats.",
      ctaText: "QUOTE THIS TRIP",
      duration: "5–8 days · Custom",
      styleLabel: "Coastal Escape",
    },
    {
      id: 4,
      tag: "JAPAN",
      title: "KYOTO TEMPLES",
      description:
        "Lantern-lit wooden alleys, centuries-old zen gardens, and seasonal cherry blossoms woven into Japan's cultural heartland.",
      ctaText: "QUOTE THIS TRIP",
      duration: "9–14 days · Custom",
      styleLabel: "Tradition & Gastronomy",
    },
    {
      id: 5,
      tag: "ICELAND",
      title: "REYKJAVIK AURORA",
      description:
        "Glacial lagoons, black-sand coastlines, and dancing northern lights under crisp subarctic skies.",
      ctaText: "QUOTE THIS TRIP",
      duration: "6–10 days · Custom",
      styleLabel: "Arctic Expedition",
    },
  ],
  es: [
    {
      id: 1,
      tag: "INDONESIA",
      title: "ARCHIPIÉLAGO DE BALI",
      description:
        "Terrazas de arroz esmeralda, templos sagrados sobre acantilados y costas volcánicas curadas para quienes buscan cultura, surf y lujo silencioso.",
      ctaText: "COTIZAR ESTE VIAJE",
      duration: "8–12 días · A medida",
      styleLabel: "Cultura y Lujo Silencioso",
    },
    {
      id: 2,
      tag: "PERÚ",
      title: "MACHU PICCHU",
      description:
        "Arquitectura inca sobre el Valle Sagrado, rodeada de bosques nublados y rutas andinas atemporales.",
      ctaText: "COTIZAR ESTE VIAJE",
      duration: "6–9 días · A medida",
      styleLabel: "Patrimonio Andino",
    },
    {
      id: 3,
      tag: "GRECIA",
      title: "SANTORINI",
      description:
        "Pueblos blancos sobre la caldera del Egeo, brisas de atardecer y refugios costeros bañados por el sol.",
      ctaText: "COTIZAR ESTE VIAJE",
      duration: "5–8 días · A medida",
      styleLabel: "Escapada Costera",
    },
    {
      id: 4,
      tag: "JAPÓN",
      title: "TEMPLOS DE KIOTO",
      description:
        "Callejones iluminados con linternas, jardines zen centenarios y cerezos en flor en el corazón cultural de Japón.",
      ctaText: "COTIZAR ESTE VIAJE",
      duration: "9–14 días · A medida",
      styleLabel: "Tradición y Gastronomía",
    },
    {
      id: 5,
      tag: "ISLANDIA",
      title: "AURORAS EN REIKIAVIK",
      description:
        "Lagunas glaciares, playas de arena negra y auroras boreales danzando bajo cielos subárticos.",
      ctaText: "COTIZAR ESTE VIAJE",
      duration: "6–10 días · A medida",
      styleLabel: "Expedición Ártica",
    },
  ],
};

export function getSlides(locale: Locale = "en"): SlideItem[] {
  return SLIDE_COPY[locale].map((item) => ({
    ...item,
    ...SLIDE_MEDIA[item.id],
  }));
}

export const DEFAULT_SLIDES: SlideItem[] = getSlides("en");

export const NAV_LINKS: NavLink[] = [
  { label: "Destinations", href: "#destinations" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Stories", href: "#stories" },
  { label: "Contact", href: "#contact" },
];
