// src/components/TestimonialSectionAlt.tsx
import { Star, Quote } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const TestimonialSectionAlt = () => {
  const testimonials = [
    {
      id: 1,
      name: "Marvin Kinney",
      role: "Product Manager",
      image: "/testimonial-1.jpg",
      text: '"Working with their team on our ERP integration was a game-changer. They handled the Sales and Purchase modules perfectly, ensuring our Go-Live was on schedule without any operational downtime. Highly recommended."'
    },
    {
      id: 2,
      name: "Charlize Theron",
      role: "Operations Director",
      image: "/testimonial-2.jpg",
      text: '"The sync between our custom frontend and the ERP backend is flawless. Their ongoing AMC support keeps everything running at peak efficiency. Not only the design, but the core architecture is all excellent."'
    },
    {
      id: 3,
      name: "David Chen",
      role: "Chief Financial Officer",
      image: "/testimonial-3.jpg",
      text: '"Transitioning our financial data to HANA was a massive undertaking. The custom reporting dashboards they built have given us unprecedented, real-time visibility into our global operations. Outstanding consulting."'
    }
  ];

  return (
    <section className="bg-[#F8F9FB] py-24 md:py-32">
      <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
        
        {/* THE FIX: Removed 'items-start' so the columns stretch to the same height! */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* LEFT COLUMN: Full Height Wrapper */}
          <div className="lg:col-span-5 h-full relative">
            
            {/* THE FIX: The sticky element is now INSIDE the stretched column */}
            <div className="lg:sticky lg:top-32 flex flex-col items-start pb-10">
              <ScrollReveal delay={0}>
                <div className="mb-8 px-6 py-2.5 rounded-full border border-gray-200 bg-white inline-flex items-center gap-3 shadow-sm">
                  <span className="text-gray-400   text-xl leading-none">+</span> 
                  <span className="text-sm md:text-base font-bold tracking-[0.1em] text-gray-500 uppercase">Testimonial</span> 
                  <span className="text-gray-400   text-xl leading-none">+</span>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={100}>
                <h2 className="text-5xl md:text-6xl   text-company-deep leading-[1.15] tracking-tight">
                  See what our customers have to say about us
                </h2>
              </ScrollReveal>
            </div>
            
          </div>

          {/* RIGHT COLUMN: Stacked Cards */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            {testimonials.map((testimonial, index) => (
              <ScrollReveal 
                key={testimonial.id} 
                delay={200 + (index * 200)}
                className="w-full"
              >
                <div className="bg-white rounded-[32px] p-10 md:p-12 shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                  
                  {/* 5 Stars */}
                  <div className="flex gap-1.5 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#F4A261] text-[#F4A261]" />
                    ))}
                  </div>

                  {/* Quote Text */}
                  <p className="text-lg md:text-xl text-company-deep/80 leading-[1.7] font-medium mb-10">
                    {testimonial.text}
                  </p>

                  {/* Footer: Avatar, Name, Role, and large Quote Icon */}
                  <div className="flex items-center justify-between">
                    
                    {/* User Info */}
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-full overflow-hidden shrink-0 bg-gray-100">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex flex-col">
                        <h4 className="text-xl font-bold text-company-deep leading-tight mb-1">
                          {testimonial.name}
                        </h4>
                        <span className="text-sm md:text-base text-gray-500 font-medium">
                          {testimonial.role}
                        </span>
                      </div>
                    </div>

                    {/* Decorative Quote Icon */}
                    <Quote className="w-12 h-12 text-company-deep/10 rotate-180 shrink-0" fill="currentColor" />
                  </div>
                  
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default TestimonialSectionAlt;