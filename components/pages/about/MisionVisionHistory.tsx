"use client";
import { title } from "@/components/primitives";
import React from "react";
import { motion } from "framer-motion";

const MisionVisionHistory = () => {
  return (
    <div
      className="MisionVisionHistory flex flex-wrap  gap-24 mx-auto justify-center my-20 px-6"
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
          className="text-primary  z-[1] bg-white cursor-default relative shadow-[0px_4px_4px_0px_#0000001A] py-10 px-4 rounded-[20px] h-full transition-all hover:translate-x-3 hover:translate-y-6"
          style={{ width: "min(100%, 374px)" }}
        >
          <h4 className={title()}>Our Mission</h4>
          <p className="mt-6 text-[#7E7E7E]">
            RepowerLab is dedicated to advancing the wind energy sector through
            innovative repowering, recycling, and sustainability solutions. Our
            mission is to maximize the lifespan and efficiency of wind turbines,
            reduce environmental impact, and support the circular economy,
            ensuring a sustainable and prosperous future for renewable energy.
          </p>
        </div>
        <div className=" absolute origin-bottom-right inset-0 bg-gradient-to-r from-white to-secondary/50 rounded-[20px] transition-all group-hover:-rotate-6 group-hover:-translate-y-14 group-hover:translate-x-3 z-[0]"></div>
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
          className="text-primary z-[1] bg-white cursor-default relative shadow-[0px_4px_4px_0px_#0000001A] py-10 px-4 rounded-[20px] h-full transition-all group-hover:translate-y-8"
          style={{ width: "min(100%, 374px)" }}
        >
          <h4 className={title()}>Our Vision</h4>
          <p className="mt-6 text-[#7E7E7E]">
            To lead the global transition to a sustainable energy future by
            being the foremost provider of repowering and recycling solutions
            for wind turbines, fostering environmental stewardship, economic
            efficiency, and innovation in the renewable energy industry.
          </p>
        </div>
        <div className=" absolute inset-0 bg-gradient-to-r from-white to-secondary/50 rounded-[20px] z-[0]"></div>
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
          className="text-primary z-[1] bg-white cursor-default relative shadow-[0px_4px_4px_0px_#0000001A] py-10 px-4 rounded-[20px] h-full transition-all hover:translate-x-6 hover:translate-y-6"
          style={{ width: "min(100%, 374px)" }}
        >
          <h4 className={title()}>Our History</h4>
          <p className="mt-6 text-[#7E7E7E]">
            RepowerLab was borne as a spin-off of Repowering Solutions, a
            company with more than 15 years of experience in the dismantling,
            retrofitting, recycling, buying and selling of wind turbines in
            Europe. Today, with a global presence, we execute projects in 20
            countries through our three international offices.
          </p>
        </div>
        <div className="absolute origin-bottom-left inset-0 bg-gradient-to-r from-white to-secondary/50 rounded-[20px] transition-all group-hover:rotate-6 group-hover:-translate-y-14 group-hover:translate-x-8 z-[0]"></div>
      </motion.div>
    </div>
  );
};

export default MisionVisionHistory;
