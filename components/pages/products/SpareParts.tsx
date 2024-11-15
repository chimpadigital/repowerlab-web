"use client";
import React, { useState } from "react";
import {
  BladeIcon,
  ComponentIcon,
  ControlIcon,
  GearBoxesIcon,
  GeneratorIcon,
} from "./icons";
import { title } from "@/components/primitives";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function SpareParts() {
  return (
    <section className="w-full flex justify-center overflow-hidden">
      <div className="pl-6">
        <div className="flex justify-center mb-4">
          <h2
            className={
              title({ color: "primary" }) +
              " text-center w-full hidden md:block"
            }
          >
            Wind Turbine Spare Parts Include
          </h2>
          <h2 className="text-[22px] font-bold text-primary text-center max-w-[18ch] md:hidden">
            Our Wind Turbine Spare Parts Include
          </h2>
        </div>
        <div className="max-w-[1280px] hidden md:flex py-[80px] justify-center flex-wrap px-6 gap-[40px]">
          <Card
            titulo="Blades"
            svgIcono={<BladeIcon />}
            texto="New and refurbished blades suitable for a variety of turbine models."
          />
          <Card
            titulo="Gearboxes"
            svgIcono={<GearBoxesIcon />}
            texto="High-quality gearboxes that are rigorously tested for reliability and performance."
          />
          <Card
            titulo="Other components"
            svgIcono={<ComponentIcon />}
            texto="Including towers, hubs, and more, all sourced from trusted manufacturers."
          />
          <Card
            titulo="Generators"
            svgIcono={<GeneratorIcon />}
            texto="Efficient generators to ensure optimal energy production."
          />
          <Card
            titulo="Control systems"
            svgIcono={<ControlIcon />}
            texto="Advanced control systems for better performance and reliability."
          />
        </div>
        <div className="md:hidden">
          <Swiper
            modules={[Pagination]}
            slidesPerView={1.2}
            spaceBetween={20}
            grabCursor={true}
            pagination={{
              clickable: true,
              el: ".swiper-pagination-spare-parts",
            }}
            className="slider-spare-parts"
            breakpoints={{
              640: {
                slidesPerView: 2.2,
              },
              768: {
                slidesPerView: 3.2,
              },
              1024: {
                slidesPerView: 4.2,
              },
            }}
          >
            <SwiperSlide>
              <Card
                titulo="Blades"
                svgIcono={<BladeIcon />}
                texto="New and refurbished blades suitable for a variety of turbine models."
              />
            </SwiperSlide>
            <SwiperSlide>
              <Card
                titulo="Gearboxes"
                svgIcono={<GearBoxesIcon />}
                texto="High-quality gearboxes that are rigorously tested for reliability and performance."
              />
            </SwiperSlide>
            <SwiperSlide>
              <Card
                titulo="Other components"
                svgIcono={<ComponentIcon />}
                texto="Including towers, hubs, and more, all sourced from trusted manufacturers."
              />
            </SwiperSlide>
            <SwiperSlide>
              <Card
                titulo="Generators"
                svgIcono={<GeneratorIcon />}
                texto="Efficient generators to ensure optimal energy production."
              />
            </SwiperSlide>
            <SwiperSlide>
              <Card
                titulo="Control systems"
                svgIcono={<ControlIcon />}
                texto="Advanced control systems for better performance and reliability."
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="swiper-pagination-spare-parts w-56 h-10 flex justify-center gap-2 mt-5"></div>
      </div>
    </section>
  );
}

const Card = ({ titulo, svgIcono, texto }: any) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
      className="relative overflow-hidden group shadow-[5px_5px_4px_0px_#0000001A] rounded-[10px] bg-[#F4F4F4] hover:bg-secondary transition-all duration-[1.2s] w-fit text-primary min-h-[280px] px-6 py-10"
      style={{
        width: "min(100%, 307px)",
      }}
    >
      <div className="h-full transition-all w-full flex gap-4 flex-col justify-center">
        <div
          className={
            "h-[78px] transition-all duration-[1.2s] aspect-square rounded-full grid place-items-center w-fit " +
            `${hover ? "bg-primary text-secondary" : "bg-secondary text-primary"}`
          }
        >
          {svgIcono}
        </div>
        <h4 className="text-[22px] md:text-[24px] font-bold">{titulo}</h4>
        <p className="font-light text-sm md:text-base">{texto}</p>
      </div>
    </div>
  );
};
