import Paragraph from "@/atoms/Paragraph";
import { useTranslations } from "next-intl";
import React from "react";

const IntroTextMobile = () => {
  const t = useTranslations("About")
  return (
    <div className="flex flex-col px-6 md:px-20">
      <article
        className={`text-start text-[#444444] text-base md:text-[30px] `}
      >
        <Paragraph textAccent="!text-accent font-bold" text={t.raw("paragraphMobile")} />
      </article>
    </div>
  );
};

export default IntroTextMobile;
