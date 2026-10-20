import { IconArrowUpRight, IconSparkles } from "@tabler/icons-react";
import { Spotlight } from "@/app/components/ui/spotlight-new";

const products = [
  "TRICOURI CLASICE",
  "STICKERE NELAMINATE",
  "STICKERE LAMINATE",
  "TRICOURI POLO",
  "AUTOCOLANTE",
  "PLĂCI PVC",
  "TRICOURI OVERSIZED",
  "BANNER",
  "TABLOURI CANVAS",
  "TRICOURILE TALE",
  "TABLOURI CU STICLĂ",
  "HANORACE & BLUZE",
];

const page = () => {
  return (
    <main className="my-24 flex flex-col items-center px-5 text-foreground md:my-32">
      <section className="relative isolate flex w-full max-w-7xl flex-col items-center overflow-hidden rounded-3xl border border-foreground/[0.08] bg-background/[0.9] px-5 py-20 text-center shadow-2xl shadow-blue-950/20 md:px-12 md:py-28">
        <div className="bg-grid-white/[0.03] pointer-events-none absolute inset-0 -z-10" />
        <Spotlight
          gradientFirst="radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(205, 90%, 60%, .18) 0, hsla(220, 90%, 45%, .08) 45%, transparent 80%)"
          gradientSecond="radial-gradient(50% 50% at 50% 50%, hsla(190, 90%, 60%, .08) 0, transparent 100%)"
          gradientThird="radial-gradient(50% 50% at 50% 50%, hsla(235, 90%, 65%, .1) 0, transparent 100%)"
        />

        <div className="relative z-10 flex max-w-4xl flex-col items-center">
          <span className="mb-7 inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-2 text-xs font-semibold tracking-[0.2em] text-sky-300">
            <IconSparkles size={16} aria-hidden="true" />
            IDEEA TA, PRINTUL NOSTRU
          </span>

          <h1 className="bg-gradient-to-b from-foreground via-foreground to-foreground/50 bg-clip-text text-5xl font-black tracking-tight text-transparent sm:text-6xl md:text-8xl">
            PRINT ÎN MORENI
            <span className="mt-2 block bg-gradient-to-r from-sky-300 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              PRODUSE PERSONALIZATE
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-relaxed text-foreground/70 md:text-xl">
            La atelierul Imprimax Solutions din Moreni, Cosmin Ivana și echipa
            realizează tricouri, stickere, autocolante, bannere, tablouri și
            alte produse personalizate.
          </p>

          <a
            href="https://wa.me/+40724274102"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-sky-400 px-7 py-4 font-bold text-slate-950 shadow-lg shadow-sky-500/20 transition hover:-translate-y-0.5 hover:bg-sky-300"
          >
            CERE O OFERTĂ PE WHATSAPP
            <IconArrowUpRight size={20} aria-hidden="true" />
          </a>
        </div>
      </section>

      <section className="mt-20 w-full max-w-7xl md:mt-28">
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold tracking-[0.2em] text-sky-300">
              GĂSEȘTE INSPIRAȚIA
            </p>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl">
              PRODUSE ȘI SERVICII DE PRINT ÎN DÂMBOVIȚA
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-foreground/60 sm:text-right">
            Alege ce ți se potrivește și hai să-l personalizăm exact cum îți
            dorești.
          </p>
        </div>

        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <li
              key={product}
              className="group relative flex min-h-36 items-center justify-between overflow-hidden rounded-2xl border border-foreground/[0.1] bg-foreground/[0.025] p-6 transition duration-300 hover:-translate-y-1 hover:border-sky-400/50 hover:bg-sky-400/[0.06] hover:shadow-xl hover:shadow-sky-950/20"
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -right-3 -top-8 select-none text-8xl font-black tracking-tighter text-foreground/[0.035] transition group-hover:text-sky-300/[0.12]"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="relative z-10 max-w-[80%] text-lg font-bold tracking-wide md:text-xl">
                {product}
              </span>
              <IconArrowUpRight
                size={22}
                aria-hidden="true"
                className="relative z-10 shrink-0 text-foreground/40 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-sky-300"
              />
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default page;
