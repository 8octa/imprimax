import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Despre Imprimax Solutions | Experți în Print & Publicitate",
  description:
    "Descoperi povestea Imprimax Solutions, echipa de experți în print digital, publicitate și personalizări. Servicii profesionale în România din 1999.",
  keywords: [
    "despre imprimax",
    "echipa print",
    "experți imprimare",
    "servicii print",
    "companie print",
  ],
  alternates: {
    canonical: "/despre",
  },
  openGraph: {
    title: "Despre Imprimax Solutions",
    description:
      "Echipa de experți Imprimax Solutions oferă soluții profesionale de print, publicitate și personalizări în România.",
    url: "https://www.imprimaxsolutions.ro/despre",
    type: "website",
    locale: "ro_RO",
    siteName: "Imprimax Solutions",
  },
  twitter: {
    card: "summary",
    title: "Despre Imprimax Solutions",
    description: "Experți în print digital și publicitate profesională.",
  },
};

export default function DespreLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
