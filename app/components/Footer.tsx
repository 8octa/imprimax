import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
  Printer,
} from "lucide-react";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

const navigationLinks = [
  { label: "Despre noi", href: "/despre" },
  { label: "Produse și servicii", href: "/produse" },
  { label: "Portofoliu", href: "/portofoliu" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const services = [
  "Print și personalizare textile",
  "Bannere și materiale publicitare",
  "Stickere și autocolante",
  "Tablouri canvas",
];

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61577033497907",
    icon: FaFacebook,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/imprimax_solutions/",
    icon: FaInstagram,
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@imprimax_solutions",
    icon: FaTiktok,
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-foreground/10 bg-background text-foreground">
      <div className="mx-auto w-full max-w-screen-2xl px-5 py-12 md:px-10 md:py-16">
        <div className="relative isolate mb-14 overflow-hidden rounded-3xl border border-blue-700/20 bg-gradient-to-r from-blue-500/15 via-blue-500/10 to-indigo-500/15 p-7 md:p-10 dark:border-sky-300/20 dark:from-sky-500/15 dark:via-blue-500/10 dark:to-indigo-500/15">
          <div className="pointer-events-none absolute -right-12 -top-24 -z-10 size-72 rounded-full bg-blue-500/15 blur-3xl dark:bg-sky-400/15" />
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold tracking-[0.2em] text-blue-700 dark:text-sky-300">
                IDEEA TA MERITĂ SĂ FIE VĂZUTĂ
              </p>
              <h2 className="mt-3 text-2xl font-bold md:text-4xl">
                Hai să-i dăm viață prin print.
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-foreground/70 md:text-base">
                Spune-ne ce ai nevoie și găsim împreună soluția potrivită pentru
                proiectul tău.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full bg-sky-400 px-6 py-3 font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-sky-300"
            >
              SOLICITĂ O OFERTĂ
              <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" aria-label="Imprimax Solutions - pagina principală">
              <Image
                src="/sigla.png"
                alt="Imprimax Solutions"
                width={160}
                height={84}
                className="h-16 w-auto object-contain object-left"
              />
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-foreground/60">
              Print digital și personalizări care transformă ideile tale în
              creații memorabile.
            </p>
            <ul className="mt-5 flex items-center gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex size-10 items-center justify-center rounded-full border border-foreground/10 text-foreground/70 transition hover:border-sky-300/50 hover:bg-sky-300/10 hover:text-sky-300"
                  >
                    <Icon size={18} aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <nav aria-label="Navigare în subsol">
            <h2             className="text-sm font-bold tracking-[0.16em] text-blue-700 dark:text-sky-300">
              DESCOPERĂ
            </h2>
            <ul className="mt-5 space-y-3">
              {navigationLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-foreground/65 transition hover:text-blue-700 dark:hover:text-sky-300"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-sm font-bold tracking-[0.16em] text-blue-700 dark:text-sky-300">
              CE PUTEM CREA
            </h2>
            <ul className="mt-5 space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="/produse"
                    className="inline-flex items-center gap-2 text-sm text-foreground/65 transition hover:text-blue-700 dark:hover:text-sky-300"
                  >
                    <Printer
                      size={14}
                      aria-hidden="true"
                      className="shrink-0 text-blue-700/80 dark:text-sky-300/70"
                    />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <address className="not-italic">
            <h2             className="text-sm font-bold tracking-[0.16em] text-blue-700 dark:text-sky-300">
              VORBIM?
            </h2>
            <ul className="mt-5 space-y-4">
              <li>
                <a
                  href="tel:+40724274102"
                  className="inline-flex items-center gap-3 text-sm text-foreground/65 transition hover:text-blue-700 dark:hover:text-sky-300"
                >
                  <Phone
                    size={16}
                    aria-hidden="true"
                    className="shrink-0 text-sky-300"
                  />
                  0724 274 102
                </a>
              </li>
              <li>
                <a
                  href="mailto:ivanacosmin1@gmail.com"
                  className="inline-flex items-center gap-3 break-all text-sm text-foreground/65 transition hover:text-blue-700 dark:hover:text-sky-300"
                >
                  <Mail
                    size={16}
                    aria-hidden="true"
                    className="shrink-0 text-sky-300"
                  />
                  ivanacosmin1@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.google.com/maps/place/Strada+Flac%C4%83ra+24,+135300+Moreni/@44.9848732,25.6368105,17z/data=!3m1!4b1!4m6!3m5!1s0x40b257b9aa49a71b:0x85863a310b618c7c!8m2!3d44.9848732!4d25.6393854!16s%2Fg%2F11csm7wvf3?entry=ttu&g_ep=EgoyMDI2MDUyNy4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-start gap-3 text-sm text-foreground/65 transition hover:text-blue-700 dark:hover:text-sky-300"
                >
                  <MapPin
                    size={16}
                    aria-hidden="true"
                    className="mt-0.5 shrink-0 text-sky-300"
                  />
                  Strada Flacăra 24, Moreni, 135300
                </a>
              </li>
            </ul>
          </address>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-foreground/10 pt-6 text-xs text-foreground/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} Imprimax Solutions. Toate drepturile rezervate.</p>
          <p>Realizat cu grijă în Moreni.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
