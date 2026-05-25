// src/components/MapSection.tsx
import ScrollReveal from './ScrollReveal';

const MapSection = () => {
  return (
    // Removed the horizontal padding and container constraints
    <section className="bg-white pb-24 md:pb-32 w-full">
      <ScrollReveal delay={0} className="w-full">
        
        {/* Map Container - Now completely full-width and edge-to-edge */}
        <div className="w-full h-[400px] md:h-[500px] lg:h-[600px] relative">
          
          {/* U.A.E. MAP EMBED */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462560.3011839591!2d54.94728751842013!3d25.076381471810452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43403aee652d%3A0xa73027a14b599f0!2sDubai!5e0!3m2!1sen!2sae!4v1715760000000!5m2!1sen!2sae"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 grayscale-[20%] contrast-[1.1] opacity-90 transition-all duration-700 hover:grayscale-0 hover:opacity-100"
          ></iframe>
          
          {/* Subtle inner shadow so it doesn't look flat against the page */}
          <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_40px_rgba(0,0,0,0.05)]"></div>
        </div>
        
      </ScrollReveal>
    </section>
  );
};

export default MapSection;