"use client";
import React from "react";
import { Arrow, GruaIcono } from "./icons";
import Link from "next/link";
import { motion } from "framer-motion";

interface ServicesCardProps {
  titulo: string;
  svgIcono: React.ReactNode;
  texto: string;
  link: string;
}

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const ServicesCard = ({ titulo, svgIcono, texto, link }: ServicesCardProps) => {
  return (
    <motion.div
      variants={item}
      className="relative overflow-hidden group shadow-[5px_5px_4px_0px_#0000001A] rounded-[10px] bg-[#F4F4F4] w-fit text-primary min-h-[280px] px-6"
      style={{
        width: "min(100%, 307px)",
      }}
    >
      <div className="h-full transition-all group-hover:-translate-y-8  w-full flex gap-4 flex-col justify-center">
        <div className="bg-[#B3C5DF] h-[78px] aspect-square rounded-full grid place-items-center w-fit">
          {svgIcono}
        </div>
        <h4 className="max-w-[12ch] text-xl font-light">{titulo}</h4>
      </div>
      <div className="absolute p-[26px] inset-0 translate-y-[100%] transition-all group-hover:translate-y-0 bg-[#F4F4F4] h-full w-full flex flex-col justify-between">
        <p className="text-sm">{texto}</p>
        <Link
          href={link}
          className=" flex items-center gap-2 ml-auto font-semibold"
        >
          <span>Read More</span>
          <span className="relative top-0.5">
            <Arrow />
          </span>
        </Link>
      </div>
    </motion.div>
  );
};

export default ServicesCard;
