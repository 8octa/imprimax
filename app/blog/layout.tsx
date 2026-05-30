import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog| Imprimax Solutions",
  description: "Blogul Imprimax Solutions, unde găsești articole despre soluții de imprimare, inovații și sfaturi utile pentru afacerea ta.",
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
