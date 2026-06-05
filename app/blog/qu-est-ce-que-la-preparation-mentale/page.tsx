import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import { ArrowLeft, ArrowRight, BookOpen, XCircle } from "lucide-react";
import { CAL_URL } from "@/lib/constants";

const PAGE_URL =
  "https://www.alex-mindflow.fr/blog/qu-est-ce-que-la-preparation-mentale";
const PUBLISHED = "2026-06-05T00:00:00.000Z";
const IMAGE =
  "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=1200&q=80";

export const metadata: Metadata = {
  title:
    "La préparation mentale : définition, pour qui, pourquoi et comment | Alex MindFlow",
  description:
    "Qu'est-ce que la préparation mentale ? Définition scientifique, profils concernés, bases neurologiques et techniques validées pour débuter un entraînement mental structuré.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "article",
    title: "La préparation mentale : définition, pour qui, pourquoi et comment",
    description:
      "80 à 90% de la performance à haut niveau est mentale. Définition, cibles, neurologie et outils validés par la recherche en psychologie du sport.",
    url: PAGE_URL,
    publishedTime: PUBLISHED,
    modifiedTime: PUBLISHED,
    authors: ["Alex Zoonekynd"],
    tags: [
      "préparation mentale",
      "psychologie du sport",
      "performance sportive",
      "imagerie mentale",
      "confiance en soi",
      "gestion du stress sport",
    ],
    locale: "fr_FR",
    siteName: "Alex MindFlow",
    images: [
      {
        url: IMAGE,
        width: 1200,
        alt: "Préparation mentale et performance sportive",
      },
    ],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "La préparation mentale : définition, pour qui, pourquoi et comment",
  description:
    "Définition scientifique de la préparation mentale, profils concernés, bases neurologiques et techniques validées par la recherche en psychologie du sport.",
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
    "préparation mentale, psychologie du sport, imagerie mentale, self-talk, gestion du stress, performance sportive, condition mentale",
  articleSection: "Préparation mentale",
  inLanguage: "fr-FR",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Qu'est-ce que la préparation mentale ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La préparation mentale est un ensemble de processus psychologiques permettant aux individus de mobiliser leurs ressources mentales afin de maximiser leur performance dans une tâche donnée ou dans des situations stressantes. Elle repose sur des techniques scientifiquement validées : imagerie mentale, self-talk, régulation respiratoire, fixation d'objectifs et pleine conscience.",
      },
    },
    {
      "@type": "Question",
      name: "Pour qui est la préparation mentale ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La préparation mentale est utile à toute personne confrontée à des situations à enjeux : sportifs de tous niveaux, étudiants, managers, militaires, chirurgiens. Elle n'est pas réservée aux sportifs de haut niveau ni aux personnes en difficulté psychologique.",
      },
    },
    {
      "@type": "Question",
      name: "En combien de temps la préparation mentale produit-elle des résultats ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Les premières améliorations peuvent apparaître dès 4 jours. Un programme structuré de 4 semaines produit des gains significatifs en confiance, motivation et gestion de l'anxiété. Les effets stables sur la performance motrice nécessitent environ 100 jours de pratique régulière.",
      },
    },
  ],
};

const PROFILES = [
  {
    who: "Sportifs amateurs",
    why: "Réduire l'écart entre le niveau à l'entraînement et en compétition",
  },
  {
    who: "Étudiants",
    why: "Gérer le stress des examens et maintenir la concentration sur la durée",
  },
  {
    who: "Managers et dirigeants",
    why: "Prises de décision sous pression, leadership et gestion des équipes",
  },
  {
    who: "Chirurgiens",
    why: "71% des chirurgiens experts recommandent la PST en formation (étude PMC 2025)",
  },
  {
    who: "Militaires",
    why: "Les forces spéciales intègrent des protocoles de préparation mentale depuis des décennies",
  },
  {
    who: "Artistes et performers",
    why: "Gestion du trac, régulation de l'activation avant une performance scénique",
  },
];

const TOOLS = [
  {
    name: "Régulation respiratoire",
    function: "Stabiliser le système nerveux autonome",
    when: "Avant et pendant l'effort, sous pression",
  },
  {
    name: "Imagerie mentale",
    function: "Répéter les gestes sans usure physique",
    when: "À l'entraînement, avant une compétition",
  },
  {
    name: "Self-talk",
    function: "Orienter l'attention au bon moment",
    when: "En temps réel, pendant l'exécution",
  },
  {
    name: "Fixation d'objectifs",
    function: "Structurer la motivation et la direction",
    when: "En phase de préparation, planification",
  },
  {
    name: "Pleine conscience",
    function: "Ancrage dans le présent et récupération",
    when: "Au quotidien, post-compétition",
  },
];

const TIMELINE = [
  {
    delay: "4 jours",
    result: "Premières améliorations perceptibles",
    detail:
      "Avec un protocole de pleine conscience, les premières améliorations sur la gestion du stress et la concentration sont mesurables dès les premiers jours de pratique.",
  },
  {
    delay: "4 semaines",
    result: "Gains significatifs documentés",
    detail:
      "Un programme structuré de 4 semaines produit des réductions significatives de l'anxiété compétitive et des gains mesurables en confiance et en motivation.",
  },
  {
    delay: "100 jours",
    result: "Effets stables sur la performance",
    detail:
      "Le protocole optimal pour des effets durables sur la performance motrice : pratique régulière sur environ 100 jours. En dessous, les effets sont réels mais moins stables dans le temps.",
  },
];

const NOT_PM = [
  {
    label: "De la pensée positive",
    desc: "Répéter des affirmations sans ancrage dans une pratique structurée et régulière ne produit pas d'effets mesurables sur la performance.",
  },
  {
    label: "Réservé aux élites ou aux personnes en difficulté",
    desc: "La préparation mentale s'adresse à toute personne confrontée à des enjeux, quel que soit son niveau de départ ou son état psychologique.",
  },
  {
    label: "Une thérapie",
    desc: "Elle travaille sur l'optimisation des ressources existantes, pas sur des troubles psychologiques. Ces deux domaines sont complémentaires mais distincts.",
  },
  {
    label: "Un substitut à la préparation physique ou technique",
    desc: "Le mental maximise le potentiel existant. Il ne remplace pas la technique, la tactique ni la condition physique.",
  },
  {
    label: "Un résultat immédiat",
    desc: "Comme la condition physique, la condition mentale se construit dans la durée. Une séance isolée la veille d'une compétition ne remplace pas un entraînement régulier.",
  },
  {
    label: "Universellement efficace de la même façon",
    desc: "Certaines techniques ont des contre-indications selon les profils. La pleine conscience, par exemple, peut aggraver l'anxiété chez certaines personnes. Le bon outil dépend du contexte et de la personne.",
  },
];

const REFS = [
  {
    num: "1",
    text: "The complex interplay between psychological factors and sports performance: a systematic review",
    source: "PLOS ONE (2025)",
  },
  {
    num: "2",
    text: "Mapping 50 Years of Sport Psychology Performance Meta-Analyses: a scoping review",
    source: "PMC (2024)",
  },
  {
    num: "3",
    text: "Do expert surgeons use psychological skills training to improve surgical performance?",
    source: "PMC (2025)",
  },
  {
    num: "4",
    text: "Mental preparation in runners: competition levels and psychological training effects on performance",
    source: "PMC (2025)",
  },
  {
    num: "5",
    text: "Dr Sylvain Baert, L'art de maîtriser votre mental",
    source: "DU Préparation Mentale",
  },
  {
    num: "6",
    text: "Dr Carol Dweck, Mindset: The New Psychology of Success",
    source: "Ballantine Books (2006)",
  },
];

export default function QuestCeQueLaPreparationMentalePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
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
              La préparation mentale : définition, pour qui, pourquoi et comment
            </h1>
            <p className="text-[#6B6B6B] text-sm mb-8">
              Zoonekynd Alexandre · Lecture : 9 min
            </p>
          </FadeIn>
        </div>
      </section>

      {/* IMAGE */}
      <section className="relative h-72 md:h-[480px] overflow-hidden">
        <Image
          src={IMAGE}
          alt="Athlète en phase de préparation mentale avant une compétition sportive"
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
              La plupart des athlètes consacrent l'essentiel de leur temps à la
              préparation physique. La préparation mentale reste, dans la grande
              majorité des cas, absente ou laissée au hasard. Pourtant, les
              chercheurs en psychologie du sport s'accordent sur un chiffre qui
              devrait tout remettre en question : à haut niveau,{" "}
              <strong className="text-[#0D0D0D]">
                80 à 90% de la performance est d'ordre mental
              </strong>
              .
            </p>
            <p className="text-lg text-[#6B6B6B] leading-relaxed mb-12">
              Ce paradoxe n'est pas anecdotique. Il explique pourquoi deux
              athlètes de niveau physique identique produisent des résultats
              radicalement différents en compétition. Et pourquoi un
              professionnel compétent peut se retrouver paralysé lors d'une
              présentation à enjeu. Cet article répond à quatre questions : qu'est-ce
              que la préparation mentale, pour qui est-elle faite, pourquoi
              fonctionne-t-elle et comment débuter concrètement.
            </p>

            {/* Stats block */}
            <div className="bg-[#0D0D0D] text-white rounded-3xl p-8 mb-12">
              <p className="text-[#0A8F8F] text-xs font-bold uppercase tracking-wider mb-5">
                La préparation mentale en chiffres
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {[
                  {
                    value: "80-90%",
                    label:
                      "de la performance à haut niveau relève du facteur mental",
                    highlight: true,
                  },
                  {
                    value: "96%",
                    label:
                      "des athlètes professionnels connaissent au moins une technique de préparation mentale",
                  },
                  {
                    value: "+10,5 pts",
                    label:
                      "de taux de victoire avec un programme structuré, de 79,6% à 90,1%",
                  },
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

            {/* Section 1 : Définition */}
            <h2 className="font-display text-2xl font-bold mb-4 text-[#0D0D0D]">
              Qu'est-ce que la préparation mentale : définition scientifique
            </h2>
            <p className="text-[#6B6B6B] leading-relaxed mb-6">
              La préparation mentale peut être définie comme{" "}
              <strong className="text-[#0D0D0D]">
                un ensemble de processus psychologiques permettant aux individus
                de mobiliser leurs ressources mentales afin de maximiser leur
                performance dans une tâche donnée ou dans des situations
                stressantes
              </strong>
              . En d'autres termes : ce n'est pas de la pensée positive ni du
              coaching de motivation. C'est un entraînement structuré,
              progressif et mesurable.
            </p>

            <div className="border-l-4 border-[#0A8F8F] pl-5 mb-10">
              <p className="text-[#6B6B6B] italic leading-relaxed mb-2">
                «&nbsp;Un ensemble de techniques d'activation et de
                désactivation que le sportif apprend puis applique de façon
                autonome, en vue de développer ses qualités mentales pour
                optimiser ses performances et son bien-être.&nbsp;»
              </p>
              <p className="text-xs text-[#6B6B6B]/60">
                Dr Sylvain Baert, DU Préparation Mentale
              </p>
            </div>

            <h3 className="font-display text-lg font-bold mb-3 text-[#0D0D0D]">
              La condition mentale, comme la condition physique
            </h3>
            <p className="text-[#6B6B6B] leading-relaxed mb-4">
              Si vous vous entraînez régulièrement, votre condition physique
              s'améliore. Si vous arrêtez plusieurs semaines, elle diminue.{" "}
              <strong className="text-[#0D0D0D]">
                La condition mentale fonctionne exactement de la même façon.
              </strong>{" "}
              Elle se travaille, elle progresse avec un entraînement adapté et
              régulier, et elle se dégrade si on l'abandonne.
            </p>
            <p className="text-[#6B6B6B] leading-relaxed mb-8">
              Développer sa condition mentale, c'est travailler à augmenter sa
              motivation, sa confiance, sa concentration et sa gestion des
              émotions. Non pas ponctuellement la veille d'une compétition, mais
              de façon continue sur plusieurs semaines. L'objectif final de tout
              entraînement mental est l'autonomie : être capable de se préparer
              soi-même, sans dépendance systématique à un coach ou à un
              préparateur mental.
            </p>

            <h3 className="font-display text-lg font-bold mb-3 text-[#0D0D0D]">
              La formule de la performance
            </h3>

            <div className="bg-[#0A8F8F]/10 border border-[#0A8F8F]/30 rounded-2xl p-6 mb-6 text-center">
              <p className="font-display text-xl md:text-2xl font-bold text-[#0D0D0D]">
                Performance{" "}
                <span className="text-[#6B6B6B] font-normal">=</span>{" "}
                Potentiel{" "}
                <span className="text-[#0A8F8F]">-</span>{" "}
                Interférences
              </p>
            </div>

            <p className="text-[#6B6B6B] leading-relaxed mb-4">
              La plupart des personnes focalisent uniquement sur le
              développement du potentiel : plus d'entraînement, plus de
              technique, plus de préparation physique. Mais si les{" "}
              <strong className="text-[#0D0D0D]">interférences</strong> restent
              présentes, la performance sera toujours plafonnée. Les
              interférences les plus courantes : croyances limitantes, dialogue
              interne négatif, stress mal géré, manque de confiance en soi,
              environnement délétère.
            </p>
            <p className="text-[#6B6B6B] leading-relaxed mb-10">
              Imaginons une mélodie agréable parasitée par un bruit de fond.
              Vous pouvez augmenter le volume au maximum, vous entendrez
              toujours le bruit. C'est exactement ce qui se passe chez un
              athlète ou un professionnel : augmenter le potentiel sans traiter
              les interférences, c'est se heurter à un mur que l'entraînement
              seul ne peut pas franchir.
            </p>

            {/* Bannister */}
            <div className="bg-[#EEEDE9] rounded-3xl p-7 mb-12">
              <p className="text-[#0A8F8F] text-xs font-bold uppercase tracking-wider mb-3">
                La preuve par l'histoire
              </p>
              <p className="font-display font-bold text-[#0D0D0D] mb-3 text-lg leading-snug">
                Roger Bannister et la croyance collective limitante
              </p>
              <p className="text-sm text-[#6B6B6B] leading-relaxed">
                En 1954, Roger Bannister est le premier homme à courir le mile
                (1 609 m) en moins de quatre minutes, une performance que tout
                le monde considérait alors physiologiquement impossible. Dans
                l'année qui suit, des centaines d'autres coureurs réalisent la
                même performance. Ce qui avait changé ? Pas leur physiologie.
                La croyance collective limitante avait été brisée. Ce qui était
                admis comme biologiquement impossible s'était avéré n'être
                qu'une interférence mentale collective.
              </p>
            </div>

            {/* Section 2 : Pour qui */}
            <h2 className="font-display text-2xl font-bold mb-4 text-[#0D0D0D]">
              Pour qui est la préparation mentale ?
            </h2>
            <p className="text-[#6B6B6B] leading-relaxed mb-6">
              Née dans le sport de haut niveau dans les années 1970 et 1980, la
              préparation mentale s'est progressivement étendue à d'autres
              contextes de performance :
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {PROFILES.map((item) => (
                <div key={item.who} className="bg-[#EEEDE9] rounded-2xl p-4">
                  <p className="font-semibold text-[#0D0D0D] text-sm mb-1">
                    {item.who}
                  </p>
                  <p className="text-xs text-[#6B6B6B] leading-relaxed">
                    {item.why}
                  </p>
                </div>
              ))}
            </div>

            <p className="text-[#6B6B6B] leading-relaxed mb-4">
              La préparation mentale n'est pas réservée aux personnes
              mentalement fragiles ni aux sportifs d'élite. Elle s'adresse à
              toute personne confrontée à des situations à enjeux qui cherche
              plus de régularité dans ses performances.
            </p>

            <div className="border-l-4 border-[#0A8F8F] pl-5 mb-12">
              <p className="text-[#6B6B6B] leading-relaxed">
                Les trois profils qui bénéficient le plus d'un travail de
                préparation mentale : l'athlète qui performe à l'entraînement
                et s'effondre en compétition, le professionnel dont la confiance
                fluctue selon les contextes, et toute personne qui identifie un
                frein mental comme principal limitant de sa progression.
              </p>
            </div>

            {/* Section 3 : Pourquoi */}
            <h2 className="font-display text-2xl font-bold mb-5 text-[#0D0D0D]">
              Pourquoi ça fonctionne : la neurologie derrière la technique
            </h2>

            <h3 className="font-display text-lg font-bold mb-3 text-[#0D0D0D]">
              Le cerveau ne distingue pas toujours le réel de l'imaginé
            </h3>
            <p className="text-[#6B6B6B] leading-relaxed mb-4">
              Quand vous visualisez un geste sportif de façon précise et
              engagée, votre cerveau active les mêmes zones neurologiques que
              lors de l'exécution réelle : cortex moteur, cortex prémoteur,
              cervelet. La répétition mentale crée de vrais sillons
              neurologiques, exactement comme la pratique physique.
            </p>
            <p className="text-[#6B6B6B] leading-relaxed mb-8">
              Des études ont montré qu'un protocole d'imagerie mentale seul,
              sans entraînement physique, peut augmenter la force musculaire de{" "}
              <strong className="text-[#0D0D0D]">13,5%</strong>. Ce n'est pas
              de la magie. C'est de la neuroplasticité : le cerveau se
              reconfigure en réponse à la stimulation mentale répétée, par le
              mécanisme de la potentialisation à long terme.
            </p>

            <h3 className="font-display text-lg font-bold mb-3 text-[#0D0D0D]">
              L'état d'esprit de développement (Dr Carol Dweck)
            </h3>
            <p className="text-[#6B6B6B] leading-relaxed mb-5">
              La chercheuse Carol Dweck (Université de Stanford) distingue deux
              profils fondamentaux :
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="bg-[#EEEDE9] rounded-2xl p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-[#6B6B6B] mb-2">
                  État d'esprit fixe
                </p>
                <p className="text-sm text-[#6B6B6B] leading-relaxed">
                  Les capacités sont innées et ne peuvent pas vraiment évoluer.
                  «&nbsp;On est doué ou on ne l'est pas.&nbsp;» Cette croyance
                  bloque l'entraînement mental avant même qu'il commence.
                </p>
              </div>
              <div className="bg-[#0A8F8F]/10 border border-[#0A8F8F]/30 rounded-2xl p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-[#0A8F8F] mb-2">
                  État d'esprit de développement
                </p>
                <p className="text-sm text-[#6B6B6B] leading-relaxed">
                  Les capacités se cultivent par l'effort, la méthode et
                  l'entraînement. Avec de la méthode, on peut augmenter son
                  attention, sa mémoire et son jugement.
                </p>
              </div>
            </div>

            <p className="text-[#6B6B6B] leading-relaxed mb-12">
              La préparation mentale n'est pleinement efficace qu'à partir du
              moment où l'on adopte un état d'esprit de développement. C'est le
              point de départ indispensable : la conviction que le mental se
              travaille, comme un muscle.
            </p>

            {/* Section 4 : Les outils */}
            <h2 className="font-display text-2xl font-bold mb-4 text-[#0D0D0D]">
              Les techniques de préparation mentale validées par la recherche
            </h2>
            <p className="text-[#6B6B6B] leading-relaxed mb-6">
              La préparation mentale ne se résume pas à une seule technique.
              C'est un système dans lequel chaque outil remplit une fonction
              précise. Voici les cinq techniques les mieux documentées en
              psychologie du sport :
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="w-full text-sm border-collapse rounded-2xl overflow-hidden">
                <thead>
                  <tr className="bg-[#0D0D0D] text-white">
                    <th className="text-left px-5 py-3.5 font-semibold">
                      Technique
                    </th>
                    <th className="text-left px-5 py-3.5 font-semibold">
                      Fonction
                    </th>
                    <th className="text-left px-5 py-3.5 font-semibold hidden sm:table-cell">
                      Quand l'utiliser
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {TOOLS.map((tool, i) => (
                    <tr
                      key={tool.name}
                      className={i % 2 === 0 ? "bg-[#EEEDE9]" : "bg-white"}
                    >
                      <td className="px-5 py-3.5 font-semibold text-[#0D0D0D]">
                        {tool.name}
                      </td>
                      <td className="px-5 py-3.5 text-[#6B6B6B]">
                        {tool.function}
                      </td>
                      <td className="px-5 py-3.5 text-[#6B6B6B] hidden sm:table-cell">
                        {tool.when}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-[#6B6B6B] leading-relaxed mb-12">
              Chaque technique ne fonctionne pas de façon isolée. La recherche
              montre qu'un{" "}
              <strong className="text-[#0D0D0D]">
                système combinant plusieurs outils dans un ordre précis
              </strong>{" "}
              produit des effets supérieurs à chaque technique pratiquée seule.
              La régulation physiologique crée les conditions pour que
              l'imagerie fonctionne, qui crée les conditions pour que le
              self-talk soit efficace.
            </p>

            {/* Section 5 : Timeline */}
            <h2 className="font-display text-2xl font-bold mb-6 text-[#0D0D0D]">
              En combien de temps la préparation mentale produit-elle des
              résultats ?
            </h2>
            <div className="flex flex-col gap-4 mb-8">
              {TIMELINE.map((step) => (
                <div
                  key={step.delay}
                  className="flex gap-5 bg-[#EEEDE9] rounded-2xl p-5"
                >
                  <div className="shrink-0 w-20 text-right">
                    <p className="font-display font-bold text-[#0A8F8F] text-base leading-tight">
                      {step.delay}
                    </p>
                  </div>
                  <div className="border-l border-[#0A8F8F]/30 pl-5">
                    <p className="font-display font-bold text-[#0D0D0D] mb-1 text-sm">
                      {step.result}
                    </p>
                    <p className="text-sm text-[#6B6B6B] leading-relaxed">
                      {step.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-[#6B6B6B] leading-relaxed mb-12">
              Comme la condition physique, les effets de la préparation mentale
              se maintiennent par la pratique continue et se dégradent si on
              l'abandonne. Une séance isolée la veille d'une compétition ne
              remplace pas un protocole régulier de plusieurs semaines.
            </p>

            {/* Section 6 : Ce que ce n'est pas */}
            <h2 className="font-display text-2xl font-bold mb-6 text-[#0D0D0D]">
              Ce que la préparation mentale n'est pas
            </h2>
            <div className="flex flex-col gap-3 mb-12">
              {NOT_PM.map((item) => (
                <div
                  key={item.label}
                  className="flex gap-4 bg-[#EEEDE9] rounded-2xl p-5"
                >
                  <XCircle
                    size={18}
                    className="text-[#0A8F8F] shrink-0 mt-0.5"
                    strokeWidth={1.75}
                  />
                  <div>
                    <p className="font-display font-bold text-[#0D0D0D] text-sm mb-1">
                      {item.label}
                    </p>
                    <p className="text-sm text-[#6B6B6B] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* 3 questions */}
            <div className="bg-[#EEEDE9] rounded-3xl p-7 mb-10">
              <p className="text-[#0A8F8F] text-xs font-bold uppercase tracking-wider mb-4">
                Pour aller plus loin
              </p>
              <p className="font-display font-bold text-[#0D0D0D] mb-5">
                Trois questions pour identifier votre point de départ
              </p>
              {[
                {
                  q: "1. Quel est votre principal frein mental ?",
                  a: "Anxiété compétitive, manque de confiance, concentration défaillante, motivation irrégulière. Identifier le frein précède le choix de l'outil.",
                },
                {
                  q: "2. Quelle est votre fenêtre de pratique réaliste ?",
                  a: "10 minutes par jour pratiquées régulièrement produisent des effets plus durables qu'une heure ponctuelle. Partez du temps disponible, pas du protocole idéal.",
                },
                {
                  q: "3. Cherchez-vous à performer ou à vous sentir mieux en premier ?",
                  a: "La recherche montre que le bien-être est un point de départ vers la performance, pas une conséquence. Les deux objectifs ne s'opposent pas : plus on se sent bien, plus on exprime ses capacités.",
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
            href="/blog/routine-visualisation-preparation-mentale"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#0D0D0D] hover:text-[#0A8F8F] transition-colors"
          >
            Article suivant
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-[#F7F6F4]">
        <div className="max-w-2xl mx-auto text-center">
          <FadeIn>
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-5">
              Identifier votre frein mental et construire votre protocole
            </h2>
            <p className="text-[#6B6B6B] leading-relaxed mb-8">
              Réservez un appel découverte pour faire le point sur votre
              condition mentale actuelle et définir les priorités d'un
              entraînement adapté à votre profil et vos objectifs.
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
