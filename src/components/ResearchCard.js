import React from 'react';

const ResearchCard = ({ research }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-lg transition-shadow">
      <div className="mb-4">
        <h3 className="text-xl font-bold mb-2">{research.title}</h3>
        <p className="text-gray-600 italic mb-2">Advisor: {research.advisor}</p>
        <p className="text-gray-500">{research.date}</p>
      </div>

      <div className="mb-4">
        <h4 className="font-semibold mb-2">Research Outcomes:</h4>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          {research.outcomes.map((outcome, index) => (
            <li key={index} className="text-sm">{outcome}</li>
          ))}
        </ul>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {research.technologies.map((tech, index) => (
          <span 
            key={index} 
            className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600"
          >
            {tech}
          </span>
        ))}
      </div>

      {research.link && (
        <a
          href={research.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 transition-colors"
        >
          View Research Paper →
        </a>
      )}
    </div>
  );
};

export default ResearchCard;