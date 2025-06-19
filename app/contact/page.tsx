"use client";
import React from "react";
import Button from "../components/Button";
import Link from "next/link";
import GoogleMapComponent from "../components/GoogleMapComponent";

const page = () => {
  return (
    <section className="flex flex-col justify-center items-center max-w-screen-xl p-10 mt-[10rem] md:mt-[15rem] mx-auto text-foreground">
      <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/[0.5] bg-opacity-50">
        Contact
      </h1>

      <GoogleMapComponent />

      <Link href={"/contact"}>
        <Button text={"Solicită oferta"} />
      </Link>
    </section>
  );
};

export default page;
