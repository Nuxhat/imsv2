// src/components/Hero.tsx
import { ArrowRight } from 'lucide-react';
import MyButton from './MyButton';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-32 overflow-hidden">
      
      {/* 1. BACKGROUND IMAGE */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/bg-office.jpg')" }} 
      />
      
      {/* 2. BRAND COLOR OVERLAY */}
      <div className="absolute inset-0 z-0 bg-company-deep/75" />

      {/* 3. CONTENT */}
      <div className="container mx-auto px-6 text-center relative z-10 flex flex-col items-center">
        
        {/* Subtitle Pill - Adjusted to match reference sizing */}
        <div className="mb-6 px-6 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm inline-flex items-center gap-3">
          <span className="text-company-teal font-bold text-lg leading-none">+</span> 
          <span className="text-[18px] font-bold tracking-[0.2em] text-white  mt-0.5">Welcome to iMSconsulting</span> 
          <span className="text-company-teal font-bold text-lg leading-none">+</span>
        </div>

{/* Notice the very first class is now font-poppins! */}
<h1 className="font-poppins text-5xl md:text-7xl lg:text-[90px] font-bold text-white mb-6 leading-tight lg:leading-[104px] tracking-tight">
  Business Growth<br /> Made Simple
</h1>

        {/* Description */}
        <p className="text-base md:text-xl text-gray-300 mb-10 max-w-[650px] mx-auto leading-relaxed">
          Transform your business with expert consultancy services our team of seasoned consultants unparalleled. Transform your business.
        </p>

 <MyButton variant="light" href="/contact">
  Free Consultation
</MyButton>
      </div>
    </section>
  );
};

export default Hero;