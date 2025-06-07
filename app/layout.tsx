import type { Metadata } from "next";
import "./globals.css";
import { Poppins, Geist } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const geist = Geist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-geist",
});

export const metadata: Metadata = {
  title: "Imprimax Solutions",
  description: "Printing Solutions for Your Business",
  icons: {
    icon: "/sigla.svg",
  },
  openGraph: {
    title: "Imprimax Solutions",
    description: "Printing Solutions for Your Business",
    url: "https://imprimax-solutions.com",
    images: ["sigla-vector.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Imprimax Solutions",
    description: "Printing Solutions for Your Business",
    images: ["sigla-vector.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.className} suppressHydrationWarning>
      <body className={geist.variable}>{children}</body>
    </html>
  );
}
