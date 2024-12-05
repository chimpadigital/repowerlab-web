"use client";
import HeroBreadcrumb from "@/components/HeroBreadcrumb";
import { button, title } from "@/components/primitives";
import React, { useEffect } from "react";
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
import { useTranslations } from "next-intl";

export default function ServicesContainer() {
  const t = useTranslations("Services");
  const breadcrumbs = [
    { label: t.raw("Hero.b1"), href: "/" },
    { label: t.raw("Hero.b2"), href: "/our-services" },
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
              <h4 className={title({ size: "md" })}>{t("Hero.title")}</h4>
              <p className="mt-6 font-light hidden md:block">
                {t("Hero.text")}
              </p>
              <p className="mt-6 font-light md:hidden">{t("Hero.textM")}</p>
            </div>
          </div>
        </HeroBreadcrumb>
      </section>
      <div className="mb-[19px]">
        <ServicesList />
      </div>

      <section className="md:px-6 pb-2 md:mb-14 px-4">
        <ScrollAccordion
          items={decommissioning}
          id="decommissioning"
          idDesktop="decommissioning-desk"
        />
        <ScrollAccordion
          items={repowering}
          id="repowering"
          idDesktop="repowering-desk"
        />
        <ScrollAccordion
          items={retrofitting}
          id="retrofitting"
          imgPosition="right"
          idDesktop="retrofitting-desk"
        />
        <ScrollAccordion
          items={bladeRecycling}
          id="blade-recycling"
          imgPosition="right"
          idDesktop="blade-recycling-desk"
        />
        <ScrollAccordion
          items={inspection}
          id="inspection"
          idDesktop="inspection-desk"
        />
        <ScrollAccordion
          items={resaleParts}
          id="resale-parts"
          idDesktop="resale-parts-desk"
        />
        <ScrollAccordion
          items={resaleMaterials}
          id="resale-materials"
          imgPosition="right"
          idDesktop="resale-materials-desk"
        />
        <ScrollAccordion
          items={warehousing}
          id="warehousing"
          imgPosition="right"
          idDesktop="warehousing-desk"
        />
      </section>

      <div className="px-4 md:px-6 relative lg:-top-1">
        <GreenBanner>
          <div className="flex w-full flex-col lg:flex-row md:items-center gap-10">
            <div className="flex-1 gap-10 text-start flex items-center justify-between">
              <div className="flex-1">
                <h4 className={`${title()} !block mb-3 max-w-[40ch]`}>
                  {t("greenBanner.title1")}{" "}
                  <span className={`${title()} text-secondary`}>
                    {t("greenBanner.title2")}
                  </span>
                </h4>
                <p className="max-w-[40ch] font-light mt-1 md:mt-14">
                  {t("greenBanner.p")}
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
