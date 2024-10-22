import React from "react";
import flagUSA from "@/public/images/contact-us/flagUSA.png";
import Image, { StaticImageData } from "next/image";
import { Location, Phone } from "./icons";

interface CountryContactDataProps {
  countryName: string;
  phone: string;
  address: string;
}

const CountryContactData = ({
  countryName,
  phone,
  address,
}: CountryContactDataProps) => {
  return (
    <div className="">
      <h4 className="text-primary text-2xl font-normal mb-2">{countryName}</h4>
      <div className="flex items-center gap-3 text-[#444444] mb-5">
        <div className="w-[18px]">
          <Phone />
        </div>
        <span>{phone}</span>
      </div>
      <div className="flex items-center gap-3 text-[#444444]">
        <div className="w-[18px]">
          <Location />
        </div>
        <span>{address}</span>
      </div>
    </div>
  );
};

export default CountryContactData;
