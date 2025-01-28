const services = [
  {
    name: "corporate & transactions advisory",
    items: [
      "Incorporation",
      "Tax Advisory & Structuring",
      "License and Permits",
      "Secured Credit/Lending",
      "Legal Opinions",
      "Corporate Governance",
      "Regulatory Compliance",
      "Employment Relations",
    ],
  },
  {
    name: "contract management",
    items: [
      "Contract Drafting",
      "Contract Review",
      "Contract Negotiations",
      "Deed of Assignment",
      "Land Purchase Instruments",
      "Deed of Gift",
      "Power of Attorney",
      "IP Licensing",
    ],
  },
  {
    name: "family & estates law",
    items: [
      "Marriage Dissolution",
      "Child Custody",
      "Guardianship and Adoption",
      "Wills",
      "Letters of Administration and Probate",
      "Estate Planning",
    ],
  },
  {
    name: "dispute resolution",
    items: ["Mediation", "Negotiations", "Litigation"],
  },
];
const NicheServices = () => {
  return (
    <div className="w-full mx-auto max-w-7xl flex flex-col justify-center pt-12 py-20 bg-white px-4">
      <h2 className="text-3xl md:text-5xl uppercase font-light text-[#051D40]">
        Our "Niche"
      </h2>
      <h2 className="text-3xl md:text-5xl font-bold uppercase md:font-semibold text-[#051D40]">
        services
      </h2>
      <div className="container mx-auto pt-10 grid md:grid-cols-3 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div key={index} className="bg-[#051D40] flex flex-col justify-between shadow-lg rounded-none p-6">
            <div>
              <h3 className="text-xl font-bold text-white mb-4 uppercase">
                {service.name}
              </h3>
              <ul className="text-white mb-4 space-y-2">
                {service.items.map((item, i) => (
                  <li key={i} className="flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <button className="w-full bg-gray-200 text-black py-2 px-4 rounded-none hover:bg-gray-300 transition">
              Book an Appointment
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NicheServices;
