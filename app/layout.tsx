import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";

const BASE_URL = "https://www.alex-mindflow.fr";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Alex MindFlow — Préparation Mentale & Bien-être · Valenciennes",
    template: "%s | Alex MindFlow",
  },
  description:
    "Alex MindFlow combine respiration fonctionnelle Oxygen Advantage®, préparation mentale ECO2A® et exposition au froid pour t'aider à performer durablement — à Valenciennes.",
  openGraph: {
    title: "Alex MindFlow — Préparation Mentale & Bien-être",
    description:
      "Préparation mentale et bien-être à Valenciennes. Respiration Oxygen Advantage®, méthode ECO2A®, exposition au froid.",
    locale: "fr_FR",
    type: "website",
    url: BASE_URL,
    siteName: "Alex MindFlow",
    images: [{ url: `${BASE_URL}/opengraph-image`, width: 1200, height: 630, alt: "Alex MindFlow" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alex MindFlow — Préparation Mentale & Bien-être",
    description:
      "Respiration fonctionnelle, préparation mentale et exposition au froid à Valenciennes.",
    images: [`${BASE_URL}/opengraph-image`],
  },
  alternates: {
    canonical: BASE_URL,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://www.alex-mindflow.fr/#business",
      name: "Alex MindFlow",
      description:
        "Coaching en respiration fonctionnelle Oxygen Advantage®, préparation mentale ECO2A® et exposition au froid à Valenciennes.",
      url: "https://www.alex-mindflow.fr",
      email: "alexzoonekynd@gmail.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Valenciennes",
        addressRegion: "Hauts-de-France",
        addressCountry: "FR",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 50.3587,
        longitude: 3.5236,
      },
      sameAs: ["https://www.instagram.com/alex_mindflow"],
      priceRange: "€€",
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "19:00",
      },
    },
    {
      "@type": "Person",
      "@id": "https://www.alex-mindflow.fr/#person",
      name: "Alex Zoonekynd",
      jobTitle: "Coach en respiration fonctionnelle et préparation mentale",
      url: "https://www.alex-mindflow.fr/a-propos",
      sameAs: ["https://www.instagram.com/alex_mindflow"],
      knowsAbout: [
        "Oxygen Advantage",
        "Respiration fonctionnelle",
        "Préparation mentale",
        "Méthode ECO2A",
        "Exposition au froid",
        "Bain froid",
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full" data-scroll-behavior="smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#F7F6F4] text-[#0D0D0D]">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
