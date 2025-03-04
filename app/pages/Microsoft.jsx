"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const microsoftTech = [
  { name: "Word", img: "/word.png", url: "https://www.microsoft.com/en-us/microsoft-365/word" },
  { name: "Excel", img: "/excel.png", url: "https://www.microsoft.com/en-us/microsoft-365/excel" },
  { name: "PowerPoint", img: "/powerpoint.png", url: "https://www.microsoft.com/en-us/microsoft-365/powerpoint" },
];

export default function MicrosoftTech() {
  return (
    <section className="py-12 bg-black/5">
      <h2 className="text-center text-2xl font-semibold mb-8 text-white">Microsoft Tech</h2>

      <div className="flex justify-center gap-6">
        {microsoftTech.map((tech, index) => (
          <motion.a
            key={index}
            href={tech.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-24 h-24 bg-white rounded-lg mx-4"
            whileHover={{ scale: 1.2, rotate: 4 }}
            whileTap={{ scale: 0.9 }}
          >
            <Image src={tech.img} alt={tech.name} width={120} height={120} className="rounded-lg shadow-lg" />
          </motion.a>
        ))}
      </div>
    </section>
  );
}
