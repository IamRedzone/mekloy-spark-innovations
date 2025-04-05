
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Project data
const projects = [
  {
    id: 1,
    title: 'AGIP Electrical Infrastructure Upgrade',
    category: 'Industrial',
    description: 'Comprehensive upgrade of electrical distribution network for AGIP facilities in Bayelsa State, including installation of concrete electrical poles and transformers.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    year: 2023,
  },
  {
    id: 2,
    title: 'SHELL Solar Power Integration',
    category: 'Solar',
    description: 'Design and implementation of solar power systems for SHELL operational facilities, reducing reliance on traditional power sources and lowering carbon footprint.',
    image: 'https://images.unsplash.com/photo-1614610749131-ed488bde237f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    year: 2022,
  },
  {
    id: 3,
    title: 'Bayelsa State Residential Electrification',
    category: 'Domestic',
    description: 'Government-backed initiative to provide reliable electrical infrastructure to residential areas in Bayelsa State, improving access to electricity for local communities.',
    image: 'https://images.unsplash.com/photo-1563438425979-76e193e6b7fa?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    year: 2023,
  },
  {
    id: 4,
    title: 'LUBRIK Construction Power Systems',
    category: 'Industrial',
    description: 'Provision of concrete electrical poles and power distribution systems for multiple LUBRIK construction sites across southern Nigeria.',
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    year: 2021,
  },
  {
    id: 5,
    title: 'Local Content Office Solar Installation',
    category: 'Solar',
    description: 'Design and installation of a complete solar power system for the Local Content office, including panels, inverters, and backup battery systems.',
    image: 'https://images.unsplash.com/photo-1623969451962-37a466e4c9ac?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    year: 2022,
  },
  {
    id: 6,
    title: 'Yenagoa Commercial District Lighting',
    category: 'Domestic',
    description: 'Comprehensive street and commercial lighting project for Yenagoa's business district, enhancing safety and business operations after dark.',
    image: 'https://images.unsplash.com/photo-1573167507387-6b4b98cb7c13?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    year: 2021,
  },
];

const Projects = () => {
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [activeFilter, setActiveFilter] = useState('All');
  
  const filterCategories = ['All', 'Industrial', 'Domestic', 'Solar'];
  
  useEffect(() => {
    // GSAP animations
    gsap.from('.page-title', {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
    });
    
    gsap.from('.filter-buttons', {
      y: 20,
      opacity: 0,
      duration: 0.6,
      delay: 0.3,
      ease: 'power3.out',
    });
    
    gsap.from('.project-card', {
      y: 50,
      opacity: 0,
      stagger: 0.1,
      duration: 0.6,
      delay: 0.5,
      ease: 'power3.out',
    });
    
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [filteredProjects]);
  
  const handleFilterChange = (category: string) => {
    setActiveFilter(category);
    
    if (category === 'All') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === category));
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="bg-mekloy-blue py-24 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIwOS0xLjc5LTQtNC00cy00IDEuNzkxLTQgNGMwIDIuMjA5IDEuNzkgNCA0IDRzNC0xLjc5MSA0LTR6bTAtOGMwLTIuMjA5LTEuNzktNC00LTRzLTQgMS43OTEtNCA0YzAgMi4yMDkgMS43OSA0IDQgNHM0LTEuNzkxIDQtNHptMC0xNmMwIDIuMjA5LTEuNzkgNC00IDRzLTQtMS43OTEtNC00YzAtMi4yMDkgMS43OS00IDQtNHM0IDEuNzkxIDQgNHptLTggMGMwIDIuMjA5LTEuNzkgNC00IDRzLTQtMS43OTEtNC00YzAtMi4yMDkgMS43OS00IDQtNHM0IDEuNzkxIDQgNHptMCA4YzAgMi4yMDktMS43OSA0LTQgNHMtNC0xLjc5MS00LTRjMC0yLjIwOSAxLjc5LTQgNC00czQgMS43OTEgNCA0em0wIDhjMCAyLjIwOS0xLjc5IDQtNCA0cy00LTEuNzkxLTQtNGMwLTIuMjA5IDEuNzktNCA0LTRzNCAxLjc5MSA0IDR6bS0xNi04YzAgMi4yMDktMS43OSA0LTQgNHMtNC0xLjc5MS00LTRjMC0yLjIwOSAxLjc5LTQgNC00czQgMS43OTEgNCA0em0wIDhjMCAyLjIwOS0xLjc5IDQtNCA0cy00LTEuNzkxLTQtNGMwLTIuMjA5IDEuNzktNCA0LTRzNCAxLjc5MSA0IDR6bTAtOGMwLTIuMjA5LTEuNzktNC00LTRzLTQgMS43OTEtNCA0YzAgMi4yMDkgMS43OSA0IDQgNHM0LTEuNzkxIDQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] bg-repeat" />
          </div>
          
          {/* Yellow accent */}
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-mekloy-yellow opacity-20 blur-3xl"></div>
          
          <div className="container mx-auto px-6 relative z-10 text-center">
            <h1 className="page-title text-5xl md:text-6xl font-bold text-white mb-6">Our Projects</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Explore our portfolio of successful electrical infrastructure and product 
              installations across industrial, domestic, and solar sectors.
            </p>
          </div>
        </section>
        
        {/* Projects Section */}
        <section className="py-16 bg-mekloy-light-blue">
          <div className="container mx-auto px-6">
            {/* Filter Buttons */}
            <div className="filter-buttons flex flex-wrap justify-center gap-4 mb-12">
              {filterCategories.map((category) => (
                <Button
                  key={category}
                  variant={activeFilter === category ? "default" : "outline"}
                  className={activeFilter === category ? "bg-mekloy-blue" : "border-mekloy-blue text-mekloy-blue"}
                  onClick={() => handleFilterChange(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
            
            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <Card key={project.id} className="project-card overflow-hidden border-none shadow-lg">
                  <div className="h-60 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-sm font-medium text-mekloy-blue bg-mekloy-blue/10 px-3 py-1 rounded-full">
                        {project.category}
                      </span>
                      <span className="text-sm text-gray-500">{project.year}</span>
                    </div>
                    <h3 className="text-xl font-bold text-mekloy-blue mb-3">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <Button variant="outline" className="w-full border-mekloy-blue text-mekloy-blue hover:bg-mekloy-blue hover:text-white">
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Project Process Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="section-title text-center">Our Project Process</h2>
            <p className="section-subtitle text-center">
              We follow a comprehensive approach to ensure every project is delivered 
              with the highest quality and efficiency from start to finish.
            </p>
            
            <div className="relative mt-16">
              {/* Process Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-mekloy-blue/20 top-0 hidden md:block"></div>
              
              <div className="space-y-16">
                {/* Step 1 */}
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 text-center md:text-right">
                    <h3 className="text-2xl font-bold text-mekloy-blue mb-3">Consultation & Requirements</h3>
                    <p className="text-gray-600">
                      We begin by understanding your specific needs, constraints, and objectives 
                      through detailed consultations with your team.
                    </p>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-mekloy-blue text-white flex items-center justify-center text-xl font-bold my-6 md:my-0 z-10">1</div>
                  <div className="md:w-1/2 md:pl-12"></div>
                </div>
                
                {/* Step 2 */}
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12"></div>
                  <div className="w-12 h-12 rounded-full bg-mekloy-blue text-white flex items-center justify-center text-xl font-bold my-6 md:my-0 z-10">2</div>
                  <div className="md:w-1/2 md:pl-12 text-center md:text-left">
                    <h3 className="text-2xl font-bold text-mekloy-blue mb-3">Design & Planning</h3>
                    <p className="text-gray-600">
                      Our experienced engineers develop detailed plans and specifications, 
                      considering all technical requirements and safety standards.
                    </p>
                  </div>
                </div>
                
                {/* Step 3 */}
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 text-center md:text-right">
                    <h3 className="text-2xl font-bold text-mekloy-blue mb-3">Material Procurement</h3>
                    <p className="text-gray-600">
                      We source high-quality materials and equipment that meet project specifications
                      and international quality standards.
                    </p>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-mekloy-blue text-white flex items-center justify-center text-xl font-bold my-6 md:my-0 z-10">3</div>
                  <div className="md:w-1/2 md:pl-12"></div>
                </div>
                
                {/* Step 4 */}
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12"></div>
                  <div className="w-12 h-12 rounded-full bg-mekloy-blue text-white flex items-center justify-center text-xl font-bold my-6 md:my-0 z-10">4</div>
                  <div className="md:w-1/2 md:pl-12 text-center md:text-left">
                    <h3 className="text-2xl font-bold text-mekloy-blue mb-3">Implementation</h3>
                    <p className="text-gray-600">
                      Our skilled technicians execute the project according to the approved plans,
                      with strict adherence to safety protocols and quality control.
                    </p>
                  </div>
                </div>
                
                {/* Step 5 */}
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 text-center md:text-right">
                    <h3 className="text-2xl font-bold text-mekloy-blue mb-3">Testing & Verification</h3>
                    <p className="text-gray-600">
                      Comprehensive testing procedures ensure all systems function correctly
                      and meet specified performance criteria.
                    </p>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-mekloy-blue text-white flex items-center justify-center text-xl font-bold my-6 md:my-0 z-10">5</div>
                  <div className="md:w-1/2 md:pl-12"></div>
                </div>
                
                {/* Step 6 */}
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12"></div>
                  <div className="w-12 h-12 rounded-full bg-mekloy-blue text-white flex items-center justify-center text-xl font-bold my-6 md:my-0 z-10">6</div>
                  <div className="md:w-1/2 md:pl-12 text-center md:text-left">
                    <h3 className="text-2xl font-bold text-mekloy-blue mb-3">Handover & Support</h3>
                    <p className="text-gray-600">
                      We provide thorough documentation, training, and ongoing support
                      to ensure long-term success of the implemented solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <CTA />
      </main>
      
      <Footer />
    </div>
  );
};

export default Projects;
