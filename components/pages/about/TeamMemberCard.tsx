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
        }}
      ></div>
      <div
        style={{
          clipPath: "url(#clip-shape)",
        }}
        className="absolute z-20 group text-white text-start h-full w-full inset-0 origin-center hover:h-full hover:w-full bg-[#0e0e0e80]   hover:bg-[#70707080] hover:backdrop-blur-[9px] flex flex-col px-6 pt-16 pb-10 transition-all justify-end hover:justify-normal hover:pb-32"
      >
        <div className="transition-all  text-xl md:text-2xl ">
          <h4 className="font-extrabold text-2xl mb-3 font-[Mulish]">{name}</h4>
          <p className="font-[Mulish] text-2xl">{position}</p>
        </div>
        <div
          className="opacity-0 hidden group-hover:block scale-y-0 mt-3 group-hover:opacity-100 group-hover:scale-y-100 "
          style={{ transition: "display 200ms, padding 200ms" }}
        >
          <p className="font-[Mulish] text-base font-extralight cursor-default">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;
