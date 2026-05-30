"use client";
import { motion } from "motion/react";
import ThemeToggleButton from "./ThemeToggleButton";
import { Phone, Mail, MapPin } from "lucide-react";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa6";

export default function HeaderBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.4,
        scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
      }}
      className="fixed top-0 left-0 z-1000 w-full bg-gradient-to-r from-[#4290fd] via-[#9500ff]
       to-[#4290fd] text-white px-10 py-1 text-xs lg:text-sm font-bold flex justify-center
        md:justify-between gap-10 items-center"
    >
      <div className="flex flex-row justify-center items-center gap-10">
        <ThemeToggleButton />
        <a href="tel:+40724274102">
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
            <p className="hidden xl:block">0724 274 102</p>
          </motion.div>
        </a>

        <a href="mailto:ivanacosmin1@gmail.com">
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
            <p className="hidden xl:block">ivanacosmin1@gmail.com</p>
          </motion.div>{" "}
        </a>
      </div>

      <div className="hidden absolute left-1/2 -translate-x-1/2 md:flex items-center text-center">
        <p className="shine-text-pulse tracking-wider rounded-lg cursor-default">
          Avem ofertă personalizată pentru orice idee <br />
        </p>
      </div>

      <div className="flex flex-row justify-center items-center gap-5">
        <a
          href="https://www.google.com/maps/place/Strada+Flac%C4%83ra+24,+135300+Moreni/@44.9848732,25.6368105,17z/data=!3m1!4b1!4m6!3m5!1s0x40b257b9aa49a71b:0x85863a310b618c7c!8m2!3d44.9848732!4d25.6393854!16s%2Fg%2F11csm7wvf3?entry=ttu&g_ep=EgoyMDI2MDUyNy4wIKXMDSoASAFQAw%3D%3D"
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
            <p className="hidden xl:block">Hai în atelier!</p>
          </motion.div>
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=61577033497907"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.div
            key="facebook"
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 1.2, rotate: 30 }}
            transition={{ duration: 0.3 }}
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.3 },
            }}
          >
            <FaFacebook strokeWidth={2.5} width={15} />
          </motion.div>
        </a>

        <a
          href="https://www.instagram.com/imprimax_solutions/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.div
            key="instagram"
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 1.2, rotate: 30 }}
            transition={{ duration: 0.3 }}
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.3 },
            }}
          >
            <FaInstagram strokeWidth={2.5} width={15} />
          </motion.div>
        </a>

        <a
          href="https://www.tiktok.com/@imprimax_solutions"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.div
            key="tiktok"
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 1.2, rotate: 30 }}
            transition={{ duration: 0.3 }}
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.3 },
            }}
          >
            <FaTiktok strokeWidth={2.5} width={15} />
          </motion.div>
        </a>
      </div>
    </motion.div>
  );
}
