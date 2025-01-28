import Image from "next/image";

const NonProfit = () => {
  return (
    <div className="relative w-full h-[50vh] md:h-[100vh] py-10 flex items-center justify-center bg-gray-100">
      <Image 
        src="/images/nonprofit.jpeg" 
        alt="Background" 
        layout="fill" 
        objectFit="cover" 
        className="absolute inset-0 z-0 opacity-[5]"
      />
      <div className="relative z-10 text-left w-full max-w-6xl p-6">
        <h2 className="text-4xl md:text-6xl text-white mb-8">
          Non-Profits
        </h2>
        
      </div>
    </div>
  );
};

export default NonProfit;