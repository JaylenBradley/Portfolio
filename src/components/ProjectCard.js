import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ project, onClick }) => {
  if (!project) return null;
  
  const {
    title,
    description,
    technologies,
    github,
    live,
    images
  } = project;

  return (
    <div 
      className="bg-white rounded-lg p-6 shadow-sm hover:shadow-lg transition-shadow cursor-pointer" 
      onClick={onClick}
    >
      {images && images.length > 0 && (
        <div className="relative h-48 mb-4">
          <img 
            src={images[0]} 
            alt={title}
            className="rounded-lg w-full h-full object-cover"
          />
        </div>
      )}
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <ul className="list-disc list-inside space-y-2 mb-4 text-gray-600">
        {description && description.map((desc, index) => (
          <li key={index} className="text-sm">{desc}</li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies && technologies.map((tech, index) => (
          <span key={index} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
            {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-4">
        {github && (
          <a 
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            <FaGithub className="w-5 h-5" />
            <span>GitHub</span>
          </a>
        )}
        {live && (
          <a 
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            <FaExternalLinkAlt className="w-4 h-4" />
            <span>Live Demo</span>
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;