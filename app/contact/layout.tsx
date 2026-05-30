import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Imprimax Solutions | Print Digital & Publicitate Românești",
  description:
    "Contactează Imprimax Solutions pentru soluții de print digital, publicitate și personalizări. Răspunsuri rapide și servicii profesionale în România.",
  keywords: [
    "contact imprimax",
    "contact print digital",
    "servicii print",
    "personalizare produse",
  ],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Imprimax Solutions",
    description:
      "Contactează Imprimax Solutions pentru print digital, publicitate și personalizări cu servicii profesionale în România.",
    url: "https://www.imprimaxsolutions.ro/contact",
    type: "website",
    locale: "ro_RO",
    siteName: "Imprimax Solutions",
  },
  twitter: {
    card: "summary",
    title: "Contact Imprimax Solutions",
    description:
      "Contactează Imprimax Solutions pentru servicii profesionale de print și publicitate.",
  },
};

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
