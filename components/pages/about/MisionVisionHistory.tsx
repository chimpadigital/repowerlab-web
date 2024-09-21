import { title } from "@/components/primitives";
import React from "react";

const MisionVisionHistory = () => {
  return (
    <div className="MisionVisionHistory flex container gap-24 mx-auto justify-center my-10">
      <div
        className="text-primary before:z-[-2] before:rounded-[20px] z-[3] bg-white cursor-default before:absolute before:h-full before:w-full before:bg-secondary before:-top-32 relative shadow-[0px_4px_4px_0px_#0000001A] py-10 px-4 rounded-[20px]"
        style={{ width: "min(100%, 374px)" }}
      >
        <h4 className={title()}>Our Mission</h4>
        <p className="mt-6">
          RepowerLab is dedicated to advancing the wind energy sector through
          innovative repowering, recycling, and sustainability solutions. Our
          mission is to maximize the lifespan and efficiency of wind turbines,
          reduce environmental impact, and support the circular economy,
          ensuring a sustainable and prosperous future for renewable energy.
        </p>
      </div>

      <div
        className="text-primary before:z-[-2] before:rounded-[20px] z-[3] bg-white cursor-default before:absolute before:h-full before:w-full before:bg-secondary before:-top-32 relative shadow-[0px_4px_4px_0px_#0000001A] py-10 px-4 rounded-[20px]"
        style={{ width: "min(100%, 374px)" }}
      >
        <h4 className={title()}>Our Vision</h4>
        <p className="mt-6">
          To lead the global transition to a sustainable energy future by being
          the foremost provider of repowering and recycling solutions for wind
          turbines, fostering environmental stewardship, economic efficiency,
          and innovation in the renewable energy industry.
        </p>
      </div>

      <div
        className="text-primary before:z-[-2] before:rounded-[20px] z-[3] bg-white cursor-default before:absolute before:h-full before:w-full before:bg-secondary before:-top-32 relative shadow-[0px_4px_4px_0px_#0000001A] py-10 px-4 rounded-[20px]"
        style={{ width: "min(100%, 374px)" }}
      >
        <h4 className={title()}>Our History</h4>
        <p className="mt-6">
          RepowerLab was borne as a spin-off of Repowering Solutions, a company
          with more than 15 years of experience in the dismantling,
          retrofitting, recycling, buying and selling of wind turbines in
          Europe. Today, with a global presence, we execute projects in 20
          countries through our three international offices.
        </p>
      </div>
    </div>
  );
};

export default MisionVisionHistory;
