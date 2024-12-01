import React from 'react';

export const FormLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#EEF5FF] md:flex md:items-center md:justify-center p-0 md:p-4 font-ubuntu">
      {/* Top right dots decoration */}
      <div className="hidden md:block absolute top-0 right-0 p-8">
        <div className="grid grid-cols-4 gap-2">
          {[...Array(16)].map((_, i) => (
            <div key={i} className="w-2 h-2 rounded-full bg-[#BEE2FD] opacity-70" />
          ))}
        </div>
      </div>

      {/* Bottom zigzag decoration */}
      <div className="hidden md:block absolute bottom-0 left-1/2 -translate-x-1/2 p-8">
        <svg width="200" height="20" viewBox="0 0 200 20" fill="none">
          <path d="M0 10L40 0L80 20L120 0L160 20L200 0" stroke="#F9818E" strokeWidth="2"/>
        </svg>
      </div>
      {/* Main container */}
      <div className="w-full max-w-[940px] mx-auto">
        {/* Content wrapper */}
        <div className="md:bg-white md:p-4 md:rounded-[15px] md:shadow-[0_25px_40px_-20px_rgba(0,0,0,0.0951141)]">
          <div className="relative grid md:grid-cols-[274px,1fr] gap-0 md:gap-[100px]">
            {/* Sidebar */}
            <div className="md:p-0 relative z-0 md:z-auto">
              {children[0]}
            </div>

            {/* Form content */}
            <div className="mx-4 -mt-[72px] md:mt-0 md:mx-0 bg-white rounded-[10px] px-6 py-8 md:px-0 md:py-10 shadow-md md:shadow-none relative z-10 md:z-auto">
              {children[1]}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

