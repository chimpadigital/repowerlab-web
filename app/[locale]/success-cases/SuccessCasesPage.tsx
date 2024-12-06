"use client";
import Paragraph from "@/atoms/Paragraph";
import HeroBreadcrumb from "@/components/HeroBreadcrumb";
import BlogList from "@/components/pages/success-cases/BlogList";
import CasedSection from "@/components/pages/success-cases/CasedSection";
import { breadcrumbs } from "@nextui-org/theme";
import { useTranslations } from "next-intl";
import React from "react";
import { title } from "@/components/primitives";
import { useWindowSize } from "@/utils/useResize";

const SuccessCasesPage = () => {
  const t = useTranslations("SuccessCases");

  const breadcrumbs = [
    { label: t.raw("b1"), href: "/" },
    { label: t.raw("b2"), href: "/success-cases" },
  ];

  const isDesktop = useWindowSize({
    customSize: 768,
  });
  return (
    <>
      <section className="w-full px-4 md:px-6">
        <HeroBreadcrumb
          img="/images/success-cases/bg-hero.webp"
          breadcrumbs={breadcrumbs}
          position="left"
        >
          <div className="flex flex-col text-white h-full justify-center">
            <h1 className={`text-white mr-auto text-left ${title()}`}>
              {t("title")}
            </h1>
            {isDesktop ? (
              <Paragraph
                className="mt-7 text-[20px] md:text-xl"
                text={t.raw("subtitle")}
              ></Paragraph>
            ) : (
              <Paragraph
                className="mt-7 text-[18px] md:text-xl"
                text={t.raw("subtitleM")}
              ></Paragraph>
            )}
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
        <h2 className="text-primary font-bold text-[36px] mb-4 md:hidden">
          {t("title")}
        </h2>
        {isDesktop ? (
          <Paragraph
            className="max-w-[73ch] text-center font-medium md:font-normal text-2xl text-primary"
            textAccent="text-accent font-medium"
            text={t.raw("p")}
          />
        ) : (
          <Paragraph
            className="max-w-[73ch] text-center text-[20px] text-primary px-2"
            textAccent="text-accent font-bold"
            text={t.raw("pM")}
          />
        )}
      </article>
      <BlogList />
    </>
  );
};

export default SuccessCasesPage;
