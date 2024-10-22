import Image from "next/image";
import React from "react";
import Molino from "@/public/images/about/molino.webp";
import { title } from "@/components/primitives";

const WhyChooseRepowerlab = () => {
  return (
    <section className="mx-auto flex items-center text-start relative lg:-top-6 px-6 lg:px-0 mb-10 lg:mb-0"
    style={{
      width: "min(100%, 1200px)"
    }}>
      <article className="flex-[2] pt-14  pl-6">
        <h4 className={`text-primary ${title()}`}>WHY CHOOSE REPOWERLAB?</h4>
        <p className="text-grey-700 pt-6 border-t border-s-secondary mt-6 max-w-[80ch] font-thin text-xl">
          At RepowerLab, we believe in the power of circular economy solutions.
          Our comprehensive approach focuses on recouping the economic value of
          wind farms, managing every stage of a turbine’s lifecycle—from initial
          assessment and refurbishment to recycling and transforming materials
          into new products.
        </p>
      </article>
      <figure className="flex-1 hidden lg:block">
        <Image alt="ilustracion de molino de viento" src={Molino} />
      </figure>
    </section>
  );
};

export default WhyChooseRepowerlab;
