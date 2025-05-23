
import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  
  useEffect(() => {
    try {
      if (!heroRef.current || !textRef.current) return;
      
      const tl = gsap.timeline();
      
      tl.fromTo(textRef.current.children,{
        y: 30,
        opacity: 0,
      }, {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out"
      });

      // Add pulsing light effect
      gsap.fromTo(heroRef.current.querySelector('.light-pulse'), {
        opacity:0.2,
        scale: 0.8,
        position: 'absolute',
        zIndex: 10,
      },{
        opacity: 0.7,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      });
      
      return () => {
        tl.kill();
      };
    } catch (error) {
      console.error("Hero animation error:", error);
    }
  }, []);

  return (
    <div 
      ref={heroRef} 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        {/* Reduced opacity of overlay to make the section less dark */}
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <video 
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/mekloy-herobg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      {/* Light effect */}
      <div className="absolute top-1/4 right-1/4 w-32 h-32 rounded-full bg-yellow-400 opacity-20 blur-3xl light-pulse z-20"></div>
      
      {/* Content */}
      <div className="container relative z-30 px-6 text-center md:text-left" ref={textRef}>
        <div className="max-w-3xl">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 text-white">
            <Zap className="text-mekloy-yellow mr-2 animate-pulse" size={18} />
            <span className="text-sm">Premium Electrical Solutions Provider</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-nexa font-bold text-white leading-tight mb-6">
            <span className="block">Powering Nigeria's</span>
            <span className="text-mekloy-yellow relative">
              Electrical Future
              <svg className="absolute -right-10 top-1/2 transform -translate-y-1/2 w-8 h-8 text-mekloy-yellow" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 3L16 7H14V11H18V9L22 12L18 15V13H14V17H16L13 21L10 17H12V13H8V15L4 12L8 9V11H12V7H10L13 3Z" fill="currentColor" />
              </svg>
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-10 font-poppins">
            Mekloy Integrated Services Company Limited is your premier provider of 
            electrical products and concrete solutions in the Niger Delta.
          </p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <Button 
              asChild 
              size="lg" 
              className="bg-mekloy-yellow text-mekloy-blue hover:bg-amber-300 font-semibold px-8 py-6 text-lg shadow-lg transition-all duration-300 hover:scale-105 group"
              onMouseEnter={() => setIsButtonHovered(true)}
              onMouseLeave={() => setIsButtonHovered(false)}
            >
              <Link to="/contact" className="flex items-center">
                Get A Free Quote
                <ArrowRight className={`ml-2 h-5 w-5 transition-transform duration-300 ${isButtonHovered ? 'translate-x-1' : ''}`} />
              </Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="text-white border-white hover:bg-white/20 py-6 text-lg group transition-all duration-300 hover:scale-105"
            >
              <Link to="/projects" className="flex items-center">
                <span>Explore Our Projects</span>
                <span className="w-0 h-0.5 bg-mekloy-yellow transition-all duration-300 ml-0 group-hover:w-4 group-hover:ml-2"></span>
              </Link>
            </Button>
          </div>
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
