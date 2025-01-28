import React from 'react';
import { FaGithub, FaExternalLinkAlt, FaInfoCircle } from 'react-icons/fa';

const ProjectCard = ({ project, onClick }) => {
  if (!project) return null;
  
  const {
    title,
    description,
    technologies,
    github,
    live,
  } = project;

  return (
    <div 
      className="bg-white rounded-lg p-6 shadow-sm hover:shadow-lg transition-shadow"
    >
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
          >
            <FaExternalLinkAlt className="w-5 h-5" />
            <span>Live Demo</span>
          </a>
        )}
        {project.images?.length > 0 && (
          <button
            onClick={onClick}
            className="flex items-center gap-2 px-4 py-2 bg-violet-600 text-white rounded hover:bg-violet-500 transition-colors"
          >
            <FaInfoCircle className="w-5 h-5" />
            <span>Preview</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;