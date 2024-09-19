import CountryContactData from "@/components/CountryContactData";
import { Mail } from "@/components/icons";
import { button, subtitle, title } from "@/components/primitives";
import Link from "next/link";
import React from "react";
import flagUSA from "@/public/images/contact-us/flagUSA.png";
import flagColombia from "@/public/images/contact-us/flagColombia.png";
import flagSpain from "@/public/images/contact-us/flagSpain.png";

const ConnectToday = () => {
  return (
    <div className="flex text-left flex-col lg:flex-row container gap-10 mx-auto pb-20 lg:items-center pt-20">
      <article className="flex-1 flex flex-col md:flex-row lg:flex-col w-full justify-between lg:justify-normal">
        <div>
          <h3 className={`${title()} text-primary mb-3 !block`}>
            Connect Today
          </h3>
          <p className={`text-grey-600 max-w-[40ch] mb-8 font-light`}>
            Contact RepowerLab to explore our circular economy solutions and
            maximize the value of your energy assets.
          </p>
        </div>
        <div>
          <Link href={"#contact-us-form"} className={button()}>
            Connect now
          </Link>
          <div className="mt-8 flex gap-3 items-center text-primary">
            <Mail />
            <span>info@repowerlab.com</span>
          </div>
        </div>
      </article>
      <section className="flex-[2]">
        <CountryContactData
          address="2623 Fairfax Drive, Arlington, VA 22201(USA)"
          conutryImage={flagUSA}
          countryName="Usa"
          phone="(+1) 202-2715608"
        />
        <hr className="mt-6 mb-2 border border-[#BACCE6]" />
        <CountryContactData
          address="Balcon 98, 19192 Trijueque, Guadalajara, España"
          conutryImage={flagSpain}
          countryName="Spain"
          phone="+34 61 8680986"
        />
        <hr className="mt-6 mb-2 border border-[#BACCE6]" />
        <CountryContactData
          address="Avenida 4 Norte nº 6n-67 oficina 603 Edificio Siglo XXI, Cali, Colombia"
          conutryImage={flagColombia}
          countryName="Colombia"
          phone="57 310 6279422"
        />
      </section>
    </div>
  );
};

export default ConnectToday;
