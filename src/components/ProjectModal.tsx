
import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, DollarSign, Calendar } from 'lucide-react';
import { Button } from './ui/button';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

export interface ProjectDetails {
  id: number;
  title: string;
  category: string;
  description: string;
  fullDescription?: string;
  image: string;
  additionalImages?: string[];
  year: number;
  location?: string;
  duration?: string;
  budget?: string;
  achievements?: string[];
}

interface ProjectModalProps {
  project: ProjectDetails | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    if (project) {
      setImages([project.image, ...(project.additionalImages || [])]);
    }
  }, [project]);

  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-3xl max-h-[90vh] overflow-y-auto bg-gray-50">
        <DialogHeader className="bg-white rounded-t-lg p-6">
          <DialogTitle className="text-2xl font-bold text-mekloy-blue">{project.title}</DialogTitle>
          <DialogDescription>
            <Badge className="bg-mekloy-blue text-white">{project.category}</Badge>
          </DialogDescription>
        </DialogHeader>

        {/* Image Carousel with darker background */}
        <div className="mb-6 bg-gray-900 p-4 rounded-lg">
          <Carousel className="w-full">
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="rounded-lg overflow-hidden h-64 md:h-80">
                    <img 
                      src={image} 
                      alt={`${project.title} - image ${index + 1}`} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {images.length > 1 && (
              <>
                <CarouselPrevious className="left-2" />
                <CarouselNext className="right-2" />
              </>
            )}
          </Carousel>
        </div>

        {/* Project Info Cards with improved contrast */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 bg-white p-6 rounded-lg">
          {project.location && (
            <div className="bg-gray-100 p-3 rounded-lg flex items-center">
              <MapPin className="text-mekloy-blue mr-2 h-5 w-5" />
              <div>
                <p className="text-sm text-gray-500">Location</p>
                <p className="font-semibold">{project.location}</p>
              </div>
            </div>
          )}

          {project.duration && (
            <div className="bg-gray-100 p-3 rounded-lg flex items-center">
              <Clock className="text-mekloy-blue mr-2 h-5 w-5" />
              <div>
                <p className="text-sm text-gray-500">Duration</p>
                <p className="font-semibold">{project.duration}</p>
              </div>
            </div>
          )}

          {project.budget && (
            <div className="bg-gray-100 p-3 rounded-lg flex items-center">
              <DollarSign className="text-mekloy-blue mr-2 h-5 w-5" />
              <div>
                <p className="text-sm text-gray-500">Budget Range</p>
                <p className="font-semibold">{project.budget}</p>
              </div>
            </div>
          )}
        </div>

        {/* Project Description with white background */}
        <div className="mb-6 bg-white p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-2 text-mekloy-blue">Project Overview</h3>
          <p className="text-gray-700">{project.fullDescription || project.description}</p>
        </div>

        {/* Achievements with alternating background */}
        {project.achievements && project.achievements.length > 0 && (
          <div className="mb-6 bg-white p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-2 text-mekloy-blue">Key Achievements</h3>
            <ul className="list-disc list-inside space-y-2">
              {project.achievements.map((achievement, index) => (
                <li key={index} className="text-gray-700">{achievement}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Completed Date with white background */}
        <div className="flex items-center justify-between p-4 bg-white rounded-lg mt-4">
          <div className="flex items-center text-gray-600">
            <Calendar className="mr-2 h-4 w-4" />
            <span>Completed: {project.year}</span>
          </div>
          <Button onClick={onClose} className="bg-mekloy-blue text-white hover:bg-blue-800">
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
