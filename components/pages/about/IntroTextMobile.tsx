import React from "react";

const IntroTextMobile = () => {
  return (
    <div className="flex flex-col px-6 md:px-20 md:hidden">
      <article
        className={`text-start text-[#444444] text-base md:text-[30px] `}
      >
        <p>
          <strong className="text-accent">
            Leading innovation for end-of-life renewable energy.{" "}
          </strong>{" "}
          We turn end-of-life wind farms into valuable assets by dismantling,
          refurbishing, reselling and repurposing wind turbines.
        </p>
      </article>
    </div>
  );
};

export default IntroTextMobile;
