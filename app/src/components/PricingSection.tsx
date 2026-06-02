// src/components/PricingSection.tsx
import { CheckCircle2, ArrowUpRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const PricingSection = () => {
  const plans = [
    {
      id: 1,
      name: "Basic",
      subtitle: "Pricing plan for Digital Transformation",
      price: "29.00",
      isPopular: false,
      features: [
        "Community Support",
        "Dedicated Tech Experts",
        "Unlimited Storage",
        "Custom Domains",
        "24/7 system monitoring"
      ]
    },
    {
      id: 2,
      name: "Standard",
      subtitle: "Pricing plan for Digital Transformation",
      price: "69.00",
      isPopular: true, // This triggers the dark background for the header!
      features: [
        "Community Support",
        "Dedicated Tech Experts",
        "Unlimited Storage",
        "Custom Domains",
        "24/7 system monitoring"
      ]
    },
    {
      id: 3,
      name: "Premium",
      subtitle: "Pricing plan for Digital Transformation",
      price: "119.00",
      isPopular: false,
      features: [
        "Community Support",
        "Dedicated Tech Experts",
        "Unlimited Storage",
        "Custom Domains",
        "24/7 system monitoring"
      ]
    }
  ];

  return (
    <section className="bg-[#F8F9FB] py-24 relative overflow-hidden">
      
      {/* Subtle Background Diagonals (Optional to match the vibe) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-0 left-[10%] w-[30%] h-full bg-white transform -rotate-12 opacity-60 blur-3xl"></div>
        <div className="absolute top-0 right-[10%] w-[30%] h-full bg-white transform rotate-12 opacity-60 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 max-w-[1400px] relative z-10">
        
        {/* HEADER AREA */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-20">
          <ScrollReveal delay={0}>
            {/* Pill Badge */}
            <div className="mb-6 px-6 py-2.5 rounded-full border border-gray-200 bg-white inline-flex items-center gap-2 shadow-sm">
              <span className="text-gray-400   text-lg leading-none">+</span> 
              <span className="text-sm font-bold tracking-widest text-company-deep uppercase">Pricing Plan</span> 
              <span className="text-gray-400   text-lg leading-none">+</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            {/* Headline */}
            <h2 className="heading-main     text-company-deep leading-tight tracking-tight">
              Choose Your Perfect Plans
            </h2>
          </ScrollReveal>
        </div>

        {/* PRICING GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <ScrollReveal 
              key={plan.id} 
              delay={200 + (index * 150)} // Staggers the cards
              className="h-full"
            >
              <div className="bg-white rounded-[32px] p-6 lg:p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-gray-100 flex flex-col h-full">
                
                {/* INNER HEADER BOX */}
                <div className={`rounded-[24px] p-8 mb-8 transition-colors duration-300 ${
                  plan.isPopular ? 'bg-company-deep text-white' : 'bg-[#F8F9FB] text-company-deep'
                }`}>
                  <h3 className="text-2xl font-bold mb-2">
                    {plan.name}
                  </h3>
                  <p className={`text-sm mb-8 ${plan.isPopular ? 'text-gray-300' : 'text-gray-500'}`}>
                    {plan.subtitle}
                  </p>
                  
                  {/* Price */}
                  <div className="flex items-baseline gap-1 border-t border-gray-300/30 pt-8">
                    <span className="text-5xl     tracking-tight">
                      ${plan.price}
                    </span>
                    <span className={`text-sm font-medium ${plan.isPopular ? 'text-gray-400' : 'text-gray-500'}`}>
                      /Monthly
                    </span>
                  </div>
                </div>

                {/* FEATURES LIST */}
                <div className="flex flex-col gap-5 px-2 mb-10 flex-grow">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-4">
                      {/* Check Icon matching the design */}
                      <CheckCircle2 className="w-5 h-5 text-gray-400 shrink-0" strokeWidth={1.5} />
                      <span className="text-gray-600 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* ACTION BUTTON */}
                <button className="w-full mt-auto py-4 rounded-full bg-company-deep text-white font-bold flex items-center justify-center gap-2 hover:bg-company-teal transition-all duration-300 group">
                  <span className="tracking-wide">Choose Package</span>
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" strokeWidth={2.5} />
                </button>

              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PricingSection;