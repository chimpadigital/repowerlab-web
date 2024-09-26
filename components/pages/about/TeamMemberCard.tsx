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
    <div className="card-miembro relative w-[376px] ">
      <div
        className=" aspect-[376/500] bg-no-repeat bg-cover  after:absolute after:inset-0 after:bg-[#61616199] after:opacity-60 py-5 px-4"
        style={{
          clipPath: "url(#clip-shape)",
          backgroundImage: `url(${image})`,
        }}
      ></div>
      <div className="absolute z-20 group text-white text-start h-full w-full inset-0 origin-center hover:h-[140%] hover:translate-y-[-15%] hover:w-[110%] hover:translate-x-[-4.3%] hover:bg-[#616161B2] hover:backdrop-blur-sm flex flex-col px-10 pt-16 pb-5 transition-all justify-end hover:justify-normal hover:pb-32">
        <div className="transition-all group-hover:translate-y-0 -translate-x-4 group-hover:translate-x-0 text-xl md:text-2xl ">
          <h4 className="font-semibold mb-3">{name}</h4>
          <p>{position}</p>
        </div>
        <div
          className="opacity-0 hidden group-hover:block scale-y-0 mt-3 group-hover:opacity-100 group-hover:scale-y-100 "
          style={{ transition: "display 200ms, padding 200ms" }}
        >
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;
