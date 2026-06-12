import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";

import { CAL_URL } from "@/lib/constants";
const PAGE_URL = "https://www.alex-mindflow.fr/blog/fonctions-du-nez";
const PUBLISHED = "2026-05-29T00:00:00.000Z";
const IMAGE = "https://oxygenadvantage.com/cdn/shop/articles/nose-functions_13bb5c34-a40e-495c-a4a7-331510e9fc80.jpg";

export const metadata: Metadata = {
  title: "Le nez : 30 fonctions que tu ne soupçonnes pas",
  description:
    "Le Dr Cottle a identifié 30 fonctions distinctes du nez. Filtration, oxyde nitrique, cognition, sommeil, performance sportive : le nez est bien plus qu'un simple passage d'air.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "article",
    title: "Le nez : 30 fonctions que tu ne soupçonnes pas",
    description:
      "Le Dr Cottle a identifié 30 fonctions distinctes du nez. Filtration, oxyde nitrique, cognition, sommeil, performance sportive : le nez est bien plus qu'un simple passage d'air.",
    url: PAGE_URL,
    publishedTime: PUBLISHED,
    modifiedTime: PUBLISHED,
    authors: ["Alex Zoonekynd"],
    tags: ["respiration nasale", "nez", "Oxygen Advantage", "oxyde nitrique", "bien-être"],
    locale: "fr_FR",
    siteName: "Alex MindFlow",
    images: [{ url: IMAGE, width: 1200, alt: "Fonctions du nez et respiration nasale" }],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Le nez : 30 fonctions que tu ne soupçonnes pas",
  description:
    "Le Dr Cottle a identifié 30 fonctions distinctes du nez. Oxyde nitrique, cognition, sommeil, performance sportive.",
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
  keywords: "respiration nasale, nez, Oxygen Advantage, oxyde nitrique, bien-être",
  articleSection: "Corps · Respiration",
  inLanguage: "fr-FR",
};

const NOSE_FUNCTIONS = [
  {
    group: "Santé & performance quotidienne",
    items: [
      "Induire la relaxation grâce à la résistance naturelle des voies nasales",
      "Améliorer la cognition et la clarté mentale",
      "Participer à la sélection du partenaire via les signaux olfactifs",
      "Augmenter la conscience visuospatiale lors de tâches de concentration",
      "Réduire l'effort vocal pour les chanteurs et les orateurs",
    ],
  },
  {
    group: "Contrôle de la respiration & oxygénation",
    items: [
      "Recruter plus efficacement le diaphragme vs la respiration buccale",
      "Augmenter l'oxygène artériel de près de 10%",
      "Produire de l'oxyde nitrique (NO), qui dilate les vaisseaux pulmonaires",
      "Redistribuer le flux sanguin jusqu'à 24% dans les régions pulmonaires supérieures",
      "Défendre contre les pathogènes via l'activité enzymatique nasale",
      "Maintenir l'élasticité pulmonaire grâce à la résistance à l'expiration",
      "Réchauffer et humidifier l'air inspiré",
      "Réguler la balance hydrique pendant la respiration",
    ],
  },
  {
    group: "Sommeil, sport & sens",
    items: [
      "Améliorer l'oxygénation durant le sommeil",
      "Approfondir la qualité du sommeil et réduire les ronflements",
      "Activer 450 types de récepteurs olfactifs",
      "Connecter odorat et goût via les centres cérébraux",
      "Prévenir le rétrécissement des voies aériennes à l'effort",
      "Réduire la ventilation de 22% à intensité d'exercice équivalente",
      "Décongestionner naturellement lors d'une activité physique intense",
    ],
  },
  {
    group: "Développement structurel",
    items: [
      "Influencer le développement squelettique du visage : les enfants respirant par la bouche développent des structures faciales plus longues et des mâchoires plus étroites",
    ],
  },
];

export default function FonctionsDuNezPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      {/* HEADER ARTICLE */}
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
              Corps · Respiration
            </p>
            <h1
              className="font-display text-4xl md:text-5xl font-bold leading-[1.08] tracking-tight mb-6"
            >
              Le nez : 30 fonctions que tu ne soupçonnes pas
            </h1>
            <p className="text-[#6B6B6B] text-sm mb-8">
              Source :{" "}
              <a
                href="https://oxygenadvantage.com/blogs/science/thirty-functions-of-the-nose"
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

      {/* IMAGE PRINCIPALE */}
      <section className="relative h-72 md:h-[480px] overflow-hidden">
        <Image
          src="https://oxygenadvantage.com/cdn/shop/articles/nose-functions_13bb5c34-a40e-495c-a4a7-331510e9fc80.jpg"
          alt="Fonctions du nez et respiration nasale"
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
              Dans les années 1970, le réputé spécialiste ORL Dr Maurice Cottle
              a identifié <strong className="text-[#0D0D0D]">30 fonctions distinctes</strong> du nez humain. La plupart
              des gens ne connaissent que deux ou trois d'entre elles : filtrer
              l'air, le réchauffer, sentir les odeurs. En réalité, le nez est un
              organe d'une sophistication remarquable, dont l'importance dépasse
              largement ce qu'on imagine.
            </p>
            <p className="text-lg text-[#6B6B6B] leading-relaxed mb-10">
              Chaque fois que tu respires par la bouche, par habitude, par
              paresse ou parce que ton nez est chroniquement congestionné, tu
              contournes ce système complexe. Et tu paies le prix sur ta santé,
              tes performances et ta qualité de vie.
            </p>

            {/* Section : Oxyde nitrique */}
            <h2
              className="font-display text-2xl font-bold mb-4 text-[#0D0D0D]"
            >
              L'oxyde nitrique : la molécule secrète du nez
            </h2>
            <p className="text-[#6B6B6B] leading-relaxed mb-4">
              L'une des découvertes les plus importantes de ces dernières
              décennies concerne la production d'
              <strong className="text-[#0D0D0D]">oxyde nitrique (NO)</strong>{" "}
              par les sinus paranasaux. Cette molécule est un puissant
              vasodilatateur : elle dilate les vaisseaux sanguins, améliore la
              distribution de l'oxygène dans les poumons et renforce les
              défenses immunitaires.
            </p>
            <p className="text-[#6B6B6B] leading-relaxed mb-10">
              Lors d'une respiration nasale, l'oxyde nitrique produit dans les
              sinus est entraîné dans les poumons à chaque inspiration. Il
              redistribue le flux sanguin jusqu'à <strong className="text-[#0D0D0D]">24%</strong> dans les régions
              supérieures des poumons, normalement sous-ventilées. La
              respiration buccale prive complètement l'organisme de cet effet.
            </p>

            {/* Section : O2 */}
            <h2
              className="font-display text-2xl font-bold mb-4 text-[#0D0D0D]"
            >
              +10% d'oxygène artériel sans effort supplémentaire
            </h2>
            <p className="text-[#6B6B6B] leading-relaxed mb-4">
              La respiration nasale augmente la concentration d'oxygène dans le
              sang artériel de près de <strong className="text-[#0D0D0D]">10%</strong> par rapport à la respiration
              buccale. Comment ? Grâce à la résistance naturelle que les voies
              nasales opposent au flux d'air.
            </p>
            <p className="text-[#6B6B6B] leading-relaxed mb-10">
              Cette résistance ralentit l'expiration, prolongeant le temps de
              contact entre l'air et les alvéoles pulmonaires. L'hémoglobine a
              ainsi plus de temps pour capter l'oxygène disponible. Mieux
              respirer, c'est d'abord respirer plus lentement, et par le nez.
            </p>

            {/* Section : fonctions groupées */}
            <h2
              className="font-display text-2xl font-bold mb-6 text-[#0D0D0D]"
            >
              Les 30 fonctions du nez, par catégorie
            </h2>
            <div className="flex flex-col gap-8 mb-10">
              {NOSE_FUNCTIONS.map((group) => (
                <div key={group.group}>
                  <h3
                    className="font-display text-sm font-bold text-[#0A8F8F] uppercase tracking-wider mb-4"
                  >
                    {group.group}
                  </h3>
                  <ul className="flex flex-col gap-2.5">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle
                          size={15}
                          className="text-[#0A8F8F] shrink-0 mt-0.5"
                          strokeWidth={2}
                        />
                        <span className="text-[#6B6B6B] leading-relaxed text-sm">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Section : développement */}
            <h2
              className="font-display text-2xl font-bold mb-4 text-[#0D0D0D]"
            >
              Le nez façonne ton visage
            </h2>
            <p className="text-[#6B6B6B] leading-relaxed mb-4">
              Une des fonctions les plus méconnues du nez est son rôle dans le
              développement craniofacial. La langue, lorsqu'elle repose
              correctement contre le palais supérieur durant la respiration
              nasale, exerce une pression qui élargit la mâchoire et maintient
              des voies aériennes larges.
            </p>
            <p className="text-[#6B6B6B] leading-relaxed mb-10">
              À l'inverse, les enfants qui respirent chroniquement par la bouche
              développent des visages plus longs, des mâchoires plus étroites et
              des voies aériennes plus resserrées, avec des conséquences sur
              leur santé respiratoire tout au long de leur vie. À six ans, près
              de 60% du visage adulte est déjà formé.
            </p>

            {/* Encadré clé */}
            <div className="bg-[#EEEDE9] rounded-3xl p-7 mb-10">
              <p className="text-[#0A8F8F] text-xs font-bold uppercase tracking-wider mb-3">
                À retenir
              </p>
              <p
                className="font-display text-[#0D0D0D] text-lg font-bold leading-snug"
              >
                Respirer par le nez n'est pas une préférence esthétique. C'est
                la condition d'un fonctionnement physiologique optimal, à
                l'état de repos, pendant l'effort et pendant le sommeil.
              </p>
            </div>

            {/* Source */}
            <p className="text-xs text-[#6B6B6B]/50 border-t border-[#EEEDE9] pt-6 mb-2">
              Article adapté et traduit depuis{" "}
              <a
                href="https://oxygenadvantage.com/blogs/science/thirty-functions-of-the-nose"
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

      {/* NAV ARTICLES + CTA */}
      <section className="py-16 px-6 bg-[#EEEDE9]">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row gap-4 items-center justify-between">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#0D0D0D] hover:text-[#0A8F8F] transition-colors"
          >
            <ArrowLeft size={16} />
            Tous les articles
          </Link>
          <Link
            href="/blog/asthme-effort-respiration"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#0D0D0D] hover:text-[#0A8F8F] transition-colors"
          >
            Article suivant
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
              Envie d'évaluer ta respiration nasale ?
            </h2>
            <p className="text-[#6B6B6B] leading-relaxed mb-8">
              Réserve un appel découverte. On mesure ton score BOLT et on
              construit un protocole adapté à tes objectifs.
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
