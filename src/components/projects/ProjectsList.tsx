
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ProjectDetails } from '@/components/ProjectModal';

interface ProjectsListProps {
  projects: ProjectDetails[];
  activeFilter: string;
  handleFilterChange: (category: string) => void;
  onOpenProject: (project: ProjectDetails) => void;
}

const ProjectsList: React.FC<ProjectsListProps> = ({ 
  projects, 
  activeFilter, 
  handleFilterChange, 
  onOpenProject 
}) => {
  const filterCategories = ['All', 'Industrial', 'Domestic', 'Solar', 'Decor'];
  
  useEffect(() => {
    // Fix for project cards animation - using fromTo instead of from
    gsap.fromTo('.project-card', 
      { y: 50, opacity: 0, visibility: 'hidden' }, 
      { 
        y: 0, 
        opacity: 1, 
        visibility: 'visible',
        stagger: 0.1, 
        duration: 0.6, 
        ease: 'power3.out',
        clearProps: "all" // Important - clears properties after animation
      }
    );
  }, [projects]);

  useEffect(() => {
    gsap.fromTo('.filter-buttons', 
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, delay: 0.3, ease: 'power3.out' }
    );
  }, []);
  
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

export default ProjectsList;
