
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
    <div ref={ref} className="text-center">
      <h3 className="text-4xl md:text-5xl font-bold text-mekloy-blue">
        {count}
        <span className="text-mekloy-yellow">{suffix}</span>
      </h3>
      <p className="text-lg text-gray-600 mt-2">{label}</p>
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
    <section className="py-24 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-mekloy-blue to-blue-700 rounded-lg shadow-xl p-12">
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
