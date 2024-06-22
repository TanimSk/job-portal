import React from "react";
import style from "../../style";
// Components
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import { Outlet } from "react-router-dom";

const JobPortal = () => {
  return (
    <div className="interfont">
      {/* Navbar */}
      <div className="w-full  shadow-md top-0 sticky z-50 bg-white">
        <div className={`${style.paddingX} ${style.flexCenter}`}>
          <div className={`${style.boxWidth} z-10`}>
            <Navbar />
          </div>
        </div>
      </div>
      {/* Body */}
      <div className="relative top-[-4.17rem]">
        <Outlet />
      </div>
      {/* Footer */}
      <div className="bg-slate-500">
        <Footer />
      </div>
    </div>
  );
};

export default JobPortal;
