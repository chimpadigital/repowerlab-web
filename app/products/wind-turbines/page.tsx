import Paragraph from "@/atoms/Paragraph";
import HeroBreadcrumb from "@/components/HeroBreadcrumb";
import { title } from "@/components/primitives";

import { ArrowButtonIcon } from "@/components/icons";
import OurOffer from "@/components/pages/products/OurOffer";
import FeatureProducts from "@/components/pages/home/FeatureProducts";

export default function WindPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Products", href: "" },
    { label: "Wind turbines", href: "/" },
  ];
  return (
    <>
      <section className="w-full px-6">
        <HeroBreadcrumb
          img="/images/product/wind-turbine-bg.png"
          breadcrumbs={breadcrumbs}
        >
          <div className="flex justify-end text-white w-full">
            <div className="max-w-[500px]">
              <h4 className={title({ size: "md" })}>Wind turbines</h4>
              <Paragraph text="RepowerLab provides wind turbines, both **unused and refurbished**, alongside **recycled materials** from decommissioned farms to support a circular economy. Our **Purchasing Support** offers expert advice and regulatory assistance, while **Installation Support** ensures smooth setup with project management and technical aid. Additionally, we offer **warehousing and logistics** services for efficient component handling." className="mt-6 "></Paragraph>
              <button className='w-full mt-6 max-w-[250px] relative overflow-hidden gap-4 items-center transition-all duration-[600] py-2 px-6 rounded-full  text-white flex justify-between hover:max-w-[270px]'>
                <div className="w-full absolute h-full top-0 left-0 bg-[#666262]/40">
                </div>
                <span className='relative text-[18px]'>Download brochure</span>

                <ArrowButtonIcon />


              </button>
            </div>
          </div>
        </HeroBreadcrumb>
      </section>

      <OurOffer />

      <FeatureProducts />
    </>
  );
}
