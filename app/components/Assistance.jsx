export default function Assistance() {
  return (
    <div className="max-w-6xl bg-gray-50 mx-auto p-6 text-left">
      <h2 className="text-[40px] font-light text-[#777777]">NEED ASSISTANCE?</h2>
      <h3 className="text-[30px] font-semibold mb-4">WE'RE HERE TO HELP!</h3>
      <p className="text-gray-700 mb-6 md:w-[70%]">
        At Ht Legal, we prioritize addressing your concerns swiftly and
        effectively. If you have any complaints or issues, we encourage you to
        log your request as a ticket. By clicking the button below, you'll be
        directed to our dedicated support platform, where you can track and
        manage your submissions.
        <a
          href="https://support.htlegaladvisory.in/"
          target="_blank"
          className="text-blue-600 font-semibold"
        >
          {" "}
          Log a Complaint Now
        </a>
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="relative group overflow-hidden rounded-none h-96 shadow-lg">
          <img
            src="/images/3.png"
            alt="Log Complaints"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 w-full bg-black bg-opacity-10 text-2xl text-white p-4">
            Log Complaints
          </div>
        </div>
        <div className="relative group overflow-hidden rounded-none shadow-lg">
          <img
            src="/images/2.png"
            alt="Dedicated Clients Services"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 w-full bg-black bg-opacity-10 text-2xl text-white p-4">
            Dedicated Clients Services
          </div>
        </div>
        <div className="relative group overflow-hidden rounded-none shadow-lg">
          <img
            src="/images/1.png"
            alt="Quick Resolution"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 w-full bg-black bg-opacity-10 text-2xl text-white p-4">
            Quick Resolution
          </div>
        </div>
      </div>
    </div>
  );
}
