"use client";
import React from "react";
import ServicesCard from "./ServicesCard";
import {
  GruaIcono,
  LupaIcono,
  RasaleMaterial,
  RasaleParts,
  RecicladoCuchillasIcono,
  RecicladoIcono,
  SearchIcon,
  Transporte,
  TurbinaeolicaIcono,
} from "./icons";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const ServicesList = () => {
  return (
    <>
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="mx-auto md:flex gap-[18px] flex-wrap justify-center px-3 hidden"
        style={{ width: "min(100%, 1320px)" }}
      >
        <ServicesCard
          link="#decommissioning"
          svgIcono={<GruaIcono />}
          texto="RepowerLab safely dismantles, relocates, and reassembles wind turbines, adhering to environmental and safety standards. The turbines are either reinstalled, used for spare parts, or recycled."
          textoMobile="Safe dismantling, relocating, and reassembling wind turbines—meeting safety and environmental standards every step of the way."
          titulo="Safe Dismantling"
        />
        <ServicesCard
          link="#repowering"
          svgIcono={<TurbinaeolicaIcono />}
          texto="RepowerLab repowers wind farms by retrofitting turbines to improve efficiency, boost energy output, and reduce costs, all while following sustainable practices."
          textoMobile="RepowerLab repowers wind farms by retrofitting turbines to improve efficiency, boost energy output, and reduce costs, all while following sustainable practices."
          titulo="Wind farm repowering"
        />
        <ServicesCard
          link="#retrofitting"
          svgIcono={<RecicladoIcono />}
          texto="RepowerLab enhances the performance and extends the lifespan of existing wind turbines through comprehensive retrofitting and refurbishing services, ensuring turbines operate at peak efficiency and durability."
          textoMobile="RepowerLab enhances the performance and extends the lifespan of existing wind turbines through comprehensive retrofitting and refurbishing services, ensuring turbines operate at peak efficiency and durability."
          titulo="Wind turbine retrofitting & refurbishing"
        />
        <ServicesCard
          link="/#blade-recycling"
          svgIcono={<RecicladoCuchillasIcono />}
          texto="Repowerlab leads in recycling and repurposing turbine blades through mechanical shredding, cement co-processing, and creating new products, supporting a circular economy."
          textoMobile="Recycling blades into new products. Leading the way in the circular economy."
          titulo={`Blade recycling`}
        />
        <ServicesCard
          link="#inspection"
          svgIcono={<LupaIcono />}
          texto="Providing independent, transparent inspections of wind turbines at various lifecycle stages, Repowerlab helps reduce risks, ensure compliance, and identify opportunities for maintenance or decommissioning."
          textoMobile="Providing independent, transparent inspections of wind turbines at various lifecycle stages, Repowerlab helps reduce risks, ensure compliance, and identify opportunities for maintenance or decommissioning."
          titulo="Inspection & value recovery"
        />
        <ServicesCard
          link="#resale-parts"
          svgIcono={<RasaleParts />}
          texto="Repowerlab specializes in the global trade of wind turbines and parts, connecting supply with demand to maximize value."
          textoMobile="Repowerlab specializes in the global trade of wind turbines and parts, connecting supply with demand to maximize value."
          titulo="Resale of wind turbines & spare parts"
        />
        <ServicesCard
          link="#resale-materials"
          svgIcono={<RasaleMaterial />}
          texto="RepowerLab's recycling operations address the disposal needs of wind turbine blades, particularly in the U.S. The company repurposes these materials into new products like street furniture, contributing to the circular economy."
          textoMobile="RepowerLab's recycling operations address the disposal needs of wind turbine blades, particularly in the U.S. The company repurposes these materials into new products like street furniture, contributing to the circular economy."
          titulo="Resale of materials"
        />
        <ServicesCard
          link="#warehousing"
          svgIcono={<Transporte />}
          texto="Repowerlab offers secure warehousing solutions and specialized logistics to ensure the safe and efficient handling, storage, and transportation of wind turbine components."
          textoMobile="Repowerlab offers secure warehousing solutions and specialized logistics to ensure the safe and efficient handling, storage, and transportation of wind turbine components."
          titulo="Warehousing & transportation"
        />
      </motion.div>
      <div className="md:hidden px-4">
        <Swiper
          slidesPerView={1.2}
          spaceBetween={20}
          grabCursor={true}
          pagination={{
            clickable: true,
            el: ".swiper-pagination-services",
          }}
          modules={[Pagination]}
          className="swiper-services"
        >
          <SwiperSlide>
            <ServicesCard
              link="#decommissioning"
              svgIcono={<GruaIcono />}
              texto="RepowerLab safely dismantles, relocates, and reassembles wind turbines, adhering to environmental and safety standards. The turbines are either reinstalled, used for spare parts, or recycled."
              textoMobile="Safe dismantling, relocating, and reassembling wind turbines—meeting safety and environmental standards every step of the way."
              titulo="Safe Dismantling"
            />
          </SwiperSlide>

          <SwiperSlide>
            <ServicesCard
              link="#repowering"
              svgIcono={<TurbinaeolicaIcono />}
              texto="RepowerLab repowers wind farms by retrofitting turbines to improve efficiency, boost energy output, and reduce costs, all while following sustainable practices."
              textoMobile="RepowerLab repowers wind farms by retrofitting turbines to improve efficiency, boost energy output, and reduce costs, all while following sustainable practices."
              titulo="Wind farm repowering"
            />
          </SwiperSlide>

          <SwiperSlide>
            <ServicesCard
              link="#retrofitting"
              svgIcono={<RecicladoIcono />}
              texto="RepowerLab enhances the performance and extends the lifespan of existing wind turbines through comprehensive retrofitting and refurbishing services, ensuring turbines operate at peak efficiency and durability."
              textoMobile="RepowerLab enhances the performance and extends the lifespan of existing wind turbines through comprehensive retrofitting and refurbishing services, ensuring turbines operate at peak efficiency and durability."
              titulo="Wind turbine retrofitting & refurbishing"
            />
          </SwiperSlide>

          <SwiperSlide>
            <ServicesCard
              link="/#blade-recycling"
              svgIcono={<RecicladoCuchillasIcono />}
              texto="Repowerlab leads in recycling and repurposing turbine blades through mechanical shredding, cement co-processing, and creating new products, supporting a circular economy."
              textoMobile="Recycling blades into new products. Leading the way in the circular economy."
              titulo={`Blade recycling`}
            />
          </SwiperSlide>

          <SwiperSlide>
            <ServicesCard
              link="#inspection"
              svgIcono={<LupaIcono />}
              texto="Providing independent, transparent inspections of wind turbines at various lifecycle stages, Repowerlab helps reduce risks, ensure compliance, and identify opportunities for maintenance or decommissioning."
              textoMobile="Providing independent, transparent inspections of wind turbines at various lifecycle stages, Repowerlab helps reduce risks, ensure compliance, and identify opportunities for maintenance or decommissioning."
              titulo="Inspection & value recovery"
            />
          </SwiperSlide>

          <SwiperSlide>
            <ServicesCard
              link="#resale-parts"
              svgIcono={<RasaleParts />}
              texto="Repowerlab specializes in the global trade of wind turbines and parts, connecting supply with demand to maximize value."
              textoMobile="Repowerlab specializes in the global trade of wind turbines and parts, connecting supply with demand to maximize value."
              titulo="Resale of wind turbines & spare parts"
            />
          </SwiperSlide>

          <SwiperSlide>
            <ServicesCard
              link="#resale-materials"
              svgIcono={<RasaleMaterial />}
              texto="RepowerLab's recycling operations address the disposal needs of wind turbine blades, particularly in the U.S. The company repurposes these materials into new products like street furniture, contributing to the circular economy."
              textoMobile="RepowerLab's recycling operations address the disposal needs of wind turbine blades, particularly in the U.S. The company repurposes these materials into new products like street furniture, contributing to the circular economy."
              titulo="Resale of materials"
            />
          </SwiperSlide>

          <SwiperSlide>
            <ServicesCard
              link="#warehousing"
              svgIcono={<Transporte />}
              texto="Repowerlab offers secure warehousing solutions and specialized logistics to ensure the safe and efficient handling, storage, and transportation of wind turbine components."
              textoMobile="Repowerlab offers secure warehousing solutions and specialized logistics to ensure the safe and efficient handling, storage, and transportation of wind turbine components."
              titulo="Warehousing & transportation"
            />
          </SwiperSlide>
        </Swiper>
        <div className="swiper-pagination-services h-10 flex justify-center gap-2"></div>
      </div>
    </>
  );
};

export default ServicesList;
