"use client";
import React from "react";
import ServicesCard from "./ServicesCard";
import {
  GruaIcono,
  LupaIcono,
  RasaleMaterial,
  RasaleParts,
  RecicladoCuchillasIcono,
  RecicladoIcono,
  SearchIcon,
  Transporte,
  TurbinaeolicaIcono,
} from "./icons";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { useTranslations } from "next-intl";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const ServicesList = () => {
  const t = useTranslations("Services.cards")
  return (
    <>
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="mx-auto md:flex gap-[18px] flex-wrap justify-center px-3 hidden"
        style={{ width: "min(100%, 1320px)" }}
      >
        <ServicesCard
          link="#decommissioning"
          svgIcono={<GruaIcono />}
          texto={t.raw("card1.d")}
          textoMobile={t.raw("card1.dM")}
          titulo={t.raw("card1.title")}
        />
        <ServicesCard
          link="#repowering"
          svgIcono={<TurbinaeolicaIcono />}
          texto={t.raw("card2.d")}
          textoMobile={t.raw("card2.dM")}
          titulo={t.raw("card2.title")}
        />
        <ServicesCard
          link="#retrofitting"
          svgIcono={<RecicladoIcono />}
          texto={t.raw("card3.d")}
          textoMobile={t.raw("card3.dM")}
          titulo={t.raw("card3.title")}
        />
        <ServicesCard
          link="/#blade-recycling"
          svgIcono={<RecicladoCuchillasIcono />}
          texto={t.raw("card4.d")}
          textoMobile={t.raw("card4.dM")}
          titulo={t.raw("card4.title")}
        />
        <ServicesCard
          link="#inspection"
          svgIcono={<LupaIcono />}
          texto={t.raw("card5.d")}
          textoMobile={t.raw("card5.dM")}
          titulo={t.raw("card5.title")}
        />
        <ServicesCard
          link="#resale-parts"
          svgIcono={<RasaleParts />}
          texto={t.raw("card6.d")}
          textoMobile={t.raw("card6.dM")}
          titulo={t.raw("card6.title")}
        />
        <ServicesCard
          link="#resale-materials"
          svgIcono={<RasaleMaterial />}
          texto={t.raw("card7.d")}
          textoMobile={t.raw("card7.dM")}
          titulo={t.raw("card7.title")}
        />
        <ServicesCard
          link="#warehousing"
          svgIcono={<Transporte />}
          texto={t.raw("card8.d")}
          textoMobile={t.raw("card8.dM")}
          titulo={t.raw("card8.title")}
        />
      </motion.div>
      <div className="md:hidden px-4">
        <Swiper
          slidesPerView={1.2}
          spaceBetween={20}
          grabCursor={true}
          pagination={{
            clickable: true,
            el: ".swiper-pagination-services",
          }}
          modules={[Pagination]}
          className="swiper-services"
        >
          <SwiperSlide>
            <ServicesCard
              link="#decommissioning"
              svgIcono={<GruaIcono />}
              texto={t.raw("card1.d")}
              textoMobile={t.raw("card1.dM")}
              titulo={t.raw("card1.title")}
            />
          </SwiperSlide>

          <SwiperSlide>
            <ServicesCard
              link="#repowering"
              svgIcono={<TurbinaeolicaIcono />}
              texto={t.raw("card2.d")}
              textoMobile={t.raw("card2.dM")}
              titulo={t.raw("card2.title")}
            />
          </SwiperSlide>

          <SwiperSlide>
            <ServicesCard
              link="#retrofitting"
              svgIcono={<RecicladoIcono />}
              texto={t.raw("card3.d")}
              textoMobile={t.raw("card3.dM")}
              titulo={t.raw("card3.title")}
            />
          </SwiperSlide>

          <SwiperSlide>
            <ServicesCard
              link="/#blade-recycling"
              svgIcono={<RecicladoCuchillasIcono />}
              texto={t.raw("card4.d")}
          textoMobile={t.raw("card4.dM")}
          titulo={t.raw("card4.title")}
            />
          </SwiperSlide>

          <SwiperSlide>
            <ServicesCard
              link="#inspection"
              svgIcono={<LupaIcono />}
              texto={t.raw("card5.d")}
              textoMobile={t.raw("card5.dM")}
              titulo={t.raw("card5.title")}
            />
          </SwiperSlide>

          <SwiperSlide>
            <ServicesCard
              link="#resale-parts"
              svgIcono={<RasaleParts />}
              texto={t.raw("card6.d")}
              textoMobile={t.raw("card6.dM")}
              titulo={t.raw("card6.title")}
            />
          </SwiperSlide>

          <SwiperSlide>
            <ServicesCard
              link="#resale-materials"
              svgIcono={<RasaleMaterial />}
              texto={t.raw("card7.d")}
              textoMobile={t.raw("card7.dM")}
              titulo={t.raw("card7.title")}
            />
          </SwiperSlide>

          <SwiperSlide>
            <ServicesCard
              link="#warehousing"
              svgIcono={<Transporte />}
              texto={t.raw("card8.d")}
              textoMobile={t.raw("card8.dM")}
              titulo={t.raw("card8.title")}
            />
          </SwiperSlide>
        </Swiper>
        <div className="swiper-pagination-services h-10 mt-6 flex justify-center gap-2"></div>
      </div>
    </>
  );
};

export default ServicesList;
