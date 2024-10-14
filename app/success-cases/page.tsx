import HeroBreadcrumb from "@/components/HeroBreadcrumb";
import CasedSection from "@/components/pages/success-cases/CasedSection";
import { title } from "@/components/primitives";
import React from "react";

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Success cases", href: "/success-cases" },
];

const SuccessCases = () => {
  return (
    <>
      <section className="w-full px-6">
        <HeroBreadcrumb
          img="/images/success-cases/bg-hero.webp"
          breadcrumbs={breadcrumbs}
          position="left"
        >
          <div className="flex flex-col text-white mt-10">
            <h4 className={`text-white mr-auto text-left ${title()}`}>
              Success cases
            </h4>
            <p className="mt-7 text-xl">
              Welcome to the RepowerLab Success Cases
            </p>
          </div>
        </HeroBreadcrumb>
      </section>
      <CasedSection />
      <article
        className="grid place-items-center px-6 py-44 my-10 bg-[url(/images/success-cases/bg-resourse.png)] bg-no-repeat"
        style={{
          backgroundSize: "200px",
        }}
      >
        <p className="max-w-[73ch] text-center font-light text-2xl text-[#7e7e7e]">
          We have dismantled, refurbished, and resold over 200 wind turbines
          through our marketplace. By 2025, we will have over 4,000 wind
          turbines ready for installation,{" "}
          <span className="text-secondary font-medium">
            showcasing our commitment to sustainable energy and circular economy
            solutions
          </span>
        </p>
      </article>
    </>
  );
};

export default SuccessCases;
