"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { title } from "@/components/primitives";

const Partners = () => {
  return (
    <div className="mt-48">
      <div className="mx-auto text-start mb-20 px-14">
        <h4 className={`${title()} text-primary text-start`}>Partners</h4>
      </div>

      <div>
        <Swiper
          modules={[Autoplay]}
          speed={3000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          loop={true}
          slidesPerView={"auto"}
          spaceBetween={100}
          grabCursor={true}
        >
          <SwiperSlide>
            <div className="h-24 w-24 bg-gray-500">
              <img src="https://via.placeholder.com/150" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-24 w-24 bg-gray-500">
              <img src="https://via.placeholder.com/150" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-24 w-24 bg-gray-500">
              <img src="https://via.placeholder.com/150" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-24 w-24 bg-gray-500">
              <img src="https://via.placeholder.com/150" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-24 w-24 bg-gray-500">
              <img src="https://via.placeholder.com/150" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-24 w-24 bg-gray-500">
              <img src="https://via.placeholder.com/150" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-24 w-24 bg-gray-500">
              <img src="https://via.placeholder.com/150" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-24 w-24 bg-gray-500">
              <img src="https://via.placeholder.com/150" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-24 w-24 bg-gray-500">
              <img src="https://via.placeholder.com/150" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-24 w-24 bg-gray-500">
              <img src="https://via.placeholder.com/150" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-24 w-24 bg-gray-500">
              <img src="https://via.placeholder.com/150" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-24 w-24 bg-gray-500">
              <img src="https://via.placeholder.com/150" alt="" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Partners;
