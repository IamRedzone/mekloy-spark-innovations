
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
        
        {/* Vision Section */}
        <section id="vision" className="section bg-white">
          <div className="container mx-auto container-padding">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="section-title">Our Vision</h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                At Mekloy Integrated Services, we envision a future where quality electrical 
                infrastructure powers Nigeria's growth and development. Our mission is to provide 
                premium electrical products and solutions that meet the highest standards of 
                reliability, safety, and innovation.
              </p>
              <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="p-6 bg-mekloy-light-blue rounded-lg">
                  <div className="w-16 h-16 rounded-full bg-mekloy-blue text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">01</div>
                  <h3 className="text-xl font-bold text-mekloy-blue mb-3">Excellence</h3>
                  <p className="text-gray-700">Commitment to the highest standards in all our products and operations</p>
                </div>
                <div className="p-6 bg-mekloy-light-blue rounded-lg">
                  <div className="w-16 h-16 rounded-full bg-mekloy-blue text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">02</div>
                  <h3 className="text-xl font-bold text-mekloy-blue mb-3">Innovation</h3>
                  <p className="text-gray-700">Continuously evolving with the latest technologies and methods</p>
                </div>
                <div className="p-6 bg-mekloy-light-blue rounded-lg">
                  <div className="w-16 h-16 rounded-full bg-mekloy-blue text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">03</div>
                  <h3 className="text-xl font-bold text-mekloy-blue mb-3">Integrity</h3>
                  <p className="text-gray-700">Honesty and transparency in all our business relationships</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Logistics Section */}
        <section id="logistics" className="section bg-mekloy-light-blue">
          <div className="container mx-auto container-padding">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="section-title">Logistics Excellence</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Beyond manufacturing and retail, Mekloy provides comprehensive logistics 
                  solutions to ensure your products arrive safely and on time, every time.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-mekloy-blue text-white flex items-center justify-center mr-3 mt-1">✓</div>
                    <div>
                      <h3 className="text-lg font-semibold text-mekloy-blue">Nationwide Delivery</h3>
                      <p className="text-gray-600">Reliable transportation across all states in Nigeria</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-mekloy-blue text-white flex items-center justify-center mr-3 mt-1">✓</div>
                    <div>
                      <h3 className="text-lg font-semibold text-mekloy-blue">Supply Chain Management</h3>
                      <p className="text-gray-600">End-to-end coordination from manufacturing to installation</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-mekloy-blue text-white flex items-center justify-center mr-3 mt-1">✓</div>
                    <div>
                      <h3 className="text-lg font-semibold text-mekloy-blue">Project Logistics</h3>
                      <p className="text-gray-600">Specialized transport for large-scale infrastructure projects</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-mekloy-blue text-white flex items-center justify-center mr-3 mt-1">✓</div>
                    <div>
                      <h3 className="text-lg font-semibold text-mekloy-blue">Inventory Management</h3>
                      <p className="text-gray-600">Efficient storage and distribution of electrical products</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-mekloy-blue mb-6">Safety Standards</h3>
                <div className="space-y-6">
                  <div className="border-l-4 border-mekloy-yellow pl-4">
                    <h4 className="text-lg font-semibold mb-2">HSSE Compliance</h4>
                    <p className="text-gray-700">Rigorous adherence to Health, Safety, Security, and Environmental standards</p>
                  </div>
                  <div className="border-l-4 border-mekloy-yellow pl-4">
                    <h4 className="text-lg font-semibold mb-2">Quality Control</h4>
                    <p className="text-gray-700">Comprehensive inspection procedures for all transported goods</p>
                  </div>
                  <div className="border-l-4 border-mekloy-yellow pl-4">
                    <h4 className="text-lg font-semibold mb-2">Professional Training</h4>
                    <p className="text-gray-700">Ongoing education for our logistics team on best practices</p>
                  </div>
                  <div className="border-l-4 border-mekloy-yellow pl-4">
                    <h4 className="text-lg font-semibold mb-2">Risk Management</h4>
                    <p className="text-gray-700">Proactive identification and mitigation of potential challenges</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <StatsCounter />
        <TestimonialsCarousel />
        
        {/* Accreditations Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="section-title text-center">Our Accreditations</h2>
            <p className="section-subtitle text-center">
              Mekloy Integrated Services is proud to meet and exceed industry standards
              through these professional certifications and accreditations.
            </p>
            
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="flex flex-col items-center p-4 border border-gray-200 rounded-lg bg-gray-50">
                <div className="text-4xl mb-4">🏆</div>
                <h3 className="text-lg font-semibold text-mekloy-blue text-center mb-2">ISO 9001:2015</h3>
                <p className="text-sm text-gray-600 text-center">Quality Management</p>
              </div>
              <div className="flex flex-col items-center p-4 border border-gray-200 rounded-lg bg-gray-50">
                <div className="text-4xl mb-4">🏆</div>
                <h3 className="text-lg font-semibold text-mekloy-blue text-center mb-2">ISO 14001</h3>
                <p className="text-sm text-gray-600 text-center">Environmental Management</p>
              </div>
              <div className="flex flex-col items-center p-4 border border-gray-200 rounded-lg bg-gray-50">
                <div className="text-4xl mb-4">🏆</div>
                <h3 className="text-lg font-semibold text-mekloy-blue text-center mb-2">OHSAS 18001</h3>
                <p className="text-sm text-gray-600 text-center">Occupational Health & Safety</p>
              </div>
              <div className="flex flex-col items-center p-4 border border-gray-200 rounded-lg bg-gray-50">
                <div className="text-4xl mb-4">🏆</div>
                <h3 className="text-lg font-semibold text-mekloy-blue text-center mb-2">COREN</h3>
                <p className="text-sm text-gray-600 text-center">Council for Regulation of Engineering</p>
              </div>
            </div>
          </div>
        </section>
        
        <ClientsSlider />
        <CTA />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
