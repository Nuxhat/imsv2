"use client"; // Required because we are using browser events (scrolling) and React state

import { useState, useEffect } from 'react';
import Link from 'next/link';
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
      className={`fixed top-0 left-0 w-full z-50 text-white transition-all duration-500 ${
        isScrolled 
          ? 'bg-company-deep shadow-2xl border-b border-transparent' 
          : 'bg-white/[0.03] backdrop-blur-md border-b border-white/10'
      }`}
    >
      
      {/* Container: Changed to standard flex (removed justify-between) and balanced the padding */}
      <div className="w-full px-8 lg:px-12 flex items-center h-24 transition-all duration-500">
        
        {/* LOGO AREA: flex-1 ensures it takes up equal space as the right side, balancing the nav */}
        <div className="flex-1 flex justify-start items-center h-full relative">
          <img 
            src="/logo.png" 
            alt="Company Logo" 
            /* Added -ml-4 to pull the logo slightly left to counteract any blank space inside the PNG */
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 h-[180px] w-auto object-contain scale-125 origin-left transition-transform duration-500 hover:scale-[1.3]" 
          />
        </div>

        {/* NAVIGATION: flex-none keeps it its natural width, locking it perfectly in the center */}
{/* In your Header.tsx, change the <nav> classes to this: */}
<nav className="hidden lg:flex flex-none items-center gap-10 xl:gap-12 text-base font-normal">          {['Home', 'About Us', 'Services', 'Pages', 'Blog', 'Contact'].map((item) => {
            let url = "/";
            if (item === "About Us") url = "/about";
            if (item === "Services") url = "/services";
            if (item === "Contact") url = "/contact";

            return (
              <Link
                key={item}
                href={url}
                className="group relative flex items-center gap-2 transition-colors duration-300 hover:text-company-teal"
              >
                <span className="relative py-2">
                  {item}
                  <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-company-teal transition-all duration-300 group-hover:w-full"></span>
                </span>
              </Link>
            );
          })}
        </nav>

        {/* BUTTON AREA: flex-1 matches the left side, justify-end pushes the button flush to the right edge */}
       {/* BUTTON AREA */}
<div className="flex-1 flex justify-end items-center h-full">
  <MyButton variant="light">
    Let's Talk
  </MyButton>
</div>
      </div>
    </header>
  );
};

export default Header;