import React from 'react';
import { Mail, Phone, ExternalLink } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="bg-[#F8F9FA] py-20 lg:py-24">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="max-w-[800px] mx-auto">
          
          <div className="mb-12">
            <h2 className="text-3xl font-bold font-serif text-gray-900 mb-4">Contact</h2>
            <p className="text-gray-600 text-lg">
              Feel free to reach out for collaborations or just a friendly hello.
            </p>
          </div>
          
          <div className="grid gap-6 sm:grid-cols-2">
            <a href="mailto:srigaandhimathyy@gmail.com" className="flex items-center gap-4 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#0F9D9A]/10 text-[#0F9D9A] shrink-0">
                <Mail size={24} />
              </div>
              <div className="overflow-hidden">
                <p className="text-sm font-bold text-gray-500 mb-1">Email</p>
                <p className="text-gray-900 font-medium truncate">srigaandhimathyy@gmail.com</p>
              </div>
            </a>

            <a href="tel:6383067391" className="flex items-center gap-4 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#0F9D9A]/10 text-[#0F9D9A] shrink-0">
                <Phone size={24} />
              </div>
              <div className="overflow-hidden">
                <p className="text-sm font-bold text-gray-500 mb-1">Phone</p>
                <p className="text-gray-900 font-medium truncate">6383067391</p>
              </div>
            </a>

            <a href="https://www.linkedin.com/in/sri-gaandhimathy-y-94a556257/" target="_blank" rel="noopener noreferrer" className="sm:col-span-2 flex items-center gap-4 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#0F9D9A]/10 text-[#0F9D9A] shrink-0">
                <ExternalLink size={24} />
              </div>
              <div className="overflow-hidden">
                <p className="text-sm font-bold text-gray-500 mb-1">LinkedIn</p>
                <p className="text-[#0F9D9A] font-medium truncate">linkedin.com/in/sri-gaandhimathy-y-94a556257/</p>
              </div>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
