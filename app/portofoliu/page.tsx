import Image from "next/image";
import { IconArrowDown, IconSparkles } from "@tabler/icons-react";
import { Spotlight } from "@/app/components/ui/spotlight-new";

const portfolioImages = [
  "/acasa/canvas-rick-morty.webp",
  "/acasa/canvas-barca.webp",
  "/acasa/exemplu-teren-1.webp",
  "/acasa/exemplu-teren-2.webp",
  "/acasa/exemplu-teren-3.webp",
  "/acasa/home.webp",
  ...Array.from({ length: 20 }, (_, index) => `/acasa/home (${index + 1}).webp`),
  ...[
    "proiect-01.jpg",
    "proiect-02.jpg",
    "proiect-03.jpg",
    "proiect-04.jpg",
    "proiect-05.jpg",
    "proiect-06.jpg",
    "proiect-07.jpg",
    "proiect-08.jpg",
    "proiect-09.jpg",
    "proiect-10.jpg",
    "proiect-11.jpg",
    "proiect-12.jpg",
    "proiect-13.jpg",
    "proiect-14.jpg",
    "proiect-15.jpg",
    "proiect-16.jpg",
    "proiect-17.jpg",
    "proiect-18.jpg",
    "proiect-19.jpg",
    "proiect-20.jpg",
    "proiect-21.jpg",
    "proiect-22.jpg",
    "proiect-23.jpg",
    "proiect-24.jpg",
    "proiect-25.jpg",
    "proiect-26.jpg",
    "proiect-27.jpg",
    "proiect-28.jpg",
    "proiect-29.jpg",
    "proiect-30.webp",
    "proiect-31.webp",
    "proiect-32.webp",
    "proiect-33.webp",
    "proiect-34.webp",
    "proiect-35.webp",
    "proiect-36.webp",
    "proiect-37.webp",
    "proiect-38.webp",
    "proiect-39.webp",
    "proiect-40.webp",
    "proiect-41.webp",
    "proiect-42.webp",
  ].map((filename) => `/portofoliu/${filename}`),
];

const Portofoliu = () => {
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
            IDEI CREATE, PRINTURI REALE
          </span>

          <h1 className="bg-gradient-to-b from-foreground via-foreground to-foreground/50 bg-clip-text text-5xl font-black tracking-tight text-transparent sm:text-6xl md:text-8xl">
            LUCRĂRILE NOASTRE
            <span className="mt-2 block bg-gradient-to-r from-sky-300 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              VORBESC DE LA SINE
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-relaxed text-foreground/70 md:text-xl">
            Descoperă o selecție de printuri și proiecte personalizate create
            cu grijă în atelierul Imprimax.
          </p>

          <a
            href="#galerie"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-sky-400 px-7 py-4 font-bold text-slate-950 shadow-lg shadow-sky-500/20 transition hover:-translate-y-0.5 hover:bg-sky-300"
          >
            DESCOPERĂ GALERIA
            <IconArrowDown size={20} aria-hidden="true" />
          </a>
        </div>
      </section>

      <section id="galerie" className="mt-20 w-full max-w-screen-2xl md:mt-28">
        <div className="mb-8">
          <p className="text-sm font-semibold tracking-[0.2em] text-sky-300">
            DIN ATELIERUL NOSTRU
          </p>
          <h2 className="mt-2 text-3xl font-bold md:text-4xl">
            PROIECTE CARE INSPIRĂ
          </h2>
        </div>

        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {portfolioImages.map((src, index) => (
            <li
              key={src}
              className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-foreground/[0.04]"
            >
              <Image
                src={src}
                alt={`Lucrare din portofoliul Imprimax ${index + 1}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1536px) 33vw, 25vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default Portofoliu;
