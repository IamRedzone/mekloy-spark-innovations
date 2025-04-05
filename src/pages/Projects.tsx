
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
    description: "Comprehensive street and commercial lighting project for Yenagoa's business district, enhancing safety and business operations after dark.",
    image: 'https://images.unsplash.com/photo-1573167507387-6b4b98cb7c13?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    year: 2021,
  },
];

// Break the page into smaller components
const ProjectsHero = () => (
  <section className="bg-projects-pattern bg-pattern relative overflow-hidden py-24">
    {/* Overlay */}
    <div className="absolute inset-0 bg-gradient-to-b from-mekloy-blue/80 to-black/70"></div>
    
    <div className="container mx-auto px-6 relative z-10 text-center">
      <h1 className="page-title text-5xl md:text-6xl font-bold text-white mb-6">Our Projects</h1>
      <p className="text-xl text-gray-200 max-w-3xl mx-auto font-poppins">
        Explore our portfolio of successful electrical infrastructure and product 
        installations across industrial, domestic, and solar sectors.
      </p>
    </div>
  </section>
);

const ProjectsList = ({ projects, activeFilter, handleFilterChange }) => {
  const filterCategories = ['All', 'Industrial', 'Domestic', 'Solar'];
  
  return (
    <section className="py-16 bg-gradient-to-b from-mekloy-light-blue to-white">
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
          {projects.map((project) => (
            <Card key={project.id} className="project-card overflow-hidden border-none shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="h-60 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <CardContent className="p-6 bg-white/80 backdrop-blur-sm">
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
  );
};

const ProjectProcess = () => {
  const steps = [
    {
      number: 1,
      title: "Consultation & Requirements",
      description: "We begin by understanding your specific needs, constraints, and objectives through detailed consultations with your team."
    },
    {
      number: 2,
      title: "Design & Planning",
      description: "Our experienced engineers develop detailed plans and specifications, considering all technical requirements and safety standards."
    },
    {
      number: 3,
      title: "Material Procurement",
      description: "We source high-quality materials and equipment that meet project specifications and international quality standards."
    },
    {
      number: 4,
      title: "Implementation",
      description: "Our skilled technicians execute the project according to the approved plans, with strict adherence to safety protocols and quality control."
    },
    {
      number: 5,
      title: "Testing & Verification",
      description: "Comprehensive testing procedures ensure all systems function correctly and meet specified performance criteria."
    },
    {
      number: 6,
      title: "Handover & Support",
      description: "We provide thorough documentation, training, and ongoing support to ensure long-term success of the implemented solutions."
    }
  ];
  
  return (
    <section className="py-20 bg-gradient-to-b from-white to-mekloy-light-blue/30">
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
            {steps.map((step, index) => (
              <div key={step.number} className="relative flex flex-col md:flex-row items-center">
                {index % 2 === 0 ? (
                  <>
                    <div className="md:w-1/2 md:pr-12 text-center md:text-right">
                      <h3 className="text-2xl font-bold text-mekloy-blue mb-3">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-mekloy-blue text-white flex items-center justify-center text-xl font-bold my-6 md:my-0 z-10">{step.number}</div>
                    <div className="md:w-1/2 md:pl-12"></div>
                  </>
                ) : (
                  <>
                    <div className="md:w-1/2 md:pr-12"></div>
                    <div className="w-12 h-12 rounded-full bg-mekloy-blue text-white flex items-center justify-center text-xl font-bold my-6 md:my-0 z-10">{step.number}</div>
                    <div className="md:w-1/2 md:pl-12 text-center md:text-left">
                      <h3 className="text-2xl font-bold text-mekloy-blue mb-3">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [activeFilter, setActiveFilter] = useState('All');
  
  useEffect(() => {
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
        <ProjectsHero />
        <ProjectsList 
          projects={filteredProjects} 
          activeFilter={activeFilter}
          handleFilterChange={handleFilterChange}
        />
        <ProjectProcess />
        <CTA />
      </main>
      
      <Footer />
    </div>
  );
};

export default Projects;
