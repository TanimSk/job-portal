import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FeaturedJobsgroup1 } from "../../../../../Constant";
import { FeaturedJobsgroup2 } from "../../../../../Constant";

const Card = () => {
  return (
    <div className="space-y-14">
      <h1 className="text-4xl font-bold text-center">Featured Jobs</h1>
      <div className="container mx-auto px-4 py-12 bg-gray-100">
        <Swiper
          effect={"creative"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          creativeEffect={{
            prev: {
              shadow: true,
              translate: ["-120%", 0, -500],
            },
            next: {
              shadow: true,
              translate: ["120%", 0, -500],
            },
          }}
          navigation={true}
          modules={[EffectCreative, Pagination, Navigation]}
          className="swiper_container"
        >
          <SwiperSlide>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {FeaturedJobsgroup1.map((item, index) => {
                return (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center transition duration-300 ease-in-out transform hover:scale-105">
                    <div className="w-12 h-12 p-2 flex items-center justify-center rounded-full bg-black mb-4">
                      <span className="text-white w-8 h-8 flex items-center justify-center rounded-full">
                        {item.icon}
                      </span>
                    </div>
                    <div className="text-xl font-semibold mb-2">
                      {item.tittle}
                    </div>
                    <div className="text-gray-600 mb-4">
                      <div className="text-md font-semibold">
                        {item.jobtime}
                      </div>
                      <div className="text-md font-semibold">{item.location}</div>
                    </div>
                    <button className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600">
                      Apply Now
                    </button>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {FeaturedJobsgroup2.map((item, index) => {
                return (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center transition duration-300 ease-in-out transform hover:scale-105">
                    <div className="w-12 h-12 p-2 flex items-center justify-center rounded-full bg-black mb-4">
                      <span className="text-white w-8 h-8 flex items-center justify-center rounded-full">
                        {item.icon}
                      </span>
                    </div>
                    <div className="text-xl font-semibold mb-2">
                      {item.tittle}
                    </div>
                    <div className="text-gray-600 mb-4">
                      <div className="text-md font-semibold">
                        {item.jobtime}
                      </div>
                      <div className="text-md font-semibold">{item.location}</div>
                    </div>
                    <button className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600">
                      Apply Now
                    </button>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Card;
