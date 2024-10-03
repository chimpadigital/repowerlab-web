"use client";
import React from "react";
import Image from "next/image";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";
import Link from "next/link";

interface HeroBreadcrumbI {
  img: string;
  breadcrumbs: {
    label: string;
    href: string;
  }[];
  position?: "right" | "left";
  children: React.ReactNode;
}

export default function HeroBreadcrumb({
  img,
  breadcrumbs,
  position = "right",
  children,
}: HeroBreadcrumbI) {
  return (
    <div className="w-full  relative top-[-80px]">
      <div className="w-full relative flex justify-center overflow-hidden h-full min-h-[620px] px-14 rounded-[20px] pt-[100px]">
        <Image
          src={img}
          fill
          className="object-cover absolute z-0"
          alt="bg-hero"
          quality={100}
        />
        <div className="w-full px-4">
          <div className="relative z-10 w-full h-full grid grid-cols-2">
            <div className="lg:col-span-1 col-span-2">
              <Breadcrumbs
                itemClasses={{
                  item: "text-white font-bold text-[18px] data-[current=true]:text-accent",
                  separator: "text-white/40",
                }}
              >
                {breadcrumbs.map((el, index) => (
                  <BreadcrumbItem href={el.href} key={index}>
                    {el.label}
                  </BreadcrumbItem>
                ))}
              </Breadcrumbs>
              {position == "left" && children}
            </div>
            <div className="lg:col-span-1 col-span-2 h-full flex items-center ">
              {position == "right" && children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
