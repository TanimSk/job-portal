import React from "react";
import backgroundImage from "../../../../../assets/hiro.jpg";
import { jobsCompanies } from "../../../../../Constant";

const HeroHome = () => {
  const ctaStyle = {

    backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${backgroundImage})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    borderRadius: "10px",
    textAlign: "center",
    padding: "100px 0",
  };

  return (
    <div
      style={ctaStyle}
      className="flex flex-col items-center justify-center h-screen px-6 py-12 space-y-4"
    >
      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-10 text-center">
        Get Your Dream Job Today!
      </h1>
      {/* Job Companies List */}
      <div className="flex flex-wrap justify-center gap-8">
        {jobsCompanies.map((item, index) => (
          <div
            className="flex flex-col items-center justify-center"
            key={index}
          >
            <div className="w-14 h-14 p-2 flex items-center justify-center rounded-full bg-white mb-4">
              <span className="text-black w-10 h-10 flex items-center justify-center rounded-full">
                {item.icon}
              </span>
            </div>
            <div className="text-center">
              <span className="font-semibold text-xl text-white block">
                {item.tittle}
              </span>
              <span className="font-medium text-lg text-gray-300">
                {item.amount}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="flex mt-4 space-x-4">
        <div className="font-semibold px-4 py-2 text-lg cursor-pointer inline-block bg-transparent text-white border border-white duration-500 hover:bg-[#f44336] hover:border-[#f44336]">
          Get Job
        </div>
        <div className="font-semibold px-4 py-2 text-lg cursor-pointer inline-block bg-transparent text-white border border-white duration-500 hover:bg-[#f44336] hover:border-[#f44336]">
          Post Job
        </div>
      </div>
    </div>
  );
};

export default HeroHome;
