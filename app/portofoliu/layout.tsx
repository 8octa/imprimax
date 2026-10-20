import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portofoliu de print și personalizări Moreni",
  description:
    "Vezi lucrări realizate de Imprimax Solutions: print digital, bannere, tablouri canvas și produse personalizate în Moreni, județul Dâmbovița.",
  keywords: [
    "portofoliu print Moreni",
    "lucrări print Dâmbovița",
    "exemple tablouri canvas",
    "bannere personalizate",
    "Imprimax Solutions",
  ],
  alternates: {
    canonical: "/portofoliu",
  },
  openGraph: {
    title: "Portofoliu print și personalizări | Imprimax Solutions",
    description:
      "Galerie cu lucrări de print și produse personalizate realizate de Imprimax Solutions în Moreni.",
    url: "https://www.imprimaxsolutions.ro/portofoliu",
    type: "website",
    locale: "ro_RO",
    siteName: "Imprimax Solutions",
  },
  twitter: {
    card: "summary",
    title: "Portofoliu print și personalizări",
    description: "Lucrări realizate de Imprimax Solutions în Moreni.",
  },
};

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
