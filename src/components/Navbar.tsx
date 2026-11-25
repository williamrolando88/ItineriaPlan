import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { BrandIcon } from "./BrandIcon";
import type { NavLink } from "../data/hero";

interface NavbarProps {
  links: NavLink[];
  menuOpen: boolean;
  onMenuOpenChange: (open: boolean) => void;
}

export function Navbar({ links, menuOpen, onMenuOpenChange }: NavbarProps) {
  const [selectedNav, setSelectedNav] = useState<string | null>(null);

  return (
    <>
      <header className="relative z-20 flex items-center justify-between px-6 py-6 md:px-8 lg:grid lg:grid-cols-[1fr_auto_1fr] lg:px-10">
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
          {links.map((link) => (
            <a key={link.href} className="transition hover:text-white" href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => onMenuOpenChange(!menuOpen)}
          className="grid size-10 place-items-center rounded-full border border-white/25 bg-white/10 transition hover:bg-white/20 md:hidden"
        >
          {menuOpen ? (
            <X className="size-5" aria-hidden="true" />
          ) : (
            <Menu className="size-5" aria-hidden="true" />
          )}
        </button>

        <div className="hidden lg:block" aria-hidden="true" />
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="absolute right-6 top-20 z-30 flex w-max flex-col items-end gap-1 rounded-2xl border border-white/15 bg-slate-950/90 p-3 text-right backdrop-blur-xl md:hidden"
            aria-label="Mobile navigation"
          >
            {links.map((link) => {
              const isSelected = selectedNav === link.href;
              return (
                <motion.a
                  key={link.href}
                  href={link.href}
                  whileTap={{ scale: 0.96 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => {
                    setSelectedNav(link.href);
                    setTimeout(() => {
                      onMenuOpenChange(false);
                      setSelectedNav(null);
                    }, 200);
                  }}
                  className={`block w-full rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                    isSelected
                      ? "bg-white/20 text-white"
                      : "text-white/80 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {link.label}
                </motion.a>
              );
            })}
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
