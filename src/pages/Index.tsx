
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
import { ArrowRight } from 'lucide-react';
import ErrorBoundary from '@/components/ErrorBoundary';

gsap.registerPlugin(ScrollTrigger);

// Extracted components to reduce file size
import VisionSection from '@/components/VisionSection';
import LogisticsSection from '@/components/LogisticsSection';
import AccreditationsSection from '@/components/AccreditationsSection';

const Index = () => {
  useEffect(() => {
    try {
      const sections = document.querySelectorAll('section');
      
      sections.forEach((section) => {
        gsap.from(section, {
          opacity: 0,
          y: 30,
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
