"use client";
import React from "react";
import {
  Arrow,
  ArrowButtonIcon,
  ArrowDiagonal,
  ArrowMenu,
  ArrowRight,
  GruaIcono,
} from "./icons";
import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

interface ServicesCardProps {
  titulo: string;
  svgIcono: React.ReactNode;
  texto: string;
  textoMobile?: string;
  link: string;
  linkDesktop: string;
}

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const ServicesCard = ({
  titulo,
  svgIcono,
  texto,
  link,
  linkDesktop,
  textoMobile,
}: ServicesCardProps) => {
  const pathname = usePathname();
  return (
    <motion.div
      variants={item}
      className="relative overflow-hidden group shadow-[5px_5px_4px_0px_#0000001A] rounded-[10px] bg-[#F4F4F4] w-fit text-primary md:min-h-[280px] px-6 pb-6 h-full"
      style={{
        width: "min(100%, 307px)",
      }}
    >
      <div className="h-full transition-all group-hover:-translate-y-8 flex  flex-col justify-between  w-full pt-14">
        <div className="flex gap-4 flex-col">
          <div className="bg-[#B3C5DF] h-[78px] aspect-square rounded-full grid place-items-center w-fit">
            {svgIcono}
          </div>
          <h3
            className={`${titulo.length < 16 ? "max-w-[9ch]" : "max-w-[13ch] md:max-w-[12ch]"}  text-[22px] md:text-xl md:font-light`}
          >
            {titulo}
          </h3>
        </div>
        <div className="stroke-primary w-4 self-end md:hidden">
          <ArrowDiagonal />
        </div>
      </div>
      <div className="absolute p-[26px] inset-0 translate-y-[100%] transition-all group-hover:translate-y-0 bg-[#F4F4F4] h-full w-full flex flex-col justify-between">
        <p className={`text-desktop text-base hidden md:block`}>{texto}</p>
        <p className="text-mobile text-base md:hidden">{textoMobile}</p>
        <Link
          href={`/our-services${link}`}
          className=" flex items-center gap-2 ml-auto font-semibold mt-2 lg:hidden"
        >
          <span>{pathname.includes("en") ? "Read More" : "Leer más"}</span>
          <span className="relative top-0.5">
            <Arrow />
          </span>
        </Link>
        <Link
          href={`/our-services${linkDesktop}`}
          className="  items-center gap-2 ml-auto font-semibold mt-2 hidden lg:flex"
        >
          <span>{pathname.includes("en") ? "Read More" : "Leer más"}</span>
          <span className="relative top-0.5">
            <Arrow />
          </span>
        </Link>
      </div>
    </motion.div>
  );
};

export default ServicesCard;
