const LegalSolutions = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center py-12 bg-white px-6">
      <h2 className="text-3xl md:text-5xl font-light text-gray-700">
        Legal <span className="text-red-700 font-bold">Solutions</span> to match
        your scale and needs
      </h2>
      <div className="flex md:hidden mt-10 md:w-full md:max-w-4xl bg-gray-100 gap-10 py-10 px-5 md:p-6 rounded-full flex flex-col md:flex-row items-center justify-between relative">
        <div className="absolute hidden md:flex left-0 right-0 top-1/2 transform -translate-y-1/2 h-1 bg-gray-400"></div>
        <div className="relative text-center">
          <div className="w-4 h-4 bg-gray-600 rounded-full mx-auto mb-2"></div>
          <p className="text-gray-700">Start-Ups</p>
        </div>
        <div className="relative text-center">
          <div className="w-4 h-4 bg-gray-600 rounded-full mx-auto mb-2"></div>
          <p className="text-gray-700">Sole-Proprietorships</p>
        </div>
        <div className="relative text-center">
          <div className="w-4 h-4 bg-gray-600 rounded-full mx-auto mb-2"></div>
          <p className="text-gray-700">Public Companies</p>
        </div>
        <div className="relative text-center">
          <div className="w-4 h-4 bg-gray-600 rounded-full mx-auto mb-2"></div>
          <p className="text-gray-700">Partnerships</p>
        </div>
        <div className="relative text-center">
          <div className="w-4 h-4 bg-gray-600 rounded-full mx-auto mb-2"></div>
          <p className="text-gray-700">Joint Venture</p>
        </div>
      </div>
      <div className="hidden md:flex mt-10 md:w-full md:max-w-4xl bg-gray-100 gap-10 py-10 px-5 md:p-6 rounded-full flex flex-col md:flex-row items-center justify-between relative">
        <div className="absolute hidden md:flex left-0 right-0 top-1/2 transform -translate-y-1/2 h-1 bg-gray-400"></div>
        
        <div className="relative text-center">
          <p className="text-gray-700 mb-2">Start-Ups</p>
          <div className="w-4 h-4 bg-gray-600 rounded-full mx-auto mb-2"></div>
          <div className="mt-8"></div>
        </div>
        <div className="relative text-center">
          <div className="mt-8"></div>
          <div className="w-4 h-4 bg-gray-600 rounded-full mx-auto mb-2"></div>
          <p className="text-gray-700">Sole-Proprietorships</p>
        </div>
        <div className="relative text-center">
          <p className="text-gray-700 mb-2">Public Companies</p>
          <div className="w-4 h-4 bg-gray-600 rounded-full mx-auto mb-2"></div>
          <div className="mt-8"></div>
        </div>
        <div className="relative text-center">
          <div className="mt-8"></div>
          <div className="w-4 h-4 bg-gray-600 rounded-full mx-auto mb-2"></div>
          <p className="text-gray-700">Partnerships</p>
        </div>
        <div className="relative text-center">
          <p className="text-gray-700 mb-2">Joint Venture</p>
          <div className="w-4 h-4 bg-gray-600 rounded-full mx-auto mb-2"></div>
          <div className="mt-8"></div>
        </div>
      </div>
      <div class="support-segment max-w-3xl mt-10 md:mt-20 bg-gray-100 p-6 rounded-2xl shadow-md">
        <h2 class="text-2xl font-bold text-gray-800 mb-4">
          Need Assistance? We're Here to Help!
        </h2>
        <p class="text-gray-600 mb-6">
          At Ht Legal, we prioritize addressing your concerns swiftly and
          effectively. If you have any complaints or issues, we encourage you to
          log your request as a ticket. By clicking the button below, you'll be
          directed to our dedicated support platform, where you can track and
          manage your submissions.{" "}
        </p>
        <a
          href="https://support.htlegaladvisory.in/"
          target="_blank"
          class="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium shadow hover:bg-blue-700 focus:ring-4 focus:ring-blue-300"
        >
          Log a Complaint Now
        </a>
      </div>
    </div>
  );
};

export default LegalSolutions;
