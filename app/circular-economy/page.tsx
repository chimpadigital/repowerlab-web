import HeroBreadcrumb from "@/components/HeroBreadcrumb";
import SolutionsCards from "@/components/pages/circular-economy/SolutionsCards";
import { title } from "@/components/primitives";
import React from "react";

const CircularEconomy = () => {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "circular Economy", href: "circular-economy" },
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
              <h4 className={`${title({ size: "md" })} max-w-[16ch] !inline-block`}>
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
      <SolutionsCards/>
    </>
  );
};

export default CircularEconomy;
