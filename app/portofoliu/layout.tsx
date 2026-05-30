import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portofoliu | Imprimax Solutions",
  description: "Portofoliul nostru cu cele mai bune lucrări de imprimare și design.",
};

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <>{children}</>
  );
}
