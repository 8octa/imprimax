"use client";
import React from "react";
import { Spotlight } from "../components/ui/spotlight-new";
import Button from "../components/Button";
import Link from "next/link";

export function Hero() {
  return (
    <div className="h-[55rem] w-full rounded-md flex flex-col items-center justify-center bg-background/[0.9] antialiased bg-grid-white/[0.02] relative overflow-hidden text-foreground">
      <Spotlight />
      <div className="p-4 max-w-7xl mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/[0.5] bg-opacity-50">
          Dă culoare <br /> ideilor tale!
        </h1>
        <p className="my-10 font-normal text-base max-w-lg text-center mx-auto italic">
          Realizăm printuri și personalizări care transformă orice spațiu.
        </p>
      </div>
      <Link href={"/form"}>
        <Button text={"Solicită oferta"} />
      </Link>

      <p className="max-w-screen-lg text-center mt-10 border border-foreground/[0.04] p-5 md:p-15">
        Imprimax Solutions e atelierul tău de încredere din Moreni pentru print
        digital, gravură și obiecte personalizate. Cu experiență tehnică în
        design și livrare rapidă, aducem ideile tale la viață.
      </p>
    </div>
  );
}
