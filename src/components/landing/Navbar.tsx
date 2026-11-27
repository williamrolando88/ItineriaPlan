import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { BrandIcon } from "./BrandIcon";
import { NAV_LINKS, type NavLink } from "../../data/hero";

interface NavbarProps {
  links?: NavLink[];
}

export function Navbar({ links = NAV_LINKS }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedNav, setSelectedNav] = useState<string | null>(null);
  const reduceMotion = useReducedMotion();
  const toggleBtnRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLElement>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        toggleBtnRef.current?.focus();
      }
    };

    const onPointerDown = (e: PointerEvent) => {
      const target = e.target as Node;
      if (
        drawerRef.current?.contains(target) ||
        toggleBtnRef.current?.contains(target)
      ) {
        return;
      }
      setMenuOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("pointerdown", onPointerDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("pointerdown", onPointerDown);
    };
  }, [menuOpen]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-30 flex items-center justify-between bg-gradient-to-b from-surface/80 to-transparent px-6 py-6 md:px-8 lg:grid lg:grid-cols-[1fr_auto_1fr] lg:px-10">
        <a
          href="#top"
          className="flex items-center gap-2.5 justify-self-start text-sm font-black tracking-[0.2em]"
          aria-label="ItineriaPlan home"
        >
          <BrandIcon />
          ITINERIA
        </a>

        <nav
          className="hidden items-center gap-10 justify-self-center text-sm font-medium text-ink/70 md:flex"
          aria-label="Main navigation"
        >
          {links.map((link) => (
            <a key={link.href} className="transition hover:text-ink" href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <button
          ref={toggleBtnRef}
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav-drawer"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="grid size-10 place-items-center rounded-full border border-ink/25 bg-ink/10 transition hover:bg-ink/20 md:hidden"
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
            ref={drawerRef}
            id="mobile-nav-drawer"
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -12 }}
            transition={{ duration: reduceMotion ? 0.1 : 0.2 }}
            className="fixed right-6 top-20 z-30 flex w-max flex-col items-end gap-1 rounded-2xl border border-ink/15 bg-surface/90 p-3 text-right backdrop-blur-xl md:hidden"
            aria-label="Mobile navigation"
          >
            {links.map((link) => {
              const isSelected = selectedNav === link.href;
              return (
                <motion.a
                  key={link.href}
                  href={link.href}
                  whileTap={reduceMotion ? undefined : { scale: 0.96 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => {
                    setSelectedNav(link.href);
                    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
                    closeTimerRef.current = setTimeout(() => {
                      setMenuOpen(false);
                      setSelectedNav(null);
                    }, 200);
                  }}
                  className={`block w-full rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                    isSelected
                      ? "bg-ink/20 text-ink"
                      : "text-ink/80 hover:bg-ink/10 hover:text-ink"
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
