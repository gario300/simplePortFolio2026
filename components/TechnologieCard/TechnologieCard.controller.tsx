import { useState, useEffect, useRef } from 'react';

export const useTechnologieCardController = (experience: number) => {
  const [currentExperience, setCurrentExperience] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement | null>(null);
  const animated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Una vez visible, dejamos de observar
        }
      },
      { threshold: 0.1 } // Se activa cuando el 10% del componente es visible
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible || animated.current) return;
    animated.current = true;

    let start: number | null = null;
    const duration = 1500;

    const animate = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const percentage = Math.min(progress / duration, 1);
      const nextValue = Math.round(percentage * experience);

      setCurrentExperience(nextValue);

      if (percentage < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, experience]);

  return {
    currentExperience,
    elementRef
  };
};
