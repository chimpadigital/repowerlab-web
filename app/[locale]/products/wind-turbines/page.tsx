import Paragraph from "@/atoms/Paragraph";
import HeroBreadcrumb from "@/components/HeroBreadcrumb";
import { title } from "@/components/primitives";

import { ArrowButtonIcon, DownloadIcon } from "@/components/icons";
import OurOffer from "@/components/pages/products/OurOffer";
import FeatureProducts from "@/components/pages/home/FeatureProducts";
import { useTranslations } from "next-intl";

export default function WindPage() {
  const t = useTranslations('WindTurbines.Hero')
  const breadcrumbs = [
    { label: t.raw("b1"), href: "/" },
    { label: t.raw("b2"), href: "none" },
    { label: t.raw("b3"), href: "/" },
  ];
  return (
    <>
      <section className="w-full px-6">
        <HeroBreadcrumb
          img="/images/product/wind-turbine-bg.png"
          breadcrumbs={breadcrumbs}
          objectPosition="bottom left"
        >
          <div className="flex md:justify-end text-white w-full pb-[40px] md:pb-0" >
            <div className="max-w-[500px] pt-4 md:pt-0">
              <h4 className={title({ size: "md" })}>{t("title")}</h4>
              <article className="hidden md:block">
                <Paragraph
                  text={t.raw("p")}
                  className="mt-6 hidden: md:block"
                ></Paragraph>
              </article>
              <p className="pt-4 md:hidden">
                {t('pM')}
              </p>
              <button className="flex w-full mt-6 max-w-[250px] mb-[35px] md:mb-0 relative overflow-hidden gap-3 items-center transition-all duration-[600] py-2 px-6 rounded-full  text-white  hover:max-w-[270px] ">
                <div className="w-full absolute h-full top-0 left-0 bg-[#272424]/40"></div>
                <span className="relative text-[16px] sm:text-[18px] whitespace-nowrap">{t("download")}</span>
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
      <section id="includes">
        <OurOffer />
      </section>

      <FeatureProducts />
    </>
  );
}
