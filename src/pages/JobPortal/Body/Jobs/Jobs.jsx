import React from "react";
import FilterButton from "./Filter Button/FilterButton";

const Jobs = () => {
  return (
    <div className="bg-[#F9FAFB]">
      <FilterButton />
      <div className="flex">
        {/* Filter */}
        <div className="w-[20%] h-full  bg-red-500">Filter</div>
        {/* Jobs */}
        <div className="w-full h-full bg-green-500">
          <div className="jobsincard grid">

          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
