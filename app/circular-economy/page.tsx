import GreenBanner from "@/components/GreenBanner";
import HeroBreadcrumb from "@/components/HeroBreadcrumb";
import MolinoAnimation from "@/components/pages/circular-economy/MolinoAnimation";
import SolutionsAccordeon from "@/components/pages/circular-economy/SolutionsAccordeon";
import SolutionsCards from "@/components/pages/circular-economy/SolutionsCards";
import { button, title } from "@/components/primitives";
import Link from "next/link";
import React from "react";

const CircularEconomy = () => {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Circular Economy", href: "circular-economy" },
  ];

  return (
    <>
      <section className="w-full px-6">
        <HeroBreadcrumb
          img="/images/circular-economy/bg-hero.webp"
          breadcrumbs={breadcrumbs}
        >
          <div className="flex justify-end text-white w-full">
            <div className="max-w-[500px]">
              <h4
                className={`${title({ size: "md" })} max-w-[16ch] !inline-block`}
              >
                Circular Economy Business Model
              </h4>
              <p className="mt-6 font-light">
                At RepowerLab, we are dedicated to advancing the circular
                economy in the wind energy sector. Our comprehensive solutions
                span the entire lifecycle of wind turbines, ensuring that
                resources are used efficiently and sustainably. Explore our
                range of services designed to support repowering, refurbishing,
                and recycling of wind energy assets.
              </p>
            </div>
          </div>
        </HeroBreadcrumb>
      </section>
      <MolinoAnimation />
      <SolutionsCards />
      <SolutionsAccordeon />
      <div className="px-6">
        <GreenBanner>
          <div className="flex w-full flex-col lg:flex-row md:items-center ">
            <div className="flex-1 gap-10 text-start flex items-center justify-between">
              <div className="flex-1">
                <h4 className={`${title()} !block mb-3 max-w-[20ch] leading-[3rem]`}>
                  Join Us in Building a{" "}
                  <span className={`${title()} text-secondary`}>
                    Sustainable Future
                  </span>
                </h4>
                <p className="max-w-[100ch] font-light mt-6">
                  RepowerLab is at the forefront of promoting a circular economy
                  in the wind energy sector. By choosing our solutions, you
                  contribute to a more sustainable and efficient energy future.
                </p>
                <p className="max-w-[100ch] font-light mt-8">
                  Contact us to learn more about how we can support your wind
                  energy projects with innovative and sustainable solutions.
                </p>
              </div>
            </div>
            <div className="flex relative -left-3">
              <Link
                href="/about/contact-us"
                className={`scroll-smooth ${button({
                  whiteLine: true,
                })}`}
              >
                Connect
              </Link>
            </div>
          </div>
        </GreenBanner>
      </div>
    </>
  );
};

export default CircularEconomy;
