import React from "react";
import Logo from "../../../assets/loginAnimation.gif";
import { Heading } from "../../../Constant";


const Navbar = () => {
  return (
    <div className="interfont flex items-center justify-between p-3 ">
      <div className="rounded-full flex items-center justify-between space-x-2">
        <img
          className="w-[2.7rem] h-[2.7rem] cursor-pointer"
          src={Logo}
          alt="Logo"
        />
        <h1 className="flex items-center justify-center space-x-1 text-xl font-bold">
          <span className="text-[#9773df]">Job</span>
          <span>Portal</span>
        </h1>
      </div>
      <div className="links flex items-center text-[#404040]  space-x-10 font-md">
        {Heading.map((items, index) => {
          return (
            <div key={index} className="nav-item  cursor-pointer font-semibold">
              {items.tittle}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
