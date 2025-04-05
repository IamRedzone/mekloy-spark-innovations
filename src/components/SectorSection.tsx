
import React, { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import gsap from 'gsap';

const sectors = [
  {
    id: 1,
    title: 'Industrial',
    description: 'Providing robust electrical solutions for factories, plants, and industrial facilities across Nigeria.',
    icon: '🏭',
    color: 'bg-blue-100',
    borderColor: 'border-blue-300',
  },
  {
    id: 2,
    title: 'Decor',
    description: 'Enhancing homes and businesses with aesthetic lighting and electrical installations that combine functionality and style.',
    icon: '✨',
    color: 'bg-purple-100',
    borderColor: 'border-purple-300',
  },
  {
    id: 3,
    title: 'Solar',
    description: 'Powering a sustainable future with renewable energy solutions for businesses and communities.',
    icon: '☀️',
    color: 'bg-yellow-100',
    borderColor: 'border-yellow-300',
  },
];

const SectorSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !cardsRef.current) return;

    // Animation for heading and description
    gsap.from([sectionRef.current.querySelector('.section-title'), sectionRef.current.querySelector('.section-subtitle')], {
      y: 30,
      opacity: 0,
      stagger: 0.2,
      duration: 0.8,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
      }
    });

    // Animation for cards
    gsap.from(cardsRef.current.children, {
      y: 50,
      opacity: 0,
      stagger: 0.2,
      duration: 0.8,
      scrollTrigger: {
        trigger: cardsRef.current,
        start: 'top 80%',
      }
    });

  }, []);

  return (
    <section id="sectors" className="section bg-mekloy-light-blue">
      <div className="container mx-auto container-padding" ref={sectionRef}>
        <h2 className="section-title text-center">Sectors We Serve</h2>
        <p className="section-subtitle text-center">
          Our specialized electrical products and services are tailored for these key sectors, 
          delivering customized solutions that meet the unique requirements of each industry.
        </p>
        
        <div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
          ref={cardsRef}
        >
          {sectors.map((sector) => (
            <Card 
              key={sector.id} 
              className={`${sector.color} border-2 ${sector.borderColor} shadow-none hover:shadow-lg transition-all duration-300 text-center`}
            >
              <CardContent className="pt-8 pb-6 px-4 flex flex-col items-center">
                <div className="text-5xl mb-4">{sector.icon}</div>
                <h3 className="text-2xl font-bold text-mekloy-blue mb-4">{sector.title}</h3>
                <p className="text-gray-700">{sector.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 p-8 bg-white rounded-lg shadow-md border border-gray-100">
          <h3 className="text-2xl font-bold text-mekloy-blue mb-4 text-center">Key Advantages Across All Sectors</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-mekloy-blue text-white flex items-center justify-center text-2xl font-bold mb-4">01</div>
              <h4 className="text-lg font-semibold mb-2">Quality Assurance</h4>
              <p className="text-gray-600 text-center">Rigorous testing and quality control measures for all products</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-mekloy-blue text-white flex items-center justify-center text-2xl font-bold mb-4">02</div>
              <h4 className="text-lg font-semibold mb-2">Technical Expertise</h4>
              <p className="text-gray-600 text-center">Specialized knowledge and experience in electrical systems</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-mekloy-blue text-white flex items-center justify-center text-2xl font-bold mb-4">03</div>
              <h4 className="text-lg font-semibold mb-2">Customized Solutions</h4>
              <p className="text-gray-600 text-center">Tailored products and services to meet specific requirements</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-mekloy-blue text-white flex items-center justify-center text-2xl font-bold mb-4">04</div>
              <h4 className="text-lg font-semibold mb-2">Reliable Support</h4>
              <p className="text-gray-600 text-center">Dedicated customer service and technical assistance</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectorSection;
