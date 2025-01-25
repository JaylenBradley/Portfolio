import React from 'react';

const OrganizationCard = ({ org }) => (
  <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-lg transition-shadow">
    <div className="flex justify-between items-center mb-2">
      <h3 className="text-xl font-bold">{org.name}</h3>
      <span className="text-gray-600">{org.date}</span>
    </div>
    <p className="text-gray-700 mb-2">{org.role}</p>
    <ul className="list-disc list-inside text-gray-600 space-y-2">
      {org.details.map((detail, index) => (
        <li key={index}>{detail}</li>
      ))}
    </ul>
  </div>
);

export default OrganizationCard;