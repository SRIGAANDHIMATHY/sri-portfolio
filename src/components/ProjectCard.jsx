import React from 'react';
import { Link } from 'react-router-dom';

export default function ProjectCard({ project }) {
  return (
    <Link to={`/project/${project.id}`} className="group block bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
      
      {/* Image Top */}
      <div className="w-full aspect-[16/9] overflow-hidden rounded-t-2xl border-b border-gray-100 bg-gray-100">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Card Body */}
      <div className="p-6">
        <div className="flex flex-wrap gap-3 mt-auto">
          {project.tools && project.tools.slice(0, 3).map((tool, idx) => (
            <span key={idx} className="px-4 py-2 bg-gray-50 text-sm font-medium text-gray-700 rounded-full border border-gray-100">
              {tool}
            </span>
          ))}
        </div>
        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mt-3 group-hover:text-[#0F9D9A] transition-colors">
          {project.title}
        </h3>
        
        {/* Description */}
        <p className="text-gray-600 mt-2 line-clamp-2 leading-relaxed">
          {project.description || project.tagline}
        </p>
      </div>

    </Link>
  );
}
