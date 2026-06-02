// src/components/sections/Hero.tsx
"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const imageContainerVariants: Variants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.6 },
    },
  };

  return (
    <section className="relative min-h-auto lg:min-h-screen flex items-center justify-center py-16 md:py-24 lg:py-0 px-6 overflow-hidden">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-cosmic-primary/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-75 h-75 bg-cosmic-cyan/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="md:col-span-7 text-left flex flex-col items-start"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-cosmic-emerald animate-pulse shadow-[0_0_10px_#10b981]" />
            <span className="text-xs font-medium tracking-wider text-gray-300 uppercase font-inter">
              Available for Opportunities
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="font-space font-bold text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[0.95] mb-6 text-white"
          >
            Hi, I&apos;m Ankit. <br />
            <span className="block bg-linear-to-r from-cosmic-primary via-cosmic-purple to-cosmic-cyan bg-clip-text text-transparent">
              Frontend Developer
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="max-w-xl text-gray-400 text-base md:text-lg font-normal tracking-wide mb-10 leading-relaxed font-inter"
          >
            I create intuitive, highly engaging user interfaces. By blending a
            keen eye for modern design with clean, architectural code, I bring
            digital experiences to life. Let&apos;s build something amazing
            together.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <a
              href="#projects"
              className="w-full sm:w-auto text-center px-8 py-4 rounded-xl bg-linear-to-r from-cosmic-primary to-cosmic-purple text-white font-medium shadow-lg shadow-cosmic-primary/20 hover:shadow-cosmic-primary/40 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] font-inter"
            >
              Explore Selected Works
            </a>
            <a
              href="/Ankit_Nandanwar_Frontend_Developer_Resume.pdf"
              target="_blank"
              className="w-full sm:w-auto text-center px-8 py-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-white font-medium backdrop-blur-md transition-all duration-300 font-inter"
            >
              Access Resume
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          variants={imageContainerVariants}
          initial="hidden"
          animate="visible"
          className="md:col-span-5 flex justify-center md:justify-end relative"
        >
          <div className="relative aspect-4/5 w-full max-w-95 md:max-w-none rounded-3xl border border-white/10 bg-cosmic-card/20 backdrop-blur-sm overflow-hidden group shadow-[0_0_40px_rgba(99,102,241,0.05)]">
            <div className="absolute inset-0 rounded-3xl p-px bg-linear-to-b from-white/20 via-transparent to-cosmic-cyan/20 pointer-events-none" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-size:2rem_2rem opacity-30" />
            <Image
              src="/ankit-rembg.png"
              alt="Ankit_Nandanwar_Resume"
              fill
              priority
              className="object-cover object-bottom transition-all duration-500 group-hover:scale-105 group-hover:brightness-110"
              sizes="(max-width: 768px) 100vw, 400px"
            />
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-linear-to-t from-cosmic-dark via-cosmic-dark/80 to-transparent z-10" />
            <div className="absolute top-0 left-0 right-0 h-20 bg-linear-to-b from-white/5 to-transparent pointer-events-none" />
          </div>

          <div className="absolute -bottom-10 -right-10 w-40 h-40 border-2 border-cosmic-purple/20 rounded-full pointer-events-none animate-[spin_20s_linear_infinity]" />
          <div className="absolute -top-5 -left-5 w-20 h-20 border border-cosmic-primary/20 rounded-full pointer-events-none animate-[spin_15s_linear_infinity_reverse]" />
        </motion.div>
        
      </div>
    </section>
  );
}
