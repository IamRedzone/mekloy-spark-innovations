
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const VisionSection = () => (
  <section id="vision" className="section relative py-24 z-[1]">
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
          <Button onClick={() => window.location.href = '/contact'} className="bg-mekloy-yellow text-mekloy-blue hover:bg-white transition-all text-lg px-8 py-6">
            Get to meet the team
            <ArrowRight className="ml-2" />
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default VisionSection;
