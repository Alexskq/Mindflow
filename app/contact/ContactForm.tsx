"use client";

import { useState } from "react";
import FadeIn from "@/components/FadeIn";
import { CalendarCheck, Mail, ExternalLink, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { CAL_URL, EMAIL, INSTAGRAM_URL, LINKEDIN_URL } from "@/lib/constants";

function InstagramIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LinkedInIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID;
    if (!formspreeId) {
      setStatus("error");
      return;
    }

    setStatus("loading");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="py-16 px-6 bg-[#F7F6F4]">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-12">
        {/* FORMULAIRE */}
        <FadeIn className="md:col-span-3" direction="right">
          {status === "success" ? (
            <div className="bg-[#EEEDE9] rounded-3xl p-10 flex flex-col items-center justify-center text-center gap-5 min-h-[400px]">
              <div className="w-14 h-14 rounded-full bg-[#0A8F8F]/10 flex items-center justify-center">
                <CheckCircle size={24} className="text-[#0A8F8F]" />
              </div>
              <h2
                className="font-display text-2xl font-bold"
              >
                Message envoyé !
              </h2>
              <p className="text-[#6B6B6B] max-w-sm">
                Alex a bien reçu ton message et te répondra rapidement.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="text-sm text-[#0A8F8F] font-semibold hover:underline"
              >
                Envoyer un autre message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label htmlFor="prenom" className="text-sm font-medium text-[#0D0D0D]">
                    Prénom
                  </label>
                  <input
                    id="prenom"
                    name="prenom"
                    type="text"
                    required
                    placeholder="Alex"
                    className="bg-[#EEEDE9] rounded-xl px-4 py-3 text-[#0D0D0D] placeholder-[#6B6B6B]/50 focus:outline-none focus:ring-2 focus:ring-[#0A8F8F] transition"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="nom" className="text-sm font-medium text-[#0D0D0D]">
                    Nom
                  </label>
                  <input
                    id="nom"
                    name="nom"
                    type="text"
                    required
                    placeholder="Dupont"
                    className="bg-[#EEEDE9] rounded-xl px-4 py-3 text-[#0D0D0D] placeholder-[#6B6B6B]/50 focus:outline-none focus:ring-2 focus:ring-[#0A8F8F] transition"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium text-[#0D0D0D]">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="alex@exemple.fr"
                  className="bg-[#EEEDE9] rounded-xl px-4 py-3 text-[#0D0D0D] placeholder-[#6B6B6B]/50 focus:outline-none focus:ring-2 focus:ring-[#0A8F8F] transition"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium text-[#0D0D0D]">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  placeholder="Bonjour Alex, je souhaite..."
                  className="bg-[#EEEDE9] rounded-xl px-4 py-3 text-[#0D0D0D] placeholder-[#6B6B6B]/50 focus:outline-none focus:ring-2 focus:ring-[#0A8F8F] transition resize-none"
                />
              </div>

              {status === "error" && (
                <div className="flex items-center gap-2 text-sm text-red-600">
                  <AlertCircle size={16} />
                  Une erreur est survenue. Réessaie ou contacte-moi par email.
                </div>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="self-start inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#0A8F8F] text-white font-semibold hover:bg-[#077070] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "loading" && <Loader2 size={16} className="animate-spin" />}
                {status === "loading" ? "Envoi en cours…" : "Envoyer le message"}
              </button>
            </form>
          )}
        </FadeIn>

        {/* SIDEBAR */}
        <FadeIn className="md:col-span-2" direction="left" delay={0.15}>
          <div className="flex flex-col gap-5">
            <div className="bg-[#0D0D0D] text-white rounded-3xl p-7">
              <div className="w-11 h-11 rounded-xl bg-[#0A8F8F]/20 flex items-center justify-center mb-5">
                <CalendarCheck size={20} className="text-[#0A8F8F]" strokeWidth={1.75} />
              </div>
              <h3
                className="font-display text-lg font-bold mb-2"
              >
                Réserver un appel
              </h3>
              <p className="text-white/60 text-sm leading-relaxed mb-5">
                Préfères-tu choisir toi-même ton créneau ? Réserve directement sur Cal.com. 30 min, sans engagement.
              </p>
              <a
                href={CAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#0A8F8F] font-semibold text-sm hover:underline"
                aria-label="Réserver sur Cal.com"
              >
                Réserver sur Cal.com <ExternalLink size={14} />
              </a>
            </div>

            <div className="bg-[#EEEDE9] rounded-3xl p-7">
              <div className="w-11 h-11 rounded-xl bg-[#0A8F8F]/10 flex items-center justify-center mb-5">
                <Mail size={20} className="text-[#0A8F8F]" strokeWidth={1.75} />
              </div>
              <h3
                className="font-display text-lg font-bold mb-2"
              >
                Email direct
              </h3>
              <a
                href={`mailto:${EMAIL}`}
                className="text-sm text-[#0A8F8F] font-semibold hover:underline break-all"
                aria-label="Envoyer un email à Alex"
              >
                {EMAIL}
              </a>
            </div>

            <div className="bg-[#EEEDE9] rounded-3xl p-7">
              <h3
                className="font-display text-lg font-bold mb-5"
              >
                Réseaux sociaux
              </h3>
              <div className="flex items-center gap-4">
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-[#0D0D0D] hover:text-[#0A8F8F] hover:shadow-md transition-all"
                  aria-label="Suivre Alex MindFlow sur Instagram"
                >
                  <InstagramIcon size={28} />
                </a>
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-[#0D0D0D] hover:text-[#0A8F8F] hover:shadow-md transition-all"
                  aria-label="Voir le profil LinkedIn d'Alexandre Zoonekynd"
                >
                  <LinkedInIcon size={28} />
                </a>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
