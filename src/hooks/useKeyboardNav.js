import { useEffect } from 'react';

export const useKeyboardNav = (sections) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        e.preventDefault();
        
        const currentSection = sections.find(section => {
          const element = document.getElementById(section);
          if (!element) return false;
          const rect = element.getBoundingClientRect();
          return rect.top >= 0 && rect.top <= window.innerHeight;
        });
        
        const currentIndex = sections.indexOf(currentSection);
        const nextIndex = e.key === 'ArrowDown' 
          ? Math.min(currentIndex + 1, sections.length - 1)
          : Math.max(currentIndex - 1, 0);
        
        const nextElement = document.getElementById(sections[nextIndex]);
        if (nextElement) {
          nextElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [sections]);
};

export default useKeyboardNav;