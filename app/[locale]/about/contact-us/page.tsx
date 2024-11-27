"use client";
import ConnectToday from "@/components/ConnectToday";
import GreenBannerNewsLetter from "@/components/GreenBannerNewsLetter";
import { Mail } from "@/components/icons";
import Formulario from "@/components/pages/about/contact-us/Formulario";
import { title } from "@/components/primitives";
import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";

const ContactUs = () => {
  const t = useTranslations("Contact")
  const locale = useLocale()
  return (
    <section className="contact-us w-full px-4 md:px-6">
      <div className="w-full  relative">
        <div className="w-full relative flex justify-center overflow-hidden h-full min-h-[620px] px-6 rounded-[20px] pt-[100px]">
          <Image
            src="/images/contact-us/headerImgContactUs.webp"
            fill
            className="object-cover absolute z-0 object-bottom"
            alt="bg-hero"
            quality={100}
          />
          <div className="bgMobileHero md:hidden"></div>
          <div className="w-full flex justify-center px-0 md:px-10 ">
            <div className="relative container 2xl:px-6 z-10 w-full h-full grid grid-cols-2 pt-6">
              <div className="lg:col-span-1 col-span-2 p-0 md:ps-6 ">
                <Breadcrumbs
                  className="hidden md:block"
                  itemClasses={{
                    item: "text-white font-bold text-[18px] data-[current=true]:text-accent ",
                    separator: "text-white/40",
                  }}
                >
                  {[
                    {
                      label: t.raw("b1"),
                      href: `/${locale}`,
                    },
                    {
                      label: t.raw("b2"),
                      href: `/${locale}/about`,
                    },
                    {
                      label: t.raw("b3"),
                      href: `/${locale}/about/contact-us`,
                    },
                  ].map((el, index) => (
                    <BreadcrumbItem key={index} href={el.href}>
                      {el.label}
                    </BreadcrumbItem>
                  ))}
                </Breadcrumbs>
                <div className="text-start text-white mt-0 md:mt-10">
                  <h4 className={title({ size: "md" })}>{t("title")}</h4>
                  <p className="mt-6 font-light w-[25ch]">
                    {t("sub")}
                  </p>
                  <div className="mt-8 hidden md:flex gap-3 items-center fill-white text-white">
                    <Mail />
                    <span>info@repowerlab.com</span>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-1 col-span-2 h-full flex items-center ">
                <Formulario />
              </div>
            </div>
          </div>
        </div>
      </div>
      <ConnectToday />
      <GreenBannerNewsLetter />
    </section>
  );
};

export default ContactUs;
