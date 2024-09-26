"use client";
import ConnectToday from "@/components/ConnectToday";
import GreenBanner from "@/components/GreenBanner";
import HeroBreadcrumb from "@/components/HeroBreadcrumb";
import { Mail } from "@/components/icons";
import Formulario from "@/components/pages/about/contact-us/Formulario";
import { button, title } from "@/components/primitives";
import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/react";
import Image from "next/image";
import React from "react";

const ContactUs = () => {
  return (
    <section className="contact-us w-full px-6">
      <div className="w-full  relative top-[-80px]">
        <div className="w-full relative flex justify-center overflow-hidden h-full min-h-[80vh] px-6 rounded-[20px] pt-[100px]">
          <Image
            src="/images/contact-us/headerImgContactUs.webp"
            fill
            className="object-cover absolute z-0 object-bottom"
            alt="bg-hero"
            quality={100}
          />
          <div className="container px-6">
            <div className="relative z-10 w-full h-full grid grid-cols-2">
              <div className="lg:col-span-1 col-span-2">
                <Breadcrumbs
                  itemClasses={{
                    item: "text-white font-bold text-[18px] data-[current=true]:text-accent",
                    separator: "text-white/40",
                  }}
                >
                  {["Home", "About Us", " Contact us"].map((el, index) => (
                    <BreadcrumbItem key={index}>{el}</BreadcrumbItem>
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
      <GreenBanner>
        <div className="flex w-full flex-col md:flex-row md:items-center gap-10">
          <div className="flex-1 text-start flex items-center justify-between">
            <div className="flex-1">
              <h4 className={`${title()} !block mb-3`}>Subscribe to</h4>
              <h4 className={`${title()} text-secondary !block mb-4 md:mb-10`}>
                Our Newsletter
              </h4>
              <p className="max-w-[52ch] font-light">
                Subscribe to our newsletter for the latest in circular economy
                solutions for the energy sector and stay ahead with our
                projects, services, and industry trends.
              </p>
            </div>
          </div>
          <form className="flex gap-4 flex-1 flex-col md:items-end xl:flex-row xl:gap-10">
            <input
              type="text"
              placeholder="Your mail address here"
              className="md:ml-auto rounded-full focus-within:outline-2 border-white border-2  focus:outline-none focus:border-accent  placeholder-gray-400 transition-all duration-300  bg-[#C5C5C5]/15 py-[10px] px-8 backdrop-blur-sm placeholder:text-white placeholder:font-light w-[80%]"
            />
            <button
              type="submit"
              className={`scroll-smooth ${button({
                whiteLine: true,
              })}`}
            >
              Subscribe
            </button>
          </form>
        </div>
      </GreenBanner>
    </section>
  );
};

export default ContactUs;
