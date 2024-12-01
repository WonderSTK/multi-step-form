import React, { useState, useEffect } from 'react';
import { useForm } from '../context/FormContext';

const steps = [
  { number: 1, title: "YOUR INFO", step: "STEP 1" },
  { number: 2, title: "SELECT PLAN", step: "STEP 2" },
  { number: 3, title: "ADD-ONS", step: "STEP 3" },
  { number: 4, title: "SUMMARY", step: "STEP 4" },
];

export const Sidebar = () => {
  const { currentStep } = useForm();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Check on initial load
    checkMobile();

    // Add event listener for window resize
    window.addEventListener('resize', checkMobile);

    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="relative overflow-hidden md:rounded-[10px] bg-[#483EFF] h-[172px] md:h-[568px]">
      {/* Background image container */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${
            isMobile
              ? '/bg-sidebar-mobile.svg'
              : '/bg-sidebar-desktop.svg'
          })`,
        }}
      />
      
      {/* Steps container */}
      <div className="relative z-10 flex flex-row md:flex-col gap-4 md:gap-8 justify-center md:justify-start pt-8 md:p-8">
        {steps.map((step) => (
          <div key={step.number} className="flex items-center gap-4">
            <div
              className={`flex h-8 w-8 items-center justify-center rounded-full border border-white text-sm font-bold transition-colors duration-200 ${
                currentStep === step.number
                  ? "bg-[#BEE2FD] text-[#022959] border-[#BEE2FD]"
                  : "text-white"
              }`}
            >
              {step.number}
            </div>
            <div className="hidden md:block">
              <p className="text-xs text-[#ABBCFF] font-normal">
                {step.step}
              </p>
              <p className="font-bold text-white tracking-wide">
                {step.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

