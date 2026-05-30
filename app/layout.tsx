import "./globals.css";
import type { Metadata } from "next";
import { Poppins, Geist } from "next/font/google";
import HeaderBanner from "./components/HeaderBanner";
import Menu from "./components/Menu";
import Footer from "./components/Footer";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Imprimax Solutions",
  url: "https://www.imprimaxsolutions.ro",
  logo: "https://www.imprimaxsolutions.ro/sigla.png",
  email: "ivanacosmin1@gmail.com",
  telephone: "+40724274102",
  address: {
    "@type": "PostalAddress",
    addressCountry: "RO",
  },
};

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
  metadataBase: new URL("https://www.imprimaxsolutions.ro"),

  title: {
    default: "Print Digital si Productie Publicitara | Imprimax Solutions",
    template: "%s | Imprimax Solutions",
  },

  description:
    "Servicii de print digital, productie publicitara, bannere, autocolante, materiale promotionale si personalizari pentru companii.",

  keywords: [
    "print digital",
    "productie publicitara",
    "bannere",
    "autocolante",
    "materiale promotionale",
    "personalizare produse",
    "print Dambovita",
    "print Romania",
  ],

  authors: [{ name: "Imprimax Solutions" }],
  creator: "Imprimax Solutions",
  publisher: "Imprimax Solutions",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Imprimax Solutions",
    description:
      "Servicii profesionale de print digital si productie publicitara.",
    url: "https://www.imprimaxsolutions.ro",
    siteName: "Imprimax Solutions",
    locale: "ro_RO",
    type: "website",
    images: [
      {
        url: "/sigla.png",
        width: 1200,
        height: 630,
        alt: "Imprimax Solutions",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Imprimax Solutions",
    description:
      "Servicii profesionale de print digital si productie publicitara.",
    images: ["/sigla.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ro"
      className={`${poppins.className} ${geist.variable} bg-background text-foreground`}
      suppressHydrationWarning
    >
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body suppressHydrationWarning>
        <HeaderBanner />
        <Menu />
        {children}
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </body>
    </html>
  );
}
