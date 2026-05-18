"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Wind,
  Brain,
  Flame,
  Trophy,
  BookOpen,
  Briefcase,
  Building2,
  ArrowRight,
} from "lucide-react";
import FadeIn from "@/components/FadeIn";

const CAL_URL = "https://cal.com/alexmindflow/30min?overlayCalendar=true";

const PILLARS = [
  {
    icon: Wind,
    title: "Respiration fonctionnelle",
    desc: "La respiration est la clé d'entrée vers la performance. Certifié Oxygen Advantage® et Inspire®. Je t'apprend à respirer juste pour récupérer plus vite, gérer ton stress et optimiser ton énergie.",
    certs: "Oxygen Advantage® · Inspire®",
  },
  {
    icon: Brain,
    title: "Préparation mentale",
    desc: "La méthode ECO2A® structure ta pensée : gestion du stress, émotions, focus, confiance. Pas de développement personnel vague, des outils concrets et mesurables.",
    certs: "Méthode ECO2A®",
  },
  {
    icon: Flame,
    title: "Exposition au chaud et au froid",
    desc: "Froid et chaleur alternés pour accélérer la récupération, renforcer la résistance au stress et affûter la concentration. Une pratique ancrée dans la science, intégrée dans un protocole cohérent.",
    certs: "Exposition chaud/froid",
  },
];

const AUDIENCES = [
  {
    icon: Trophy,
    title: "Athlètes d'endurance",
    desc: "Runners, triathlètes, trails, Hyrox... Performer durablement sans se détruire.",
  },
  {
    icon: BookOpen,
    title: "Étudiants sous pression",
    desc: "Concours, partiels, surcharge cognitive... Retrouver le calme et la clarté.",
  },
  {
    icon: Briefcase,
    title: "Entrepreneurs",
    desc: "Haute intensité permanente, décisions stratégiques... Rester lucide sans s'épuiser.",
  },
  {
    icon: Building2,
    title: "Entreprises",
    desc: "Ateliers collectifs sur la gestion du stress, la récupération, la concentration pour booster la performance globale des équipes.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
        <div className="absolute inset-0 bg-[#F7F6F4]" />
        <div className="absolute top-1/4 right-0 w-1/2 h-[58%] bg-[#EEEDE9] rounded-l-[80px]" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-5 gap-12 items-center py-20">
          <div className="md:col-span-3">
            <p className="anim-fade-up delay-100 text-[#0A8F8F] text-sm font-semibold uppercase tracking-widest mb-6">
              Coaching Performance & Bien-être · Valenciennes
            </p>

            <h1
              className="anim-fade-up delay-200 text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-8"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              Performer
              <br />
              autrement.
              <br />
              <span className="text-[#0A8F8F]">Sans s'épuiser</span>
              <br />
              davantage.
            </h1>

            <p className="anim-fade-up delay-300 text-lg text-[#6B6B6B] leading-relaxed max-w-lg mb-10">
              MindFlow combine respiration fonctionnelle, préparation mentale et
              exposition au chaud et au froid pour t'aider à atteindre ton plein
              potentiel <strong>durablement</strong>.
            </p>

            <div className="anim-fade-up delay-400 flex flex-wrap gap-4">
              <a
                href="#methode"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#0D0D0D] text-white font-semibold hover:bg-[#0A8F8F] transition-colors"
              >
                Découvrir la méthode
              </a>
              <a
                href={CAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border-2 border-[#0A8F8F] text-[#0A8F8F] font-semibold hover:bg-[#0A8F8F] hover:text-white transition-colors"
                aria-label="Réserver un appel découverte sur Cal.com"
              >
                Réserver un appel
              </a>
            </div>
          </div>

          {/* Photo Alex */}
          <div className="anim-fade-in delay-300 md:col-span-2 flex flex-col items-center md:items-end gap-5">
            <div className="relative w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden shadow-2xl ring-4 ring-[#0A8F8F]/30">
              <Image
                src="/images/profil.png"
                alt="Alexandre Zoonekynd — Alex MindFlow"
                fill
                className="object-cover"
                style={{ objectPosition: "center 9px" }}
                priority
              />
            </div>
            <div className="text-center md:text-right">
              <p
                className="font-bold text-[#0D0D0D]"
                style={{ fontFamily: "Syne, sans-serif" }}
              >
                Alexandre Zoonekynd
              </p>
              <p className="text-sm text-[#6B6B6B] mt-0.5">
                Coach Performance & Bien-être
              </p>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="anim-fade-in delay-1200 absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#6B6B6B]">
          <span className="text-xs uppercase tracking-widest">Défiler</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.4 }}
            className="w-0.5 h-8 bg-[#0A8F8F] rounded-full"
          />
        </div>
      </section>

      {/* 3 PILIERS */}
      <section id="methode" className="py-28 px-6 bg-[#F7F6F4]">
        <div className="max-w-6xl mx-auto">
          <FadeIn className="mb-16">
            <p className="text-[#0A8F8F] text-sm font-semibold uppercase tracking-widest mb-4">
              La méthode
            </p>
            <h2
              className="text-4xl md:text-5xl font-bold leading-tight max-w-2xl"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              Une méthode intégrée pour performer sans se détruire
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PILLARS.map((pillar, i) => (
              <FadeIn key={pillar.title} delay={i * 0.12}>
                <motion.div
                  whileHover={{ y: -6, transition: { duration: 0.3 } }}
                  className="bg-[#EEEDE9] rounded-3xl p-8 flex flex-col gap-5 cursor-default h-full"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#0A8F8F]/10 flex items-center justify-center">
                    <pillar.icon
                      size={22}
                      className="text-[#0A8F8F]"
                      strokeWidth={1.75}
                    />
                  </div>
                  <div>
                    <h3
                      className="text-xl font-bold mb-3"
                      style={{ fontFamily: "Syne, sans-serif" }}
                    >
                      {pillar.title}
                    </h3>
                    <p className="text-[#6B6B6B] text-sm leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                  <p className="text-xs font-semibold text-[#0A8F8F] mt-auto pt-2 border-t border-[#0A8F8F]/20">
                    {pillar.certs}
                  </p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* À QUI ÇA S'ADRESSE */}
      <section className="relative py-28 px-6 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/OA_TEAM2.jpg"
            alt=""
            fill
            className="object-cover object-center"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-[#0D0D0D]/80" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto">
          <FadeIn className="mb-16">
            <p className="text-[#0A8F8F] text-sm font-semibold uppercase tracking-widest mb-4">
              Public
            </p>
            <h2
              className="text-4xl md:text-5xl font-bold leading-tight max-w-2xl"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              À qui s'adresse la méthode ?
            </h2>
            <p className="text-white/60 mt-4 text-lg max-w-xl">
              La méthode s'adapte à chaque contexte de vie. Qu'il s'agisse de
              sport, de travail ou d'études, les mêmes leviers s'appliquent.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {AUDIENCES.map((aud, i) => (
              <FadeIn key={aud.title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -6, transition: { duration: 0.3 } }}
                  className="bg-white/5 border border-white/10 rounded-3xl p-7 flex flex-col gap-4 cursor-default hover:bg-white/10 transition-colors h-full"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#0A8F8F]/20 flex items-center justify-center">
                    <aud.icon
                      size={20}
                      className="text-[#0A8F8F]"
                      strokeWidth={1.75}
                    />
                  </div>
                  <h3
                    className="text-lg font-bold"
                    style={{ fontFamily: "Syne, sans-serif" }}
                  >
                    {aud.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">
                    {aud.desc}
                  </p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* POURQUOI ALEX MINDFLOW */}
      <section className="py-28 px-6 bg-[#F7F6F4]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <FadeIn direction="right">
            <p className="text-[#0A8F8F] text-sm font-semibold uppercase tracking-widest mb-4">
              Pourquoi Alex MindFlow
            </p>
            <h2
              className="text-4xl md:text-5xl font-bold leading-tight mb-6"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              Une méthode née d'une expérience réelle
            </h2>
            <p className="text-[#6B6B6B] text-lg leading-relaxed mb-6">
              Je n'ai pas conçu cette méthode dans un bureau. Je l'ai construite
              en traversant un épuisement total, après 20 ans de tennis et 10
              ans de running, trail et triathlon. Quand le corps a lâché, j'ai
              cherché des réponses et trouvé trois leviers qui ont tout changé.
            </p>
            <p className="text-[#6B6B6B] leading-relaxed mb-10">
              Aujourd'hui, je transmet ce que j'ai appris pour que tu n'aies pas
              à atteindre le fond avant de commencer à performer différemment.
            </p>
            <Link
              href="/a-propos"
              className="inline-flex items-center gap-2 text-[#0A8F8F] font-semibold hover:gap-4 transition-all"
            >
              Lire son parcours <ArrowRight size={18} />
            </Link>
          </FadeIn>

          <FadeIn direction="left" delay={0.15}>
            <div className="grid grid-cols-2 gap-5">
              {[
                { value: "20 ans", label: "de pratique sportive intensive" },
                { value: "3", label: "certifications internationales" },
                {
                  value: "Épuisement total",
                  label: "comme point de départ fondateur",
                },
                { value: "1 méthode", label: "intégrée, concrète, testée" },
              ].map((stat) => (
                <div key={stat.label} className="bg-[#EEEDE9] rounded-2xl p-6">
                  <p
                    className="text-2xl font-bold text-[#0A8F8F] mb-1"
                    style={{ fontFamily: "Syne, sans-serif" }}
                  >
                    {stat.value}
                  </p>
                  <p className="text-sm text-[#6B6B6B]">{stat.label}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-28 px-6 bg-[#0A8F8F]">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <h2
              className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              Prêt à performer autrement ?
            </h2>
            <p className="text-white/80 text-lg mb-10 leading-relaxed">
              Un appel de 30 minutes pour faire le point sur tes objectifs et
              voir si la méthode est faite pour toi. Sans engagement.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={CAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-[#0A8F8F] font-bold text-lg hover:bg-[#EEEDE9] transition-colors"
                aria-label="Réserver un appel découverte"
              >
                Réserver un appel découverte
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-white text-white font-bold text-lg hover:bg-white/10 transition-colors"
              >
                Nous écrire
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
