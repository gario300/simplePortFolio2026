import { CSSProperties } from 'react';

export const cardStyles = (isHovered: boolean): CSSProperties => ({
  transition: 'all 0.3s ease',
  boxShadow: isHovered 
    ? '0 10px 20px rgba(0,0,0,0.15), 0 6px 6px rgba(0,0,0,0.1)' 
    : '0 2px 4px rgba(0,0,0,0.1)',
  transform: isHovered ? 'translateY(-4px)' : 'none',
  height: '100%',
  cursor: 'pointer'
});

export const imageContainerStyles = (isHovered: boolean): CSSProperties => ({
  width: isHovered ? '256px' : '128px',
  height: isHovered ? '256px' : '128px',
  position: 'relative',
  transition: 'all 0.3s ease',
  borderRadius: '12px',
  overflow: 'hidden'
});

export const tagsStyles = (isHovered: boolean): CSSProperties => ({
  opacity: isHovered ? 1 : 0,
  transition: 'opacity 0.3s ease',
  visibility: isHovered ? 'visible' : 'hidden',
  display: 'flex',
  flexWrap: 'wrap',
  gap: '0.5rem',
  marginTop: '0.5rem'
});
