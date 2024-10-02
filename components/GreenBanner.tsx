import React from "react";
import img from "@/public/images/greenBannerBg.png"

const GreenBanner = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full bg-[url(/images/greenBannerBg.png)] bg-no-repeat bg-right bg-cover md:bg-contain items-center flex px-7 pl-6 lg:pl-6 py-7 lg:py-24 lg:px-40 rounded-[20px] bg-primary text-white">
      {children}
    </div>
  );
};

export default GreenBanner;
