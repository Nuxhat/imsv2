"use client";

import { useState } from 'react';
import { CheckCircle2, Users } from 'lucide-react';
import ScrollReveal from './ScrollReveal'; 

const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [selectedService, setSelectedService] = useState("");
  
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  // Notice we removed the "e.preventDefault()" because there is no form to prevent anymore!
  const handleSubmit = async () => {
    if (!selectedService) {
      setStatusMessage("Please select a service type.");
      return;
    }

    setIsSubmitting(true);
    setStatusMessage("");

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
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatusMessage("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container mx-auto px-6 lg:px-12 xl:px-16 max-w-[1600px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 xl:gap-32 items-center">
          
          {/* LEFT COLUMN */}
          <div className="flex flex-col items-start w-full">
            <ScrollReveal delay={0}>
              <div className="mb-10 px-6 py-3 rounded-full border border-gray-200 bg-white inline-flex items-center gap-4 shadow-sm">
                <span className="text-company-teal text-2xl leading-none">+</span> 
                <span className="text-sm md:text-base font-bold tracking-[0.2em] text-company-deep uppercase">Contact Us</span> 
                <span className="text-company-teal text-2xl leading-none">+</span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h2 className="text-5xl md:text-6xl lg:text-[72px] text-company-deep leading-[1.05] tracking-tight mb-10">
                Let's Build an Awesome Project Together
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <p className="text-xl lg:text-2xl text-gray-600 mb-16 leading-relaxed max-w-3xl">
                Whether you need a complete ERP Business One implementation, custom Web Portal integration, or dedicated Annual Maintenance Contract (AMC) support, our team of experts is ready to deliver.
              </p>
            </ScrollReveal>

            <div className="flex flex-col gap-10">
              <ScrollReveal delay={300}>
                <div className="flex gap-8 items-start">
                  <div className="bg-company-deep w-20 h-20 rounded-[24px] flex items-center justify-center shrink-0 shadow-xl">
                    <CheckCircle2 className="w-10 h-10 text-company-teal" />
                  </div>
                  <div>
                    <h4 className="text-3xl text-company-deep mb-3 tracking-tight">50+ ERP Go-Lives</h4>
                    <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-lg">
                      Successfully delivered tailored ERP solutions across manufacturing, retail, and service sectors worldwide.
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={400}>
                <div className="flex gap-8 items-start">
                  <div className="bg-company-deep w-20 h-20 rounded-[24px] flex items-center justify-center shrink-0 shadow-xl">
                    <Users className="w-10 h-10 text-company-teal" />
                  </div>
                  <div>
                    <h4 className="text-3xl text-company-deep mb-3 tracking-tight">100% AMC Retention</h4>
                    <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-lg">
                      Long-term partnerships ensuring continuous system health, security audits, and process optimization.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <ScrollReveal delay={200} className="w-full">
            <div className="bg-company-deep rounded-[48px] p-10 md:p-16 lg:p-20 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-company-teal/10 rounded-full blur-[100px] -mr-40 -mt-40 pointer-events-none"></div>

              <div className="relative z-10">
                <h3 className="heading-main text-white mb-6 tracking-tight">Make an Appointment</h3>
                <p className="text-gray-300 mb-12 text-xl">Feel free to contact us, we don't spam your email.</p>

                {/* 👇 THIS IS THE BYPASS. It is a <div> now, NOT a <form> */}
                <div className="flex flex-col gap-6">
                  <input 
                    type="text"
                    placeholder="Your Name *"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-8 py-5 text-lg rounded-2xl bg-white text-company-deep font-medium placeholder:text-gray-400 focus:outline-none focus:ring-4 focus:ring-company-teal/50 transition-all shadow-sm"
                  />

                  <input 
                    type="email"
                    placeholder="Email Here *"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-8 py-5 text-lg rounded-2xl bg-white text-company-deep font-medium placeholder:text-gray-400 focus:outline-none focus:ring-4 focus:ring-company-teal/50 transition-all shadow-sm"
                  />

                  <div className="relative">
                    <div
                      onClick={() => setIsOpen(!isOpen)}
                      className={`w-full px-8 py-5 text-lg rounded-2xl bg-white font-medium focus:outline-none focus:ring-4 focus:ring-company-teal/50 transition-all shadow-sm cursor-pointer flex justify-between items-center ${
                        selectedService ? "text-company-deep" : "text-gray-400"
                      }`}
                    >
                      <span>{selectedService || "Service Type *"}</span>
                      <svg width="18" height="10" viewBox="0 0 14 8" fill="none" className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
                        <path d="M1 1L7 7L13 1" stroke="#000A3F" strokeWidth="2.5" />
                      </svg>
                    </div>

                    {isOpen && (
                      <ul className="absolute z-50 w-full mt-2 bg-white border border-gray-100 rounded-2xl shadow-xl overflow-hidden text-lg font-medium text-company-deep">
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
                            className="px-8 py-4 cursor-pointer hover:bg-gray-50 transition-colors border-b border-gray-50 last:border-none"
                          >
                            {service}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  <textarea
                    placeholder="Your Comment *"
                    rows={5}
                    required
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    className="w-full px-8 py-5 text-lg rounded-2xl bg-white text-company-deep font-medium placeholder:text-gray-400 focus:outline-none focus:ring-4 focus:ring-company-teal/50 transition-all shadow-sm resize-none"
                  />

                  {/* 👇 The native button bypass. type="button" strictly prevents reloads */}
                  <button 
                    type="button" 
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="mt-6 w-full px-8 py-5 text-lg rounded-2xl bg-[#0F9D9D] text-white font-medium hover:bg-opacity-90 transition-all shadow-sm disabled:opacity-50"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>

                  {statusMessage && (
                    <p className={`text-lg font-medium mt-2 ${statusMessage.includes("successfully") ? "text-green-400" : "text-red-400"}`}>
                      {statusMessage}
                    </p>
                  )}
                </div>

              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;