"use client";
import React from "react";
import SwiperCore from "swiper";
import { Swiper, SwiperSlide, SwiperProps } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { title } from "@/components/primitives";

const Partners = () => {
  return (
    <div className="mt-32">
      <div className="max-w-[1254] mx-auto text-start mb-20 px-6">
        <h4 className={`${title()} text-primary text-start`}>Partners</h4>
      </div>

      <div>
        <Swiper
          modules={[Autoplay]}
          speed={3000}
          autoplay={{
            delay: 5,
          }}
          loop={true}
          slidesPerView={"auto"}
          watchSlidesProgress={true}
          spaceBetween={100}
          grabCursor={true}
        >
          <SwiperSlide>
            <div>
              <img src="https://via.placeholder.com/150" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src="https://via.placeholder.com/150" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src="https://via.placeholder.com/150" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src="https://via.placeholder.com/150" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src="https://via.placeholder.com/150" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src="https://via.placeholder.com/150" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src="https://via.placeholder.com/150" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src="https://via.placeholder.com/150" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src="https://via.placeholder.com/150" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src="https://via.placeholder.com/150" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src="https://via.placeholder.com/150" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src="https://via.placeholder.com/150" alt="" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Partners;
