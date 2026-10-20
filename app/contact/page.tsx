import Link from "next/link";
import {
  IconArrowDown,
  IconArrowUpRight,
  IconMail,
  IconMapPin,
  IconPhone,
  IconSparkles,
} from "@tabler/icons-react";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import { Spotlight } from "@/app/components/ui/spotlight-new";

const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61577033497907",
    icon: FaFacebook,
    className: "text-blue-400",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/imprimax_solutions/",
    icon: FaInstagram,
    className: "text-pink-400",
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@imprimax_solutions",
    icon: FaTiktok,
    className: "text-foreground",
  },
];

const contactDetails = [
  {
    label: "SUNĂ-NE",
    value: "0724 274 102",
    href: "tel:+40724274102",
    icon: IconPhone,
  },
  {
    label: "SCRIE-NE",
    value: "ivanacosmin1@gmail.com",
    href: "mailto:ivanacosmin1@gmail.com",
    icon: IconMail,
  },
  {
    label: "VIZITEAZĂ-NE",
    value: "Strada Flacăra 24, Moreni, 135300, Dâmbovița",
    href: "https://www.google.com/maps/place/Strada+Flac%C4%83ra+24,+135300+Moreni/@44.9848732,25.6368105,17z/data=!3m1!4b1!4m6!3m5!1s0x40b257b9aa49a71b:0x85863a310b618c7c!8m2!3d44.9848732!4d25.6393854!16s%2Fg%2F11csm7wvf3?entry=ttu&g_ep=EgoyMDI2MDUyNy4wIKXMDSoASAFQAw%3D%3D",
    icon: IconMapPin,
  },
];

const page = () => {
  return (
    <main className="my-24 flex flex-col items-center px-5 text-foreground md:my-32">
      <section className="relative isolate flex w-full max-w-7xl flex-col items-center overflow-hidden rounded-3xl border border-foreground/[0.08] bg-background/[0.9] px-5 py-20 text-center shadow-2xl shadow-blue-950/20 md:px-12 md:py-28">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-grid-white/[0.03]" />
        <Spotlight
          gradientFirst="radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(205, 90%, 60%, .18) 0, hsla(220, 90%, 45%, .08) 45%, transparent 80%)"
          gradientSecond="radial-gradient(50% 50% at 50% 50%, hsla(190, 90%, 60%, .08) 0, transparent 100%)"
          gradientThird="radial-gradient(50% 50% at 50% 50%, hsla(235, 90%, 65%, .1) 0, transparent 100%)"
        />

        <div className="relative z-10 flex max-w-4xl flex-col items-center">
          <span className="mb-7 inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-2 text-xs font-semibold tracking-[0.2em] text-sky-300">
            <IconSparkles size={16} aria-hidden="true" />
            HAI SĂ CREĂM CEVA ÎMPREUNĂ
          </span>

          <h1 className="bg-gradient-to-b from-foreground via-foreground to-foreground/50 bg-clip-text text-5xl font-black tracking-tight text-transparent sm:text-6xl md:text-8xl">
            AI O IDEE?
            <span className="mt-2 block bg-gradient-to-r from-sky-300 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              HAI SĂ VORBIM.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-relaxed text-foreground/70 md:text-xl">
            Spune-ne ce ai în minte. Te ajutăm să găsești soluția potrivită
            pentru proiectul tău de print sau personalizare.
          </p>

          <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row">
            <a
              href="#contact-details"
              className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-7 py-4 font-bold transition hover:border-sky-300/60 hover:text-sky-300"
            >
              CONTACTEAZĂ-NE
              <IconArrowDown size={20} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <section
        id="contact-details"
        className="mt-20 w-full max-w-7xl scroll-mt-28 md:mt-28"
      >
        <div className="mb-8">
          <p className="text-sm font-semibold tracking-[0.2em] text-sky-300">
            SUNTEM AICI PENTRU TINE
          </p>
          <h2 className="mt-2 text-3xl font-bold md:text-4xl">
            IA LEGĂTURA CU NOI
          </h2>
        </div>

        <ul className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {contactDetails.map(({ label, value, href, icon: Icon }) => (
            <li key={label}>
              <a
                href={href}
                target={href.startsWith("https://") ? "_blank" : undefined}
                rel={
                  href.startsWith("https://")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="group flex h-full min-h-36 items-center gap-5 rounded-2xl border border-foreground/[0.1] bg-foreground/[0.025] p-6 transition hover:-translate-y-1 hover:border-sky-400/50 hover:bg-sky-400/[0.06]"
              >
                <Icon
                  size={28}
                  aria-hidden="true"
                  className="shrink-0 text-sky-300"
                />
                <span className="min-w-0">
                  <span className="block text-xs font-semibold tracking-[0.18em] text-foreground/50">
                    {label}
                  </span>
                  <span className="mt-2 block break-words font-semibold transition group-hover:text-sky-300">
                    {value}
                  </span>
                </span>
                <IconArrowUpRight
                  size={20}
                  aria-hidden="true"
                  className="ml-auto shrink-0 text-foreground/40 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-sky-300"
                />
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-col gap-5 rounded-2xl border border-foreground/[0.1] bg-foreground/[0.025] p-6 sm:flex-row sm:items-center sm:justify-between md:p-8">
          <div>
            <p className="text-xs font-semibold tracking-[0.18em] text-sky-300">
              URMĂREȘTE-NE
            </p>
            <h2 className="mt-2 text-xl font-bold">
              Vezi ce mai creăm pe social media
            </h2>
          </div>
          <ul className="flex items-center gap-3">
            {socialLinks.map(({ name, href, icon: Icon, className }) => (
              <li key={name}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="flex size-12 items-center justify-center rounded-full border border-foreground/10 bg-background/50 transition hover:-translate-y-1 hover:border-sky-400/40 hover:bg-sky-400/10"
                >
                  <Icon size={22} className={className} aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
};

export default page;
