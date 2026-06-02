import React from 'react';
import { ArrowRight } from 'lucide-react';

interface MyButtonProps {
  children: React.ReactNode;
  variant?: 'light' | 'dark';
  type?: 'button' | 'submit' | 'reset'; // 👈 1. Added type support
  className?: string; // 👈 2. Added support for custom spacing classes
}

const MyButton: React.FC<MyButtonProps> = ({
  children,
  variant = 'dark',
  type = 'button', // Defaults to standard button
  className = '', // Defaults to empty string
}) => {
  const isLight = variant === 'light';

  return (
    <button
      type={type}
      className={`
        group
        inline-flex w-max items-center gap-3 /* 👈 3. Added inline-flex and w-max here */
        rounded-full
        font-semibold
        font-poppins
        text-[16px]
        leading-[22px]
        pl-7 pr-2 py-2.5
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
        ${className} /* 👈 4. Injects any extra spacing you pass to the component */
      `}
    >
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
        <ArrowRight
          className="
            h-4 w-4
            -rotate-45
            transition-all duration-300
            group-hover:rotate-0
          "
        />
      </div>
    </button>
  );
};

export default MyButton;