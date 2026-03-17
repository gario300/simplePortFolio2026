import { useState } from 'react';

export const useMainCardController = () => {
  const [hoveredContact, setHoveredContact] = useState<string | null>(null);

  const handleMouseEnter = (name: string) => setHoveredContact(name);
  const handleMouseLeave = () => setHoveredContact(null);

  return {
    hoveredContact,
    handleMouseEnter,
    handleMouseLeave
  };
};
