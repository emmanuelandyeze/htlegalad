import React from "react";

const ProBonoSupport = () => {
  return (
    <div className="flex max-w-7xl mx-auto mt-10 justify-between h-[65vh] md:h-[50vh] flex-col items-start px-6 md:px-12 lg:px-24 py-12 text-gray-700">
      <div>
      <h2 className="text-[40px] uppercase md:text-5xl font-bold text-[#777777]">
        Pro-Bono 
      </h2>
      <span className="font-light text-[40px] uppercase md:text-5xl text-[#051D40]">Support Program</span>
      <p className="mt-4 text-lg md:text-xl max-w-2xl">
        Are you registered as a nonprofit in Nigeria? If your work aligns with Female Gender Based Violence (FGBV), Health, Education, or directly supports underserved communities, we have exciting news for you.
      </p>
      </div>
      <a href="/form.html" target="_blank" className="mt-6 px-6 py-3 bg-gray-200 text-gray-900 font-semibold rounded-md shadow-md hover:bg-gray-300">
        JOIN OUR WAITLIST
      </a>
    </div>
  );
};

export default ProBonoSupport;
