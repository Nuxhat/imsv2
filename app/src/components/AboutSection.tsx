// src/components/AboutSection.tsx
import { CheckCircle2, ArrowRight } from 'lucide-react';
import MyButton from './MyButton';
import ScrollReveal from './ScrollReveal'; // Import the animator!

const AboutSection = () => {
  const logos = [
    'SAP', 'Google', 'logitech', 'CHASE', 'factual', 'Matrixian',
    'SAP', 'Google', 'logitech', 'CHASE', 'factual', 'Matrixian',
    'SAP', 'Google', 'logitech', 'CHASE', 'factual', 'Matrixian'
  ];

  return (
    <section className="bg-company-white text-company-deep py-20 overflow-hidden">
      
      <style dangerouslySetInnerHTML={{__html: `
        .bulletproof-marquee {
          display: flex;
          width: max-content;
          animation: slide-left 10s linear infinite;
        }
        @keyframes slide-left {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.33%); } 
        }
      `}} />

      {/* 1. SCROLLING LOGO TICKER */}
      <ScrollReveal delay={0}>
        <div className="w-full border-b border-gray-200 pb-10 mb-20 relative">
          <div className="overflow-hidden flex w-full">
            <div className="bulletproof-marquee flex items-center gap-24 px-10">
              {logos.map((logo, index) => (
                <span 
                  key={index} 
                  className="text-2xl font-bold text-gray-400  tracking-widest hover:text-company-deep transition duration-300"
                >
                  {logo}
                </span>
              ))}
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* 2. MAIN CONTENT GRID */}
      <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
     {/* LEFT COLUMN: Geometric Image Layout */}
<div className="relative w-full max-w-[650px] aspect-[1/1] mx-auto">

  {/* Dotted Background Triangle */}
  <ScrollReveal
    delay={100}
    className="absolute top-[2%] left-[36%] w-[30%] h-[28%] z-0"
  >
    <div
      className="w-full h-full opacity-35"
      style={{
        backgroundImage:
          "radial-gradient(#d1d5db 1.5px, transparent 1.5px)",
        backgroundSize: "12px 12px",
        clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)",
      }}
    />
  </ScrollReveal>

  {/* TOP LEFT IMAGE */}
  <ScrollReveal
    delay={200}
    className="absolute top-[0%] left-[8%]  w-[42%] h-[60%] z-10"
  >
    <div
      className="w-full h-full bg-cover bg-center transition-transform duration-500 hover:scale-[1.03]"
      style={{
        backgroundImage: "url('/sap-work-1.jpg')",
        clipPath: "polygon(0 50%, 100% 0, 100% 100%)",
      }}
    />
  </ScrollReveal>

{/* SMALL BOTTOM LEFT IMAGE */}
<ScrollReveal
  delay={300}
  className="absolute bottom-[16%] left-[20%] w-[30%] h-[38%] z-30"
>
  <div
    className="w-full h-full bg-cover bg-center transition-transform duration-500 hover:scale-[1.03]"
    style={{
      backgroundImage: "url('/sap-work-2.jpg')",
      clipPath: "polygon(0 0, 0 100%, 100% 50%)",
    }}
  />
</ScrollReveal>
  {/* LARGE RIGHT IMAGE */}
  <ScrollReveal
    delay={400}
    className="absolute top-[26%] right-[3%] w-[42%] h-[60%] z-10"
  >
    <div
      className="w-full h-full bg-cover bg-center transition-transform duration-500 hover:scale-[1.03]"
      style={{
        backgroundImage: "url('/sap-work-3.jpg')",
        clipPath: "polygon(0 0, 0 100%, 100% 50%)",
      }}
    />
  </ScrollReveal>

  {/* DARK ACCENT TRIANGLE */}
  <ScrollReveal
    delay={500}
    className="absolute top-[26%] right-[8%] w-[18%] h-[22%] z-40"
  >
    <div
      className="w-full h-full bg-company-deep"
      style={{
        clipPath: "polygon(0 50%, 100% 0, 100% 100%)",
      }}
    />
  </ScrollReveal>

</div>

        {/* RIGHT COLUMN: Text Content (Staggered Cascading Text) */}
        <div className="flex flex-col items-start justify-center">
          
          <ScrollReveal delay={200}>
            <div className="mb-6 px-5 py-1.5 rounded-full border border-gray-200 bg-gray-50 inline-flex items-center gap-2">
              <span className="text-company-teal font-bold">+</span> 
              <span className="text-sm font-bold tracking-widest text-company-deep uppercase">Our Company</span> 
              <span className="text-company-teal font-bold">+</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <h2 className="text-4xl md:text-5xl font-extrabold text-company-deep mb-6 leading-tight tracking-tight">
              Redesigning business <br/>
              <span className="text-company-blue">for solutions</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-lg">
              Our mission is to empower businesses of all sizes to thrive in an ever-changing marketplace. We provide end-to-end SAP B1 solutions.
            </p>
          </ScrollReveal>

          <div className="flex flex-col gap-5 mb-12 w-full">
            {[
              'Integrate a diverse range of ideas',
              'Deliver the highest quality outcomes',
              'Believe in power of implication'
            ].map((text, i) => (
              // Stagger the list items dynamically (500, 600, 700ms)
              <ScrollReveal key={i} delay={500 + (i * 100)}>
                <div className="flex items-center gap-4">
                  <div className="rounded-full border-2 border-gray-300 p-0.5">
                    <CheckCircle2 className="w-4 h-4 text-gray-600 flex-shrink-0" />
                  </div>
                  <span className="text-gray-700 font-medium">{text}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={800}>
            <MyButton variant="about">
              More About Us
            </MyButton>
          </ScrollReveal>

        </div>

      </div>
    </section>
  );
};

export default AboutSection;