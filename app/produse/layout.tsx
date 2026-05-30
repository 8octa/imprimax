import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Produse & Servicii Print Digital | Imprimax Solutions",
  description:
    "Descoperi gama completă de produse și servicii Imprimax: print digital, bannere, autocolante, tricouri personalizate, obiecte promotionale și publicitate vizuală.",
  keywords: [
    "produse print",
    "servicii print",
    "bannere publicitate",
    "tricouri personalizate",
    "obiecte promotionale",
    "autocolante",
  ],
  alternates: {
    canonical: "/produse",
  },
  openGraph: {
    title: "Produse & Servicii Imprimax Solutions",
    description:
      "Gama completă de servicii de print digital, publicitate și personalizări pentru afacerea ta.",
    url: "https://www.imprimaxsolutions.ro/produse",
    type: "website",
    locale: "ro_RO",
    siteName: "Imprimax Solutions",
  },
  twitter: {
    card: "summary",
    title: "Produse & Servicii Imprimax",
    description:
      "Print digital, bannere, personalizări și publicitate profesională.",
  },
};

export default function OfertaLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
