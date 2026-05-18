import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import { ArrowRight, CheckCircle } from "lucide-react";

const CAL_URL = "https://cal.com/alexmindflow/30min?overlayCalendar=true";

const CERTIFICATIONS = [
  {
    name: "Oxygen Advantage®",
    desc: "Méthode de respiration fonctionnelle, scientifiquement prouvée et haute performance développée par Patrick McKeown.",
  },
  {
    name: "Inspire®",
    desc: "Certification en coaching respiratoire et exposition au chaud et au froid appliqué à la performance, à la récupération et au bien-être.",
  },
  {
    name: "ECO2A®",
    desc: "Méthode de préparation mentale du Dr. Sylvain Baert. Formation complète sur la gestion du stress, la concentration et la résilience mentale pour les athlètes et les professionnels sous pression.",
  },
];

export default function AProposPage() {
  return (
    <>
      {/* HERO */}
      <section className="pt-32 pb-20 px-6 bg-[#F7F6F4]">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <p className="text-[#0A8F8F] text-sm font-semibold uppercase tracking-widest mb-6">
              À propos
            </p>
            <h1
              className="text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight mb-8"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              D'un épuisement total à une méthode. Mon parcours.
            </h1>
            <p className="text-xl text-[#6B6B6B] leading-relaxed">
              Je m'appelle Alexandre Zoonekynd. Je suis coach en performance et
              bien-être, basé à Valenciennes. Voici pourquoi j'ai créé Alex
              MindFlow — et ce qui m'a conduit là.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* PHOTO + INTRO */}
      <section className="py-16 px-6 bg-[#F7F6F4]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-12 items-start">
          <FadeIn className="md:col-span-2" direction="right">
            <div className="sticky top-24 flex flex-col items-center gap-4">
              <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden shadow-xl ring-4 ring-[#0A8F8F]/30">
                <Image
                  src="/images/profil.png"
                  alt="Alexandre Zoonekynd — Alex MindFlow"
                  fill
                  className="object-cover"
                  style={{ objectPosition: "center 9px" }}
                />
              </div>
              <div className="text-center">
                <p className="font-bold text-[#0D0D0D]" style={{ fontFamily: "Syne, sans-serif" }}>
                  Alexandre Zoonekynd
                </p>
                <p className="text-sm text-[#6B6B6B] mt-0.5">Coach Performance & Bien-être</p>
              </div>
            </div>
          </FadeIn>

          <div className="md:col-span-3 flex flex-col gap-12">
            {/* Chapitre 1 */}
            <FadeIn delay={0.1}>
              <div className="flex items-start gap-4">
                <span
                  className="text-5xl font-bold text-[#EEEDE9] select-none leading-none mt-1"
                  style={{ fontFamily: "Syne, sans-serif" }}
                >
                  01
                </span>
                <div>
                  <h2
                    className="text-2xl font-bold mb-4"
                    style={{ fontFamily: "Syne, sans-serif" }}
                  >
                    Le sport avant tout
                  </h2>
                  <p className="text-[#6B6B6B] leading-relaxed mb-4">
                    Avant de devenir coach, j'ai été athlète. Vingt ans de
                    tennis compétitif, puis une reconversion vers les sports
                    d'endurance : running, trail, triathlon, Hyrox. La
                    performance, je l'ai vécue de l'intérieur — les
                    entraînements à la limite, les compétitions sous pression,
                    la recherche permanente d'un dixième de seconde.
                  </p>
                  <p className="text-[#6B6B6B] leading-relaxed">
                    Pendant longtemps, j'ai cru que performer, c'était forcément
                    souffrir davantage. Ajouter plus. Pousser plus fort. C'était
                    la seule équation que je connaissais.
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Chapitre 2 */}
            <FadeIn delay={0.1}>
              <div className="flex items-start gap-4">
                <span
                  className="text-5xl font-bold text-[#EEEDE9] select-none leading-none mt-1"
                  style={{ fontFamily: "Syne, sans-serif" }}
                >
                  02
                </span>
                <div>
                  <h2
                    className="text-2xl font-bold mb-4"
                    style={{ fontFamily: "Syne, sans-serif" }}
                  >
                    L'épuisement total comme point de bascule
                  </h2>
                  <p className="text-[#6B6B6B] leading-relaxed mb-4">
                    Et puis le corps a dit non. Un épuisement total — pas
                    progressif, pas annoncé. Du jour au lendemain, plus
                    d'énergie, plus de motivation, plus de clarté. Tout ce que
                    j'avais construit s'est effondré d'un coup.
                  </p>
                  <p className="text-[#6B6B6B] leading-relaxed">
                    Cette période a été douloureuse. Elle a aussi été la plus
                    formatrice de ma vie. Parce qu'elle m'a forcé à me poser la
                    bonne question : et si le problème n'était pas le manque
                    d'effort, mais la façon dont je gérais mon énergie ?
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Chapitre 3 */}
            <FadeIn delay={0.1}>
              <div className="flex items-start gap-4">
                <span
                  className="text-5xl font-bold text-[#EEEDE9] select-none leading-none mt-1"
                  style={{ fontFamily: "Syne, sans-serif" }}
                >
                  03
                </span>
                <div>
                  <h2
                    className="text-2xl font-bold mb-4"
                    style={{ fontFamily: "Syne, sans-serif" }}
                  >
                    La découverte des trois leviers
                  </h2>
                  <p className="text-[#6B6B6B] leading-relaxed mb-4">
                    La reconstruction a été lente. Elle est passée par trois
                    découvertes qui ont changé ma façon de fonctionner :
                    apprendre à respirer correctement pour réguler mon système
                    nerveux, travailler mon mental pour rester performant sous
                    pression, et intégrer l'exposition au chaud et au froid
                    comme outil de récupération active.
                  </p>
                  <p className="text-[#6B6B6B] leading-relaxed">
                    Séparément, ces pratiques existent depuis longtemps. Ce qui
                    est nouveau, c'est leur combinaison dans un protocole
                    cohérent adapté à chaque profil, applicable au quotidien.
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Chapitre 4 */}
            <FadeIn delay={0.1}>
              <div className="flex items-start gap-4">
                <span
                  className="text-5xl font-bold text-[#EEEDE9] select-none leading-none mt-1"
                  style={{ fontFamily: "Syne, sans-serif" }}
                >
                  04
                </span>
                <div>
                  <h2
                    className="text-2xl font-bold mb-4"
                    style={{ fontFamily: "Syne, sans-serif" }}
                  >
                    La décision de transmettre
                  </h2>
                  <p className="text-[#6B6B6B] leading-relaxed mb-4">
                    Quand j'ai retrouvé un niveau de performance supérieur à
                    celui d'avant l'épuisement total, sans jamais avoir autant
                    récupéré, j'ai compris que cette méthode méritait d'être
                    partagée. Pas pour vendre un programme miracle. Pour donner
                    à d'autres les outils que j'aurais voulu avoir avant de
                    tomber.
                  </p>
                  <p className="text-[#6B6B6B] leading-relaxed">
                    MindFlow, c'est ça : performer autrement, sans s'épuiser
                    davantage.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="py-24 px-6 bg-[#0D0D0D] text-white">
        <div className="max-w-4xl mx-auto">
          <FadeIn className="mb-12">
            <p className="text-[#0A8F8F] text-sm font-semibold uppercase tracking-widest mb-4">
              Certifications
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              Une expertise validée
            </h2>
          </FadeIn>

          <div className="flex flex-col gap-5">
            {CERTIFICATIONS.map((cert, i) => (
              <FadeIn key={cert.name} delay={i * 0.1}>
                <div className="flex items-start gap-5 bg-white/5 border border-white/10 rounded-2xl p-7">
                  <CheckCircle
                    size={22}
                    className="text-[#0A8F8F] mt-0.5 shrink-0"
                    strokeWidth={1.75}
                  />
                  <div>
                    <h3
                      className="text-lg font-bold mb-1"
                      style={{ fontFamily: "Syne, sans-serif" }}
                    >
                      {cert.name}
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed">
                      {cert.desc}
                    </p>
                  </div>
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
              className="text-3xl md:text-4xl font-bold mb-6"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              Tu veux en savoir plus ?
            </h2>
            <p className="text-[#6B6B6B] text-lg leading-relaxed mb-10">
              Réserve un appel découverte de 30 minutes. On fait le point sur ta
              situation et on voit ensemble si la méthode est adaptée à tes
              objectifs.
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
                Voir les services <ArrowRight size={18} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
