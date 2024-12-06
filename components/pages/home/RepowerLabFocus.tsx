"use client"
import { title } from "@/components/primitives";
import WordAnimated from "@/components/WordAnimated";
import React from "react";
import Image from "next/image";
import RotateScroll from "@/components/RotateScroll";
import Paragraph from "@/atoms/Paragraph";
import { useTranslations } from "next-intl";

export default function RepowerLabFocus() {
  const t = useTranslations("Home.Our-Focus")
  return (
    <div className="w-full flex justify-center px-4 lg:px-10">
      <div className="container">
        <div className="flex flex-col lg:flex-row text-primary gap-2 md:gap-[90px] text-[30px]">
          <h2 className={title({ color: "primary" }) + " whitespace-nowrap"}>
            {t("title")}
          </h2>
          <article className="hidden md:block">
            <WordAnimated
              accentColor="!text-accent"
              text={t.raw("animatedWord")}
            />
          </article>
          <article className="md:hidden text-base">
            <Paragraph strongClass="!text-accent" textAccent="!text-accent"  className="text-[18px] leading-7" text={t.raw("paragraphMobile")}></Paragraph>

          </article>
        </div>
        <div className="pt-12 md:grid grid-cols-2 hidden">
          <div className="lg:col-span-1 col-span-2 flex justify-center">
            <Image
              quality={100}
              width={500}
              height={500}
              alt="imagen focus"
              src={"/images/home/CircularEconomy.webp"}
            ></Image>
          </div>
          <div className="lg:col-span-1 col-span-2 flex flex-col items-center justify-center text-primary text-[22px] ">
            <Paragraph text={t.raw("paragraph1")} strongClass="!text-accent"  textAccent="!text-accent !font-normal"></Paragraph>
            <Paragraph className="pt-2" strongClass="!text-accent" text={t.raw("paragraph2")}  textAccent="!text-accent !font-normal"></Paragraph>     
          </div>
        </div>
      </div>
    </div>
  );
}
