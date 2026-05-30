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
    {
      title: "Exemplu teren",
      src: "/acasa/home (1).webp",
    },
    {
      title: "Exemplu teren",
      src: "/acasa/home (2).webp",
    },
    {
      title: "Exemplu teren",
      src: "/acasa/home (3).webp",
    },
    {
      title: "Exemplu teren",
      src: "/acasa/home (4).webp",
    },
    {
      title: "Exemplu teren",
      src: "/acasa/home (5).webp",
    },
    {
      title: "Exemplu teren",
      src: "/acasa/home (6).webp",
    },
    {
      title: "Exemplu teren",
      src: "/acasa/home (7).webp",
    },
    {
      title: "Exemplu teren",
      src: "/acasa/home (8).webp",
    },
    {
      title: "Exemplu teren",
      src: "/acasa/home (9).webp",
    },
    {
      title: "Exemplu teren",
      src: "/acasa/home (10).webp",
    },
    {
      title: "Exemplu teren",
      src: "/acasa/home (11).webp",
    },
    {
      title: "Exemplu teren",
      src: "/acasa/home (12).webp",
    },
    {
      title: "Exemplu teren",
      src: "/acasa/home (13).webp",
    },
    {
      title: "Exemplu teren",
      src: "/acasa/home (14).webp",
    },
    {
      title: "Exemplu teren",
      src: "/acasa/home (15).webp",
    },
    {
      title: "Exemplu teren",
      src: "/acasa/home (16).webp",
    },
    {
      title: "Exemplu teren",
      src: "/acasa/home (17).webp",
    },
    {
      title: "Exemplu teren",
      src: "/acasa/home (18).webp",
    },
    {
      title: "Exemplu teren",
      src: "/acasa/home (19).webp",
    },
    {
      title: "Exemplu teren",
      src: "/acasa/home (20).webp",
    },
  ];
  return (
    <div className="relative overflow-hidden w-full h-full py-30">
      <Carousel slides={slideData} />
    </div>
  );
}
