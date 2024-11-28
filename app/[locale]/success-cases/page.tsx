import Paragraph from "@/atoms/Paragraph";
import HeroBreadcrumb from "@/components/HeroBreadcrumb";
import BlogList from "@/components/pages/success-cases/BlogList";
import CasedSection from "@/components/pages/success-cases/CasedSection";
import { title } from "@/components/primitives";
import { useTranslations } from "next-intl";
import React from "react";


const SuccessCases = () => {

  const t = useTranslations("SuccessCases")

  const breadcrumbs = [
    { label: t.raw("b1"), href: "/" },
    { label: t.raw("b2"), href: "/success-cases" },
  ];
  return (
    <>
      <section className="w-full px-4 md:px-6">
        <HeroBreadcrumb
          img="/images/success-cases/bg-hero.webp"
          breadcrumbs={breadcrumbs}
          position="left"
        >
          <div className="flex flex-col text-white h-full justify-center">
            <h4 className={`text-white mr-auto text-left ${title()}`}>
              {t("title")}
            </h4>
            <Paragraph className="mt-7 text-[20px] md:text-xl hidden md:block" text={t.raw("subtitle")}></Paragraph>
            <Paragraph className="mt-7 text-[18px] md:text-xl md:hidden" text={t.raw("subtitleM")}></Paragraph>
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
        <h2 className="text-primary font-bold text-[36px] mb-4 md:hidden">{t("title")}</h2>
        <Paragraph className="max-w-[73ch] text-center font-medium md:font-normal text-2xl text-primary hidden md:block" textAccent="text-accent font-medium" text={t.raw("p")}/>
        <Paragraph className="max-w-[73ch] text-center text-[20px] text-primary px-2 md:hidden" textAccent="text-accent font-bold" text={t.raw("pM")}/>
      </article>
      <BlogList />
    </>
  );
};

export default SuccessCases;
