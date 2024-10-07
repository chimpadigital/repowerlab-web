import { title } from "@/components/primitives";
import Image from "next/image";
import React from "react";
import iconoLight from "@/public/images/circular-economy/icon-light.png";
import iconoCiruclarEconomy from "@/public/images/circular-economy/icon-circular-economy.png";
import iconoRefurbishment from "@/public/images/circular-economy/icon-refurbishment.png";
import iconoRecycling from "@/public/images/circular-economy/icon-recicle.png";
import Link from "next/link";

const SolutionsCards = () => {
  return (
    <section className="px-8 mx-6 bg-primary bg-[url(/images/circular-economy/bg-solutions-cards.webp)] bg-no-repeat bg-cover rounded-[20px] pt-32 pb-32 text-center">
      <h4 className={`${title({ size: "md" })} text-white`}>
        Circular Economy Solutions
      </h4>
      <div className="flex gap-5 justify-center mt-24 flex-wrap">
        <Link
          href={"#repowering-solutions"}
          className="w-fit px-8 py-14 text-white bg-white/15 transition-all hover:bg-white/0 border-[0.5px] border-grey-100 rounded-[10px] text-left"
          style={{ width: "min(100%, 309px)" }}
        >
          <div className="w-[62px] aspect-square rounded-full bg-white grid place-items-center">
            <Image alt="icon light" src={iconoLight} height={35} width={32} />
          </div>
          <h5 className="max-w-[10ch] inline-block text-2xl mt-7">
            Repowering Solutions
          </h5>
        </Link>

        <Link
          href={"#circular-economy-solution"}
          className="w-fit px-8 py-14 text-white bg-white/15 transition-all hover:bg-white/0 border-[0.5px] border-grey-100 rounded-[10px] text-left"
          style={{ width: "min(100%, 309px)" }}
        >
          <div className="w-[62px] aspect-square rounded-full bg-white grid place-items-center">
            <Image
              alt="icon light"
              src={iconoCiruclarEconomy}
              height={42}
              width={42}
            />
          </div>
          <h5 className="max-w-[20ch] inline-block text-2xl mt-7">
            Circular Economy Solutions
          </h5>
        </Link>

        <Link
          href={"#refurbishment"}
          className="w-fit px-8 py-14 text-white bg-white/15 transition-all hover:bg-white/0 border-[0.5px] border-grey-100 rounded-[10px] text-left"
          style={{ width: "min(100%, 309px)" }}
        >
          <div className="w-[62px] aspect-square rounded-full bg-white grid place-items-center">
            <Image
              alt="icon light"
              src={iconoRefurbishment}
              height={42}
              width={42}
            />
          </div>
          <h5 className="max-w-[10ch] inline-block text-2xl mt-7">
            Refurbishment Solutions
          </h5>
        </Link>

        <Link
          href={"#recycling-solution"}
          className="w-fit px-8 py-14 text-white bg-white/15 transition-all hover:bg-white/0 border-[0.5px] border-grey-100 rounded-[10px] text-left"
          style={{ width: "min(100%, 309px)" }}
        >
          <div className="w-[62px] aspect-square rounded-full bg-white grid place-items-center">
            <Image
              alt="icon light"
              src={iconoRecycling}
              height={38}
              width={38}
              quality={100}
            />
          </div>
          <h5 className="max-w-[10ch] inline-block text-2xl mt-7">
            Recycling Solutions
          </h5>
        </Link>
      </div>
    </section>
  );
};

export default SolutionsCards;
