
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const clients = [
  {
    id: 1,
    name: 'Local Content',
    logo: 'https://via.placeholder.com/150?text=Local+Content',
  },
  {
    id: 2,
    name: 'AGIP',
    logo: 'https://via.placeholder.com/150?text=AGIP',
  },
  {
    id: 3,
    name: 'LUBRIK Construction',
    logo: 'https://via.placeholder.com/150?text=LUBRIK',
  },
  {
    id: 4,
    name: 'SHELL',
    logo: 'https://via.placeholder.com/150?text=SHELL',
  },
  {
    id: 5,
    name: 'Bayelsa State Government',
    logo: 'https://via.placeholder.com/150?text=Bayelsa+Govt',
  },
  {
    id: 6,
    name: 'NNPC',
    logo: 'https://via.placeholder.com/150?text=NNPC',
  },
  {
    id: 7,
    name: 'Chevron',
    logo: 'https://via.placeholder.com/150?text=Chevron',
  },
  {
    id: 8,
    name: 'Total Energies',
    logo: 'https://via.placeholder.com/150?text=Total',
  },
];

// Duplicate the array for seamless looping
const extendedClients = [...clients, ...clients];

const ClientsSlider = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const sliderInnerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    if (!sliderRef.current || !sliderInnerRef.current || !headingRef.current) return;
    
    // Animate the heading
    gsap.from(headingRef.current, {
      y: 30,
      opacity: 0,
      duration: 0.8,
      scrollTrigger: {
        trigger: headingRef.current,
        start: 'top 80%',
      }
    });
    
    // Automatic slider animation
    const slider = sliderInnerRef.current;
    
    // Initial position
    gsap.set(slider, { x: 0 });
    
    // Create sliding animation
    const animation = gsap.to(slider, {
      x: `-50%`,
      duration: 30,
      ease: 'linear',
      repeat: -1,
    });
    
    // Pause on hover
    sliderRef.current.addEventListener('mouseenter', () => {
      animation.pause();
    });
    
    sliderRef.current.addEventListener('mouseleave', () => {
      animation.play();
    });
    
    return () => {
      animation.kill();
    };
  }, []);

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-6 mb-12">
        <h2 className="section-title text-center" ref={headingRef}>Our Trusted Clients</h2>
      </div>
      
      <div 
        className="relative w-full overflow-hidden py-10"
        ref={sliderRef}
      >
        <div 
          className="flex items-center whitespace-nowrap"
          ref={sliderInnerRef}
        >
          {extendedClients.map((client, index) => (
            <div
              key={`${client.id}-${index}`}
              className="mx-8 flex-shrink-0"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="h-20 w-auto client-logo object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSlider;
