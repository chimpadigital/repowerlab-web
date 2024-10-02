"use client";
import React from "react";
import { motion } from "framer-motion";
import AnimatedWords from "@/atoms/AnimatedWord/AnimatedWords";
  
const IntroText = () => {
  return (
    <article className="text-start px-20">
      <AnimatedWords>
        <>
          <span className="font-bold">RepowerLab</span> is a pioneering company
          transforming the energy sector by providing innovative solutions for
          end-of-life energy assets,{" "}
          <span className="font-bold">
            including decommissioning, repowering, retrofitting, recycling, and
            resale of renewable energy infrastructure.
          </span>{" "}
          With extensive experience in decommissioning and managing over{" "}
          <span className="font-bold">4 GW of renewable energy </span> across
          the United States, Europe, Latin America, and Africa, our team has
          successfully dismantled, refurbished, and reinstalled turbines
          globally. This includes significant projects in countries like
          Germany, Austria, France, Italy, Spain, the UK, Chile, and Nicaragua,
          with ongoing projects in Italy and France focused on recycling.
        </>
      </AnimatedWords>
      <div className="my-10"></div>
      <AnimatedWords>
        <>
          Our expertise in developing, financing, and operating global energy
          projects allows us to understand and navigate the evolving wind energy
          sector, managing emerging business and market risks associated with{" "}
          <span className="font-bold"> the global energy transition. </span> We
          are committed to sustainability and utilize advanced European
          recycling technologies to achieve high material recovery rates. By
          enhancing the performance and efficiency of energy assets, RepowerLab
          drives innovation, promotes environmental stewardship, and supports a
          sustainable, circular economy in the{" "}
          <span className="font-bold"> renewable energy industry.</span>
        </>
      </AnimatedWords>
    </article>
  );
};

export default IntroText;
