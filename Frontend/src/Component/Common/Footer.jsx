import { Facebook, Instagram } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 px-6 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h1 className="text-2xl font-bold text-white mb-4">Sandhya</h1>
          <p className="text-sm mb-4">
            We are indie developers based in Austria — Mozart, not kangaroos.
            Our mission: Empower job seekers worldwide. We make your journey
            smoother and more successful.
          </p>
          <p className="text-sm text-blue-400 cursor-pointer hover:underline">
            Tell me about us
          </p>

          <div className="flex gap-4 mt-4">
            <Link to="#" className="hover:text-white">
              <Facebook size={20} />
            </Link>
            <Link to="#" className="hover:text-white">
              <Instagram size={20} />
            </Link>
          </div>
        </div>

        <div>
          <h2 className="text-white font-semibold mb-4">Product</h2>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Resume Template</li>
            <li className="hover:text-white cursor-pointer">Cover Letter</li>
          </ul>
        </div>

        <div>
          <h2 className="text-white font-semibold mb-4">Company</h2>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Pricing</li>
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        <div>
          <h2 className="text-white font-semibold mb-4">Support</h2>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Help Center</li>
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
            <li className="hover:text-white cursor-pointer">
              Terms of Service
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm">
        © {new Date().getFullYear()} Sandhya Resume Builder. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
