import Image from "next/image";
import React from "react";
import Molino from "@/public/images/about/molino.webp";
import { title } from "@/components/primitives";
import { useTranslations } from "next-intl";

const WhyChooseRepowerlab = () => {
  const t = useTranslations("About.whyChoose")
  return ( 
    <section
      className="mx-auto flex items-center text-start relative lg:-top-6 lg:px-0 mb-10 lg:mb-0"
      style={{
        width: "min(100%, 1200px)",
      }}
    >
      <article className="flex-[2] pt-14 pl-4  md:pl-6 pr-6">
        <h4 className={`text-primary  ${title()} text-[26px] md:uppercase max-w-[10ch] !inline-block md:max-w-full`}>{t("title")}</h4>
        <p className="text-[#444444] pt-6 border-t border-s-secondary mt-6 max-w-[80ch] font-thin text-xl hidden md:block">
        {t("p")}
        </p>
        <hr className="mt-4 max-w-[70%] md:hidden" />
        <p className="md:hidden text-[#444444] pt-4 font-medium">
         {t("pM")}
        </p>
      </article>
      <figure className="flex-1 hidden lg:block">
        <Image alt="ilustracion de molino de viento" src={Molino} />
      </figure>
    </section>
  );
};

export default WhyChooseRepowerlab;
