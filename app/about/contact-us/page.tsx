"use client";
import ConnectToday from "@/components/ConnectToday";
import GreenBannerNewsLetter from "@/components/GreenBannerNewsLetter";
import { Mail } from "@/components/icons";
import Formulario from "@/components/pages/about/contact-us/Formulario";
import { title } from "@/components/primitives";
import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/react";
import Image from "next/image";
import { ReCaptchaProvider, useReCaptcha } from "next-recaptcha-v3";

const ContactUs = () => {
  const { executeRecaptcha } = useReCaptcha();

  return (
    <ReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_CLAVE_WEB_CAPTCHA}>
      <section className="contact-us w-full px-6">
        <div className="w-full  relative top-[-80px]">
          <div className="w-full relative flex justify-center overflow-hidden h-full min-h-[620px] px-6 rounded-[20px] pt-[100px]">
            <Image
              src="/images/contact-us/headerImgContactUs.webp"
              fill
              className="object-cover absolute z-0 object-bottom"
              alt="bg-hero"
              quality={100}
            />
            <div className="container w-full px-10">
              <div className="relative z-10 w-full h-full grid grid-cols-2">
                <div className="lg:col-span-1 col-span-2">
                  <Breadcrumbs
                    itemClasses={{
                      item: "text-white font-bold text-[18px] data-[current=true]:text-accent",
                      separator: "text-white/40",
                    }}
                  >
                    {[
                      {
                        label: "Home",
                        href: "/",
                      },
                      {
                        label: "Company",
                        href: "/about",
                      },
                      {
                        label: "Contact us",
                        href: "/about/contact-us",
                      },
                    ].map((el, index) => (
                      <BreadcrumbItem key={index} href={el.href}>
                        {el.label}
                      </BreadcrumbItem>
                    ))}
                  </Breadcrumbs>
                  <div className="text-start text-white mt-10">
                    <h4 className={title({ size: "md" })}>Contact us</h4>
                    <p className="mt-6 font-light w-[25ch]">
                      Feel free to use the contact form to reach out to us.
                    </p>
                    <div className="mt-8 flex gap-3 items-center fill-white text-white">
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
    </ReCaptchaProvider>
  );
};

export default ContactUs;
