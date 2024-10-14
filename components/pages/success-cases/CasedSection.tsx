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
  },
  {
    icon: <TurbinaeolicaIcono />,
    text: "From decommissioning and dismantling wind farms to advising on the best second-hand turbines and equipment, and repowering existing farms to extend their lifespan, we deliver innovative, sustainable outcomes.",
  },
  {
    icon: <GlobeIcon />,
    text: "Discover how we’ve maximized value, enhanced efficiency, and promoted sustainability for our clients across the globe.",
  },
];

const CasedSection = () => {
  return (
    <div className="px-14 flex gap-6 flex-wrap justify-center text-primary">
      {text.map((item, index) => {
        return (
          <div
            key={index}
            className="w-fit relative group pl-14 pr-16 py-12 origin-top transition-all bg-gradient-to-r from-[#fff] to-90% to-[#B3C5DF] shadow-[5px_5px_4px_0px_#0000001A] rounded-[20px] after:inset-0 after:absolute after:bg-grey-100 after:rounded-[20px]  after:transition-all hover:after:opacity-0"
            style={{
              background:
                "linear-gradient(270deg, #B3C5DF -42.56%, #FFFFFF 57.02%)",
            }}
          >
            <div className="z-10  relative transition-all h-full">
              <div className="mb-10 group-hover:opacity-0 transition-all rounded-full h-16 aspect-square bg-secondary grid place-items-center">
                {item.icon}
              </div>
              <p className="max-w-[25ch] text-xl transition-all group-hover:-translate-y-24 text-primary font-light">
                {item.text}
              </p>
            </div>
            <div className="absolute transition-all opacity-0 group-hover:opacity-100 group-hover:rotate-45 -bottom-10 group-hover:bottom-14 right-14 z-30 text-4xl fill-accent">
              <IsotipoRepowerlab className="scale-[400%] " />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CasedSection;
