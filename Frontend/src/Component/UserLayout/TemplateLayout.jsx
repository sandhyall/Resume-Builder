import React from "react";
import { Outlet } from "react-router-dom";
import Templatenavbar from "../Common/Templatenavbar"

const TemplateLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Templatenavbar />
      <div className="p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default TemplateLayout;
