import React from "react";

interface TeamMemberCardProps {
  name: string;
  position: string;
  description: string;
  image: string;
}

const TeamMemberCard = ({
  name,
  position,
  description,
  image,
}: TeamMemberCardProps) => {
  return (
    <div className="card-miembro relative w-[376px] font-[Mulish] overflow-hidden">
      <div
        className="aspect-[376/554] bg-no-repeat bg-cover  after:absolute after:inset-0 after:bg-[#61616199] after:opacity-60 py-5 px-4"
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
        className="absolute z-20 group text-white text-start h-full w-full inset-0 origin-center hover:h-full hover:w-full bg-[#0e0e0e80]   hover:bg-[#70707080] hover:backdrop-blur-[9px] flex flex-col px-6 pt-44 transition-all  hover:justify-normal "
      >
        <div className="transition-all absolute bottom-8  group-hover:bottom-[70%] text-xl md:text-2xl ">
          <h4 className="font-extrabold text-2xl mb-3 font-[Mulish]">{name}</h4>
          <p className="font-[Mulish] text-2xl">{position}</p>
        </div>
        <div
          className="
           opacity-0 transition-all
         mt-3 group-hover:opacity-100  "
          // style={{ transition: "display 200ms, padding 200ms" }}
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
