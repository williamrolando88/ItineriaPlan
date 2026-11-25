export interface SlideItem {
  id: number;
  tag: string;
  title: string;
  description: string;
  ctaText: string;
  rating: string;
  bgImage: string;
  cardImage: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export const DEFAULT_SLIDES: SlideItem[] = [
  {
    id: 1,
    tag: "INDONESIA",
    title: "BALI ARCHIPELAGO",
    description:
      "Emerald rice terraces, sacred cliffside temples, and tranquil volcanic shores curated for travelers seeking culture, surf, and quiet luxury.",
    ctaText: "EXPLORE TOUR",
    rating: "4.9",
    bgImage:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1920&q=80",
    cardImage:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    tag: "PERU",
    title: "MACHU PICCHU",
    description:
      "Ancient Inca stonework high above the Sacred Valley, surrounded by cloud-forest ridges and timeless Andean mountain trails.",
    ctaText: "START JOURNEY",
    rating: "4.8",
    bgImage:
      "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=1920&q=80",
    cardImage:
      "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    tag: "GREECE",
    title: "SANTORINI CLIFFS",
    description:
      "Whitewashed villages perched over the Aegean caldera, golden-hour sea breezes, and sun-drenched coastal retreats.",
    ctaText: "BOOK TRIP",
    rating: "4.9",
    bgImage:
      "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1920&q=80",
    cardImage:
      "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    tag: "JAPAN",
    title: "KYOTO TEMPLES",
    description:
      "Lantern-lit wooden alleys, centuries-old zen gardens, and seasonal cherry blossoms woven into Japan's cultural heartland.",
    ctaText: "DISCOVER MORE",
    rating: "4.7",
    bgImage:
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1920&q=80",
    cardImage:
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 5,
    tag: "ICELAND",
    title: "REYKJAVIK AURORA",
    description:
      "Glacial lagoons, black-sand coastlines, and dancing northern lights under crisp subarctic skies.",
    ctaText: "VIEW EXPEDITION",
    rating: "5.0",
    bgImage:
      "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=1920&q=80",
    cardImage:
      "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=600&q=80",
  },
];

export const NAV_LINKS: NavLink[] = [
  { label: "Destinations", href: "#destinations" },
  { label: "Tours", href: "#tours" },
  { label: "Stories", href: "#stories" },
  { label: "Contact", href: "#contact" },
];
