"use client";
import React from "react";
import Button from "../components/Button";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

const page = () => {
  return (
    <section className="flex flex-col justify-center items-center max-w-screen-xl p-10 mt-[10rem] md:mt-[15rem] mx-auto text-foreground">
      <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/[0.5] bg-opacity-50 my-5">
        Contact
      </h1>

      <section className="flex flex-col items-center justify-center text-center gap-10 py-15">
        <span className="text-3xl lg:text-5xl">
          Vizitați-ne pe paginile noastre:
        </span>
        <div className="flex flex-col md:flex-row gap-10 md:gap-0 justify-between w-full items-center my-10">
          <a
            className="cursor-pointer"
            href="https://www.facebook.com/profile.php?id=61577033497907"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook
              className="inline-block ml-2 text-blue-500"
              size={100}
            />
          </a>

          <a
            href="https://www.instagram.com/imprimax_solutions/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram
              className="inline-block ml-2 text-pink-500"
              size={100}
            />
          </a>
          <a
            href="https://www.tiktok.com/@cosmin.ivana"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <FaTiktok className="inline-block ml-2" size={100} />
          </a>
        </div>
      </section>

      <Link href={"/oferta"}>
        <Button text={"Solicită oferta"} />
      </Link>
    </section>
  );
};

export default page;
