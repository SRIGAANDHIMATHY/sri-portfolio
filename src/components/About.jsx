import React from 'react';
import Reveal from './Reveal';

export default function About() {
  return (
    <section id="about" className="bg-white py-20 lg:py-24">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <Reveal>
          <div className="max-w-[800px] mx-auto">
            
            <h2 className="text-3xl font-bold font-serif text-gray-900 mb-8">About Me</h2>
            
            <div className="text-gray-600 text-lg leading-relaxed space-y-6">
              <p>
                I’m Sri Gaandhimathy Y, an M.Tech Computer Science student focused on UI/UX design and front-end development. I design in Figma and build user-focused prototypes that prioritize accessibility and clarity.
              </p>
              <p>
                I enjoy transforming complex problems into simple, usable interfaces. My work combines design thinking with technical implementation, allowing me to create both visually appealing and functional digital products.
              </p>
              
              <div className="mt-8 pt-8 border-t border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Facts</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#0F9D9A] mr-3 font-bold">•</span>
                    M.Tech Computer Science Engineering (2022–2027)
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#0F9D9A] mr-3 font-bold">•</span>
                    Languages: English, Tamil, Hindi
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#0F9D9A] mr-3 font-bold">•</span>
                    Location: Chennai
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </Reveal>
      </div>
    </section>
  );
}
