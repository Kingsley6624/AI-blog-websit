import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";

const MainLayout = () => {
  return (
    <div className="bg-[#141414]">
      <Navbar />
      <Outlet />
      {/* px-[16px] md:px-[40px] lg:px-[80px] */}
    </div>
  );
};

export default MainLayout;
