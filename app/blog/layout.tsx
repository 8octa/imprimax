import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ghiduri și sfaturi despre print",
  description:
    "Citește ghidurile Imprimax Solutions despre pregătirea fișierelor pentru tipar, print digital și personalizarea produselor. Sfaturi de la atelierul din Moreni.",
  keywords: [
    "ghid print",
    "sfaturi print digital",
    "pregătire fișiere pentru tipar",
    "print Moreni",
    "Imprimax Solutions",
  ],
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Ghiduri și sfaturi despre print | Imprimax Solutions",
    description:
      "Ghiduri practice despre fișiere pentru tipar, print digital și personalizări, de la Imprimax Solutions din Moreni.",
    url: "https://www.imprimaxsolutions.ro/blog",
    type: "website",
    locale: "ro_RO",
    siteName: "Imprimax Solutions",
  },
  twitter: {
    card: "summary",
    title: "Ghiduri și sfaturi despre print",
    description: "Articole practice despre print digital și personalizare.",
  },
};

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
