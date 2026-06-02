import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";
import { CAL_URL } from "@/lib/constants";
const PAGE_URL = "https://www.alex-mindflow.fr/blog/respirer-en-courant";
const PUBLISHED = "2026-05-29T00:00:00.000Z";
const IMAGE = "https://oxygenadvantage.com/cdn/shop/articles/breathing-running_d46f682c-9630-4c4e-9453-9bb6b483f4a2.jpg";

export const metadata: Metadata = {
  title: "Comment respirer en courant : nez ou bouche ?",
  description:
    "La respiration nasale pendant la course est 22% plus efficace que la respiration buccale. Découvrez la science derrière ce chiffre et comment faire la transition.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "article",
    title: "Comment respirer en courant : nez ou bouche ?",
    description:
      "La respiration nasale pendant la course est 22% plus efficace que la respiration buccale. Découvrez la science et le protocole de transition.",
    url: PAGE_URL,
    publishedTime: PUBLISHED,
    modifiedTime: PUBLISHED,
    authors: ["Alex Zoonekynd"],
    tags: ["course à pied", "respiration nasale", "running", "endurance", "CO2", "Oxygen Advantage"],
    locale: "fr_FR",
    siteName: "Alex MindFlow",
    images: [{ url: IMAGE, width: 1200, alt: "Respiration nasale pendant la course à pied" }],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Comment respirer en courant : nez ou bouche ?",
  description:
    "La respiration nasale pendant la course est 22% plus efficace. Comprendre le rôle du CO₂ et réussir la transition en 6 étapes.",
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
  keywords: "respiration course à pied, running nez bouche, CO2 endurance, Oxygen Advantage sport",
  articleSection: "Sport · Performance",
  inLanguage: "fr-FR",
};

const TRANSITION_STEPS = [
  {
    step: "1",
    title: "Commencer à allure très modérée",
    desc: "Réduis ton allure suffisamment pour maintenir une respiration nasale confortable sans forcer. Au début, tu courras peut-être 30-40% plus lentement qu'à l'habitude.",
  },
  {
    step: "2",
    title: "Accepter l'inconfort initial",
    desc: "Les premières semaines sont difficiles. Ton corps est habitué à un certain débit d'air. La tolérance au CO₂ est encore faible — c'est normal et ça se travaille.",
  },
  {
    step: "3",
    title: "Tenir la respiration nasale même en ralentissant",
    desc: "Si tu n'arrives plus à maintenir le nez, ralentis — ne passe pas par la bouche. L'objectif est l'adaptation, pas la performance immédiate.",
  },
  {
    step: "4",
    title: "Augmenter l'intensité progressivement",
    desc: "Sur 6 à 10 semaines, la tolérance au CO₂ augmente. Tu pourras courir de plus en plus vite en restant au nez — avec moins d'essoufflement.",
  },
  {
    step: "5",
    title: "Observer les bénéfices sur la récupération",
    desc: "Les premières améliorations notables arrivent souvent sur le sommeil, la récupération et la clarté mentale — avant même les gains de performance.",
  },
  {
    step: "6",
    title: "Intégrer le nez à 50-100% de l'entraînement",
    desc: "Les athlètes professionnels maintiennent la respiration nasale sur au moins 50% de leurs séances. Pour les coureurs récréatifs, l'objectif est 100%.",
  },
];

const KEY_POINTS = [
  "La respiration nasale réduit la ventilation de 22% pour une même intensité d'effort",
  "Le CO₂ — et non l'O₂ — est le principal déclencheur du besoin de respirer",
  "Respirer par le nez maintient des niveaux optimaux de CO₂ pour libérer l'O₂ vers les muscles",
  "La bouche introduit de l'air froid et sec directement dans les bronches, déclenchant inflammation et bronchoconstriction",
  "L'adaptation à la respiration nasale prend 6 à 10 semaines",
  "Les gains incluent : moins d'essoufflement, meilleure endurance, récupération accélérée",
];

export default function RespirerEnCourantPage() {
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
              Sport · Performance
            </p>
            <h1
              className="font-display text-4xl md:text-5xl font-bold leading-[1.08] tracking-tight mb-6"
            >
              Comment respirer en courant : nez ou bouche ?
            </h1>
            <p className="text-[#6B6B6B] text-sm mb-8">
              Source :{" "}
              <a
                href="https://oxygenadvantage.com/blogs/science/how-to-breathe-while-running"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0A8F8F] hover:underline"
              >
                Oxygen Advantage® — Patrick McKeown
              </a>{" "}
              · Adapté et traduit par Alex MindFlow
            </p>
          </FadeIn>
        </div>
      </section>

      {/* IMAGE */}
      <section className="relative h-72 md:h-[480px] overflow-hidden">
        <Image
          src="https://oxygenadvantage.com/cdn/shop/articles/breathing-running_d46f682c-9630-4c4e-9453-9bb6b483f4a2.jpg"
          alt="Respiration pendant la course à pied"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#0D0D0D]/30" />
      </section>

      {/* CONTENU */}
      <article className="py-16 px-6 bg-[#F7F6F4]">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            {/* Intro */}
            <p className="text-lg text-[#6B6B6B] leading-relaxed mb-6">
              La respiration nasale pendant la course est{" "}
              <strong className="text-[#0D0D0D]">22% plus efficace</strong> que
              la respiration buccale. Ce chiffre, issu de la recherche en
              physiologie sportive, remet en question l'un des réflexes les plus
              ancrés dans la pratique sportive : ouvrir la bouche dès que
              l'effort s'intensifie.
            </p>
            <p className="text-lg text-[#6B6B6B] leading-relaxed mb-10">
              La vérité contre-intuitive ? Respirer par la bouche pendant la
              course crée souvent{" "}
              <strong className="text-[#0D0D0D]">plus d'essoufflement</strong>,
              pas moins. Comprendre pourquoi est la première étape pour courir
              mieux — sans changer son volume d'entraînement.
            </p>

            {/* CO2 */}
            <h2
              className="font-display text-2xl font-bold mb-4 text-[#0D0D0D]"
            >
              Le paradoxe du CO₂ pendant la course
            </h2>
            <p className="text-[#6B6B6B] leading-relaxed mb-4">
              La plupart des coureurs pensent qu'ils s'essoufflent par{" "}
              <em>manque d'oxygène</em>. C'est inexact. Le signal qui déclenche
              le besoin de respirer n'est pas un taux d'O₂ trop bas — c'est un
              taux de{" "}
              <strong className="text-[#0D0D0D]">CO₂ trop élevé</strong>. Et la
              réponse du corps n'est pas d'absorber plus d'oxygène, mais
              d'éliminer le CO₂ excédentaire.
            </p>
            <p className="text-[#6B6B6B] leading-relaxed mb-4">
              Quand tu cours en respirant par la bouche, tu élimines le CO₂
              trop rapidement. Or le CO₂ joue un rôle essentiel : il déclenche
              l'{" "}
              <strong className="text-[#0D0D0D]">effet Bohr</strong>, le
              mécanisme par lequel l'hémoglobine libère l'oxygène vers les
              muscles en activité. Moins de CO₂ = moins d'O₂ délivré aux
              tissus, malgré une ventilation élevée.
            </p>
            <p className="text-[#6B6B6B] leading-relaxed mb-10">
              Résultat : tu respires plus vite et plus fort, mais tes muscles
              reçoivent proportionnellement moins d'oxygène. L'essoufflement
              s'amplifie. La spirale est enclenchée.
            </p>

            {/* Bronchoconstriction */}
            <h2
              className="font-display text-2xl font-bold mb-4 text-[#0D0D0D]"
            >
              Pourquoi la bouche aggrave les choses
            </h2>
            <p className="text-[#6B6B6B] leading-relaxed mb-4">
              Au-delà du CO₂, la respiration buccale pendant la course introduit
              de l'air non filtré, non réchauffé et non humidifié directement
              dans les voies aériennes. Le Dr George Dallam — expert en
              physiologie du sport — note que cette pratique crée{" "}
              <em>
                « un taux quasi épidémique de bronchoconstriction induite par
                l'exercice »
              </em>{" "}
              parmi les athlètes d'endurance.
            </p>
            <p className="text-[#6B6B6B] leading-relaxed mb-10">
              L'air froid et sec irrite les muqueuses bronchiques, déclenche une
              réponse inflammatoire et resserre les voies aériennes. C'est un
              cercle vicieux : plus tu respires par la bouche, plus tes bronches
              se contractent, plus tu t'essouffles — et plus tu respires par la
              bouche.
            </p>

            {/* Les chiffres */}
            <div className="bg-[#0D0D0D] text-white rounded-3xl p-8 mb-10">
              <p className="text-[#0A8F8F] text-xs font-bold uppercase tracking-wider mb-5">
                Les chiffres clés
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {[
                  {
                    value: "22%",
                    label: "de réduction de la ventilation avec la respiration nasale",
                  },
                  {
                    value: "6-10 sem.",
                    label: "pour s'adapter à la respiration nasale à l'effort",
                  },
                  {
                    value: "50%+",
                    label: "des séances en nasale recommandé pour les athlètes élites",
                  },
                ].map((stat) => (
                  <div key={stat.value} className="text-center">
                    <p
                      className="font-display text-3xl font-bold text-[#0A8F8F] mb-1"
                    >
                      {stat.value}
                    </p>
                    <p className="text-white/60 text-xs leading-snug">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Ce que ça change */}
            <h2
              className="font-display text-2xl font-bold mb-5 text-[#0D0D0D]"
            >
              Ce que la respiration nasale change concrètement
            </h2>
            <ul className="flex flex-col gap-3 mb-10">
              {KEY_POINTS.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircle
                    size={15}
                    className="text-[#0A8F8F] shrink-0 mt-0.5"
                    strokeWidth={2}
                  />
                  <span className="text-[#6B6B6B] text-sm leading-relaxed">
                    {point}
                  </span>
                </li>
              ))}
            </ul>

            {/* Protocole de transition */}
            <h2
              className="font-display text-2xl font-bold mb-6 text-[#0D0D0D]"
            >
              Le protocole de transition en 6 étapes
            </h2>
            <div className="flex flex-col gap-4 mb-10">
              {TRANSITION_STEPS.map((step) => (
                <div
                  key={step.step}
                  className="flex gap-4 bg-[#EEEDE9] rounded-2xl p-5"
                >
                  <span className="w-8 h-8 rounded-full bg-[#0A8F8F] text-white text-sm font-bold flex items-center justify-center shrink-0">
                    {step.step}
                  </span>
                  <div>
                    <p
                      className="font-display font-bold text-[#0D0D0D] mb-1"
                    >
                      {step.title}
                    </p>
                    <p className="text-sm text-[#6B6B6B] leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Encadré */}
            <div className="bg-[#EEEDE9] rounded-3xl p-7 mb-10">
              <p className="text-[#0A8F8F] text-xs font-bold uppercase tracking-wider mb-3">
                À retenir
              </p>
              <p
                className="font-display text-[#0D0D0D] text-lg font-bold leading-snug"
              >
                La transition vers la respiration nasale en courant ne demande
                pas plus de talent ou de condition physique. Elle demande de la
                patience, de la régularité — et 6 à 10 semaines.
              </p>
            </div>

            {/* Source */}
            <p className="text-xs text-[#6B6B6B]/50 border-t border-[#EEEDE9] pt-6">
              Article adapté et traduit depuis{" "}
              <a
                href="https://oxygenadvantage.com/blogs/science/how-to-breathe-while-running"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-[#0A8F8H]"
              >
                oxygenadvantage.com
              </a>{" "}
              — Patrick McKeown, Oxygen Advantage®.
            </p>
          </FadeIn>
        </div>
      </article>

      {/* NAV */}
      <section className="py-16 px-6 bg-[#EEEDE9]">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row gap-4 items-center justify-between">
          <Link
            href="/blog/respiration-buccale"
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

      <section className="py-20 px-6 bg-[#F7F6F4]">
        <div className="max-w-2xl mx-auto text-center">
          <FadeIn>
            <h2
              className="font-display text-2xl md:text-3xl font-bold mb-5"
            >
              Prêt à courir mieux, pas plus vite ?
            </h2>
            <p className="text-[#6B6B6B] leading-relaxed mb-8">
              Réserve un appel pour travailler ta respiration à l'effort. En
              6 à 10 semaines, tu peux changer ta façon de courir — et ta
              récupération avec.
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
