import React from "react";
import { FeaturedJobsgroup } from "../../../../../Constant";

const FeaturedJobs = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-8">
        Latest Featured Jobs
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {FeaturedJobsgroup.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center"
          >
            <div className="w-12 h-12 p-2 flex items-center justify-center rounded-full bg-black mb-4">
              <span className="text-white w-8 h-8 flex items-center justify-center rounded-full">
                {item.icon}
              </span>
            </div>
            <div className="text-xl font-semibold mb-2">{item.tittle}</div>
            <div className="text-gray-600 mb-4">
              <div className="text-md font-semibold">{item.jobtime}</div>
              <div className="text-md font-semibold">{item.location}</div>
            </div>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600">
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedJobs;
