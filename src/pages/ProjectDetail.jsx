import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { projects } from '../data/projects';
import { ArrowLeft } from 'lucide-react';
import Reveal from '../components/Reveal';

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);
  const [lightboxImage, setLightboxImage] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen bg-white flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">Project not found</h1>
            <Link to="/" className="text-[#0F9D9A] hover:underline flex items-center justify-center gap-2">
              <ArrowLeft size={20} /> Back to Home
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Project Hero */}
        <section className="bg-[#F8F9FA] py-20 lg:py-32 border-b border-gray-100">
          <div className="max-w-[1200px] mx-auto px-6 md:px-12">
            <Link to="/#projects" className="inline-flex items-center gap-2 text-gray-500 hover:text-[#0F9D9A] transition-colors mb-10 font-semibold uppercase tracking-wider text-sm">
              <ArrowLeft size={16} /> Back to Projects
            </Link>
            
            <div className="max-w-[800px]">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-gray-900 leading-tight mb-6 animate-fade-in-up">
                {project.title}
              </h1>
              <p className="text-xl md:text-2xl text-[#0F9D9A] font-medium leading-relaxed mb-10 animate-fade-in-up-delayed">
                {project.tagline}
              </p>
            </div>
            
            {/* Meta Info */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-t border-gray-200 mt-8 animate-fade-in-up-delayed">
              {project.role && project.role.length > 0 && (
                <div>
                  <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">Role</h4>
                  <ul className="space-y-1">
                    {project.role.map((r, idx) => (
                      <li key={idx} className="font-medium text-gray-900">{r}</li>
                    ))}
                  </ul>
                </div>
              )}
              {project.tools && project.tools.length > 0 && (
                <div>
                  <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">Tools</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool, idx) => (
                      <span key={idx} className="font-medium text-gray-900">{tool}{idx < project.tools.length - 1 ? ',' : ''}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Project Hero Image */}
        <section className="py-12 bg-white">
          <Reveal>
            <div className="max-w-[1200px] mx-auto px-6 md:px-12">
              <div 
                className="w-full rounded-2xl overflow-hidden bg-gray-50 border border-gray-100 shadow-sm flex items-center justify-center p-4 cursor-zoom-in"
                onClick={() => setLightboxImage(project.image)}
              >
                <img 
                  src={project.image} 
                  alt={`${project.title} main presentation hero image`} 
                  className="w-full h-auto max-h-[85vh] object-contain rounded-xl"
                />
              </div>
            </div>
          </Reveal>
        </section>

        {/* Main Content */}
        <section className="py-12 lg:py-20">
          <div className="max-w-[1200px] mx-auto px-6 md:px-12">
            <div className="grid lg:grid-cols-12 gap-16">
              
              <div className="lg:col-span-4 space-y-16">
                {project.problem && (
                  <div>
                    <h3 className="text-2xl font-bold font-serif text-gray-900 mb-6">The Problem</h3>
                    <p className="text-gray-600 leading-relaxed text-lg">{project.problem}</p>
                  </div>
                )}
                {project.keyFeatures && (
                  <div>
                    <h3 className="text-2xl font-bold font-serif text-gray-900 mb-6">Key Features</h3>
                    <ul className="space-y-4">
                      {project.keyFeatures.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-gray-600 text-lg">
                          <span className="text-[#0F9D9A] mr-3 font-bold mt-1">•</span>
                          <span className="leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {project.outcome && (
                  <div>
                    <h3 className="text-2xl font-bold font-serif text-gray-900 mb-6">The Outcome</h3>
                    <p className="text-gray-600 leading-relaxed text-lg">{project.outcome}</p>
                  </div>
                )}
              </div>

              <div className="lg:col-span-8">
                <Reveal>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {project.gallery && project.gallery.map((img, idx) => (
                      <div 
                        key={idx} 
                        className="rounded-2xl overflow-hidden bg-gray-50 border border-gray-100 shadow-sm cursor-zoom-in"
                        onClick={() => setLightboxImage(img)}
                      >
                        <img 
                          src={img} 
                          alt={`${project.title} detailed UI screen ${idx + 1}`} 
                          className="w-full h-auto object-contain hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    ))}
                  </div>
                </Reveal>
              </div>

            </div>
          </div>
        </section>

        {/* Lightbox Overlay */}
        {lightboxImage && (
          <div 
            className="fixed inset-0 z-[10000] bg-black/90 flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
            onClick={() => setLightboxImage(null)}
          >
            <img 
              src={lightboxImage} 
              alt="Fullscreen view" 
              className="max-w-full max-h-full object-contain rounded-xl shadow-2xl"
            />
          </div>
        )}

      </main>

      <Footer />
    </div>
  );
}
