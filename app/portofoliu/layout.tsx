import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portofoliu Imprimax | Lucrări de Print & Design Profesional",
  description:
    "Vezi portofoliul Imprimax Solutions cu peste 100 lucrări de print digital, design publicitar, bannere și personalizări pentru clienți corporativi.",
  keywords: [
    "portofoliu print",
    "exemple design",
    "galerie imprimare",
    "lucrari print",
    "proiecte publicitate",
  ],
  alternates: {
    canonical: "/portofoliu",
  },
  openGraph: {
    title: "Portofoliu Imprimax Solutions",
    description:
      "Galerie cu cele mai bune lucrări de print, design și publicitate realizate de echipa Imprimax.",
    url: "https://www.imprimaxsolutions.ro/portofoliu",
    type: "website",
    locale: "ro_RO",
    siteName: "Imprimax Solutions",
  },
  twitter: {
    card: "summary",
    title: "Portofoliu Imprimax Solutions",
    description: "Lucrări profesionale de print și design.",
  },
};

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
