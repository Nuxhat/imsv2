// app/contact/page.tsx
import Link from 'next/link';
import Header from '../src/components/Header'; 
import ContactSection from '../src/components/ContactSection';
import MapSection from '../src/components/MapSection';
import Footer from '../src/components/Footer';

export default function ContactPage() {
  return (
    <main className="min-h-screen overflow-clip bg-white">
      {/* 1. Header is globally shared */}
      <Header />

      {/* 2. INNER PAGE HERO BANNER */}
      <section className="relative pt-40 pb-28 md:pt-48 md:pb-36 overflow-hidden z-10 flex items-center justify-center">
        
        {/* Deep Blue Overlay */}
        <div className="absolute inset-0 bg-company-deep/60 z-0"></div>
        
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-30 z-0"
          style={{ backgroundImage: "url('/about-hero-bg.jpg')" }}
        ></div>

        {/* Hero Content */}
        <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center">
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl   text-white mb-6 tracking-tight">
            Contact Us
          </h1>
          
          {/* Breadcrumbs */}
          <div className="flex items-center justify-center gap-3 text-base md:text-lg font-medium text-gray-300 bg-white/5 px-6 py-2 rounded-full backdrop-blur-sm border border-white/10">
            <Link href="/" className="hover:text-company-teal transition-colors duration-300">
              Home
            </Link>
            <span className="text-white/50 text-sm">❯</span>
            <span className="text-white font-bold">Contact Us</span>
          </div>

        </div>
      </section>

      {/* 3. YOUR EXISTING CONTACT SECTION */}
      {/* Added a slight top padding to space it perfectly from the hero */}
      <div className="pt-10">
        <ContactSection />
      </div>
      {/* 4. THE NEW MAP SECTION */}
      <MapSection />

      {/* 4. FOOTER */}
      <Footer />
    </main>
  );
}