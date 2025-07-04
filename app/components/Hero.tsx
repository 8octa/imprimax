"use client";

import Link from "next/link";
import Button from "@/app/components/Button";
import { Spotlight } from "@/app/components/ui/spotlight-new";

export function Hero() {
  return (
    <div className="h-[40rem] md:h-[60rem] w-full rounded-md flex flex-col items-center justify-center bg-background/[0.9] antialiased bg-grid-white/[0.02] relative overflow-hidden text-foreground shadow-sm shadow-black/10 inset-shadow-sm">
      <Spotlight />
      <div className="p-4 max-w-7xl mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/[0.5] bg-opacity-50">
          Dă culoare <br /> ideilor tale!
        </h1>
        <p className="my-10 font-normal text-base max-w-lg text-center mx-auto italic">
          Realizăm printuri și personalizări care transformă orice spațiu.
        </p>
      </div>
      <Link href={"/oferta"}>
        <Button text={"Solicită oferta"} />
      </Link>

      <p className="max-w-screen-md text-center mt-10 border border-foreground/[0.04] p-5 md:p-15">
        Imprimax Solutions e atelierul tău de încredere din Moreni pentru print
        digital, gravură și obiecte personalizate. Cu experiență tehnică în
        design și livrare rapidă, aducem ideile tale la viață.
      </p>
    </div>
  );
}
