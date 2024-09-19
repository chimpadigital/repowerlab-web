"use client";
import HeroBreadcrumb from "@/components/HeroBreadcrumb";
import ConnectToday from "@/components/pages/about/contact-us/ConnectToday";
import Formulario from "@/components/pages/about/contact-us/Formulario";
import React from "react";


const ContactUs = () => {


  return (
    <section className="contact-us w-full">
      <HeroBreadcrumb
        breadcrumbs={["Home", "About Us", " Contact us"]}
        img="/images/contact-us/wind-fans.webp"
      >
        <Formulario/>
      </HeroBreadcrumb>
      <ConnectToday/>
    </section>
  );
};

export default ContactUs;
