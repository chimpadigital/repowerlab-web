"use client";
import { title } from "@/components/primitives";
import React from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const MisionVisionHistory = () => {
  const t = useTranslations("About")
  return (
    <div
      className="MisionVisionHistory flex flex-wrap gap-12 md:gap-24 mx-auto justify-center mt-16 md:mt-36 mb-20 px-6"
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
            {t("mission.title")}
          </h4>
          <p className="mt-3 md:mt-6 text-[#444444] md:hidden">
            {t("mission.pM")}
          </p>
          <p className="mt-3 md:mt-6 text-[#444444] hidden md:block">
            {t("mission.p")}
            
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
            {t("vision.title")}
          </h4>
          <p className="mt-3 md:mt-6 text-[#444444] md:hidden">
            {t("vision.pM")}
          </p>
          <p className="mt-3 md:mt-6 text-[#444444] hidden md:block">
            {t("vision.p")}
            
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
            {t("history.title")}
          </h4>
          <p className="mt-3 md:mt-6 text-[#444444] md:hidden">
            {t("history.pM")}
          </p>
          <p className="mt-3 md:mt-6 text-[#444444] hidden md:block">
            {t("history.p")} 
          </p>
        </div>
        <div className="absolute origin-bottom-left inset-0 bg-gradient-to-r from-white to-secondary/50 rounded-[20px] -translate-y-6 md:translate-y-0 transition-all group-hover:md:rotate-6 group-hover:md:-translate-y-14 group-hover:md:translate-x-8 z-[0]"></div>
      </motion.div>
    </div>
  );
};

export default MisionVisionHistory;
