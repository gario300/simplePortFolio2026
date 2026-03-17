import { CSSProperties } from 'react';

export const contactImageStyles = (isHovered: boolean): CSSProperties => ({
  width: isHovered ? '48px' : '32px',
  height: isHovered ? '48px' : '32px',
  position: 'relative',
  transition: 'all 0.3s ease',
  cursor: 'pointer'
});

export const contactContainerStyles: CSSProperties = {
  display: 'flex', 
  gap: '12px', 
  marginTop: '15px',
  alignItems: 'center',
  justifyContent: 'center',
};
