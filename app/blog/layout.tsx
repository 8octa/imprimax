import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Blog - Articole despre Print Digital și Publicitate | Imprimax Solutions",
  description:
    "Citește articole din blogul Imprimax Solutions despre print digital, design publicitar, inovații și sfaturi practice pentru afacerea ta.",
  keywords: [
    "blog print",
    "articole imprimare",
    "sfaturi print",
    "design publicitar",
    "inovații print",
  ],
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog Imprimax Solutions",
    description:
      "Articole despre print digital, design și soluții de publicitate pentru afacerea ta.",
    url: "https://www.imprimaxsolutions.ro/blog",
    type: "website",
    locale: "ro_RO",
    siteName: "Imprimax Solutions",
  },
  twitter: {
    card: "summary",
    title: "Blog Imprimax Solutions",
    description: "Articole și sfaturi despre print digital și publicitate.",
  },
};

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
