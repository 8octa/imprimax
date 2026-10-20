import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Despre Imprimax Solutions și Cosmin Ivana",
  description:
    "Află povestea Imprimax Solutions, atelier de print și personalizare din Moreni, Dâmbovița, și despre Cosmin Ivana. Experiență în print din 1999.",
  keywords: [
    "Cosmin Ivana",
    "Ivana print",
    "Imprimax Solutions Moreni",
    "atelier print Moreni",
    "print Dâmbovița",
    "despre Imprimax",
    "servicii de print din 1999",
  ],
  alternates: {
    canonical: "/despre",
  },
  openGraph: {
    title: "Despre Imprimax Solutions și Cosmin Ivana",
    description:
      "Povestea atelierului Imprimax Solutions din Moreni și a echipei din spatele serviciilor de print și personalizare.",
    url: "https://www.imprimaxsolutions.ro/despre",
    type: "website",
    locale: "ro_RO",
    siteName: "Imprimax Solutions",
  },
  twitter: {
    card: "summary",
    title: "Despre Imprimax Solutions și Cosmin Ivana",
    description: "Află povestea atelierului nostru de print din Moreni.",
  },
};

export default function DespreLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
