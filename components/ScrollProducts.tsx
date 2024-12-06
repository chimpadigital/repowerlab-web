"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";
import {
  ArrowButtonIcon,
  ArrowRight,
  PowerIcon,
  RotorIcon,
  TowerIcon,
  WindIcon,
} from "./icons";
import { Link } from "@/i18n/routing";
import { usePathname } from "next/navigation";
import { useWindowSize } from "@/utils/useResize";

const turbine = {
  title: "ECOTECNIA E44",
  power: "45 HH tubular steel tower",
  tower: "15/12/2022",
  rotor: "44m",
  id: "",
  bg: "/images/our-services/cardMobile1.webp",
};

const turbine2 = {
  title: "ECOTECNIA E44",
  power: "45 HH tubular steel tower",
  tower: "15/12/2022",
  rotor: "44m",
  id: "",
  bg: "/images/our-services/cardMobile2.webp",
};

const turbine1 = {
  title: "ECOTECNIA E44",
  power: "45 HH tubular steel tower",
  tower: "15/12/2022",
  rotor: "44m",
  id: "",
  bg: "/images/our-services/cardMobile3.webp",
};

export default function ScrollProducts() {
  const ref = useRef<any>();

  const { scrollYProgress } = useScroll({
    target: ref,
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 2]);
  const images = [
    "/images/our-services/e2.jpg",
    "/images/our-services/e3.jpg",
    "/images/our-services/e4.jpg",
  ];
  const isDesktop = useWindowSize({});

  return (
    <>
      <div
        className="relative md:h-[300vh] pb-52"
        ref={ref}
        // style={{ height: "calc(100% + 28rem)" }}
      >
        {isDesktop ? (
          <div className="relative  top-0 z-0 w-full">
            <div className="sticky top-0  h-[100vh] z-[1]">
              <div className="absolute w-full h-full">
                {images.map((el, i) => (
                  <ImageMotion
                    src={el}
                    key={i}
                    y={y}
                    index={i}
                    rounded={false}
                  />
                ))}
              </div>
              <div className="relative w-full h-full z-[2] flex items-center ps-20 text-[30px] text-white">
                <Card turbine={turbine} y={y} index={0} />
              </div>
            </div>
            <div className="sticky top-0 w-full h-[100vh] z-[2]">
              <div className="relative w-full h-full flex items-center ps-20 text-[30px] text-white">
                <Card turbine={turbine} top={30} y={y} index={1} />
              </div>
            </div>
            <div className="sticky top-0 w-full h-[100vh] z-[3]">
              <div className="relative w-full h-full  flex items-center ps-20 text-[30px] text-white">
                <Card
                  turbine={turbine}
                  top={60}
                  y={y}
                  index={2}
                  animation={false}
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="text-white px-4  top-0 w-full h-full">
            <div className="sticky top-28 w-full z-[1] h-fit">
              <div className="relative w-full h-full  ">
                <CardMobile turbine={turbine} />
              </div>
            </div>
            <div className="sticky top-28 w-full z-[2] h-fit">
              <div className="relative w-full h-full">
                <CardMobile turbine={turbine1} top={110} />
              </div>
            </div>

            <div className="sticky top-80 w-full z-[3] h-fit">
              <div className="relative w-full h-full">
                <CardMobile turbine={turbine2} top={220} />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

const Card = ({ top = 0, turbine, animation = true, y, index }: any) => {
  const opacity = useTransform(y, [index, index + 1], [1, 0]);
  const pathname = usePathname();

  return (
    <article
      className="bg-[#666262]/90 w-[400px] py-8 px-6 border-white relative border rounded-[20px]"
      style={{ top: `${top}px` }}
    >
      <motion.div style={{ opacity: animation ? opacity : 1 }}>
        <div className="flex justify-end">
          <WindIcon />
        </div>

        <h3 className="text-white font-bold text-[18px]">Wind turbine</h3>
        <p className="pt-2 pb-4 text-[18px]">{turbine.title}</p>

        <hr className="py-4 border-white w-full" />
        <div className="flex gap-4">
          <PowerIcon />
          <h4 className="text-white font-bold text-[18px]">Power</h4>
        </div>
        <p className="py-2 pb-4 text-[18px]">{turbine.power}</p>

        <hr className="py-4 border-white w-full" />

        <div className="grid grid-cols-2 gap-[40px] justify-between">
          <div className="cols-span-1">
            <div className="flex gap-4">
              <TowerIcon />
              <h4 className="text-white font-bold text-[18px]">Tower</h4>
            </div>
            <p className="py-2 pb-4 text-[18px]">{turbine.tower}</p>

            <hr className="py-4 border-white w-full" />
          </div>
          <div className="cols-span-1">
            <div className="flex gap-4">
              <RotorIcon />
              <h5 className="text-white font-bold text-[18px]">Rotor</h5>
            </div>
            <p className="py-2 pb-4 text-[18px]">{turbine.rotor}</p>

            <hr className="py-4 border-white w-full" />
          </div>
        </div>

        <div className="flex justify-end text-[16px] font-bold">
          <Link
            href={"/marketplace"}
            className="flex gap-2 items-center cursor-pointer"
          >
            {pathname.includes("en") ? "Read More" : "Leer más"}
            <svg
              className="transform-y-[10px]"
              xmlns="http://www.w3.org/2000/svg"
              width="8"
              height="17"
              viewBox="0 0 8 17"
              fill="none"
            >
              <path
                d="M1 15.2104L7 8.26308L1 1.31571"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </motion.div>
    </article>
  );
};

const CardMobile = ({ top = 0, turbine }: any) => {
  return (
    <article
      className="w-full rounded-[20px] px-5 py-6 relative"
      style={{
        backgroundImage: `url(${turbine.bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        top: `${top}px`,
      }}
    >
      <header className="flex justify-between items-center mb-12">
        <div>
          <h3 className="mb-3 font-bold text-[18px]">Ecotecnia E44</h3>
          <span className="bg-white rounded-full text-grey-parrafo px-3 py-1 inline-block">
            Wind Turbine
          </span>
        </div>
        <Link
          href={"/marketplace"}
          className="h-9 grid place-items-center aspect-square rounded-full backdrop-blur-lg bg-[#C5C5C54D] border border-white"
        >
          <div className="h-3 fill-white left-px relative">
            <ArrowRight />
          </div>
        </Link>
      </header>
      <section className="w-[80%]">
        <div className=" border-b w-full pr-8 mb-8">
          <div className="flex gap-2 items-center">
            <PowerIcon />
            <h4 className="text-white font-bold text-[18px]">Power</h4>
          </div>
          <p className="py-2 pb-4 text-[18px]">{turbine.power}</p>
        </div>
        <div className="flex justify-between gap-7 pb-32">
          <div className="border-b flex-1">
            <div className="flex gap-2 items-center">
              <TowerIcon />
              <h4 className="text-white font-bold text-[18px]">Tower</h4>
            </div>
            <p className="py-2 pb-2 text-[18px]">{turbine.tower}</p>
          </div>

          <div className="border-b flex-1">
            <div className="flex gap-2 items-center">
              <RotorIcon />
              <h5 className="text-white font-bold text-[18px]">Rotor</h5>
            </div>
            <p className="py-1 pb-2 text-[18px]">{turbine.rotor}</p>
          </div>
        </div>
      </section>
    </article>
  );
};

const ImageMotion = ({ index, src, y, rounded = true }: any) => {
  const opacity = useTransform(y, [index - 1, index], [0, 1]);

  return (
    <motion.div
      className="w-full h-full"
      style={{ zIndex: index, opacity: index == 0 ? 1 : opacity }}
    >
      <Image
        src={src}
        alt="img-bg"
        fill
        className={`w-full h-full absolute object-cover ${rounded && "rounded-[20px]"}`}
      />
    </motion.div>
  );
};
