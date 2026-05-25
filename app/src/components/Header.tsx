"use client"; // Required because we are using browser events (scrolling) and React state

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, ChevronDown } from 'lucide-react';
import MyButton from './MyButton';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // If the user scrolls down more than 50 pixels, trigger the solid background
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Listen for the scroll event
    window.addEventListener('scroll', handleScroll);
    
    // Cleanup the listener when the component unmounts
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      // Changed 'absolute' to 'fixed' so it stays on screen, and added dynamic classes based on isScrolled
      className={`fixed top-0 left-0 w-full z-50 text-white transition-all duration-500 ${
        isScrolled 
          ? 'bg-company-deep shadow-2xl border-b border-transparent' 
          : 'bg-white/[0.03] backdrop-blur-md border-b border-white/20'
      }`}
    >
      
      {/* I added a slight height reduction (h-28 to h-24) on scroll for a premium "shrink" effect */}
      <div className={`w-full px-20 flex items-center justify-between transition-all duration-500 ${isScrolled ? 'h-24' : 'h-28'}`}>
        
        {/* LOGO AREA */}
        <div className="relative flex items-center h-full w-[320px] pr-8 border-r border-white/20">
          <img 
            src="/logo.png" 
            alt="Company Logo" 
            className="absolute left-0 top-1/2 -translate-y-1/2 h-[180px] w-auto object-contain scale-125 origin-left transition-transform duration-500 hover:scale-[1.3]" 
          />
        </div>

        {/* NAVIGATION */}
        <nav className="hidden lg:flex items-center gap-10 text-xl font-bold">
          {['Home', 'About Us', 'Services', 'Pages', 'Blog', 'Contact'].map((item) => {
            // Simple logic to set the correct URL paths
            let url = "/";
            if (item === "About Us") url = "/about";
            if (item === "Services") url = "/services";
            if (item === "Contact") url = "/contact";

            return (
              <Link
                key={item}
                href={url}
                className="group relative flex items-center gap-2 tracking-wide transition-all duration-300 hover:text-company-teal"
              >
                <span className="relative">
                  {item}
                  <span className="absolute left-0 -bottom-2 h-[2px] w-0 bg-company-teal transition-all duration-300 group-hover:w-full"></span>
                </span>
              </Link>
            );
          })}
          {/* THE FIX: Deleted the extra, hardcoded Contact link that was sitting here! */}
        </nav>

        {/* SEARCH & BUTTON */}
        <div className="flex items-center h-full pl-8 border-l border-white/20">
          
          {/* Search Button */}
          <button className="group text-white border border-white/30 w-14 h-14 rounded-full flex items-center justify-center bg-white/5 transition-all duration-300 hover:bg-company-teal hover:border-company-teal hover:scale-105 hover:shadow-[0_0_20px_rgba(58,173,225,0.35)]">
            <Search className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
          </button>

          {/* Divider */}
          <div className="w-px h-10 bg-white/20 mx-8"></div>

          {/* CTA Button */}
          <div className="scale-110 origin-right transition-transform duration-300 hover:scale-[1.14]">
            <MyButton variant="header">Let's Talk</MyButton>
          </div>
        </div>

      </div>
    </header>
  );
};

export default Header;