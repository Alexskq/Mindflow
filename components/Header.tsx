"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { CAL_URL } from "@/lib/constants";

const NAV_LINKS = [
  { href: "/oxygen-advantage", label: "Oxygen Advantage" },
  { href: "/preparation-mentale", label: "Prépa mentale" },
  { href: "/exposition-au-froid", label: "Exposition au froid" },
  { href: "/blog", label: "Blog" },
  { href: "/services", label: "Services" },
  { href: "/a-propos", label: "À propos" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#F7F6F4]/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5" aria-label="Alex MindFlow — Accueil">
          <Image
            src="/images/logo_mindflow.png"
            alt=""
            width={28}
            height={28}
            className="object-contain w-7 h-7"
            style={{ filter: "invert(1) brightness(0)", width: "auto", height: "auto" }}
            aria-hidden="true"
          />
          <span
            className="font-display font-bold text-xl tracking-tight text-[#0D0D0D]"
          >
            Alex MindFlow
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Navigation principale">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                pathname === link.href
                  ? "text-[#0A8F8F]"
                  : "text-[#0D0D0D] hover:text-[#0A8F8F]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <a
          href={CAL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center px-5 py-2 rounded-full bg-[#0A8F8F] text-white text-sm font-semibold hover:bg-[#077070] transition-colors"
          aria-label="Réserver un appel découverte"
        >
          Réserver un appel
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-[#0D0D0D]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden bg-[#F7F6F4] border-t border-[#EEEDE9]"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04, duration: 0.2 }}
                >
                  <Link
                    href={link.href}
                    className={`text-base font-medium transition-colors ${
                      pathname === link.href
                        ? "text-[#0A8F8F]"
                        : "text-[#0D0D0D] hover:text-[#0A8F8F]"
                    }`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <a
                href={CAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center justify-center px-5 py-3 rounded-full bg-[#0A8F8F] text-white text-sm font-semibold hover:bg-[#077070] transition-colors"
                aria-label="Réserver un appel découverte"
              >
                Réserver un appel
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
