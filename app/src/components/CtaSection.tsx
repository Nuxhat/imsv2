// src/components/CtaSection.tsx
import { ArrowRight } from 'lucide-react';
import MyButton from './MyButton';

const CtaSection = () => {
  return (
    <section className="bg-white py-24">

      {/* Wider overall container */}
      <div className="w-full flex justify-center px-4 md:px-6">

        {/* Updated Jumbo Card */}
        <div className="bg-company-deep w-full max-w-[1850px] rounded-[28px] py-14 px-8 md:py-[70px] md:px-[80px] lg:px-[110px] relative overflow-hidden shadow-2xl flex flex-col xl:flex-row items-center justify-between">

          {/* Ambient Glows */}
          <div className="absolute top-0 right-0 w-[1200px] h-[1200px] bg-company-teal/15 rounded-full blur-[150px] -mr-80 -mt-80 pointer-events-none"></div>

          <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-company-blue/10 rounded-full blur-[120px] -ml-40 -mb-40 pointer-events-none"></div>

          {/* TEXT CONTENT */}
          <div className="relative z-10 w-full xl:w-[78%]">

            {/* Badge */}
            <div className="mb-10 px-6 py-3 rounded-full border border-white/20 bg-white/5 backdrop-blur-md inline-flex items-center gap-4">
              <span className="text-company-teal font-extrabold text-2xl leading-none">
                +
              </span>

              <span className="text-sm md:text-base font-bold tracking-[0.25em] text-white uppercase">
                Continuous System Health
              </span>

              <span className="text-company-teal font-extrabold text-2xl leading-none">
                +
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-5xl md:text-[72px] lg:text-[90px] font-extrabold text-white mb-8 leading-[1.05] tracking-tight">
              Thriving on consistent,
              <br className="hidden lg:block" />
              <span className="text-company-teal">
                optimized SAP performance.
              </span>
            </h2>

            {/* Description */}
            <p className="text-lg md:text-2xl lg:text-[26px] text-gray-300 mb-12 leading-relaxed max-w-5xl">
              You've done the hard part—building your business and winning
              customers. Now, our dedicated AMC services make it effortless to
              keep your SAP environment secure, upgraded, and running at peak
              efficiency.
            </p>

            {/* CTA Button */}
            <div className="origin-left">
               <MyButton variant="hero">
  Get Support Now
</MyButton>

            </div>

          </div>

          {/* Right Side Graphic */}
          <div className="hidden xl:flex relative z-10 w-[22%] justify-end opacity-40">
            <svg
              width="320"
              height="320"
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 0L186.603 50V150L100 200L13.3975 150V50L100 0Z"
                stroke="#1BDEE1"
                strokeWidth="2"
              />

              <path
                d="M100 40L151.962 70V130L100 160L48.0385 130V70L100 40Z"
                stroke="#1A92E7"
                strokeWidth="1"
              />
            </svg>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CtaSection;