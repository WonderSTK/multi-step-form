import React from 'react';
import thankyou from "../images/icon-thank-you.svg"
export const ThankYou = () => {
  return (
    <div className="p-6 flex flex-col items-center justify-center h-full">
      <img src={thankyou} alt="Thank you" className="h-24 w-24 mb-6" />
      <h2 className="text-2xl font-bold text-[#02295a] mb-4">Thank you!</h2>
      <p className="text-[#9699ab] text-center mb-6">
        Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support,
        please feel free to email us at support@loremgaming.com.
      </p>
    </div>
  );
};