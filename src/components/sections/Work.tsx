"use client";
import { educationList, experiences } from "@/src/constantData/staticData";
import { TimelineItem } from "@/src/types/portfolioTypes";
import { motion, Variants } from "framer-motion";

function TimelineGroup({ title, items }: { title: string; items: TimelineItem[] }) {
  const itemVariants: Variants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <div>
      <h3 className="font-space font-bold text-2xl text-gray-200 mb-10 tracking-tight flex items-center gap-3">
        <span className="w-1.5 h-6 bg-cosmic-cyan rounded-full" />
        {title}
      </h3>
      <div className="relative border-l border-white/10 pl-6 ml-2 space-y-12">
        {items.map((item, idx) => (
          <motion.div
            key={idx}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={itemVariants}
            className="relative group"
          >
            <div className="absolute -left-8 -top-1 w-4 h-4 rounded-full bg-cosmic-dark border-2 border-white/30 group-hover:border-cosmic-primary group-hover:scale-110 transition-all duration-300" />
            
            <span className="text-xs font-mono font-bold text-cosmic-primary tracking-widest block mb-2">
              {item.duration}
            </span>
            <h4 className="font-space text-lg font-bold text-white group-hover:text-cosmic-purple transition-colors duration-200">
              {item.title}
            </h4>
            <p className="text-sm font-medium text-gray-400 mb-3">{item.institution}</p>
            <p className="text-sm text-gray-500 leading-relaxed max-w-xl">{item.details}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default function Work() {
  return (
    <section id="experience" className="lg:py-24 py-16 px-6 max-w-7xl mx-auto relative">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <TimelineGroup title="Professional Experience" items={experiences} />
        <TimelineGroup title="Education Milestones" items={educationList} />
      </div>
    </section>
  );
}