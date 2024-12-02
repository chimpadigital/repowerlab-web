"use client";
import {
  FacebookIcon,
  LinkedInIcon,
  Mail,
  TwitterIcon,
} from "@/components/icons";
import { button, title } from "@/components/primitives";
import { Link } from "@/i18n/routing";
import React from "react";
import CountryContactData from "./CountryContactData";
import { useTranslations } from "next-intl";

const ConnectToday = () => {
  const t = useTranslations("Connect");
  return (
    <div className="flex text-left flex-col lg:flex-row pl-3 pr-6 md:px-16 gap-10 mx-auto pb-[21px] lg:pb-14 lg:items-center pt-[41px]">
      <article className="flex flex-[2] flex-col md:flex-row lg:flex-col w-full justify-between lg:justify-normal">
        <div className="">
          <h3 className={`${title()} text-primary mb-3 !block`}>
            {t("title")}
          </h3>
          <p className={`text-[#444444] hidden  md:block  max-w-[40ch] mb-8 `}>
            {t("p")}
          </p>
          <p
            className={`text-[#444444] md:hidden text-lg block max-w-[25ch] mb-8 font-light`}
          >
            {t("pM")}
          </p>
        </div>
        <div>
          <Link href={"/about/contact-us#contact-us-form"} className={button()}>
            {t("button")}
          </Link>
          <div className="mt-10 hidden md:flex gap-3 items-center fill-primary text-primary">
            <Mail />
            <span>info@repowerlab.com</span>
          </div>
          <div className="mt-10 hidden md:flex gap-3 items-center">
            <a
              className="fill-primary"
              target="_blank"
              href="https://www.linkedin.com/company/repowerlab-llc/"
            >
              <LinkedInIcon width={22} height={22} />
            </a>
            <a
              className="fill-primary"
              target="_blank"
              href="https://x.com/repowerlab"
            >
              <TwitterIcon width={22} height={22} />
            </a>
            {/* <Link className="fill-primary" target="_blank" href="">
              <FacebookIcon width={22} height={22} />
            </Link> */}
          </div>
        </div>
      </article>
      <section className="flex-[1.5]">
        <CountryContactData
          address={`2623 Fairfax Drive, Arlington, VA 22201(${t.raw("usa")})`}
          countryName={t.raw("usa")}
          phone="(+1) 202-2715608"
        />
        <hr className="my-6 border border-b-[#BACCE6]" />
        <CountryContactData
          address={`Balcon 98, 19192 Trijueque, Guadalajara, ${t.raw("spain")}`}
          countryName={t.raw("spain")}
          phone="+34 61 8680986"
        />
        <hr className="my-6 border border-b-[#BACCE6]" />
        <CountryContactData
          address="Avenida 4 Norte nº 6n-67 oficina 603 Edificio Siglo XXI, Cali, Colombia"
          countryName={t.raw("colombia")}
          phone="57 310 6279422"
        />
      </section>
    </div>
  );
};

export default ConnectToday;
