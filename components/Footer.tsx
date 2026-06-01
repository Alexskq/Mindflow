import Link from "next/link";
import { Mail, CalendarCheck } from "lucide-react";
import { CAL_URL, EMAIL, INSTAGRAM_URL, LINKEDIN_URL } from "@/lib/constants";

function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LinkedInIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#0D0D0D] text-white pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div>
            <p
              className="font-display text-xl font-bold tracking-tight mb-3"
            >
              Alex MindFlow
            </p>
            <p className="text-sm text-white/60 leading-relaxed max-w-xs">
              Préparation mentale et bien-être à Valenciennes.
              Respiration, mental, froid. Performer sans se détruire.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">
              Méthodes
            </p>
            <nav aria-label="Navigation méthodes" className="flex flex-col gap-2">
              {[
                { href: "/oxygen-advantage", label: "Oxygen Advantage®" },
                { href: "/preparation-mentale", label: "Préparation mentale" },
                { href: "/exposition-au-froid", label: "Exposition au froid" },
                { href: "/blog", label: "Blog" },
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
              Navigation
            </p>
            <nav aria-label="Navigation footer" className="flex flex-col gap-2">
              {[
                { href: "/services", label: "Services" },
                { href: "/a-propos", label: "À propos" },
                { href: "/contact", label: "Contact" },
                { href: "/mentions-legales", label: "Mentions légales" },
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
              <div className="flex items-center gap-3 mt-1">
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-[#0A8F8F] hover:border-[#0A8F8F]/40 transition-all"
                  aria-label="Suivre Alex MindFlow sur Instagram"
                >
                  <InstagramIcon size={18} />
                </a>
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-[#0A8F8F] hover:border-[#0A8F8F]/40 transition-all"
                  aria-label="Voir le profil LinkedIn d'Alexandre Zoonekynd"
                >
                  <LinkedInIcon size={18} />
                </a>
              </div>
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
