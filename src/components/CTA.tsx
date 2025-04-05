
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import gsap from 'gsap';

const CTA = () => {
  const ctaRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
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
  }, []);

  return (
    <section className="py-20 bg-mekloy-blue relative overflow-hidden" ref={ctaRef}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIwOS0xLjc5LTQtNC00cy00IDEuNzkxLTQgNGMwIDIuMjA5IDEuNzkgNCA0IDRzNC0xLjc5MSA0LTR6bTAtOGMwLTIuMjA5LTEuNzktNC00LTRzLTQgMS43OTEtNCA0YzAgMi4yMDkgMS43OSA0IDQgNHM0LTEuNzkxIDQtNHptMC0xNmMwIDIuMjA5LTEuNzkgNC00IDRzLTQtMS43OTEtNC00YzAtMi4yMDkgMS43OS00IDQtNHM0IDEuNzkxIDQgNHptLTggMGMwIDIuMjA5LTEuNzkgNC00IDRzLTQtMS43OTEtNC00YzAtMi4yMDkgMS43OS00IDQtNHM0IDEuNzkxIDQgNHptMCA4YzAgMi4yMDktMS43OSA0LTQgNHMtNC0xLjc5MS00LTRjMC0yLjIwOSAxLjc5LTQgNC00czQgMS43OTEgNCA0em0wIDhjMCAyLjIwOS0xLjc5IDQtNCA0cy00LTEuNzkxLTQtNGMwLTIuMjA5IDEuNzktNCA0LTRzNCAxLjc5MSA0IDR6bS0xNi04YzAgMi4yMDktMS43OSA0LTQgNHMtNC0xLjc5MS00LTRjMC0yLjIwOSAxLjc5LTQgNC00czQgMS43OTEgNCA0em0wIDhjMCAyLjIwOS0xLjc5IDQtNCA0cy00LTEuNzkxLTQtNGMwLTIuMjA5IDEuNzktNCA0LTRzNCAxLjc5MSA0IDR6bTAtOGMwLTIuMjA5LTEuNzktNC00LTRzLTQgMS43OTEtNCA0YzAgMi4yMDkgMS43OSA0IDQgNHM0LTEuNzkxIDQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] bg-repeat" />
      </div>
      
      {/* Yellow accent */}
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-mekloy-yellow opacity-20 blur-3xl"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-item">Let's Work Together!</h2>
        <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-10 animate-item">
          Ready to elevate your electrical infrastructure with premium products and expert solutions?
          Contact Mekloy Integrated Services today to discuss your project needs.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-item">
          <Button asChild size="lg" className="bg-mekloy-yellow text-mekloy-blue hover:bg-amber-200 font-semibold px-8">
            <Link to="/contact">
              Contact Us Now
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="text-white border-white hover:bg-white/10">
            <a href="tel:+2348060000000">
              Call Directly
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
