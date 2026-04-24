import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isFinePointer, setIsFinePointer] = useState(true);

  useEffect(() => {
    // Disable custom cursor on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsFinePointer(false);
      return;
    }

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  if (!isFinePointer) return null;

  return (
    <div 
      className="fixed top-0 left-0 pointer-events-none z-[9999] transition-transform ease-out duration-75"
      style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
    >
      {/* Outer Ring */}
      <div 
        className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[#0F9D9A] transition-all duration-300 ease-out flex items-center justify-center
          ${isHovering ? 'w-16 h-16 bg-[#0F9D9A]/20 border-transparent' : 'w-10 h-10'}`}
      />
      {/* Inner Dot */}
      <div 
        className={`absolute -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-[#0F9D9A] rounded-full transition-opacity duration-300
          ${isHovering ? 'opacity-0' : 'opacity-100'}`}
      />
    </div>
  );
}
