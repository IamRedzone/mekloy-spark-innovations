
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

const dateYear = new Date().getFullYear();
// Project data with enhanced details
const projectsData: ProjectDetails[] = [
  // Industrial Sector
  {
    id: 1,
    title: 'AGIP(now under OANDO Plc) Electrical Infrastructure Upgrade with NCMDB',
    category: 'Industrial',
    description: 'Comprehensive upgrade of electrical distribution network for AGIP facilities in Bayelsa State.',
    fullDescription: 'Mekloy executed a comprehensive upgrade of the electrical distribution network for AGIP facilities across Bayelsa State. The project involved the replacement of aging infrastructure, installation of new concrete electrical poles, transformers, and implementation of modern safety features to enhance operational reliability and worker safety.',
    image: 'https://energonigeria.com/img/projects/OkeAro_KeyProjects_DSC_0125_L3_58b07c28df43b.jpg',
    additionalImages: [
      'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      'https://cdn.prod.website-files.com/66c74241707b8ed970d83f84/66cefaf33b3d72c5c13820df_blog-cover.webp'
    ],
    year: 2019,
    location: 'Bayelsa State, Nigeria',
    duration: '8 months',
    budget: '₦90,000,000 - ₦130,000,000',
    achievements: [
      'Reduced power outages by 78% in critical operational areas',
      'Improved energy efficiency resulting in 22% cost reduction',
      'Zero safety incidents throughout installation',
      'Completed ahead of schedule by 2 weeks'
    ]
  },
  {
    id: 2,
    title: 'LUBRIK Construction Igbogene-AIT Road',
    category: 'Industrial',
    description: 'Provision of prestressed and vibrated concrete rings culverts for multiple LUBRIK construction sites.',
    fullDescription: 'Mekloy provided solid solutions for multiple LUBRIK construction sites across southern Nigeria. The project included the manufacturing and installation of concrete culvert rings for efficient drainage of water underneath the newly constructed road.',
    image: '/lubrick-project.png',
    additionalImages: [
      'data:image/jpeg;base64,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',
      'data:image/jpeg;base64,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'
    ],
    year: 2021,
    location: 'Multiple sites, Southern Nigeria',
    duration: '14 months',
    budget: '₦80,000,000 - ₦100,000,000',
    achievements: [
      'Successfully ensured adequate drainage for over 20km of roads',
      'Implemented a comprehensive drainage system to prevent flooding',
      'Developed customized culvert specifications to meet unique site requirements',
      'Implemented modular system allowing quick redeployment as construction phases shifted'
    ]
  },
  
  // Supposed to be Solar Sector
  {
    id: 3,
    title: 'SHELL Powerline Integration',
    category: 'Electrical infrastructure',
    description: 'Design and installation of power systems for Gbarain communities powered by SHELL.',
    fullDescription: 'Mekloy designed and installed comprehensive power systems across multiple SHELL operational facilities, significantly increasing the consistency and stability of the generator powered community. The project included poles, bare aluminium conductors with proper earthing system for each pole, and smart grid integration to maximize efficiency and reliability.',
    image: '/national grid.jpg',
    additionalImages: [
      '/Power-grid.jpg',
      '/shell-logo-resized-800.jpg'
    ],
    year: 2019,
    location: 'Delta & Rivers States, Nigeria',
    duration: '10 months',
    budget: '₦200,000,000 - ₦600,000,000',
    achievements: [
      'Reduced operational carbon emissions by approximately 1,200 metric tons annually',
      'Achieved 40% reduction in electricity costs',
      'Implemented smart grid technology allowing for real-time monitoring and optimization',
      'System designed to withstand harsh environmental conditions with minimal maintenance'
    ]
  },
  {
    id: 4,
    title: 'Shell Electrification Project of Bayelsa riverine communities',
    category: 'Electrical infrastructure',
    description: 'Comprehensive electrification project for SHELL-operated communities in Bayelsa State.',
    fullDescription: 'Mekloy executed a comprehensive electrification project for SHELL-operated communities in Bayelsa State, providing very rigid adamantine pre-stressed concrete poles with Shell specifications to remote areas. The project included installation of earthing wire with conductivity and continuity test giving optimal results, ensuring that even the most isolated communities had access to modern electrical infrastructure while prioritising safety.',
    image: '/Shell-poles.jpg',
    additionalImages: [
      'shell-logo-resized-800.jpg',
      'https://5.imimg.com/data5/WV/FW/VI/SELLER-2210629/pole-loading-crane-truck-mounted-500x500.jpg'
    ],
    year: 2023,
    location: 'Yenagoa, Bayelsa State',
    duration: '7 months',
    budget: '₦2,000,000,000 - ₦ 3,000,000,000',
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
    title: 'NIIT Residential Estate Electrification',
    category: 'Domestic',
    description: 'Private sector-backed initiative to provide reliable electrical infrastructure to residential areas in Bayelsa State.',
    fullDescription: 'Mekloy partnered with the Bayelsa State government to implement a comprehensive residential electrification project, bringing reliable electrical infrastructure to previously underserved communities. The project included installation of concrete poles, transformers, and last-mile connections, dramatically improving quality of life and enabling economic activities.',
    image: '/WAE 4.webp',
    additionalImages: [
      '/WAE 3.webp',
      '/WAE 5.webp',
    ],
    year: 2023,
    location: 'NIIT Housing Estate, along Isaac Boro Expressway, Yenegoa, Bayelsa State',
    duration: '18 months',
    budget: '₦25,000,000 - ₦30,000,000',
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
    image: '/Warman-Ogoriba-1.jpg',
    additionalImages: [
      '/Warman-Ogoriba-2.jpg',
      'https://www.shutterstock.com/image-photo/panoramic-aerial-view-nwaorie-river-260nw-2553611049.jpg'
    ],
    year: dateYear,
    location: 'Yenagoa, Bayelsa State',
    duration: `2016- ${dateYear}`,
    // Note: The dateYear variable should be defined in the context of your application
    budget: '₦158,000,000 - ₦200,000,000',
    // Note: The budget range should be adjusted based on your project's specifics
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
    title: 'MathoCrystal Hotel Decorative Lighting',
    category: 'Decor',
    description: 'Custom decorative lighting solution for a 4-star corporate hotel in Yenegoa.',
    fullDescription: 'Mekloy designed and installed bespoke decorative lighting solutions for a prestigious 4-star hotel in Yenegoa, creating stunning visual effects that enhanced the luxurious ambiance. The project included custom chandeliers, mood lighting systems, and smart controls allowing for scene setting and automated adjustments based on time of day.',
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    additionalImages: [
      'https://images.unsplash.com/photo-1561026555-13539e82532f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1595877244574-e90ce41ce089?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
    ],
    year: 2023,
    location: 'Yenegoa, Bayelsa State',
    duration: '11 months',
    budget: '₦18,000,000 - ₦22,350,000',
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
    image: 'https://images.unsplash.com/photo-1646215993316-c98f642303ce?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    additionalImages: [
      'https://plus.unsplash.com/premium_photo-1661963149698-08bbaa40341a?q=80&w=2013&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1695361647461-e39e6e41a41c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ],
    year: 2008,
    location: 'Yenagoa, Bayelsa State',
    duration: '5 months',
    budget: '₦25,000,000 - ₦40,000,000',
    achievements: [
      'Created a distinctive nighttime identity for this important government building',
      'Designed special lighting sequences for national holidays and state events',
      'Implemented energy-efficient LED technology with an estimated 15-year lifespan',
      'Developed a user-friendly control interface for non-technical staff'
    ]
  },
  {
    id: 9,
    title: 'MTN power distribution project',
    category: 'Electrical infrastructure',
    description: 'Comprehensive power distribution project for MTN Nigeria.',
    fullDescription: 'Mekloy executed a comprehensive power distribution project for MTN Nigeria, ensuring reliable and efficient power supply to their operational facilities. The project included installation of high-capacity transformers, smart metering systems, and advanced monitoring solutions to optimize energy usage and reduce downtime.',
    image: '/mtn-work.webp',
    additionalImages: [
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAkFBMVEX/xAMAAAD/yAP/xgP/ygP/0gP/0AP/zQPdsQMvJAHLnQL/1AMtIQFvVQHsuwNoUAF6YAF5XAFYQwFKPAGeeQLbqwPjsQN0WQHEnQOFawGlgQKPcgI2KAHXpgP1vwPwuANBMQG/lgJKOAGziQIgFgElGwFgSQGWcwIVDgH2xgOFZgK2kQKNbALPpwIMBgCafAETzWUDAAAHq0lEQVR4nO2bi5KiOhCGMYmgKAEZCC5KFPF+mXn/tzuQAIJXZgT0VPVXteXoQshPJ51O0lEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+CkaIaJqa0BUkf2kaIQjhd9etIhhjqaFLZq5+iJzNfmSYCYY3Om6cKNTZjHQTWbEo/KmyEhkY73achc7IXnYesrRHvs74bidu+ixJcZNCnFIWbszVYxVlVuYmZJRy9ClND2NCOHN1x3hijbtWMhzdpZyQt1sIEURP4Wa9/ZuQXJDphCcaF/Y+JbFN2Ni35jfr15/bpmHtj5uNE+PH/zbH494yTHs+vHnD3PLHLLbPW5QglYcTo39dqfV+Ex3C8cllbMZ5bD1ESOKRFYXzGWPuaRweos3evH4JfWMScrV1PZio7sScXlTG3vt6rIFyLKufeKoLkJSGOWW9kx7t7YsipuYk0LQ25WANhcaiXAvTD3qUJ52oirMVsuIuwmkviIzvsmmNELUmB6vI/yq5YNt34yHjD6NgNji5fslCqy8fqW3IwRpxSr7L0MmLo7mIGoi+Lpa6dUjj1olfY1R44srUtW49HRaTrqabq8J7inaNjjwY7fSzX52uI16TkrR40uXR+uxVhvquucgAYdfLjWJbgVp/Q8CaGlhfuUPwXNzMOIoR9bNRZWn+sIbGg9jps588ouj7tAnjYBTkZjGiWZORRxxY+Lk38IL61WBy+EqLXxxY00EUIixa5I+ruwlgMsmamN9DLcSDCPX8zA9M6u2bWDXTktc9hdRZ8n0IdrO2ZtY5gmItG6CjBp3l1VNJPqbZ9dkGq6mWadBuRItJkDZuuy7bYJK2MYNq9ZRYHY0a6bPrijMmsrwjv91bkKD4LJz+Ij8vwVd34KsScgjfy6dPalFDwn6q5bYTQz1B4X8RFb+w9PMSnt2R1Q7T8vcLNUc5fIY1OB7EpE853gssVHs1jPHzN4uR049/WFoDfzu8puMOko/V9JDdof1Lrpvrdwyf2mbNXh4RMJeNzLhjF0XpysF0qmcXEF3GirGYzi3cgfycn1AmRgwnd8TEtpH9ZnPbdL8g9SdLetfIqZiOzeQliKb+4pmYjk1RQUz/nhiF0GXqS1/TgvlGPFe/78cyMR1rl7w5jP1tRTGdtWxoz8Qoml6LaVBPhOPeA1eSi+lEyYsmp2zGYw1+nojpjAaVxGAiYtxt77Veg+UY/KjvncUklyGax9aWyqmgJ9u8t5NflbOYjj+oIib2QvJtvWQZzIUrG+0elFIQs1UVFObfLC1dXUoHvlFXfi+K+Q60KmLwbpRcYr7UzjAVjwwembcgpmMM2PmLpWWFpGLU9I6CmM4qdhvPxShI9hr6ihgUJEVMH7bVophOaPxSTGfBURUxveHTt/pUjOgy3sMXUhJT5ImYZeb0ePe5mLSM6BUxRDjmxy5Ripnb52VJe1pFzNqTeyDbnwqWSYcI55WRhoi4yKkgZh3ms/Zt6FURYwSWvH6qVxHjJNcc2xFjMz1b8LJ2VhUxJqVpA10v2hHjVG1mtksc2Wy+gkE1MUx1i12s8WZW3QHEYnYiJlv5RK0oBhG9spgaHEB112y7CPFka8BEWKsqRtGiimJQT8S7L7nm6oNmLCaOsH0/SqpYWQzWRhXFiLf62qCJuSm79NNwJhGjIE3T4o/qYuI45auKmFrCmSzQfNTOCmJSfiEmnqtMK4ipJdCM26oYp0cPWsBrYuK2OXwqBhNhmJenAFUnZ38Wg/Fh9UxMTZOzbNo8fDZt/rOYZDzcPhZDqJD78rQ5X9Dw7u76dMV+/qIoJp2M5WLkooB3EZtlMz5EhfjtPTGIe/UYJn4t2VLTvbV/chrHnApPQuKXcSYP8/J3hYzLdxAmfpjdrivCx7L4l9SE0t9s7qoRFGsi8hbOezj44ru8o7CCia5KKJSVapnWsQhYWJ5taH/xIdmC5nc9y7OxmnT6aN33Ak2h0TREqGnhvLA9s3Db3tJw0yG1ti2Nt202oSY2m4rbgF6vrZ6DcC/fe6w3kaawQRu1tUGbmWVYU98vFH7eOrcPtPmtc3rIWvbiUP/TCkkN3w0nNSBtds5BayKpQaabZGviS9NnakN+mqjMzzNxh82kmyhJl2T5xHBr/3O7TSQCdd1/dp6nNWLNuZurFC1cd4oWDttK0VKukueGXlBX8pxCulrgDdtLnkvAhPiltEZPJ1ocNb7w3DSt0SuWuvXbSXHG6s5flHLl1xHb8b8mnCLMdywqJWi2lnAq6qDig1HOsV56kUgFJr9JBSYyFdgrJ9+3mgosKqNpwb/LJO2tfYz0U49RjspJ2mn1C0naSOEiSftoX5wiaD9JW1SO3E6f/16YeydJnw/K6fMyf342Y25wGh8iZ28uvi/vHb4nfT7Vc/9gw3d/cT7Y4PvJwQZxssEz7cX05pmOueWH7zrYIMmOnFy95N+xXW/efeREkB8GMv94GGhlOrrLPuEwkET4V3FMa/0rRdkxLfwpx7Qy5JCRHaB7ctJpaY+c8EMP0J3JjjZ2u+j6aON+4/ih7qZHG8kHy7gE3Tp0KjR8WJMCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgP8X/wFvFZNS5XgeLgAAAABJRU5ErkJggg==',
      '/hiab-project.webp'
    ],
    year: 2022,
    location: 'Yenagoa, Bayelsa State',
    duration: '11 months',
    budget: '₦18,000,000 - ₦30,000,000',
    achievements: [
      'Created a functional electrical system that meets MTN specifications',
      'Implemented smart metering systems for real-time monitoring',
      'Reduced operational downtime by 25% through efficient power distribution',
      'Designed a modular system allowing for future scalability and upgrades'
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
  
  useEffect(() => {
    // Fix for project cards animation - using fromTo instead of from
    gsap.fromTo('.project-card', 
      { y: 50, opacity: 0 }, 
      { 
        y: 0, 
        opacity: 1, 
        stagger: 0.1, 
        duration: 0.6, 
        ease: 'power3.out',
        clearProps: "all" // Important - clears properties after animation
      }
    );
  }, [projects]);
  
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
    gsap.fromTo('.page-title',{
      y:30,
      opacity:0,
    }, {
      y: 0,
      opacity: 1,
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
    
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
  
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
