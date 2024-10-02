"use client";
import React from "react";
import ServicesCard from "./ServicesCard";
import {
  GruaIcono,
  LupaIcono,
  RasaleMaterial,
  RasaleParts,
  RecicladoCuchillasIcono,
  RecocladoIcono,
  SearchIcon,
  Transporte,
  TurbinaeolicaIcono,
} from "./icons";
import { motion } from "framer-motion";

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
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="mx-auto flex gap-[18px] flex-wrap justify-center px-3"
      style={{ width: "min(100%, 1320px)" }}
    >
      <ServicesCard
        link="/our-services#decommissioning"
        svgIcono={<GruaIcono />}
        texto="RepowerLab safely dismantles, relocates, and reassembles wind turbines, adhering to environmental and safety standards. The turbines are either reinstalled, used for spare parts, or recycled."
        titulo="Wind farm decommissioning"
      />
      <ServicesCard
        link="/our-services#repowering"
        svgIcono={<TurbinaeolicaIcono />}
        texto="RepowerLab repowers wind farms by retrofitting turbines to improve efficiency, boost energy output, and reduce costs, all while following sustainable practices."
        titulo="Wind farm repowering"
      />
      <ServicesCard
        link="/our-services#retrofitting"
        svgIcono={<RecocladoIcono />}
        texto="RepowerLab enhances the performance and extends the lifespan of existing wind turbines through comprehensive retrofitting and refurbishing services, ensuring turbines operate at peak efficiency and durability."
        titulo="Wind turbine retrofitting & refurbishing"
      />
      <ServicesCard
        link="/our-services/#blade-recycling"
        svgIcono={<RecicladoCuchillasIcono />}
        texto="Repowerlab leads in recycling and repurposing turbine blades through mechanical shredding, cement co-processing, and creating new products, supporting a circular economy"
        titulo="Blade recycling"
      />
      <ServicesCard
        link="/our-services#inspection"
        svgIcono={<LupaIcono />}
        texto="Providing independent, transparent inspections of wind turbines at various lifecycle stages, Repowerlab helps reduce risks, ensure compliance, and identify opportunities for maintenance or decommissioning."
        titulo="Inspection & value recovery"
      />
      <ServicesCard
        link="/our-services#resale-parts"
        svgIcono={<RasaleParts />}
        texto="Repowerlab specializes in the global trade of wind turbines and parts, connecting supply with demand to maximize value."
        titulo="Resale of wind turbines & spare parts"
      />
      <ServicesCard
        link="/our-services#resale-materials"
        svgIcono={<RasaleMaterial />}
        texto="RepowerLab's recycling operations address the disposal needs of wind turbine blades, particularly in the U.S. The company repurposes these materials into new products like street furniture, contributing to the circular economy."
        titulo="Resale of materials"
      />
      <ServicesCard
        link="/our-services#warehousing"
        svgIcono={<Transporte />}
        texto="Repowerlab offers secure warehousing solutions and specialized logistics to ensure the safe and efficient handling, storage, and transportation of wind turbine components."
        titulo="Warehousing & transportation"
      />
    </motion.div>
  );
};

export default ServicesList;
