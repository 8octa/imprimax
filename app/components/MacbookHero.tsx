import React from "react";
import { MacbookScroll } from "./ui/macbook-scroll";

export function MacbookHero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-background w-full"
    >
      <MacbookScroll
        title={
          <span className="text-3xl">
            This Macbook is built with Tailwindcss. <br /> No kidding.
          </span>
        }
        src={`/sigla.svg`}
        showGradient={false}
      />
    </section>
  );
}
