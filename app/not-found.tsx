"use client";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <motion.h1
        className="text-9xl font-bold mb-4"
        initial={{ rotate: -10, scale: 0.8 }}
        animate={{ rotate: [0, 20, -20, 0], scale: [1, 1.2, 0.9, 1] }}
        transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
      >
        404
      </motion.h1>
      <p className="text-3xl my-8">Pagina nu a fost găsită. Ne pare rau!</p>
      <button
        onClick={() => router.back()}
        className="text-blue-600 underline cursor-pointer"
      >
        Înapoi la pagina anterioară
      </button>
    </div>
  );
}