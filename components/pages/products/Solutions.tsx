"use client";
import React from "react";
import SolutionsCarrusel from "./solutions-carrusel/SolutionsCarrusel";
import { useTranslations } from "next-intl";

export default function Solutions() {
  const t = useTranslations("TurbineParts.Solutions");
  const services = [
    {
      id: 1,
      title: t.raw("titles.title1"),
      href: "/our-services#decommissioning",
      hrefDesk: "/our-services#decommissioning-desk",
    },
    {
      id: 2,
      title: t.raw("titles.title2"),
      href: "/our-services#repowering",
      hrefDesk: "/our-services#repowering-desk",
    },
    {
      id: 3,
      title: t.raw("titles.title3"),
      href: "/our-services#retrofitting",
      hrefDesk: "/our-services#retrofitting-desk",
    },
    {
      id: 4,
      title: t.raw("titles.title4"),
      href: "/our-services/#blade-recycling",
      hrefDesk: "/our-services/#blade-recycling-desk",
    },
    {
      id: 5,
      title: t.raw("titles.title5"),
      href: "/our-services#inspection",
      hrefDesk: "/our-services#inspection-desk",
    },
    {
      id: 6,
      title: t.raw("titles.title6"),
      href: "/our-services#resale-parts",
      hrefDesk: "/our-services#resale-parts-desk",
    },
    {
      id: 7,
      title: t.raw("titles.title7"),
      href: "/our-services#resale-materials",
      hrefDesk: "/our-services#resale-materials-desk",
    },
    {
      id: 8,
      title: t.raw("titles.title8"),
      href: "/our-services#warehousing",
      hrefDesk: "/our-services#warehousing-desk",
    },
  ];
  return <SolutionsCarrusel cards={services} />;
}
