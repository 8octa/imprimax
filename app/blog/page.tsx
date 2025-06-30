import React from "react";
import Article from "../components/Article";
import articol1 from "../../jsons/articole/articol1.json";

const page = () => {
  return (
    <article className="my-50 text-foreground flex flex-col items-center justify-center">
      <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/[0.5] bg-opacity-50">
        Articole
      </h1>
      <Article articol1={articol1} />
    </article>
  );
};

export default page;
