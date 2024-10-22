"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { title } from "@/components/primitives";
import Image from "next/image";

const partners = [
  {
    path: "/images/about/partner-cleaner-power.png",
    alt: "Clean power logo",
  },
  {
    path: "/images/about/partner-epm.png",
    alt: "EPM logo",
  },
  {
    path: "/images/about/partner-erg.png",
    alt: "ERG logo",
  },
  {
    path: "/images/about/partner-naturgy.png",
    alt: "Naturgy logo",
  },
  {
    path: "/images/about/partner-vientos-metodicos.png",
    alt: "Ventos Metodicos logo",
  },
  {
    path: "/images/about/partner-wind-europe.png",
    alt: "WindEurope logo",
  },
];

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
          spaceBetween={27}
          grabCursor={true}
        >
          {partners.map((partner, index) => {
            return (
              <SwiperSlide key={partner + index.toString()}>
                <div
                  className="h-[91px] rounded-md bg-white  overflow-hidden relative"
                  style={{ aspectRatio: "242/91" }}
                >
                  <Image
                    src={partner.path}
                    alt={partner.alt}
                    fill
                    className="py-2 px-4 grayscale h-full w-full object-contain"
                  />
                </div>
              </SwiperSlide>
            );
          })}

          {partners.map((partner, index) => {
            return (
              <SwiperSlide key={index.toString() + partner}>
                <div
                  className="h-[91px] rounded-md bg-white  overflow-hidden relative"
                  style={{ aspectRatio: "242/91" }}
                >
                  <Image
                    src={partner.path}
                    alt={partner.alt}
                    fill
                    className="py-2 px-4 grayscale h-full w-full object-contain"
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Partners;
