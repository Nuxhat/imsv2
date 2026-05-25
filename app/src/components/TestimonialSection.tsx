// src/components/TestimonialSection.tsx
import { Star, Quote } from 'lucide-react';
import ScrollReveal from './ScrollReveal'; // Import the animator

const TestimonialSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Tariq Mahmood",
      role: "Operations Director",
      company: "Istanbul Lighting",
      image: "/testimonial-1.jpg",
      text: '"The SAP B1 implementation was seamless. Their team handled the Sales and Purchase modules perfectly, ensuring our Go-Live was on schedule without any operational downtime. Best ERP consultants we have worked with."'
    },
    {
      id: 2,
      name: "Sarah Jenkins",
      role: "Project Lead",
      company: "Armada Holdings",
      image: "/testimonial-2.jpg",
      text: '"Working with their team on the Web Portal Application integration was a game-changer. The sync between our custom frontend and the SAP B1 backend is flawless. Their ongoing AMC support keeps everything running at peak efficiency."'
    }
  ];

  return (
    <section className="bg-white py-24 md:py-32">
      <div className="container mx-auto px-6 lg:px-12 max-w-[1600px]">
        
        {/* HEADER AREA - Scaled up typography and spacing */}
        <div className="flex flex-col items-center text-center mb-20">
          
          <ScrollReveal delay={0}>
            {/* Pill Badge */}
            <div className="mb-8 px-6 py-2.5 rounded-full border border-gray-200 bg-white inline-flex items-center gap-3 shadow-sm">
              <span className="text-company-teal font-extrabold text-xl leading-none">+</span> 
              <span className="text-sm md:text-base font-bold tracking-[0.2em] text-company-deep uppercase">Testimonials</span> 
              <span className="text-company-teal font-extrabold text-xl leading-none">+</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            {/* Headline */}
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-company-deep leading-[1.1] tracking-tight">
              See what our customers <br className="hidden md:block" />
              have to say about us
            </h2>
          </ScrollReveal>
        </div>

        {/* TESTIMONIALS GRID - Staggered pop-in effect */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 mb-16">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal 
              key={testimonial.id} 
              delay={200 + (index * 200)} // Card 1 at 200ms, Card 2 at 400ms
              className="h-full"
            >
              <div 
                className="bg-[#F8F9FB] h-full rounded-[32px] md:rounded-[40px] p-10 md:p-14 lg:p-16 relative flex flex-col justify-between transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div>
                  {/* 5 Stars */}
                  <div className="flex gap-1.5 mb-8">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 md:w-7 md:h-7 fill-[#F4A261] text-[#F4A261]" />
                    ))}
                  </div>

                  {/* Quote Text */}
                  <p className="text-xl md:text-2xl text-company-deep/80 leading-[1.7] font-medium mb-14">
                    {testimonial.text}
                  </p>
                </div>

                {/* Footer: Avatar, Name, Role, and large Quote Icon */}
                <div className="flex items-center justify-between mt-auto">
                  
                  {/* User Info */}
                  <div className="flex items-center gap-5 md:gap-6">
                    {/* Avatar */}
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-[3px] border-white shadow-md shrink-0">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col">
                      <h4 className="text-xl md:text-2xl font-extrabold text-company-deep leading-tight mb-1">
                        {testimonial.name}
                      </h4>
                      <span className="text-base md:text-lg text-gray-500 font-medium">
                        {testimonial.role}, {testimonial.company}
                      </span>
                    </div>
                  </div>

                  {/* Large Decorative Quote Icon */}
                  <Quote className="w-16 h-16 md:w-24 md:h-24 text-company-deep/10 rotate-180 shrink-0 transform translate-x-2 translate-y-2" fill="currentColor" />
                </div>
                
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* PAGINATION DOTS - Fade in last */}
        <ScrollReveal delay={600}>
          <div className="flex justify-center items-center gap-3 mt-4">
            <div className="w-12 h-3.5 rounded-full bg-company-deep shadow-sm"></div>
            <div className="w-3.5 h-3.5 rounded-full bg-gray-200 hover:bg-gray-300 cursor-pointer transition-colors shadow-sm"></div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};

export default TestimonialSection;