import React from 'react';

export default function Button({ children, variant = 'primary', className = '', href, ...props }) {
  const baseStyles = 'inline-flex items-center justify-center px-6 py-3 rounded-xl font-medium transition-colors duration-200';
  
  const variants = {
    primary: 'bg-[#0F9D9A] text-white hover:bg-[#0c827f]',
    secondary: 'border border-[#0F9D9A] text-[#0F9D9A] hover:bg-[#0F9D9A]/5',
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClassName} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  );
}
