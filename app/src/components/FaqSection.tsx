// src/components/FaqSection.tsx
"use client"; // Required because we are using React state for the accordion!

import { useState } from 'react';
import { ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const FaqSection = () => {
  // Track which accordion item is open. Null means all are closed. 
  // We start with 0 (the first one) open by default!
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How long does a typical ERP implementation take?",
      answer: "The timeline varies based on the complexity of your business processes and data migration needs. However, a standard implementation typically takes between 3 to 6 months from initial blueprinting to Go-Live."
    },
    {
      question: "What is included in your Annual Maintenance Contract (AMC)?",
      answer: "Our AMC covers continuous system health checks, version upgrades, proactive security audits, and dedicated technical helpdesk support to ensure your ERP environment runs with zero downtime."
    },
    {
      question: "Can you integrate ERP with our existing web portal?",
      answer: "Absolutely. We specialize in developing custom APIs and middleware to seamlessly sync your ERP backend with B2B/B2C e-commerce platforms and custom web applications in real-time."
    },
    {
      question: "Do you provide user training for our staff?",
      answer: "Yes, we believe user adoption is key to ERP success. We provide comprehensive, role-based on-site or remote training sessions, along with detailed documentation for your team."
    },
    {
      question: "How does the initial consultation work?",
      answer: "We start with a thorough discovery session to understand your current operational bottlenecks. Then, we map out a customized ERP blueprint tailored specifically to your industry requirements."
    }
  ];

  return (
    <section className="bg-white py-24 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* LEFT COLUMN: Sticky Header & Content */}
          <div className="lg:sticky lg:top-32 flex flex-col items-start relative z-10">
            
            <ScrollReveal delay={0}>
              <div className="mb-6 px-6 py-2.5 rounded-full border border-gray-200 bg-white inline-flex items-center gap-3 shadow-sm">
                <span className="text-gray-400   text-xl leading-none">+</span> 
                <span className="text-sm md:text-base font-bold tracking-[0.1em] text-gray-500 uppercase">Questions</span> 
                <span className="text-gray-400   text-xl leading-none">+</span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h2 className="text-5xl md:text-6xl   text-company-deep leading-[1.15] tracking-tight mb-8">
                Have any questions? <br/> here some answers
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed max-w-md">
                In relation to SAP implementations and custom integrations, proper architecture considers the scalability of the product. It's all about making sure the system works flawlessly for you.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              {/* Custom Ask Question Button */}
              <button className="bg-company-deep text-white hover:bg-company-teal flex items-center gap-4 font-bold rounded-full pl-8 pr-2 py-2 transition-all duration-300 shadow-xl hover:-translate-y-1 active:scale-95 group">
                <span className="text-base">Ask Your Question</span>
                <div className="bg-white text-company-deep rounded-full p-2.5 transition-transform duration-300 group-hover:rotate-45">
                  <ArrowRight className="h-5 w-5 transform -rotate-45" strokeWidth={2.5} />
                </div>
              </button>
            </ScrollReveal>

            {/* Decorative Question Mark Outline */}
            <ScrollReveal delay={400} className="absolute -bottom-20 right-0 opacity-10 pointer-events-none select-none hidden md:block">
              <svg width="250" height="300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" stroke="none"></circle>
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                <line x1="12" y1="17" x2="12.01" y2="17" strokeWidth="2"></line>
              </svg>
            </ScrollReveal>

          </div>

          {/* RIGHT COLUMN: Interactive Accordion */}
          <div className="flex flex-col gap-4 relative z-10 w-full">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <ScrollReveal key={index} delay={200 + (index * 100)}>
                  <div 
                    // Main wrapper changes color if open
                    className={`rounded-2xl overflow-hidden transition-all duration-300 ${
                      isOpen ? 'bg-[#F8F9FB] shadow-md' : 'bg-[#F8F9FB] hover:bg-gray-100'
                    }`}
                  >
                    {/* ACCORDION BUTTON */}
                    <button 
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className={`w-full flex items-center justify-between p-6 md:p-8 text-left transition-colors duration-300 ${
                        isOpen ? 'bg-company-deep text-white' : 'bg-transparent text-company-deep'
                      }`}
                    >
                      <span className="text-lg md:text-xl font-bold pr-4">
                        {faq.question}
                      </span>
                      
                      {/* Chevron Icon Container */}
                      <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${
                        isOpen ? 'bg-white text-company-deep' : 'bg-company-deep text-white'
                      }`}>
                        {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                      </div>
                    </button>

                    {/* ACCORDION CONTENT (Smooth Height Transition) */}
                    <div 
                      className={`grid transition-all duration-300 ease-in-out ${
                        isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="p-6 md:p-8 text-gray-600 text-lg leading-relaxed border-t border-gray-200/50">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                    
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default FaqSection;