import { title } from "@/components/primitives";
import Image from "next/image";
import React from "react";
import iconoLight from "@/public/images/circular-economy/icon-light.svg";
import iconoCiruclarEconomy from "@/public/images/circular-economy/icon-circular-economy.svg";
import iconoRefurbishment from "@/public/images/circular-economy/icon-refurbishment.svg";
import iconoRecycling from "@/public/images/circular-economy/icon-recicle.svg";
import Link from "next/link";

const SolutionsCards = () => {
  return (
    <section className=" px-6 md:px-8 mx-4 md:mx-6 bg-primary bg-[url(/images/circular-economy/bg-solutions-cards.webp)] bg-fixed bg-no-repeat bg-cover rounded-[20px] pt-16 md:pt-32 pb-32 md:text-center">
      <h4 className={`${title({ size: "md" })} text-white hidden md:block`}>
        Circular Economy Solutions
      </h4>
      <div className=" md:hidden flex flex-col">
        <h4 className={`${title({ size: "md" })} text-white text-left text-[28px] `}>
          Our Circular
        </h4>
        <h4 className={`${title({ size: "md" })} text-white text-left text-[28px] `}>
          Economy Solutions
        </h4>
      </div>
      <div className="flex gap-5 justify-center mt-10 md:mt-24 flex-wrap">
        <Link
          href={"/circular-economy#repowering-solutions"}
          className="md:w-[min(100%,_309px)] w-full px-[18px] md:px-8 py-10 md:py-14 text-white bg-white/15 transition-all hover:bg-white/0 border-[0.5px] border-grey-100 rounded-tl-[10px] md:rounded-[10px] text-left flex md:flex-col md:justify-normal md:items-start md:gap-0 items-center gap-6 flex-wrap"
        >
          <div className="w-[62px] h-fit aspect-square rounded-full bg-white grid place-items-center">
            <Image alt="icon light" src={iconoLight} height={35} width={32} />
          </div>
          <h5 className="max-w-[10ch] inline-block text-lg md:text-2xl md:mt-7">
            Repowering Solutions
          </h5>
        </Link>

        <a
          href={"/circular-economy#circular-economy-solution"}
          className="md:w-[min(100%,_309px)] w-full  px-[18px] md:px-8 py-10  md:py-14 text-white bg-white/15 transition-all hover:bg-white/0 border-[0.5px] border-grey-100 rounded-tl-[10px] md:rounded-[10px] text-left flex md:flex-col md:justify-normal md:items-start md:gap-0 items-center gap-6 flex-wrap "
        >
          <div className="w-[62px] h-fit aspect-square rounded-full bg-white grid place-items-center">
            <Image
              alt="icon light"
              src={iconoCiruclarEconomy}
              height={42}
              width={42}
            />
          </div>
          <h5 className="max-w-[14ch] inline-block text-lg md:text-2xl md:mt-7">
            Circular Economy Solutions
          </h5>
        </a>

        <Link
          href={"/circular-economy#refurbishment"}
          className="md:w-[min(100%,_309px)] w-full px-[18px] md:px-8 py-10  md:py-14 text-white bg-white/15 transition-all hover:bg-white/0 border-[0.5px] border-grey-100 rounded-tl-[10px] md:rounded-[10px] text-left flex md:flex-col md:justify-normal md:items-start md:gap-0 items-center gap-6 flex-wrap"
        >
          <div className="w-[62px] h-fit aspect-square rounded-full bg-white grid place-items-center">
            <Image
              alt="icon light"
              src={iconoRefurbishment}
              height={42}
              width={42}
            />
          </div>
          <h5 className="max-w-[10ch] inline-block text-lg md:text-2xl md:mt-7">
            Refurbishment Solutions
          </h5>
        </Link>

        <Link
          href={"/circular-economy#recycling-solution"}
          className="md:w-[min(100%,_309px)] w-full  px-[18px] md:px-8 py-10  md:py-14 text-white bg-white/15 transition-all hover:bg-white/0 border-[0.5px] border-grey-100 rounded-tl-[10px] md:rounded-[10px] text-left flex md:flex-col md:justify-normal md:items-start md:gap-0 items-center gap-6 flex-wrap"
        >
          <div className="w-[62px] h-fit aspect-square rounded-full bg-white grid place-items-center">
            <Image
              alt="icon light"
              src={iconoRecycling}
              height={38}
              width={38}
              quality={100}
            />
          </div>
          <h5 className="max-w-[10ch] inline-block text-lg md:text-2xl md:mt-7">
            Recycling Solutions
          </h5>
        </Link>
      </div>
    </section>
  );
};

export default SolutionsCards;
