import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Despre | Imprimax Solutions",
  description: "Informații despre Imprimax Solutions, expertiza și serviciile noastre de imprimare.",
};

export default function DespreLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <>{children}</>
  );
}
