
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const sectors = [
  {
    id: 1,
    title: 'Industrial',
    description: 'Providing robust electrical solutions for factories, plants, and industrial facilities across Nigeria.',
    image: 'https://images.unsplash.com/photo-1524225896084-a57c7f661c1b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    color: 'from-blue-900/80',
  },
  {
    id: 2,
    title: 'Decor',
    description: 'Enhancing homes and businesses with aesthetic lighting and electrical installations that combine functionality and style.',
    image: 'https://images.unsplash.com/photo-1585128903994-9788298932a7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    color: 'from-purple-900/80',
  },
  {
    id: 3,
    title: 'Solar',
    description: 'Powering a sustainable future with renewable energy solutions for businesses and communities.',
    image: 'https://images.unsplash.com/photo-1595437193398-f24279553f4f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    color: 'from-amber-900/80',
  },
];

const SectorSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !cardsRef.current) return;

    // Animation for heading and description
    gsap.fromTo([sectionRef.current.querySelector('.section-title'), sectionRef.current.querySelector('.section-subtitle')],{
      y: 30,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      stagger: 0.2,
      duration: 0.8,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
      }
    });

    // Animation for cards
    gsap.fromTo(cardsRef.current.children,{
      y: 30,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      stagger: 0.2,
      duration: 0.8,
      scrollTrigger: {
        trigger: cardsRef.current,
        start: 'top 80%',
      }
    });

  }, []);

  return (
    <section id="sectors" className="section py-24 bg-mekloy-light-blue relative">
      <div className="absolute inset-0 bg-sectors-pattern opacity-5"></div>
      <div className="container mx-auto px-6 relative" ref={sectionRef}>
        <h2 className="section-title text-center">Sectors We Serve</h2>
        <p className="section-subtitle text-center">
          Our specialized electrical products and services are tailored for these key sectors, 
          delivering customized solutions that meet the unique requirements of each industry.
        </p>
        
        <div 
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16"
          ref={cardsRef}
        >
          {sectors.map((sector) => (
            <div 
              key={sector.id} 
              className="relative h-[500px] rounded-xl overflow-hidden group"
            >
              <div className="absolute inset-0">
                <img 
                  src={sector.image} 
                  alt={sector.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${sector.color} to-transparent`}></div>
              </div>
              
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <h3 className="text-3xl font-nexa font-bold text-white mb-3">{sector.title}</h3>
                <p className="text-white/90 mb-6">{sector.description}</p>
                <Button className="bg-white text-mekloy-blue hover:bg-mekloy-yellow w-fit transition-all">
                  Explore Solutions
                  <ArrowRight size={16} className="ml-2" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 p-8 bg-white rounded-xl shadow-xl">
          <h3 className="text-2xl font-nexa font-bold text-mekloy-blue mb-6 text-center">Key Advantages Across All Sectors</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-mekloy-blue to-blue-800 rounded-lg p-6 text-white">
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center text-2xl font-bold mb-4">01</div>
              <h4 className="text-xl font-nexa font-semibold mb-3">Quality Assurance</h4>
              <p className="text-white/90">Rigorous testing and quality control measures for all products</p>
            </div>
            <div className="bg-gradient-to-br from-mekloy-blue to-blue-800 rounded-lg p-6 text-white">
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center text-2xl font-bold mb-4">02</div>
              <h4 className="text-xl font-nexa font-semibold mb-3">Technical Expertise</h4>
              <p className="text-white/90">Specialized knowledge and experience in electrical systems</p>
            </div>
            <div className="bg-gradient-to-br from-mekloy-blue to-blue-800 rounded-lg p-6 text-white">
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center text-2xl font-bold mb-4">03</div>
              <h4 className="text-xl font-nexa font-semibold mb-3">Customized Solutions</h4>
              <p className="text-white/90">Tailored products and services to meet specific requirements</p>
            </div>
            <div className="bg-gradient-to-br from-mekloy-blue to-blue-800 rounded-lg p-6 text-white">
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center text-2xl font-bold mb-4">04</div>
              <h4 className="text-xl font-nexa font-semibold mb-3">Reliable Support</h4>
              <p className="text-white/90">Dedicated customer service and technical assistance</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectorSection;
