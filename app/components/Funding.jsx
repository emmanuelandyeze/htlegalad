import React from "react";

const funding = [
  "loan structuring",
  "equity financing",
  "convertible debt",
  "security documentation",
  "inter-creditor agreements",
  'regulatory compliance',
];
const Funding = () => {
  return (
    <div className="w-full mx-auto max-w-7xl flex flex-col justify-center pt-20 py-20 bg-white px-4">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="md:w-[30%] mb-10">
          <h2 className="text-3xl md:text-5xl font-bold uppercase md:font-semibold text-[#051D40]">
            funding
          </h2>
          <h2 className="text-3xl md:text-5xl uppercase font-light text-[#051D40]">
            structuring
          </h2>
        </div>
        <div className="md:w-[40%]">
          <p className="md:text-xl">
            We specialize in guiding businesses through the complexities of
            funding, whether you are securing capital through loans or equity
            financing. Our expert legal services ensure every transaction is
            structured to protect your interests and fuel your growth.
          </p>
          <div className="container mx-auto pt-10 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {funding.map((fund, index) => (
              <div
                key={index}
                className="bg-[#051D40] flex flex-col items-center justify-center shadow-lg rounded-none p-4"
              >
                <div>
                  <h3 className="text-md md:text-lg text-center text-white uppercase">
                    {fund}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Funding;
