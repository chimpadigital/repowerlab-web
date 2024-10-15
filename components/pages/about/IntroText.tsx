"use client";
import React from "react";
import { motion } from "framer-motion";
import WordAnimated from "@/components/WordAnimated";

const IntroText = () => {
  return (
    <article className="text-start px-20 text-primary">
      <WordAnimated text="**RepowerLab is a pioneering company transforming the energy sector by providing innovative solutions for end-of-life energy assets, **including **decommissioning, **repowering, **retrofitting, **recycling, **and **resale **of **renewable **energy **infrastructure. With extensive experience in decommissioning and managing over **4 **GW **of **renewable energy across the United States, Europe, Latin America, and Africa, our team has successfully dismantled, refurbished, and reinstalled turbines globally. This includes significant projects in countries like Germany, Austria, France, Italy, Spain, the UK, Chile, and Nicaragua, with ongoing projects in Italy and France focused on recycling." />
      <br />
      <br />
      <WordAnimated text="Our expertise in developing, financing, and operating global energy projects allows us to understand and navigate the evolving wind energy sector, managing emerging business and market risks associated with **the **global **energy **transition. We are committed to sustainability and utilize advanced European recycling technologies to achieve high material recovery rates. By enhancing the performance and efficiency of energy assets, RepowerLab drives innovation, promotes environmental stewardship, and supports a sustainable, circular economy in the **renewable **energy **industry." />
    </article>
  );
};

export default IntroText;
