"use client";
import HeroBreadcrumb from "@/components/HeroBreadcrumb";
import CompanyDescription from "@/components/pages/about/CompanyDescription";
import MapaMundial from "@/components/pages/about/MapaMundial";
import MeetOurTeam from "@/components/pages/about/MeetOurTeam";
import MisionVisionHistory from "@/components/pages/about/MisionVisionHistory";
import WhyChooseRepowerlab from "@/components/pages/about/WhyChooseRepowerlab";
import { title } from "@/components/primitives";

export default function AboutPage() {
  return (
    <section className="overflow-x-clip">
      <div className="px-6">
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
      </div>
      <CompanyDescription />
      <MisionVisionHistory />
      <MapaMundial />
      <WhyChooseRepowerlab/>
      <MeetOurTeam/>
    </section>
  );
}
