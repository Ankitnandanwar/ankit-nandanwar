"use client";

import { motion } from "framer-motion";
import Icon from "tech-stack-icons";
import Title from "../ui/Title";
import { SkillItem } from "@/src/types/portfolioTypes";
import { row1Skills, row2Skills } from "@/src/constantData/staticData";

function MarqueeRow({
  items,
  direction = "left",
}: {
  items: SkillItem[];
  direction?: "left" | "right";
}) {
  const duplicatedItems = [...items, ...items];

  const initialX = direction === "left" ? "0%" : "-50%";
  const animateX = direction === "left" ? "-50%" : "0%";

  return (
    <div className="flex overflow-hidden w-full relative py-3">
      <motion.div
        className="flex gap-6 shrink-0 pr-6 w-max"
        initial={{ x: initialX }}
        animate={{ x: animateX }}
        transition={{
          ease: "linear",
          duration: 30,
          repeat: Infinity,
        }}
        whileHover={{ animationPlayState: "paused" }}
      >
        {duplicatedItems.map((skill, index) => (
          <div
            key={index}
            className="flex items-center gap-4 px-6 py-4 rounded-2xl bg-cosmic-card/30 border border-white/5 backdrop-blur-md hover:border-cosmic-primary/40 hover:bg-cosmic-card/60 hover:shadow-[0_0_30px_rgba(99,102,241,0.15)] transition-all duration-300 group cursor-pointer"
          >
            <div className="w-8 h-8 flex items-center justify-center filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 [&>svg]:w-full [&>svg]:h-full">
              {skill.iconName === "api" ? (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#06b6d4"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="16 18 22 12 16 6" />
                  <polyline points="8 6 2 12 8 18" />
                </svg>
              ) : (
                <Icon name={skill.iconName} />
              )}
            </div>

            <span className="font-space text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-200 tracking-wide select-none">
              {skill.name}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="lg:py-24 py-16 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-62.5 bg-cosmic-purple/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 mb-16">
        <Title>Skills</Title>
      </div>

      <div className="relative w-full flex flex-col gap-4 max-w-[100vw]">
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-linear-to-r from-cosmic-dark to-transparent z-20 pointer-events-none" />

        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-linear-to-l from-cosmic-dark to-transparent z-20 pointer-events-none" />

        <MarqueeRow items={row1Skills} direction="left" />
        <MarqueeRow items={row2Skills} direction="right" />
      </div>
    </section>
  );
}
