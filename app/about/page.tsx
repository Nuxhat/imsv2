import Link from 'next/link';
import Header from '../src/components/Header';
import AboutSection from '../src/components/AboutSection';
import ChooseUsSection from '../src/components/ChooseUsSection'; 
import Footer from '../src/components/Footer';
import TeamSection from '../src/components/TeamSection';
import TestimonialSectionAlt from '../src/components/TestimonialSectionAlt';
import FaqSection from '../src/components/FaqSection';



export default function AboutPage() {
  return (
   <main className="min-h-screen overflow-clip bg-white">
      {/* 1. Header is globally shared */}
      <Header />

      {/* 2. INNER PAGE HERO BANNER (Matches your reference image) */}
      <section className="relative pt-40 pb-28 md:pt-48 md:pb-36 overflow-hidden z-10 flex items-center justify-center">
        
        {/* Deep Blue Overlay */}
        <div className="absolute inset-0 bg-company-deep/60 z-0"></div>
        
        {/* Background Image (Using mix-blend to merge with the deep blue) */}
        <div 
          className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-30 z-0"
          style={{ backgroundImage: "url('/about-hero-bg.jpg')" }}
        ></div>

        {/* Hero Content */}
        <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center">
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl   text-white mb-6 tracking-tight">
            About Us
          </h1>
          
          {/* Breadcrumbs */}
          <div className="flex items-center justify-center gap-3 text-base md:text-lg font-medium text-gray-300 bg-white/5 px-6 py-2 rounded-full backdrop-blur-sm border border-white/10">
            <Link href="/" className="hover:text-company-teal transition-colors duration-300">
              Home
            </Link>
            <span className="text-white/50 text-sm">❯</span>
            <span className="text-white font-bold">About Us</span>
          </div>

        </div>
      </section>

      {/* 3. ABOUT SECTION  */}
      <AboutSection />

      {/* 4. THE NEW "WHY CHOOSE US" SECTION */}
      <ChooseUsSection />

       {/* 5. TEAM SECTION */}
         <TeamSection />    

    {/* 6. SPLIT-LAYOUT TESTIMONIAL SECTION
      <TestimonialSectionAlt /> */}

      {/* 7. FAQ SECTION */}
      <FaqSection />

      {/* 5. Footer */}
      <Footer />
    </main>
  );
}