"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "/", label: "Accueil" },
  { href: "/#methode", label: "La méthode" },
  { href: "/services", label: "Services" },
  { href: "/a-propos", label: "À propos" },
  { href: "/contact", label: "Contact" },
];

const CAL_URL =
  "https://cal.com/alexmindflow/30min?overlayCalendar=true";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
            className="object-contain"
            style={{ filter: "invert(1) brightness(0)" }}
            aria-hidden="true"
          />
          <span
            className="font-bold text-xl tracking-tight text-[#0D0D0D]"
            style={{ fontFamily: "Syne, sans-serif" }}
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
              className="text-sm font-medium text-[#0D0D0D] hover:text-[#0A8F8F] transition-colors"
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
      {menuOpen && (
        <div className="md:hidden bg-[#F7F6F4] border-t border-[#EEEDE9] px-6 py-6 flex flex-col gap-5">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-base font-medium text-[#0D0D0D] hover:text-[#0A8F8F] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
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
      )}
    </header>
  );
}
