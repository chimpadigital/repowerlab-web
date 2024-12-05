"use client";
import React from "react";
// Lazy load del componente ProductsSwiper
const Hero = React.lazy(() => import("./Hero"));
const HeroMobile = React.lazy(() => import("./HeroMobile"));

export default function HeroContainer() {
   return (
    <>
      <div className="hidden lg:block">
        <Hero />
      </div>
      <div className="lg:hidden">
        <HeroMobile />
      </div>
    </>
  );
}
