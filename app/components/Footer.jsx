// components/Footer.js
import Link from "next/link";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-50 text-black py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end">
          <div className="mb-6 flex w-full flex-col md:flex-row md:justify-between gap-4 md:mb-0">
            <div>
              <div className="mb-5">
                <h3 className="text-xl font-semibold">HT LEGAL ADVISORY</h3>
                <p className="italic">Building the businesses of tomorrow.</p>
              </div>
              <div className="mb-5">
                <h3 className="text-lg">CONTACT US</h3>
                <p className="flex flex-col items-start gap-1">
                  <a
                    href="mailto:hilda@htlegaladvisory.in"
                    className="underline"
                  >
                    Hilda@htlegaladvisory.in
                  </a>

                  <a
                    href="mailto:payments@htlegaladvisory.in"
                    className="underline"
                  >
                    Payments@htlegaladvisory.in
                  </a>
                </p>
              </div>
              <div className="mb-5">
                <h3 className="text-lg">OUR LOCATION</h3>
                <p>Lagos, Ibadan</p>
              </div>
            </div>

            <div className="flex flex-col md:justify-between">
              <div className="mb-5">
                <h3 className="text-lg">FOLLOW US</h3>
                <div className="flex space-x-6 mt-3">
                  <a
                    href="https://facebook.com/htlegaladvisory"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-700 hover:text-gray-400"
                  >
                    <FaFacebook size={24} />
                  </a>
                  <a
                    href="https://mobile.twitter.com/HTLegal_S"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-700 hover:text-gray-400"
                  >
                    <FaTwitter size={24} />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/h-t-legal/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-700 hover:text-gray-400"
                  >
                    <FaLinkedin size={24} />
                  </a>
                  <a
                    href="https://www.instagram.com/htlegal/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-700 hover:text-gray-400"
                  >
                    <FaInstagram size={24} />
                  </a>
                </div>
              </div>
              <div>
                <Link href="/policies">
                  <p>Disclaimer | Privacy Policy</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-6">
          <p className="text-sm">
            &copy; 2024 HT Legal Advisory. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
