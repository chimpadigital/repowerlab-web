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
      <CasedSection/>
    </>
  );
};

export default SuccessCases;
