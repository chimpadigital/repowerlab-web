import React from "react";
import Paragraph from "@/atoms/Paragraph";
import HeroBreadcrumb from "@/components/HeroBreadcrumb";
import { title } from "@/components/primitives";

import { ArrowButtonIcon, DownloadIcon } from "@/components/icons";
import SpareParts from "@/components/pages/products/SpareParts";
import Support from "@/components/pages/products/Support";
import Solutions from "@/components/pages/products/Solutions";
export default function page() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Products", href: "none" },
    { label: "Wind turbines Parts", href: "/" },
  ];
  return (
    <>
      <section className="w-full px-6">
        <HeroBreadcrumb
          img="/images/product/wind-turbine-parts.png"
          breadcrumbs={breadcrumbs}
          objectPosition="bottom"
        >
          <div className="flex justify-end text-white w-full">
            <div className="max-w-[500px]">
              <h4
                className={`${title({ size: "md" })} max-w-[12ch] !inline-block`}
              >
                Wind Turbines Spare Parts
              </h4>
              <Paragraph
                text="RepowerLab supplies a wide range of turbine parts to support maintenance and repair operations. Our inventory includes both new and refurbished components, ensuring that clients have access to the parts they need to keep their turbines running efficiently."
                className="mt-6 hidden md:block"
              ></Paragraph>

              <Paragraph
                text=" RepowerLab offers a variety of turbine parts for maintenance and
                repairs. Our stock includes both new and refurbished items,
                ensuring clients get the parts needed to keep turbines running
                smoothly."
                className="mt-6 md:hidden"
              ></Paragraph>
              <button className="flex w-full mt-6 max-w-[250px] relative overflow-hidden gap-3 items-center transition-all duration-[600] py-2 px-6 rounded-full  text-white  hover:max-w-[270px]">
                <div className="w-full absolute h-full top-0 left-0 bg-[#272424]/40"></div>
                <span className="relative text-[18px]">Download brochure</span>
                <span className="fill-white md:hidden h-[18px] z-10">
                  <DownloadIcon />
                </span>
                <div className=" hidden md:block">
                  <ArrowButtonIcon />
                </div>
              </button>
            </div>
          </div>
        </HeroBreadcrumb>
      </section>

      <SpareParts />
      <Support />
      <Solutions />
    </>
  );
}
