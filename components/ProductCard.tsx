"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Link } from "@/i18n/routing";
import { ArrowRight } from "./icons";
import Title from "@/atoms/Title";

export default function ProductCard({
  title,
  img,
  height,
  href,
  description,
}: {
  href: string;
  title: string;
  img: string;
  height: string;
  description?: string;
}) {
  const [open, setOpen] = useState<boolean>(false);

  const variants = {
    closed: { width: "80%", height: 100, padding: "30px" },
    open: { width: "100%", height, padding: "40px" },
  };
  const variants2 = {
    closed: { bottom: "50px" },
    open: { bottom: "0px" },
  };

  const variantsP = {
    closed: { opacity: 0, display: "hidden" },
    open: { opacity: 1, display: "block" },
  };
  const variantFlecha = {
    closed: { x: 550 },
    open: { x: 0 },
  };
  
  return (
    <Link href={href}>
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
          className="absolute flex justify-center w-full z-1"
          variants={variants2}
          animate={open ? "open" : "closed"}
        >
          <motion.div
            variants={variants}
            animate={open ? "open" : "closed"}
            className="absolute h-full"
            style={{
              borderRadius: open ? "0px" : "10px",
              background: "#4B4A4A",
              opacity: ".48",
            }}
          ></motion.div>
          <motion.div
            className="flex flex-col justify-center relative text-white blurRepower"
            style={{
              backdropFilter: "blur(10px)",
              borderRadius: open ? "0px" : "10px",
            }}
            variants={variants}
            animate={open ? "open" : "closed"}
          >
            <div className="text-[24px] font-normal relative pe-4 flex">
              <div className="flex w-full justify-between">
                <Title
                  className={``}
                  title={title}
                />
                <motion.div
                  variants={variantFlecha}
                  transition={{ duration: 0.6 }}
                  animate={open ? "open" : "closed"}
                  className="w-12 h-12 min-w-12 min-h-12 bg-[#C5C5C526] right-0 relative z-10 text-white rounded-full border-white border cursor-pointer"
                  style={{}}
                >
                  <div className="flex h-full w-full justify-center items-center">
                    <div className="h-3 fill-white left-px relative">
                      <ArrowRight />
                    </div>
                  </div>
                </motion.div>
              </div>
              {description && (
                <motion.p
                  variants={variantsP}
                  className="absolute w-full text-[18px] top-[120px]"
                  transition={{ duration: 0.6 }}
                  animate={open ? "open" : "closed"}
                >
                  {description}
                </motion.p>
              )}
            </div>
          </motion.div>
        </motion.div>
      </article>
    </Link>
  );
}
