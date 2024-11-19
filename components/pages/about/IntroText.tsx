"use client";
import React from "react";
import WordAnimated from "@/components/WordAnimated";

const IntroText = () => {
  return (
    <article className="hidden md:block px-6 text-center max-w-[90ch] mx-auto md:px-20 text-primary text-base md:text-2xl">
      <WordAnimated
        accentColor="!text-accent"
        text="-*RepowerLab is a pioneering company transforming the energy sector by providing innovative solutions for end-of-life energy assets, -*including -*decommissioning, -*repowering, -*retrofitting, -*recycling, -*and -*resale -*of -*renewable -*energy -*infrastructure. "
        textCenter
      />
    </article>
  );
};

export default IntroText;
