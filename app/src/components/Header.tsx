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
  const menuItems = ['Home', 'About Us', 'Services', 'Contact'];
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const servicesDropdown = [
  { name: "ERP Implementation", href: "/services/  ERP-b1-implementation" },
  { name: "Web Portal Integration", href: "/services/web-portal-integration" },
  { name: "Annual Maintenance (AMC)", href: "/services/amc" },
  { name: "Custom Add-on Dev", href: "/services/custom-add-on-dev" },
  { name: "Data & HANA Reporting", href: "/services/data-hana-reporting" },
  { name: "User Training & Audits", href: "/services/user-training-audits" },
];

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

  const handleHomeScroll = () => {
    const scrollOptions: ScrollToOptions = { top: 0, behavior: 'smooth' };
    window.scrollTo(scrollOptions);
    document.documentElement.scrollTo(scrollOptions);
    document.body.scrollTo(scrollOptions);
  };
const [dropdownTimeout, setDropdownTimeout] = useState<ReturnType<typeof setTimeout> | null>(null);


  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 text-white transition-all duration-500 ${
        isScrolled || isMenuOpen
          ? 'bg-company-deep shadow-2xl border-b border-transparent' 
          : 'bg-white/[0.03] backdrop-blur-md border-b border-white/10'
      }`}
    >
      
      {/* MAIN NAVBAR ROW */}
      <div className="w-full px-8 lg:px-12 flex items-center h-24 transition-all duration-500 relative z-10">
        
        {/* LOGO AREA */}
        <div className="flex-1 flex justify-start items-center h-full relative">
          <img 
  src="/logo.png" 
  alt="Company Logo" 
  /* 👇 CHANGED: Cranked mobile height up to h-28/h-32 and added a base scale-[1.2] to make it pop! */
  className="absolute left-0 top-1/2 -translate-y-1/2 -ml-2 h-28 sm:h-32 lg:h-[180px] w-auto object-contain scale-[1.2] lg:scale-125 origin-left transition-transform duration-500 lg:hover:scale-[1.3] pointer-events-none" 
/>
        </div>

        {/* DESKTOP NAVIGATION */}
        {/* 👇 CHANGED: Added 'relative z-10' to ensure the menu sits strictly above the logo layer */}
 <nav className="hidden lg:flex flex-none items-center gap-10 xl:gap-12 text-base font-normal relative z-10">
  
  {/* HOME */}
  <Link href="/" className="hover:text-company-teal">
    Home
  </Link>

  {/* ABOUT */}
  <Link href="/about" className="hover:text-company-teal">
    About Us
  </Link>

  {/* SERVICES DROPDOWN */}
  <div
  className="relative"
  onMouseEnter={() => {
    if (dropdownTimeout) clearTimeout(dropdownTimeout);
    setIsServicesOpen(true);
  }}
  onMouseLeave={() => {
    const timeout = setTimeout(() => {
      setIsServicesOpen(false);
    }, 300); // IMPORTANT: gives time to move cursor into dropdown

    setDropdownTimeout(timeout);
  }}
>
  {/* SERVICES BUTTON */}
  <div className="flex items-center gap-1 cursor-pointer select-none">
    <Link
      href="/services"
      onClick={() => setIsServicesOpen(false)}
      className="hover:text-company-teal transition-colors"
    >
      Services
    </Link>

    {/* small arrow */}
    <span className="text-xs mt-[2px]">▾</span>
  </div>

  {/* DROPDOWN */}
  {isServicesOpen && (
    <div
      className="absolute top-full left-0 mt-3 w-72 bg-white text-black shadow-xl rounded-xl overflow-hidden border border-gray-100 z-50"
      onMouseEnter={() => {
        if (dropdownTimeout) clearTimeout(dropdownTimeout);
        setIsServicesOpen(true);
      }}
      onMouseLeave={() => {
        setIsServicesOpen(false);
      }}
    >
      {servicesDropdown.map((service) => (
        <Link
          key={service.href}
          href={service.href}
          onClick={() => setIsServicesOpen(false)}
          className="block px-5 py-3 text-sm hover:bg-gray-100 transition"
        >
          {service.name}
        </Link>
      ))}
    </div>
  )}
</div>

  {/* CONTACT */}
  <Link href="/contact" className="hover:text-company-teal">
    Contact
  </Link>
</nav>

        {/* RIGHT SIDE AREA */}
        <div className="flex-1 flex justify-end items-center h-full gap-4 relative z-10">
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
  <div className="lg:hidden bg-company-deep border-t border-white/10 px-8 py-6 flex flex-col gap-5 shadow-inner relative z-20">

    {/* MAIN LINKS */}
    {menuItems.map((item) => {
      let url = "/";

      if (item === "About Us") url = "/about";
      if (item === "Contact") url = "/contact";
      if (item === "Services") return null; // handled separately

      return (
        <Link
          key={item}
          href={url}
          onClick={() => setIsMenuOpen(false)}
          className="text-lg text-white hover:text-company-teal"
        >
          {item}
        </Link>
      );
    })}

    {/* SERVICES SECTION (FIXED) */}
    <div className="flex flex-col gap-3 pt-4 border-t border-white/10">
      <p className="text-company-teal font-semibold">Services</p>

      {servicesDropdown.map((service) => (
        <Link
          key={service.href}
          href={service.href}
          onClick={() => setIsMenuOpen(false)}
          className="text-white/80 hover:text-company-teal pl-3"
        >
          {service.name}
        </Link>
      ))}
    </div>

    {/* CTA */}
    <div className="sm:hidden pt-4 border-t border-white/10">
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