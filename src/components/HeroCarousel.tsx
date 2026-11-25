import type React from "react";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowDown } from "lucide-react";
import { DEFAULT_SLIDES, NAV_LINKS, type SlideItem } from "../data/hero";
import { Navbar } from "./Navbar";
import { DestinationCard } from "./DestinationCard";

export type { SlideItem };

const pad2 = (n: number) => String(n).padStart(2, "0");

const EASE_OUT_EXPO = [0.22, 1, 0.36, 1] as const;

export function HeroCarousel({ slides = DEFAULT_SLIDES }: { slides?: SlideItem[] }) {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [savedIds, setSavedIds] = useState<number[]>([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  const slideCount = slides.length;
  const safeIndex = slideCount > 0 ? index % slideCount : 0;

  const nextSlide = useCallback(() => {
    if (slideCount <= 1) return;
    setIndex((prev) => (prev + 1) % slideCount);
  }, [slideCount]);

  const prevSlide = useCallback(() => {
    if (slideCount <= 1) return;
    setIndex((prev) => (prev - 1 + slideCount) % slideCount);
  }, [slideCount]);

  // Auto-advance every 5s unless user hovers the preview cards or prefers reduced motion
  useEffect(() => {
    if (isPaused || reduceMotion || slideCount <= 1) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isPaused, reduceMotion, slideCount, nextSlide]);

  useEffect(() => {
    if (slideCount <= 1) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (menuOpen || e.metaKey || e.ctrlKey || e.altKey) return;
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.tagName === "SELECT" ||
          target.isContentEditable)
      ) {
        return;
      }
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen, slideCount, nextSlide, prevSlide]);

  // Preload next slide background image to avoid flash on transition
  useEffect(() => {
    if (slideCount <= 1) return;
    const nextBg = slides[(safeIndex + 1) % slideCount].bgImage;
    const img = new Image();
    img.src = nextBg;
  }, [slides, safeIndex, slideCount]);

  const toggleSave = (e: React.MouseEvent, id: number) => {
    e.stopPropagation();
    setSavedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  if (slideCount === 0) {
    return (
      <main className="relative isolate flex min-h-[max(100svh,560px)] flex-col overflow-hidden bg-slate-950 text-white select-none">
        <Navbar links={NAV_LINKS} menuOpen={menuOpen} onMenuOpenChange={setMenuOpen} />
      </main>
    );
  }

  const current = slides[safeIndex];
  const upcomingSlides = Array.from({ length: slideCount - 1 }, (_, offset) => {
    const slideIndex = (safeIndex + 1 + offset) % slideCount;
    return { slide: slides[slideIndex], slideIndex };
  });

  return (
    <main className="relative isolate flex min-h-[max(100svh,560px)] flex-col overflow-hidden bg-slate-950 text-white select-none">
      {/* Fullscreen cross-fade background */}
      <div className="absolute inset-0 -z-20" aria-hidden="true">
        <AnimatePresence initial={false} mode="popLayout">
          <motion.img
            key={current.id}
            src={current.bgImage}
            alt=""
            fetchPriority="high"
            decoding="async"
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduceMotion ? 0.15 : 0.9, ease: "easeInOut" }}
            className="absolute inset-0 size-full object-cover"
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

      <Navbar links={NAV_LINKS} menuOpen={menuOpen} onMenuOpenChange={setMenuOpen} />

      {/* Left Vertical Step Indicator (centered relative to full <main> section) */}
      <aside
        className="absolute left-4 top-1/2 z-20 hidden h-[60%] -translate-y-1/2 flex-col items-center lg:left-6 lg:flex"
        aria-label="Choose destination"
      >
        <div className="relative flex flex-1 flex-col items-center justify-between">
          <span className="absolute top-2 bottom-2 w-px bg-white/25" aria-hidden="true" />
          {slides.map((slide, i) => {
            const isActive = i === safeIndex;
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
      <div className="relative grid flex-1 grid-cols-1 gap-8 px-6 pb-6 pt-4 md:px-8 md:pb-8 lg:grid-cols-[1fr_auto] lg:grid-rows-[1fr_auto] lg:gap-x-8 lg:gap-y-6 lg:px-10 lg:pb-10">
        {/* Main Hero Text (vertically centered on left) */}
        <section
          id="top"
          className="relative z-10 w-full self-center lg:col-start-1 lg:row-start-1 lg:pl-14"
          aria-live="polite"
        >
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={current.id}
              initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -24 }}
              transition={{ duration: reduceMotion ? 0.15 : 0.45, ease: EASE_OUT_EXPO }}
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
          className="relative z-10 order-3 flex items-center gap-4 lg:order-none lg:col-start-1 lg:row-start-2 lg:self-end"
          aria-label="Social media"
        >
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="text-sm font-bold text-white/60 transition hover:text-white"
          >
            <span aria-hidden="true">f</span>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="text-xs font-bold text-white/60 transition hover:text-white"
          >
            <span aria-hidden="true">𝕏</span>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-base font-semibold text-white/60 transition hover:text-white"
          >
            <span aria-hidden="true">◎</span>
          </a>
          <span className="ml-1 hidden h-px w-10 bg-white/30 sm:block" />
          <span className="hidden text-[9px] font-semibold tracking-[0.18em] text-white/45 sm:block">
            FOLLOW THE JOURNEY
          </span>
        </div>

        {/* Bottom-Right Upcoming Destination Cards + Controls */}
        <section
          className="relative z-10 w-full lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:w-[336px] lg:shrink-0 lg:self-end xl:w-[580px] 3xl:w-[640px]"
          aria-label="Upcoming destinations"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="flex gap-3 overflow-x-auto pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:justify-start md:gap-4">
            <AnimatePresence initial={false} mode="popLayout">
              {upcomingSlides.map(({ slide, slideIndex }, order) => (
                <DestinationCard
                  key={slide.id}
                  slide={slide}
                  order={order}
                  isSaved={savedIds.includes(slide.id)}
                  indexLabel={pad2(slide.id)}
                  onSelect={() => setIndex(slideIndex)}
                  onToggleSave={toggleSave}
                />
              ))}
            </AnimatePresence>
          </div>

          {/* Navigation Controls & Bottom Indicator */}
          <div className="mt-1 flex items-center justify-between">
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
              <span>{pad2(safeIndex + 1)}</span>
              <span className="h-px w-16 bg-white/45" />
              <span>{pad2(slideCount)}</span>
              <ArrowDown className="ml-1 size-3" aria-hidden="true" />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default HeroCarousel;
