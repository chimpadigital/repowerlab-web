import React from 'react'
import Paragraph from "@/atoms/Paragraph";
import HeroBreadcrumb from "@/components/HeroBreadcrumb";
import { title } from "@/components/primitives";

import { ArrowButtonIcon } from "@/components/icons";
import SpareParts from '@/components/pages/products/SpareParts';
import Support from '@/components/pages/products/Support';
import Solutions from '@/components/pages/products/Solutions';
export default function page() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Products", href: "" },
    { label: "Wind turbines Parts", href: "/" },
  ];
  return (
    <>
      <section className="w-full px-6">
        <HeroBreadcrumb
          img="/images/product/wind-turbine-parts.png"
          breadcrumbs={breadcrumbs}
        >
          <div className="flex justify-end text-white w-full">
            <div className="max-w-[500px]">
              <h4 className={title({ size: "md" })}>Wind Turbines Spare Parts</h4>
              <Paragraph text="RepowerLab supplies a wide range of turbine parts to support maintenance and repair operations. Our inventory includes both new and refurbished components, ensuring that clients have access to the parts they need to keep their turbines running efficiently." className="mt-6 "></Paragraph>
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

      <SpareParts />
      <Support />
      <Solutions />
    </>
  )
}
