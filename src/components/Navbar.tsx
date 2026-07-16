"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/data/sections";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (!section) return;
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const sections = Array.from(
      document.querySelectorAll("section[id]"),
    ) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: 0.25 },
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <header
      className={`sticky top-4 z-50 mx-auto w-full max-w-7xl px-6 transition-all duration-300 sm:px-10 lg:px-16 ${
        isScrolled
          ? "bg-slate-950/90 shadow-2xl shadow-slate-950/25 backdrop-blur-2xl"
          : "bg-transparent"
      }`}
    >
      <nav className="flex items-center justify-between rounded-full border border-white/10 bg-slate-950/20 px-4 py-3 shadow-xl shadow-slate-950/10 backdrop-blur-xl backdrop-saturate-150">
        <a
          href="#home"
          className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-300 transition hover:text-cyan-200"
        >
          Profile
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm transition hover:text-white ${activeSection === link.href.slice(1) ? "text-sky-300" : "text-slate-300"}`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-2 text-sm font-medium text-sky-200 transition hover:bg-sky-400/20 md:inline-flex"
          >
            Let's talk
          </a>

          <button
            type="button"
            aria-label="Toggle menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-slate-950/90 text-slate-200 transition hover:border-sky-300/40 md:hidden"
            onClick={() => setIsOpen((current) => !current)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="mt-3 overflow-hidden rounded-3xl border border-white/10 bg-slate-950/95 p-5 shadow-2xl shadow-slate-950/25 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`rounded-2xl px-4 py-3 text-sm transition ${
                    activeSection === link.href.slice(1)
                      ? "bg-sky-400/10 text-sky-200"
                      : "text-slate-300 hover:bg-white/5 hover:text-white"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
