import React from "react";
import Paragraph from "@/atoms/Paragraph";
import HeroBreadcrumb from "@/components/HeroBreadcrumb";
import { title } from "@/components/primitives";

import { ArrowButtonIcon, DownloadIcon } from "@/components/icons";
import SpareParts from "@/components/pages/products/SpareParts";
import Support from "@/components/pages/products/Support";
import Solutions from "@/components/pages/products/Solutions";
import { useTranslations } from "next-intl";

import { Metadata } from "next";
import { metadataWindTurbineParts } from "@/app/getMetaData";

export async function generateMetadata({ params: { locale } }: any): Promise<Metadata> {
  return metadataWindTurbineParts(locale);
}

export default function page() {
  const t = useTranslations("TurbineParts")
  const breadcrumbs = [
    { label: t.raw("Hero.b1"), href: "/" },
    { label: t.raw("Hero.b2"), href: "none" },
    { label: t.raw("Hero.b3"), href: "/" },
  ];
  return (
    <>
      <section className="w-full px-4 md:px-6">
        <HeroBreadcrumb
          img="/images/product/wind-turbine-parts.png"
          breadcrumbs={breadcrumbs}
          objectPosition="bottom"
        >
          <div className="flex justify-end text-white w-full">
            <div className="max-w-[500px]">
              <h4
                className={`${title({ size: "md" })} max-w-[12ch] md:max-w-full !inline-block`}
              >
                {t("Hero.title")}
              </h4>
              <Paragraph
                text={t.raw("Hero.p")}
                className="mt-6 hidden md:block"
              ></Paragraph>

              <Paragraph
                text={t.raw("Hero.pM")}
                className="mt-6 md:hidden"
              ></Paragraph>
              <button className="flex w-fit mt-6 max-w-[250px] mb-[35px] md:mb-0 relative overflow-hidden gap-3 items-center transition-all duration-[600] py-2 px-6 rounded-full  text-white  hover:max-w-[270px]">
                <div className="w-full absolute h-full top-0 left-0 bg-[#272424]/40"></div>
                <span className="relative text-[16px] sm:text-[18px] whitespace-nowrap">{t("Hero.download")}</span>
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
