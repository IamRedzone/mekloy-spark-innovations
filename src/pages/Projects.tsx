
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';
import ProjectModal, { ProjectDetails } from '@/components/ProjectModal';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsap } from 'gsap';
import ProjectsHero from '@/components/projects/ProjectsHero';
import ProjectsList from '@/components/projects/ProjectsList';
import ProjectProcess from '@/components/projects/ProjectProcess';
import projectsData from '@/data/projectsData';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const [filteredProjects, setFilteredProjects] = useState(projectsData);
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<ProjectDetails | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  useEffect(() => {
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
