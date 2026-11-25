import type React from "react";
import { motion } from "framer-motion";
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
  return (
    <motion.button
      type="button"
      layout="position"
      initial={{ opacity: 0, x: 40, scale: 0.94 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      exit={{ opacity: 0, x: -40, scale: 0.94 }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.5, ease: EASE_OUT_EXPO }}
      onClick={onSelect}
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
        aria-label={isSaved ? `Remove ${slide.title} bookmark` : `Bookmark ${slide.title}`}
        onClick={(e) => onToggleSave(e, slide.id)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            onToggleSave(e as unknown as React.MouseEvent, slide.id);
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
          <Star className="size-3 fill-amber-300 text-amber-300" aria-hidden="true" />
          {slide.rating}
          <span className="ml-auto text-white/60">{indexLabel}</span>
        </span>
      </span>
    </motion.button>
  );
}
