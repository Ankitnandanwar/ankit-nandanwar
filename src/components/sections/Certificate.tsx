// src/components/sections/Certifications.tsx
"use client";

import { motion, Variants } from "framer-motion";
import Title from "../ui/Title";
import { certificationsList } from "@/src/constantData/staticData";





export default function Certifications() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants: Variants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="certifications" className="lg:py-24 py-16 px-6 max-w-7xl mx-auto relative">
      <div className="absolute -bottom-10 right-10 w-87.5 h-87.5 bg-cosmic-cyan/5 blur-[130px] rounded-full pointer-events-none" />

      <div className="mb-16">
        <Title>Courses & Certifications</Title>
      </div>

      {/* Grid Track Matrix */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6"
      >
        {certificationsList.map((cert, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className="group relative flex flex-col justify-between p-8 rounded-3xl bg-cosmic-card/30 border border-white/5 backdrop-blur-md hover:border-cosmic-cyan/30 hover:bg-cosmic-card/50 transition-all duration-300 shadow-[0_0_30px_rgba(0,0,0,0.2)]"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 rounded-xl bg-white/5 border border-white/5 text-cosmic-cyan group-hover:text-cosmic-purple group-hover:scale-110 transition-all duration-300">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                </div>
                <span className="text-xs font-mono text-gray-500 font-bold tracking-wider uppercase">
                  {cert.date}
                </span>
              </div>

              <h3 className="font-space font-bold text-xl text-white group-hover:text-cosmic-cyan transition-colors duration-200 leading-snug mb-2">
                {cert.title}
              </h3>
              <p className="text-sm font-medium text-gray-400 mb-6">
                {cert.issuer}
              </p>
            </div>

            <div className="mt-4 pt-6 border-t border-white/5 flex flex-col gap-4">
              {cert.credentialId && (
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono tracking-widest text-gray-600 uppercase">
                    Student ID
                  </span>
                  <span className="text-xs font-mono text-gray-400 font-medium">
                    {cert.credentialId}
                  </span>
                </div>
              )}

              <a
                href={cert.verifyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold font-mono tracking-wider text-cosmic-primary group-hover:text-white transition-colors duration-200 mt-1 self-start"
              >
                VERIFY CREDENTIAL
                {/* Micro-interactive Sliding Arrow */}
                <svg
                  className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}