import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Produse personalizate și print în Moreni",
  description:
    "Comandă tricouri clasice și polo, stickere laminate sau nelaminate, autocolante, plăci PVC, bannere, tablouri canvas și cu sticlă, hanorace și bluze. Print în Moreni, Dâmbovița.",
  keywords: [
    "produse print Moreni",
    "print Ivana",
    "Cosmin Ivana",
    "Ivana",
    "tricouri clasice",
    "stickere nelaminate",
    "stickere laminate",
    "tricouri polo",
    "autocolante",
    "plăci PVC",
    "tricouri oversized",
    "bannere Moreni",
    "banner",
    "tablouri canvas",
    "tricourile tale",
    "tricouri personalizate",
    "tablouri cu sticlă",
    "hanorace și bluze",
  ],
  alternates: {
    canonical: "/produse",
  },
  openGraph: {
    title: "Produse personalizate și print în Moreni | Imprimax Solutions",
    description:
      "Descoperă gama de print și produse personalizate realizate de Imprimax Solutions în Moreni, Dâmbovița.",
    url: "https://www.imprimaxsolutions.ro/produse",
    type: "website",
    locale: "ro_RO",
    siteName: "Imprimax Solutions",
  },
  twitter: {
    card: "summary",
    title: "Produse personalizate și print în Moreni",
    description:
      "Tricouri, stickere, autocolante, bannere și tablouri personalizate în Moreni.",
  },
};

export default function OfertaLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
