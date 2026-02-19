import React from "react";
import { Navigate } from "react-router-dom";

const ProtectRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("token");

  return isAuthenticated ? children : <Navigate to="/adminlogin" replace />;
};

export default ProtectRoute;
