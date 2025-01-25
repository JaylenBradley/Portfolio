import { useState, useEffect } from 'react';

const useScrollSpy = (ids) => {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const observers = [];
    
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    };

    const observerOptions = {
      threshold: 0.5,
      rootMargin: '0px'
    };

    ids.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        const observer = new IntersectionObserver(observerCallback, observerOptions);
        observer.observe(element);
        observers.push(observer);
      }
    });

    return () => observers.forEach(observer => observer.disconnect());
  }, [ids]);

  return activeId;
};

export default useScrollSpy;