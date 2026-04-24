import React from 'react';
import Reveal from './Reveal';


const skills = {
  design: ["Figma", "Adobe XD", "Illustrator", "Photoshop", "Canva"],
  development: ["HTML", "CSS", "JavaScript", "React", "Git", "MySQL", "C", "Java"]
};

export default function Skills() {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <Reveal>
          <div className="max-w-[800px]">
            <h2 className="text-3xl font-bold font-serif text-gray-900 mb-10">Toolkit</h2>
            
            <div className="grid sm:grid-cols-2 gap-10">
              <div>
                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-6">Design</h3>
                <div className="flex flex-wrap gap-3">
                  {skills.design.map((skill, idx) => (
                    <span key={idx} className="px-5 py-2.5 bg-white border border-gray-100 rounded-xl text-gray-700 font-medium shadow-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-6">Development</h3>
                <div className="flex flex-wrap gap-3">
                  {skills.development.map((skill, idx) => (
                    <span key={idx} className="px-5 py-2.5 bg-white border border-gray-100 rounded-xl text-gray-700 font-medium shadow-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
