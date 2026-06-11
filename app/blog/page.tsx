import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import { ArrowRight, Clock } from "lucide-react";
import { CAL_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Blog : Respiration, performance & préparation mentale | Alex MindFlow",
  description:
    "Articles scientifiques sur la respiration fonctionnelle, la performance sportive et la préparation mentale. Méthode Oxygen Advantage® et psychologie du sport, par Alex MindFlow à Valenciennes.",
};

const ARTICLES = [
  {
    slug: "qu-est-ce-que-la-preparation-mentale",
    category: "Préparation mentale",
    title: "La préparation mentale : définition, pour qui, pourquoi et comment",
    excerpt:
      "80 à 90% de la performance à haut niveau est mentale. Pourtant, la préparation mentale reste absente de la majorité des entraînements. Définition scientifique, profils concernés, bases neurologiques et techniques validées par la recherche.",
    image:
      "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800&q=80",
    readTime: "9 min",
    source: "Alex MindFlow",
  },
  {
    slug: "routine-visualisation-preparation-mentale",
    category: "Préparation mentale",
    title:
      "Pourquoi votre routine de visualisation ne suffit pas",
    excerpt:
      "Une méta-analyse 2025 (36 études) est claire : un système intégré respiration + imagerie + self-talk surpasse chaque technique isolée. La question n'est pas quelle est la meilleure technique, mais comment construire le bon système.",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
    readTime: "7 min",
    source: "Alex MindFlow",
  },
  {
    slug: "fonctions-du-nez",
    category: "Corps · Respiration",
    title: "Le nez : 30 fonctions que tu ne soupçonnes pas",
    excerpt:
      "En 1970, le Dr Maurice Cottle a identifié 30 fonctions distinctes du nez humain. La plupart des gens connaissent la filtration et le réchauffement de l'air. Mais le nez fait bien plus que ça.",
    image:
      "https://oxygenadvantage.com/cdn/shop/articles/nose-functions_13bb5c34-a40e-495c-a4a7-331510e9fc80.jpg",
    readTime: "8 min",
    source: "Oxygen Advantage®",
  },
  {
    slug: "asthme-effort-respiration",
    category: "Corps · Sport",
    title: "Asthme à l'effort ou juste hors de forme ?",
    excerpt:
      "Tu tousses, tu peines à respirer après l'effort ? Ce n'est pas forcément un manque de condition physique. Même des athlètes professionnels souffrent d'une bronchoconstriction induite par l'exercice.",
    image:
      "https://oxygenadvantage.com/cdn/shop/articles/Exercise-Induced-Asthma-Symptoms-Treatment-Causes_67b907b0-ccdd-4b89-8a2b-c98b4ccf6b1d.webp",
    readTime: "7 min",
    source: "Oxygen Advantage®",
  },
  {
    slug: "respiration-buccale",
    category: "Corps · Bien-être",
    title: "Respiration buccale : causes, effets et comment l'arrêter",
    excerpt:
      "Respirer sainement, c'est respirer par le nez. Mais si ton nez est bloqué ou que ta tolérance au CO₂ est trop faible, tu respireras probablement par la bouche. Et ce n'est pas anodin.",
    image:
      "https://oxygenadvantage.com/cdn/shop/articles/Mouth-Breathing_3fae485b-e991-4f20-adc0-fb0438ec9f84.webp",
    readTime: "9 min",
    source: "Oxygen Advantage®",
  },
  {
    slug: "respirer-en-courant",
    category: "Sport · Performance",
    title: "Comment respirer en courant : nez ou bouche ?",
    excerpt:
      "La respiration nasale pendant la course est 22 % plus efficace que la respiration buccale. Ce chiffre contre-intuitif change complètement la façon d'aborder l'entraînement en endurance.",
    image:
      "https://oxygenadvantage.com/cdn/shop/articles/breathing-running_d46f682c-9630-4c4e-9453-9bb6b483f4a2.jpg",
    readTime: "8 min",
    source: "Oxygen Advantage®",
  },
  {
    slug: "score-bolt",
    category: "Corps · Performance",
    title: "Le score BOLT : mesure ta tolérance au CO₂ en 40 secondes",
    excerpt:
      "Le BOLT (Body Oxygen Level Test) est le marqueur central de la méthode Oxygen Advantage®. En moins d'une minute, il révèle ton niveau de tolérance au CO₂ et prédit ta gestion de l'essoufflement à l'effort.",
    image:
      "https://oxygenadvantage.com/cdn/shop/articles/Measure-your-BOLT-Score-and-Reduce-Breathlessness-During-Exercise_8412f399-2fda-401c-8f34-647a2ab1ef33.webp",
    readTime: "7 min",
    source: "Oxygen Advantage®",
  },
];

export default function BlogPage() {
  return (
    <>
      {/* HERO */}
      <section className="pt-32 pb-20 px-6 bg-[#F7F6F4]">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <p className="text-[#0A8F8F] text-sm font-semibold uppercase tracking-widest mb-6">
              Ressources · Science
            </p>
            <h1
              className="font-display text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight mb-8"
            >
              Blog.
              <br />
              <span className="text-[#0A8F8F]">La science</span>
              <br />
              de la performance.
            </h1>
            <p className="text-xl text-[#6B6B6B] leading-relaxed max-w-xl">
              Articles issus de la recherche en physiologie respiratoire et en
              psychologie du sport. Respiration fonctionnelle, préparation
              mentale, performance durable.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* GRILLE ARTICLES */}
      <section className="py-16 px-6 bg-[#EEEDE9]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ARTICLES.map((article, i) => (
              <FadeIn key={article.slug} delay={i * 0.1}>
                <Link href={`/blog/${article.slug}`} className="group block h-full">
                  <article className="bg-white rounded-3xl overflow-hidden h-full flex flex-col hover:shadow-md transition-shadow duration-300">
                    {/* Image */}
                    <div className="relative h-56 overflow-hidden shrink-0">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-7 flex flex-col flex-1">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-semibold text-[#0A8F8F] uppercase tracking-wider">
                          {article.category}
                        </span>
                        <span className="flex items-center gap-1.5 text-xs text-[#6B6B6B]">
                          <Clock size={12} />
                          {article.readTime}
                        </span>
                      </div>

                      <h2
                        className="font-display text-xl font-bold text-[#0D0D0D] mb-3 leading-tight group-hover:text-[#0A8F8F] transition-colors"
                      >
                        {article.title}
                      </h2>

                      <p className="text-sm text-[#6B6B6B] leading-relaxed mb-5 flex-1">
                        {article.excerpt}
                      </p>

                      <div className="flex items-center justify-between mt-auto pt-4 border-t border-[#EEEDE9]">
                        <span className="text-xs text-[#6B6B6B]/60">
                          Source : {article.source}
                        </span>
                        <span className="flex items-center gap-1.5 text-sm font-semibold text-[#0A8F8F] group-hover:gap-2.5 transition-all">
                          Lire
                          <ArrowRight size={14} />
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-[#F7F6F4]">
        <div className="max-w-2xl mx-auto text-center">
          <FadeIn>
            <p className="text-[#0A8F8F] text-sm font-semibold uppercase tracking-widest mb-4">
              Passer à l'action
            </p>
            <h2
              className="font-display text-3xl font-bold mb-5"
            >
              La théorie, c'est bien. La pratique, c'est mieux.
            </h2>
            <p className="text-[#6B6B6B] leading-relaxed mb-8">
              Réserve un appel découverte gratuit pour appliquer ces principes
              à ton profil respiratoire et tes objectifs.
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
