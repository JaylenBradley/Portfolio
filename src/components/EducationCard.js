import React from 'react';

const EducationCard = ({ education }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-xl font-bold">{education.school}</h3>
        <span className="text-gray-600">{education.date}</span>
      </div>
      <p className="text-gray-700 mb-2">{education.degree}</p>
      <p className="text-gray-600 mb-4">Major GPA: {education.gpa}</p>
      <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
        {education.details.map((detail, index) => (
          <li key={index}>{detail}</li>
        ))}
      </ul>
      <div>
        <h4 className="font-semibold mb-2">Relevant Coursework:</h4>
        <div className="flex flex-wrap gap-2">
          {education.relevantCourses.map((course, index) => (
            <span key={index} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
              {course}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EducationCard;