import React from "react";
import GreenBanner from "./GreenBanner";
import { button, title } from "./primitives";

const GreenBannerNewsLetter = () => {
  return (
    <GreenBanner>
      <div className="flex w-full flex-col md:flex-row md:items-center gap-10">
        <div className="flex-1 text-start flex items-center justify-between">
          <div className="flex-1">
            <h4 className={`${title()} !block mb-3`}>Subscribe to</h4>
            <h4 className={`${title()} text-secondary !block mb-4 md:mb-10`}>
              Our Newsletter
            </h4>
            <p className="max-w-[52ch] font-light">
              Subscribe to our newsletter for the latest in circular economy
              solutions for the energy sector and stay ahead with our projects,
              services, and industry trends.
            </p>
          </div>
        </div>
        <form className="flex gap-4 flex-1 flex-col md:items-end xl:flex-row xl:gap-10">
          <input
            type="text"
            placeholder="Your mail address here"
            className="md:ml-auto rounded-full focus-within:outline-2 border-white border-2  focus:outline-none focus:border-accent  placeholder-gray-400 transition-all duration-300  bg-[#C5C5C5]/15 py-[10px] px-8 backdrop-blur-sm placeholder:text-white placeholder:font-light w-[80%]"
          />
          <button
            type="submit"
            className={`scroll-smooth ${button({
              whiteLine: true,
            })}`}
          >
            Subscribe
          </button>
        </form>
      </div>
    </GreenBanner>
  );
};

export default GreenBannerNewsLetter;
