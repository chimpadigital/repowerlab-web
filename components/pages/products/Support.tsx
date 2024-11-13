"use client";
import { title } from "@/components/primitives";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Link } from "@/i18n/routing";

export default function Support() {
  return (
    <section className="w-full flex flex-col md:items-center justify-center pt-10 md:py-[80px]">
      <h2
        className={
          title({ color: "primary" }) +
          " md:text-center  max-w-[12ch] md:w-full px-6 md:px-0 leading-7 md:leading-normal"
        }
      >
        Comprehensive Support
      </h2>
      <p className="pb-12 pt-4 md:pt-8 max-w-[600px] md:text-center px-6 md:px-0">
        To assist our clients further, we offer extensive support in the
        procurement and installation of turbine parts. This includes:
      </p>

      <div className="w-full flex-col md:flex-row  gap-[1px] mt-6 hidden md:flex">
        <Card
          title="Expert Advice"
          img={"/images/product/expert.png"}
          height="600px"
          description="Guidance on selecting the right parts for your turbines."
        />
        <Card
          title="Logistics"
          img={"/images/product/logistics.png"}
          height="600px"
          description="Coordinating the delivery and installation of parts, ensuring they arrive on time and in perfect condition."
        />
        <Card
          title="After-Sales Support"
          img={"/images/product/support.png"}
          height="600px"
          description="Ongoing support to address any issues and ensure the continued performance of your turbines."
        />
      </div>
      <div className="px-4">
        <CardMobile
          img="/images/product/expert.png"
          title="Expert Advice"
          description="Guidance on selecting the right parts for your turbines."
        />
        <CardMobile
          img="/images/product/logistics.png"
          title="Logistics"
          description="Coordinating the delivery and installation of parts, ensuring they arrive on time and in perfect condition."
        />
        <CardMobile
          img="/images/product/support.png"
          title="After-Sales Support"
          description="Ongoing support to address any issues and ensure the continued performance of your turbines."
        />
      </div>
    </section>
  );
}

function Card({
  title,
  img,
  height,
  description,
}: {
  title: string;
  img: string;
  height: string;
  description?: string;
}) {
  const [open, setOpen] = useState<boolean>(false);

  const variants = {
    closed: { width: "80%", height: 100, padding: "30px" },
    open: { width: "100%", height, padding: "80px" },
  };
  const variants2 = {
    closed: { bottom: "50px" },
    open: { bottom: "0px" },
  };

  const variantsP = {
    closed: { opacity: 0 },
    open: { opacity: 1 },
  };
  const variantsT = {
    closed: { opacity: 1 },
    open: { opacity: 0 },
  };

  return (
    <article
      onMouseEnter={() => {
        setOpen(true);
      }}
      onMouseLeave={() => {
        setOpen(false);
      }}
      className={`w-full object-cover bg-cover bg-no-repeat relative cursor-pointer overflow-hidden`}
      style={{ height, backgroundImage: `url(${img})` }}
    >
      <motion.div
        className="absolute flex justify-center w-full "
        transition={{ duration: 0.8 }}
        variants={variants2}
        animate={open ? "open" : "closed"}
      >
        <motion.div
          variants={variants}
          transition={{ duration: 0.8 }}
          animate={open ? "open" : "closed"}
          className="absolute h-full"
          style={{
            borderRadius: open ? "0px" : "10px",
            background: "#4B4A4A",
            opacity: ".48",
            backdropFilter: "blur(10px)",
          }}
        ></motion.div>
        <motion.h6
          variants={variantsT}
          transition={{ duration: 0.8 }}
          animate={open ? "open" : "closed"}
          className="absolute z-10 bottom-[36px] font-bold text-white text-[22px]"
        >
          {title}
        </motion.h6>
        <motion.div
          style={{
            backdropFilter: "blur(10px)",
            borderRadius: open ? "0px" : "10px",
          }}
          className="flex flex-col justify-center relative text-white"
          variants={variants}
          transition={{ duration: 0.8 }}
          animate={open ? "open" : "closed"}
        >
          {description && (
            <motion.div
              variants={variantsP}
              className="absolute w-full flex justify-center text-[16px] top-[200px] left-0"
              transition={{ duration: 0.8 }}
              animate={open ? "open" : "closed"}
            >
              <p className="max-w-[250px] text-[20px] font-bold">
                {description}
              </p>
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </article>
  );
}

function CardMobile({
  title,
  img,
  description,
}: {
  title: string;
  img: string;
  description?: string;
}) {
  return (
    <div
      className="rounded-[20px] relative bg-cover w-full bg-bottom h-[395px] overflow-hidden mb-4"
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      <article className="absolute w-full bottom-0 pt-10 pb-6 px-6 min-h-[156px] text-white backdrop-blur-lg bg-[#4B4A4A7A]">
        <h4 className="text-lg mb-3">{title}</h4>
        <p className="text-sm font-light">{description}</p>
      </article>
    </div>
  );
}
