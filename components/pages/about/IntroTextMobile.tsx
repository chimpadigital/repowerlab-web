"use client";
import React, { useEffect, useRef, useState } from "react";
import WordAnimated from "@/components/WordAnimated";
import autoAnimate from "@formkit/auto-animate";
import { ArrowRight } from "@/components/icons";

const IntroTextMobile = () => {
  const [readMore, setReadMore] = useState(false);

  const parent = useRef(null);

  useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, [parent]);

  const reveal = () => setReadMore(!readMore);

  return (
    <>
      <div className="flex flex-col px-6 md:px-20 md:hidden">
        <article
          className={`text-start text-[#444444] text-base md:text-[30px] `}
        >
          <p ref={parent}>
            <strong className="text-accent">RepowerLab</strong> is a pioneering
            company transforming the energy sector by providing innovative
            solutions for end-of-life energy assets,{" "}
            <strong className="text-accent">
              including decommissioning, repowering, retrofitting, recycling,
              and resale of renewable energy infrastructure.{" "}
            </strong>
            {readMore && (
              <>
                With extensive experience in decommissioning and managing over
                <strong className="text-accent"> 4 GW of renewable</strong>{" "}
                energy across the United States, Europe, Latin America, and
                Africa, our team has successfully dismantled, refurbished, and
                reinstalled turbines globally. This includes significant
                projects in countries like Germany, Austria, France, Italy,
                Spain, the UK, Chile, and Nicaragua, with ongoing projects in
                Italy and France focused on recycling. Our expertise in
                developing, financing, and operating global energy projects
                allows us to understand and navigate the evolving wind energy
                sector, managing emerging business and market risks associated
                with{" "}
                <strong className="text-accent">
                  the global energy transition.
                </strong>{" "}
                We are committed to sustainability and utilize advanced European
                recycling technologies to achieve high material recovery rates.
                By enhancing the performance and efficiency of energy assets,
                RepowerLab drives innovation, promotes environmental
                stewardship, and supports a sustainable, circular economy in the
                <strong className="text-accent">
                  {" "}
                  renewable energy industry.
                </strong>
              </>
            )}
          </p>
        </article>

        <button
          onClick={reveal}
          className="text-start cursor-pointer fill-primary stroke-primary flex gap-2 items-center font-semibold text-primary w-fit  mt-6"
        >
          {readMore ? "Read Less" : "Read More"} 
          <span className="h-[10px]">

          <ArrowRight />
          </span>
        </button>
      </div>
    </>
  );
};

export default IntroTextMobile;
