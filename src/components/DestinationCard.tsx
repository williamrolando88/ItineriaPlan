import type React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Bookmark, Star } from "lucide-react";
import type { SlideItem } from "../data/hero";

const EASE_OUT_EXPO = [0.22, 1, 0.36, 1] as const;

interface DestinationCardProps {
  slide: SlideItem;
  order: number;
  isSaved: boolean;
  indexLabel: string;
  onSelect: () => void;
  onToggleSave: (e: React.MouseEvent, id: number) => void;
}

export function DestinationCard({
  slide,
  order,
  isSaved,
  indexLabel,
  onSelect,
  onToggleSave,
}: DestinationCardProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      layout={reduceMotion ? false : "position"}
      initial={reduceMotion ? false : { opacity: 0, x: 40, scale: 0.94 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      exit={reduceMotion ? { opacity: 0 } : { opacity: 0, x: -40, scale: 0.94 }}
      whileHover={reduceMotion ? undefined : { y: -4 }}
      transition={{ duration: reduceMotion ? 0.15 : 0.5, ease: EASE_OUT_EXPO }}
      className={`group relative h-[190px] w-[142px] shrink-0 overflow-hidden rounded-2xl border border-white/15 shadow-2xl transition-colors duration-300 hover:border-white/40 sm:h-[220px] sm:w-[160px] md:h-[240px] md:w-[172px] lg:h-[248px] lg:w-[160px] xl:h-[260px] xl:w-[180px] 3xl:h-[300px] 3xl:w-[200px] ${
        order >= 2 ? "hidden sm:block lg:hidden xl:block" : ""
      }`}
    >
      <button
        type="button"
        onClick={onSelect}
        aria-label={`Preview ${slide.title}, ${slide.tag}, rated ${slide.rating}`}
        className="relative block size-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-blue-500"
      >
        <img
          src={slide.cardImage}
          alt={`${slide.title}, ${slide.tag}`}
          className="absolute inset-0 size-full object-cover transition duration-700 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
          loading="lazy"
        />
        <span className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/10 to-slate-950/15" />

        <span className="absolute inset-x-4 bottom-4">
          <span className="mb-1 block text-[9px] font-bold tracking-[0.17em] text-white/70">
            {slide.tag}
          </span>
          <span className="block text-sm font-extrabold leading-tight text-white">
            {slide.title}
          </span>
          <span className="mt-2 flex items-center gap-1 text-[10px] font-medium text-white/90">
            <Star className="size-3 fill-amber-300 text-amber-300" aria-hidden="true" />
            {slide.rating}
            <span className="ml-auto text-white/60">{indexLabel}</span>
          </span>
        </span>
      </button>

      <button
        type="button"
        aria-label={isSaved ? `Remove ${slide.title} bookmark` : `Bookmark ${slide.title}`}
        aria-pressed={isSaved}
        onClick={(e) => onToggleSave(e, slide.id)}
        className={`absolute right-3 top-3 z-10 grid size-8 place-items-center rounded-full transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
          isSaved
            ? "bg-blue-600 text-white"
            : "bg-white/90 text-slate-900 hover:bg-white"
        }`}
      >
        <Bookmark
          className={`size-3.5 ${isSaved ? "fill-current" : ""}`}
          aria-hidden="true"
        />
      </button>
    </motion.div>
  );
}
