import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ArrowDown,
  Bookmark,
  Star,
} from "lucide-react";
import { BrandIcon } from "./BrandIcon";

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

const DEFAULT_SLIDES: SlideItem[] = [
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

const NAV_LINKS = [
  { label: "Destinations", href: "#destinations" },
  { label: "Tours", href: "#tours" },
  { label: "Stories", href: "#stories" },
  { label: "Contact", href: "#contact" },
];

const pad2 = (n: number) => String(n).padStart(2, "0");

const EASE_OUT_EXPO = [0.22, 1, 0.36, 1] as const;

export function HeroCarousel({ slides = DEFAULT_SLIDES }: { slides?: SlideItem[] }) {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [savedIds, setSavedIds] = useState<number[]>([]);

  const nextSlide = useCallback(() => {
    setIndex((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  // Auto-advance every 5s unless user hovers the preview cards
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
    <main className="relative isolate min-h-svh overflow-hidden bg-slate-950 text-white select-none">
      {/* Fullscreen cross-fade background */}
      <div className="absolute inset-0 -z-20" aria-hidden="true">
        <AnimatePresence initial={false} mode="popLayout">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, scale: 1.06 }}
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
      <header className="relative z-20 flex items-center justify-between px-6 py-6 md:grid md:grid-cols-[1fr_auto_1fr] md:px-8 lg:px-10">
        <a
          href="#top"
          className="flex items-center gap-2.5 justify-self-start text-sm font-black tracking-[0.2em]"
          aria-label="ItineriaPlan home"
        >
          <BrandIcon />
          ITINERIA
        </a>

        <nav
          className="hidden items-center gap-10 justify-self-center text-sm font-medium text-white/70 md:flex"
          aria-label="Main navigation"
        >
          {NAV_LINKS.map((link) => (
            <a key={link.href} className="transition hover:text-white" href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block" aria-hidden="true" />
      </header>

      {/* Left Vertical Step Indicator (centered relative to full <main> section) */}
      <aside
        className="absolute left-4 top-1/2 z-20 hidden h-[60%] -translate-y-1/2 flex-col items-center md:left-5 md:flex lg:left-6"
        aria-label="Choose destination"
      >
        <div className="relative flex flex-1 flex-col items-center justify-between">
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
      </aside>

      {/* Hero Stage */}
      <div className="relative flex min-h-[calc(100svh-88px)] w-full flex-col justify-between gap-8 px-6 pb-16 pt-4 md:px-8 lg:flex-row lg:items-center lg:justify-between lg:gap-8 lg:px-10 lg:pb-20">
        {/* Main Hero Text (vertically centered on left) */}
        <section
          id="top"
          className="relative z-10 w-full md:pl-10 lg:flex-1 lg:pl-14"
          aria-live="polite"
        >
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.45, ease: EASE_OUT_EXPO }}
              className="max-w-[540px] lg:max-w-[480px] xl:max-w-[500px] 3xl:max-w-[540px]"
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

              <h1 className="max-w-[680px] text-4xl font-black leading-[0.94] tracking-[-0.055em] text-white sm:text-5xl md:text-6xl lg:text-[64px] xl:text-7xl 3xl:text-[88px]">
                {current.title}
              </h1>

              <p className="mt-6 max-w-lg text-sm leading-relaxed text-white/75 md:text-base">
                {current.description}
              </p>

              <div className="mt-7">
                <button
                  type="button"
                  className="inline-flex items-center gap-3 rounded-xl bg-blue-600 px-7 py-3.5 text-xs font-bold tracking-wide text-white shadow-lg shadow-blue-600/30 transition hover:bg-blue-500"
                >
                  {current.ctaText}
                  <ArrowRight className="size-4" aria-hidden="true" />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </section>

        {/* Bottom-Left Social Links */}
        <div
          className="absolute bottom-5 left-6 z-10 flex items-center gap-4 md:bottom-7 md:left-8 lg:left-10"
          aria-label="Social media"
        >
          <a
            href="https://facebook.com"
            aria-label="Facebook"
            className="text-sm font-bold text-white/60 transition hover:text-white"
          >
            f
          </a>
          <a
            href="https://twitter.com"
            aria-label="Twitter"
            className="text-xs font-bold text-white/60 transition hover:text-white"
          >
            𝕏
          </a>
          <a
            href="https://instagram.com"
            aria-label="Instagram"
            className="text-base font-semibold text-white/60 transition hover:text-white"
          >
            ◎
          </a>
          <span className="ml-1 hidden h-px w-10 bg-white/30 sm:block" />
          <span className="hidden text-[9px] font-semibold tracking-[0.18em] text-white/45 sm:block">
            FOLLOW THE JOURNEY
          </span>
        </div>

        {/* Bottom-Right Upcoming Destination Cards + Controls */}
        <section
          className="relative z-10 w-full lg:w-[336px] lg:shrink-0 lg:self-end xl:w-[580px] 3xl:w-[540px]"
          aria-label="Upcoming destinations"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="mb-4 flex items-center justify-between md:hidden">
            <span className="text-[10px] font-semibold tracking-[0.2em] text-white/60">
              UP NEXT
            </span>
            <span className="text-xs text-white/70">
              {pad2(index + 1)} <span className="text-white/35">—</span> {pad2(slides.length)}
            </span>
          </div>

          <div className="flex gap-3 overflow-x-auto pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:justify-start md:gap-4">
            <AnimatePresence initial={false} mode="popLayout">
              {upcomingSlides.map(({ slide, slideIndex }, order) => {
                const isSaved = savedIds.includes(slide.id);
                return (
                  <motion.button
                    key={slide.id}
                    type="button"
                    layout="position"
                    initial={{ opacity: 0, x: 40, scale: 0.94 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: -40, scale: 0.94 }}
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.5, ease: EASE_OUT_EXPO }}
                    onClick={() => setIndex(slideIndex)}
                    aria-label={`Preview ${slide.title}, ${slide.tag}, rated ${slide.rating}`}
                    className={`group relative h-[190px] w-[142px] shrink-0 overflow-hidden rounded-2xl border border-white/15 text-left shadow-2xl transition-colors duration-300 hover:border-white/40 sm:h-[220px] sm:w-[160px] md:h-[240px] md:w-[172px] lg:h-[248px] lg:w-[160px] xl:h-[260px] xl:w-[180px] 3xl:h-[300px] 3xl:w-[200px] ${
                      order >= 2 ? "hidden sm:block lg:hidden xl:block" : ""
                    }`}
                  >
                  <img
                    src={slide.cardImage}
                    alt={`${slide.title}, ${slide.tag}`}
                    className="absolute inset-0 size-full object-cover transition duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/10 to-slate-950/15" />

                  <span
                    role="button"
                    tabIndex={0}
                    aria-label={
                      isSaved ? `Remove ${slide.title} bookmark` : `Bookmark ${slide.title}`
                    }
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
                    <span className="block text-sm font-extrabold leading-tight text-white">
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
            </AnimatePresence>
          </div>

          {/* Navigation Controls & Bottom Indicator */}
          <div className="mt-1 hidden items-center justify-between md:flex">
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
