// src/components/ContactSection.tsx
import { ArrowRight, CheckCircle2, Users } from 'lucide-react';
import ScrollReveal from './ScrollReveal'; // Import the animator!
import MyButton from './MyButton';

const ContactSection = () => {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container mx-auto px-6 lg:px-12 xl:px-16 max-w-[1600px]">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 xl:gap-32 items-center">
          
          {/* LEFT COLUMN: Text & Stats */}
          <div className="flex flex-col items-start w-full">
            
            <ScrollReveal delay={0}>
              {/* Pill Badge */}
              <div className="mb-10 px-6 py-3 rounded-full border border-gray-200 bg-white inline-flex items-center gap-4 shadow-sm">
                <span className="text-company-teal   text-2xl leading-none">+</span> 
                <span className="text-sm md:text-base font-bold tracking-[0.2em] text-company-deep uppercase">
                  Contact Us
                </span> 
                <span className="text-company-teal   text-2xl leading-none">+</span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              {/* Heading */}
              <h2 className="text-5xl md:text-6xl lg:text-[72px]   text-company-deep leading-[1.05] tracking-tight mb-10">
                Let's Build an Awesome Project Together
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              {/* Description */}
              <p className="text-xl lg:text-2xl text-gray-600 mb-16 leading-relaxed max-w-3xl">
                Whether you need a complete   ERP Business One implementation, custom Web Portal integration, or dedicated Annual Maintenance Contract (AMC) support, our team of experts is ready to deliver.
              </p>
            </ScrollReveal>

            {/* Stats */}
            <div className="flex flex-col gap-10">
              
              <ScrollReveal delay={300}>
                {/* Stat 1 */}
                <div className="flex gap-8 items-start">
                  <div className="bg-company-deep w-20 h-20 rounded-[24px] flex items-center justify-center shrink-0 shadow-xl">
                    <CheckCircle2 className="w-10 h-10 text-company-teal" />
                  </div>
                  <div>
                    <h4 className="text-3xl   text-company-deep mb-3 tracking-tight">
                      50+   ERP Go-Lives
                    </h4>
                    <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-lg">
                      Successfully delivered tailored ERP solutions across manufacturing, retail, and service sectors worldwide.
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={400}>
                {/* Stat 2 */}
                <div className="flex gap-8 items-start">
                  <div className="bg-company-deep w-20 h-20 rounded-[24px] flex items-center justify-center shrink-0 shadow-xl">
                    <Users className="w-10 h-10 text-company-teal" />
                  </div>
                  <div>
                    <h4 className="text-3xl   text-company-deep mb-3 tracking-tight">
                      100% AMC Retention
                    </h4>
                    <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-lg">
                      Long-term partnerships ensuring continuous system health, security audits, and process optimization.
                    </p>
                  </div>
                </div>
              </ScrollReveal>

            </div>
          </div>

          {/* RIGHT COLUMN: The Form */}
          {/* We animate the entire card as one cohesive block so it feels substantial */}
          <ScrollReveal delay={200} className="w-full">
            <div className="bg-company-deep rounded-[48px] p-10 md:p-16 lg:p-20 relative overflow-hidden shadow-2xl">
              
              {/* Glow */}
              <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-company-teal/10 rounded-full blur-[100px] -mr-40 -mt-40 pointer-events-none"></div>

              <div className="relative z-10">
                
                <h3 className="heading-main   text-white mb-6 tracking-tight">
                  Make an Appointment
                </h3>

                <p className="text-gray-300 mb-12 text-xl">
                  Feel free to contact us, we don't spam your email.
                </p>

                <form className="flex flex-col gap-6">
                  
                  <input 
                    type="text"
                    placeholder="Your Name *"
                    required
                    className="w-full px-8 py-5 text-lg rounded-2xl bg-white text-company-deep font-medium placeholder:text-gray-400 focus:outline-none focus:ring-4 focus:ring-company-teal/50 transition-all shadow-sm"
                  />

                  <input 
                    type="email"
                    placeholder="Email Here *"
                    required
                    className="w-full px-8 py-5 text-lg rounded-2xl bg-white text-company-deep font-medium placeholder:text-gray-400 focus:outline-none focus:ring-4 focus:ring-company-teal/50 transition-all shadow-sm"
                  />

                  <div className="relative">
                    <select
                      required
                      defaultValue=""
                      className="w-full px-8 py-5 text-lg rounded-2xl bg-white text-company-deep font-medium focus:outline-none focus:ring-4 focus:ring-company-teal/50 transition-all shadow-sm appearance-none cursor-pointer"
                    >
                      <option value="" disabled>Service Type *</option>
                      <option value="erp-implementation">ERP Implementation</option>
                      <option value="amc-support">AMC Support</option>
                      <option value="web-portal">Web Portal Integration</option>
                      <option value="consulting">Business Consulting</option>
                    </select>

                    <div className="absolute right-8 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg width="18" height="10" viewBox="0 0 14 8" fill="none">
                        <path d="M1 1L7 7L13 1" stroke="#000A3F" strokeWidth="2.5" />
                      </svg>
                    </div>
                  </div>

                  <textarea
                    placeholder="Your Comment *"
                    rows={5}
                    required
                    className="w-full px-8 py-5 text-lg rounded-2xl bg-white text-company-deep font-medium placeholder:text-gray-400 focus:outline-none focus:ring-4 focus:ring-company-teal/50 transition-all shadow-sm resize-none"
                  />

             <MyButton variant="light" type="submit" className="mt-6">
  Send Message
</MyButton>

                </form>

              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;