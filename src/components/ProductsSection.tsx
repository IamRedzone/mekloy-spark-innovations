
import React, { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const products = [
  {
    id: 1,
    title: 'Concrete Vibrated Electrical Poles',
    description: 'High-quality, durable concrete poles for electrical power transmission and distribution.',
    image: 'https://images.unsplash.com/photo-1609767691439-38f527f93322?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
  },
  {
    id: 2,
    title: 'Industrial Electrical Products',
    description: 'Comprehensive range of electrical products designed for industrial applications and heavy-duty usage.',
    image: 'https://images.unsplash.com/photo-1565138146061-e29b079736c6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
  },
  {
    id: 3,
    title: 'Domestic Electrical Solutions',
    description: 'Stylish and functional electrical products for modern homes with an emphasis on safety and aesthetics.',
    image: 'https://images.unsplash.com/photo-1556025752-6c5cef89dbc4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
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
    description: 'Specialized concrete products for various applications in construction and infrastructure.',
    image: 'https://images.unsplash.com/photo-1578824503802-81d9f6053807?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
  },
  {
    id: 6,
    title: 'Electrical Accessories',
    description: 'A wide range of electrical accessories and components for installations and maintenance.',
    image: 'https://images.unsplash.com/photo-1662046461903-33d208ef6fc7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
  },
];

const ProductsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!sectionRef.current || !cardsRef.current) return;
    
    // Animate section title
    gsap.from(sectionRef.current.querySelector('.section-title'), {
      y: 50,
      opacity: 0,
      duration: 0.8,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
      }
    });
    
    // Animate section subtitle
    gsap.from(sectionRef.current.querySelector('.section-subtitle'), {
      y: 30,
      opacity: 0,
      duration: 0.8,
      delay: 0.2,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
      }
    });
    
    // Animate cards
    gsap.from(cardsRef.current.querySelectorAll('.product-card'), {
      y: 50,
      opacity: 0,
      stagger: 0.1,
      duration: 0.6,
      scrollTrigger: {
        trigger: cardsRef.current,
        start: 'top 80%',
      }
    });
  }, []);

  return (
    <section id="products" className="section bg-white" ref={sectionRef}>
      <div className="container mx-auto container-padding">
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
            <Card key={product.id} className="product-card overflow-hidden border-none shadow-md card-hover">
              <div className="h-48 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-mekloy-blue mb-2">{product.title}</h3>
                <p className="text-gray-600">{product.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
