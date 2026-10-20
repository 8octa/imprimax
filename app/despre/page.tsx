import React from "react";
import { Feature } from "../components/Feature";
import { IconArrowDown, IconSparkles } from "@tabler/icons-react";
import { Spotlight } from "@/app/components/ui/spotlight-new";

const Despre = () => {
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
            CREATIVITATE, PRECIZIE ȘI PASIUNE
          </span>

          <h1 className="bg-gradient-to-b from-foreground via-foreground to-foreground/50 bg-clip-text text-5xl font-black tracking-tight text-transparent sm:text-6xl md:text-8xl">
            IDEILE TALE
            <span className="mt-2 block bg-gradient-to-r from-sky-300 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              PRIND VIAȚĂ.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-relaxed text-foreground/70 md:text-xl">
            Suntem Imprimax Solutions, atelierul de print din Moreni. Cosmin
            Ivana și echipa transformă ideile clienților din Dâmbovița și din
            toată România în produse personalizate.
          </p>

          <a
            href="#povestea-noastra"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-sky-400 px-7 py-4 font-bold text-slate-950 shadow-lg shadow-sky-500/20 transition hover:-translate-y-0.5 hover:bg-sky-300"
          >
            POVESTEA NOASTRĂ
            <IconArrowDown size={20} aria-hidden="true" />
          </a>
        </div>
      </section>

      <Feature />
    </main>
  );
};

export default Despre;
