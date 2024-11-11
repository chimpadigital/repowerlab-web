import React from "react";

const IntroTextMobile = () => {
  return (
      <div className="flex flex-col px-6 md:px-20 md:hidden">
        <article
          className={`text-start text-[#444444] text-base md:text-[30px] `}
        >
          <p>
            <strong className="text-accent">RepowerLab</strong> is a pioneering
            company transforming the energy sector by providing innovative
            solutions for end-of-life energy assets,{" "}
            <strong className="text-accent">
              including decommissioning, repowering, retrofitting, recycling,
              and resale of renewable energy infrastructure.{" "}
            </strong>
          </p>
        </article>
      </div>
  );
};

export default IntroTextMobile;
