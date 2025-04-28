
import React, { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const products = [
  {
    id: 1,
    title: 'Concrete Vibrated Electrical Poles',
    description: 'High-quality, durable concrete poles for electrical power transmission and distribution. We are the top concrete pole producers in Bayelsa state',
    image: 'round-poles.webp',
  },
  {
    id: 2,
    title: 'Industrial Electrical Products',
    description: 'Comprehensive range of electrical products designed for industrial applications and heavy-duty usage.',
    image: 'https://images.unsplash.com/photo-1587351177685-2774615c6506?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 3,
    title: 'Domestic Electrical Solutions',
    description: 'Stylish and functional electrical products for modern homes with an emphasis on safety and aesthetics.',
    image: 'https://images.unsplash.com/photo-1507494924047-60b8ee826ca9?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 4,
    title: 'Solar Energy Systems',
    description: 'Renewable energy solutions including solar panels, inverters, and complete off-grid systems.',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
  },
  {
    id: 5,
    title: 'Concrete Cast Products',
    description: 'chutes for gutters, manholes, and other concrete cast products for construction and civil engineering.',
    image: '/chutes.webp',
  },
  {
    id: 6,
    title: 'Electrical Accessories',
    description: 'A wide range of electrical accessories and components for installations and maintenance.',
    image: '/circuit-breaker-img.png',
  },
];

const ProductsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!sectionRef.current || !cardsRef.current) return;
    
    // Animate section title
    gsap.fromTo(sectionRef.current.querySelector('.section-title'),{
      y:50,
      opacity: 0
    },
     {
      y: 0,
      opacity: 1,
      duration: 0.8,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
      }
    });
    
    // Animate section subtitle
    gsap.fromTo(sectionRef.current.querySelector('.section-subtitle'),{
      y: 30,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      delay: 0.2,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
      }
    });
    
    // Animate cards
    gsap.fromTo(cardsRef.current.querySelectorAll('.product-card'),{
      y: 50,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      stagger: 0.1,
      duration: 0.6,
      scrollTrigger: {
        trigger: cardsRef.current,
        start: 'top 80%',
      }
    });
  }, []);

  return (
    <section id="products" className="section bg-gradient-to-b from-white to-gray-50 py-24" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <h2 className="section-title text-center">Our Premium Products</h2>
        <p className="section-subtitle text-center">
          Discover our comprehensive range of high-quality electrical products designed for durability, 
          performance, and reliability across industrial, domestic, and solar applications.
        </p>
        
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12" 
          ref={cardsRef}
        >
          {products.map((product) => (
            <div 
              key={product.id} 
              className="product-card group relative overflow-hidden rounded-xl shadow-lg h-[400px]"
            >
              <div className="absolute inset-0">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform transition-transform duration-500 group-hover:translate-y-[-10px]">
                <h3 className="text-2xl font-nexa font-bold mb-2">{product.title}</h3>
                <p className="text-gray-200 mb-4">{product.description}</p>
                <Button onClick={() => window.location.href = '/contact'} className="bg-mekloy-yellow text-mekloy-blue hover:bg-amber-300 transition-all">
                  Get in Touch 
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
