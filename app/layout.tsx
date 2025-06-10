import "./globals.css";
import type { Metadata } from "next";
import { Poppins, Geist } from "next/font/google";
import HeaderBanner from "./components/HeaderBanner";





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
    url: "https://imprimaxsolutions.com",
    images: ["sigla.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Imprimax Solutions",
    description: "Printing Solutions for Your Business",
    images: ["sigla.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.className} suppressHydrationWarning>
      <body className={geist.variable}>
        {children}
        <HeaderBanner />
      </body>
    </html>
  );
}
