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
  const isDesktop = useWindowSize({
    customSize: 768,
  });
  const [isChecked, setIsChecked] = useState(false);

  return (
    <label
      className="card-miembro block relative font-[Mulish] overflow-hidden "
      style={{
        clipPath: "url(#clip-shape)",
      }}
    >
      <input
        type="checkbox"
        className="absolute top-0 hidden "
        onChange={(e) => setIsChecked(e.target.checked)}
        disabled={isDesktop ? true : false}
      />
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
        className={`absolute z-20 group  ${isChecked ? "bg-[#707070cc] backdrop-blur-[30px]" : "bg-[#0e0e0e00] backdrop-blur-0"} text-white text-start h-full w-full inset-0 origin-center  bg-[#0e0e0e00] md:hover:bg-[#707070cc] flex flex-col px-6 pt-2 md:pt-44 transition-all md:hover:backdrop-blur-[30px] md:hover:justify-normal `}
      >
        <div
          className={`transition-all absolute ${isChecked ? "bottom-[70%] opacity-0 " : "bottom-4 opacity-100"} md:bottom-8 text-xl md:text-2xl md:group-hover:bottom-[70%]  md:group-hover:opacity-100 `}
        >
          <h4 className="font-extrabold text-base md:text-2xl mb-1 md:mb-3 font-[Mulish]">
            {name}
          </h4>
          <p className="font-[Mulish] text-sm md:text-2xl max-w-[22ch]">
            {position}
          </p>
        </div>
        <div
          className={`${isChecked ? "opacity-100" : "opacity-0"} opacity-0 transition-all mt-3 md:group-hover:opacity-100 `}
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
    </label>
  );
};

export default TeamMemberCard;
