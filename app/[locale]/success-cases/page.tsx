import HeroBreadcrumb from "@/components/HeroBreadcrumb";
import BlogList from "@/components/pages/success-cases/BlogList";
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
            <p className="mt-7 text-sm md:text-xl">
              Welcome to the RepowerLab Success Cases
            </p>
          </div>
        </HeroBreadcrumb>
      </section>
      <CasedSection />
      <article
        className="grid place-items-center px-6 py-12 md:py-44 mt-2 bg-[url(/images/success-cases/bg-resourse.png)] md:bg-[url(/images/success-cases/bg-resourse.png),_url(/images/success-cases/bg-resourse2.png)] bg-no-repeat"
        style={{
          backgroundSize: "200px, 150px",
          backgroundPosition: "top left, bottom right",
        }}
      >
        <h2 className="text-primary font-bold text-[22px] mb-4">Success Cases</h2>
        <p className="max-w-[73ch] text-center font-medium md:font-normal text-2xl text-primary hidden md:block">
          We’ve dismantled, refurbished, and resold over 200 wind turbines
          through our marketplace. By 2025, we will have over 4,000 wind
          turbines ready for installation,{" "}
          <span className="text-accent font-medium">
            showcasing our commitment to sustainable energy and circular economy
            solutions
          </span>
        </p>

        <p className="max-w-[73ch] text-center text-base text-primary px-2">
          We’ve dismantled, refurbished, and resold over 200 turbines. By 2025,
          over 4,000 turbines will be ready for installation,{" "}
          <span className="text-accent font-medium">
            highlighting our dedication to sustainable energy and the circular
            economy.
          </span>
        </p>
      </article>
      <BlogList />
    </>
  );
};

export default SuccessCases;
