import type { Metadata } from "next";
import FadeIn from "@/components/FadeIn";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact — Alex MindFlow",
  description:
    "Contacte Alex MindFlow à Valenciennes. Réserve un appel découverte gratuit de 30 min ou envoie un message pour démarrer ton accompagnement en respiration et préparation mentale.",
};

export default function ContactPage() {
  return (
    <>
      <section className="pt-32 pb-12 px-6 bg-[#F7F6F4]">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <p className="text-[#0A8F8F] text-sm font-semibold uppercase tracking-widest mb-6">
              Contact
            </p>
            <h1
              className="font-display text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight mb-8"
            >
              Parlons-en.
            </h1>
            <p className="text-xl text-[#6B6B6B] leading-relaxed">
              Une question, un projet, une envie de démarrer ? Envoie un message
              ou réserve directement un créneau.
            </p>
          </FadeIn>
        </div>
      </section>
      <ContactForm />
    </>
  );
}
