"use client";
import GreenBanner from "@/components/GreenBanner";
import HeroBreadcrumb from "@/components/HeroBreadcrumb";
import IntroText from "@/components/pages/about/IntroText";
import MapaMundial from "@/components/pages/about/MapaMundial";
import MeetOurTeam from "@/components/pages/about/MeetOurTeam";
import MisionVisionHistory from "@/components/pages/about/MisionVisionHistory";
import WhyChooseRepowerlab from "@/components/pages/about/WhyChooseRepowerlab";
import { button, title } from "@/components/primitives";
import Link from "next/link";

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
      <IntroText />
      <MisionVisionHistory />
      <MapaMundial />
      <WhyChooseRepowerlab />
      <MeetOurTeam />
      <div className="px-6 relative lg:-top-10">
        <GreenBanner>
          <div className="flex w-full flex-col lg:flex-row md:items-center gap-10">
            <div className="flex-1 gap-10 text-start flex items-center justify-between">
              <div className="flex-1">
                <h4 className={`${title()} !block mb-3 max-w-[50ch]`}>
                  Join us on this journey to{" "}
                  <span className={`${title()} text-secondary`}>
                    transform wind energy assets and create a cleaner, greener
                    world.
                  </span>
                </h4>
                <p className="max-w-[40ch] font-light mt-14">
                  Together, we can achieve sustainable growth and make a lasting
                  impact on our planet.
                </p>
              </div>
            </div>
            <div className="flex relative left-3">
              <Link
                href="/about/contact-us"
                className={`scroll-smooth ${button({
                  whiteLine: true,
                })}`}
              >
                Connect
              </Link>
            </div>
          </div>
        </GreenBanner>
      </div>
    </section>
  );
}
