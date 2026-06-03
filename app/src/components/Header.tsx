"use client"; // Required because we are using browser events (scrolling) and React state

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; 
import MyButton from './MyButton';
import { Menu, X } from 'lucide-react'; 

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); 
  const pathname = usePathname(); 

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 👈 Robust, multi-target scroll function
  const handleHomeScroll = () => {
    const scrollOptions: ScrollToOptions = { top: 0, behavior: 'smooth' };
    window.scrollTo(scrollOptions);
    document.documentElement.scrollTo(scrollOptions);
    document.body.scrollTo(scrollOptions);
  };

  const menuItems = ['Home', 'About Us', 'Services', 'Pages', 'Blog', 'Contact'];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 text-white transition-all duration-500 ${
        isScrolled || isMenuOpen
          ? 'bg-company-deep shadow-2xl border-b border-transparent' 
          : 'bg-white/[0.03] backdrop-blur-md border-b border-white/10'
      }`}
    >
      
      {/* MAIN NAVBAR ROW */}
      <div className="w-full px-8 lg:px-12 flex items-center h-24 transition-all duration-500">
        
        {/* LOGO AREA */}
        <div className="flex-1 flex justify-start items-center h-full relative">
          <img 
            src="/logo.png" 
            alt="Company Logo" 
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 h-[180px] w-auto object-contain scale-125 origin-left transition-transform duration-500 hover:scale-[1.3]" 
          />
        </div>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden lg:flex flex-none items-center gap-10 xl:gap-12 text-base font-normal">
          {menuItems.map((item) => {
            let url = "/";
            if (item === "About Us") url = "/about";
            if (item === "Services") url = "/services";
            if (item === "Contact") url = "/contact";

            return (
              <Link
                key={item}
                href={url}
                onClick={(e) => {
                  if (item === "Home" && pathname === "/") {
                    e.preventDefault(); 
                    handleHomeScroll();
                  }
                }}
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

        {/* RIGHT SIDE AREA */}
        <div className="flex-1 flex justify-end items-center h-full gap-4">
          <div className="hidden sm:block">
            <MyButton variant="light">
              Let's Talk
            </MyButton>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-white hover:text-company-teal transition-colors focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>
      </div>

      {/* MOBILE DROP-DOWN DRAWER */}
      {isMenuOpen && (
        <div className="lg:hidden bg-company-deep border-t border-white/10 px-8 py-6 flex flex-col gap-5 shadow-inner transition-all duration-300">
          {menuItems.map((item) => {
            let url = "/";
            if (item === "About Us") url = "/about";
            if (item === "Services") url = "/services";
            if (item === "Contact") url = "/contact";

            return (
              <Link
                key={item}
                href={url}
                onClick={(e) => {
                  setIsMenuOpen(false); // Close menu instantly
                  
                  if (item === "Home" && pathname === "/") {
                    e.preventDefault(); 
                    // 👈 Wait 100ms for the mobile drawer layout shift to settle before scrolling!
                    setTimeout(() => {
                      handleHomeScroll();
                    }, 100);
                  }
                }}
                className="text-lg font-normal text-white hover:text-company-teal transition-colors duration-200 py-1"
              >
                {item}
              </Link>
            );
          })}
          
          <div className="sm:hidden mt-2 pt-4 border-t border-white/10">
            <MyButton variant="light">
              Let's Talk
            </MyButton>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;