import React from 'react';
import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';
import Reveal from './Reveal';

export default function ProjectsSection() {
  return (
    <section className="bg-[#F8F9FA] py-20 lg:py-32" id="projects">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <Reveal>
          <div className="mb-16 md:mb-20">
            <h2 className="text-3xl md:text-5xl font-bold font-serif text-gray-900 mb-6">Selected Work</h2>
            <p className="text-xl text-gray-500 max-w-2xl leading-relaxed">
              A collection of case studies showcasing my process from research to high-fidelity design.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={100}>
              <ProjectCard project={project} index={index} />
            </Reveal>
          ))}
        </div>
        
      </div>
    </section>
  );
}
