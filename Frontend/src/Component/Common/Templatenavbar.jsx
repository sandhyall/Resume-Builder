import React from "react";
import { NavLink } from "react-router-dom";
import {
  Columns3Cog,
  FileDown,
  ReceiptText,
  TableOfContents,
} from "lucide-react";

const Templatenavbar = () => {
  return (
    <header className="max-w-7xl mx-auto bg-white rounded-xl shadow-sm px-6 sm:px-10 sticky top-0 z-50">
      <nav className="flex items-center justify-between py-4">
        <div className="flex items-center space-x-6">
          <NavLink
            to="/temnavbar/overview"
            className={({ isActive }) =>
              `flex items-center gap-2 font-medium transition-colors ${
                isActive
                  ? "text-amber-700"
                  : "text-gray-700 hover:text-amber-700"
              }`
            }
          >
            <TableOfContents className="w-5 h-5" />
            <span>Overview</span>
          </NavLink>

          <NavLink
            to="/temnavbar/form"
            className={({ isActive }) =>
              `flex items-center gap-2 font-medium transition-colors ${
                isActive
                  ? "text-amber-700"
                  : "text-gray-700 hover:text-amber-700"
              }`
            }
          >
            <ReceiptText className="w-5 h-5" />
            <span>Content</span>
          </NavLink>

          <NavLink
            to="/temnavbar/customize"
            className={({ isActive }) =>
              `flex items-center gap-2 font-medium transition-colors ${
                isActive
                  ? "text-amber-700"
                  : "text-gray-700 hover:text-amber-700"
              }`
            }
          >
            <Columns3Cog className="w-5 h-5" />
            <span>Customize</span>
          </NavLink>
        </div>

        <button className="flex items-center gap-2 bg-amber-200 hover:bg-amber-300 text-gray-800 font-medium px-4 py-2 rounded-lg transition-all shadow-sm">
          <FileDown className="w-5 h-5" />
          <span>Download</span>
        </button>
      </nav>
    </header>
  );
};

export default Templatenavbar;
