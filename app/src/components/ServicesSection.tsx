// src/components/ServicesSection.tsx
import { ArrowRight, Plus, Server, Globe, ShieldCheck, Code, BarChart3, Users } from 'lucide-react';
import MyButton from './MyButton';
import ScrollReveal from './ScrollReveal'; // Import the animator

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "SAP B1 Implementation",
      description: "End-to-end ERP deployment tailored to your business. From initial blueprinting to seamless Go-Live.",
      icon: <Server className="w-7 h-7 text-company-blue group-hover:text-company-teal transition-colors duration-300" />,
      features: ["Workflow Blueprinting", "Data Migration", "Go-Live & Support"]
    },
    {
      id: 2,
      title: "Web Portal Integration",
      description: "Connect your SAP B1 backend with customized B2B and B2C web applications for real-time sync.",
      icon: <Globe className="w-7 h-7 text-company-blue group-hover:text-company-teal transition-colors duration-300" />,
      features: ["E-Commerce Sync", "Customer Dashboards", "API Development"]
    },
    {
      id: 3,
      title: "Annual Maintenance (AMC)",
      description: "Continuous health checks, version upgrades, and dedicated technical support for your SAP environment.",
      icon: <ShieldCheck className="w-7 h-7 text-company-blue group-hover:text-company-teal transition-colors duration-300" />,
      features: ["Performance Tuning", "Version Upgrades", "Helpdesk Support"]
    },
    {
      id: 4,
      title: "Custom Add-on Dev",
      description: "Extend SAP B1 capabilities with custom modules, HANA Studio extensions, and specific automated workflows.",
      icon: <Code className="w-7 h-7 text-company-blue group-hover:text-company-teal transition-colors duration-300" />,
      features: ["HANA Studio Experts", "Automated Workflows", "3rd-Party Plugins"]
    },
    {
      id: 5,
      title: "Data & HANA Reporting",
      description: "Transform raw data into actionable insights using Crystal Reports and interactive HANA dashboards.",
      icon: <BarChart3 className="w-7 h-7 text-company-blue group-hover:text-company-teal transition-colors duration-300" />,
      features: ["Crystal Reports", "Interactive Dashboards", "Financial Analytics"]
    },
    {
      id: 6,
      title: "User Training & Audits",
      description: "Empower your team with comprehensive SAP training and periodic audits to ensure optimal system usage.",
      icon: <Users className="w-7 h-7 text-company-blue group-hover:text-company-teal transition-colors duration-300" />,
      features: ["On-site Training", "Process Optimization", "Security Audits"]
    }
  ];

  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-6 lg:px-12">
        
        {/* HEADER AREA */}
        <div className="flex flex-col items-center text-center mb-16">
          <ScrollReveal delay={0}>
            <div className="mb-6 px-5 py-1.5 rounded-full border border-gray-200 bg-white inline-flex items-center gap-2 shadow-sm">
              <span className="text-company-teal font-bold">+</span> 
              <span className="text-sm font-bold tracking-widest text-company-deep uppercase">Our Services</span> 
              <span className="text-company-teal font-bold">+</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h2 className="text-4xl md:text-5xl font-extrabold text-company-deep leading-tight max-w-2xl">
              Empower your operations to <br />
              <span className="text-company-blue">scale business growth</span>
            </h2>
          </ScrollReveal>
        </div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* We added 'index' here to dynamically calculate the delay for each card */}
          {services.map((service, index) => (
            <ScrollReveal 
              key={service.id} 
              delay={200 + (index * 100)} // Staggers the cards: 200ms, 300ms, 400ms...
              className="h-full" // Ensures the wrapper stretches in the grid
            >
              <div 
                className="bg-[#F8F9FB] h-full rounded-xl p-8 lg:p-10 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-transparent hover:bg-company-deep group cursor-pointer flex flex-col"
              >
                {/* Icon Box */}
                <div className="bg-white w-16 h-16 rounded-xl flex items-center justify-center mb-8 shadow-sm border border-gray-100 group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300">
                  {service.icon}
                </div>

                {/* Text Content */}
                <h3 className="text-2xl font-bold text-company-deep group-hover:text-white transition-colors duration-300 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 group-hover:text-gray-300 transition-colors duration-300 mb-8 leading-relaxed text-sm lg:text-base flex-grow">
                  {service.description}
                </p>

                {/* Bullet Features */}
                <ul className="flex flex-col gap-4 mt-auto">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm font-semibold text-company-deep group-hover:text-gray-200 transition-colors duration-300">
                      <Plus className="w-4 h-4 text-company-teal font-bold" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* FOOTER BUTTON */}
        <div className="flex justify-center">
          <ScrollReveal delay={800}>
            <MyButton variant="about">
              More Services
            </MyButton>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;