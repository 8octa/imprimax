"use client";

import Link from "next/link";
import Button from "@/app/components/Button";
import { Spotlight } from "@/app/components/ui/spotlight-new";

export function Hero() {
  return (
    <div className="h-[40rem] mt-[2rem] md:h-[55rem] w-full rounded-md flex flex-col items-center justify-center bg-background/[0.9] antialiased bg-grid-white/[0.02] relative overflow-hidden text-foreground shadow-sm shadow-black/10 inset-shadow-sm">
      <Spotlight />
      <div className="p-4 max-w-7xl mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/[0.5] bg-opacity-50">
          Print în Moreni și produse personalizate
        </h1>
        <p className="my-10 font-normal text-base max-w-lg text-center mx-auto italic">
          Print digital, tricouri, bannere, stickere și tablouri canvas în
          Moreni, județul Dâmbovița.
        </p>
      </div>
      <Link href={"/contact"}>
        <Button text={"Solicită oferta"} />
      </Link>

      <p className="max-w-screen-md text-center mt-10 border border-foreground/[0.04] p-5 md:p-15">
        Imprimax Solutions este atelierul tău de print din Moreni, la Strada
        Flacăra 24, cod poștal 135300. Realizăm print digital, gravură și
        produse personalizate pentru clienți din Dâmbovița și din toată România.
      </p>
    </div>
  );
}
