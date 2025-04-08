
import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, DollarSign, Calendar } from 'lucide-react';
import { Button } from './ui/button';

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
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    if (project) {
      setImages([project.image, ...(project.additionalImages || [])]);
      setCurrentImageIndex(0); // Reset to first image when modal opens
    }
  }, [project, isOpen]);

  if (!project) return null;

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-mekloy-blue">{project.title}</DialogTitle>
          <DialogDescription>
            <Badge className="bg-mekloy-blue text-white">{project.category}</Badge>
          </DialogDescription>
        </DialogHeader>

        {/* Image Carousel */}
        <div className="relative overflow-hidden rounded-lg mb-6 h-64 md:h-80">
          {images.map((img, index) => (
            <div 
              key={index} 
              className={`absolute inset-0 transition-opacity duration-500 ${
                index === currentImageIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              <img
                src={img}
                alt={`${project.title} - image ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
          
          {/* Navigation arrows */}
          {images.length > 1 && (
            <>
              <button 
                onClick={() => goToImage((currentImageIndex - 1 + images.length) % images.length)}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-black/30 text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-black/50 transition-colors"
                aria-label="Previous image"
              >
                &#10094;
              </button>
              <button 
                onClick={() => goToImage((currentImageIndex + 1) % images.length)}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-black/30 text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-black/50 transition-colors"
                aria-label="Next image"
              >
                &#10095;
              </button>
            </>
          )}
          
          {/* Indicator dots */}
          {images.length > 1 && (
            <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1 z-20">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToImage(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentImageIndex ? 'bg-white' : 'bg-white/40 hover:bg-white/60'
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                ></button>
              ))}
            </div>
          )}
        </div>

        {/* Project Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {project.location && (
            <div className="bg-gray-50 p-3 rounded-lg flex items-center">
              <MapPin className="text-mekloy-blue mr-2 h-5 w-5" />
              <div>
                <p className="text-sm text-gray-500">Location</p>
                <p className="font-semibold">{project.location}</p>
              </div>
            </div>
          )}

          {project.duration && (
            <div className="bg-gray-50 p-3 rounded-lg flex items-center">
              <Clock className="text-mekloy-blue mr-2 h-5 w-5" />
              <div>
                <p className="text-sm text-gray-500">Duration</p>
                <p className="font-semibold">{project.duration}</p>
              </div>
            </div>
          )}

          {project.budget && (
            <div className="bg-gray-50 p-3 rounded-lg flex items-center">
              <DollarSign className="text-mekloy-blue mr-2 h-5 w-5" />
              <div>
                <p className="text-sm text-gray-500">Budget Range</p>
                <p className="font-semibold">{project.budget}</p>
              </div>
            </div>
          )}
        </div>

        {/* Project Description */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2 text-mekloy-blue">Project Overview</h3>
          <p className="text-gray-700">{project.fullDescription || project.description}</p>
        </div>

        {/* Achievements */}
        {project.achievements && project.achievements.length > 0 && (
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2 text-mekloy-blue">Key Achievements</h3>
            <ul className="list-disc list-inside space-y-2">
              {project.achievements.map((achievement, index) => (
                <li key={index} className="text-gray-700">{achievement}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Completed Date */}
        <div className="flex items-center justify-between pt-4 border-t">
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
