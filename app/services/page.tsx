import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import { Phone, Users, Building2, CheckCircle } from "lucide-react";

const CAL_URL = "https://cal.com/alexmindflow/30min?overlayCalendar=true";
const EMAIL = "alexzoonekynd@gmail.com";

const OFFERS = [
  {
    icon: Phone,
    tag: "Pour commencer",
    title: "Séance découverte",
    subtitle: "Bilan initial · 30 min",
    desc: "Un appel pour faire connaissance, comprendre ta situation et définir tes objectifs. On voit ensemble si la méthode correspond à tes besoins, sans engagement, sans pression.",
    forWho: [
      "Tout profil",
      "Athlètes, étudiants, entrepreneurs",
      "Grand public",
    ],
    cta: "Réserver gratuitement",
    ctaHref: CAL_URL,
    ctaExternal: true,
    highlight: false,
  },
  {
    icon: Users,
    tag: "Le plus complet",
    title: "Accompagnement individuel",
    subtitle: "Suivi sur mesure · Programme de X semaines",
    desc: "Un programme personnalisé qui combine les 3 piliers selon ton profil et tes objectifs. Séances régulières, outils concrets, suivi de progression. On construit ensemble une méthode qui tient dans ta vie réelle.",
    forWho: [
      "Athlètes d'endurance",
      "Entrepreneurs et cadres",
      "Étudiants en prépa / concours",
    ],
    cta: "Réserver un appel découverte",
    ctaHref: CAL_URL,
    ctaExternal: true,
    highlight: true,
  },
  {
    icon: Building2,
    tag: "Format collectif",
    title: "Ateliers & Interventions",
    subtitle: "Groupe ou entreprise · Format à définir",
    desc: "Des ateliers sur mesure pour vos équipes : gestion du stress, récupération, performance mentale sous pression. Format demi-journée, journée complète ou série d'interventions — à définir selon vos besoins.",
    forWho: [
      "Entreprises et équipes RH",
      "Associations sportives",
      "Établissements scolaires",
    ],
    cta: "Nous contacter",
    ctaHref: `mailto:${EMAIL}`,
    ctaExternal: false,
    highlight: false,
  },
];

const CERTS = [
  { name: "Oxygen Advantage®", sub: "Respiration fonctionnelle" },
  { name: "Inspire®", sub: "Coaching respiratoire" },
  { name: "ECO2A®", sub: "Préparation mentale" },
];

export default function ServicesPage() {
  return (
    <>
      {/* HERO */}
      <section className="pt-32 pb-20 px-6 bg-[#F7F6F4]">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <p className="text-[#0A8F8F] text-sm font-semibold uppercase tracking-widest mb-6">
              Services
            </p>
            <h1
              className="text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight mb-8"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              Des offres concrètes, pas des programmes génériques.
            </h1>
            <p className="text-xl text-[#6B6B6B] leading-relaxed">
              Chaque parcours est différent. Chaque accompagnement aussi. Voici
              les trois formats disponibles — du premier contact à
              l'accompagnement approfondi.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* OFFRES */}
      <section className="py-20 px-6 bg-[#F7F6F4]">
        <div className="max-w-5xl mx-auto flex flex-col gap-8">
          {OFFERS.map((offer, i) => (
            <FadeIn key={offer.title} delay={i * 0.1}>
              <div
                className={`rounded-3xl p-8 md:p-10 grid grid-cols-1 md:grid-cols-5 gap-8 ${
                  offer.highlight
                    ? "bg-[#0D0D0D] text-white"
                    : "bg-[#EEEDE9] text-[#0D0D0D]"
                }`}
              >
                <div className="md:col-span-3 flex flex-col gap-5">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center ${
                        offer.highlight ? "bg-[#0A8F8F]/20" : "bg-[#0A8F8F]/10"
                      }`}
                    >
                      <offer.icon
                        size={20}
                        className="text-[#0A8F8F]"
                        strokeWidth={1.75}
                      />
                    </div>
                    <span
                      className={`text-xs font-semibold uppercase tracking-widest ${
                        offer.highlight ? "text-[#0A8F8F]" : "text-[#0A8F8F]"
                      }`}
                    >
                      {offer.tag}
                    </span>
                  </div>

                  <div>
                    <h2
                      className="text-2xl md:text-3xl font-bold mb-1"
                      style={{ fontFamily: "Syne, sans-serif" }}
                    >
                      {offer.title}
                    </h2>
                    <p
                      className={`text-sm font-medium ${
                        offer.highlight ? "text-white/50" : "text-[#6B6B6B]"
                      }`}
                    >
                      {offer.subtitle}
                    </p>
                  </div>

                  <p
                    className={`leading-relaxed ${
                      offer.highlight ? "text-white/70" : "text-[#6B6B6B]"
                    }`}
                  >
                    {offer.desc}
                  </p>

                  {offer.ctaExternal ? (
                    <a
                      href={offer.ctaHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`self-start mt-2 inline-flex items-center px-6 py-3 rounded-full font-semibold transition-colors ${
                        offer.highlight
                          ? "bg-[#0A8F8F] text-white hover:bg-[#077070]"
                          : "bg-[#0D0D0D] text-white hover:bg-[#0A8F8F]"
                      }`}
                      aria-label={offer.cta}
                    >
                      {offer.cta}
                    </a>
                  ) : (
                    <a
                      href={offer.ctaHref}
                      className="self-start mt-2 inline-flex items-center px-6 py-3 rounded-full bg-[#0D0D0D] text-white font-semibold hover:bg-[#0A8F8F] transition-colors"
                      aria-label={offer.cta}
                    >
                      {offer.cta}
                    </a>
                  )}
                </div>

                <div className="md:col-span-2">
                  <p
                    className={`text-xs font-semibold uppercase tracking-widest mb-4 ${
                      offer.highlight ? "text-white/40" : "text-[#6B6B6B]"
                    }`}
                  >
                    Pour qui
                  </p>
                  <ul className="flex flex-col gap-3">
                    {offer.forWho.map((who) => (
                      <li key={who} className="flex items-start gap-2.5">
                        <CheckCircle
                          size={16}
                          className="text-[#0A8F8F] mt-0.5 shrink-0"
                          strokeWidth={2}
                        />
                        <span
                          className={`text-sm ${
                            offer.highlight ? "text-white/70" : "text-[#6B6B6B]"
                          }`}
                        >
                          {who}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* CORPORATE VISUEL */}
      <section className="relative h-72 md:h-96 overflow-hidden">
        <Image
          src="/images/corporate.jpg"
          alt="Ateliers en entreprise — Alex MindFlow"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#0D0D0D]/60 flex items-center justify-center">
          <FadeIn>
            <div className="text-center text-white px-6">
              <p className="text-[#0A8F8F] text-sm font-semibold uppercase tracking-widest mb-3">
                Entreprises & équipes
              </p>
              <p
                className="text-3xl md:text-4xl font-bold max-w-xl mx-auto leading-tight"
                style={{ fontFamily: "Syne, sans-serif" }}
              >
                La performance collective commence par chaque individu.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="py-20 px-6 bg-[#0D0D0D] text-white">
        <div className="max-w-4xl mx-auto">
          <FadeIn className="mb-12 text-center">
            <p className="text-[#0A8F8F] text-sm font-semibold uppercase tracking-widest mb-4">
              Certifications
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              Des méthodes reconnues, pas des intuitions
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {CERTS.map((cert, i) => (
              <FadeIn key={cert.name} delay={i * 0.1}>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-7 text-center">
                  <p
                    className="text-lg font-bold mb-1"
                    style={{ fontFamily: "Syne, sans-serif" }}
                  >
                    {cert.name}
                  </p>
                  <p className="text-white/50 text-sm">{cert.sub}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-[#F7F6F4]">
        <div className="max-w-2xl mx-auto text-center">
          <FadeIn>
            <h2
              className="text-3xl md:text-4xl font-bold mb-6"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              Pas sûr de quelle offre choisir ?
            </h2>
            <p className="text-[#6B6B6B] text-lg leading-relaxed mb-10">
              Commence par la séance découverte. 30 minutes pour faire le point
              et décider ensemble de la suite.
            </p>
            <a
              href={CAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#0A8F8F] text-white font-bold text-lg hover:bg-[#077070] transition-colors"
              aria-label="Réserver un appel découverte gratuit"
            >
              Réserver la séance découverte
            </a>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
