
import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { Phone, Zap, ArrowRight } from 'lucide-react';

const CTA = () => {
  const ctaRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  useEffect(() => {
    try {
      if (!ctaRef.current) return;
      
      const elements = ctaRef.current.querySelectorAll('.animate-item');
      
      gsap.from(elements, {
        y: 30,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        scrollTrigger: {
          trigger: ctaRef.current,
          start: 'top 80%',
        }
      });

      // Add pulsing effect to background with error handling
      const bgPulse = ctaRef.current.querySelector('.bg-pulse');
      if (bgPulse) {
        gsap.to(bgPulse, {
          opacity: 0.3,
          duration: 1.5,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut"
        });
      }
    } catch (error) {
      console.error("CTA animation error:", error);
    }
  }, []);

  // Use inline styles as a fallback in case Tailwind classes aren't applying correctly
  const sectionStyle = {
    padding: '5rem 0',
    backgroundColor: '#1e3a8a',
    position: 'relative' as const, // Type assertion to const to ensure correct Position type
    overflow: 'hidden' as const    // Type assertion to const for consistency
  };

  return (
    <section className="py-20 bg-mekloy-blue relative overflow-hidden" ref={ctaRef} style={sectionStyle}>
      {/* Background Pulse Element */}
      <div className="absolute top-40 right-40 w-64 h-64 rounded-full bg-mekloy-yellow opacity-10 bg-pulse"
           style={{backgroundColor: '#FFDD00', opacity: 0.1, borderRadius: '50%'}}></div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5" style={{opacity: 0.05}}>
        <div className="absolute inset-0" style={{
          backgroundImage: 'url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIwOS0xLjc5LTQtNC00cy00IDEuNzkxLTQgNGMwIDIuMjA5IDEuNzkgNCA0IDRzNC0xLjc5MSA0LTR6bTAtOGMwLTIuMjA5LTEuNzktNC00LTRzLTQgMS43OTEtNCA0YzAgMi4yMDkgMS43OSA0IDQgNHM0LTEuNzkxIDQtNHptMC0xNmMwIDIuMjA5LTEuNzkgNC00IDRzLTQtMS43OTEtNC00YzAtMi4yMDkgMS43OS00IDQtNHM0IDEuNzkxIDQgNHptLTggMGMwIDIuMjA5LTEuNzkgNC00IDRzLTQtMS43OTEtNC00YzAtMi4yMDkgMS43OS00IDQtNHM0IDEuNzkxIDQgNHptMCA4YzAgMi4yMDktMS43OSA0LTQgNHMtNC0xLjc5MS00LTRjMC0yLjIwOSAxLjc5LTQgNC00czQgMS43OTEgNCA0em0wIDhjMCAyLjIwOS0xLjc5IDQtNCA0cy00LTEuNzkxLTQtNGMwLTIuMjA5IDEuNzktNCA0LTRzNCAxLjc5MSA0IDR6bS0xNi04YzAgMi4yMDktMS43OSA0LTQgNHMtNC0xLjc5MS00LTRjMC0yLjIwOSAxLjc5LTQgNC00czQgMS43OTEgNCA0em0wIDhjMCAyLjIwOS0xLjc5IDQtNCA0cy00LTEuNzkxLTQtNGMwLTIuMjA5IDEuNzktNCA0LTRzNCAxLjc5MSA0IDR6bTAtOGMwLTIuMjA5LTEuNzktNC00LTRzLTQgMS43OTEtNCA0YzAgMi4yMDkgMS43OSA0IDQgNHM0LTEuNzkxIDQtNHoiLz48L2c+PC9nPjwvc3ZnPg==")',
          backgroundRepeat: 'repeat'
        }} />
      </div>
      
      {/* Yellow accent */}
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-mekloy-yellow opacity-20 blur-3xl"
           style={{backgroundColor: '#FFDD00', opacity: 0.2, filter: 'blur(24px)', borderRadius: '50%'}}></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="inline-block mb-8 animate-item">
          <div className="flex items-center justify-center w-16 h-16 mx-auto rounded-full bg-mekloy-yellow/20"
               style={{backgroundColor: 'rgba(255, 221, 0, 0.2)', borderRadius: '50%'}}>
            <Zap className="h-8 w-8 text-mekloy-yellow animate-pulse" style={{color: '#FFDD00'}} />
          </div>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-item">Let's Power Your Projects!</h2>
        <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-10 animate-item">
          Ready to elevate your electrical infrastructure with premium products and expert solutions?
          Contact Mekloy Integrated Services today to discuss your project needs.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-item">
          <Button 
            asChild 
            size="lg" 
            className="bg-mekloy-yellow text-mekloy-blue hover:bg-amber-200 font-semibold px-8 group transition-all duration-300 hover:scale-105"
            style={{backgroundColor: '#FFDD00', color: '#1e3a8a'}}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Link to="/contact" className="group flex items-center">
              Contact Us Now
              <ArrowRight className={`ml-2 h-5 w-5 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} />
            </Link>
          </Button>
          <Button 
            asChild 
            variant="outline" 
            size="lg" 
            className="text-white border-white hover:bg-white/10 group transition-all duration-300 hover:scale-105"
            style={{color: 'white', borderColor: 'white'}}
          >
            <a href="tel:+2348060000000" className="flex items-center">
              <Phone size={18} className="mr-2 group-hover:animate-pulse" />
              <span>Call Directly</span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
