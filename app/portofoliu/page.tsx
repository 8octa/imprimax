"use client";

import { useState } from "react";
import Image from "next/image";

const categories = ["Toate", "Bannere", "Promo", "Gravare"];

const projects = [
  {
    title: "Good Vibes Travel",
    description: "Banner personalizat",
    category: "Bannere",
    before: "/despre/cosmin-atelier.webp",
    after: "/despre/cosmin-atelier.webp",
    clientLogo: "/file.svg",
  },
  {
    title: "Good Vibes Travel",
    description: "Canvas personalizat",
    category: "Canvas",
    image: "/despre/cosmin-atelier.webp",
    clientLogo: "/file.svg",
  },
  {
    title: "Good Vibes Travel",
    description: "Colant personalizat",
    category: "Colant",
    before: "/despre/cosmin-atelier.webp",
    after: "/despre/cosmin-atelier.webp",
    clientLogo: "/file.svg",
  },
  // Adaugă mai multe proiecte aici...
];

const Portofoliu = () => {
  const [selectedCategory, setSelectedCategory] = useState("Toate");

  const filteredProjects =
    selectedCategory === "Toate"
      ? projects
      : projects.filter((parameter) => parameter.category === selectedCategory);

  return (
    <section className="text-foreground flex flex-col justify-center items-center w-full pb-10 my-50">
      <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/[0.5] bg-opacity-50 mt-25">
        Portofoliu
      </h1>
      <h2 className="text-2xl md:text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/[0.5] bg-opacity-50 my-10 mb-25">
        Lucrările noastre vorbesc de la sine
      </h2>

      <div className="flex gap-4 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`px-4 py-2 rounded cursor-pointer ${
              selectedCategory === cat
                ? "bg-red text-foreground"
                : "bg-foreground text-black"
            }`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="flex flex-wrap gap-10 justify-center">
        {filteredProjects.map((project, idx) => (
          <div
            key={idx}
            className="border border-gray-600 rounded-lg shadow-md p-6 w-full md:w-[50vw] flex flex-col items-center"
          >
            {project.before && project.after ? (
              <div className="flex flex-col md:flex-row gap-10 mb-10">
                <div>
                  <Image
                    src={project.before}
                    alt="Înainte"
                    width={500}
                    height={500}
                    className="object-cover rounded"
                  />
                  <p className="text-xs text-center mt-1 opacity-50">Înainte</p>
                </div>
                <div>
                  <Image
                    src={project.after}
                    alt="După"
                    width={500}
                    height={500}
                    className="object-cover rounded"
                  />
                  <p className="text-xs text-center mt-1 opacity-50">După</p>
                </div>
              </div>
            ) : (
              <Image
                src={project.image ?? ""}
                alt={project.title}
                width={500}
                height={500}
                className="object-cover rounded mb-10"
              />
            )}
            <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
            <p className="mb-4 text-center">{project.description}</p>
            {project.clientLogo && (
              <Image
                src={project.clientLogo}
                alt="Client Logo"
                width={64}
                height={32}
                className="h-8 mb-2"
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portofoliu;
