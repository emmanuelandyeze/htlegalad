import Image from "next/image";

const AdvisorySectors = () => {
  return (
    <div className="relative w-full py-10 flex items-center justify-center bg-gray-100">
      <Image 
        src="/images/advisory.jpeg" 
        alt="Background" 
        layout="fill" 
        objectFit="cover" 
        className="absolute inset-0 z-0 opacity-[0.9]"
      />
      <div className="relative z-10 text-center w-full max-w-6xl p-6">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-8">
          SECTORS WE HAVE ADVISED
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">LENDING & CREDIT LINES</h3>
            <p className="text-gray-700">
              From ensuring regulatory compliance with local laws, to preparing security instruments for the protection of parties’ interests, to advising on risk mitigation strategies – you really are in safe hands.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">MOBILITY</h3>
            <p className="text-gray-700">
              Whether it is personal transport solutions or managing the movement of goods using advanced fleet management, we have got you covered.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">RETAIL MARKETS</h3>
            <p className="text-gray-700">
              We have curated services for Brick and Mortar stores, E-Commerce Platforms as well as Direct-to-Consumer (DTC) Brands. Our services are reflective of changing consumer behaviors and technology advancements.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvisorySectors;