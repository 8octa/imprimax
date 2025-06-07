import React from "react";
import { MacbookScroll } from "./ui/macbook-scroll";

export function MacbookHero() {
  return (
    <div id="hero" className="overflow-hidden bg-background w-full">
      <MacbookScroll
        title={
          <span>
            This Macbook is built with Tailwindcss. <br /> No kidding.
          </span>
        }
        src={`/PNG SIGLA.png`}
        showGradient={false}
      />
    </div>
  );
}
