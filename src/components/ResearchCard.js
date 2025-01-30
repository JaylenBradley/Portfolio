import React from 'react';

const ResearchCard = ({ research }) => {
  return (
    <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-2xl font-bold text-gray-800">{research.title}</h3>
        <span className="text-gray-600">{research.date}</span>
      </div>
      <p className="text-gray-600 text-lg mb-6">Advisor: {research.advisor}</p>
      <ul className="list-disc list-inside text-gray-600 space-y-3 mb-6">
        {research.highlights.map((highlight, index) => (
          <li key={index} className="text-base">{highlight}</li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2">
        {research.technologies && research.technologies.map((tech, index) => (
          <span key={index} className="px-4 py-2 bg-gray-100 rounded-full text-sm text-gray-600">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ResearchCard;