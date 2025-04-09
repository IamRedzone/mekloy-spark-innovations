
import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const ProjectsHero = () => {
  useEffect(() => {
    gsap.fromTo('.page-title', 
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
    );
  }, []);

  return (
    <section className="bg-projects-pattern bg-pattern relative overflow-hidden py-24">
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-mekloy-blue/80 to-black/70"></div>
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <h1 className="page-title text-5xl md:text-6xl font-bold text-white mb-6">Our Projects</h1>
        <p className="text-xl text-gray-200 max-w-3xl mx-auto font-poppins">
          Explore our portfolio of successful electrical infrastructure and product 
          installations across industrial, domestic, solar, and decor sectors.
        </p>
      </div>
    </section>
  );
};

export default ProjectsHero;
