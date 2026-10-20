import "./globals.css";
import type { Metadata } from "next";
import { Poppins, Geist } from "next/font/google";
import HeaderBanner from "./components/HeaderBanner";
import Menu from "./components/Menu";
import Footer from "./components/Footer";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.imprimaxsolutions.ro/#localbusiness",
  name: "Imprimax Solutions",
  url: "https://www.imprimaxsolutions.ro",
  logo: {
    "@type": "ImageObject",
    url: "https://www.imprimaxsolutions.ro/sigla.png",
    width: 1200,
    height: 630,
  },
  email: "ivanacosmin1@gmail.com",
  telephone: "+40724274102",
  address: {
    "@type": "PostalAddress",
    addressCountry: "RO",
    streetAddress: "Strada Flacăra 24",
    addressLocality: "Moreni",
    addressRegion: "Dâmbovița",
    postalCode: "135300",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 44.9848732,
    longitude: 25.6393854,
  },
  areaServed: [
    { "@type": "City", name: "Moreni" },
    { "@type": "AdministrativeArea", name: "Dâmbovița" },
    { "@type": "Country", name: "România" },
  ],
  sameAs: [
    "https://www.facebook.com/profile.php?id=61577033497907",
    "https://www.instagram.com/imprimax_solutions/",
    "https://www.tiktok.com/@imprimax_solutions",
  ],
  description:
    "Atelier de print digital și producție publicitară în Moreni, județul Dâmbovița. Bannere, autocolante, textile și produse personalizate.",
  foundingDate: "1999",
  priceRange: "$$",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Produse și servicii de print Imprimax Solutions",
    itemListElement: [
      "Tricouri clasice",
      "Stickere nelaminate",
      "Stickere laminate",
      "Tricouri polo",
      "Autocolante",
      "Plăci PVC",
      "Tricouri oversized",
      "Bannere",
      "Tablouri canvas",
      "Tricourile tale",
      "Tablouri cu sticlă",
      "Hanorace și bluze",
    ].map((name) => ({
      "@type": "OfferCatalog",
      name,
    })),
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.imprimaxsolutions.ro/#organization",
  name: "Imprimax Solutions",
  url: "https://www.imprimaxsolutions.ro",
  logo: "https://www.imprimaxsolutions.ro/sigla.png",
  description:
    "Atelier de print digital și producție publicitară din Moreni, Dâmbovița.",
  email: "ivanacosmin1@gmail.com",
  telephone: "+40724274102",
  sameAs: [
    "https://www.facebook.com/profile.php?id=61577033497907",
    "https://www.instagram.com/imprimax_solutions/",
    "https://www.tiktok.com/@imprimax_solutions",
  ],
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
    default: "Print în Moreni, Dâmbovița | Imprimax Solutions",
    template: "%s | Imprimax Solutions",
  },

  description:
    "Imprimax Solutions oferă print digital în Moreni, județul Dâmbovița (135300): tricouri personalizate, bannere, stickere, autocolante și tablouri canvas. Sună pentru o ofertă.",

  keywords: [
    "print digital",
    "productie publicitara",
    "print Moreni",
    "print Dâmbovița",
    "print România",
    "print Ivana",
    "Cosmin Ivana",
    "Ivana",
    "print 135300",
    "print digital Moreni",
    "tipografie Moreni",
    "producție publicitară Moreni",
    "tricouri clasice",
    "stickere nelaminate",
    "stickere laminate",
    "tricouri polo",
    "autocolante",
    "plăci PVC",
    "tricouri oversized",
    "bannere",
    "tablouri canvas",
    "tricourile tale",
    "tricouri personalizate",
    "tablouri cu sticlă",
    "hanorace și bluze",
    "print personalizat Moreni",
    "personalizare textile",
    "publicitate vizuală",
    "design grafic Moreni",
    "materiale promoționale Moreni",
    "bannere moreni",
    "autocolante moreni",
    "tricouri personalizate moreni",
    "Moreni Dâmbovița 135300",
  ],

  authors: [{ name: "Imprimax Solutions" }],
  creator: "Imprimax Solutions",
  publisher: "Imprimax Solutions",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Print în Moreni, Dâmbovița | Imprimax Solutions",
    description:
      "Print digital, tricouri personalizate, bannere, stickere și tablouri canvas în Moreni, Dâmbovița. Atelier Imprimax Solutions, Strada Flacăra 24, 135300.",
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
    title: "Print în Moreni, Dâmbovița | Imprimax Solutions",
    description:
      "Print digital și produse personalizate în Moreni, Dâmbovița. Cere o ofertă de la Imprimax Solutions.",
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
            __html: JSON.stringify([structuredData, organizationSchema]),
          }}
        />
      </body>
    </html>
  );
}
