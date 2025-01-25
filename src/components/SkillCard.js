import React from 'react';

const SkillCard = ({ title, skills }) => {
  return (
    <div className="bg-gray-50 p-4 rounded-lg">
      <h4 className="font-medium mb-2">{title}</h4>
      <ul className="text-gray-600 space-y-2">
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default SkillCard;