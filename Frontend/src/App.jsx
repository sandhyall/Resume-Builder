import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Component/UserLayout/Layout";
import Home from "./Pages/Home";
import Footer from "./Component/Common/Footer";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Adminlogin from "./Pages/Adminlogin";
import ProtectRoute from "./Component/ProtectRoute/ProtectRoute";
import Admindashboard from "./Component/Dashboard/Admindashboard";
import Templetedashboard from "./Component/Dashboard/Templetedashboard";
import ResumeTemplete from "./Component/Temlete/ResumeTemplete";
import ResumeDetails from "./Component/Temlete/ResumeDetails";
import Form from "./Component/Form/Form";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="" element={<Footer />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/resume" element={<ResumeTemplete />} />
          <Route path="/templete/:id" element={<ResumeDetails />} />

          {/* ✅ URL param for template type */}
          <Route path="/temnavbar/:type" element={<Form />} />
        </Route>

        <Route path="/adminlogin" element={<Adminlogin />} />
        <Route
          path="/admin"
          element={
            <ProtectRoute>
              <Admindashboard />
            </ProtectRoute>
          }
        >
          <Route path="/admin/templete" element={<Templetedashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;