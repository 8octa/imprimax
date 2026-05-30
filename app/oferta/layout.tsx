import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ofertă Print Digital & Publicitate | Preturi Competitive Imprimax",
  description:
    "Ofertă specială Imprimax Solutions cu preturi competitive pentru print digital, bannere, autocolante, personalizări și servicii publicitare profesionale.",
  keywords: [
    "oferta print",
    "pret imprimare",
    "oferta bannere",
    "pret personalizare",
    "print ieftin",
  ],
  alternates: {
    canonical: "/oferta",
  },
  openGraph: {
    title: "Ofertă Imprimax Solutions",
    description:
      "Oferte competitive pentru print digital, publicitate și personalizări. Découvrez nos tarifs et services professionnels.",
    url: "https://www.imprimaxsolutions.ro/oferta",
    type: "website",
    locale: "ro_RO",
    siteName: "Imprimax Solutions",
  },
  twitter: {
    card: "summary",
    title: "Ofertă Imprimax Solutions",
    description: "Preturi competitive pentru servicii de print și publicitate.",
  },
};

export default function OfertaLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
