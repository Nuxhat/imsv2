import React from 'react';
import { ArrowRight } from 'lucide-react';

interface MyButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'header' | 'hero' | 'about';
}

const MyButton: React.FC<MyButtonProps> = ({
  children,
  variant = 'primary',
}) => {

  // BASE
  let baseClasses =
    "group flex items-center gap-2 font-semibold transition-all duration-300 rounded-full px-6 py-4";

  let variantClasses = "";

  // PRIMARY
  if (variant === 'primary') {
    variantClasses =
      "bg-company-blue text-company-white hover:bg-opacity-90";
  }

  // OUTLINE
  else if (variant === 'outline') {
    variantClasses =
      "border-2 border-company-teal text-company-teal hover:bg-company-teal hover:text-company-white";
  }

  // HEADER
  else if (variant === 'header') {
    baseClasses =
      "group flex items-center gap-4 font-bold rounded-full pl-7 pr-2 py-2 transition-all duration-300 bg-white text-company-deep shadow-lg hover:bg-gray-100 hover:scale-105";

    variantClasses = "";
  }

  // HERO
  else if (variant === 'hero') {
    baseClasses =
      "group flex items-center gap-4 font-bold text-lg rounded-full pl-8 pr-2 py-3 transition-all duration-300 bg-white text-company-deep shadow-xl hover:bg-gray-100 hover:scale-105";

    variantClasses = "";
  }

  // ABOUT
 else if (variant === 'about') {
  baseClasses =
    "group flex items-center gap-4 font-bold rounded-full pl-8 pr-2 py-3 transition-all duration-300 bg-company-blue text-white shadow-xl hover:bg-company-deep hover:scale-105";

  variantClasses = "";
}
  // 👉 UNIFIED ARROW STYLE (IMPORTANT FIX)
  const isLarge = variant === 'hero' || variant === 'header';

  return (
    <button className={`${baseClasses} ${variantClasses}`}>
      {children}

      {/* ARROW SYSTEM (NOW CONSISTENT) */}
      <div
        className={`
          rounded-full transition-all duration-300
          ${isLarge ? 'p-3 bg-company-teal text-company-deep' : 'p-2 bg-white text-company-blue'}
          group-hover:scale-110
        `}
      >
        <ArrowRight
          className={`
            transform -rotate-45 transition-all duration-300
            ${isLarge ? 'h-5 w-5' : 'h-4 w-4'}
          `}
        />
      </div>
    </button>
  );
};

export default MyButton;