
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!heroRef.current || !textRef.current) return;
    
    const tl = gsap.timeline();
    
    tl.from(textRef.current.children, {
      opacity: 0,
      y: 30,
      stagger: 0.2,
      duration: 0.8,
      ease: "power3.out"
    });
    
    // Parallax effect on scroll
    gsap.to(heroRef.current.querySelector('.parallax-bg'), {
      backgroundPositionY: "30%",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });
    
    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div 
      ref={heroRef} 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <div className="absolute inset-0 parallax-bg bg-hero-pattern bg-pattern after:absolute after:inset-0 after:bg-gradient-to-r after:from-mekloy-blue/90 after:to-black/70 after:z-10"></div>
      
      {/* Yellow accent */}
      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-mekloy-yellow opacity-20 blur-3xl z-20"></div>
      
      {/* Content */}
      <div className="container relative z-30 px-6 text-center" ref={textRef}>
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight mb-6">
          <span className="block">Powering Nigeria's</span>
          <span className="text-mekloy-yellow">Electrical Future</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-10 font-poppins">
          Mekloy Integrated Services Company Limited is your premier provider of 
          electrical products and concrete solutions in Bayelsa State.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild size="lg" className="bg-mekloy-yellow text-mekloy-blue hover:bg-amber-200 font-semibold px-8">
            <Link to="/contact">
              Get In Touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="text-white border-white hover:bg-white/10">
            <Link to="/projects">
              Explore Our Projects
            </Link>
          </Button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-30">
        <div className="w-8 h-12 rounded-full border-2 border-white flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white rounded-full animate-[float_1.5s_ease-in-out_infinite]"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
