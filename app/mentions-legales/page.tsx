import FadeIn from "@/components/FadeIn";

export default function MentionsLegalesPage() {
  return (
    <section className="pt-32 pb-24 px-6 bg-[#F7F6F4]">
      <div className="max-w-2xl mx-auto">
        <FadeIn>
          <p className="text-[#0A8F8F] text-sm font-semibold uppercase tracking-widest mb-6">
            Informations légales
          </p>
          <h1
            className="text-4xl font-bold mb-12"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            Mentions légales
          </h1>

          <div className="flex flex-col gap-10 text-[#6B6B6B] leading-relaxed">
            <div>
              <h2
                className="text-lg font-bold text-[#0D0D0D] mb-3"
                style={{ fontFamily: "Syne, sans-serif" }}
              >
                Éditeur du site
              </h2>
              <p>Alexandre Zoonekynd — Alex MindFlow</p>
              <p>Valenciennes, Hauts-de-France</p>
              <p>Email : alexzoonekynd@gmail.com</p>
            </div>

            <div>
              <h2
                className="text-lg font-bold text-[#0D0D0D] mb-3"
                style={{ fontFamily: "Syne, sans-serif" }}
              >
                Hébergement
              </h2>
              <p>À compléter selon l'hébergeur retenu.</p>
            </div>

            <div>
              <h2
                className="text-lg font-bold text-[#0D0D0D] mb-3"
                style={{ fontFamily: "Syne, sans-serif" }}
              >
                Propriété intellectuelle
              </h2>
              <p>
                L'ensemble du contenu de ce site (textes, visuels, structure) est la propriété exclusive d'Alexandre Zoonekynd — Alex MindFlow. Toute reproduction sans autorisation préalable est interdite.
              </p>
            </div>

            <div>
              <h2
                className="text-lg font-bold text-[#0D0D0D] mb-3"
                style={{ fontFamily: "Syne, sans-serif" }}
              >
                Données personnelles
              </h2>
              <p>
                Ce site ne collecte pas de données personnelles à des fins commerciales. Les informations transmises via le formulaire de contact sont uniquement utilisées pour répondre à votre demande.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
