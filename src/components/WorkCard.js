import React from 'react';

const WorkCard = ({ work }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-xl font-bold">{work.title}</h3>
        <span className="text-gray-600">{work.date}</span>
      </div>
      <p className="text-gray-600 mb-4">{work.company} | {work.location}</p>
      <ul className="list-disc list-inside text-gray-600 space-y-2">
        {work.responsibilities.map((responsibility, index) => (
          <li key={index}>{responsibility}</li>
        ))}
      </ul>
    </div>
  );
};

export default WorkCard;