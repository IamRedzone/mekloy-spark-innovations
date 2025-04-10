
import React from 'react';

interface MekloyLogoProps {
  color: string;
  className?: string;
}

const MekloyLogo: React.FC<MekloyLogoProps> = ({ color, className = '' }) => {
  return (
    <svg 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={`transition-colors duration-300 ${className}`}
    >
      {/* Custom circuit-inspired lightning bolt logo */}
      <path 
        d="M13 2L3 14H12L11 22L21 10H12L13 2Z" 
        stroke={color} 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        fill="none"
      />
      {/* Circuit node details */}
      <circle cx="12" cy="10" r="1.5" fill={color} />
      <circle cx="3" cy="14" r="1" fill={color} />
      <circle cx="21" cy="10" r="1" fill={color} />
    </svg>
  );
};

export default MekloyLogo;
