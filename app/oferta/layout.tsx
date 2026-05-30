import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Oferta | Imprimax Solutions",
  description: "Ofertă Imprimax Solutions",
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
