
import React from 'react';

interface LogoProps {
  className?: string;
  color?: string;
  size?: number;
}

const Logo: React.FC<LogoProps> = ({ className = "", color = "currentColor", size = 24 }) => {
  return (
<svg width="46" height="48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
        d="M0 35.463V11.739l4.964-2.512 2.86 2.13 2.995-5.16 3.615-1.774v38.383L9.47 40.213v-6.934l1.349.491V15.888l-2.995 2.758-2.86-2.758v15.016l1.268.928v6.88L0 35.461zM31.485 24.024V4.395L46 11.903v3.986l-4.64-1.365v-1.065l-5.963-2.102v8.545L46 17.827v17.745l-14.515 7.507V33.77l3.912-1.065v1.065l5.962-2.867v-8.845l-9.874 1.966zM19.317 9.009V1.665L22.905 0l3.4 1.665V9.01l-1.619-1.174v31.15l1.619-1.01v7.698l-3.319 1.747-3.669-1.747v-7.699l1.862 1.01V7.835L19.317 9.01z"
        fill={color} />
</svg>
  );
};

export default Logo;
