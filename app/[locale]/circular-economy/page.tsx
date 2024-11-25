import GreenBanner from "@/components/GreenBanner";
import HeroBreadcrumb from "@/components/HeroBreadcrumb";
import MolinoAnimation from "@/components/pages/circular-economy/MolinoAnimation";
import SolutionsAccordeon from "@/components/pages/circular-economy/SolutionsAccordeon";
import SolutionsCards from "@/components/pages/circular-economy/SolutionsCards";
import { button, title } from "@/components/primitives";
import {Link} from '@/i18n/routing';
import { useTranslations } from "next-intl";
import React from "react";

const CircularEconomy = () => {
  const t = useTranslations("CircularEconomy")
  const breadcrumbs = [
    { label: t.raw("b1"), href: "/" },
    { label: t.raw("b2"), href: "circular-economy" },
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
                {t("title")}
              </h4>
              <p className="mt-6 pb-10 md:pb-0">
                {t("p")}
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
                {t("banner.title")}{" "}
                  <span className={`${title()} text-secondary`}>
                  {t("banner.title2")}
                  </span>
                </h4>
                <p className="max-w-[100ch] font-light mt-6">
                {t("banner.p1")}
                </p>
                <p className="max-w-[100ch] font-light mt-8">
                {t("banner.p2")}
                </p>
              </div>
            </div>
            <div className="flex relative mt-4 md:mt-0 -left-3">
              <Link
                href="/about/contact-us"
                className={`scroll-smooth ${button({
                  whiteLine: true,
                })}`}
              >
                {t("banner.connect")}
              </Link>
            </div>
          </div>
        </GreenBanner>
      </div>
    </>
  );
};

export default CircularEconomy;
