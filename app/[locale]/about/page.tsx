"use client";
import GreenBanner from "@/components/GreenBanner";
import HeroBreadcrumb from "@/components/HeroBreadcrumb";
import IntroText from "@/components/pages/about/IntroText";
import IntroTextMobile from "@/components/pages/about/IntroTextMobile";
import MapaMundial from "@/components/pages/about/MapaMundial";
import MeetOurTeam from "@/components/pages/about/MeetOurTeam";
import MisionVisionHistory from "@/components/pages/about/MisionVisionHistory";
import Partners from "@/components/pages/about/Partners";
import WhyChooseRepowerlab from "@/components/pages/about/WhyChooseRepowerlab";
import { button, title } from "@/components/primitives";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export default function AboutPage() {
  const t = useTranslations("About")
  return (
    <section className="overflow-x-clip">
      <div className="px-4 md:px-6">
        <HeroBreadcrumb
          breadcrumbs={[
            {
              label:  t.raw("Hero.b1"),
              href: "/",
            },
            {
              label: t.raw("Hero.b2"),
              href: "/about",
            },
          ]}
          img="/images/about/headerImgAbout.webp"
          objectPosition="center"
          position="left"
        >
          <div className="flex mt-[100px] md:mt-10">
            <h4 className={`text-white mr-auto text-left ${title()}`}>
             {t("Hero.heading")}
            </h4>
          </div>
        </HeroBreadcrumb>
      </div>
      <IntroText />
      <IntroTextMobile />
      <MisionVisionHistory />
      <MapaMundial />
      <WhyChooseRepowerlab />
      <MeetOurTeam />
      <div className="mt-[22] md:hidden">
        <Partners />
      </div>
      <div className="px-4 md:px-6 relative lg:-top-1 mt-10 md:mt-4">
        <GreenBanner>
          <div className="flex w-full flex-col lg:flex-row md:items-center gap-10">
            <div className="flex-1 gap-10 text-start flex items-center justify-between">
              <div className="flex-1">
                <h4 className={`${title()} !block mb-3 leading-none max-w-[50ch]`}>
                  {t("greenBanner.title")}{" "}
                  <span className={`${title()} leading-none text-secondary`}>
                    {t("greenBanner.highlightedTitle")}
                  </span>
                </h4>
                <p className="max-w-[40ch] font-light leading-tight mt-7 md:mt-14">
                  {t("greenBanner.paragraph")}
                </p>
              </div>
            </div>
            <div className="flex relative md:left-3 justify-center md:justify-start">
              <Link
                href="/about/contact-us"
                className={`scroll-smooth ${button({
                  whiteLine: true,
                })}`}
              >
                {t("greenBanner.button")}
              </Link>
            </div>
          </div>
        </GreenBanner>
      </div>
    </section>
  );
}
