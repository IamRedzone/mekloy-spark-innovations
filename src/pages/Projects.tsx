import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import ProjectModal, { ProjectDetails } from '@/components/ProjectModal';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Project data with enhanced details
const projectsData: ProjectDetails[] = [
  // Industrial Sector
  {
    id: 1,
    title: 'AGIP Electrical Infrastructure Upgrade',
    category: 'Industrial',
    description: 'Comprehensive upgrade of electrical distribution network for AGIP facilities in Bayelsa State.',
    fullDescription: 'Mekloy executed a comprehensive upgrade of the electrical distribution network for AGIP facilities across Bayelsa State. The project involved the replacement of aging infrastructure, installation of new concrete electrical poles, transformers, and implementation of modern safety features to enhance operational reliability and worker safety.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    additionalImages: [
      'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1574105760593-cee4d77f27d6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
    ],
    year: 2023,
    location: 'Bayelsa State, Nigeria',
    duration: '8 months',
    budget: '$250,000 - $500,000',
    achievements: [
      'Reduced power outages by 78% in critical operational areas',
      'Improved energy efficiency resulting in 22% cost reduction',
      'Zero safety incidents throughout installation',
      'Completed ahead of schedule by 2 weeks'
    ]
  },
  {
    id: 2,
    title: 'LUBRIK Construction Power Systems',
    category: 'Industrial',
    description: 'Provision of concrete electrical poles and power distribution systems for multiple LUBRIK construction sites.',
    fullDescription: 'Mekloy provided a complete power distribution solution for multiple LUBRIK construction sites across southern Nigeria. The project included the manufacturing and installation of concrete electrical poles, transformers, and distribution panels, ensuring consistent and reliable power supply for construction activities.',
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    additionalImages: [
      'https://images.unsplash.com/photo-1563448927163-cb9b79548389?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1581092218370-be02bd3956e6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
    ],
    year: 2021,
    location: 'Multiple sites, Southern Nigeria',
    duration: '14 months',
    budget: '$400,000 - $700,000',
    achievements: [
      'Successfully deployed power infrastructure across 7 distinct construction sites',
      'Developed customized pole specifications to meet unique site requirements',
      'Reduced generator fuel consumption by 45% through efficient grid connections',
      'Implemented modular system allowing quick redeployment as construction phases shifted'
    ]
  },
  
  // Solar Sector
  {
    id: 3,
    title: 'SHELL Solar Power Integration',
    category: 'Solar',
    description: 'Design and implementation of solar power systems for SHELL operational facilities.',
    fullDescription: 'Mekloy designed and installed comprehensive solar power systems across multiple SHELL operational facilities, significantly reducing reliance on traditional power sources and lowering the carbon footprint. The project included solar panel arrays, battery storage systems, inverters, and smart grid integration to maximize efficiency and reliability.',
    image: 'https://images.unsplash.com/photo-1614610749131-ed488bde237f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    additionalImages: [
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1521618755572-156ae0cdd74d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
    ],
    year: 2022,
    location: 'Delta & Rivers States, Nigeria',
    duration: '10 months',
    budget: '$800,000 - $1,200,000',
    achievements: [
      'Reduced operational carbon emissions by approximately 1,200 metric tons annually',
      'Achieved 40% reduction in electricity costs',
      'Implemented smart grid technology allowing for real-time monitoring and optimization',
      'System designed to withstand harsh environmental conditions with minimal maintenance'
    ]
  },
  {
    id: 4,
    title: 'Local Content Office Solar Installation',
    category: 'Solar',
    description: 'Design and installation of a complete solar power system for the Local Content office.',
    fullDescription: 'Mekloy designed and installed a state-of-the-art solar power system for the Local Content office, transforming it into a model of renewable energy adoption. The project utilized high-efficiency solar panels, smart inverters, and an advanced battery backup system to ensure uninterrupted power supply even during extended periods of low sunlight.',
    image: 'https://images.unsplash.com/photo-1623969451962-37a466e4c9ac?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    additionalImages: [
      'https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1548336011-d952869834bc?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
    ],
    year: 2022,
    location: 'Yenagoa, Bayelsa State',
    duration: '3 months',
    budget: '$150,000 - $300,000',
    achievements: [
      'Achieved complete independence from the grid during daylight hours',
      'Reduced monthly electricity costs by more than 60%',
      'System includes educational component for visitors to learn about renewable energy',
      'Integrated with smart building systems for optimized energy usage'
    ]
  },
  
  // Domestic Sector
  {
    id: 5,
    title: 'Bayelsa State Residential Electrification',
    category: 'Domestic',
    description: 'Government-backed initiative to provide reliable electrical infrastructure to residential areas in Bayelsa State.',
    fullDescription: 'Mekloy partnered with the Bayelsa State government to implement a comprehensive residential electrification project, bringing reliable electrical infrastructure to previously underserved communities. The project included installation of concrete poles, transformers, and last-mile connections, dramatically improving quality of life and enabling economic activities.',
    image: 'https://images.unsplash.com/photo-1563438425979-76e193e6b7fa?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    additionalImages: [
      'https://images.unsplash.com/photo-1579541671172-43429ce17aca?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1622142961031-9d9e5115c147?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
    ],
    year: 2023,
    location: 'Multiple Communities, Bayelsa State',
    duration: '18 months',
    budget: '$1,500,000 - $2,000,000',
    achievements: [
      'Connected over 15,000 households to the electrical grid',
      'Trained 50 local technicians in basic maintenance and safety',
      'Implemented prepaid metering system to ensure sustainability',
      'Created community electrical committees for ongoing management'
    ]
  },
  {
    id: 6,
    title: 'Yenagoa Commercial District Lighting',
    category: 'Domestic',
    description: "Comprehensive street and commercial lighting project for Yenagoa's business district.",
    fullDescription: "Mekloy executed a transformative street and commercial lighting project for Yenagoa's business district, dramatically enhancing safety and extending business operations after dark. The project included energy-efficient LED lighting, solar-powered options for key areas, and smart control systems for optimized usage patterns.",
    image: 'https://images.unsplash.com/photo-1573167507387-6b4b98cb7c13?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    additionalImages: [
      'https://images.unsplash.com/photo-1605724022002-464020f16858?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1582657118090-af35eefc4e48?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
    ],
    year: 2021,
    location: 'Yenagoa, Bayelsa State',
    duration: '6 months',
    budget: '$350,000 - $500,000',
    achievements: [
      'Installed over 350 energy-efficient LED street lights',
      'Reduced crime rates in the business district by 40% after implementation',
      'Extended average business operating hours by 3 hours',
      'Implemented smart lighting controls reducing energy consumption by 35%'
    ]
  },
  
  // Decor Sector
  {
    id: 7,
    title: 'Luxury Hotel Decorative Lighting',
    category: 'Decor',
    description: 'Custom decorative lighting solution for a 5-star hotel in Port Harcourt.',
    fullDescription: 'Mekloy designed and installed bespoke decorative lighting solutions for a prestigious 5-star hotel in Port Harcourt, creating stunning visual effects that enhanced the luxurious ambiance. The project included custom chandeliers, mood lighting systems, and smart controls allowing for scene setting and automated adjustments based on time of day.',
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    additionalImages: [
      'https://images.unsplash.com/photo-1561026555-13539e82532f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1595877244574-e90ce41ce089?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
    ],
    year: 2023,
    location: 'Port Harcourt, Rivers State',
    duration: '4 months',
    budget: '$200,000 - $350,000',
    achievements: [
      'Created unique lighting designs that have become a signature feature of the hotel',
      'Integrated lighting with hotel management system for centralized control',
      'Reduced energy consumption by 30% while enhancing visual impact',
      'Implemented maintenance-friendly design with easily accessible components'
    ]
  },
  {
    id: 8,
    title: 'Government House Decorative Illumination',
    category: 'Decor',
    description: 'Architectural lighting and decorative illumination for Bayelsa State Government House.',
    fullDescription: 'Mekloy implemented a sophisticated architectural lighting system for the Bayelsa State Government House, highlighting its distinctive features and creating a prestigious nighttime presence. The project included façade lighting, landscape illumination, and ceremonial lighting features that can be adjusted for different state events and celebrations.',
    image: 'https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    additionalImages: [
      'https://images.unsplash.com/photo-1598982396675-8b723bdba022?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1601799954224-671c28997c0c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
    ],
    year: 2022,
    location: 'Yenagoa, Bayelsa State',
    duration: '5 months',
    budget: '$250,000 - $400,000',
    achievements: [
      'Created a distinctive nighttime identity for this important government building',
      'Designed special lighting sequences for national holidays and state events',
      'Implemented energy-efficient LED technology with an estimated 15-year lifespan',
      'Developed a user-friendly control interface for non-technical staff'
    ]
  }
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
        installations across industrial, domestic, solar, and decor sectors.
      </p>
    </div>
  </section>
);

const ProjectsList = ({ projects, activeFilter, handleFilterChange, onOpenProject }) => {
  const filterCategories = ['All', 'Industrial', 'Domestic', 'Solar', 'Decor'];
  
  return (
    <section className="py-16 bg-gradient-to-b from-mekloy-light-blue to-white">
      <div className="container mx-auto px-6">
        {/* Filter Buttons */}
        <div className="filter-buttons flex flex-wrap justify-center gap-4 mb-12">
          {filterCategories.map((category) => (
            <Button
              key={category}
              variant={activeFilter === category ? "default" : "outline"}
              className={activeFilter === category ? "bg-mekloy-blue text-white" : "border-mekloy-blue text-mekloy-blue"}
              onClick={() => handleFilterChange(category)}
            >
              {category}
            </Button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card 
              key={project.id} 
              className="project-card overflow-hidden border-none shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group cursor-pointer"
              onClick={() => onOpenProject(project)}
            >
              <div className="h-60 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <CardContent className="p-6 bg-white/80 backdrop-blur-sm">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm font-medium text-white bg-mekloy-blue px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                  <span className="text-sm text-gray-500">{project.year}</span>
                </div>
                <h3 className="text-xl font-bold text-mekloy-blue mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <Button 
                  variant="outline" 
                  className="w-full border-mekloy-blue text-mekloy-blue hover:bg-mekloy-blue hover:text-white group-hover:bg-mekloy-blue group-hover:text-white transition-all duration-300"
                >
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
  const [filteredProjects, setFilteredProjects] = useState(projectsData);
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<ProjectDetails | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
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
      setFilteredProjects(projectsData);
    } else {
      setFilteredProjects(projectsData.filter(project => project.category === category));
    }
  };

  const handleOpenProject = (project: ProjectDetails) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseProject = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300); // Clear after animation
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
          onOpenProject={handleOpenProject}
        />
        <ProjectProcess />
        <CTA />
      </main>
      
      <ProjectModal 
        project={selectedProject} 
        isOpen={isModalOpen}
        onClose={handleCloseProject}
      />
      
      <Footer />
    </div>
  );
};

export default Projects;
