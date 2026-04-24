import React from 'react';
import Reveal from './Reveal';

const events = [
  {
    title: "BUILD2GETHER AI-SDG Inspirathon 3.0 Hackathon",
    description: "Secured 11th place out of 500+ teams and won ₹12,000. Collaborated in a 24-hour hackathon to build a data-driven solution addressing UN SDG Goal 1 (No Poverty), focusing on structured problem-solving, teamwork, and execution under pressure."
  },
  {
    title: "1st Prize — Xerone’25 Paper Presentation",
    description: "Presented an IoT-based Smart Connected Carts solution, focusing on real-world retail innovation and system design. (₹3000)"
  },
  {
    title: "Conference Paper — Connected Carts",
    description: "Published research on IoT-enabled smart retail systems, exploring automation and enhanced shopping experiences. (ICUIS 2024, IEEE)"
  },
  {
    title: "Conference Paper — Care-Ring",
    description: "Worked on a Generative AI-based solution focused on women’s safety and emergency response systems. (ICCCT 2025, IEEE)"
  },
  {
    title: "NPTEL Discipline Star",
    description: "Recognized for consistent academic performance and invited to IIT Madras under the NPTEL Discipline Star program."
  },
  {
    title: "Google Solutions Challenge",
    description: "Participated in a collaborative innovation program focused on solving real-world problems using technology. (Bootcamp Participant)"
  }
];

export default function Timeline() {
  return (
    <section className="bg-[#F8F9FA] py-20 lg:py-24">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="max-w-[800px] mx-auto">
          
          <Reveal>
            <h2 className="text-3xl font-bold font-serif text-gray-900 mb-10">Achievements</h2>
          </Reveal>
          
          <div className="space-y-6">
            {events.map((event, idx) => (
              <Reveal key={idx} delay={idx * 100}>
                <div className="flex flex-col bg-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">{event.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{event.description}</p>
                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
