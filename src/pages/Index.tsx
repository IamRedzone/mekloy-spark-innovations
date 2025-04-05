
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

gsap.registerPlugin(ScrollTrigger);

const VisionSection = () => (
  <section id="vision" className="section bg-vision-pattern bg-pattern relative">
    <div className="absolute inset-0 bg-white/90 backdrop-blur-sm"></div>
    <div className="container mx-auto container-padding relative z-10">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="section-title">Our Vision</h2>
        <p className="text-xl text-gray-700 leading-relaxed">
          At Mekloy Integrated Services, we envision a future where quality electrical 
          infrastructure powers Nigeria's growth and development. Our mission is to provide 
          premium electrical products and solutions that meet the highest standards of 
          reliability, safety, and innovation.
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 glass-card transform hover:scale-105 transition-all duration-300">
            <div className="w-16 h-16 rounded-full bg-mekloy-blue text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">01</div>
            <h3 className="text-xl font-bold text-mekloy-blue mb-3">Excellence</h3>
            <p className="text-gray-700">Commitment to the highest standards in all our products and operations</p>
          </div>
          <div className="p-6 glass-card transform hover:scale-105 transition-all duration-300">
            <div className="w-16 h-16 rounded-full bg-mekloy-blue text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">02</div>
            <h3 className="text-xl font-bold text-mekloy-blue mb-3">Innovation</h3>
            <p className="text-gray-700">Continuously evolving with the latest technologies and methods</p>
          </div>
          <div className="p-6 glass-card transform hover:scale-105 transition-all duration-300">
            <div className="w-16 h-16 rounded-full bg-mekloy-blue text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">03</div>
            <h3 className="text-xl font-bold text-mekloy-blue mb-3">Integrity</h3>
            <p className="text-gray-700">Honesty and transparency in all our business relationships</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const LogisticsSection = () => (
  <section id="logistics" className="section bg-logistics-pattern bg-pattern relative">
    <div className="absolute inset-0 bg-gradient-to-r from-mekloy-blue/90 to-black/70"></div>
    <div className="container mx-auto container-padding relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Logistics Excellence</h2>
          <p className="text-lg text-gray-200 mb-6">
            Beyond manufacturing and retail, Mekloy provides comprehensive logistics 
            solutions to ensure your products arrive safely and on time, every time.
          </p>
          <ul className="space-y-4">
            <li className="flex items-start">
              <div className="w-6 h-6 rounded-full bg-mekloy-yellow text-mekloy-blue flex items-center justify-center mr-3 mt-1">✓</div>
              <div>
                <h3 className="text-lg font-semibold text-white">Nationwide Delivery</h3>
                <p className="text-gray-300">Reliable transportation across all states in Nigeria</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="w-6 h-6 rounded-full bg-mekloy-yellow text-mekloy-blue flex items-center justify-center mr-3 mt-1">✓</div>
              <div>
                <h3 className="text-lg font-semibold text-white">Supply Chain Management</h3>
                <p className="text-gray-300">End-to-end coordination from manufacturing to installation</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="w-6 h-6 rounded-full bg-mekloy-yellow text-mekloy-blue flex items-center justify-center mr-3 mt-1">✓</div>
              <div>
                <h3 className="text-lg font-semibold text-white">Project Logistics</h3>
                <p className="text-gray-300">Specialized transport for large-scale infrastructure projects</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="w-6 h-6 rounded-full bg-mekloy-yellow text-mekloy-blue flex items-center justify-center mr-3 mt-1">✓</div>
              <div>
                <h3 className="text-lg font-semibold text-white">Inventory Management</h3>
                <p className="text-gray-300">Efficient storage and distribution of electrical products</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="glass-card p-8 backdrop-blur-md">
          <h3 className="text-2xl font-bold text-white mb-6">Safety Standards</h3>
          <div className="space-y-6">
            <div className="border-l-4 border-mekloy-yellow pl-4">
              <h4 className="text-lg font-semibold mb-2 text-white">HSSE Compliance</h4>
              <p className="text-gray-200">Rigorous adherence to Health, Safety, Security, and Environmental standards</p>
            </div>
            <div className="border-l-4 border-mekloy-yellow pl-4">
              <h4 className="text-lg font-semibold mb-2 text-white">Quality Control</h4>
              <p className="text-gray-200">Comprehensive inspection procedures for all transported goods</p>
            </div>
            <div className="border-l-4 border-mekloy-yellow pl-4">
              <h4 className="text-lg font-semibold mb-2 text-white">Professional Training</h4>
              <p className="text-gray-200">Ongoing education for our logistics team on best practices</p>
            </div>
            <div className="border-l-4 border-mekloy-yellow pl-4">
              <h4 className="text-lg font-semibold mb-2 text-white">Risk Management</h4>
              <p className="text-gray-200">Proactive identification and mitigation of potential challenges</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const AccreditationsSection = () => (
  <section className="py-16 bg-gradient-to-b from-white to-mekloy-light-blue/30">
    <div className="container mx-auto px-6">
      <h2 className="section-title text-center">Our Accreditations</h2>
      <p className="section-subtitle text-center">
        Mekloy Integrated Services is proud to meet and exceed industry standards
        through these professional certifications and accreditations.
      </p>
      
      <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="flex flex-col items-center p-4 glass-card hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
          <div className="text-4xl mb-4">🏆</div>
          <h3 className="text-lg font-semibold text-mekloy-blue text-center mb-2">ISO 9001:2015</h3>
          <p className="text-sm text-gray-600 text-center">Quality Management</p>
        </div>
        <div className="flex flex-col items-center p-4 glass-card hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
          <div className="text-4xl mb-4">🏆</div>
          <h3 className="text-lg font-semibold text-mekloy-blue text-center mb-2">ISO 14001</h3>
          <p className="text-sm text-gray-600 text-center">Environmental Management</p>
        </div>
        <div className="flex flex-col items-center p-4 glass-card hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
          <div className="text-4xl mb-4">🏆</div>
          <h3 className="text-lg font-semibold text-mekloy-blue text-center mb-2">OHSAS 18001</h3>
          <p className="text-sm text-gray-600 text-center">Occupational Health & Safety</p>
        </div>
        <div className="flex flex-col items-center p-4 glass-card hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
          <div className="text-4xl mb-4">🏆</div>
          <h3 className="text-lg font-semibold text-mekloy-blue text-center mb-2">COREN</h3>
          <p className="text-sm text-gray-600 text-center">Council for Regulation of Engineering</p>
        </div>
      </div>
    </div>
  </section>
);

const Index = () => {
  useEffect(() => {
    // Initialize GSAP animations
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
    
    return () => {
      // Clean up ScrollTrigger instances
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      
      <main>
        <ProductsSection />
        <SectorSection />
        <VisionSection />
        <LogisticsSection />
        <StatsCounter />
        <TestimonialsCarousel />
        <AccreditationsSection />
        <ClientsSlider />
        <CTA />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
