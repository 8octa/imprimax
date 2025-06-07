"use client";
import { motion } from "motion/react";
import ThemeToggleButton from "./ThemeToggleButton";
import { Phone, Mail, MapPin } from "lucide-react";

export default function HeaderBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.4,
        scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
      }}
      className="fixed top-0 left-0 z-1000 w-full bg-gradient-to-r from-[#4290fd] via-[#193a58]
       to-[#4290fd] text-white px-10 py-2 text-xs lg:text-sm font-bold flex justify-center
        md:justify-between gap-10 items-center"
    >
      <div className="flex flex-row justify-center items-center gap-10">
        <ThemeToggleButton />
        <a href="tel:+">
          <motion.div
            key="phone"
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 1.2, rotate: 30 }}
            transition={{ duration: 0.3 }}
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.3 },
            }}
            className="flex items-center gap-1"
          >
            <Phone strokeWidth={2.5} width={15} fill="white" />
            <p className="hidden xl:block">0730 768 123</p>
          </motion.div>
        </a>

        <a href="mailto:">
          <motion.div
            key="mail"
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 1.2, rotate: 30 }}
            transition={{ duration: 0.3 }}
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.3 },
            }}
            className="flex items-center gap-1"
          >
            <Mail strokeWidth={2.5} width={15} />
            <p className="hidden xl:block">print@gmail.com</p>
          </motion.div>{" "}
        </a>
      </div>

      <div className="hidden absolute left-1/2 -translate-x-1/2 md:flex items-center text-center font-geist">
        <p className="shine-text-pulse tracking-wider rounded-lg cursor-default">
          Transport gratuit la comenzile de peste 1000 RON
        </p>
      </div>

      <a
        href="https://www.google.com/maps/place/Mobila+Moreni+Elit+Parc/@44.9849227,25.6401875,20.5z/data=!4m16!1m9!3m8!1s0x40b257b84fcea415:0xf366654a82a49664!2sMobila+Moreni+Elit+Parc!8m2!3d44.9849337!4d25.640312!9m1!1b1!16s%2Fg%2F11b6sydf1w!3m5!1s0x40b257b84fcea415:0xf366654a82a49664!8m2!3d44.9849337!4d25.640312!16s%2Fg%2F11b6sydf1w?entry=ttu&g_ep=EgoyMDI1MDUyOC4wIKXMDSoASAFQAw%3D%3D"
        target="_blank"
      >
        <motion.div
          key="location"
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          exit={{ opacity: 0, scale: 1.2, rotate: 30 }}
          transition={{ duration: 0.3 }}
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.3 },
          }}
          className="flex items-center gap-1"
        >
          <MapPin strokeWidth={2.5} width={15} />
          <p className="hidden xl:block">Vino în locație</p>
        </motion.div>
      </a>
    </motion.div>
  );
}
