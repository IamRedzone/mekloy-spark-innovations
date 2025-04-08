
import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  const phoneNumber = '2348060000000'; // Replace with your actual WhatsApp number
  const message = encodeURIComponent("Hello, I'm interested in your electrical services!");
  
  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };
  
  return (
    <button 
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} className={`transition-transform duration-300 ${isHovered ? 'rotate-12' : ''}`} />
      <span className={`absolute right-full mr-2 whitespace-nowrap bg-black/80 text-white text-sm px-2 py-1 rounded pointer-events-none transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
        Chat with us
      </span>
    </button>
  );
};

export default WhatsAppButton;
