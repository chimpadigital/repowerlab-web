"use client";
import LeftArrow from "./solutions-btns/LeftArrow";
import RightArrow from "./solutions-btns/RightArrow";
import { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { title } from "@/components/primitives";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { useWindowSize } from "@/utils/useResize";

export default function SolutionsCarrusel({ cards }) {
  const t = useTranslations("TurbineParts.Solutions");

  const isDesktop = useWindowSize({});

  const [moveLeft, setMoveLeft] = useState();
  const [moveRight, setMoveRight] = useState();
  const numCols = cards.length;

  const handleMoveLeft = () => {
    if (moveRight === null) {
      return;
    } else {
      setMoveRight("");
      setMoveLeft("transform translate-x-0 transition-all duration-[1000ms]");
    }
    return;
  };

  const handleMoveRight = () => {
    if (moveLeft === null) {
      setMoveRight(
        "transform md:-translate-x-[75%] md:transition-all md:duration-[1000ms]  md:-translate-x-[50%]  xl:-translate-x-[40%] 2xl::-translate-x-[30%]"
      );
    } else {
      setMoveLeft("");
      setMoveRight(
        "transform md:-translate-x-[75%] transition-all duration-[1000ms] lg:-translate-x-[50%]   xl:-translate-x-[40%] 2xl:-translate-x-[30%] "
      );
    }
    return;
  };

  if (isDesktop === null) {
    return null;
  }

  return (
    <section className="w-full px-[26px] py-[33px] xl:px-[162px] xl:py-[160px]">
      {/* SECCIÓN TITULO Y BOTONES PARA AVANZAR Y RETROCEDER */}
      <div className="flex justify-between items-center overflow-hidden">
        <div className="w-full break-words md:w-full">
          <h2 className={title({ color: "primary", size: "md" })}>
            {t("madefor")}
          </h2>
        </div>
        <div
          className={`hidden md:flex gap-3 ${numCols <= 6 ? "xxl:hidden" : ""}`}
        >
          <button
            onClick={handleMoveLeft}
            className={`flex justify-center items-center rounded-full transition-all duration-[700]  w-14 h-14 bg-grey-100 hover:bg-primary text-primary  hover:text-grey-100`}
          >
            <LeftArrow />
          </button>
          <button
            className={`flex justify-center items-center rounded-full transition-all duration-[700] w-14 h-14 bg-grey-100 hover:bg-primary text-primary hover:text-grey-100`}
            onClick={handleMoveRight}
          >
            <RightArrow />
          </button>
        </div>
      </div>
      {isDesktop ? (
        <div className="flex flex-col w-full mt-4  xl:ml-0">
          <div
            className={`grid mt-8 shadow-lg rounded-l-[20px] rounded-r-[20px] solutions-box h-[9rem] ${
              numCols > 5 ? "w-[1827px]" : "w-[1200px]"
            }  font-bold text-lg transition-all duration-700 ease-in-out ${moveLeft} ${moveRight}`}
            style={{ gridTemplateColumns: `repeat(${numCols}, 1fr)` }}
          >
            {cards.map((card, i) => (
              <Link
                key={card?.id}
                target="_blank"
                // href={ `/${locale}/${card.href}`}
                href={card?.hrefDesk}
                className={`md:border-r-2 ${i === 0 ? "lg:border lg:border-transparent lg:rounded-l-[20px]" : i === cards.length - 1 ? "lg:border lg:border-transparent lg:rounded-r-[20px]" : i === 1 ? "border-l-2" : ""} flex flex-col justify-start items-start pl-4 hover:bg-primary hover:text-secondary   transition-all duration-300 ease-in-out`}
              >
                <div className="overflow-hidden pt-[40px] h-full">
                  <p className="mt pr-2 font-light">{card?.title}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ) : (
        <div className="">
          <div className="mt-7 rounded-l-lg rounded-r-lg md:rounded-r-none">
            <Swiper
              className="mySwiper-solutions"
              pagination={{
                clickable: true,
                el: ".swiper-pagination-solutions",
              }}
              spaceBetween={10}
              slidesPerView={1.2}
              breakpoints={{
                566: {
                  slidesPerView: 2.2,
                },
                768: {
                  slidesPerView: 3.2,
                },
                1024: {
                  slidesPerView: 4.2,
                },
              }}
              grabCursor={true}
              modules={[Pagination]}
            >
              {cards?.map((card, index) => (
                <SwiperSlide key={card.id}>
                  <Link className="w-full h-full" href={card?.href}>
                    <div className="h-[90px] w-full rounded-[10px] overflow-hidden">
                      <div className="overflow-hidden h-full flex w-full">
                        <div className="text-6xl flex justify-center items-center bg-secondary text-primary px-4 font-medium">
                          {index + 1}
                        </div>
                        <p className="text-secondary overflow-hidden bg-primary flex items-center w-full px-3 py-2">
                          {card?.title}
                        </p>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="swiper-pagination-solutions flex justify-center items-center mt-6"></div>
          </div>
        </div>
      )}
    </section>
  );
}
