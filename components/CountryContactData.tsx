import React from "react";
import flagUSA from "@/public/images/contact-us/flagUSA.png";
import Image, { StaticImageData } from "next/image";
import { Location, Phone } from "./icons";

interface CountryContactDataProps {
  countryName: string;
  conutryImage: StaticImageData;
  phone: string;
  address: string;
}

const CountryContactData = ({
  countryName,
  conutryImage,
  phone,
  address,
}: CountryContactDataProps) => {
  return (
    <div>
      <div className="flex items-center gap-3">
        <Image
          alt={`Bandera de ${countryName}`}
          src={conutryImage}
          className="mt-2"
        />
        <h4 className="text-primary text-[3.5rem] font-light">{countryName}</h4>
      </div>
      <div className="flex items-center gap-3 text-grey-600 mb-3">
        <div className="w-[18px]">
          <Phone />
        </div>
        <span>{phone}</span>
      </div>
      <div className="flex items-center gap-3 text-grey-600">
        <div className="w-[18px]">
          <Location />
        </div>
        <span>{address}</span>
      </div>
    </div>
  );
};

export default CountryContactData;
