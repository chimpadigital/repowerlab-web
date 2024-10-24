import LeftArrow from "./solutions-btns/LeftArrow";
import RightArrow from "./solutions-btns/RightArrow";
import { useEffect, useState } from "react";

import "swiper/css";
import "swiper/css/navigation";

// import function to register Swiper custom elements
import { register } from "swiper/element/bundle";
import Link from "next/link";
import { title } from '@/components/primitives';
// register Swiper custom elements
register();

export default function SolutionsCarrusel({ cards }) {
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
        "md:transform md:-translate-x-[75%] md:transition-all md:duration-[1000ms] xl:transform xl:-translate-x-[43%]"
      );
    } else {
      setMoveLeft("");
      setMoveRight(
        "md:transform md:-translate-x-[75%] md:transition-all md:duration-[1000ms] xl:transform xl:-translate-x-[43%]"
      );
    }
    return;
  };



  return (
    <section className="w-full px-[26px] py-[33px] xl:px-[162px] xl:py-[160px]">
      {/* SECCIÓN TITULO Y BOTONES PARA AVANZAR Y RETROCEDER */}
      <div className="flex justify-between items-center overflow-hidden">
        <div
          className="w-full break-words md:w-full"

        >
          <h2
            className={title({ color: "primary", size: "md" })}

          >
            Solutions made for you
          </h2>

        </div>
        <div className={`hidden md:flex gap-3 ${numCols <= 6 ? 'xxl:hidden' : ''}`}>
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
      {/* SECCIÓN DEL CARRUSEL PARA DESKTOP */}
      <div className="hidden md:flex flex-col w-full mt-4  xl:ml-0">
        <div
          className={`grid mt-8 shadow-lg rounded-l-[20px] rounded-r-[20px] solutions-box h-[9rem] ${numCols > 5 ? "w-[1827px]" : "w-[1200px]"
            }  font-bold text-lg transition-all duration-700 ease-in-out ${moveLeft} ${moveRight}`}
          style={{ gridTemplateColumns: `repeat(${numCols}, 1fr)` }}
        >
          {cards.map((card, i) => (
            <Link
              key={card.id}
              target="_blank"
              // href={ `/${locale}/${card.href}`}
              href={card.href}
              className={`md:border-r-2 ${i === 0 ? 'lg:border lg:border-transparent lg:rounded-l-[20px]' : i === cards.length - 1 ? 'lg:border lg:border-transparent lg:rounded-r-[20px]' : i === 1 ? 'border-l-2' : ''} flex flex-col justify-start items-start pl-4 hover:bg-primary hover:text-secondary   transition-all duration-300 ease-in-out`}
            >

              <div className="overflow-hidden flex items-center h-full">
                <p

                  className="mt pr-2 font-light"
                >
                  {(card.title)}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      {/* SECCIÓN CARRUSEL MOBILE */}
      <div className="block md:hidden">
        <div className="mt-14 shadow-md rounded-l-lg rounded-r-lg md:rounded-r-none">
          <swiper-container
            className="mySwiper"
            pagination={true}
            paginationDynamicBullets={true}
            spaceBetween={"0px"}
            slidesPerView="auto"
            direction="horizontal"
            grabCursor={true}
            longSwipes={false}
            centeredSlides={true}
          >
            {cards.map((card) => (
              <swiper-slide key={card.id}>
                <Link className="w-full" href={card.href}>
                  <div
                    style={{
                      height: "200px",
                      width: "15rem",
                      fontWeight: "bold",
                      fontSize: "1.125rem",
                      transition: "all 700ms ease-in-out",
                      padding: "20px",
                    }}
                  >

                    <div className="overflow-hidden">
                      <p

                        className="mt-2"
                      >
                        {(card.title)}
                      </p>
                    </div>
                  </div>
                </Link>
              </swiper-slide>
            ))}
          </swiper-container>
        </div>
      </div>
    </section>
  );
}
