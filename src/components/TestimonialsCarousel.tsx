import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';

const testimonials = [
  {
    id: 1,
    name: 'Eng. David Okonkwo',
    role: 'Chief Engineer, AGIP',
    content: 'Mekloy Integrated Services has been a reliable partner for our electrical infrastructure projects. Their concrete poles have excellent durability and meet our strict quality standards.',
    image: 'https://randomuser.me/api/portraits/men/1.jpg',
  },
  {
    id: 2,
    name: 'Eng. Sarah Johnson',
    role: 'Project Manager, SHELL',
    content: 'We\'ve worked with Mekloy for over 5 years and have always been impressed with their professionalism and product quality. Their team is responsive and delivery is always on time.',
    image: 'https://randomuser.me/api/portraits/women/2.jpg',
  },
  {
    id: 3,
    name: 'Eng. Michael Adeyemi',
    role: 'Lead Engineer, Bayelsa State Govt.',
    content: 'The solar solutions provided by Mekloy have transformed our energy infrastructure projects. Their expertise in renewable energy systems is outstanding.',
    image: 'https://randomuser.me/api/portraits/men/3.jpg',
  },
  {
    id: 4,
    name: 'Eng. Amina Bakare',
    role: 'Technical Director, LUBRIK Construction',
    content: 'Mekloy\'s electrical products have been integral to our construction projects. The quality is consistent, and their technical support is excellent.',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
];

const TestimonialsCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  
  const carouselRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<number | null>(null);
  
  const goToNext = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };
  
  const goToPrev = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };
  
  useEffect(() => {
    if (inView) {
      intervalRef.current = window.setInterval(() => {
        goToNext();
      }, 5000) as unknown as number;
    }
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [inView, isAnimating]);
  
  const handleMouseEnter = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };
  
  const handleMouseLeave = () => {
    if (!intervalRef.current) {
      intervalRef.current = window.setInterval(() => {
        goToNext();
      }, 5000) as unknown as number;
    }
  };
  
  useEffect(() => {
    if (!carouselRef.current || !inView) return;
    
    gsap.from(carouselRef.current.querySelectorAll('.animate-item'), {
      y: 30,
      opacity: 0,
      stagger: 0.2,
      duration: 0.8,
      ease: 'power3.out',
    });
  }, [inView]);

  return (
    <section className="py-24 bg-mekloy-light-blue">
      <div 
        className="container mx-auto px-6" 
        ref={ref}
      >
        <div 
          className="max-w-5xl mx-auto" 
          ref={carouselRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <h2 className="section-title text-center animate-item">What Engineers Say</h2>
          <p className="section-subtitle text-center animate-item">
            Hear from the professionals who trust our electrical products and services
            for their critical infrastructure projects.
          </p>
          
          <div className="mt-12 relative">
            <div className="absolute -left-10 top-1/2 transform -translate-y-1/2 z-10">
              <Button 
                variant="outline" 
                size="icon" 
                className="rounded-full bg-white hover:bg-mekloy-blue hover:text-white shadow-md animate-item"
                onClick={goToPrev}
              >
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </div>
            
            <div className="overflow-hidden">
              <div 
                className="transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                <div className="flex">
                  {testimonials.map((testimonial) => (
                    <Card 
                      key={testimonial.id} 
                      className="flex-shrink-0 w-full bg-white shadow-lg border-none overflow-hidden"
                    >
                      <CardContent className="p-8 md:p-12">
                        <Quote className="h-12 w-12 text-mekloy-yellow opacity-30 mb-6" />
                        <p className="text-lg md:text-xl text-[#D3E4FD] bg-mekloy-blue bg-opacity-90 p-4 rounded-lg mb-8 italic">
                          "{testimonial.content}"
                        </p>
                        <div className="flex items-center">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name} 
                            className="w-16 h-16 rounded-full object-cover border-2 border-mekloy-blue"
                          />
                          <div className="ml-4">
                            <h4 className="text-lg font-bold text-mekloy-blue">{testimonial.name}</h4>
                            <p className="text-gray-600">{testimonial.role}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="absolute -right-10 top-1/2 transform -translate-y-1/2 z-10">
              <Button 
                variant="outline" 
                size="icon" 
                className="rounded-full bg-white hover:bg-mekloy-blue hover:text-white shadow-md animate-item"
                onClick={goToNext}
              >
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          <div className="flex justify-center space-x-2 mt-8 animate-item">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === activeIndex ? 'bg-mekloy-blue' : 'bg-gray-300'
                }`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
