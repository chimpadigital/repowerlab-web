"use client";
import HeroBreadcrumb from "@/components/HeroBreadcrumb";
import { button, title } from "@/components/primitives";
import React from "react";
import ScrollAccordion from "@/components/ScrollAccordion";
import ServicesList from "@/components/ServicesList";
import {
  bladeRecycling,
  decommissioning,
  inspection,
  repowering,
  resaleMaterials,
  resaleParts,
  retrofitting,
  warehousing,
} from "@/utils/ourServicesAccordeons";
import GreenBanner from "@/components/GreenBanner";
import { Link } from "@/i18n/routing";

export default function page() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/our-services" },
  ];

  return (
    <>
      <section className="w-full px-4 lg:px-6">
        <HeroBreadcrumb
          img="/images/our-services/bg-hero.webp"
          breadcrumbs={breadcrumbs}
        >
          <div className="flex justify-end text-white w-full">
            <div className="max-w-[500px]">
              <h4 className={title({ size: "md" })}>Services</h4>
              <p className="mt-6 font-light hidden md:block">
                RepowerLab offers a full range of services to maximize the value
                of your energy assets. From wind farm decommissioning and
                turbine retrofitting to resale, blade recycling, and expert
                installation support, we ensure precision, sustainability, and
                optimized performance at every stage.
              </p>
              <p className="mt-6 font-light md:hidden">
                RepowerLab offers full services to maximize energy assets,
                including decommissioning, retrofitting, resale, recycling, and
                installation support.
              </p>
            </div>
          </div>
        </HeroBreadcrumb>
      </section>
      <div className="mb-10">
        <ServicesList />
      </div>

      <section className="md:px-6 mb-14">
        <ScrollAccordion items={decommissioning} id="decommissioning" />
        <ScrollAccordion items={repowering} id="repowering" />
        <ScrollAccordion
          items={retrofitting}
          id="retrofitting"
          imgPosition="right"
        />
        <ScrollAccordion
          items={bladeRecycling}
          id="blade-recycling"
          imgPosition="right"
        />
        <ScrollAccordion items={inspection} id="inspection" />
        <ScrollAccordion items={resaleParts} id="resale-parts" />
        <ScrollAccordion
          items={resaleMaterials}
          id="resale-materials"
          imgPosition="right"
        />
        <ScrollAccordion
          items={warehousing}
          id="warehousing"
          imgPosition="right"
        />
      </section>

      <div className="px-4 md:px-6 relative lg:-top-1">
        <GreenBanner>
          <div className="flex w-full flex-col lg:flex-row md:items-center gap-10">
            <div className="flex-1 gap-10 text-start flex items-center justify-between">
              <div className="flex-1">
                <h4 className={`${title()} !block mb-3 max-w-[40ch]`}>
                  Join us on this journey to{" "}
                  <span className={`${title()} text-secondary`}>
                    transform wind energy assets and create a cleaner, greener
                    world.
                  </span>
                </h4>
                <p className="max-w-[40ch] font-light mt-1 md:mt-14">
                  Together, we can achieve sustainable growth and make a lasting
                  impact on our planet.
                </p>
              </div>
            </div>
            <div className="flex relative left-0 justify-center md:left-3 md:justify-normal">
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
}
