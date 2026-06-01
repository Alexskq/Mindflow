import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import {
  CheckCircle,
  ArrowRight,
  Snowflake,
  Brain,
  Activity,
  Shield,
  Droplets,
  Timer,
} from "lucide-react";
import { CAL_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Exposition au froid — Bien-être & Performance | Alex MindFlow",
  description:
    "Découvre les bienfaits scientifiques de l'exposition au froid : bain froid, douche froide, récupération sportive, bien-être mental, vitalité. Protocoles et accompagnement à Valenciennes.",
};

const BENEFITS = [
  {
    icon: Brain,
    tag: "Mental",
    title: "Bien-être & santé mentale",
    desc: "L'exposition au froid déclenche une libération massive de noradrénaline (+300%) et de dopamine dans le cerveau. Ces neurotransmetteurs améliorent l'humeur, réduisent l'anxiété et renforcent la résistance au stress au quotidien.",
    items: [
      "Libération de noradrénaline (+300%)",
      "Pic de dopamine durable post-exposition",
      "Réduction de l'anxiété et du stress",
      "Amélioration de l'humeur et de la clarté mentale",
      "Renforcement de la résilience psychologique",
      "Effets complémentaires anti-dépresseurs documentés",
    ],
  },
  {
    icon: Activity,
    tag: "Sport",
    title: "Récupération & performance",
    desc: "L'immersion en eau froide post-entraînement réduit l'inflammation locale, accélère l'élimination des déchets métaboliques et diminue les douleurs musculaires (DOMS). Une stratégie de récupération active utilisée par les athlètes de haut niveau.",
    items: [
      "Réduction des DOMS (courbatures)",
      "Accélération de la récupération neuromusculaire",
      "Diminution de l'inflammation aiguë",
      "Maintien de la puissance musculaire",
      "Réduction du temps de récupération inter-séances",
      "Amélioration de la tolérance à l'effort",
    ],
  },
  {
    icon: Shield,
    tag: "Vitalité",
    title: "Immunité & énergie",
    desc: "Le froid agit comme un stress hormétique : une stimulation courte et contrôlée qui renforce les défenses de l'organisme. Il active la graisse brune (thermogenèse), améliore la sensibilité à l'insuline et augmente les défenses antioxydantes.",
    items: [
      "Activation de la graisse brune (thermogenèse)",
      "Renforcement du système immunitaire",
      "Enzymes antioxydantes +36 à +68%",
      "Amélioration de la sensibilité à l'insuline",
      "Régulation du cortisol",
      "Augmentation durable des niveaux d'énergie",
    ],
  },
];

const PROTOCOLS = [
  {
    icon: Droplets,
    title: "Douche froide",
    subtitle: "Entrée accessible",
    desc: "Terminer sa douche par 30 à 90 secondes d'eau froide. Protocole idéal pour débuter et habituer progressivement le système nerveux à la réponse thermique.",
    steps: [
      "Commencer chaud, finir froid",
      "30 s la 1re semaine, puis augmenter graduellement",
      "Respiration nasale contrôlée pendant l'exposition",
      "Idéalement le matin à jeun",
    ],
  },
  {
    icon: Snowflake,
    title: "Bain froid (immersion)",
    subtitle: "Protocole avancé",
    desc: "Immersion du corps jusqu'aux épaules dans de l'eau à 10–15°C pendant 5 à 15 minutes. Méthode la plus étudiée scientifiquement, avec le meilleur ratio efficacité / coût / accessibilité.",
    steps: [
      "Température cible : 10–15°C",
      "Durée : 5 à 15 min selon tolérance",
      "Fréquence : 3 à 5 fois par semaine",
      "Ne pas se réchauffer artificiellement — laisser le corps produire sa chaleur",
    ],
  },
  {
    icon: Timer,
    title: "Progression & sécurité",
    subtitle: "Règles fondamentales",
    desc: "L'adaptation au froid est progressive. Forcer une exposition trop intense trop tôt produit l'effet inverse : stress chronique, fatigue et surcharge du système nerveux.",
    steps: [
      "Augmenter intensité et durée semaine par semaine",
      "Stopper si frissons incontrôlables",
      "Éviter l'immersion froide dans les 4-6 h post-musculation (hypertrophie)",
      "Contre-indiqué en cas de pathologies cardiovasculaires",
    ],
  },
];

const FOR_WHO = [
  {
    label: "Sportifs & athlètes",
    items: [
      "Optimiser la récupération entre les séances",
      "Réduire les courbatures et l'inflammation",
      "Améliorer la résilience mentale à l'effort",
    ],
  },
  {
    label: "Recherche de bien-être",
    items: [
      "Améliorer l'humeur et réduire le stress chronique",
      "Booster l'énergie et la vitalité au quotidien",
      "Renforcer le système immunitaire",
    ],
  },
  {
    label: "Performance cognitive",
    items: [
      "Améliorer la clarté mentale et la concentration",
      "Augmenter la tolérance au stress",
      "Développer la discipline et la maîtrise de soi",
    ],
  },
];

const MOLECULES = [
  {
    name: "Noradrénaline",
    value: "+300%",
    desc: "Pic lors de l'immersion — attention, humeur, gestion de la douleur",
  },
  {
    name: "Dopamine",
    value: "+250%",
    desc: "Élévation durable après exposition — motivation, plaisir, drive",
  },
  {
    name: "Endorphines",
    value: "↑",
    desc: "Libérées en réponse au stress thermique — bien-être et analgésie",
  },
  {
    name: "Enzymes antioxydantes",
    value: "+36–68%",
    desc: "Superoxyde dismutase & glutathion peroxydase — résilience oxydative",
  },
];

export default function ExpositionFroidPage() {
  return (
    <>
      {/* HERO — image plein écran */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <Image
          src="/images/bainfroid_hero.jpg"
          alt="Bains froids sous la neige — exposition au froid"
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0D]/90 via-[#0D0D0D]/70 to-[#0D0D0D]/40" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 w-full pt-24 pb-20">
          <FadeIn>
            <p className="text-[#0A8F8F] text-sm font-semibold uppercase tracking-widest mb-6">
              Méthode · Bien-être & Performance
            </p>
            <h1
              className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-8 text-white"
            >
              Exposition
              <br />
              au froid.
              <br />
              <span className="text-[#0A8F8F]">Transforme ton corps</span>
              <br />
              par le froid.
            </h1>
            <p className="text-xl text-white/70 leading-relaxed max-w-xl mb-10">
              Pratiquée depuis des millénaires et validée par la science
              moderne, l'exposition au froid est l'un des outils les plus
              puissants pour améliorer le bien-être, la récupération sportive et
              la résilience mentale.
            </p>
            <a
              href={CAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#0A8F8F] text-white font-semibold hover:bg-[#077070] transition-colors"
              aria-label="Réserver un appel découverte"
            >
              Découvrir le protocole
              <ArrowRight size={18} />
            </a>
          </FadeIn>
        </div>
      </section>

      {/* SCIENCE */}
      <section className="py-20 px-6 bg-[#EEEDE9]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <FadeIn>
            <p className="text-[#0A8F8F] text-sm font-semibold uppercase tracking-widest mb-4">
              La science du froid
            </p>
            <h2
              className="font-display text-3xl md:text-4xl font-bold mb-6 leading-tight"
            >
              Le froid n'est pas un ennemi.
              <br />
              C'est un signal.
            </h2>
            <p className="text-[#6B6B6B] leading-relaxed mb-4">
              Lorsque le corps est exposé au froid, il déclenche une cascade de
              réponses physiologiques et neurochimiques. Ce mécanisme, appelé{" "}
              <strong className="text-[#0D0D0D]">stress hormétique</strong>,
              consiste à soumettre l'organisme à un stress court et contrôlé
              pour stimuler des adaptations positives durables.
            </p>
            <p className="text-[#6B6B6B] leading-relaxed mb-4">
              La noradrénaline — neurotransmetteur clé de l'attention, de
              l'humeur et de la gestion de la douleur — augmente de{" "}
              <strong className="text-[#0D0D0D]">300%</strong> lors d'une
              immersion en eau froide. La dopamine, molécule de la motivation et
              du plaisir, reste élevée pendant plusieurs heures après
              l'exposition.
            </p>
            <p className="text-[#6B6B6B] leading-relaxed">
              Ces effets neurochimiques expliquent le sentiment de bien-être
              intense, de clarté mentale et d'énergie que rapportent les
              pratiquants réguliers.
            </p>
          </FadeIn>

          <FadeIn direction="left">
            <div className="bg-white rounded-3xl p-8 shadow-sm">
              <p className="text-[#0A8F8F] text-sm font-semibold uppercase tracking-widest mb-2">
                Réponse neurochimique
              </p>
              <h3
                className="font-display text-2xl font-bold mb-1"
              >
                Ce que le froid libère
              </h3>
              <p className="text-[#6B6B6B] text-sm leading-relaxed mb-5">
                Lors d'une immersion en eau froide (10–15°C), le cerveau et le
                corps libèrent massivement ces molécules.
              </p>
              <div className="flex flex-col gap-3">
                {MOLECULES.map((mol) => (
                  <div
                    key={mol.name}
                    className="flex items-start gap-4 bg-[#F7F6F4] rounded-2xl p-4"
                  >
                    <div className="shrink-0 w-16 text-center">
                      <p className="text-lg font-bold text-[#0A8F8F] leading-none">
                        {mol.value}
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold text-[#0D0D0D] text-sm">
                        {mol.name}
                      </p>
                      <p className="text-xs text-[#6B6B6B] mt-0.5 leading-snug">
                        {mol.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* BANDEAU IMAGE CINÉMATIQUE */}
      <section className="relative h-[50vw] max-h-[560px] min-h-[260px] overflow-hidden">
        <Image
          src="/images/bainfroid2.png"
          alt="Immersion en bain froid — méditation et respiration"
          fill
          sizes="100vw"
          className="object-cover object-[center_70%]"
        />
        <div className="absolute inset-0 bg-[#0D0D0D]/55" />
        <div className="absolute inset-0 flex items-end pb-10 px-8 md:pb-14 md:px-16">
          <FadeIn>
            <p className="text-white/50 text-xs font-semibold uppercase tracking-widest mb-2">
              Exposition au froid
            </p>
            <p
              className="font-display text-white text-2xl md:text-4xl font-bold max-w-2xl leading-tight"
            >
              Le froid ne te détruit pas. Il révèle ce que tu es vraiment.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* 3 BÉNÉFICES */}
      <section className="py-24 px-6 bg-[#F7F6F4]">
        <div className="max-w-6xl mx-auto">
          <FadeIn className="text-center mb-16">
            <p className="text-[#0A8F8F] text-sm font-semibold uppercase tracking-widest mb-4">
              Les 3 dimensions
            </p>
            <h2
              className="font-display text-3xl md:text-4xl font-bold"
            >
              Mental · Sport · Vitalité
            </h2>
            <p className="text-[#6B6B6B] mt-4 max-w-2xl mx-auto text-lg leading-relaxed">
              L'exposition au froid agit simultanément sur trois dimensions du
              corps et de l'esprit, avec des mécanismes physiologiques distincts
              et complémentaires.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BENEFITS.map((benefit, i) => (
              <FadeIn key={benefit.tag} delay={i * 0.1}>
                <div className="bg-white rounded-3xl p-8 h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-[#0A8F8F]/10 flex items-center justify-center shrink-0">
                      <benefit.icon
                        size={22}
                        className="text-[#0A8F8F]"
                        strokeWidth={1.75}
                      />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#0A8F8F] uppercase tracking-wider">
                        {benefit.tag}
                      </p>
                    </div>
                  </div>
                  <h3
                    className="font-display text-xl font-bold mb-3"
                  >
                    {benefit.title}
                  </h3>
                  <p className="text-[#6B6B6B] text-sm leading-relaxed mb-6">
                    {benefit.desc}
                  </p>
                  <ul className="flex flex-col gap-2 mt-auto">
                    {benefit.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <CheckCircle
                          size={14}
                          className="text-[#0A8F8F] mt-0.5 shrink-0"
                          strokeWidth={2}
                        />
                        <span className="text-sm text-[#6B6B6B]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* VIDÉO */}
      <section className="relative overflow-hidden bg-[#0D0D0D]">
        <video
          src="/images/bainfroid_video.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full max-h-[70vh] object-cover"
          aria-label="Vidéo — bain froid en groupe"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/70 via-transparent to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 pb-8 px-8 md:pb-12 md:px-16 pointer-events-none">
          <FadeIn>
            <p className="text-white/50 text-xs font-semibold uppercase tracking-widest mb-1">
              En pratique
            </p>
            <p
              className="font-display text-white text-xl md:text-2xl font-bold"
            >
              Stress hormétique · Adaptation · Résilience
            </p>
          </FadeIn>
        </div>
      </section>

      {/* PROTOCOLES */}
      <section className="py-24 px-6 bg-[#0D0D0D] text-white">
        <div className="max-w-5xl mx-auto">
          <FadeIn className="mb-14">
            <p className="text-[#0A8F8F] text-sm font-semibold uppercase tracking-widest mb-4">
              La pratique
            </p>
            <h2
              className="font-display text-3xl md:text-4xl font-bold mb-4"
            >
              Les protocoles
            </h2>
            <p className="text-white/60 leading-relaxed max-w-2xl">
              L'exposition au froid se pratique à différentes intensités. Du
              plus accessible au plus structuré, chaque protocole a ses
              spécificités et ses bénéfices propres.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PROTOCOLS.map((protocol, i) => (
              <FadeIn key={protocol.title} delay={i * 0.1}>
                <div className="bg-white/5 border border-white/10 rounded-3xl p-7 h-full flex flex-col">
                  <div className="w-12 h-12 rounded-2xl bg-[#0A8F8F]/20 flex items-center justify-center shrink-0 mb-5">
                    <protocol.icon
                      size={22}
                      className="text-[#0A8F8F]"
                      strokeWidth={1.75}
                    />
                  </div>
                  <p className="text-xs text-[#0A8F8F] font-semibold uppercase tracking-wider mb-1">
                    {protocol.subtitle}
                  </p>
                  <h3
                    className="font-display text-xl font-bold mb-3"
                  >
                    {protocol.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-5">
                    {protocol.desc}
                  </p>
                  <ul className="flex flex-col gap-2.5 mt-auto">
                    {protocol.steps.map((step) => (
                      <li key={step} className="flex items-start gap-3">
                        <CheckCircle
                          size={14}
                          className="text-[#0A8F8F] shrink-0 mt-0.5"
                          strokeWidth={2}
                        />
                        <span className="text-sm text-white/60 leading-snug">
                          {step}
                        </span>
                      </li>
                    ))}
                  </ul>
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
              L'exposition au froid s'adapte à tous les profils, du débutant à
              l'athlète confirmé.
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
                        <span className="text-sm text-[#6B6B6B] leading-relaxed">
                          {item}
                        </span>
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
              Prêt à plonger dans le froid ?
            </h2>
            <p className="text-[#6B6B6B] text-lg leading-relaxed mb-10">
              Réserve un appel découverte de 30 minutes. On établit ton profil,
              tes objectifs, et on construit ensemble un protocole d'exposition
              au froid adapté à ta pratique.
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
