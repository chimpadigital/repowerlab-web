"use client";
import { useWindowSize } from "@/utils/useResize";
import React from "react";
import SkeletonHero from "./SkeletonHero";
// Lazy load del componente ProductsSwiper
const Hero = React.lazy(() => import("./Hero"));
const HeroMobile = React.lazy(() => import("./HeroMobile"));

export default function HeroContainer() {
  const isDesktop = useWindowSize({});

  if (isDesktop === null) {
    return <SkeletonHero />;
  }

  return isDesktop ? <Hero /> : <HeroMobile />;
}
