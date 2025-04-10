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

const VisionSection = () => (
  <section id="vision" className="section relative py-24">
    <div className="absolute inset-0 bg-vision-pattern bg-cover bg-fixed">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
    </div>
    <div className="container mx-auto px-6 relative z-10">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-nexa font-bold text-white mb-8 text-center">Our Vision</h2>
        <p className="text-xl text-white/90 leading-relaxed mb-16 text-center max-w-3xl mx-auto">
          At Mekloy Integrated Services, we envision a future where quality electrical 
          infrastructure powers Nigeria's growth and development. Our mission is to provide 
          premium electrical products and solutions that meet the highest standards of 
          reliability, safety, and innovation.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/20 transform hover:scale-105 transition-all duration-300">
            <div className="w-16 h-16 rounded-full bg-mekloy-yellow text-mekloy-blue flex items-center justify-center text-2xl font-bold mx-auto mb-6">01</div>
            <h3 className="text-2xl font-nexa font-bold text-white mb-4 text-center">Excellence</h3>
            <p className="text-white/80 text-center">Commitment to the highest standards in all our products and operations</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/20 transform hover:scale-105 transition-all duration-300">
            <div className="w-16 h-16 rounded-full bg-mekloy-yellow text-mekloy-blue flex items-center justify-center text-2xl font-bold mx-auto mb-6">02</div>
            <h3 className="text-2xl font-nexa font-bold text-white mb-4 text-center">Innovation</h3>
            <p className="text-white/80 text-center">Continuously evolving with the latest technologies and methods</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/20 transform hover:scale-105 transition-all duration-300">
            <div className="w-16 h-16 rounded-full bg-mekloy-yellow text-mekloy-blue flex items-center justify-center text-2xl font-bold mx-auto mb-6">03</div>
            <h3 className="text-2xl font-nexa font-bold text-white mb-4 text-center">Integrity</h3>
            <p className="text-white/80 text-center">Honesty and transparency in all our business relationships</p>
          </div>
        </div>
        
        <div className="flex justify-center mt-16">
          <Button className="bg-mekloy-yellow text-mekloy-blue hover:bg-white transition-all text-lg px-8 py-6">
            Learn About Our Mission
            <ArrowRight className="ml-2" />
          </Button>
        </div>
      </div>
    </div>
  </section>
);

const LogisticsSection = () => (
  <section id="logistics" className="section relative py-24">
    <div className="absolute inset-0 bg-logistics-pattern bg-cover bg-fixed">
      <div className="absolute inset-0 bg-gradient-to-r from-mekloy-blue/95 to-black/90"></div>
    </div>
    <div className="container mx-auto px-6 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-nexa font-bold text-white mb-6">Logistics Excellence</h2>
          <p className="text-xl text-gray-200 mb-8">
            Beyond manufacturing and retail, Mekloy provides comprehensive logistics 
            solutions to ensure your products arrive safely and on time, every time.
          </p>
          <ul className="space-y-6">
            <li className="flex items-start bg-white/10 backdrop-blur-md p-4 rounded-lg">
              <div className="w-10 h-10 rounded-full bg-mekloy-yellow text-mekloy-blue flex items-center justify-center font-bold mr-4 mt-1">✓</div>
              <div>
                <h3 className="text-xl font-nexa font-semibold text-white mb-2">Nationwide Delivery</h3>
                <p className="text-gray-300">Reliable transportation across all states in Nigeria</p>
              </div>
            </li>
            <li className="flex items-start bg-white/10 backdrop-blur-md p-4 rounded-lg">
              <div className="w-10 h-10 rounded-full bg-mekloy-yellow text-mekloy-blue flex items-center justify-center font-bold mr-4 mt-1">✓</div>
              <div>
                <h3 className="text-xl font-nexa font-semibold text-white mb-2">Supply Chain Management</h3>
                <p className="text-gray-300">End-to-end coordination from manufacturing to installation</p>
              </div>
            </li>
            <li className="flex items-start bg-white/10 backdrop-blur-md p-4 rounded-lg">
              <div className="w-10 h-10 rounded-full bg-mekloy-yellow text-mekloy-blue flex items-center justify-center font-bold mr-4 mt-1">✓</div>
              <div>
                <h3 className="text-xl font-nexa font-semibold text-white mb-2">Project Logistics</h3>
                <p className="text-gray-300">Specialized transport for large-scale infrastructure projects</p>
              </div>
            </li>
            <li className="flex items-start bg-white/10 backdrop-blur-md p-4 rounded-lg">
              <div className="w-10 h-10 rounded-full bg-mekloy-yellow text-mekloy-blue flex items-center justify-center font-bold mr-4 mt-1">✓</div>
              <div>
                <h3 className="text-xl font-nexa font-semibold text-white mb-2">Inventory Management</h3>
                <p className="text-gray-300">Efficient storage and distribution of electrical products</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="bg-black/30 backdrop-blur-md p-8 rounded-xl border border-white/10">
          <h3 className="text-2xl font-nexa font-bold text-white mb-6">Safety Standards</h3>
          <div className="space-y-6">
            <div className="border-l-4 border-mekloy-yellow pl-4 py-2">
              <h4 className="text-xl font-nexa font-semibold mb-2 text-white">HSSE Compliance</h4>
              <p className="text-gray-300">Rigorous adherence to Health, Safety, Security, and Environmental standards</p>
            </div>
            <div className="border-l-4 border-mekloy-yellow pl-4 py-2">
              <h4 className="text-xl font-nexa font-semibold mb-2 text-white">Quality Control</h4>
              <p className="text-gray-300">Comprehensive inspection procedures for all transported goods</p>
            </div>
            <div className="border-l-4 border-mekloy-yellow pl-4 py-2">
              <h4 className="text-xl font-nexa font-semibold mb-2 text-white">Professional Training</h4>
              <p className="text-gray-300">Ongoing education for our logistics team on best practices</p>
            </div>
            <div className="border-l-4 border-mekloy-yellow pl-4 py-2">
              <h4 className="text-xl font-nexa font-semibold mb-2 text-white">Risk Management</h4>
              <p className="text-gray-300">Proactive identification and mitigation of potential challenges</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const AccreditationsSection = () => (
  <section className="py-24 bg-gradient-to-b from-white to-mekloy-light-blue/50">
    <div className="container mx-auto px-6">
      <h2 className="section-title text-center">Our Accreditations</h2>
      <p className="section-subtitle text-center">
        Mekloy Integrated Services is proud to meet and exceed industry standards
        through these professional certifications and accreditations.
      </p>
      
      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
          <div className="text-5xl mb-6">🏆</div>
          <h3 className="text-xl font-nexa font-semibold text-mekloy-blue text-center mb-3">ISO 9001:2015</h3>
          <p className="text-gray-600 text-center">Quality Management</p>
        </div>
        <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
          <div className="text-5xl mb-6">🏆</div>
          <h3 className="text-xl font-nexa font-semibold text-mekloy-blue text-center mb-3">ISO 14001</h3>
          <p className="text-gray-600 text-center">Environmental Management</p>
        </div>
        <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
          <div className="text-5xl mb-6">🏆</div>
          <h3 className="text-xl font-nexa font-semibold text-mekloy-blue text-center mb-3">OHSAS 18001</h3>
          <p className="text-gray-600 text-center">Occupational Health & Safety</p>
        </div>
        <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
          <div className="text-5xl mb-6">🏆</div>
          <h3 className="text-xl font-nexa font-semibold text-mekloy-blue text-center mb-3">COREN</h3>
          <p className="text-gray-600 text-center">Council for Regulation of Engineering</p>
        </div>
      </div>
    </div>
  </section>
);

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
      
      <main>
        <ErrorBoundary fallback={<div className="p-8 text-center">Error loading Hero section</div>}>
          <Hero />
        </ErrorBoundary>
        
        <ErrorBoundary fallback={<div className="p-8 text-center">Error loading Products section</div>}>
          <ProductsSection />
        </ErrorBoundary>
        
        <ErrorBoundary fallback={<div className="p-8 text-center">Error loading Sector section</div>}>
          <SectorSection />
        </ErrorBoundary>
        
        <ErrorBoundary fallback={<div className="p-8 text-center">Error loading Vision section</div>}>
          <VisionSection />
        </ErrorBoundary>
        
        <ErrorBoundary fallback={<div className="p-8 text-center">Error loading Logistics section</div>}>
          <LogisticsSection />
        </ErrorBoundary>
        
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
        
        <ErrorBoundary fallback={<div className="p-8 text-center">Error loading CTA section</div>}>
          <CTA />
        </ErrorBoundary>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
