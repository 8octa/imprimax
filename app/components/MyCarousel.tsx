"use client";

import { Carousel } from "./ui/carousel";
export function MyCarousel() {
  const slideData = [
    {
      title: "Tablu canvas Rick and Morty",
      src: "/acasa/canvas-rick-morty.webp",
    },
    {
      title: "Tablu canvas barca",
      src: "/acasa/canvas-barca.webp",
    },
    {
      title: "Exemplu teren",
      src: "/acasa/exemplu-teren-1.webp",
    },
    {
      title: "Exemplu teren",
      src: "/acasa/exemplu-teren-2.webp",
    },
    {
      title: "Exemplu teren",
      src: "/acasa/exemplu-teren-3.webp",
    },
  ];
  return (
    <div className="relative overflow-hidden w-full h-full py-30">
      <Carousel slides={slideData} />
    </div>
  );
}
