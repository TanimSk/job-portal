import React, { useState } from "react";
import { BsFillSignpostFill } from "react-icons/bs";
import { TiTick } from "react-icons/ti";
// import { GiCrossMark } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { loadFromLocalStorage } from "../../../../../utils/manageLocalStorage";
import { apiURL } from "../../../../../Constant";

const Modal = ({ isVisible, onClose, applicantDetails }) => {
  const changeStatus = (status) => {
    let token = loadFromLocalStorage("company");
    fetch(`${apiURL}/company/applicants/${applicantDetails?.id}/${status}`, {
      headers: {
        Authorization: `Token ${token}`,
        "Content-Type": "application/json",
      },
      method: "POST",
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return null;
      })
      .then((data) => {
        console.log(data);
        if (data == null) return;
        alert(`Application ${status}`);
        location.reload();
      });
  };

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
          <h2 className="text-xl text-center font-semibold text-[#3670A3]">
            Application
          </h2>
          <button
            onClick={onClose}
            className="text-red-500 rounded-md px-2 py-1 cursor-pointer hover:scale-105 duration-500 font-bold text-lg"
          >
            X
          </button>
        </div>

        <img
          src={applicantDetails?.applicant?.profile_img}
          alt="profile image"
          className="w-[7rem] rounded-2xl mb-4"
        />

        <h1 className="text-2xl font-bold text-[#3670A3] mb-4">
          {applicantDetails?.applicant?.name}
        </h1>
        <p className="text-[#3670A3] mb-2">
          <strong>University:</strong>{" "}
          {applicantDetails?.applicant?.university_name}
        </p>
        <p className="text-[#3670A3] mb-2">
          <strong>Subject:</strong> {applicantDetails?.applicant?.major}
        </p>

        <p className="text-[#3670A3] mb-2">
          <strong>Applied For:</strong> {applicantDetails?.job_post?.title}
        </p>

        <p className="text-[#3670A3] mb-2 ">
          <strong>CV Link:</strong> <br />
          <a href={applicantDetails?.cv} className="hover:underline">
            {applicantDetails?.cv}
          </a>
        </p>

        <div className="mt-4">
          <h2 className="font-semibold text-[#3670A3]">Description</h2>
          <p className="text-[#3670A3]">{applicantDetails?.description}</p>
        </div>

        <div className="flex items-center justify-center space-x-3 mt-4">
          <button
            type="submit"
            className="bg-[#3670A3] flex items-center justify-center hover:bg-[#5e93c2] rounded-md px-3 py-2 cursor-pointer text-md font-semibold text-white space-x-2"
            onClick={() => {
              changeStatus("accepted");
            }}
          >
            <TiTick size={25} />
            <span>Accept</span>
          </button>
          <button
            type="submit"
            className="bg-[#3670A3] flex items-center justify-center hover:bg-[#5e93c2] rounded-md px-3 py-2 cursor-pointer text-md font-semibold text-white space-x-2"
            onClick={() => {
              changeStatus("rejected");
            }}
          >
            <RxCross2 size={25} />
            <span>Decline</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
