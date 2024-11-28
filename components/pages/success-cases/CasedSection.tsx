import {
  CheckIcon,
  GlobeIcon,
  IsotipoRepowerlab,
  TurbinaeolicaIcono,
} from "@/components/icons";
import { useTranslations } from "next-intl";
import React from "react";


const CasedSection = () => {
  
  const t = useTranslations("SuccessCases")

  const text = [
    {
      icon: <CheckIcon />,
      text: t("card1"),
      textMobile:
      t("card1m")
    },
    {
      icon: <TurbinaeolicaIcono />,
      text: t("card2"),
      textMobile:
      t("card2m")
    },
    {
      icon: <GlobeIcon />,
      text: t("card3"),
      textMobile:
      t("card3m")
    },
  ];

  return (
    <div className="px-4 md:px-14 flex gap-[12px] md:gap-4  flex-wrap justify-center text-primary">
      {text.map((item, index) => {
        return (
          <div
            key={index}
            className="w-full md:w-fit relative group px-7 md:px-16 py-8 origin-top transition-all bg-gradient-to-r from-[#fff] to-90% to-[#B3C5DF] shadow-[2.5px_2.5px_0px_0px_#0000001A] md:shadow-[5px_5px_4px_0px_#0000001A] rounded-[20px] after:inset-0 after:absolute after:bg-grey-100 after:rounded-[20px]  after:transition-all hover:md:after:opacity-0"
            style={{
              background:
                "linear-gradient(270deg, #B3C5DF -42.56%, #FFFFFF 57.02%)",
            }}
          >
            <div className="z-10  relative transition-all flex flex-col h-full">
              <div className="mb-2 md:mb-10 group-hover:md:opacity-0 w-fit transition-all rounded-full scale-75 -translate-x-2 md:translate-x-0 md:scale-100 h-16 aspect-square bg-secondary grid place-items-center">
                {item.icon}
              </div>
              <p className="max-w-[25ch] hidden md:block h-full flex-1 text-xl transition-all group-hover:md:-translate-y-24 text-primary ">
                {item.text}
              </p>

              <p className="max-w-[25ch] md:hidden h-full flex-1 text-xl transition-all group-hover:md:-translate-y-24 text-primary">
                {item.textMobile}
              </p>
            </div>
            <div className="absolute transition-all opacity-0 group-hover:md:opacity-100 group-hover:md:rotate-45 -bottom-10 group-hover:md:bottom-14 right-14 z-30 text-4xl fill-accent">
              <IsotipoRepowerlab className="scale-[400%] " />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CasedSection;
