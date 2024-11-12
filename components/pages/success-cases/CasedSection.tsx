import {
  CheckIcon,
  GlobeIcon,
  IsotipoRepowerlab,
  TurbinaeolicaIcono,
} from "@/components/icons";
import React from "react";

const text = [
  {
    icon: <CheckIcon />,
    text: "Explore RepowerLab’s success stories, where our expertise in circular economy solutions for wind energy has transformed projects worldwide. ",
    textMobile:
      "Explore RepowerLab’s success stories, where our expertise in circular economy solutions for wind energy has transformed projects worldwide. ",
  },
  {
    icon: <TurbinaeolicaIcono />,
    text: "From decommissioning and dismantling wind farms to advising on the best second-hand turbines and equipment, and repowering existing farms to extend their lifespan, we deliver innovative, sustainable outcomes.",
    textMobile:
      "We dismantle wind farms, advise on second-hand turbines, and repower existing farms—delivering innovative and sustainable solutions.",
  },
  {
    icon: <GlobeIcon />,
    text: "Discover how we’ve maximized value, enhanced efficiency, and promoted sustainability for our clients across the globe.",
    textMobile:
      "Discover how we’ve maximized value, enhanced efficiency, and promoted sustainability for our clients across the globe.",
  },
];

const CasedSection = () => {
  return (
    <div className="px-4 md:px-14 flex gap-6 flex-wrap justify-center text-primary">
      {text.map((item, index) => {
        return (
          <div
            key={index}
            className="w-fit relative group px-7 md:px-16 py-8 origin-top transition-all bg-gradient-to-r from-[#fff] to-90% to-[#B3C5DF] shadow-[5px_5px_4px_0px_#0000001A] rounded-[20px] after:inset-0 after:absolute after:bg-grey-100 after:rounded-[20px]  after:transition-all hover:md:after:opacity-0"
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
