import { title } from "@/components/primitives";
import React from "react";
import image from "@/public/images/about/recursoOurTeam.webp";
import TeamMemberCard from "./TeamMemberCard";
import Partners from "./Partners";
import { useTranslations } from "next-intl";

const MeetOurTeam = () => {
  const t = useTranslations("About.team")
  return (
    <>
      <svg width="0" height="0">
        <clipPath id="clip-shape" clipPathUnits="objectBoundingBox">
          <path
            d="M0.0357,0.002 C0.0114,0.0028 0.0026,0.0158 0.0026,0.0297 
      C0.0026,0.0436 0.0026,0.9493 0.0026,0.9683 
      C0.0026,0.9873 0.0238,0.9953 0.0344,0.997 
      C0.2623,0.9967 0.7233,0.9962 0.7460,0.997 
      C0.7688,0.9978 0.7964,0.9848 0.8079,0.9782 
      L0.9743,0.8767 C0.9977,0.8623 0.9977,0.8399 0.9977,0.8287 
      V0.0307 C0.9977,0.0077 0.9748,0.0013 0.9638,0.001"
          />
        </clipPath>
      </svg>
      <section className="our-team lg:-top-6 relative px-[10px] md:px-6 ">
        <div className="rounded-[20px] bg-grey-100 py-10 md:py-40 bg-[url(/images/about/recursoOurTeam.webp)] bg-no-repeat bg-cover bg-left">
          <h4 className={`${title()} text-primary`}>{t("meet")}</h4>
          <div className="grid grid-cols-1 lg:grid-cols-2  min-[1366px]:grid-cols-3 min-[1666px]:grid-cols-4 justify-items-center  px-4 md:px-6 xl:px-14 gap-5 xl:gap-20 mx-auto flex-wrap py-5 md:pt-40">
            <TeamMemberCard
              image="/images/about/member-victoria.webp"
              description={t.raw("victoria.description")}
              position={t.raw("victoria.position")}
              name="Victoria Galeano "
         
            />
            <TeamMemberCard
              image="/images/about/member-alfonso.webp"
              name="Alfonso Alvaro"
              description={t.raw("alfonso.description")}
              position={t.raw("alfonso.position")}
            />
            <TeamMemberCard
              image="/images/about/member-fernando.webp"
              description={t.raw("fernando.description")}
              position={t.raw("fernando.position")}
              name="Fernando Garces "
        
            />
            <TeamMemberCard
              image="/images/about/member-david.webp"
              description={t.raw("ivan.description")}
              position={t.raw("ivan.position")}
              name="Iván David Rojas "
            />
          </div>
          <div className="hidden md:block">
            <Partners />
          </div>
        </div>
      </section>
    </>
  );
};

export default MeetOurTeam;
