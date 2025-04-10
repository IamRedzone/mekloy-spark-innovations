
import React from 'react';

interface CircuitMenuIconProps {
  isOpen: boolean;
  className?: string;
}

const CircuitMenuIcon: React.FC<CircuitMenuIconProps> = ({ isOpen, className = "" }) => {
  return (
    <div className={`relative w-6 h-6 ${className}`}>
      {/* Base circuit layout */}
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        className={`transform transition-all duration-300 ${isOpen ? 'rotate-90' : 'rotate-0'}`}
      >
        {/* Circuit Board Base */}
        <rect x="2" y="2" width="20" height="20" rx="2" className={`${isOpen ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`} />
        
        {/* Circuit Lines */}
        <line 
          x1="6" 
          y1="6" 
          x2="10" 
          y2="6" 
          className={`transition-all duration-300 ${isOpen ? 'translate-x-2 translate-y-6 rotate-45' : ''}`}
        />
        <line 
          x1="14" 
          y1="6" 
          x2="18" 
          y2="6" 
          className={`transition-all duration-300 ${isOpen ? '-translate-x-2 translate-y-6 -rotate-45' : ''}`}
        />
        
        <line 
          x1="6" 
          y1="12" 
          x2="18" 
          y2="12" 
          className={`transition-all duration-300 ${isOpen ? 'scale-0' : 'scale-100'}`}
        />
        
        <line 
          x1="6" 
          y1="18" 
          x2="10" 
          y2="18" 
          className={`transition-all duration-300 ${isOpen ? 'translate-x-2 -translate-y-6 -rotate-45' : ''}`}
        />
        <line 
          x1="14" 
          y1="18" 
          x2="18" 
          y2="18" 
          className={`transition-all duration-300 ${isOpen ? '-translate-x-2 -translate-y-6 rotate-45' : ''}`}
        />
        
        {/* Circuit Nodes - Connection Points */}
        <circle cx="4" cy="12" r="1" className={`transition-all duration-300 ${isOpen ? 'fill-current stroke-none scale-150 text-amber-400' : 'fill-none'}`} />
        <circle cx="12" cy="12" r="1" className={`transition-all duration-300 ${isOpen ? 'fill-current stroke-none scale-150 text-amber-400' : 'fill-none'}`} />
        <circle cx="20" cy="12" r="1" className={`transition-all duration-300 ${isOpen ? 'fill-current stroke-none scale-150 text-amber-400' : 'fill-none'}`} />
        
        {/* Additional Circuit Components that only appear when open */}
        <path 
          d="M12 7.5V16.5" 
          className={`transition-all duration-300 ${isOpen ? 'opacity-100 stroke-amber-400' : 'opacity-0'}`}
          strokeDasharray="1 2"
        />
        
        {/* Lightning bolt when active */}
        <path 
          d="M13 8L9 12H15L11 16" 
          className={`transition-all duration-500 ${isOpen ? 'opacity-100 stroke-amber-400' : 'opacity-0'} ${isOpen ? 'animate-pulse' : ''}`}
          strokeWidth="2"
        />
      </svg>
    </div>
  );
};

export default CircuitMenuIcon;
