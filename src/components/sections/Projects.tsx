"use client";

import { projectsList } from "@/src/constantData/staticData";
import { ProjectCard } from "../ui/ProjectCard";
import Title from "../ui/Title";

export default function Projects() {
    return (
    <section id="projects" className="lg:py-24 py-16 px-6 max-w-7xl mx-auto relative">
      <Title>Projects</Title>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {projectsList.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}