import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import { CheckCircle, ArrowRight, Wind, Activity, Zap } from "lucide-react";
import { CAL_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Oxygen Advantage® — Respiration fonctionnelle | Alex MindFlow",
  description:
    "Découvre la méthode Oxygen Advantage® de Patrick McKeown : respiration fonctionnelle, test BOLT, effet Bohr, simulation d'altitude. Certification Alex MindFlow à Valenciennes.",
};

const PILLARS = [
  {
    tag: "Léger",
    subtitle: "Biochimie",
    icon: Wind,
    title: "Respirer moins",
    desc: "Réduire le volume inspiré crée un léger manque d'air tolérable. Ce signal CO₂ déclenche l'effet Bohr, qui libère davantage d'oxygène des globules rouges vers les tissus, et stimule la production d'oxyde nitrique nasal pour dilater les vaisseaux sanguins.",
    benefits: [
      "Réduit l'essoufflement à l'effort",
      "Normalise le volume respiratoire",
      "Améliore la qualité du sommeil",
      "Augmente l'oxygénation cellulaire",
      "Stimule la production d'oxyde nitrique",
      "Améliore la récupération post-effort",
      "Apaise le mental et réduit le stress",
    ],
  },
  {
    tag: "Lent",
    subtitle: "Cadence · Psychophysiologie",
    icon: Activity,
    title: "Respirer plus lentement",
    desc: "6 respirations par minute (4 s inspire / 6 s expire) maximise la variabilité de la fréquence cardiaque (VFC) et l'arythmie sinusale respiratoire, indicateurs directs du tonus parasympathique et de la résilience du système nerveux autonome.",
    benefits: [
      "Stimule le nerf vague",
      "Améliore la variabilité de la fréquence cardiaque",
      "Équilibre le système nerveux autonome",
      "Réduit la chimiosensibilité au CO₂",
      "Augmente la résilience au stress",
      "Améliore le focus et la concentration",
    ],
  },
  {
    tag: "Profond",
    subtitle: "Biomécanique",
    icon: Zap,
    title: "Respirer avec le diaphragme",
    desc: "Mobiliser pleinement le diaphragme améliore la ventilation alvéolaire, la capacité pulmonaire et l'oxygénation sanguine. Ce travail biomécanique soutient aussi la posture, le drainage lymphatique et la stabilité de la colonne vertébrale.",
    benefits: [
      "Augmente la capacité pulmonaire",
      "Améliore la ventilation / perfusion",
      "Augmente le taux d'oxygène sanguin",
      "Stabilise la colonne vertébrale",
      "Améliore le drainage lymphatique",
      "Renforce les muscles respiratoires",
    ],
  },
];

const ALTITUDE_BENEFITS = [
  {
    label: "Augmentation naturelle de l'EPO",
    desc: "Hormone stimulant la production de globules rouges",
  },
  {
    label: "Réduction de l'acide lactique",
    desc: "Moins de fatigue musculaire à l'effort intense",
  },
  {
    label: "Amélioration de la capacité aérobie",
    desc: "Plus d'endurance sur la durée",
  },
  {
    label: "Augmentation du seuil anaérobie",
    desc: "Repousser la limite avant l'essoufflement",
  },
];

const BOLT_SCORES = [
  {
    score: "< 20 s",
    label: "Respiration dysfonctionnelle",
    color: "bg-red-50 border-red-100",
  },
  {
    score: "20 – 25 s",
    label: "Zone de progression",
    color: "bg-orange-50 border-orange-100",
  },
  {
    score: "25 – 40 s",
    label: "Respiration fonctionnelle",
    color: "bg-emerald-50 border-emerald-100",
  },
  {
    score: "> 40 s",
    label: "Haute performance",
    color: "bg-[#0A8F8F]/5 border-[#0A8F8F]/20",
  },
];

export default function OxygenAdvantagePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <Image
          src="/images/OA_BOXING1.jpg"
          alt="Athlète en préparation — Oxygen Advantage®"
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0D]/85 via-[#0D0D0D]/60 to-[#0D0D0D]/20" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 w-full pt-24 pb-20">
          <FadeIn>
            <p className="text-[#0A8F8F] text-sm font-semibold uppercase tracking-widest mb-6">
              Méthode · Respiration fonctionnelle
            </p>
            <h1
              className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-8 text-white"
            >
              Oxygen Advantage®
              <br />
              <span className="text-[#0A8F8F]">Respirer juste</span>
              <br />
              change tout.
            </h1>
            <p className="text-xl text-white/70 leading-relaxed max-w-xl mb-10">
              Développée par Patrick McKeown, l'Oxygen Advantage® transforme la
              façon de respirer pour améliorer performances, récupération et
              bien-être. Le principe est contre-intuitif : la plupart d'entre
              nous respirons trop.
            </p>
            <a
              href={CAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#0A8F8F] text-white font-semibold hover:bg-[#077070] transition-colors"
              aria-label="Réserver un appel découverte"
            >
              Découvrir la méthode
              <ArrowRight size={18} />
            </a>
          </FadeIn>
        </div>
      </section>

      {/* IMAGE CINÉMATIQUE — GYM */}
      <section className="relative h-[50vw] max-h-[560px] min-h-[260px] overflow-hidden">
        <Image
          src="/images/OA_GYM1.jpg"
          alt="Athlète à l'entraînement — Oxygen Advantage®"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#0D0D0D]/55" />
        <div className="absolute inset-0 flex items-end pb-10 px-8 md:pb-14 md:px-16">
          <FadeIn>
            <p className="text-white/50 text-xs font-semibold uppercase tracking-widest mb-2">
              Oxygen Advantage®
            </p>
            <p
              className="font-display text-white text-2xl md:text-4xl font-bold max-w-2xl leading-tight"
            >
              Tu n'es pas essoufflé par manque d'oxygène. Tu l'es parce que tu n'utilises pas ce que tu as déjà.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* LE PARADOXE + TEST BOLT */}
      <section className="py-20 px-6 bg-[#EEEDE9]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <FadeIn>
            <p className="text-[#0A8F8F] text-sm font-semibold uppercase tracking-widest mb-4">
              Le paradoxe de la respiration
            </p>
            <h2
              className="font-display text-3xl md:text-4xl font-bold mb-6 leading-tight"
            >
              Tu n'as pas besoin de plus d'air. Tu as besoin de mieux
              l'utiliser.
            </h2>
            <p className="text-[#6B6B6B] leading-relaxed mb-4">
              L'idée reçue est simple : « plus je respire, plus j'oxygène mon
              corps ». En réalité, respirer trop (l'hyperventilation chronique)
              diminue la tolérance au CO₂ et réduit la libération d'oxygène vers
              les muscles et le cerveau.
            </p>
            <p className="text-[#6B6B6B] leading-relaxed mb-4">
              Le CO₂ n'est pas uniquement un déchet. C'est un régulateur
              essentiel : il dilate les vaisseaux sanguins, déclenche l'
              <strong className="text-[#0D0D0D]">effet Bohr</strong> (libération
              de l'O₂ par l'hémoglobine vers les tissus) et régule le système
              nerveux autonome.
            </p>
            <p className="text-[#6B6B6B] leading-relaxed">
              Optimiser sa tolérance au CO₂, c'est optimiser son efficacité
              énergétique, au repos comme à l'effort.
            </p>
          </FadeIn>

          <FadeIn direction="left">
            <div className="bg-white rounded-3xl p-8 shadow-sm">
              <p className="text-[#0A8F8F] text-sm font-semibold uppercase tracking-widest mb-2">
                Test BOLT
              </p>
              <h3
                className="font-display text-2xl font-bold mb-1"
              >
                Body Oxygen Level Test
              </h3>
              <p className="text-[#6B6B6B] text-sm leading-relaxed mb-5">
                Mesure ta tolérance au CO₂, principal indicateur de la qualité
                de ta respiration fonctionnelle.
              </p>
              <ol className="flex flex-col gap-2.5 mb-6">
                {[
                  "Inspire normalement par le nez",
                  "Expire normalement par le nez",
                  "Pince ton nez et bloque ta respiration",
                  "Compte les secondes jusqu'au 1er besoin de respirer",
                  "Reprends une respiration normale et contrôlée",
                ].map((step, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#0A8F8F]/10 text-[#0A8F8F] text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <span className="text-sm text-[#6B6B6B]">{step}</span>
                  </li>
                ))}
              </ol>
              <div className="grid grid-cols-2 gap-2.5">
                {BOLT_SCORES.map((item) => (
                  <div
                    key={item.score}
                    className={`rounded-xl p-3 border ${item.color}`}
                  >
                    <p className="font-bold text-[#0D0D0D] text-sm">
                      {item.score}
                    </p>
                    <p className="text-xs text-[#6B6B6B] mt-0.5 leading-tight">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* LSD — 3 PILIERS */}
      <section className="py-24 px-6 bg-[#F7F6F4]">
        <div className="max-w-6xl mx-auto">
          <FadeIn className="text-center mb-16">
            <p className="text-[#0A8F8F] text-sm font-semibold uppercase tracking-widest mb-4">
              Les 3 dimensions
            </p>
            <h2
              className="font-display text-3xl md:text-4xl font-bold"
            >
              Light · Slow · Deep
            </h2>
            <p className="text-[#6B6B6B] mt-4 max-w-2xl mx-auto text-lg leading-relaxed">
              L'Oxygen Advantage® structure l'entraînement respiratoire en trois
              dimensions complémentaires, chacune agissant sur un niveau
              différent de la physiologie.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PILLARS.map((pillar, i) => (
              <FadeIn key={pillar.tag} delay={i * 0.1}>
                <div className="bg-white rounded-3xl p-8 h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-[#0A8F8F]/10 flex items-center justify-center shrink-0">
                      <pillar.icon
                        size={22}
                        className="text-[#0A8F8F]"
                        strokeWidth={1.75}
                      />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#0A8F8F] uppercase tracking-wider">
                        {pillar.tag}
                      </p>
                      <p className="text-xs text-[#6B6B6B]">
                        {pillar.subtitle}
                      </p>
                    </div>
                  </div>
                  <h3
                    className="font-display text-xl font-bold mb-3"
                  >
                    {pillar.title}
                  </h3>
                  <p className="text-[#6B6B6B] text-sm leading-relaxed mb-6">
                    {pillar.desc}
                  </p>
                  <ul className="flex flex-col gap-2 mt-auto">
                    {pillar.benefits.map((b) => (
                      <li key={b} className="flex items-start gap-2">
                        <CheckCircle
                          size={14}
                          className="text-[#0A8F8F] mt-0.5 shrink-0"
                          strokeWidth={2}
                        />
                        <span className="text-sm text-[#6B6B6B]">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* BANDEAU IMAGE — RUNNING */}
      <section className="relative h-64 md:h-80 overflow-hidden">
        <Image
          src="/images/OA_RUNNING2.jpg"
          alt="Course à pied — entraînement respiratoire Oxygen Advantage®"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#0D0D0D]/55 flex items-center justify-center px-6">
          <FadeIn>
            <div className="text-center">
              <p className="text-[#0A8F8F] text-sm font-semibold uppercase tracking-widest mb-3">
                Physiologie respiratoire
              </p>
              <p
                className="font-display text-white text-xl md:text-3xl font-bold max-w-xl mx-auto leading-tight"
              >
                Chaque souffle est une opportunité d'entraînement.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SIMULATION ALTITUDE */}
      <section className="py-24 px-6 bg-[#0D0D0D] text-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <p className="text-[#0A8F8F] text-sm font-semibold uppercase tracking-widest mb-4">
              Performance avancée
            </p>
            <h2
              className="font-display text-3xl md:text-4xl font-bold mb-6 leading-tight"
            >
              Simuler l'altitude sans quitter la plaine
            </h2>
            <p className="text-white/70 leading-relaxed mb-4">
              L'entraînement hypoxique/hypercapnique intermittent (IHHT)
              consiste à effectuer des apnées courtes pendant l'effort physique.
              Cette technique reproduit les effets de l'entraînement en
              altitude.
            </p>
            <p className="text-white/70 leading-relaxed">
              Réservé aux personnes avec un score BOLT supérieur à 25 secondes,
              ce protocole est utilisé par des athlètes de haut niveau pour
              franchir un nouveau palier de performance sans jamais quitter leur
              terrain d'entraînement habituel.
            </p>
          </FadeIn>
          <FadeIn direction="left">
            <div className="flex flex-col gap-4">
              {ALTITUDE_BENEFITS.map((item, i) => (
                <FadeIn key={item.label} delay={0.1 * i}>
                  <div className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-2xl p-5">
                    <CheckCircle
                      size={18}
                      className="text-[#0A8F8F] shrink-0 mt-0.5"
                      strokeWidth={1.75}
                    />
                    <div>
                      <p className="font-semibold text-white text-sm">
                        {item.label}
                      </p>
                      <p className="text-white/50 text-xs mt-0.5">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CERTIFICATION */}
      <section className="py-20 px-6 bg-[#EEEDE9]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          <FadeIn>
            <p className="text-[#0A8F8F] text-sm font-semibold uppercase tracking-widest mb-4">
              La méthode
            </p>
            <h2
              className="font-display text-3xl md:text-4xl font-bold mb-6"
            >
              Créée par Patrick McKeown
            </h2>
            <p className="text-[#6B6B6B] leading-relaxed mb-4">
              Patrick McKeown est l'expert mondial de la respiration
              fonctionnelle et fondateur de l'Oxygen Advantage®. Lui-même ancien
              souffrant d'asthme chronique, il a développé une méthode
              structurée basée sur des décennies de recherche en physiologie
              respiratoire, en intégrant les travaux du Dr Konstantin Buteyko et
              les avancées modernes en neurosciences.
            </p>
            <p className="text-[#6B6B6B] leading-relaxed mb-8">
              Je suis instructeur certifié Oxygen Advantage®. Une formation
              rigoureuse en physiologie respiratoire avancée, en protocoles
              d'entraînement adaptés à différents profils (sportifs, troubles
              respiratoires, performance cognitive) et en maîtrise des outils de
              mesure BOLT et MBT.
            </p>
            <a
              href={CAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#0A8F8F] text-white font-semibold hover:bg-[#077070] transition-colors"
              aria-label="Réserver un appel découverte"
            >
              Commencer avec moi
              <ArrowRight size={18} />
            </a>
          </FadeIn>

          <FadeIn direction="left">
            <div className="flex items-center justify-center">
              <div className="bg-white rounded-3xl p-10 shadow-sm flex items-center justify-center">
                <div className="relative w-56 h-32 md:w-72 md:h-40">
                  <Image
                    src="/images/OA-Full-Logo-Black.png"
                    alt="Logo Oxygen Advantage®"
                    fill
                    sizes="(max-width: 768px) 224px, 288px"
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-[#F7F6F4]">
        <div className="max-w-2xl mx-auto text-center">
          <FadeIn>
            <h2
              className="font-display text-3xl md:text-4xl font-bold mb-6"
            >
              Quel est ton score BOLT ?
            </h2>
            <p className="text-[#6B6B6B] text-lg leading-relaxed mb-10">
              Fais le test maintenant. Réserve ensuite un appel découverte : on
              analysera ta respiration et on construira un protocole adapté à
              ton profil et tes objectifs.
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
