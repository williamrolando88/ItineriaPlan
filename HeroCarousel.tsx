import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

export interface SlideItem {
  id: number;
  tag: string;
  title: string;
  description: string;
  ctaText: string;
  bgImage: string;
  cardImage: string;
}

const DEFAULT_SLIDES: SlideItem[] = [
  {
    id: 1,
    tag: "FEATURED 01",
    title: "FIRST DESTINATION",
    description: "Experience untouched landscapes, authentic cultures, and breathtaking natural wonders curated for the modern traveler.",
    ctaText: "Explore Now",
    bgImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=80",
    cardImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    tag: "FEATURED 02",
    title: "SECOND DESTINATION",
    description: "Ancient heritage meets timeless architecture in one of the most remarkable historical wonders of the world.",
    ctaText: "Discover More",
    bgImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80",
    cardImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    tag: "FEATURED 03",
    title: "THIRD DESTINATION",
    description: "Vibrant coastlines, crystal-clear turquoise waters, and serene retreats designed for pure relaxation.",
    ctaText: "Book Journey",
    bgImage: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1920&q=80",
    cardImage: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    tag: "FEATURED 04",
    title: "FOURTH DESTINATION",
    description: "Towering snow-capped peaks, alpine trails, and untamed wilderness for the bold and adventurous spirit.",
    ctaText: "View Packages",
    bgImage: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1920&q=80",
    cardImage: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 5,
    tag: "FEATURED 05",
    title: "FIFTH DESTINATION",
    description: "Dynamic city skylines, world-class culinary scenes, and rich cultural traditions that come alive after dark.",
    ctaText: "Plan Visit",
    bgImage: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1920&q=80",
    cardImage: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=600&q=80",
  },
];

export function HeroCarousel({ slides = DEFAULT_SLIDES }: { slides?: SlideItem[] }) {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-play cada 5 segundos (pausa con hover)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused, slides.length]);

  const nextSlide = () => setIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  const current = slides[index];

  return (
    <div
      className="relative w-full h-screen overflow-hidden bg-slate-950 text-white select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Fondo a pantalla completa con cross-fade */}
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

      {/* Gradientes de viñeta para contraste */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/50 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/30" />

      {/* Barra lateral izquierda: 5 indicadores de paso sincronizados */}
      <div className="absolute left-8 md:left-12 top-1/2 -translate-y-1/2 z-20 flex flex-col items-center gap-6">
        <div className="relative flex flex-col items-center gap-4">
          <div className="absolute top-0 bottom-0 w-[1.5px] bg-white/20" />

          {slides.map((slide, i) => {
            const isActive = i === index;
            return (
              <button
                key={slide.id}
                onClick={() => setIndex(i)}
                className="relative z-10 flex items-center justify-center p-1 group"
                aria-label={`Go to slide ${i + 1}`}
              >
                <motion.div
                  animate={{
                    scale: isActive ? 1.3 : 1,
                    backgroundColor: isActive ? "#3B82F6" : "rgba(255, 255, 255, 0.4)",
                  }}
                  transition={{ duration: 0.3 }}
                  className="w-2.5 h-2.5 rounded-full group-hover:bg-white"
                />
              </button>
            );
          })}
        </div>

        <span className="text-xs font-mono text-white/60 tracking-widest mt-2">
          {`0${index + 1} / 0${slides.length}`}
        </span>
      </div>

      {/* Contenido Principal con animación vertical (Scroll-up) */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-8 md:px-20 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full items-center">
          
          {/* Textos */}
          <div className="lg:col-span-6 pl-10 md:pl-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col items-start gap-4"
              >
                <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-md bg-blue-600/90 text-white">
                  {current.tag}
                </span>

                <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-none text-white">
                  {current.title}
                </h1>

                <p className="text-white/70 text-sm md:text-base max-w-lg leading-relaxed">
                  {current.description}
                </p>

                <button className="mt-2 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 font-semibold text-sm transition-all shadow-lg shadow-blue-600/30">
                  {current.ctaText}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Carrusel de tarjetas a la derecha */}
          <div className="lg:col-span-6 flex flex-col items-end gap-6 overflow-hidden">
            <div className="flex gap-4 items-center">
              {slides.map((slide, i) => {
                if (i === index) return null;
                return (
                  <motion.div
                    key={slide.id}
                    layout
                    onClick={() => setIndex(i)}
                    className="cursor-pointer relative w-44 md:w-52 h-64 md:h-72 rounded-2xl overflow-hidden border border-white/10 hover:border-white/40 transition-all flex-shrink-0"
                    whileHover={{ scale: 1.03 }}
                  >
                    <img
                      src={slide.cardImage}
                      alt={slide.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3">
                      <span className="text-[10px] uppercase font-bold text-blue-400">
                        {slide.tag}
                      </span>
                      <p className="text-sm font-bold text-white truncate">
                        {slide.title}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Controles de navegación */}
            <div className="flex items-center gap-3 pr-2">
              <button
                onClick={prevSlide}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md flex items-center justify-center transition-colors"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md flex items-center justify-center transition-colors"
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default HeroCarousel;
