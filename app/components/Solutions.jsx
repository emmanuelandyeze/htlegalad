import React from "react";

const Solutions = () => {
  return (
    <div className="flex max-w-7xl mx-auto flex-col items-right px-6 md:px-12 lg:px-24 py-20 text-gray-700 text-left">
      <h2 className="text-[32px] md:text-[40px] font-light">
        Solutions for those who <span className="font-bold text-gray-900">“make a difference”</span>
      </h2>
      <p className="mt-4 text-lg md:text-xl max-w-3xl">
        Our tailored legal solutions help you focus on making an impact while we handle the legal intricacies. From incorporation and tax-exempt status to governance, contracts, and compliance, we provide the expertise you need to thrive.
      </p>
      <div className="relative mt-20 mt-20 flex flex-wrap justify-end max-w-4xl text-gray-900 font-semibold">
        <div className="w-1/2 md:w-1/3 text-left">REGULATORY COMPLIANCE</div>
        <div className="w-1/2 md:w-1/3 text-right">CONTRACT MANAGEMENT</div>
        <div className="w-1/2 md:w-1/3 text-left mt-12">DISPUTE RESOLUTION</div>
        <div className="w-1/2 md:w-1/3 text-right mt-16">FUNDING & GRANTS STRUCTURING</div>
        <div className="w-1/2 md:w-1/3 text-left mt-0">BOARD ADVISORY</div>
        <div className="w-1/2 md:w-1/3 text-right mt-16">TAX EXEMPT STATUS MANAGEMENT</div>
        
      </div>
    </div>
  );
};

export default Solutions;