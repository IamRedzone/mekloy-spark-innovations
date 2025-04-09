
import React from 'react';

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

export default ProjectProcess;
