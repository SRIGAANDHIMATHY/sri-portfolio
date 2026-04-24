import React from 'react';
import Button from './Button';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="flex justify-between items-center h-[70px]">
          <a href="/" className="font-serif text-2xl font-bold text-gray-900">
            Sri Gaandhimathy
          </a>
          <nav className="flex space-x-4 items-center">
            <Button variant="primary" href="/#projects" className="hidden sm:inline-flex py-2 px-4 text-sm">View Projects</Button>
            <Button variant="secondary" href="/files/Sri_Gaandhimathy_Resume.pdf" className="py-2 px-4 text-sm" target="_blank" rel="noopener noreferrer">Download Resume</Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
