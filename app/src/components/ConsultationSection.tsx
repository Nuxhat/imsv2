// src/components/ConsultationSection.tsx
import { ArrowUpRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const ConsultationSection = () => {
  return (
    // The relative positioning here allows us to create the split-background effect
    <section className="relative pt-24 pb-20 md:pt-32 md:pb-24 bg-[#F8F9FB]">
      
      {/* THE BACKGROUND SPLIT TRICK: 
        This dark div sits absolutely at the bottom half of the section.
        It will blend perfectly into your dark Footer right below it!
      */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-company-deep z-0"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10 max-w-[1300px]">
        <ScrollReveal delay={0}>
          
          {/* Main Card Container */}
          <div className="bg-white rounded-[32px] md:rounded-[48px] overflow-hidden shadow-2xl flex flex-col lg:flex-row border border-gray-100">
            
            {/* LEFT HALF: Image */}
            <div 
              className="w-full lg:w-1/2 h-[350px] sm:h-[450px] lg:h-auto bg-cover bg-center"
              style={{ backgroundImage: "url('/consultation-img.jpg')" }}
            ></div>

            {/* RIGHT HALF: Form Content */}
            <div className="w-full lg:w-1/2 p-10 md:p-14 lg:p-20 flex flex-col justify-center">
              
              {/* Pill Badge */}
              <div className="mb-6 px-5 py-2 rounded-full border border-gray-200 inline-flex items-center gap-2 w-max shadow-sm">
                <span className="text-company-teal   text-lg leading-none">+</span>
                <span className="text-sm font-bold tracking-widest text-company-deep uppercase">Contact Us</span>
                <span className="text-company-teal   text-lg leading-none">+</span>
              </div>

              {/* Headline */}
              <h2 className="heading-main   text-company-deep leading-[1.1] tracking-tight mb-6">
                Get free business consultation today
              </h2>

              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                Need help with a project or have a question about our SAP B1 implementations? We're here to help you scale your operations.
              </p>

              {/* Form */}
              <form className="flex flex-col gap-5">
                
                {/* Side-by-side inputs on tablet/desktop */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <input 
                    type="text" 
                    placeholder="Your Name*" 
                    required
                    className="w-full px-6 py-4 text-base rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-company-teal focus:border-transparent transition-all shadow-sm placeholder:text-gray-400 font-medium text-company-deep" 
                  />
                  <input 
                    type="email" 
                    placeholder="Your Email*" 
                    required
                    className="w-full px-6 py-4 text-base rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-company-teal focus:border-transparent transition-all shadow-sm placeholder:text-gray-400 font-medium text-company-deep" 
                  />
                </div>

                <textarea 
                  placeholder="Write your message*" 
                  rows={4} 
                  required
                  className="w-full px-6 py-4 text-base rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-company-teal focus:border-transparent transition-all shadow-sm placeholder:text-gray-400 font-medium text-company-deep resize-none" 
                ></textarea>

                {/* Submit Button */}
                <button 
                  type="submit" 
                  className="mt-4 bg-company-deep text-white hover:bg-company-teal flex items-center justify-between gap-6 font-bold rounded-full pl-8 pr-2 py-2 transition-all duration-300 shadow-xl w-max group active:scale-95"
                >
                  <span className="text-base tracking-wide">Request Free Consultation</span>
                  <div className="bg-white text-company-deep rounded-full p-2.5 transition-transform duration-300 group-hover:rotate-45">
                    <ArrowUpRight className="w-5 h-5" strokeWidth={2.5} />
                  </div>
                </button>

              </form>
            </div>

          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ConsultationSection;