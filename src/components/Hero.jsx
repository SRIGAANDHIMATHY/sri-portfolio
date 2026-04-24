import React from 'react';
import Button from './Button';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-white via-white to-gray-50 py-24 lg:py-32 xl:py-40 overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] right-[-5%] w-[50%] h-[50%] rounded-full bg-[#0F9D9A]/5 blur-[100px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-gray-200/50 blur-[80px]"></div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-12 gap-16 lg:gap-16 items-center">
          
          {/* Left Content */}
          <div className="lg:col-span-7 flex flex-col justify-center animate-fade-in-up">
            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-gray-900 leading-[1.2] mb-6">
              UI/UX designer who builds thoughtful, accessible interfaces.
            </h1>

            {/* Subtext */}
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-10 max-w-md">
              M.Tech CSE student, Figma-first, code-capable, and building IoT retail experiences.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-5">
              <Button variant="primary" href="#projects" className="px-8 py-4 shadow-lg shadow-[#0F9D9A]/20 hover:shadow-xl hover:shadow-[#0F9D9A]/30 hover:-translate-y-1 transition-all">
                View Projects
              </Button>
              <Button variant="secondary" href="/files/Sri_Gaandhimathy_Resume.pdf" className="px-8 py-4 bg-white hover:-translate-y-1 transition-all" target="_blank" rel="noopener noreferrer">
                Download Resume
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:col-span-5 w-full relative animate-fade-in-up-delayed">
            {/* Subtle glow behind image */}
            <div className="absolute inset-0 bg-[#0F9D9A]/20 rounded-[2.5rem] transform translate-x-4 translate-y-4 blur-2xl"></div>
            
            {/* Image Card */}
            <div className="relative aspect-[4/5] md:aspect-square lg:aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-white shadow-2xl shadow-gray-200 border-8 border-white transition-transform duration-700 hover:scale-[1.02]">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" 
                alt="Sri Gaandhimathy" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
