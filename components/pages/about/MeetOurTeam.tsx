import { title } from "@/components/primitives";
import React from "react";
import image from "@/public/images/about/recursoOurTeam.webp";
import TeamMemberCard from "./TeamMemberCard";
import Partners from "./Partners";

const MeetOurTeam = () => {
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
      <section className="our-team lg:-top-6 relative px-6 ">
        <div className="rounded-[20px] bg-grey-100 py-40 bg-[url(/images/about/recursoOurTeam.webp)] bg-no-repeat bg-cover bg-left">
          <h4 className={`${title()} text-primary`}>Meet our Team</h4>
          <div className="grid grid-cols-1 lg:grid-cols-2  xl:grid-cols-3 2xl:grid-cols-4 justify-items-center px-6	xl:px-14 gap-5 xl:gap-20 mx-auto flex-wrap pt-40">
            <TeamMemberCard
              image="/images/about/member-victoria.webp"
              description="Residing in Virginia, US, Victoria has over 20 years of experience in sustainable finance. As the founder of PRISSMA and co-founder of RepowerLab, she has been instrumental in driving sustainability and decarbonization strategies for companies. Victoria's expertise includes developing ESG investment strategies, innovative climate finance products, and advising investors on renewable energy projects. She has received recognition as one of DC's Top 50 Women Leaders for two consecutive years."
              name="Victoria Galeano "
              position="Co-Founder & Managing Director of US"
            />

            <TeamMemberCard
              image="/images/about/member-alfonso.webp"
              description="Based in Madrid, Spain, Alfonso brings over 25 years of experience in logistics, wind farm repowering, and energy project development. His notable achievements include founding Repowering Solutions and overseeing the decommissioning of over 300 wind turbines in Europe. Alfonso has led various renewable energy projects, including onshore and offshore wind farms and solar photovoltaic power plants."
              name="Alfonso Alvaro"
              position="Co-Founder & Managing Director of EU"
            />

            <TeamMemberCard
              image="/images/about/member-fernando.webp"
              description="Operating from Cali, Colombia, Fernando has over 40 years of experience in business planning, management, and renewable energy development. As a founding partner in multiple ventures, Fernando has promoted over 4 GW of renewable energy projects. His dedication to environmental preservation and community engagement is evident in his active participation in social welfare initiatives, particularly through Rotary."
              name="Fernando Garces "
              position="Co-Founder & Managing Director of LATAM"
            />

            <TeamMemberCard
              image="/images/about/member-david.webp"
              description="A seasoned business and project developer in the  renewable energy sector, Iván has contributed to the successful development of over 1.5 GW. Moreover, Iván brings a vast experience within the wind energy industry, from the design of wind turbines, support structures and wind farms to the business development and project management of large-scale wind power in Latin America."
              name="Iván David Rojas "
              position="Business Development Manager"
            />
          </div>

          <Partners />
        </div>
      </section>
    </>
  );
};

export default MeetOurTeam;
