// src/components/PortfolioSection.tsx
import { ArrowRight } from 'lucide-react';
import MyButton from './MyButton';
import ScrollReveal from './ScrollReveal'; // Import our animator

const PortfolioSection = () => {
  const portfolioCards = [
    {
      id: 1,
      badge: "SAP B1 Implementation",
      title: "Innovation meets \nbusiness needs",
      description:
        "Our mission is to empower businesses of all sizes to thrive in an ever-changing marketplace. We seamlessly integrated their core processes to ensure scalable, long-term success.",
      image: "/sap-portfolio-1.jpg",
      bgColor: "bg-[#FFF1F1]",
    },
    {
      id: 2,
      badge: "Risk Management & AMC",
      title: "Protecting business \nfrom uncertainty",
      description:
        "We ensure your SAP B1 landscape is secure and compliant. Through comprehensive Annual Maintenance Contracts (AMC) and proactive audits, we safeguard your critical business data and web portal integrations from disruptions.",
      image: "/sap-portfolio-2.jpg",
      bgColor: "bg-[#F2F0FF]",
    },
    {
      id: 3,
      badge: "Business Growth",
      title: "Redesigning business \nfor solutions",
      description:
        "Our mission is to empower businesses of all sizes to thrive in an ever-changing marketplace. We provide the technical foundation needed to scale your operations globally.",
      image: "/sap-portfolio-3.jpg",
      bgColor: "bg-[#ECFDF3]",
    },
  ];

  return (
    <section className="bg-white py-20 md:py-24 relative">
      <div className="container mx-auto px-6 lg:px-12">
        
        {/* HEADER AREA - Safely Animated */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-16">
          <ScrollReveal delay={0}>
            <h2 className="text-4xl md:text-5xl lg:text-[56px] font-extrabold text-company-deep leading-[1.1] max-w-xl tracking-tight">
              Explore the Recent <br className="hidden md:block" />
              Works We Have Done!
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="text-lg text-gray-600 max-w-xl leading-relaxed lg:mt-4">
              Our SAP consulting team specializes in providing innovative,
              enterprise-grade ERP systems that harness the power of real-time
              data, reducing operational bottlenecks for clients worldwide.
            </p>
          </ScrollReveal>
        </div>

        {/* STACKING CARDS CONTAINER */}
        <div className="relative flex flex-col gap-0 pb-40">
          {portfolioCards.map((card) => (
            <div
              key={card.id}
              // STRICT RULE: DO NOT put ScrollReveal on this outer div, or sticky breaks!
              // Note: I moved z-index to inline styles because Tailwind cannot read dynamic z-[${id}] at build time.
              className={`sticky top-24 ${card.bgColor} w-full h-auto lg:h-[680px] overflow-hidden rounded-[32px] md:rounded-[40px] p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row gap-10 lg:gap-16 items-center shadow-2xl transition-all duration-500 hover:scale-[1.01]`}
              style={{ zIndex: card.id }} 
            >
              
              {/* LEFT SIDE: Text Content */}
              {/* We wrap this in ScrollReveal so it animates IN when the card scrolls into view */}
              <ScrollReveal delay={100} className="w-full lg:w-1/2">
                <div className="flex flex-col items-start">
                  {/* Badge */}
                  <div className="mb-6 px-5 py-2 rounded-full border border-gray-200 bg-white inline-flex items-center gap-2 shadow-sm">
                    <span className="text-company-teal font-extrabold text-lg leading-none">+</span>
                    <span className="text-sm font-bold tracking-widest text-company-deep uppercase">{card.badge}</span>
                    <span className="text-company-teal font-extrabold text-lg leading-none">+</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-4xl md:text-5xl font-extrabold text-company-deep mb-6 leading-tight tracking-tight whitespace-pre-line">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-lg text-company-deep/80 mb-10 leading-relaxed font-medium">
                    {card.description}
                  </p>

                  {/* Button */}
                  <MyButton variant="about">Learn More</MyButton>
                </div>
              </ScrollReveal>

              {/* RIGHT SIDE: IMAGE */}
              {/* Delayed slightly so it pops in right after the text */}
              <ScrollReveal delay={300} className="w-full lg:w-1/2 h-[350px] sm:h-[400px] lg:h-full lg:max-h-[500px]">
                <div className="relative rounded-[24px] overflow-hidden shadow-xl w-full h-full">
                  <div
                    className="absolute inset-0 bg-cover bg-center hover:scale-105 transition-transform duration-700 cursor-pointer"
                    style={{ backgroundImage: `url('${card.image}')` }}
                  />
                </div>
              </ScrollReveal>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;