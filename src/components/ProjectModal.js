import React, { useState } from 'react';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const ProjectModal = ({ isOpen, onClose, project }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!isOpen || !project.images?.length) return null;

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50 
      flex items-center justify-center p-4 transition-opacity duration-300"
      onClick={onClose}
    >
      <div 
        className="rounded-xl max-w-4xl w-full p-6 
        transform transition-all duration-300 shadow-2xl"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex justify-end mb-4">
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <FaTimes className="w-6 h-6 text-gray-500" />
          </button>
        </div>

        <div className="relative h-[600px]">
          <img 
            src={project.images[currentImageIndex]}
            alt={`${project.title} screenshot ${currentImageIndex + 1}`}
            className="w-full h-full object-contain rounded-lg"
          />
          {project.images.length > 1 && (
            <>
              <button 
                onClick={prevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
              >
                <FaChevronLeft className="w-6 h-6" />
              </button>
              <button 
                onClick={nextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
              >
                <FaChevronRight className="w-6 h-6" />
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;