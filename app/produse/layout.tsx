import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Produse și Servicii | Imprimax Solutions",
  description: "Produse și servicii oferite de Imprimax Solutions",
};

export default function OfertaLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <>{children}</>
  );
}
