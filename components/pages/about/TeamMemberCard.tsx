"use client";
import { useWindowSize } from "@/utils/useResize";
import React, { useState } from "react";

interface TeamMemberCardProps {
  name: string;
  position: string;
  description: string;
  descriptionM: string;
  image: string;
}

const TeamMemberCard = ({
  name,
  position,
  description,
  descriptionM,
  image,
}: TeamMemberCardProps) => {
  const isDesktop = useWindowSize({});
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div
      className="card-miembro relative font-[Mulish] overflow-hidden"
      style={{
        clipPath: "url(#clip-shape)",
      }}
      onClick={() => setIsChecked(!isChecked)}
    >
      <div
        className="aspect-[265/368] md:aspect-[376/554] bg-no-repeat bg-cover bg-[#C5C5C5] after:absolute after:inset-0 py-5 px-4 "
        style={{
          clipPath: "url(#clip-shape)",
          backgroundImage: `url(${image})`,
          transitionBehavior: "allow-discrete",
        }}
      ></div>
      <div
        style={{
          clipPath: "url(#clip-shape)",
        }}
        className={`absolute z-20 group text-white text-start h-full w-full inset-0 origin-center  bg-[#0e0e0e00] md:hover:bg-[#707070cc] flex flex-col px-6 pt-2 md:pt-44 transition-all md:hover:backdrop-blur-[30px] md:hover:justify-normal ${isChecked ? "bg-[#707070cc] backdrop-blur-[30px]" : "bg-[#0e0e0e00] backdrop-blur-0"}`}
      >
        <div
          className={`transition-all absolute md:bottom-8 text-xl md:text-2xl md:group-hover:bottom-[70%]  md:group-hover:opacity-100 ${isChecked ? "bottom-[70%] opacity-0 " : "bottom-4 opacity-100"}`}
        >
          <h4 className="font-extrabold text-base md:text-2xl mb-1 md:mb-3 font-[Mulish]">
            {name}
          </h4>
          <p className="font-[Mulish] text-sm md:text-2xl max-w-[22ch]">
            {position}
          </p>
        </div>
        <div
          className={`opacity-0 transition-all mt-3 md:group-hover:opacity-100 ${isChecked ? "opacity-100" : "opacity-0"}`}
        >
          {isDesktop ? (
            <p
              className="font-[Mulish] text-sm md:text-base cursor-default"
              style={{
                transitionBehavior: "allow-discrete",
              }}
            >
              {description}
            </p>
          ) : (
            <p
              className="font-[Mulish] text-sm md:text-base cursor-default"
              style={{
                transitionBehavior: "allow-discrete",
              }}
            >
              {descriptionM}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;
