import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="w-full bg-amber-50 shadow-sm px-10 sticky top-0 z-10">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link to="/" className="text-2xl font-extrabold text-amber-600">Sandhya</Link>

        <div className="flex items-center gap-8">
          <Link
            to="/resume"
            className="text-gray-700 font-medium hover:text-amber-600 transition duration-200"
          >
            Resume Templates
          </Link>

          <Link
            to="/about"
            className="text-gray-700 font-medium hover:text-amber-600 transition duration-200"
          >
            About
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <Link to="/login" className="px-4 py-2 border border-amber-600 text-amber-600 rounded-lg hover:bg-amber-50 transition">
            Login
          </Link>

          <button className="px-5 py-2 bg-amber-600 text-white font-semibold rounded-lg hover:bg-amber-700 transition">
            Start Here
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
