// src/components/CaseStudiesSection.tsx
import { Briefcase, ArrowRight, FolderDot } from 'lucide-react';
import MyButton from './MyButton';

const CaseStudiesSection = () => {
  // Case study/portfolio data
const caseStudies = [
    {
      id: 1,
      client: "Armada Holdings",
      title: "Digital Transformation & User-Centric Web Portal",
      category: "System Restructuring",
      // Changed to a live Unsplash image
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop" 
    },
    {
      id: 2,
      client: "Istanbul Lighting",
      title: "Comprehensive Sales Module Configuration & Workflows",
      category: "SAP B1 Implementation",
      // Changed to a live Unsplash image
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 3,
      client: "Dafnia",
      title: "End-to-End ERP Implementation & System Transition",
      category: "Enterprise ERP",
      // Changed to a live Unsplash image
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <section className="bg-[#F8F9FB] py-24 md:py-32">
      <div className="container mx-auto px-6 lg:px-12 max-w-[1600px]">
        
        {/* HEADER AREA */}
        <div className="flex flex-col items-center text-center mb-16">
          {/* Pill Badge */}
          <div className="mb-6 px-6 py-2.5 rounded-full border border-gray-200 bg-white inline-flex items-center gap-3 shadow-sm">
            <span className="text-company-teal text-xl leading-none">+</span> 
            <span className="text-sm md:text-base font-bold tracking-[0.2em] text-company-deep uppercase">
              Customer Success Stories
            </span> 
            <span className="text-company-teal text-xl leading-none">+</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-company-deep leading-tight tracking-tight">
            Featured Case Studies
          </h2>
        </div>

        {/* CASE STUDIES CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mb-16">
          {caseStudies.map((project) => (
            <div 
              key={project.id}
              className="bg-white rounded-[32px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer border border-transparent hover:border-company-teal/20 flex flex-col"
            >
              
              {/* Image Container */}
              <div className="w-full h-[280px] md:h-[320px] overflow-hidden relative">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url('${project.image}')` }}
                />
                {/* Optional overlay gradient for better text readability if you add text over images */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content Container */}
              <div className="p-8 md:p-10 flex flex-col flex-grow relative bg-white z-10">
                
                {/* Meta Data (Client & Category) */}
                <div className="flex items-center gap-6 mb-5 text-gray-500 font-medium text-sm md:text-base">
                  <div className="flex items-center gap-2">
                    <Briefcase className="w-4 h-4 md:w-5 md:h-5 text-company-teal" />
                    <span className="font-semibold text-company-deep">{project.client}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FolderDot className="w-4 h-4 md:w-5 md:h-5 text-company-teal" />
                    <span>{project.category}</span>
                  </div>
                </div>

                {/* Project Title */}
                <h3 className="text-2xl md:text-[28px] font-bold text-company-deep leading-snug transition-colors duration-300 group-hover:text-company-teal mb-6">
                  {project.title}
                </h3>

                {/* Read Case Study Link (Pushed to bottom) */}
                <div className="mt-auto flex items-center gap-2 text-company-deep font-bold group-hover:text-company-teal transition-colors duration-300">
                  <span>View Case Study</span>
                  <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                </div>

              </div>
              
            </div>
          ))}
        </div>

        {/* FOOTER BUTTON */}
        <div className="flex justify-center">
          <MyButton variant="dark">
            View All Cases
          </MyButton> 
        </div>

      </div>
    </section>
  );
};

export default CaseStudiesSection;