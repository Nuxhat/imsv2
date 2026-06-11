// src/components/Footer.tsx
// import { Facebook, Linkedin, Twitter, Instagram } from 'lucide-react';
import Link from 'next/link';
import ScrollReveal from './ScrollReveal'; // Import the animator!

const Footer = () => {
  return (
    <footer className="bg-company-deep relative overflow-hidden pt-24 pb-8">
      
      {/* SUBTLE BACKGROUND TEXTURE / GLOWS */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-company-teal/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[10%] -right-[10%] w-[40%] h-[50%] bg-company-blue/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* MAIN FOOTER GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Column 1: Brand & Socials - Animates in first */}
          <ScrollReveal delay={0} className="lg:col-span-4 flex flex-col items-start">
            <img 
              src="/logo-white.png" 
              alt="Company Logo" 
              className="h-10 mb-6 object-contain"
            />
            
            <p className="text-gray-400 mb-8 leading-relaxed max-w-sm pr-4">
              We provide end-to-end   ERP Business One implementations, custom web portal integrations, and dedicated AMC support to help your business scale efficiently.
            </p>

            {/* Social Icons (Currently Commented Out) */}
            {/* <div className="flex items-center gap-3">
              {[
                { icon: <Facebook className="w-4 h-4" />, href: "#" },
                { icon: <Linkedin className="w-4 h-4" />, href: "#" },
                { icon: <Twitter className="w-4 h-4" />, href: "#" },
                { icon: <Instagram className="w-4 h-4" />, href: "#" },
              ].map((social, index) => (
                <a 
                  key={index} 
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-company-teal hover:border-company-teal hover:-translate-y-1 transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div> */}
          </ScrollReveal>

          {/* Column 2: Quick Links - Animates in second */}
          <ScrollReveal delay={100} className="lg:col-span-2 lg:col-start-6">
            <h4 className="text-xl font-bold text-white mb-6">Quick Link</h4>
            <ul className="flex flex-col gap-4">
              {['About Us', 'Our Team', 'Implementation Process', 'Tech Blog', 'Contact Us'].map((link, i) => (
                <li key={i}>
                  <Link href="#" className="text-gray-400 hover:text-company-teal hover:translate-x-1 transition-all duration-300 inline-block">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </ScrollReveal>

          {/* Column 3: Services - Animates in third */}
          <ScrollReveal delay={200} className="lg:col-span-2 lg:col-start-8">
            <h4 className="text-xl font-bold text-white mb-6">Services</h4>
            <ul className="flex flex-col gap-4">
              {['  ERP B1 Implementation', 'AMC Support', 'Web Portal Integration', 'Custom Add-ons', 'HANA Reporting'].map((link, i) => (
                <li key={i}>
                  <Link href="#" className="text-gray-400 hover:text-company-teal hover:translate-x-1 transition-all duration-300 inline-block">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </ScrollReveal>

          {/* Column 4: Information - Animates in fourth */}
          <ScrollReveal delay={300} className="lg:col-span-2 lg:col-start-11">
            <h4 className="text-xl font-bold text-white mb-6">Information</h4>
            <ul className="flex flex-col gap-4">
              {['Support Portal', 'Privacy Policy', 'Terms & Conditions', 'Faqs'].map((link, i) => (
                <li key={i}>
                  <Link href="#" className="text-gray-400 hover:text-company-teal hover:translate-x-1 transition-all duration-300 inline-block">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </ScrollReveal>

        </div>

        {/* BOTTOM COPYRIGHT ROW - Fades in last */}
        <ScrollReveal delay={500}>
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              Copyright ©{new Date().getFullYear()} Your Company Name. All rights reserved.
            </p>
            
            <div className="flex items-center gap-6">
              <Link href="#" className="text-sm text-gray-500 hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="#" className="text-sm text-gray-500 hover:text-white transition-colors">Faqs</Link>
              <Link href="#" className="text-sm text-gray-500 hover:text-white transition-colors">Contact</Link>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </footer>
  );
};

export default Footer;