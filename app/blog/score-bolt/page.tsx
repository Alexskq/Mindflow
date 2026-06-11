import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { CAL_URL } from "@/lib/constants";

const PAGE_URL = "https://www.alex-mindflow.fr/blog/score-bolt";
const PUBLISHED = "2026-06-11T00:00:00.000Z";
const IMAGE =
  "https://oxygenadvantage.com/cdn/shop/articles/BOLT-score_5b4d2a8f-d1f5-4e2e-9e3a-7c8b1f2e4d6a.webp";

export const metadata: Metadata = {
  title: "Le score BOLT : mesure ta tolérance au CO₂ en 40 secondes",
  description:
    "Le test BOLT (Body Oxygen Level Test) est le point de départ de la méthode Oxygen Advantage®. Il mesure ta tolérance au CO₂ et prédit ta gestion de l'essoufflement à l'effort. Protocole complet et interprétation des résultats.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "article",
    title: "Le score BOLT : mesure ta tolérance au CO₂ en 40 secondes",
    description:
      "Le test BOLT mesure ta tolérance au CO₂ et prédit ta gestion de l'essoufflement à l'effort. Protocole et interprétation des résultats.",
    url: PAGE_URL,
    publishedTime: PUBLISHED,
    modifiedTime: PUBLISHED,
    authors: ["Alex Zoonekynd"],
    tags: [
      "BOLT",
      "score BOLT",
      "CO2",
      "tolérance au CO₂",
      "Oxygen Advantage",
      "respiration",
      "performance",
    ],
    locale: "fr_FR",
    siteName: "Alex MindFlow",
    images: [
      {
        url: IMAGE,
        width: 1200,
        alt: "Le score BOLT : mesure ta tolérance au CO₂",
      },
    ],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Le score BOLT : mesure ta tolérance au CO₂ en 40 secondes",
  description:
    "Le test BOLT mesure ta tolérance au CO₂ et prédit ta gestion de l'essoufflement à l'effort.",
  image: IMAGE,
  datePublished: PUBLISHED,
  dateModified: PUBLISHED,
  author: {
    "@type": "Person",
    name: "Alex Zoonekynd",
    url: "https://www.alex-mindflow.fr/a-propos",
  },
  publisher: {
    "@type": "Organization",
    name: "Alex MindFlow",
    url: "https://www.alex-mindflow.fr",
  },
  mainEntityOfPage: { "@type": "WebPage", "@id": PAGE_URL },
  keywords:
    "score BOLT, Body Oxygen Level Test, tolérance CO2, essoufflement, Oxygen Advantage, respiration fonctionnelle",
  articleSection: "Corps · Performance",
  inLanguage: "fr-FR",
};

const BOLT_LEVELS = [
  {
    range: "Moins de 10 secondes",
    label: "Critique",
    color: "text-red-600",
    desc: "Respiration bruyante, irrégulière, laborieuse. Soupirs fréquents, sommeil perturbé, fatigue chronique. Un travail de fond est nécessaire.",
  },
  {
    range: "10 – 20 secondes",
    label: "Faible",
    color: "text-orange-500",
    desc: "Possible obstruction nasale, sifflements, toux. Qualité du sommeil médiocre et concentration réduite. L'essoufflement survient dès l'effort modéré.",
  },
  {
    range: "20 – 30 secondes",
    label: "Moyen",
    color: "text-yellow-600",
    desc: "Respiration calme et silencieuse au repos. Bonne base de départ — des améliorations sensibles sont accessibles rapidement.",
  },
  {
    range: "40 secondes et plus",
    label: "Optimal",
    color: "text-[#0A8F8F]",
    desc: "Cible de référence. Respiration légère et lente, même à l'effort modéré. Système nerveux équilibré. Endurance et récupération optimisées.",
  },
];

const STEPS = [
  "Reste au repos pendant dix minutes avant le test.",
  "Respire normalement par le nez, puis expire doucement à ton rythme habituel.",
  "Pince ton nez avec les doigts pour bloquer le passage de l'air et démarre le chrono.",
  "Compte les secondes jusqu'à la première envie franche de respirer : déglutition involontaire, tension dans la gorge ou contractions abdominales.",
  "Relâche le nez et reprends une respiration nasale calme et contrôlée.",
  "Note le temps écoulé. Si tu dois souffler ou reprendre ton souffle, tu as attendu trop longtemps.",
];

export default function ScoreBoltPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      {/* HEADER */}
      <section className="pt-28 pb-0 px-6 bg-[#F7F6F4]">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-[#6B6B6B] hover:text-[#0A8F8F] transition-colors mb-8"
            >
              <ArrowLeft size={14} />
              Retour au blog
            </Link>
            <p className="text-[#0A8F8F] text-sm font-semibold uppercase tracking-widest mb-4">
              Corps · Performance
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-bold leading-[1.08] tracking-tight mb-6">
              Le score BOLT : mesure ta tolérance au CO₂ en 40 secondes
            </h1>
            <p className="text-[#6B6B6B] text-sm mb-8">
              Source :{" "}
              <a
                href="https://oxygenadvantage.com/blogs/science/measure-bolt"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0A8F8F] hover:underline"
              >
                Oxygen Advantage® de Patrick McKeown
              </a>{" "}
              · Adapté et traduit par Alex MindFlow
            </p>
          </FadeIn>
        </div>
      </section>

      {/* IMAGE */}
      <section className="relative h-72 md:h-[480px] overflow-hidden">
        <Image
          src="https://oxygenadvantage.com/cdn/shop/articles/oxygen-advantage-bolt-score.jpg"
          alt="Le score BOLT : mesure ta tolérance au CO₂"
          fill
          sizes="100vw"
          className="object-cover object-center"
          onError={undefined}
        />
        <div className="absolute inset-0 bg-[#0D0D0D]/30" />
      </section>

      {/* CONTENU */}
      <article className="py-16 px-6 bg-[#F7F6F4]">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            {/* Intro */}
            <p className="text-lg text-[#6B6B6B] leading-relaxed mb-6">
              Avant d'optimiser ta respiration, tu dois savoir où tu en es. Le{" "}
              <strong className="text-[#0D0D0D]">BOLT</strong> — Body Oxygen
              Level Test — est le point de départ de la méthode Oxygen
              Advantage®. Un test simple, gratuit, réalisable en trente secondes,
              qui te donne une information que la plupart des gens ignorent sur
              leur propre corps : leur tolérance au CO₂.
            </p>
            <p className="text-lg text-[#6B6B6B] leading-relaxed mb-10">
              La cible ? <strong className="text-[#0D0D0D]">40 secondes</strong>.
              La plupart des adultes sont entre 15 et 25 secondes. Chaque
              tranche de 5 secondes gagnée se traduit par une amélioration
              perceptible : moins d'essoufflement, un sommeil plus profond, une
              meilleure récupération.
            </p>

            {/* Qu'est-ce que le BOLT */}
            <h2 className="font-display text-2xl font-bold mb-4 text-[#0D0D0D]">
              Qu'est-ce que le BOLT mesure vraiment ?
            </h2>
            <p className="text-[#6B6B6B] leading-relaxed mb-4">
              Contrairement à ce que son nom suggère, le BOLT ne mesure pas le
              niveau d'oxygène. Il mesure la durée de rétention confortable
              après une <strong className="text-[#0D0D0D]">expiration normale</strong>.
              Cette durée est directement corrélée à la sensibilité au dioxyde
              de carbone — la molécule qui déclenche l'envie de respirer.
            </p>
            <p className="text-[#6B6B6B] leading-relaxed mb-4">
              Pendant la rétention, le CO₂ s'accumule dans les poumons et le
              sang tandis que l'oxygène baisse légèrement. C'est cette
              accumulation de CO₂ — et non le manque d'O₂ — qui génère
              l'impulsion respiratoire. Plus tu tolères ce signal, plus ton
              volume ventilatoire au repos est efficace.
            </p>
            <p className="text-[#6B6B6B] leading-relaxed mb-10">
              Des recherches datant de 1975 ont établi que la durée de rétention
              post-expiratoire est le marqueur le plus fiable du volume
              respiratoire au repos et de l'essoufflement à l'effort. Tester
              après l'expiration — et non après l'inspiration — élimine les
              biais liés à la capacité pulmonaire et les effets compétitifs qui
              faussent les mesures.
            </p>

            {/* Protocole */}
            <h2 className="font-display text-2xl font-bold mb-6 text-[#0D0D0D]">
              Comment mesurer ton score BOLT
            </h2>
            <div className="flex flex-col gap-4 mb-10">
              {STEPS.map((step, i) => (
                <div
                  key={i}
                  className="flex gap-4 bg-[#EEEDE9] rounded-2xl p-5"
                >
                  <span className="shrink-0 w-7 h-7 rounded-full bg-[#0A8F8F] text-white text-sm font-bold flex items-center justify-center mt-0.5">
                    {i + 1}
                  </span>
                  <p className="text-sm text-[#6B6B6B] leading-relaxed">
                    {step}
                  </p>
                </div>
              ))}
            </div>

            {/* Encadré règle d'or */}
            <div className="bg-[#EEEDE9] rounded-3xl p-7 mb-10">
              <p className="text-[#0A8F8F] text-xs font-bold uppercase tracking-wider mb-3">
                Règle d'or
              </p>
              <p className="font-display text-[#0D0D0D] text-lg font-bold leading-snug">
                Tu dois pouvoir reprendre une respiration nasale calme et
                régulière immédiatement après avoir relâché. Si tu halètes ou
                si tu dois respirer par la bouche, tu as dépassé le seuil.
                Recommence.
              </p>
            </div>

            {/* Interprétation */}
            <h2 className="font-display text-2xl font-bold mb-6 text-[#0D0D0D]">
              Interpréter ton score
            </h2>
            <div className="flex flex-col gap-4 mb-10">
              {BOLT_LEVELS.map((level) => (
                <div
                  key={level.range}
                  className="flex gap-4 bg-[#EEEDE9] rounded-2xl p-5"
                >
                  <CheckCircle2
                    size={18}
                    className="text-[#0A8F8F] shrink-0 mt-0.5"
                    strokeWidth={1.75}
                  />
                  <div>
                    <div className="flex items-baseline gap-2 mb-1">
                      <p className="font-display font-bold text-[#0D0D0D] text-sm">
                        {level.range}
                      </p>
                      <span className={`text-xs font-semibold ${level.color}`}>
                        — {level.label}
                      </span>
                    </div>
                    <p className="text-sm text-[#6B6B6B] leading-relaxed">
                      {level.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* BOLT et performance */}
            <h2 className="font-display text-2xl font-bold mb-4 text-[#0D0D0D]">
              BOLT et performance sportive
            </h2>
            <p className="text-[#6B6B6B] leading-relaxed mb-4">
              Le score BOLT est un prédicteur direct de l'essoufflement à
              l'effort. En dessous de 20 secondes, l'essoufflement apparaît dès
              une intensité modérée — souvent confondu avec un manque de
              condition physique. Au-dessus de 30 secondes, la respiration reste
              légère et contrôlée même à des intensités élevées.
            </p>
            <p className="text-[#6B6B6B] leading-relaxed mb-4">
              Pour l'asthme d'effort, le lien est particulièrement documenté.
              Les études cliniques confirment qu'un temps de rétention court
              correspond à un volume ventilatoire élevé et à une sévérité
              accrue des symptômes. Chaque tranche de 5 secondes gagnée
              s'accompagne d'une réduction perceptible des crises.
            </p>
            <p className="text-[#6B6B6B] leading-relaxed mb-10">
              À 40 secondes, la respiration au repos est légère et lente. À
              l'effort modéré, elle reste nasale et contrôlée. Le système
              nerveux autonome est mieux équilibré, la récupération plus rapide,
              le sommeil plus profond.
            </p>

            {/* Comment progresser */}
            <h2 className="font-display text-2xl font-bold mb-4 text-[#0D0D0D]">
              Comment faire progresser son score
            </h2>
            <p className="text-[#6B6B6B] leading-relaxed mb-4">
              La progression du BOLT repose sur un principe unique :{" "}
              <strong className="text-[#0D0D0D]">
                réduire le volume ventilatoire
              </strong>
              . Pas en respirant plus lentement de façon forcée, mais en
              entraînant progressivement le corps à tolérer des niveaux plus
              élevés de CO₂.
            </p>
            <p className="text-[#6B6B6B] leading-relaxed mb-4">
              Les approches validées par la méthode Oxygen Advantage® :
            </p>
            <ul className="text-[#6B6B6B] leading-relaxed mb-4 flex flex-col gap-2 pl-1">
              {[
                "Respiration nasale exclusive au repos, au travail, pendant le sommeil et à l'effort léger.",
                "Respiration rythmée à 4,5 – 6,5 cycles par minute pour activer le baroréflexe.",
                "Exercices de respiration légère (breath-light) pour habituer le corps à fonctionner avec moins d'air.",
                "Rétentions douces pendant l'activité légère pour stimuler la tolérance au CO₂.",
                "Bande buccale (MyoTape) pendant le sommeil pour garantir la respiration nasale nocturne.",
              ].map((item, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#0A8F8F] shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-[#6B6B6B] leading-relaxed mb-10">
              Avec une pratique régulière, la plupart des personnes observent
              une amélioration significative en quelques semaines.
            </p>

            {/* Encadré à retenir */}
            <div className="bg-[#EEEDE9] rounded-3xl p-7 mb-10">
              <p className="text-[#0A8F8F] text-xs font-bold uppercase tracking-wider mb-3">
                À retenir
              </p>
              <p className="font-display text-[#0D0D0D] text-lg font-bold leading-snug">
                Le BOLT n'est pas qu'un test. C'est un miroir de ta physiologie
                respiratoire. Mesure-le régulièrement : chaque seconde gagnée
                représente une amélioration concrète de ta santé et de tes
                performances.
              </p>
            </div>

            {/* Source */}
            <p className="text-xs text-[#6B6B6B]/50 border-t border-[#EEEDE9] pt-6">
              Article adapté et traduit depuis{" "}
              <a
                href="https://oxygenadvantage.com/blogs/science/measure-bolt"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-[#0A8F8F]"
              >
                oxygenadvantage.com
              </a>{" "}
              par Patrick McKeown, Oxygen Advantage®.
            </p>
          </FadeIn>
        </div>
      </article>

      {/* NAV */}
      <section className="py-16 px-6 bg-[#EEEDE9]">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row gap-4 items-center justify-between">
          <Link
            href="/blog/respirer-en-courant"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#0D0D0D] hover:text-[#0A8F8F] transition-colors"
          >
            <ArrowLeft size={16} />
            Article précédent
          </Link>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#0D0D0D] hover:text-[#0A8F8F] transition-colors"
          >
            Tous les articles
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-[#F7F6F4]">
        <div className="max-w-2xl mx-auto text-center">
          <FadeIn>
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-5">
              Tu veux connaître et améliorer ton score BOLT ?
            </h2>
            <p className="text-[#6B6B6B] leading-relaxed mb-8">
              En 30 minutes, on mesure ton BOLT, on identifie les blocages et on
              construit un protocole personnalisé pour progresser rapidement.
            </p>
            <a
              href={CAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#0A8F8F] text-white font-semibold hover:bg-[#077070] transition-colors"
              aria-label="Réserver un appel découverte"
            >
              Réserver un appel découverte
              <ArrowRight size={18} />
            </a>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
