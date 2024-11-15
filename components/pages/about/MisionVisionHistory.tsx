"use client";
import { title } from "@/components/primitives";
import React from "react";
import { motion } from "framer-motion";

const MisionVisionHistory = () => {
  return (
    <div
      className="MisionVisionHistory flex flex-wrap gap-12 md:gap-24 mx-auto justify-center my-20 px-6"
      style={{ width: "min(100%, 1500px)" }}
    >
      <motion.div
        className="relative group"
        style={{ width: "min(100%, 374px)" }}
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div
          className="text-primary z-[1] bg-white cursor-default relative shadow-[0px_4px_4px_0px_#0000001A] py-6 md:py-10 px-4 rounded-[20px] h-full transition-all hover:md:translate-x-3 hover:md:translate-y-6"
          style={{ width: "min(100%, 374px)" }}
        >
          <h4
            className={`${title()} text-[26px] md:text-[2.3rem] lg:text-[36px]`}
          >
            Our Mission
          </h4>
          <p className="mt-3 md:mt-6 text-[#444444] md:hidden">
            We are committed to advancing wind energy through repowering,
            recycling, and sustainability. Our mission is to maximize turbine
            lifespan, reduce environmental impact, and support the circular
            economy for a sustainable future.
          </p>
          <p className="mt-3 md:mt-6 text-[#444444] hidden md:block">
            RepowerLab is dedicated to advancing the wind energy sector through
            innovative repowering, recycling, and sustainability solutions. Our
            mission is to maximize the lifespan and efficiency of wind turbines,
            reduce environmental impact, and support the circular economy,
            ensuring a sustainable and prosperous future for renewable energy.
          </p>
        </div>
        <div className="absolute origin-bottom-right inset-0 bg-gradient-to-r from-white to-secondary/50 rounded-[20px] -translate-y-6 md:translate-y-0 transition-all group-hover:md:-rotate-6 group-hover:md:-translate-y-14 group-hover:md:translate-x-3 z-[0]"></div>
      </motion.div>

      <motion.div
        className="relative group"
        style={{ width: "min(100%, 374px)" }}
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div
          className="text-primary z-[1] bg-white cursor-default relative shadow-[0px_4px_4px_0px_#0000001A] py-6 md:py-10 px-4 rounded-[20px] h-full transition-all group-hover:md:translate-y-8"
          style={{ width: "min(100%, 374px)" }}
        >
          <h4
            className={`${title()} text-[26px] md:text-[2.3rem] lg:text-[36px]`}
          >
            Our Vision
          </h4>
          <p className="mt-3 md:mt-6 text-[#444444] md:hidden">
            Lead the global shift to sustainable energy by being the top
            provider of wind turbine repowering and recycling, promoting
            environmental care, economic efficiency, and renewable innovation.
          </p>
          <p className="mt-3 md:mt-6 text-[#444444] hidden md:block">
            To lead the global transition to a sustainable energy future by
            being the foremost provider of repowering and recycling solutions
            for wind turbines, fostering environmental stewardship, economic
            efficiency, and innovation in the renewable energy industry.
          </p>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r -translate-y-6 md:translate-y-0 from-white to-secondary/50 rounded-[20px] z-[0]"></div>
      </motion.div>
      <motion.div
        className="relative group"
        style={{ width: "min(100%, 374px)" }}
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div
          className="text-primary z-[1] bg-white cursor-default relative shadow-[0px_4px_4px_0px_#0000001A] py-6 md:py-10 px-4 rounded-[20px] h-full transition-all hover:md:translate-x-6 hover:md:translate-y-6"
          style={{ width: "min(100%, 374px)" }}
        >
          <h4
            className={`${title()} text-[26px] md:text-[2.3rem] lg:text-[36px]`}
          >
            Our History
          </h4>
          <p className="mt-3 md:mt-6 text-[#444444]  md:hidden">
            RepowerLab started as a spin-off of Repowering Solutions, with over
            15 years of experience in wind turbine dismantling and recycling. We
            now operate globally, executing projects in 20 countries through
            three international offices.
          </p>
          <p className="mt-3 md:mt-6 text-[#444444] hidden md:block">
            RepowerLab was borne as a spin-off of Repowering Solutions, a
            company with more than 15 years of experience in the dismantling,
            retrofitting, recycling, buying and selling of wind turbines in
            Europe. Today, with a global presence, we execute projects in 20
            countries through our three international offices.
          </p>
        </div>
        <div className="absolute origin-bottom-left inset-0 bg-gradient-to-r from-white to-secondary/50 rounded-[20px] -translate-y-6 md:translate-y-0 transition-all group-hover:md:rotate-6 group-hover:md:-translate-y-14 group-hover:md:translate-x-8 z-[0]"></div>
      </motion.div>
    </div>
  );
};

export default MisionVisionHistory;
