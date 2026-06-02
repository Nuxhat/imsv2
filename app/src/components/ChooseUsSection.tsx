// src/components/ChooseUsSection.tsx
import { Target, Eye, Award } from 'lucide-react';
import MyButton from './MyButton';
import ScrollReveal from './ScrollReveal';

const ChooseUsSection = () => {
  const features = [
    {
      id: 1,
      title: "Our Mission",
      description: "Our mission is to push boundaries with innovative SAP architectures, engaging audiences and driving scalable enterprise growth.",
      icon: <Target className="w-8 h-8 text-company-deep group-hover:text-company-teal transition-colors duration-300" />
    },
    {
      id: 2,
      title: "Our Vision",
      description: "To be the leading global partner for ERP digital transformation, setting new standards for web portal integrations and AMC support.",
      icon: <Eye className="w-8 h-8 text-company-deep group-hover:text-company-teal transition-colors duration-300" />
    },
    {
      id: 3,
      title: "Our Awards",
      description: "Recognized globally for excellence in SAP B1 implementation, delivering seamless Go-Lives with zero operational downtime.",
      icon: <Award className="w-8 h-8 text-company-deep group-hover:text-company-teal transition-colors duration-300" />
    }
  ];

  return (
    <section className="bg-[#F8F9FB] py-24 relative overflow-hidden">
      
      {/* Subtle background diagonal shapes matching the reference */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[10%] -left-[5%] w-[40%] h-[120%] bg-white transform rotate-12 opacity-50 blur-3xl"></div>
        <div className="absolute top-[20%] -right-[10%] w-[50%] h-[150%] bg-white transform -rotate-12 opacity-40 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 max-w-[1600px] relative z-10">
        
        {/* TOP SPLIT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-center mb-20">
          
          {/* LEFT: Large Image */}
          <ScrollReveal delay={100} className="w-full h-full min-h-[500px] xl:min-h-[600px]">
            <div 
              className="w-full h-full rounded-[32px] md:rounded-[40px] bg-cover bg-center shadow-2xl transition-transform duration-700 hover:scale-[1.02]"
              style={{ backgroundImage: "url('/choose-main.jpg')" }}
            ></div>
          </ScrollReveal>

          {/* RIGHT: Text & Badge */}
          <div className="flex flex-col items-start justify-center">
            
            <ScrollReveal delay={200}>
              <div className="mb-6 px-5 py-1.5 rounded-full border border-gray-200 bg-white inline-flex items-center gap-2 shadow-sm">
                <span className="text-company-teal font-bold">+</span> 
                <span className="text-sm font-bold tracking-widest text-company-deep uppercase">Why Choose Us</span> 
                <span className="text-company-teal font-bold">+</span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <h2 className="heading-main     text-company-deep mb-8 leading-[1.1] tracking-tight">
                Empowering Growth on a <span className="text-company-blue">Global Scale</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-xl">
                We provide dependable and tailored SAP consulting services that help your business navigate technical challenges and seize operational opportunities.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={500}>
          <MyButton variant="dark">
                More About Us
              </MyButton>
            </ScrollReveal>

            {/* Badge & Small Image Row */}
            <div className="flex flex-col sm:flex-row items-center gap-10 mt-14 w-full">
              
              {/* Spinning Experience Badge */}
              <ScrollReveal delay={600}>
                <div className="relative w-36 h-36 flex items-center justify-center shrink-0">
                  {/* Rotating SVG Text */}
                  <svg className="absolute inset-0 w-full h-full animate-[spin_10s_linear_infinite]" viewBox="0 0 100 100">
                    <path id="textPath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="transparent" />
                    <text className="text-[11.5px] font-bold fill-company-deep tracking-[0.15em] uppercase">
                      <textPath href="#textPath" startOffset="0%">
                        Years  of  Experience •
                      </textPath>
                    </text>
                  </svg>
                  {/* Center Circle */}
                  <div className="bg-company-deep rounded-full w-[84px] h-[84px] flex items-center justify-center z-10 shadow-xl">
                    <span className="text-white text-3xl  ">3+</span>
                  </div>
                </div>
              </ScrollReveal>

              {/* Small Right Image */}
              <ScrollReveal delay={700} className="w-full sm:w-64 h-48 md:ml-auto">
                <div 
                  className="w-full h-full rounded-[24px] bg-cover bg-center shadow-lg transition-transform duration-500 hover:scale-[1.05]"
                  style={{ backgroundImage: "url('/choose-small.jpg')" }}
                ></div>
              </ScrollReveal>

            </div>
          </div>
        </div>

        {/* BOTTOM: 3 Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pt-10 border-t border-gray-200">
          {features.map((feature, index) => (
            <ScrollReveal key={feature.id} delay={800 + (index * 100)}>
              <div className="flex flex-col items-start group cursor-default">
                
                {/* Icon Box */}
                <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-gray-100 transition-transform duration-300 group-hover:-translate-y-2">
                  {feature.icon}
                </div>

                <h4 className="text-2xl   text-company-deep mb-3 transition-colors duration-300 group-hover:text-company-blue">
                  {feature.title}
                </h4>
                
                <p className="text-gray-600 leading-relaxed text-base">
                  {feature.description}
                </p>

              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ChooseUsSection;