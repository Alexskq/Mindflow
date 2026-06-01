import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import { ArrowLeft, ArrowRight, AlertCircle } from "lucide-react";
import { CAL_URL } from "@/lib/constants";
const PAGE_URL = "https://www.alexmindflow.fr/blog/respiration-buccale";
const PUBLISHED = "2026-05-29T00:00:00.000Z";
const IMAGE = "https://oxygenadvantage.com/cdn/shop/articles/Mouth-Breathing_3fae485b-e991-4f20-adc0-fb0438ec9f84.webp";

export const metadata: Metadata = {
  title: "Respiration buccale : causes, effets et comment l'arrêter",
  description:
    "La respiration buccale chronique est liée à l'hypertension, l'anxiété, l'apnée du sommeil et la dégradation des dents. Comprendre les causes et comment retrouver la respiration nasale.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "article",
    title: "Respiration buccale : causes, effets et comment l'arrêter",
    description:
      "La respiration buccale chronique est liée à l'hypertension, l'anxiété, l'apnée du sommeil et la dégradation des dents.",
    url: PAGE_URL,
    publishedTime: PUBLISHED,
    modifiedTime: PUBLISHED,
    authors: ["Alex Zoonekynd"],
    tags: ["respiration buccale", "sommeil", "apnée", "hypertension", "Oxygen Advantage", "bien-être"],
    locale: "fr_FR",
    siteName: "Alex MindFlow",
    images: [{ url: IMAGE, width: 1200, alt: "Respiration buccale — causes et effets" }],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Respiration buccale : causes, effets et comment l'arrêter",
  description:
    "La respiration buccale chronique est liée à l'hypertension, l'anxiété, l'apnée du sommeil et la dégradation des dents.",
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
  keywords: "respiration buccale, apnée du sommeil, hypertension, anxiété, Oxygen Advantage",
  articleSection: "Corps · Bien-être",
  inLanguage: "fr-FR",
};

const CONSEQUENCES = [
  {
    label: "Sécheresse buccale & halitose",
    desc: "L'air non humidifié assèche les muqueuses, favorisant les bactéries responsables de la mauvaise haleine.",
  },
  {
    label: "Caries et maladies parodontales",
    desc: "La salive protège l'émail dentaire. Sans humidification nasale, son pH devient acide et l'émail se dégrade.",
  },
  {
    label: "Hypertension artérielle",
    desc: "La respiration buccale réduit la production d'oxyde nitrique, un vasodilatateur essentiel à la régulation de la pression sanguine.",
  },
  {
    label: "Anxiété et stress chronique",
    desc: "Un volume ventilatoire élevé maintenu par la bouche hyperstimule le système nerveux sympathique et entretient un état d'alerte permanent.",
  },
  {
    label: "Ronflements et apnée du sommeil",
    desc: "La nuit, la langue retombe en arrière et obstrue les voies aériennes — le ronflement en est le symptôme le plus visible.",
  },
  {
    label: "Immunité affaiblie",
    desc: "Le nez filtre les pathogènes. La bouche ne le fait pas. Respirer par la bouche multiplie l'exposition aux virus et bactéries.",
  },
  {
    label: "Déformation craniofaciale",
    desc: "Chez les enfants, la respiration buccale chronique modifie le développement du palais, de la mâchoire et de la structure du visage.",
  },
];

export default function RespirationBucalePage() {
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
              Corps · Bien-être
            </p>
            <h1
              className="font-display text-4xl md:text-5xl font-bold leading-[1.08] tracking-tight mb-6"
            >
              Respiration buccale : causes, effets et comment l'arrêter
            </h1>
            <p className="text-[#6B6B6B] text-sm mb-8">
              Source :{" "}
              <a
                href="https://oxygenadvantage.com/blogs/science/mouth-breathing"
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
          src="https://oxygenadvantage.com/cdn/shop/articles/Mouth-Breathing_3fae485b-e991-4f20-adc0-fb0438ec9f84.webp"
          alt="Respiration buccale — causes et effets"
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
              Une respiration saine se fait par le nez. Pourtant, environ{" "}
              <strong className="text-[#0D0D0D]">90% des personnes</strong>{" "}
              présentent des signes de congestion ou d'obstruction nasale à un
              moment de leur vie — et beaucoup ont développé la respiration
              buccale comme mode de fonctionnement par défaut.
            </p>
            <p className="text-lg text-[#6B6B6B] leading-relaxed mb-10">
              Respirer ponctuellement par la bouche pendant un rhume ou un
              effort intense, c'est normal. Mais la respiration buccale{" "}
              <strong className="text-[#0D0D0D]">chronique</strong> — au repos,
              la nuit, pendant le sommeil — est un schéma dysfonctionnel associé
              à une longue liste de problèmes de santé, souvent sous-estimés ou
              mal diagnostiqués.
            </p>

            {/* Causes */}
            <h2
              className="font-display text-2xl font-bold mb-4 text-[#0D0D0D]"
            >
              Pourquoi respire-t-on par la bouche ?
            </h2>
            <p className="text-[#6B6B6B] leading-relaxed mb-4">
              Les causes sont multiples : asthme, allergies, déviation septale,
              végétations adénoïdes, posture de la tête vers l'avant, stress
              émotionnel chronique. Mais une cause est souvent négligée : la{" "}
              <strong className="text-[#0D0D0D]">faible tolérance au CO₂</strong>
              . Lorsque la sensibilité au dioxyde de carbone est trop élevée, le
              corps sur-breathe pour s'en débarrasser — et ouvre la bouche pour
              augmenter le débit.
            </p>
            <p className="text-[#6B6B6B] leading-relaxed mb-4">
              Avec l'âge, la situation s'aggrave. À partir de 40 ans, une
              personne a{" "}
              <strong className="text-[#0D0D0D]">60% de probabilités</strong> de
              passer au moins la moitié de la nuit à respirer par la bouche —
              souvent sans en être consciente.
            </p>
            <p className="text-[#6B6B6B] leading-relaxed mb-10">
              Le stress chronique joue aussi un rôle majeur : les émotions
              négatives activent le système nerveux sympathique, accélèrent la
              respiration et poussent à l'ouverture buccale. La respiration
              buccale entretient alors le stress — et le stress entretient la
              respiration buccale.
            </p>

            {/* Posture de la tête */}
            <h2
              className="font-display text-2xl font-bold mb-4 text-[#0D0D0D]"
            >
              La connexion avec la posture de la tête
            </h2>
            <p className="text-[#6B6B6B] leading-relaxed mb-4">
              Des voies aériennes obstruées poussent le corps à une
              compensation posturale : la tête part vers l'avant pour faciliter
              le passage de l'air. Ce déplacement a des conséquences mécaniques
              directes sur la colonne cervicale.
            </p>
            <p className="text-[#6B6B6B] leading-relaxed mb-10">
              Chaque centimètre de projection en avant de la tête augmente la
              charge sur la colonne de{" "}
              <strong className="text-[#0D0D0D]">4 à 5 kg</strong>. Une tête
              projetée de 5 cm vers l'avant exerce ainsi une charge équivalente
              à un poids de 25 à 27 kg sur les vertèbres cervicales — avec les
              tensions musculaires et les douleurs chroniques qui en découlent.
            </p>

            {/* Conséquences */}
            <h2
              className="font-display text-2xl font-bold mb-6 text-[#0D0D0D]"
            >
              Les conséquences sur la santé
            </h2>
            <div className="flex flex-col gap-4 mb-10">
              {CONSEQUENCES.map((item) => (
                <div
                  key={item.label}
                  className="flex gap-4 bg-[#EEEDE9] rounded-2xl p-5"
                >
                  <AlertCircle
                    size={18}
                    className="text-[#0A8F8F] shrink-0 mt-0.5"
                    strokeWidth={1.75}
                  />
                  <div>
                    <p
                      className="font-display font-bold text-[#0D0D0D] text-sm mb-1"
                    >
                      {item.label}
                    </p>
                    <p className="text-sm text-[#6B6B6B] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Solutions */}
            <h2
              className="font-display text-2xl font-bold mb-4 text-[#0D0D0D]"
            >
              Comment arrêter de respirer par la bouche
            </h2>
            <p className="text-[#6B6B6B] leading-relaxed mb-4">
              La première étape est de prendre conscience du schéma. Observer sa
              propre respiration — à l'état de repos, en marchant, en travaillant
              — permet d'identifier les moments où la bouche s'ouvre
              naturellement.
            </p>
            <p className="text-[#6B6B6B] leading-relaxed mb-4">
              L'entraînement respiratoire Oxygen Advantage® agit sur la cause
              racine : augmenter la tolérance au CO₂ pour que le corps n'ait
              plus besoin de sur-breathe. Quand la tolérance au CO₂ augmente,
              le nez se décongestionne spontanément et la respiration nasale
              redevient confortable.
            </p>
            <p className="text-[#6B6B6B] leading-relaxed mb-10">
              Pour la nuit, le ruban buccal (mouth tape) est une solution simple
              et efficace pour garantir la respiration nasale pendant le sommeil
              — et corriger des années de mauvaises habitudes en quelques
              semaines.
            </p>

            {/* Encadré */}
            <div className="bg-[#EEEDE9] rounded-3xl p-7 mb-10">
              <p className="text-[#0A8F8F] text-xs font-bold uppercase tracking-wider mb-3">
                À retenir
              </p>
              <p
                className="font-display text-[#0D0D0D] text-lg font-bold leading-snug"
              >
                La respiration buccale n'est pas une fatalité. C'est une
                habitude — et les habitudes se changent. La clé est de traiter
                la cause, pas le symptôme.
              </p>
            </div>

            {/* Source */}
            <p className="text-xs text-[#6B6B6B]/50 border-t border-[#EEEDE9] pt-6">
              Article adapté et traduit depuis{" "}
              <a
                href="https://oxygenadvantage.com/blogs/science/mouth-breathing"
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
            href="/blog/asthme-effort-respiration"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#0D0D0D] hover:text-[#0A8F8F] transition-colors"
          >
            <ArrowLeft size={16} />
            Article précédent
          </Link>
          <Link
            href="/blog/respirer-en-courant"
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
              Tu respires par la bouche sans t'en rendre compte ?
            </h2>
            <p className="text-[#6B6B6B] leading-relaxed mb-8">
              Fais le point sur ta respiration en 30 minutes. On identifie les
              causes et on construit un protocole pour reprendre le contrôle.
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
