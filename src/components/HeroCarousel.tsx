import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ArrowDown,
  Bookmark,
  Flame,
  Menu,
  Search,
  Star,
  X,
} from "lucide-react";

export interface SlideItem {
  id: number;
  tag: string;
  title: string;
  description: string;
  ctaText: string;
  price: string;
  rating: string;
  bgImage: string;
  cardImage: string;
}

const DEFAULT_SLIDES: SlideItem[] = [
  {
    id: 1,
    tag: "INDONESIA",
    title: "BALI ARCHIPELAGO",
    description:
      "Emerald rice terraces, sacred cliffside temples, and tranquil volcanic shores curated for travelers seeking culture, surf, and quiet luxury.",
    ctaText: "EXPLORE TOUR",
    price: "$1,200",
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
    price: "$1,450",
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
    price: "$1,800",
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
    price: "$2,100",
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
    price: "$2,400",
    rating: "5.0",
    bgImage:
      "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=1920&q=80",
    cardImage:
      "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=600&q=80",
  },
];

const NAV_LINKS = [
  { label: "Destinations", href: "#destinations" },
  { label: "Tours", href: "#tours" },
  { label: "Stories", href: "#stories" },
  { label: "Contact", href: "#contact" },
];

const pad2 = (n: number) => String(n).padStart(2, "0");

export function HeroCarousel({ slides = DEFAULT_SLIDES }: { slides?: SlideItem[] }) {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [savedIds, setSavedIds] = useState<number[]>([]);
  const [menuOpen, setMenuOpen] = useState(false);

  const nextSlide = useCallback(() => {
    setIndex((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [nextSlide, prevSlide]);

  const toggleSave = (e: React.MouseEvent, id: number) => {
    e.stopPropagation();
    setSavedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const current = slides[index];
  const upcomingSlides = Array.from({ length: slides.length - 1 }, (_, offset) => {
    const slideIndex = (index + 1 + offset) % slides.length;
    return { slide: slides[slideIndex], slideIndex };
  });

  return (
    <main
      className="relative isolate min-h-svh overflow-hidden bg-slate-950 text-white select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Fullscreen cross-fade background */}
      <div className="absolute inset-0 -z-20" aria-hidden="true">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${current.bgImage})` }}
          />
        </AnimatePresence>
      </div>

      {/* Vignette overlays */}
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950/90 via-slate-900/60 to-slate-950/15"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/40"
        aria-hidden="true"
      />

      {/* Top Navbar */}
      <header className="relative z-20 flex items-center justify-between px-6 py-6 md:px-12 lg:px-16">
        <a
          href="#top"
          className="flex items-center gap-2.5 text-sm font-black tracking-[0.2em]"
          aria-label="ItineriaPlan home"
        >
          <span className="grid size-9 place-items-center rounded-full border border-white/25 bg-white/10">
            <Flame className="size-5 text-blue-400" aria-hidden="true" />
          </span>
          ITINERIA
        </a>

        <nav
          className="hidden items-center gap-10 text-sm font-medium text-white/70 md:flex"
          aria-label="Main navigation"
        >
          {NAV_LINKS.map((link) => (
            <a key={link.href} className="transition hover:text-white" href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label="Search destinations"
            className="grid size-10 place-items-center rounded-full bg-white text-slate-950 transition hover:bg-blue-100"
          >
            <Search className="size-4" aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((v) => !v)}
            className="grid size-10 place-items-center rounded-full border border-white/25 bg-white/10 transition hover:bg-white/20"
          >
            {menuOpen ? (
              <X className="size-5" aria-hidden="true" />
            ) : (
              <Menu className="size-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="absolute inset-x-6 top-20 z-30 flex flex-col gap-3 rounded-2xl border border-white/15 bg-slate-950/90 p-5 backdrop-blur-xl md:hidden"
            aria-label="Mobile navigation"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium text-white/80 transition hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Main Content Area */}
      <div className="relative mx-auto flex min-h-[calc(100svh-88px)] max-w-[1600px] flex-col justify-center gap-10 px-6 pb-20 pt-6 md:px-12 lg:flex-row lg:items-center lg:justify-between lg:px-16">
        {/* Left Vertical Step Indicator */}
        <aside
          className="absolute left-6 top-1/2 hidden -translate-y-1/2 flex-col items-center md:flex lg:left-16"
          aria-label="Choose destination"
        >
          <div className="relative flex flex-col items-center gap-5">
            <span className="absolute top-2 bottom-2 w-px bg-white/25" aria-hidden="true" />
            {slides.map((slide, i) => {
              const isActive = i === index;
              return (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Go to ${slide.title}`}
                  aria-current={isActive ? "step" : undefined}
                  className="group relative z-10 grid size-4 place-items-center"
                >
                  <span
                    className={`size-2 rounded-full transition-all duration-300 ${
                      isActive
                        ? "scale-125 bg-blue-500 ring-4 ring-blue-500/20"
                        : "bg-white/55 group-hover:scale-125 group-hover:bg-white"
                    }`}
                  />
                </button>
              );
            })}
          </div>
          <span className="mt-5 text-[10px] font-bold tracking-[0.16em] text-white/70">
            {pad2(index + 1)} <span className="text-white/35">/</span> {pad2(slides.length)}
          </span>
        </aside>

        {/* Left Column: Hero Text */}
        <section
          id="top"
          className="relative z-10 w-full max-w-[620px] md:pl-16 lg:pl-24"
          aria-live="polite"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="rounded-md bg-blue-600 px-2.5 py-1 text-[10px] font-bold tracking-[0.14em]">
                  {current.tag}
                </span>
                <span className="h-px w-10 bg-white/50" />
                <span className="text-[10px] font-semibold tracking-[0.18em] text-white/65">
                  THE WORLD IS YOURS
                </span>
              </div>

              <h1 className="max-w-[680px] text-5xl font-black leading-[0.94] tracking-[-0.055em] text-white sm:text-6xl md:text-7xl lg:text-[84px]">
                {current.title}
              </h1>

              <p className="mt-6 max-w-lg text-sm leading-relaxed text-white/75 md:text-base">
                {current.description}
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-5">
                <button
                  type="button"
                  className="inline-flex items-center gap-3 rounded-xl bg-blue-600 px-7 py-3.5 text-xs font-bold tracking-wide text-white shadow-lg shadow-blue-600/30 transition hover:bg-blue-500"
                >
                  {current.ctaText}
                  <ArrowRight className="size-4" aria-hidden="true" />
                </button>
                <div className="flex items-center gap-2 text-sm text-white/80">
                  <span className="font-bold text-white">{current.price}</span>
                  <span className="text-white/45">/ person</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </section>

        {/* Right Column: Upcoming Destination Cards + Controls */}
        <section className="relative z-10 flex flex-col gap-5 lg:items-end">
          <div className="flex gap-4 overflow-x-auto pb-2 lg:overflow-visible lg:pb-0">
            {upcomingSlides.map(({ slide, slideIndex }) => {
              const isSaved = savedIds.includes(slide.id);
              return (
                <motion.button
                  key={slide.id}
                  type="button"
                  layout
                  onClick={() => setIndex(slideIndex)}
                  aria-label={`Preview ${slide.title}, ${slide.tag}, rated ${slide.rating}`}
                  className="group relative h-[210px] w-[150px] shrink-0 overflow-hidden rounded-2xl border border-white/15 text-left shadow-2xl transition duration-300 hover:-translate-y-1 hover:border-white/40 sm:h-[240px] sm:w-[170px] lg:h-[290px] lg:w-[195px]"
                >
                  <img
                    src={slide.cardImage}
                    alt={`${slide.title}, ${slide.tag}`}
                    className="absolute inset-0 size-full object-cover transition duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/15 to-slate-950/15" />

                  <span
                    role="button"
                    tabIndex={0}
                    aria-label={isSaved ? `Remove ${slide.title} bookmark` : `Bookmark ${slide.title}`}
                    onClick={(e) => toggleSave(e, slide.id)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        toggleSave(e as unknown as React.MouseEvent, slide.id);
                      }
                    }}
                    className={`absolute right-3 top-3 grid size-8 place-items-center rounded-full transition ${
                      isSaved
                        ? "bg-blue-600 text-white"
                        : "bg-white/90 text-slate-900 hover:bg-white"
                    }`}
                  >
                    <Bookmark
                      className={`size-3.5 ${isSaved ? "fill-current" : ""}`}
                      aria-hidden="true"
                    />
                  </span>

                  <span className="absolute inset-x-4 bottom-4">
                    <span className="mb-1 block text-[9px] font-bold tracking-[0.17em] text-white/70">
                      {slide.tag}
                    </span>
                    <span className="block truncate text-sm font-extrabold leading-tight text-white">
                      {slide.title}
                    </span>
                    <span className="mt-2 flex items-center gap-1 text-[10px] font-medium text-white/90">
                      <Star
                        className="size-3 fill-amber-300 text-amber-300"
                        aria-hidden="true"
                      />
                      {slide.rating}
                      <span className="ml-auto text-white/60">{pad2(slide.id)}</span>
                    </span>
                  </span>
                </motion.button>
              );
            })}
          </div>

          {/* Navigation Controls & Bottom Indicator */}
          <div className="flex w-full items-center justify-between">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={prevSlide}
                aria-label="Previous destination"
                className="grid size-10 place-items-center rounded-full border border-white/15 bg-white/15 text-white backdrop-blur-md transition hover:bg-white/25"
              >
                <ArrowLeft className="size-4" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={nextSlide}
                aria-label="Next destination"
                className="grid size-10 place-items-center rounded-full border border-white/15 bg-white/15 text-white backdrop-blur-md transition hover:bg-white/25"
              >
                <ArrowRight className="size-4" aria-hidden="true" />
              </button>
            </div>

            <div className="flex items-center gap-3 text-[10px] font-semibold tracking-[0.16em] text-white/65">
              <span>{pad2(index + 1)}</span>
              <span className="h-px w-16 bg-white/45" />
              <span>{pad2(slides.length)}</span>
              <ArrowDown className="ml-1 size-3" aria-hidden="true" />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default HeroCarousel;
