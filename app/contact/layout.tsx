import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact și adresă atelier print Moreni",
  description:
    "Contactează Imprimax Solutions pentru print și personalizări în Moreni, Dâmbovița. Ne găsești pe Strada Flacăra 24, cod poștal 135300. Sună la 0724 274 102.",
  keywords: [
    "contact Imprimax Solutions",
    "print Moreni adresă",
    "print Dâmbovița",
    "print 135300",
    "Strada Flacăra 24 Moreni",
    "Cosmin Ivana contact",
  ],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Imprimax Solutions - print în Moreni",
    description:
      "Vizitează atelierul Imprimax Solutions de pe Strada Flacăra 24, Moreni, 135300, județul Dâmbovița, sau sună la 0724 274 102.",
    url: "https://www.imprimaxsolutions.ro/contact",
    type: "website",
    locale: "ro_RO",
    siteName: "Imprimax Solutions",
  },
  twitter: {
    card: "summary",
    title: "Contact Imprimax Solutions - print în Moreni",
    description: "Strada Flacăra 24, Moreni, 135300. Sună la 0724 274 102.",
  },
};

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
