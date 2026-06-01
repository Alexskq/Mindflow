import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import { CheckCircle, ArrowRight, Brain, Target, Zap, Shield, Heart, Activity } from "lucide-react";
import { CAL_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Préparation mentale — Méthode ECO2A® | Alex MindFlow",
  description:
    "Découvre la préparation mentale et la méthode ECO2A® du Dr Sylvain Baert : entraîner son mental, gérer le stress, développer la force mentale. Certifié ECO2A® à Valenciennes.",
};

const MENTAL_QUALITIES = [
  {
    icon: Shield,
    label: "Confiance en soi",
    desc: "Croire en ses capacités, même sous pression et face à l'adversité.",
  },
  {
    icon: Target,
    label: "Concentration",
    desc: "Rester focalisé sur l'essentiel malgré les distractions extérieures.",
  },
  {
    icon: Zap,
    label: "Motivation intrinsèque",
    desc: "Agir pour ses propres raisons profondes, pas pour la validation externe.",
  },
  {
    icon: Heart,
    label: "Intelligence émotionnelle",
    desc: "Reconnaître, comprendre et réguler ses émotions pour qu'elles deviennent un atout.",
  },
  {
    icon: Brain,
    label: "Résilience",
    desc: "Rebondir après un échec, une blessure ou une épreuve difficile.",
  },
  {
    icon: Activity,
    label: "Gestion du stress",
    desc: "Distinguer le stress utile (éustress) du stress toxique, et apprendre à réguler son système nerveux avant, pendant et après l'effort.",
  },
];

const ECO2A_STEPS = [
  {
    letter: "E",
    title: "Évaluation",
    desc: "Évaluer ta condition mentale et ta situation actuelle. Où en es-tu ? Quels sont tes forces mentales et les interférences qui limitent ta performance ? Le diagnostic est la première étape de tout changement.",
  },
  {
    letter: "C",
    title: "Clés mentales",
    desc: "8 clés psychologiques à comprendre et intégrer : motivation, gestion des émotions, régulation du stress, pensées et croyances, fonctionnement du conscient et de l'inconscient, confiance en soi, habitudes, énergie et activation.",
  },
  {
    letter: "O",
    title: "Outils",
    desc: "Ta boîte à outils pratique : respiration, cohérence cardiaque, relaxation musculaire, méditation de pleine conscience, imagerie mentale, sophrologie. Des techniques concrètes, pas de la théorie.",
  },
  {
    letter: "A",
    title: "Action",
    desc: "Passer à l'action avec un entraînement mental régulier et adapté. Comme l'entraînement physique développe la condition physique, l'entraînement mental développe la condition mentale. Un travail quotidien, pas ponctuel.",
  },
  {
    letter: "A",
    title: "Autonomie",
    desc: "L'objectif final : l'auto-préparation mentale. Être capable de se préparer mentalement soi-même, face aux échéances importantes, sans dépendre systématiquement d'un accompagnement extérieur.",
  },
];

const TOOLS = [
  {
    name: "Cohérence cardiaque",
    desc: "6 respirations/min pour réguler le système nerveux autonome, réduire le cortisol et améliorer la variabilité de la fréquence cardiaque.",
  },
  {
    name: "Imagerie mentale",
    desc: "Visualiser la performance désirée active les mêmes circuits neuronaux que l'action réelle. Un outil utilisé par tous les sportifs de haut niveau.",
  },
  {
    name: "Méditation de pleine conscience",
    desc: "Entraîner l'attention et l'observation des pensées sans jugement. Pour sortir du pilote automatique et reprendre le contrôle.",
  },
  {
    name: "Relaxation musculaire",
    desc: "Technique de Jacobson et auto-training de Schultz pour identifier et relâcher les tensions physiques et mentales accumulées.",
  },
  {
    name: "Dialogue interne",
    desc: "Identifier et transformer les pensées limitantes en croyances aidantes. La voix intérieure est entraînable.",
  },
  {
    name: "Gestion des émotions",
    desc: "Apprendre à identifier, nommer et utiliser ses émotions comme information plutôt que comme obstacle à la performance.",
  },
];

const FOR_WHO = [
  {
    label: "Athlètes & sportifs",
    items: [
      "Gérer la pression de la compétition",
      "Maintenir la concentration à l'effort",
      "Rebondir après un échec ou une blessure",
    ],
  },
  {
    label: "Entrepreneurs & cadres",
    items: [
      "Gérer le stress et la charge mentale",
      "Décider sous pression sans se laisser déborder",
      "Maintenir une énergie et une motivation durables",
    ],
  },
  {
    label: "Étudiants",
    items: [
      "Préparer les examens et concours",
      "Développer la concentration et la mémorisation",
      "Gérer le stress et la confiance en soi",
    ],
  },
];

export default function PreparationMentalePage() {
  return (
    <>
      {/* HERO */}
      <section className="pt-32 pb-20 px-6 bg-[#F7F6F4]">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <p className="text-[#0A8F8F] text-sm font-semibold uppercase tracking-widest mb-6">
              Méthode · Mental
            </p>
            <h1
              className="font-display text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight mb-8"
            >
              Préparation
              <br />
              mentale.
              <br />
              <span className="text-[#0A8F8F]">Entraîne ton mental</span>
              <br />
              comme un muscle.
            </h1>
            <p className="text-xl text-[#6B6B6B] leading-relaxed">
              Née du sport de haut niveau, la préparation mentale est aujourd'hui accessible à tous. Le principe est simple : le mental s'entraîne. Et un mental bien entraîné change radicalement le rapport à la performance, au stress et au bien-être.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* DÉFINITION + FORMULE */}
      <section className="py-20 px-6 bg-[#EEEDE9]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <FadeIn>
            <p className="text-[#0A8F8F] text-sm font-semibold uppercase tracking-widest mb-4">
              C'est quoi ?
            </p>
            <h2
              className="font-display text-3xl font-bold mb-6 leading-tight"
            >
              Un entraînement, pas une thérapie
            </h2>
            <p className="text-[#6B6B6B] leading-relaxed mb-4">
              La préparation mentale est un ensemble de processus psychologiques qui permettent de mobiliser ses ressources internes pour maximiser sa performance dans des situations stressantes ou à enjeux.
            </p>
            <p className="text-[#6B6B6B] leading-relaxed mb-4">
              Comme l'entraînement physique développe la condition physique, l'entraînement mental développe la <strong className="text-[#0D0D0D]">condition mentale</strong> : la confiance, la concentration, la gestion du stress, la résilience. Des capacités concrètes, mesurables, développables par tous.
            </p>
            <p className="text-[#6B6B6B] leading-relaxed">
              Si tu arrêtes l'entraînement physique, ta condition physique diminue. Il en va de même pour le mental. C'est un travail régulier, adapté, qui porte ses fruits.
            </p>
          </FadeIn>

          <FadeIn direction="left">
            <div className="bg-white rounded-3xl p-8 shadow-sm">
              <p className="text-[#0A8F8F] text-sm font-semibold uppercase tracking-widest mb-4">
                La formule de la performance
              </p>
              <div className="text-center py-6 flex flex-col items-center gap-2">
                <p
                  className="font-display text-2xl font-bold text-[#0D0D0D]"
                >
                  Performance
                </p>
                <p className="text-3xl font-bold text-[#0A8F8F]">=</p>
                <p
                  className="font-display text-2xl font-bold text-[#0D0D0D]"
                >
                  Potentiel
                </p>
                <p className="text-3xl font-bold text-[#0D0D0D]/30">−</p>
                <p
                  className="font-display text-2xl font-bold text-[#0D0D0D]"
                >
                  Interférences
                </p>
              </div>
              <p className="text-sm text-[#6B6B6B] leading-relaxed mb-4">
                Même avec un potentiel élevé, les interférences (croyances limitantes, dialogue interne négatif, manque de confiance, stress mal géré) plafonnent les résultats. La prépa mentale s'attaque directement à ces freins.
              </p>
              <p className="text-xs text-[#6B6B6B]/50 border-t border-[#EEEDE9] pt-4">
                Dr Sylvain Baert · Méthode ECO2A®
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* QUALITÉS MENTALES */}
      <section className="py-24 px-6 bg-[#F7F6F4]">
        <div className="max-w-5xl mx-auto">
          <FadeIn className="mb-14">
            <p className="text-[#0A8F8F] text-sm font-semibold uppercase tracking-widest mb-4">
              La force mentale
            </p>
            <h2
              className="font-display text-3xl md:text-4xl font-bold"
            >
              Ce qu'on développe ensemble
            </h2>
            <p className="text-[#6B6B6B] mt-4 max-w-2xl text-lg leading-relaxed">
              La force mentale n'est pas réservée aux athlètes de haut niveau. Ce sont des capacités concrètes que tout le monde peut muscler.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {MENTAL_QUALITIES.map((q, i) => (
              <FadeIn key={q.label} delay={i * 0.08}>
                <div className="bg-[#EEEDE9] rounded-2xl p-6 flex flex-col gap-3 h-full">
                  <div className="w-10 h-10 rounded-xl bg-[#0A8F8F]/10 flex items-center justify-center">
                    <q.icon size={20} className="text-[#0A8F8F]" strokeWidth={1.75} />
                  </div>
                  <h3
                    className="font-display font-bold text-[#0D0D0D]"
                  >
                    {q.label}
                  </h3>
                  <p className="text-sm text-[#6B6B6B] leading-relaxed">{q.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ECO2A */}
      <section className="py-24 px-6 bg-[#0D0D0D] text-white">
        <div className="max-w-4xl mx-auto">
          <FadeIn className="mb-14">
            <p className="text-[#0A8F8F] text-sm font-semibold uppercase tracking-widest mb-4">
              Ma méthode de travail
            </p>
            <h2
              className="font-display text-3xl md:text-4xl font-bold mb-4"
            >
              La méthode ECO2A®
            </h2>
            <p className="text-white/60 leading-relaxed max-w-2xl">
              Développée par le Dr Sylvain Baert, docteur en psychologie et fondateur d'ECOAZEN, la méthode ECO2A® est le protocole structuré que j'utilise dans mes accompagnements. Elle vise le bien-être, la performance et le fonctionnement optimal, en 5 étapes progressives.
            </p>
          </FadeIn>

          <div className="flex flex-col gap-5">
            {ECO2A_STEPS.map((step, i) => (
              <FadeIn key={step.letter + i} delay={i * 0.1}>
                <div className="flex items-start gap-6 bg-white/5 border border-white/10 rounded-2xl p-7">
                  <div className="w-12 h-12 rounded-2xl bg-[#0A8F8F] flex items-center justify-center shrink-0">
                    <span
                      className="font-display text-white text-xl font-bold"
                    >
                      {step.letter}
                    </span>
                  </div>
                  <div>
                    <h3
                      className="font-display text-lg font-bold mb-2"
                    >
                      {step.title}
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* OUTILS */}
      <section className="py-24 px-6 bg-[#F7F6F4]">
        <div className="max-w-5xl mx-auto">
          <FadeIn className="mb-14">
            <p className="text-[#0A8F8F] text-sm font-semibold uppercase tracking-widest mb-4">
              La boîte à outils
            </p>
            <h2
              className="font-display text-3xl md:text-4xl font-bold"
            >
              Des techniques concrètes, pas de la théorie
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {TOOLS.map((tool, i) => (
              <FadeIn key={tool.name} delay={i * 0.08}>
                <div className="flex items-start gap-4 bg-[#EEEDE9] rounded-2xl p-6">
                  <CheckCircle
                    size={20}
                    className="text-[#0A8F8F] shrink-0 mt-0.5"
                    strokeWidth={1.75}
                  />
                  <div>
                    <h3
                      className="font-display font-bold text-[#0D0D0D] mb-1"
                    >
                      {tool.name}
                    </h3>
                    <p className="text-sm text-[#6B6B6B] leading-relaxed">{tool.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* POUR QUI */}
      <section className="py-20 px-6 bg-[#EEEDE9]">
        <div className="max-w-5xl mx-auto">
          <FadeIn className="text-center mb-12">
            <h2
              className="font-display text-3xl md:text-4xl font-bold"
            >
              Pour qui ?
            </h2>
            <p className="text-[#6B6B6B] mt-3 text-lg">
              La préparation mentale s'adapte à tous les profils et tous les domaines.
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {FOR_WHO.map((group, i) => (
              <FadeIn key={group.label} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-6 h-full">
                  <h3
                    className="font-display font-bold text-[#0D0D0D] mb-4"
                  >
                    {group.label}
                  </h3>
                  <ul className="flex flex-col gap-3">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <CheckCircle
                          size={14}
                          className="text-[#0A8F8F] shrink-0 mt-0.5"
                          strokeWidth={2}
                        />
                        <span className="text-sm text-[#6B6B6B] leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
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
              className="font-display text-3xl md:text-4xl font-bold mb-6"
            >
              Prêt à travailler ton mental ?
            </h2>
            <p className="text-[#6B6B6B] text-lg leading-relaxed mb-10">
              Réserve un appel découverte de 30 minutes. On fait le bilan de ta situation mentale et on voit ensemble comment la méthode ECO2A® peut t'aider à atteindre tes objectifs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={CAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#0A8F8F] text-white font-semibold hover:bg-[#077070] transition-colors"
                aria-label="Réserver un appel découverte"
              >
                Réserver un appel découverte
              </a>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border-2 border-[#0D0D0D] text-[#0D0D0D] font-semibold hover:bg-[#0D0D0D] hover:text-white transition-colors"
              >
                Voir les services
                <ArrowRight size={18} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
