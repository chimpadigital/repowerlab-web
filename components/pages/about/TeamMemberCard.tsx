import React from "react";

interface TeamMemberCardProps {
  name: string;
  position: string;
  description: string;
  image: string;
  blur:string
}

const TeamMemberCard = ({
  name,
  position,
  description,
  image,
  blur
}: TeamMemberCardProps) => {
  return (
    <div className="card-miembro relative  w-[376px] font-[Mulish] overflow-hidden">
      <div
        className="aspect-[376/554] bg-no-repeat bg-cover bg-[#C5C5C5] after:absolute after:inset-0  py-5 px-4 "
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
        className={`absolute z-20 group text-white text-start h-full w-full inset-0 origin-center hover:h-full hover:w-full bg-[#0e0e0e00]   hover:bg-[#70707080]  flex flex-col px-6 pt-44 transition-all ${blur}  hover:justify-normal`}
      >
        <div className="transition-all absolute bottom-8  group-hover:bottom-[70%] text-xl md:text-2xl ">
          <h4 className="font-extrabold text-2xl mb-3 font-[Mulish]">{name}</h4>
          <p className="font-[Mulish] text-2xl">{position}</p>
        </div>
        <div
          className="opacity-0 transition-all mt-3 group-hover:opacity-100 "
        >
          <p
            className="font-[Mulish] text-base font-extralight cursor-default"
            style={{
              transitionBehavior: "allow-discrete",
            }}
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;
