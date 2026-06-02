"use client";
import { motion } from "framer-motion";
import { MouseEvent, useState } from "react";
import { Project } from "../../types/portfolioTypes";

export function ProjectCard({ project }: { project: Project }) {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      style={{
        "--x": `${coords.x}px`,
        "--y": `${coords.y}px`,
      } as React.CSSProperties}
      className={`group relative overflow-hidden rounded-3xl bg-cosmic-card/40 border border-white/5 p-8 flex flex-col justify-between transition-all duration-500 hover:border-cosmic-primary/30 ambient-glow ${project.className}`}
    >
      <div>
        {/* Category Header Tag */}
        <div className="flex justify-between items-center mb-6">
          <span className="text-xs font-mono tracking-widest text-cosmic-cyan uppercase px-2 py-1 rounded bg-cosmic-cyan/5 border border-cosmic-cyan/10">
            {project.category}
          </span>
        </div>

        {/* Project Meta Details */}
        <h3 className="font-space font-bold text-2xl text-white tracking-tight mb-3 group-hover:text-cosmic-primary transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed max-w-md">
          {project.description}
        </p>
      </div>

      {/* Embedded Technology Badges */}
      <div className="mt-8 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span key={t} className="text-xs px-3 py-1 rounded-md bg-white/5 border border-white/5 text-gray-300 font-mono">
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
}