
import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';

interface StatProps {
  value: number;
  label: string;
  suffix?: string;
  duration?: number;
}

const Stat = ({ value, label, suffix = '+', duration = 2 }: StatProps) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = value;
      
      // Make sure the animation takes the same amount of time regardless of the end value
      const incrementTime = (duration * 1000) / end;
      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) {
          clearInterval(timer);
        }
      }, incrementTime);
      
      return () => {
        clearInterval(timer);
      };
    }
  }, [inView, value, duration]);

  return (
    <div ref={ref} className="text-center bg-white/20 backdrop-blur-sm p-6 rounded-lg hover:bg-white/30 transition-all duration-300 transform hover:-translate-y-1">
      <h3 className="text-4xl md:text-5xl font-bold text-white">
        {count}
        <span className="text-mekloy-yellow">{suffix}</span>
      </h3>
      <p className="text-lg text-gray-200 mt-2 font-poppins">{label}</p>
    </div>
  );
};

const StatsCounter = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!sectionRef.current) return;
    
    gsap.from(sectionRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
      }
    });
  }, []);

  return (
    <section 
      className="py-24 bg-cover bg-center bg-fixed relative" 
      style={{ 
        backgroundImage: "linear-gradient(to right, rgba(30, 58, 138, 0.9), rgba(0, 0, 0, 0.8)), url('https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=2000&auto=format&fit=crop&q=80')" 
      }}
      ref={sectionRef}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Stat value={200} label="Projects Completed" />
            <Stat value={15} label="Years Experience" />
            <Stat value={50} label="Corporate Clients" />
            <Stat value={1000} label="Products Delivered" suffix="k+" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;
