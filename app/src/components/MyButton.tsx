import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface MyButtonProps {
  children: React.ReactNode;
  variant?: 'light' | 'dark';
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  href?: string;
}

const MyButton: React.FC<MyButtonProps> = ({
  children,
  variant = 'dark',
  type = 'button',
  className = '',
  href,
}) => {
  const isLight = variant === 'light';

  const buttonClasses = `
    group
    inline-flex
    w-max
    items-center
    gap-3
    rounded-full
    font-semibold
    font-poppins
    text-[18px]
    leading-[22px]
    pl-7
    pr-2
    py-2.5
    border-2
    transition-all duration-300
    hover:scale-105
    ${
      isLight
        ? `
          bg-white
          text-[#000A3F]
          border-[#000A3F]
          hover:bg-[#000A3F]
          hover:text-white
          hover:border-white/45
        `
        : `
          bg-[#000A3F]
          text-white
          border-[#000A3F]
          hover:bg-white
          hover:text-[#000A3F]
          hover:border-[#000A3F]
        `
    }
    ${className}
  `;

  const content = (
    <>
      {children}

      <div
        className={`
          rounded-full
          p-2.5
          border-2
          transition-all duration-300
          group-hover:scale-110
          ${
            isLight
              ? `
                bg-[#000A3F]
                text-white
                border-[#000A3F]
                group-hover:bg-white
                group-hover:text-[#000A3F]
                group-hover:border-white
              `
              : `
                bg-white
                text-[#000A3F]
                border-white
                group-hover:bg-[#000A3F]
                group-hover:text-white
                group-hover:border-[#000A3F]
              `
          }
        `}
      >
        <ArrowRight className="h-4 w-4 -rotate-45 transition-all duration-300 group-hover:rotate-0" />
      </div>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={buttonClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} className={buttonClasses}>
      {content}
    </button>
  );
};

export default MyButton;