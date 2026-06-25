// app/page.tsx
import Header from './src/components/Header';
import Hero from './src/components/Hero';
import AboutSection from './src/components/AboutSection';
import ServicesSection from './src/components/ServicesSection';
import CtaSection from './src/components/CtaSection';
import PortfolioSection from './src/components/PortfolioSection';
import TestimonialSection from './src/components/TestimonialSection';
import BlogSection from './src/components/BlogSection';
import ContactSection from './src/components/ContactSection';
import Footer from './src/components/Footer';
import ScrollReveal from './src/components/ScrollReveal';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      {/* Wrap the rest of the sections to fade up as you scroll to them */}
      <ScrollReveal>
        <AboutSection />
      </ScrollReveal>

      <ScrollReveal>
        <ServicesSection />
      </ScrollReveal>

      <ScrollReveal>
        <CtaSection /> 
      </ScrollReveal>

     
      <PortfolioSection />

      {/* <ScrollReveal>
        <TestimonialSection /> 
      </ScrollReveal> */}

      {/* <ScrollReveal>
        <BlogSection /> 
      </ScrollReveal> */}

      <ScrollReveal>
        <ContactSection /> 
      </ScrollReveal>

      <Footer /> 
    </main>
  );
}