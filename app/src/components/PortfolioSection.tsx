// src/components/PortfolioSection.tsx
import { ArrowRight } from 'lucide-react';
import MyButton from './MyButton';
import ScrollReveal from './ScrollReveal'; // Import our animator

const PortfolioSection = () => {
  const portfolioCards = [
    {
      id: 1,
      badge: "ERP Implementation",
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
        "We ensure your ERP landscape is secure and compliant. Through comprehensive Annual Maintenance Contracts (AMC) and proactive audits, we safeguard your critical business data and web portal integrations from disruptions.",
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
        
        {/* HEADER AREA */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-24">
          <ScrollReveal delay={0}>
            <h2 className="heading-main lg:text-[56px] text-company-deep leading-[1.1] max-w-xl tracking-tight">
              Explore the Recent <br className="hidden md:block" />
              Works We Have Done!
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="text-[18px] leading-[28px] font-normal text-[#1C2539] max-w-xl lg:mt-4">
              Our   ERP consulting team specializes in providing innovative,
              enterprise-grade ERP systems that harness the power of real-time
              data, reducing operational bottlenecks for clients worldwide.
            </p>
          </ScrollReveal>
        </div>
      </div>

      {/* ULTRA-WIDE STACKING CARDS CONTAINER */}
<div className="relative w-full max-w-[1600px] mx-auto flex flex-col gap-0 pb-40">        {portfolioCards.map((card) => (
          <div
            key={card.id}
            className={`sticky top-28 ${card.bgColor} w-full h-auto lg:h-[760px] overflow-hidden rounded-[32px] md:rounded-[45px] p-8 md:p-14 lg:p-20 flex flex-col lg:flex-row justify-between items-center shadow-2xl transition-all duration-500 hover:scale-[1.002]`}
            style={{ zIndex: card.id }} 
          >
            
            {/* LEFT SIDE: Text Content (55% space with upgraded typography sizes) */}
            <ScrollReveal className="w-full lg:w-[55%]" delay={100}>
              <div className="flex flex-col items-start w-full">
                
                {/* Badge: Scaled up to text-base */}
                <div className="mb-10 px-6 py-2.5 rounded-full border border-gray-200 bg-white inline-flex items-center gap-2 shadow-sm">
                  <span className="text-company-teal text-xl leading-none">+</span>
                  <span className="text-base font-bold tracking-widest text-company-deep uppercase">{card.badge}</span>
                  <span className="text-company-teal text-xl leading-none">+</span>
                </div>

                <h3
  className="
    font-['Poppins']
    font-semibold
    text-[36px]
    md:text-[42px]
    lg:text-[50px]
    leading-[44px]
    md:leading-[52px]
    lg:leading-[60px]
    text-[#1C2539]
    mb-8
    whitespace-pre-line
  "
>
  {card.title}
</h3>

                {/* Description: Scaled up to a crisp 20px with matching 32px line height */}
                <p className="text-lg md:text-[20px] leading-[32px] font-normal text-[#1C2539]/90 mb-12 max-w-3xl">
                  {card.description}
                </p>

                {/* Button */}
                <MyButton variant="dark">Learn More</MyButton>
              </div>
            </ScrollReveal>

            {/* RIGHT SIDE: IMAGE */}
            <ScrollReveal className="w-full lg:w-[40%] h-[400px] sm:h-[500px] lg:h-full lg:max-h-[580px]" delay={300}>
              <div className="relative rounded-[28px] overflow-hidden shadow-xl w-full h-full">
                <div
                  className="absolute inset-0 bg-cover bg-center hover:scale-105 transition-transform duration-700 cursor-pointer"
                  style={{ backgroundImage: `url('${card.image}')` }}
                />
              </div>
            </ScrollReveal>

          </div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;