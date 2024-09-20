"use client";
import HeroBreadcrumb from "@/components/HeroBreadcrumb";
import { title } from "@/components/primitives";

export default function AboutPage() {
  return (
    <section>
      <HeroBreadcrumb
        breadcrumbs={["Home", "About Us"]}
        img="/images/about/headerImgAbout.webp"
        position="left"
      >
        <div className="flex mt-10">
          <h4 className={`text-white mr-auto text-left ${title()}`}>
            Our company
          </h4>
        </div>
      </HeroBreadcrumb>
    </section>
  );
}
