"use client";
import { IconHowWeWork } from "@/components/icons";
import { subtitle, title } from "@/components/primitives";
import RotateScroll from "@/components/RotateScroll";
import WordAnimated from "@/components/WordAnimated";
import ThreeContainer from "@/three/ThreeContainer";
import { extendVariants } from "@nextui-org/system";
import { motion } from "framer-motion";
import { Link } from "@/i18n/routing";
import React, { useState } from "react";
import Paragraph from "@/atoms/Paragraph";
import { useTranslations } from "next-intl";

export default function RepowerlabImpact() {
  const t = useTranslations("Home.Impact")

  return (
    <div className='md:px-8 px-4 relative overflow-x-hidden'>
      <div className="absolute bottom-0 hidden lg:block w-full h-[500px]">
        <ThreeContainer />
      </div>
      <div className="rounded-[10px] bg-primary pt-9 md:py-[100px] flex justify-center">
        <div className="container px-6">
          <div className="flex flex-col lg:flex-row justify-between gap-4 md:gap-[40px] lg:gap-[100px]">
            <h5 className={`text-secondary md:text-white text-[28px] max-w-[300px]`}>{t("title")}</h5>
            <p className="md:hidden text-white text-[18px]">{t("subtitle")}</p>
            <div className="max-w-[1000px] hidden md:block text-grey-100 text-[30px]" >
              <WordAnimated accentColor='text-secondary' text={t.raw("animatedWord")} />
            </div>
          </div>
          <div className="pt-[80px] md:pt-[120px] relative z-10">
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 mb-[80px] md:mb-[200px]">
              <Card percent='85-90%'
                title={t.raw("cards.card1.title")}
                descriptionMobile={t.raw("cards.card1.descriptionMob")}
                description={t.raw("cards.card1.description")} />
              <Card
                percent='60%'
                title={t.raw("cards.card2.title")}
                descriptionMobile={t.raw("cards.card2.descriptionMob")}
                description={t.raw("cards.card2.description")} />
              <Card
                percent='25-30%'
                title={t.raw("cards.card3.title")}
                descriptionMobile={t.raw("cards.card3.descriptionMob")}
                description={t.raw("cards.card3.description")} />
              <Card
                percent='85-90%'
                title={t.raw("cards.card4.title")}
                descriptionMobile={t.raw("cards.card4.descriptionMob")}
                description={t.raw("cards.card4.description")} />
            </div>
          </div>
          <div className='grid pb-2 lg:grid-cols-2 grid-cols-1 gap-6 relative'>
            <div className="col-span-1 relative z-10">
              <div className="max-w-[400px] text-white">
                <h3 className={`${title({ color: "white", size: "md" })}`}>{t("howWork.title1")} <span className='text-secondary'>{t("howWork.title2")}</span></h3>
                <div className="md:hidden pt-6">
                  <Paragraph textAccent="text-secondary" className="text-[18px]" text={t("howWork.pm1")}></Paragraph>
                </div>
                <div className="hidden md:block">

                  <p className="pt-[50px]">
                    {t("howWork.p1")}
                  </p>
                  <p className="pt-[50px]">
                    {t("howWork.p2")}

                  </p>
                  <p className="pt-[50px]">

                    {t("howWork.p3")}
                  </p>
                </div>
                <div className="md:pt-[60px] pt-[35px] flex justify-center md:justify-start">
                  <Link href="/how-we-work" className='w-full max-w-[180px] relative overflow-hidden gap-4 items-center transition-all duration-[600] py-4 px-6 rounded-full  text-white flex justify-between hover:max-w-[200px]'>
                    <div className="w-full absolute h-full top-0 left-0 bg-[#ffffff]/40">
                    </div>
                    <span className='relative text-[18px]'>{t("howWork.read")}</span>

                    <svg
                      width="21"
                      height="14"
                      viewBox="0 0 21 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20.8231 7.15212C20.7176 7.3202 20.6224 7.50145 20.5047 7.65437C19.0019 9.60468 17.4965 11.551 15.9911 13.498C15.7628 13.7933 15.5117 13.8362 15.3048 13.6206C15.1056 13.413 15.0659 13.0683 15.2177 12.802C15.2778 12.6972 15.3502 12.603 15.422 12.51C16.6151 10.9651 17.8082 9.42078 19.0029 7.87846C19.0548 7.81123 19.119 7.75982 19.1776 7.70116C19.1679 7.67216 19.1588 7.64316 19.1491 7.61416C19.0666 7.61416 18.984 7.61416 18.901 7.61416C12.8341 7.61416 6.76712 7.61416 0.700691 7.61284C0.586576 7.61284 0.469914 7.60493 0.358346 7.57527C0.14489 7.51793 -0.00641355 7.25758 0.000209187 6.98405C0.00683192 6.71579 0.15457 6.47126 0.358856 6.41853C0.470423 6.38953 0.587085 6.38294 0.70171 6.38294C6.76151 6.38162 12.8218 6.38162 18.8816 6.38162H19.1934C19.1048 6.26035 19.0533 6.18587 18.9988 6.11534C17.7777 4.53282 16.5565 2.94963 15.3339 1.36909C15.1693 1.1562 15.0679 0.925506 15.1607 0.617043C15.2682 0.260464 15.61 0.120073 15.851 0.340216C15.9335 0.415355 16.0053 0.511585 16.0772 0.603861C17.554 2.51264 19.0314 4.42143 20.5052 6.33483C20.6229 6.48708 20.7177 6.669 20.8226 6.83707V7.15278L20.8231 7.15212Z"
                        fill="white"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-span-1 relative z-10 pt-6">
              <Single
                url=""
                index={1}
                title={t.raw("singles.card1.title")}
                descriptionMobile={t.raw("singles.card1.dM")}
                description={t.raw("singles.card1.d")}
              />
              <div className="pt-8">
                <Single
                  url=""
                  index={2}
                  title={t.raw("singles.card2.title")}
                  descriptionMobile={t.raw("singles.card2.dM")}
                  description={t.raw("singles.card2.d")}
                />
              </div>
              <div className="pt-8">
                <Single
                  url=""
                  index={3}
                  title={t.raw("singles.card3.title")}
                  descriptionMobile={t.raw("singles.card3.dM")}
                  description={t.raw("singles.card3.d")}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface CardI {
  title: string;
  percent: string;
  description: string;
  descriptionMobile: string;
}

const Card = ({ title, percent, description, descriptionMobile }: CardI) => {
  const [open, setOpen] = useState<boolean>(false);

  const variants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: 450 },
  };
  return (
    <motion.article
      onClick={() => {
        setOpen(!open);
      }}
      // style={{ height: open ? "315px" : "150px" }}
      className={`border overflow-hidden cursor-pointer transition-all ${open ? 'md:height-[315px] h-auto' : 'h-[150px]'} duration-600 relative text-white border-white rounded-tl-[10px] bg-[#C5C5C526] p-6`}
    >
      <div className=" relative z-10">
        <h5 className="font-light uppercase text-[20px] w-[200px]">{title}</h5>
        <h5 className="text-bold text-[32px]">{percent}</h5>
        <div className="relative h-full">
          <p className="w-[250px]" style={{ opacity: 0, color: "transparent" }}>
            {description}
          </p>
          <motion.p
            variants={variants}
            animate={open ? "open" : "closed"}
            transition={{ duration: 0.6 }}
            className={` absolute top-2 max-w-[250px] pe-4  w-full hidden md:block`}
          >
            {description}
          </motion.p>
          <motion.p
            variants={variants}
            animate={open ? "open" : "closed"}
            transition={{ duration: 0.6 }}
            className={` absolute top-2 max-w-[250px] pe-4  w-full md:hidden`}
          >
            {descriptionMobile}
          </motion.p>
        </div>
      </div>
      <svg className={`absolute bottom-2 right-2 transition-all duration-[600] ${open ? 'rotate-180' : ''}`} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.06077 0.939331L16.5001 14.3787V4.99999H19.5001V19.5H5.00011V16.5H14.3788L0.939453 3.06065L3.06077 0.939331Z" fill="white" />
      </svg>


    </motion.article>
  );
};

interface SingleI {
  title: string;
  url: string;
  index: number
  description: string;
  descriptionMobile: string;
}

const Single = ({ title, url, description, descriptionMobile, index }: SingleI) => {
  return (
    <article className={`flex flex-col-reverse md:flex-row justify-between items-start md:items-center gap-4 pb-6 ${index == 3 ? "md:border-b" : "border-b"}  border-grey-100/50`}>
      <div className="max-w-[480px]">
        <h5 className={`md:text-white text-secondary font-bold pb-4 text-[22px] md:text-[28px]`}>
          {title}
        </h5>
        <p className="text-white hidden md:block">{description}</p>
        <p className="text-white md:hidden">{descriptionMobile}</p>
      </div>
      <RotateScroll>
        <IconHowWeWork className="text-accent md:text-white md:opacity-50" />
      </RotateScroll>
    </article>
  );
};
