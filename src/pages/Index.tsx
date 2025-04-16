import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import ProductsSection from '@/components/ProductsSection';
import SectorSection from '@/components/SectorSection';
import StatsCounter from '@/components/StatsCounter';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import ClientsSlider from '@/components/ClientsSlider';
import CTA from '@/components/CTA';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { ArrowRight, History, Users, Target } from 'lucide-react';
import ErrorBoundary from '@/components/ErrorBoundary';

gsap.registerPlugin(ScrollTrigger);

// Extracted components to reduce file size
import VisionSection from '@/components/VisionSection';
import LogisticsSection from '@/components/LogisticsSection';
import AccreditationsSection from '@/components/AccreditationsSection';

const AboutUsSection = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1521791055366-0d553872125f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" 
                alt="Mekloy team at work" 
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-mekloy-blue p-8 rounded-lg shadow-xl">
              <h3 className="text-white text-4xl font-bold">20+</h3>
              <p className="text-gray-200">Years of Excellence</p>
            </div>
          </div>
          
          <div>
            <h2 className="text-4xl font-bold text-mekloy-blue mb-6">Our Journey of Excellence</h2>
            <p className="text-gray-600 mb-8 text-lg">
              Since our establishment in 2003, Mekloy Integrated Services has been at the forefront of 
              electrical infrastructure development in Nigeria. Our commitment to quality and innovation 
              has made us a trusted partner in both public and private sector projects.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <History className="text-mekloy-blue mb-4 h-8 w-8" />
                <h3 className="text-xl font-bold mb-2">Our Legacy</h3>
                <p className="text-gray-600">Two decades of transforming Nigeria's electrical landscape.</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <Users className="text-mekloy-blue mb-4 h-8 w-8" />
                <h3 className="text-xl font-bold mb-2">Expert Team</h3>
                <p className="text-gray-600">Skilled professionals dedicated to excellence.</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <Target className="text-mekloy-blue mb-4 h-8 w-8" />
                <h3 className="text-xl font-bold mb-2">Our Mission</h3>
                <p className="text-gray-600">Powering progress through reliable electrical solutions.</p>
              </div>
            </div>
            
            <Button className="bg-mekloy-yellow text-mekloy-blue hover:bg-amber-300">
              Learn More About Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Index = () => {
  useEffect(() => {
    try {
      const sections = document.querySelectorAll('section');
      
      sections.forEach((section) => {
        gsap.fromTo(section,{
          opacity:0,
          y: 30,
        }, {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            once: true,
          },
        });
      });
    } catch (error) {
      console.error("GSAP animation error:", error);
    }
    
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="relative">
        <ErrorBoundary fallback={<div className="p-8 text-center">Error loading Hero section</div>}>
          <Hero />
        </ErrorBoundary>
        
        <div className="relative z-[2] bg-white">
          <ErrorBoundary fallback={<div className="p-8 text-center">Error loading Products section</div>}>
            <ProductsSection />
          </ErrorBoundary>
          
          <ErrorBoundary fallback={<div className="p-8 text-center">Error loading Sector section</div>}>
            <SectorSection />
          </ErrorBoundary>
          
          <ErrorBoundary fallback={<div className="p-8 text-center">Error loading About Us section</div>}>
            <AboutUsSection />
          </ErrorBoundary>
        </div>
        
        <ErrorBoundary fallback={<div className="p-8 text-center">Error loading Vision section</div>}>
          <VisionSection />
        </ErrorBoundary>
        
        <ErrorBoundary fallback={<div className="p-8 text-center">Error loading Logistics section</div>}>
          <LogisticsSection />
        </ErrorBoundary>
        
        <div className="relative z-[2] bg-white">
          <ErrorBoundary fallback={<div className="p-8 text-center">Error loading Stats section</div>}>
            <StatsCounter />
          </ErrorBoundary>
          
          <ErrorBoundary fallback={<div className="p-8 text-center">Error loading Testimonials section</div>}>
            <TestimonialsCarousel />
          </ErrorBoundary>
          
          <ErrorBoundary fallback={<div className="p-8 text-center">Error loading Accreditations section</div>}>
            <AccreditationsSection />
          </ErrorBoundary>
          
          <ErrorBoundary fallback={<div className="p-8 text-center">Error loading Clients section</div>}>
            <ClientsSlider />
          </ErrorBoundary>
        </div>
        
        <ErrorBoundary fallback={<div className="p-8 text-center">Error loading CTA section</div>}>
          <CTA />
        </ErrorBoundary>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
