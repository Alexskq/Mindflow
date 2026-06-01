import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";
import { CAL_URL } from "@/lib/constants";
const PAGE_URL = "https://www.alexmindflow.fr/blog/asthme-effort-respiration";
const PUBLISHED = "2026-05-29T00:00:00.000Z";
const IMAGE = "https://oxygenadvantage.com/cdn/shop/articles/Exercise-Induced-Asthma-Symptoms-Treatment-Causes_67b907b0-ccdd-4b89-8a2b-c98b4ccf6b1d.webp";

export const metadata: Metadata = {
  title: "Asthme à l'effort ou hors de forme ?",
  description:
    "Tu tousses ou peines à respirer après l'effort ? Ce n'est pas forcément un manque de forme. L'asthme à l'effort touche 90% des asthmatiques et 10-25% des athlètes — et ça se traite par la respiration.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "article",
    title: "Asthme à l'effort ou hors de forme ?",
    description:
      "Tu tousses ou peines à respirer après l'effort ? Ce n'est pas forcément un manque de forme. L'asthme à l'effort touche 90% des asthmatiques et 10-25% des athlètes.",
    url: PAGE_URL,
    publishedTime: PUBLISHED,
    modifiedTime: PUBLISHED,
    authors: ["Alex Zoonekynd"],
    tags: ["asthme effort", "respiration", "sport", "CO2", "Oxygen Advantage", "bronchoconstriction"],
    locale: "fr_FR",
    siteName: "Alex MindFlow",
    images: [{ url: IMAGE, width: 1200, alt: "Asthme à l'effort et respiration sportive" }],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Asthme à l'effort ou hors de forme ?",
  description:
    "L'asthme à l'effort touche 90% des asthmatiques et 10-25% des athlètes. Comprendre le rôle du CO₂ et traiter par la respiration.",
  image: IMAGE,
  datePublished: PUBLISHED,
  dateModified: PUBLISHED,
  author: {
    "@type": "Person",
    name: "Alex Zoonekynd",
    url: "https://www.alexmindflow.fr/a-propos",
  },
  publisher: {
    "@type": "Organization",
    name: "Alex MindFlow",
    url: "https://www.alexmindflow.fr",
  },
  mainEntityOfPage: { "@type": "WebPage", "@id": PAGE_URL },
  keywords: "asthme effort, bronchoconstriction, respiration sport, CO2, Oxygen Advantage",
  articleSection: "Corps · Sport",
  inLanguage: "fr-FR",
};

const CAUSES = [
  {
    title: "La surrespiration (overbreathing)",
    desc: "La cause la plus importante et la plus contrôlable. Une étude a démontré que lorsque le volume ventilatoire passe de 14 à 9,6 litres par minute, les symptômes réduisent de 70%.",
  },
  {
    title: "La respiration buccale",
    desc: "La bouche ne filtre ni ne réchauffe l'air. L'air froid et sec arrive directement dans les bronches, déclenchant l'inflammation et la bronchoconstriction.",
  },
  {
    title: "L'air froid et sec",
    desc: "Les conditions météorologiques hivernales amplifient les symptômes, surtout chez les coureurs et les sportifs outdoor.",
  },
  {
    title: "L'environnement chloré",
    desc: "Les nageurs en piscine sont particulièrement exposés. Les vapeurs de chlore irritent chroniquement les muqueuses bronchiques.",
  },
  {
    title: "Le manque de coaching respiratoire",
    desc: "La plupart des sportifs n'ont jamais appris à respirer. La respiration n'est pas intégrée à la planification de l'entraînement.",
  },
];

const SOLUTIONS = [
  "Établir une respiration nasale exclusive au quotidien",
  "Pratiquer des apnées légères pendant l'échauffement pour augmenter la tolérance au CO₂",
  "Normaliser le volume ventilatoire de repos (réduire l'hyperventilation chronique)",
  "Maintenir la respiration nasale pendant l'effort modéré",
  "Utiliser du ruban buccal la nuit pour prévenir la respiration buccale nocturne",
];

export default function AsthmeEffortPage() {
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
              Corps · Sport
            </p>
            <h1
              className="font-display text-4xl md:text-5xl font-bold leading-[1.08] tracking-tight mb-6"
            >
              Asthme à l'effort ou juste hors de forme ?
            </h1>
            <p className="text-[#6B6B6B] text-sm mb-8">
              Source :{" "}
              <a
                href="https://oxygenadvantage.com/blogs/science/exercise-induced-asthma"
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
          src="https://oxygenadvantage.com/cdn/shop/articles/Exercise-Induced-Asthma-Symptoms-Treatment-Causes_67b907b0-ccdd-4b89-8a2b-c98b4ccf6b1d.webp"
          alt="Asthme à l'effort et respiration"
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
              Tu tousses après une séance de sport. Tu peines à reprendre ton
              souffle alors que tu n'étais pourtant pas à fond. Ton entourage
              court sans problème et toi tu étouffes. La réponse habituelle ?{" "}
              <em>« T'es juste pas en forme. »</em>
            </p>
            <p className="text-lg text-[#6B6B6B] leading-relaxed mb-10">
              Mais cette explication est souvent fausse. La{" "}
              <strong className="text-[#0D0D0D]">
                bronchoconstriction induite par l'exercice (BIE)
              </strong>{" "}
              — aussi appelée asthme à l'effort — touche environ{" "}
              <strong className="text-[#0D0D0D]">90% des asthmatiques</strong>{" "}
              et <strong className="text-[#0D0D0D]">10 à 25% des athlètes</strong>{" "}
              sans diagnostic d'asthme. Même des sportifs professionnels en
              souffrent. C'est une condition réelle, et elle se traite — souvent
              sans médicament.
            </p>

            {/* Qu'est-ce ? */}
            <h2
              className="font-display text-2xl font-bold mb-4 text-[#0D0D0D]"
            >
              Qu'est-ce que la BIE ?
            </h2>
            <p className="text-[#6B6B6B] leading-relaxed mb-4">
              Pendant l'exercice, la demande ventilatoire augmente. Si cette
              demande est satisfaite principalement par la bouche, l'air arrive
              dans les bronches sans être filtré, réchauffé ni humidifié. Les
              muqueuses bronchiques répondent à cette agression par une
              inflammation et un rétrécissement des voies aériennes : c'est la
              bronchoconstriction.
            </p>
            <p className="text-[#6B6B6B] leading-relaxed mb-10">
              Les symptômes typiques — toux, sifflement, oppression thoracique,
              essoufflement disproportionné — apparaissent pendant ou
              immédiatement après l'effort. Ils disparaissent au repos mais
              reviennent à chaque séance si la cause n'est pas traitée.
            </p>

            {/* Causes */}
            <h2
              className="font-display text-2xl font-bold mb-6 text-[#0D0D0D]"
            >
              Les 5 causes principales
            </h2>
            <div className="flex flex-col gap-4 mb-10">
              {CAUSES.map((cause, i) => (
                <div
                  key={cause.title}
                  className="flex gap-4 bg-[#EEEDE9] rounded-2xl p-5"
                >
                  <span className="w-7 h-7 rounded-full bg-[#0A8F8F] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <div>
                    <p
                      className="font-display font-bold text-[#0D0D0D] mb-1"
                    >
                      {cause.title}
                    </p>
                    <p className="text-sm text-[#6B6B6B] leading-relaxed">
                      {cause.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* La clé : CO2 */}
            <h2
              className="font-display text-2xl font-bold mb-4 text-[#0D0D0D]"
            >
              Le rôle central du CO₂
            </h2>
            <p className="text-[#6B6B6B] leading-relaxed mb-4">
              La surrespiration diminue le taux de CO₂ sanguin. Or le CO₂ est
              essentiel à la dilatation des bronches et à la libération de
              l'oxygène vers les tissus (effet Bohr). En hyperventilant, tu
              crées un cercle vicieux : moins de CO₂ → bronches plus réactives
              → symptômes amplifiés → tu respires encore plus vite.
            </p>
            <p className="text-[#6B6B6B] leading-relaxed mb-10">
              La solution n'est donc pas de respirer plus, mais de respirer{" "}
              <strong className="text-[#0D0D0D]">mieux</strong> : moins de
              volume, plus lentement, exclusivement par le nez. Quand ta
              tolérance au CO₂ augmente, les bronches se détendent et les
              symptômes disparaissent.
            </p>

            {/* Solutions */}
            <h2
              className="font-display text-2xl font-bold mb-5 text-[#0D0D0D]"
            >
              Ce qui fonctionne concrètement
            </h2>
            <ul className="flex flex-col gap-3 mb-10">
              {SOLUTIONS.map((s) => (
                <li key={s} className="flex items-start gap-3">
                  <CheckCircle
                    size={15}
                    className="text-[#0A8F8F] shrink-0 mt-0.5"
                    strokeWidth={2}
                  />
                  <span className="text-[#6B6B6B] text-sm leading-relaxed">
                    {s}
                  </span>
                </li>
              ))}
            </ul>

            {/* Encadré */}
            <div className="bg-[#EEEDE9] rounded-3xl p-7 mb-10">
              <p className="text-[#0A8F8F] text-xs font-bold uppercase tracking-wider mb-3">
                À retenir
              </p>
              <p
                className="font-display text-[#0D0D0D] text-lg font-bold leading-snug"
              >
                Lorsque ta respiration quotidienne est correcte, l'asthme à
                l'effort peut disparaître entièrement — sans bronchodilatateur.
              </p>
            </div>

            {/* Source */}
            <p className="text-xs text-[#6B6B6B]/50 border-t border-[#EEEDE9] pt-6">
              Article adapté et traduit depuis{" "}
              <a
                href="https://oxygenadvantage.com/blogs/science/exercise-induced-asthma"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-[#0A8F8F]"
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
            href="/blog/fonctions-du-nez"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#0D0D0D] hover:text-[#0A8F8F] transition-colors"
          >
            <ArrowLeft size={16} />
            Article précédent
          </Link>
          <Link
            href="/blog/respiration-buccale"
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
              Tu souffres d'essoufflement à l'effort ?
            </h2>
            <p className="text-[#6B6B6B] leading-relaxed mb-8">
              On peut travailler sur ta tolérance au CO₂ et rétablir une
              respiration fonctionnelle — avec la méthode Oxygen Advantage®.
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
