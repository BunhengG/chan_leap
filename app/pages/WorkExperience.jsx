"use client";

import { motion } from "framer-motion";
import experiences from "../data/experience";

const WorkExperience = () => {
  return (
    <div className="bg-black/5 w-full">
      <section
        id="experience"
        className="relative p-16 bg-background text-foreground lg:rounded-custom rounded-custom_phone"
      >
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold text-center pt-6 text-white flex justify-center items-center"
        >
          <motion.div
            className="flex items-center justify-center"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          >
            <span className="text-3xl">🏵️</span>
          </motion.div>
          My Experience
          <motion.div
            className="flex items-center justify-center"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          >
            <span className="text-3xl">🏵️</span>
          </motion.div>
        </motion.h1>

        {/* Timeline Wrapper */}
        <div className="relative flex flex-col items-center mt-12 space-y-8">
          {/* Line */}
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "100%" }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute left-1/2 transform -translate-x-1/2 top-0 w-[4px] bg-white rounded-md"
          />

          {/* Cards */}
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
              viewport={{ once: true }}
              className={`relative w-full md:w-1/2 p-8 bg-white rounded-3xl shadow-lg ${
                index % 2 === 0 ? "self-start" : "self-end"
              }`}
            >
              {/* Connector Dot */}
              <div
                className={`absolute top-1/2 w-4 h-4 bg-white rounded-full transform -translate-y-1/2 ${
                  index % 2 === 0 ? "-right-6" : "-left-6"
                }`}
              />

              <h3 className="text-xl font-semibold text-black/80">
                {exp.title}
              </h3>
              <p className="text-foreground">{exp.company}</p>
              <p className="text-sm text-gray-500">{exp.duration}</p>
              <p className="mt-2 text-gray-400">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default WorkExperience;
