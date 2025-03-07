"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import LGElevatedButton from "../components/LGElevatedButton";

export default function Hero() {
  return (
    <div className="bg-black/5 w-full">
      <section
        id="home"
        className="relative flex flex-col items-center text-center py-20 px-6 bg-background lg:rounded-b-custom rounded-b-custom_phone"
      >
        {/* Background Flower */}
        <div className="absolute inset-0 hidden xl:block bg-[url('/bg.png')] bg-cover bg-no-repeat rounded-b-custom opacity-10 pointer-events-none" />

        {/* Profile Image with Flower Spinner Below */}
        <div className="flex flex-col items-center relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/leap.webp"
              alt="Profile"
              width={160}
              height={160}
              className="w-28 h-32 object-cover rounded-2xl border-4 border-white"
            />
          </motion.div>

          {/* Spinning Flowers Below Image */}
          <motion.div
            className="mt-1 flex items-center justify-center"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          >
            <span className="text-3xl">🌸</span>
          </motion.div>
        </div>

        {/* Animated Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-2 text-2xl md:text-5xl font-bold text-white"
        >
          Finance & Administration | Student Affairs Specialist.
        </motion.h1>

        {/* Animated Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-4 text-lg text-white"
        >
          Experienced in financial operations, student engagement, and administrative coordination.
        </motion.p>

        {/* Animated Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <LGElevatedButton
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            text="CONTACT"
          />
        </motion.div>
      </section>
    </div>
  );
}
