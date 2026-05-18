"use client";

import { useState } from "react";
import FadeIn from "@/components/FadeIn";
import { CalendarCheck, Mail, ExternalLink } from "lucide-react";

const CAL_URL = "https://cal.com/alexmindflow/30min?overlayCalendar=true";
const EMAIL = "alexzoonekynd@gmail.com";
const INSTAGRAM_URL = "https://www.instagram.com/alex_mindflow";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const prenom = data.get("prenom") as string;
    const nom = data.get("nom") as string;
    const email = data.get("email") as string;
    const message = data.get("message") as string;

    const subject = encodeURIComponent(`Message de ${prenom} ${nom} — Alex MindFlow`);
    const body = encodeURIComponent(`Bonjour Alex,\n\n${message}\n\nCordialement,\n${prenom} ${nom}\n${email}`);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <>
      {/* HERO */}
      <section className="pt-32 pb-12 px-6 bg-[#F7F6F4]">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <p className="text-[#0A8F8F] text-sm font-semibold uppercase tracking-widest mb-6">
              Contact
            </p>
            <h1
              className="text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight mb-8"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              Parlons-en.
            </h1>
            <p className="text-xl text-[#6B6B6B] leading-relaxed">
              Une question, un projet, une envie de démarrer ? Envoie un message ou réserve directement un créneau.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* CONTENU */}
      <section className="py-16 px-6 bg-[#F7F6F4]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-12">

          {/* FORMULAIRE */}
          <FadeIn className="md:col-span-3" direction="right">
            {submitted ? (
              <div className="bg-[#EEEDE9] rounded-3xl p-10 flex flex-col items-center justify-center text-center gap-5 min-h-[400px]">
                <div className="w-14 h-14 rounded-full bg-[#0A8F8F]/10 flex items-center justify-center">
                  <Mail size={24} className="text-[#0A8F8F]" />
                </div>
                <h2
                  className="text-2xl font-bold"
                  style={{ fontFamily: "Syne, sans-serif" }}
                >
                  Message envoyé
                </h2>
                <p className="text-[#6B6B6B] max-w-sm">
                  Ton client mail s'est ouvert avec le message pré-rempli. Alex te répondra rapidement.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
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

                <button
                  type="submit"
                  className="self-start px-8 py-3.5 rounded-full bg-[#0A8F8F] text-white font-semibold hover:bg-[#077070] transition-colors"
                >
                  Envoyer le message
                </button>
              </form>
            )}
          </FadeIn>

          {/* SIDEBAR */}
          <FadeIn className="md:col-span-2" direction="left" delay={0.15}>
            <div className="flex flex-col gap-5">
              {/* Cal.com */}
              <div className="bg-[#0D0D0D] text-white rounded-3xl p-7">
                <div className="w-11 h-11 rounded-xl bg-[#0A8F8F]/20 flex items-center justify-center mb-5">
                  <CalendarCheck size={20} className="text-[#0A8F8F]" strokeWidth={1.75} />
                </div>
                <h3
                  className="text-lg font-bold mb-2"
                  style={{ fontFamily: "Syne, sans-serif" }}
                >
                  Réserver un appel
                </h3>
                <p className="text-white/60 text-sm leading-relaxed mb-5">
                  Préfères-tu choisir toi-même ton créneau ? Réserve directement sur Cal.com — 30 min, sans engagement.
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

              {/* Email direct */}
              <div className="bg-[#EEEDE9] rounded-3xl p-7">
                <div className="w-11 h-11 rounded-xl bg-[#0A8F8F]/10 flex items-center justify-center mb-5">
                  <Mail size={20} className="text-[#0A8F8F]" strokeWidth={1.75} />
                </div>
                <h3
                  className="text-lg font-bold mb-2"
                  style={{ fontFamily: "Syne, sans-serif" }}
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

              {/* Instagram */}
              <div className="bg-[#EEEDE9] rounded-3xl p-7">
                <div className="w-11 h-11 rounded-xl bg-[#0A8F8F]/10 flex items-center justify-center mb-5">
                  <ExternalLink size={20} className="text-[#0A8F8F]" strokeWidth={1.75} />
                </div>
                <h3
                  className="text-lg font-bold mb-2"
                  style={{ fontFamily: "Syne, sans-serif" }}
                >
                  Instagram
                </h3>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#0A8F8F] font-semibold hover:underline"
                  aria-label="Suivre Alex MindFlow sur Instagram"
                >
                  @alex_mindflow
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
