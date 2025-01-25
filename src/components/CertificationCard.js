import React from 'react';

const CertificationCard = ({ cert }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-bold mb-2">{cert.name}</h3>
      <p className="text-gray-600 mb-2">{cert.organization}</p>
      <p className="text-gray-500 mb-2">Issued: {cert.date}</p>
      <p className="text-gray-500 mb-2">Expires: {cert.expirationDate}</p>
      <p className="font-mono text-sm text-gray-600 mb-4">
        Credential ID: {cert.certNumber}
      </p>
      {cert.link && (
        <a
          href={cert.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 transition-colors"
        >
          View Certificate →
        </a>
      )}
    </div>
  );
};

export default CertificationCard;