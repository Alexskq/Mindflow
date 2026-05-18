import Link from "next/link";
import { Mail, CalendarCheck } from "lucide-react";

function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

const CAL_URL = "https://cal.com/alexmindflow/30min?overlayCalendar=true";
const EMAIL = "alexzoonekynd@gmail.com";
const INSTAGRAM_URL = "https://www.instagram.com/alex_mindflow";

export default function Footer() {
  return (
    <footer className="bg-[#0D0D0D] text-white pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          <div>
            <p
              className="text-xl font-bold tracking-tight mb-3"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              Alex MindFlow
            </p>
            <p className="text-sm text-white/60 leading-relaxed max-w-xs">
              Coaching en performance et bien-être à Valenciennes.
              Respiration, mental, froid — pour performer sans se détruire.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">
              Navigation
            </p>
            <nav aria-label="Navigation footer" className="flex flex-col gap-2">
              {[
                { href: "/", label: "Accueil" },
                { href: "/services", label: "Services" },
                { href: "/a-propos", label: "À propos" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">
              Contact
            </p>
            <div className="flex flex-col gap-3">
              <a
                href={CAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-white/70 hover:text-[#0A8F8F] transition-colors"
                aria-label="Réserver un appel sur Cal.com"
              >
                <CalendarCheck size={16} />
                Réserver un appel
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-2 text-sm text-white/70 hover:text-[#0A8F8F] transition-colors"
                aria-label="Envoyer un email"
              >
                <Mail size={16} />
                {EMAIL}
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-white/70 hover:text-[#0A8F8F] transition-colors"
                aria-label="Suivre Alex MindFlow sur Instagram"
              >
                <InstagramIcon size={16} />
                @alex_mindflow
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-white/30">
          <p>© {new Date().getFullYear()} Alex MindFlow — Tous droits réservés</p>
          <Link href="/mentions-legales" className="hover:text-white/60 transition-colors">
            Mentions légales
          </Link>
        </div>
      </div>
    </footer>
  );
}
