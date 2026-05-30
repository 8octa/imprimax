import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Imprimax Solutions",
  description: "Contact Imprimax Solutions",
};

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <>{children}</>
  );
}
