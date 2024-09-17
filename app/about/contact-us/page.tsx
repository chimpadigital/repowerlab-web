import HeroBreadcrumb from "@/components/HeroBreadcrumb";
import { Input, RadioButton, TextArea } from "@/components/Inputs";
import React from "react";

const ContactUs = () => {
  return (
    <section className="contact-us w-full">
      <HeroBreadcrumb
        breadcrumbs={["Home", "About Us", " Contact us"]}
        img="/images/contact-us/wind-fans.webp"
      >
        <div className="w-full flex justify-end">
          <form action="" className="w-full flex flex-col gap-9" style={{
            width: "min(100%, 464px)"
          }}>
            <Input placeholder="Your Name" />
            <Input placeholder="Phone" />
            <Input placeholder="Your Email Adress" />
            <TextArea placeholder="Message" />
            <div className="flex gap-10 justify-center">
              <RadioButton label="Partner" />
              <RadioButton label="Client" />
              <RadioButton label="Talent" />
            </div>
            <p className="text-white font-medium text-sm">We will get back to you within 2 business days.</p>
          </form>
        </div>
      </HeroBreadcrumb>
    </section>
  );
};

export default ContactUs;
