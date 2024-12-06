"use client";
import GreenBanner from "@/components/GreenBanner";
import HeroBreadcrumb from "@/components/HeroBreadcrumb";
import MolinoAnimation from "@/components/pages/circular-economy/MolinoAnimation";
import SolutionsAccordeon from "@/components/pages/circular-economy/SolutionsAccordeon";
import SolutionsCards from "@/components/pages/circular-economy/SolutionsCards";
import { button, title } from "@/components/primitives";
import { Link } from "@/i18n/routing";
import { useWindowSize } from "@/utils/useResize";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import React from "react";

const CircularEconomy = () => {
  const t = useTranslations("CircularEconomy");
  const breadcrumbs = [
    { label: t.raw("b1"), href: "/" },
    { label: t.raw("b2"), href: "circular-economy" },
  ];

  const pathname = usePathname();
  const isDesktop = useWindowSize({});

  return (
    <>
      <section className="w-full px-4 md:px-6">
        <HeroBreadcrumb
          img="/images/circular-economy/bg-hero.webp"
          breadcrumbs={breadcrumbs}
        >
          <div className="flex justify-end text-white w-full">
            {isDesktop ? (
              <div className="max-w-[500px] ">
                <h1
                  className={`${title({ size: "md" })} max-w-[16ch] !inline-block`}
                >
                  {t("title")}
                </h1>
                <p className="mt-6 pb-10 md:pb-0">{t("p")}</p>
              </div>
            ) : (
              <div className="max-w-[500px] ">
                <h2
                  className={`${title({ size: "md" })} max-w-[16ch] !inline-block`}
                >
                  {t("titleM")}
                </h2>
                <p className="mt-6 pb-10 md:pb-0">{t("pM")}</p>
              </div>
            )}
          </div>
        </HeroBreadcrumb>
      </section>
      <MolinoAnimation />
      <SolutionsCards />
      <SolutionsAccordeon />
      <div className="px-4 md:px-6 ">
        <GreenBanner>
          <div className="flex w-full flex-col lg:flex-row md:items-center ">
            <div className="flex-1 gap-10 text-start flex items-center justify-between">
              <div className="flex-1">
                <h2
                  className={`${title()} md:block mb-3 hidden ${pathname.includes("/es") ? "max-w-[25ch]" : "max-w-[20ch]"}  leading-[3rem]`}
                >
                  {t("banner.title")}{" "}
                  <span className={`${title()} text-secondary`}>
                    {t("banner.title2")}
                  </span>
                </h2>
                <h2
                  className={`text-[20px] font-bold block md:hidden mb-3 leading-[2rem]`}
                >
                  {t("banner.titleM")}{" "}
                  <span className={` text-secondary`}>
                    {t("banner.title2M")}
                  </span>
                </h2>
                {isDesktop ? (
                  <>
                    <p className="max-w-[100ch] font-light mt-6">
                      {t("banner.p")}
                    </p>
                    <p className="max-w-[100ch] font-light mt-8">
                      {t("banner.p2")}
                    </p>
                  </>
                ) : (
                  <p className="max-w-[100ch] font-light text-[18px] mt-6 ">
                    {t("banner.pM")}
                  </p>
                )}
              </div>
            </div>
            <div className="flex relative justify-center md:justify-start mt-4 md:mt-0 -left-3">
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
