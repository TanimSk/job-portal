import React from "react";
import Avater from "../../../../../assets/About.jpeg"; // Adjust the path as per your file structure
import { MdHealthAndSafety } from "react-icons/md";

const Modal = ({ isVisible, onClose, job }) => {
  if (!isVisible) {
    return null;
  }

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 flex items-center justify-center z-50 bg-opacity-25 backdrop-blur-sm bg-black"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white p-8 max-w-md mx-auto rounded-md z-50"
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">{job.title}</h2>
          <button
            onClick={onClose}
            className="text-red-500 rounded-md px-2 py-1 cursor-pointer hover:scale-105 duration-500 font-bold text-lg"
          >
            X
          </button>
        </div>
        <img
          className="w-20 h-20 rounded-full object-cover border-2 border-[#53829C]"
          src={Avater}
          alt="Company Logo" // Change alt text accordingly
        />
        <p className="text-xs font-medium">{job.description}</p>
        <div className="flex items-center justify-between mt-4">
          <div>
            <span className="text-md font-bold">{job.salary}</span>
            <span className="text-xs text-[#5E6368]">/month</span>
          </div>
          <div>
            <span className="text-xs text-[#5E6368]">{job.posted}</span>
          </div>
        </div>
        <div className="flex items-center justify-center space-x-4 mt-4">
          <button
            type="button"
            className="bg-[#76c3ed] flex items-center justify-center hover:bg-[#69afd4] rounded-md px-3 py-2 cursor-pointer text-md font-semibold text-white"
          >
            <MdHealthAndSafety size={25} />
            <span>Apply Now</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
