import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Alex MindFlow — Coaching Performance & Bien-être",
  description:
    "Alex MindFlow combine respiration fonctionnelle, préparation mentale et thérapie par contraste pour t'aider à atteindre ton plein potentiel — durablement.",
  icons: {
    icon: "/images/logo_mindflow.png",
    apple: "/images/logo_mindflow.png",
  },
  openGraph: {
    title: "Alex MindFlow — Coaching Performance & Bien-être",
    description:
      "Coaching en performance et bien-être à Valenciennes. Méthode basée sur la respiration, le mental et la thérapie par contraste.",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full">
      <body className="min-h-full flex flex-col bg-[#F7F6F4] text-[#0D0D0D]">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
