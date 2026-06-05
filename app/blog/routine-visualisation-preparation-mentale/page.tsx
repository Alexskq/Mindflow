import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import { ArrowLeft, ArrowRight, BookOpen } from "lucide-react";
import { CAL_URL } from "@/lib/constants";

const PAGE_URL =
  "https://www.alex-mindflow.fr/blog/routine-visualisation-preparation-mentale";
const PUBLISHED = "2026-06-05T00:00:00.000Z";
const IMAGE =
  "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&q=80";

export const metadata: Metadata = {
  title:
    "Pourquoi votre routine de visualisation ne suffit pas | Alex MindFlow",
  description:
    "Une méta-analyse 2025 (36 études) montre qu'un système intégré de préparation mentale surpasse chaque technique isolée. Voici ce que la science recommande vraiment.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "article",
    title: "Pourquoi votre routine de visualisation ne suffit pas",
    description:
      "Imagerie mentale, self-talk, respiration : la recherche prouve que la combinaison produit un effet supérieur. Ce que la science recommande vraiment.",
    url: PAGE_URL,
    publishedTime: PUBLISHED,
    modifiedTime: PUBLISHED,
    authors: ["Alex Zoonekynd"],
    tags: [
      "préparation mentale",
      "visualisation",
      "imagerie mentale",
      "self-talk",
      "performance sportive",
      "psychologie du sport",
    ],
    locale: "fr_FR",
    siteName: "Alex MindFlow",
    images: [
      {
        url: IMAGE,
        width: 1200,
        alt: "Athlète en phase de préparation mentale, visualisation et focus",
      },
    ],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Pourquoi votre routine de visualisation ne suffit pas (et ce que la science recommande vraiment)",
  description:
    "Méta-analyses 2024-2025 : un système intégré (respiration + imagerie + self-talk) surpasse chaque technique isolée en préparation mentale sportive.",
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
    "préparation mentale sport, visualisation performance, imagerie mentale, self-talk sportif, psychologie du sport",
  articleSection: "Préparation mentale",
  inLanguage: "fr-FR",
};

const SYSTEM_STEPS = [
  {
    step: "1",
    title: "Régulation physiologique",
    desc: "Respiration contrôlée, scan corporel, ancrage sensoriel. L'expiration longue abaisse la fréquence cardiaque et réduit le cortisol circulant. Elle prépare le cerveau à recevoir ce qui vient ensuite.",
  },
  {
    step: "2",
    title: "Imagerie mentale",
    desc: "Répétition mentale des 2-3 séquences clés. Le protocole optimal : 10 minutes, 3 fois par semaine. Sans la régulation préalable, la qualité de l'imagerie s'effondre et le sillon neuronal ne se forme pas.",
  },
  {
    step: "3",
    title: "Self-talk ciblé",
    desc: "Mot-clé, intention, déclencheur verbal. Instructionnel pour les tâches de précision, motivationnel pour l'endurance. Oriente le focus attentionnel au bon endroit, au bon moment.",
  },
  {
    step: "4",
    title: "Focus d'entrée en action",
    desc: "Un signal physique qui ferme la routine et déclenche l'engagement. Chaque étape crée les conditions de la suivante. Sortir une étape réduit l'effet des autres.",
  },
];

const REFS = [
  {
    num: "1",
    text: "Effects of Psychological Interventions to Enhance Athletic Performance",
    source: "PMC (2024)",
  },
  {
    num: "2",
    text: "The Effects of Imagery Practice on Athletes' Performance",
    source: "PubMed (2025)",
  },
  {
    num: "3",
    text: "Optimal dosage imagery & mental health",
    source: "PMC (2025)",
  },
  {
    num: "4",
    text: "Self-Talk and Sports Performance: A Meta-Analysis",
    source: "PubMed (2015)",
  },
  {
    num: "5",
    text: "Preparatory routines for emotional regulation",
    source: "Frontiers in Psychology (2022)",
  },
  {
    num: "6",
    text: "Sport psychology and performance meta-analyses",
    source: "PMC (2022)",
  },
];

export default function RoutineVisualisationPage() {
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
              Préparation mentale
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-bold leading-[1.08] tracking-tight mb-6">
              Pourquoi votre routine de visualisation ne suffit pas
            </h1>
            <p className="text-[#6B6B6B] text-sm mb-8">
              Zoonekynd Alexandre · Lecture : 7 min
            </p>
          </FadeIn>
        </div>
      </section>

      {/* IMAGE */}
      <section className="relative h-72 md:h-[480px] overflow-hidden">
        <Image
          src={IMAGE}
          alt="Athlète en phase de préparation mentale"
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
              Il y a une croyance très répandue chez les sportifs et les
              professionnels de la performance :{" "}
              <em>«&nbsp;j'ai ma technique&nbsp;»</em>. L'un visualise avant
              chaque compétition. L'autre fait dix minutes de cohérence
              cardiaque le matin. Un troisième répète son mot-clé mental dans
              les vestiaires.
            </p>
            <p className="text-lg text-[#6B6B6B] leading-relaxed mb-10">
              Ces pratiques sont solides. Elles reposent sur de vraies preuves
              scientifiques. Mais il manque quelque chose.
            </p>

            {/* Finding */}
            <h2 className="font-display text-2xl font-bold mb-4 text-[#0D0D0D]">
              Le finding que les coachs mentaux ne mettent pas assez en avant
            </h2>
            <p className="text-[#6B6B6B] leading-relaxed mb-6">
              En 2024, une méta-analyse publiée sur PubMed a compilé l'ensemble
              des interventions de psychologie du sport et quantifié leurs
              effets sur la performance réelle.
            </p>

            {/* Stats */}
            <div className="bg-[#0D0D0D] text-white rounded-3xl p-8 mb-8">
              <p className="text-[#0A8F8F] text-xs font-bold uppercase tracking-wider mb-5">
                Effets sur la performance, taille d'effet g de Hedges
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {[
                  { value: "g = 0,75", label: "Imagerie mentale seule" },
                  {
                    value: "g = 0,83",
                    label: "Habiletés psychologiques combinées",
                    highlight: true,
                  },
                  { value: "g = 0,67", label: "Mindfulness seule" },
                ].map((stat) => (
                  <div key={stat.value} className="text-center">
                    <p
                      className={`font-display text-3xl font-bold mb-1 ${
                        stat.highlight ? "text-[#0A8F8F]" : "text-white/80"
                      }`}
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

            <div className="border-l-4 border-[#0A8F8F] pl-5 mb-10">
              <p className="text-[#6B6B6B] italic leading-relaxed mb-2">
                «&nbsp;L'efficacité de combiner l'imagerie avec une ou deux
                habiletés psychologiques supplémentaires surpasse celle de
                l'imagerie pratiquée isolément.&nbsp;»
              </p>
              <p className="text-xs text-[#6B6B6B]/60">
                Méta-analyse multiniveaux, PMC 2025, 36 études
              </p>
            </div>

            <p className="text-[#6B6B6B] leading-relaxed mb-10">
              Ce n'est pas une nuance. C'est le résultat central.{" "}
              <strong className="text-[#0D0D0D]">
                Une technique isolée produit un effet. Un système intégré
                produit un effet supérieur et plus stable.
              </strong>{" "}
              La question n'est donc pas «&nbsp;quelle est la meilleure
              technique&nbsp;?&nbsp;». C'est «&nbsp;comment construire le bon
              système pour moi&nbsp;?&nbsp;»
            </p>

            {/* Respiration */}
            <h2 className="font-display text-2xl font-bold mb-5 text-[#0D0D0D]">
              Pourquoi le cerveau répond mieux à la combinaison
            </h2>
            <h3 className="font-display text-lg font-bold mb-3 text-[#0D0D0D]">
              La respiration : le régulateur de base
            </h3>
            <p className="text-[#6B6B6B] leading-relaxed mb-4">
              Avant toute chose, il y a le système nerveux autonome. Sous
              pression, le système sympathique prend le dessus : fréquence
              cardiaque en hausse, attention en tunnel, muscles contractés.
              C'est utile, jusqu'au point où ça nuit à la précision technique.
            </p>
            <p className="text-[#6B6B6B] leading-relaxed mb-8">
              La respiration contrôlée (expiration longue, cohérence cardiaque,
              respiration diaphragmatique) est le seul levier volontaire direct
              sur ce système. En l'absence de cette régulation préalable,{" "}
              <strong className="text-[#0D0D0D]">
                toute technique mentale travaille contre le courant
              </strong>
              .
            </p>

            {/* Imagerie */}
            <h3 className="font-display text-lg font-bold mb-3 text-[#0D0D0D]">
              L'imagerie mentale : la répétition sans usure
            </h3>
            <p className="text-[#6B6B6B] leading-relaxed mb-4">
              Une fois le système nerveux stabilisé, le cerveau est en état de
              recevoir une simulation. La méta-analyse 2025 (36 études) confirme
              un effet significatif sur la performance : agilité, force
              musculaire, précision gestuelle. Le{" "}
              <strong className="text-[#0D0D0D]">
                protocole optimal identifié : 10 minutes, 3 fois par semaine,
                sur 100 jours
              </strong>
              .
            </p>
            <p className="text-[#6B6B6B] leading-relaxed mb-8">
              La répétition mentale d'un geste active les mêmes circuits
              moteurs que l'exécution réelle, sans la fatigue physique. C'est
              une répétition propre, disponible à 23h ou dans un avion. Mais
              sans l'état physiologique adéquat en amont, la qualité de
              l'imagerie s'effondre.
            </p>

            {/* Self-talk */}
            <h3 className="font-display text-lg font-bold mb-3 text-[#0D0D0D]">
              Le self-talk : le focus en temps réel
            </h3>
            <p className="text-[#6B6B6B] leading-relaxed mb-5">
              Là où l'imagerie prépare le geste avant, le self-talk oriente
              l'attention pendant. La méta-analyse de référence (32 études,
              62 tailles d'effet) donne un effet modéré de{" "}
              <strong className="text-[#0D0D0D]">ES&nbsp;=&nbsp;0,48</strong>.
              Avec un modérateur crucial :
            </p>

            <div className="overflow-x-auto mb-10">
              <table className="w-full text-sm border-collapse rounded-2xl overflow-hidden">
                <thead>
                  <tr className="bg-[#0D0D0D] text-white">
                    <th className="text-left px-5 py-3.5 font-semibold">
                      Type de self-talk
                    </th>
                    <th className="text-left px-5 py-3.5 font-semibold">
                      Efficace pour
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-[#EEEDE9]">
                    <td className="px-5 py-3.5">
                      <span className="font-semibold text-[#0D0D0D]">
                        Instructionnel
                      </span>{" "}
                      <span className="text-[#6B6B6B]">
                        («&nbsp;genou fléchi&nbsp;», «&nbsp;regard fixe&nbsp;»)
                      </span>
                    </td>
                    <td className="px-5 py-3.5 text-[#6B6B6B]">
                      Tâches de précision technique
                    </td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-5 py-3.5">
                      <span className="font-semibold text-[#0D0D0D]">
                        Motivationnel
                      </span>{" "}
                      <span className="text-[#6B6B6B]">
                        («&nbsp;je tiens&nbsp;», «&nbsp;encore un&nbsp;»)
                      </span>
                    </td>
                    <td className="px-5 py-3.5 text-[#6B6B6B]">
                      Tâches d'endurance et d'intensité
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Système intégré */}
            <h2 className="font-display text-2xl font-bold mb-4 text-[#0D0D0D]">
              Le système intégré : ce que la recherche décrit
            </h2>
            <p className="text-[#6B6B6B] leading-relaxed mb-6">
              Quand on lit les revues systématiques sur les routines
              pré-compétition (Frontiers in Psychology, 2022), un pattern
              émerge : les routines les plus efficaces combinent
              systématiquement quatre éléments dans un ordre précis.
            </p>
            <div className="flex flex-col gap-4 mb-10">
              {SYSTEM_STEPS.map((step) => (
                <div
                  key={step.step}
                  className="flex gap-4 bg-[#EEEDE9] rounded-2xl p-5"
                >
                  <span className="w-8 h-8 rounded-full bg-[#0A8F8F] text-white text-sm font-bold flex items-center justify-center shrink-0">
                    {step.step}
                  </span>
                  <div>
                    <p className="font-display font-bold text-[#0D0D0D] mb-1">
                      {step.title}
                    </p>
                    <p className="text-sm text-[#6B6B6B] leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Comparaison pratique */}
            <h2 className="font-display text-2xl font-bold mb-6 text-[#0D0D0D]">
              Ce que ça change dans la pratique
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              <div className="bg-[#EEEDE9] rounded-2xl p-6">
                <p className="text-xs font-bold uppercase tracking-wider text-[#6B6B6B] mb-3">
                  Technique isolée
                </p>
                <p className="font-display font-bold text-[#0D0D0D] mb-3 text-sm leading-snug">
                  «&nbsp;Je fais 5 minutes de cohérence cardiaque chaque
                  matin.&nbsp;»
                </p>
                <p className="text-sm text-[#6B6B6B] leading-relaxed">
                  <strong className="text-[#0D0D0D]">Bénéfice :</strong>{" "}
                  régulation du SNA, réduction du stress basal.
                </p>
                <p className="text-sm text-[#6B6B6B] leading-relaxed mt-1">
                  <strong className="text-[#0D0D0D]">Limite :</strong> pas de
                  transfert direct sur la performance technique, pas d'ancrage
                  sur l'objectif du jour.
                </p>
              </div>
              <div className="bg-[#0A8F8F]/10 border border-[#0A8F8F]/30 rounded-2xl p-6">
                <p className="text-xs font-bold uppercase tracking-wider text-[#0A8F8F] mb-3">
                  Approche systémique
                </p>
                <p className="font-display font-bold text-[#0D0D0D] mb-3 text-sm leading-snug">
                  «&nbsp;3 min respiration → visualisation séquences clés →
                  mot d'intention.&nbsp;»
                </p>
                <p className="text-sm text-[#6B6B6B] leading-relaxed">
                  <strong className="text-[#0D0D0D]">Durée :</strong> 8 à
                  12 minutes.
                </p>
                <p className="text-sm text-[#6B6B6B] leading-relaxed mt-1">
                  <strong className="text-[#0D0D0D]">Effet documenté :</strong>{" "}
                  supérieur à chaque composante seule.
                </p>
              </div>
            </div>

            {/* Limites honnêtes */}
            <h2 className="font-display text-2xl font-bold mb-4 text-[#0D0D0D]">
              La limite honnête : ce que les données ne garantissent pas
            </h2>
            <p className="text-[#6B6B6B] leading-relaxed mb-4">
              Quand on retire les études sans groupe contrôle solide et les
              mesures subjectives de performance, une partie des effets perdent
              leur significativité statistique. Les effets existent, mais leur
              magnitude dépend du contexte, du sport, de l'individu et de la
              régularité de pratique.{" "}
              <strong className="text-[#0D0D0D]">
                Il n'y a pas de protocole universel garanti à +15% de
                performance.
              </strong>
            </p>
            <p className="text-[#6B6B6B] leading-relaxed mb-10">
              C'est justement pourquoi la combinaison de techniques, pratiquée
              régulièrement sur plusieurs semaines, produit des effets plus
              robustes qu'une séance isolée la veille d'une compétition.
            </p>

            {/* 3 questions */}
            <div className="bg-[#EEEDE9] rounded-3xl p-7 mb-10">
              <p className="text-[#0A8F8F] text-xs font-bold uppercase tracking-wider mb-4">
                Pour aller plus loin
              </p>
              <p className="font-display font-bold text-[#0D0D0D] mb-5">
                Trois questions pour construire votre système
              </p>
              {[
                {
                  q: "1. Quelle est votre fenêtre de préparation ?",
                  a: "30 secondes dans un vestiaire, 10 minutes avant une réunion, une heure avant une compétition.",
                },
                {
                  q: "2. Quel est le principal frein à votre performance ?",
                  a: "Anxiété technique, activation insuffisante, focus dispersé.",
                },
                {
                  q: "3. Quelle combinaison correspond à ce frein et à cette fenêtre ?",
                  a: "Le protocole efficace n'est pas le plus complet. C'est celui que vous faites vraiment, régulièrement, dans les bonnes conditions.",
                },
              ].map((item) => (
                <div key={item.q} className="mb-4 last:mb-0">
                  <p className="font-semibold text-[#0D0D0D] text-sm mb-1">
                    {item.q}
                  </p>
                  <p className="text-sm text-[#6B6B6B] leading-relaxed">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>

            {/* Références */}
            <div className="border-t border-[#EEEDE9] pt-8">
              <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#6B6B6B] mb-4">
                <BookOpen size={12} />
                Références scientifiques
              </p>
              <ol className="flex flex-col gap-2">
                {REFS.map((ref) => (
                  <li
                    key={ref.num}
                    className="flex gap-3 text-xs text-[#6B6B6B]/70 leading-relaxed"
                  >
                    <span className="font-bold text-[#6B6B6B] shrink-0">
                      {ref.num}.
                    </span>
                    <span>
                      {ref.text},{" "}
                      <span className="italic">{ref.source}</span>
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </FadeIn>
        </div>
      </article>

      {/* NAV */}
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
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#0D0D0D] hover:text-[#0A8F8F] transition-colors"
          >
            Retour au blog
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-[#F7F6F4]">
        <div className="max-w-2xl mx-auto text-center">
          <FadeIn>
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-5">
              Construire votre système de préparation mentale
            </h2>
            <p className="text-[#6B6B6B] leading-relaxed mb-8">
              Réservez un appel découverte pour identifier la combinaison de
              techniques adaptée à votre profil et vos objectifs spécifiques.
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
