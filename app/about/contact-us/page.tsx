"use client";
import Button from "@/atoms/Button";
import HeroBreadcrumb from "@/components/HeroBreadcrumb";
import { Input, RadioButton, TextArea } from "@/components/Inputs";
import { Select, SelectItem, SelectSection } from "@nextui-org/react";
import React from "react";

const ContactUs = () => {
  const headingClasses =
    "flex w-full text-red bg-red-100 sticky top-1 z-20 py-1.5 px-2 shadow-small rounded-small";

  return (
    <section className="contact-us w-full">
      <HeroBreadcrumb
        breadcrumbs={["Home", "About Us", " Contact us"]}
        img="/images/contact-us/wind-fans.webp"
      >
        <div className="w-full flex justify-end pb-24 pt-24">
          <form
            action=""
            className="w-full flex flex-col gap-9 py-"
            style={{
              width: "min(100%, 464px)",
            }}
          >
            <Input placeholder="Your Name" />
            <Input placeholder="Phone" type="tel"/>
            <Input placeholder="Your Email Adress" type="email"/>
            <Select
              placeholder="Select subject"
              className="w-full"
              scrollShadowProps={{
                isEnabled: false,
              }}
              classNames={{
                trigger:
                  "bg-[#C5C5C5]/15 py-4 px-8 backdrop-blur-2xl border-white  transition-all border-2 rounded-full px-8 font-sans h-[60px] data-[hover=true]:bg-[#C5C5C5]/15 data-[open=true]:border-accent",
                value: "text-white font-medium text-[16px]",
                popoverContent: "bg-white text-[#777] p-0 rounded-[10px]",
                listbox:  "p-0",
                label:  "border border-4 border-solid border-red-100",
              }}  
              
              listboxProps={{
                itemClasses: {
                  base: [
                    "data-[hover=true]:bg-primary", 
                    "data-[selectable=true]:focus:bg-primary",     
                    "data-[selectable=true]:py-5" ,            
                    "data-[selectable=true]:px-8" ,            
                  ],
                },
              }}
            >
              <SelectItem key="Product">Product</SelectItem>
              <SelectItem key="Service">Service</SelectItem>
              <SelectItem key="Circular-economy">Circular economy</SelectItem>
              <SelectItem key="Other">Other</SelectItem>
            </Select>
            <TextArea placeholder="Message" />
            <div className="flex gap-10 justify-center">
              <RadioButton label="Partner" />
              <RadioButton label="Client" />
              <RadioButton label="Talent" />
            </div>

            <p className="text-white font-medium text-sm">
              We will get back to you within 2 business days.
            </p>
            <div className="mx-auto">
              <Button label="Send Message" />
            </div>
          </form>
        </div>
      </HeroBreadcrumb>
    </section>
  );
};

export default ContactUs;
