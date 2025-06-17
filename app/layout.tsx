import "./globals.css";
import type { Metadata } from "next";
import { Poppins, Geist } from "next/font/google";
import HeaderBanner from "./components/HeaderBanner";
import Menu from "./components/Menu";
import Footer from "./components/Footer";

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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.className} suppressHydrationWarning>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body suppressHydrationWarning className={geist.variable}>
        <HeaderBanner />
        <Menu />
        {children}

        <Footer />
      </body>
    </html>
  );
}
