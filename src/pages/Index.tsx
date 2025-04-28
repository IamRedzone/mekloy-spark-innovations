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
          <div className="space-y-8">
            <div className="relative">
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="/mekloy-CEO.jpg"
                  alt="CEO of Mekloy"
                  className="w-full h-[400px] object-[center_25%] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-mekloy-blue p-8 rounded-lg shadow-xl">
                <h3 className="text-white text-4xl font-bold">20+</h3>
                <p className="text-gray-200">Years of Excellence</p>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-mekloy-blue mb-4">Message from our CEO</h3>
              <p className="text-gray-600 italic">
                "At Mekloy, we've built our reputation on delivering excellence in electrical infrastructure. 
                Our commitment to quality, innovation, and customer satisfaction has been the cornerstone of 
                our success for over two decades. We're not just building electrical systems; we're powering 
                Nigeria's future."
              </p>
              <div className="mt-4">
                <p className="font-bold text-mekloy-blue">Mrs Lucy Okolie</p>
                <p className="text-gray-500">Chief Executive Officer</p>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-4xl font-bold text-mekloy-blue mb-6">Our Journey of Excellence</h2>
            <div className="space-y-6">
              <p className="text-gray-600 text-lg">
                Founded in 2004, Mekloy Integrated Services Company Limited is a leading electrical products manufacturer and supplier based in the heart of Bayelsa State, Nigeria.
We specialize in producing high-quality vibrated concrete electrical poles, durable concrete cast products, and supplying a wide range of industrial, domestic decor, and solar electrical materials.
Whether you need concrete utility poles, solar installation supplies, or decorative electrical fittings, Mekloy delivers trusted solutions for homes, businesses, and large-scale industrial projects across Nigeria.
Contact us today for reliable electrical supplies and concrete products crafted to meet the highest standards.
              </p>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <History className="text-mekloy-blue mb-4 h-8 w-8" />
                <h3 className="text-xl font-bold mb-2">Our Heritage</h3>
                <p className="text-gray-600">
                  From our first project installing electrical poles in Bayelsa State to our current 
                  nationwide operations, we've maintained our commitment to excellence and innovation.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <Users className="text-mekloy-blue mb-4 h-8 w-8" />
                <h3 className="text-xl font-bold mb-2">Our Team</h3>
                <p className="text-gray-600">
                  With over 50 skilled professionals, including certified engineers and technicians, 
                  we bring expertise and dedication to every project.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <Target className="text-mekloy-blue mb-4 h-8 w-8" />
                <h3 className="text-xl font-bold mb-2">Our Vision</h3>
                <p className="text-gray-600">
                  To be Nigeria's most trusted provider of electrical infrastructure solutions, 
                  setting industry standards in quality and innovation.
                </p>
              </div>
            </div>
            
            <Button 
              className="bg-mekloy-yellow text-mekloy-blue hover:bg-amber-300 mt-8"
              onClick={() => window.location.href = '/projects'}
            >
              Explore Our Projects
              <ArrowRight className="ml-2 h-4 w-4" />
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
