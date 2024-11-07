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
    <div
      className="card-miembro relative font-[Mulish] overflow-hidden"
      style={{
        clipPath: "url(#clip-shape)",
      }}
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
        className={`absolute z-20 group text-white text-start h-full w-full inset-0 origin-center hover:h-full hover:w-full bg-[#0e0e0e00]  hover:bg-[#707070cc]  flex flex-col px-6 pt-2 md:pt-44 transition-all hover:backdrop-blur-[30px]  hover:justify-normal`}
      >
        <div className="transition-all absolute bottom-4 md:bottom-8 group-hover:bottom-[70%] text-xl md:text-2xl group-hover:opacity-0 md:group-hover:opacity-100">
          <h4 className="font-extrabold text-base md:text-2xl mb-1 md:mb-3 font-[Mulish]">
            {name}
          </h4>
          <p className="font-[Mulish] text-sm md:text-2xl max-w-[22ch]">
            {position}
          </p>
        </div>
        <div className="opacity-0 transition-all mt-3 group-hover:opacity-100 grou">
          <p
            className="font-[Mulish] text-sm md:text-base font-extralight cursor-default"
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
