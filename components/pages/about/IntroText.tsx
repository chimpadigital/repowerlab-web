"use client";
import React from "react";
import WordAnimated from "@/components/WordAnimated";
import { useTranslations } from "next-intl";

const IntroText = () => {
  const t = useTranslations("About")
  return (
    <article className="px-6 text-center max-w-[90ch] mx-auto md:px-20 text-primary text-base md:text-2xl">
      <WordAnimated
        accentColor="!text-accent"
        text={t.raw("animatedWord")}
        textCenter
      />
    </article>
  );
};

export default IntroText;
