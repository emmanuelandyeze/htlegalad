const InformationTechnology = () => {
    return (
      <div 
        className="relative w-full pt-20 pb-32 md:py-20 flex items-center justify-center bg-cover bg-center p-6"
        style={{ backgroundImage: "url('/images/it.jpeg')" }}
      >
        <div className="text-left max-w-5xl w-full">
          <h2 className="text-4xl md:text-5xl text-[#051D40]">INFORMATION</h2>
          <h2 className="text-4xl md:text-5xl font-bold text-[#051D40]">TECHNOLOGY</h2>
          <p className="text-gray-700 mt-4 max-w-2xl">
            Streamlined legal solutions for innovation-focused industries where software is developed as part of engineering solutions.
          </p>
          <div className="relative mt-8 w-full h-64">
            <div className="absolute top-[50%] left-[0%] md:top-[50%] md:left-[0%] bg-white px-4 py-2 rounded-lg text-center">ED-TECH</div>
            <div className="absolute top-[30%] left-[10%] md:top-[75%] md:left-[10%] bg-white px-4 py-2 rounded-lg text-center">SOFTWARE AS A SERVICE</div>
            <div className="absolute top-[85%] left-[10%] md:top-[25%] md:left-[18%] bg-white px-4 py-2 rounded-lg text-center">SOFTWARE DEV COMPANIES</div>
            <div className="absolute top-[50%] left-[40%] md:top-[85%] md:left-[40%] bg-white px-4 py-2 rounded-lg text-center">HARDWARE MANUFACTURING</div>
            <div className="absolute top-[110%] left-[30%] md:top-[55%] md:left-[50%] bg-white px-4 py-2 rounded-lg text-centers">SOFTWARE LICENSING</div>
            <div className="absolute top-[0%] left-[60%] md:top-[25%] md:left-[60%] bg-white px-4 py-2 rounded-lg text-center">DIGITAL PAYMENTS</div>
            <div className="absolute md:top-[65%] md:left-[80%] bg-white px-4 py-2 rounded-lg text-center">FIN-TECH</div>
          </div>
        </div>
      </div>
    );
  };
  
  export default InformationTechnology;
  