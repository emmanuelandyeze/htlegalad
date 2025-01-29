import {
  FaInstagram,
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white max-w-7xl mx-auto text-black py-10 px-6 md:px-20 lg:px-32 flex flex-col md:flex-row justify-between w-[100%] items-center md:items-start text-center md:text-left">
      {/* Left Section */}
      <div className=" flex flex-col items-center md:items-start">
        <h2 className="text-xl font-semibold">HT LEGAL ADVISORY</h2>
        <p className="text-sm text-gray-600">
          corporate commercial law | contract management | legal advisory
        </p>
        <div className="mt-4 space-y-2">
          <a
            href="https://www.instagram.com/htlegal/"
            target="_blank"
            className="flex items-center gap-2"
          >
            <FaInstagram className="text-pink-500" /> Instagram
          </a>
          <a
            href="https://mobile.twitter.com/HTLegal_S"
            target="_blank"
            className="flex items-center gap-2"
          >
            <FaTwitter className="text-blue-400" /> Twitter
          </a>
          <a
            href="https://facebook.com/htlegaladvisory"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <FaFacebookF className="text-blue-600" /> Facebook
          </a>
          <a
            href="https://www.linkedin.com/company/h-t-legal/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <FaLinkedinIn className="text-blue-700" /> LinkedIn
          </a>
        </div>
        <div className="mt-4 space-y-1 text-sm">
          <p>📧 Retainerships@htlegaladvisory.in</p>
          <p>📧 Enquiries@htlegaladvisory.in</p>
        </div>
      </div>

      <div className="flex flex-col justify-between md:h-[35vh] md:items-end">
        <div className="hidden md:flex flex-col">
          <p className="md:text-3xl text-[#7777]">Safeguarding your today,</p>
          <p className="md:text-3xl text-[#051D40]">Securing your tomorrow</p>
        </div>
        {/* Right Section */}
        <div className=" mt-6 md:mt-10 flex flex-col items-center md:items-end gap-3 md:mb-10">
          <h3 className="font-semibold">OUR LOCATIONS 📍</h3>
          <p className="text-sm">Finbarrs Rd, Akoka, Lagos, NG.</p>
          <p className="text-sm">Akala Express-Way, Ibadan, NG.</p>
        </div>

        {/* Bottom Section */}
        <div className=" mt-6 md:mt-0 text-sm text-gray-600 flex flex-col items-center md:items-end">
          <p className="md:text-right">
            DISCLAIMER | PRIVACY POLICY | OPERATING PROCEDURE
          </p>
          <p className="mt-2">
            &copy; 2025 HT LEGAL ADVISORY. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
