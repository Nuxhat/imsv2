// src/components/ConsultationSection.tsx
"use client";

import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const ConsultationSection = () => {
  // State for the form
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [selectedService, setSelectedService] = useState("");
  
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  // 👇 Using your original, perfectly working JSON payload method!
  const handleSubmit = async () => {
    if (!name || !email || !comment || !selectedService) {
      setStatusMessage("Please fill out all required fields.");
      return;
    }

    setIsSubmitting(true);
    setStatusMessage("");

    // Matches exactly what your Google Script expects to parse
    const payload = {
      name: name,
      email: email,
      message: comment,
      serviceType: selectedService
    };

    const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwraUzYBFrX3UScEzRoxtS7UiLGAQg91yVRgqLSD_jURBtuPiwlKPl8VZAgXuYby3vG-Q/exec";

    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain;charset=utf-8", 
        },
        body: JSON.stringify(payload)
      });

      setStatusMessage("Message sent successfully! We will be in touch.");
      setName("");
      setEmail("");
      setSelectedService("");
      setComment("");
      
      setTimeout(() => setStatusMessage(""), 5000);
      
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatusMessage("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative pt-24 pb-20 md:pt-32 md:pb-24 bg-[#F8F9FB]">
      
      {/* BACKGROUND SPLIT TRICK */}
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
                <span className="text-company-teal text-lg leading-none">+</span>
                <span className="text-sm font-bold tracking-widest text-company-deep uppercase">Contact Us</span>
                <span className="text-company-teal text-lg leading-none">+</span>
              </div>

              {/* Headline */}
              <h2 className="heading-main text-company-deep leading-[1.1] tracking-tight mb-6">
                Get free business consultation today
              </h2>

              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                Need help with a project or have a question about our ERP implementations? We're here to help you scale your operations.
              </p>

              <div className="flex flex-col gap-5">
                
                {/* Side-by-side inputs */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <input 
                    type="text" 
                    placeholder="Your Name*" 
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-6 py-4 text-base rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-company-teal focus:border-transparent transition-all shadow-sm placeholder:text-gray-400 font-medium text-company-deep" 
                  />
                  <input 
                    type="email" 
                    placeholder="Your Email*" 
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-6 py-4 text-base rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-company-teal focus:border-transparent transition-all shadow-sm placeholder:text-gray-400 font-medium text-company-deep" 
                  />
                </div>

                {/* Dropdown Menu */}
                <div className="relative">
                  <div
                    onClick={() => setIsOpen(!isOpen)}
                    className={`w-full px-6 py-4 text-base rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-company-teal transition-all shadow-sm cursor-pointer flex justify-between items-center font-medium ${
                      selectedService ? "text-company-deep" : "text-gray-400"
                    }`}
                  >
                    <span>{selectedService || "Service Type*"}</span>
                    <svg width="14" height="8" viewBox="0 0 14 8" fill="none" className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
                      <path d="M1 1L7 7L13 1" stroke="#000A3F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>

                  {isOpen && (
                    <ul className="absolute z-50 w-full mt-2 bg-white border border-gray-100 rounded-xl shadow-lg overflow-hidden text-base font-medium text-company-deep">
                      {[
                        "ERP Implementation",
                        "AMC Support",
                        "Web Portal Integration",
                        "Custom Add-on Development",
                        "Data & HANA Reporting",
                        "User Training & Audits"
                      ].map((service) => (
                        <li
                          key={service}
                          onClick={() => {
                            setSelectedService(service);
                            setIsOpen(false);
                          }}
                          className="px-6 py-3 cursor-pointer hover:bg-gray-50 transition-colors border-b border-gray-50 last:border-none"
                        >
                          {service}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <textarea 
                  placeholder="Write your message*" 
                  rows={4} 
                  required
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className="w-full px-6 py-4 text-base rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-company-teal focus:border-transparent transition-all shadow-sm placeholder:text-gray-400 font-medium text-company-deep resize-none" 
                ></textarea>

                {/* Submit Button */}
                <button 
                  type="button" 
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="mt-4 bg-company-deep text-white hover:bg-company-teal flex items-center justify-between gap-6 font-bold rounded-full pl-8 pr-2 py-2 transition-all duration-300 shadow-xl w-max group active:scale-95 disabled:opacity-50"
                >
                  <span className="text-base tracking-wide">
                    {isSubmitting ? "Sending..." : "Request Free Consultation"}
                  </span>
                  <div className="bg-white text-company-deep rounded-full p-2.5 transition-transform duration-300 group-hover:rotate-45">
                    <ArrowUpRight className="w-5 h-5" strokeWidth={2.5} />
                  </div>
                </button>

                {/* Status Message */}
                {statusMessage && (
                  <p className={`text-base font-medium mt-2 ${statusMessage.includes("successfully") ? "text-green-500" : "text-red-500"}`}>
                    {statusMessage}
                  </p>
                )}

              </div>
            </div>

          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ConsultationSection;