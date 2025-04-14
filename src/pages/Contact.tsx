
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  useEffect(() => {
    // GSAP animations
    gsap.fromTo('.page-title',{
      y:30,
      opacity:0
    }, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: 'power3.out',
    });
    
    gsap.fromTo('.contact-content',
      {y:30,
      opacity:0,} ,{
      y: 0,
      opacity: 1,
      duration: 0.8,
      delay: 0.3,
      ease: 'power3.out',
    });
    
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="bg-mekloy-blue py-20 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIwOS0xLjc5LTQtNC00cy00IDEuNzkxLTQgNGMwIDIuMjA5IDEuNzkgNCA0IDRzNC0xLjc5MSA0LTR6bTAtOGMwLTIuMjA5LTEuNzktNC00LTRzLTQgMS43OTEtNCA0YzAgMi4yMDkgMS43OSA0IDQgNHM0LTEuNzkxIDQtNHptMC0xNmMwIDIuMjA5LTEuNzkgNC00IDRzLTQtMS43OTEtNC00YzAtMi4yMDkgMS43OS00IDQtNHM0IDEuNzkxIDQgNHptLTggMGMwIDIuMjA5LTEuNzkgNC00IDRzLTQtMS43OTEtNC00YzAtMi4yMDkgMS43OS00IDQtNHM0IDEuNzkxIDQgNHptMCA4YzAgMi4yMDktMS43OSA0LTQgNHMtNC0xLjc5MS00LTRjMC0yLjIwOSAxLjc5LTQgNC00czQgMS43OTEgNCA0em0wIDhjMCAyLjIwOS0xLjc5IDQtNCA0cy00LTEuNzkxLTQtNGMwLTIuMjA5IDEuNzktNCA0LTRzNCAxLjc5MSA0IDR6bS0xNi04YzAgMi4yMDktMS43OSA0LTQgNHMtNC0xLjc5MS00LTRjMC0yLjIwOSAxLjc5LTQgNC00czQgMS43OTEgNCA0em0wIDhjMCAyLjIwOS0xLjc5IDQtNCA0cy00LTEuNzkxLTQtNGMwLTIuMjA5IDEuNzktNCA0LTRzNCAxLjc5MSA0IDR6bTAtOGMwLTIuMjA5LTEuNzktNC00LTRzLTQgMS43OTEtNCA0YzAgMi4yMDkgMS43OSA0IDQgNHM0LTEuNzkxIDQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] bg-repeat" />
          </div>
          
          {/* Yellow accent */}
          <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-mekloy-yellow opacity-20 blur-3xl"></div>
          
          <div className="container mx-auto px-6 relative z-10 text-center">
            <h1 className="page-title text-5xl md:text-6xl font-bold text-white mb-6">Contact Us</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Have questions or need a quote? Our team is here to help with all your electrical product needs.
            </p>
          </div>
        </section>
        
        {/* Contact Form Section */}
        <section className="py-16 bg-mekloy-light-blue">
          <div className="container mx-auto px-6 contact-content">
            <ContactForm />
          </div>
        </section>
        
        {/* Map Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="section-title text-center mb-12">Find Us</h2>
            <div className="w-full h-96 bg-gray-300 rounded-lg overflow-hidden shadow-md">
              {/* Placeholder for Google Map */}
              <div className="w-full h-full flex items-center justify-center bg-gray-200">
                <p className="text-gray-600 text-lg">Map will be embedded here.</p>
              </div>
            </div>
            
            <div className="mt-12 max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-mekloy-blue mb-6">Visit Our Office</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-mekloy-light-blue p-6 rounded-lg">
                  <h4 className="text-xl font-semibold text-mekloy-blue mb-4">Head Office</h4>
                  <p className="text-gray-700 mb-2">123 Mekloy Road</p>
                  <p className="text-gray-700 mb-2">Yenagoa, Bayelsa State</p>
                  <p className="text-gray-700 mb-2">Nigeria</p>
                  <p className="text-gray-700">
                    <strong>Hours:</strong> Monday - Friday: 8am - 5pm
                  </p>
                </div>
                <div className="bg-mekloy-light-blue p-6 rounded-lg">
                  <h4 className="text-xl font-semibold text-mekloy-blue mb-4">Manufacturing Facility</h4>
                  <p className="text-gray-700 mb-2">456 Industrial Avenue</p>
                  <p className="text-gray-700 mb-2">Yenagoa, Bayelsa State</p>
                  <p className="text-gray-700 mb-2">Nigeria</p>
                  <p className="text-gray-700">
                    <strong>Hours:</strong> Monday - Saturday: 7am - 6pm
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-16 bg-mekloy-light-blue">
          <div className="container mx-auto px-6">
            <h2 className="section-title text-center">Frequently Asked Questions</h2>
            <p className="section-subtitle text-center">
              Find answers to common questions about our products, services, and processes.
            </p>
            
            <div className="max-w-3xl mx-auto mt-12 space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-mekloy-blue mb-3">What areas do you service?</h3>
                <p className="text-gray-700">
                  Mekloy Integrated Services operates primarily in Bayelsa State, but we service clients 
                  throughout Nigeria with our electrical products and solutions.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-mekloy-blue mb-3">How long does product delivery take?</h3>
                <p className="text-gray-700">
                  Delivery times vary depending on product availability and location. Typically, 
                  local deliveries in Bayelsa are completed within 1-3 business days, while 
                  nationwide deliveries may take 3-7 business days.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-mekloy-blue mb-3">Do you offer installation services?</h3>
                <p className="text-gray-700">
                  Yes, we provide professional installation services for all our electrical products. 
                  Our team of skilled technicians ensures proper installation according to safety standards.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-mekloy-blue mb-3">What warranty do you offer on your products?</h3>
                <p className="text-gray-700">
                  Most of our products come with a standard 1-2 year warranty against manufacturing defects. 
                  Extended warranty options are available for select products. Please contact us for 
                  specific warranty information on your items of interest.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-mekloy-blue mb-3">Can you handle large-scale corporate projects?</h3>
                <p className="text-gray-700">
                  Absolutely. We specialize in serving corporate clients with large-scale electrical infrastructure needs. 
                  Our team has extensive experience working with major companies like SHELL, AGIP, and government agencies.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
