"use client";
import React from "react";
import Image from "next/image";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";
import {Link} from '@/i18n/routing';

interface HeroBreadcrumbI {
  img: string;
  breadcrumbs?: {
    label: string;
    href: string;
  }[];
  position?: "right" | "left";
  objectPosition?: string;
  children: React.ReactNode;
}

export default function HeroBreadcrumb({
  img,
  breadcrumbs,
  position = "right",
  objectPosition = "top",
  children,
}: HeroBreadcrumbI) {
  return (
    <div className="w-full  relative pb-[65px] md:pb-[150px]">
      <div className="w-full relative flex justify-center overflow-hidden h-full min-h-[620px] rounded-[20px] pt-[150px]">
        <Image
          src={img}
          fill
          className="object-cover absolute z-0"
          style={{
            objectPosition
          }}
          alt="bg-hero"
          quality={100}
        />
        <div className="w-full flex justify-center">
          <div className="container px-6">
            <div className="relative z-10 w-full h-full grid grid-cols-2">
              <div className="lg:col-span-1 col-span-2 sm:ps-6">
                {
                  breadcrumbs &&
                  <Breadcrumbs
                    itemClasses={{
                      item: "text-white font-bold text-[18px] !opacity-100 data-[current=true]:underline data-[current=true]:underline-offset-[6px]",
                      separator: "text-white/40",
                    }}
                  >
                    {breadcrumbs.map((el, index) => (
                      <BreadcrumbItem isDisabled={el.href == "none"} href={el.href} key={index}>
                        {el.label}
                      </BreadcrumbItem>
                    ))}
                  </Breadcrumbs>
                }
                {position == "left" && children}
              </div>
              <div className="lg:col-span-1 col-span-2 h-full flex items-center ">
                {position == "right" && children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
