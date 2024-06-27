import axios from "axios";
import React, { useEffect, useState } from "react";

const ApiAdd = () => {
  const [value, setValue] = useState([]);
  const resapi = "https://www.arbeitnow.com/api/job-board-api";

  const fetch = async () => {
    try {
      const res = await axios.get(resapi);
      setValue(res.data.data);
      console.log(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
        Job Listings
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {value.slice(0, 20).map((item, index) => (
          <div
            key={index}
            className="p-6 bg-slate-800 text-white rounded-lg shadow-lg space-y-3 mb-7"
          >
            <h1 className="text-2xl text-center font-semibold p-4">
              {item.title.length > 15
                ? item.title.substring(0, 24) + "..."
                : item.title}
            </h1>
            <p className="text-gray-300">
              <strong>Company:</strong> {item.company_name}
            </p>
            <p className="text-gray-300">
              <strong>Location:</strong> {item.location}
            </p>
            <p className="text-gray-300">
              <strong>Remote:</strong> {item.remote ? "Yes" : "No"}
            </p>
            <p className="text-gray-300">
              <strong>Job Types:</strong> {item.job_types.join(", ")}
            </p>
            <div>
                
            </div>
          </div>

        ))}
      </div>
    </div>
  );
};

export default ApiAdd;
