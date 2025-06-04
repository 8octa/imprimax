"use client";
import { LucideSun, LucideMoon } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function ThemeToggleButton() {
  const [theme, setTheme] = useState(false);

  const toggleTheme = () => {
    if (!theme) {
      document.documentElement.classList.add("light");
      setTheme(true);
    } else {
      document.documentElement.classList.remove("light");
      setTheme(false);
    }
  };

  return (
    <span
      className="inline-block w-5 h-5 relative cursor-pointer"
      onClick={toggleTheme}
    >
      <AnimatePresence mode="wait">
        {theme ? (
          <motion.span
            key="moon"
            initial={{ opacity: 0, scale: 0.8, rotate: -30 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 1.2, rotate: 30 }}
            transition={{ duration: 0.3 }}
            whileHover={{
              scale: 1.2,
              transition: { duration: 0.3 },
            }}
            className="absolute top-0 left-0"
          >
            <LucideMoon size={20} />
          </motion.span>
        ) : (
          <motion.span
            key="sun"
            initial={{ opacity: 0, scale: 0.8, rotate: 30 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 1.2, rotate: -30 }}
            transition={{ duration: 0.3 }}
            whileHover={{
              scale: 1.2,
              transition: { duration: 0.3 },
            }}
            className="absolute top-0 left-0"
          >
            <LucideSun size={20} />
          </motion.span>
        )}
      </AnimatePresence>
    </span>
  );
}
