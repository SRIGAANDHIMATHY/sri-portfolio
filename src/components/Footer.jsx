import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-white py-16 border-t border-gray-100">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex flex-col items-center">
        <h3 className="font-serif text-2xl font-bold text-gray-900 mb-2">Sri Gaandhimathy Y</h3>
        <p className="text-gray-500 mb-10 text-center">UI/UX Designer & Front-end Developer</p>
        
        {/* Social Buttons Section */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-12">
          <a 
            href="https://www.linkedin.com/in/sri-gaandhimathy-y-94a556257/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center px-8 py-3 bg-[#0A66C2] text-white font-medium rounded-xl hover:bg-[#004182] hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-md w-full sm:w-auto"
          >
            LinkedIn
          </a>
          <a 
            href="https://github.com/SRIGAANDHIMATHY" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center px-8 py-3 bg-gray-900 text-white font-medium rounded-xl hover:bg-black hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-md w-full sm:w-auto"
          >
            GitHub
          </a>
          <a 
            href="/files/Sri_Gaandhimathy_Resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center px-8 py-3 bg-[#0F9D9A] text-white font-medium rounded-xl hover:bg-[#0b7a78] hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-md w-full sm:w-auto"
          >
            Resume
          </a>
        </div>
        
        <p className="text-sm text-gray-400 text-center">&copy; {new Date().getFullYear()} Sri Gaandhimathy. All rights reserved.</p>
      </div>
    </footer>
  );
}
