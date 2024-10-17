"use client";
import React from "react";
import { Link } from "@nextui-org/link";
import Image from "next/image";
import Logo from "@/atoms/Logo";
import { subtitle } from "./primitives";
import { FacebookIcon, LinkedInIcon, TwitterIcon } from "./icons";

export default function Footer() {
  const linksMenu = [
    { label: "Services", url: "our-services" },
    {
      label: "Circular economy",
      child: [
        { label: "Our Business Model", url: "our-services" },
        { label: "This is how we work", url: "how-we-work" },
      ]
    },
    { label: "Marketplace", url: "marketplace" },
    {
      label: "Resources",
      child: [
        { label: "Success cases", url: "success-cases" },
      ]
    },
    {
      label: "About us",
      child: [
        { label: "Our company", url: "our-company" },
        { label: "Contact us", url: "about/contact-us" },
      ]
    },
  ];

  const linksProducts = [
    { label: "Unused wind turbines", url: "marketplace?type=windturbines" },
    { label: "Refurbished wind turbines", url: "marketplace?type=spareparts" },
    { label: "Used wind turbine", url: "marketplace?type=spareparts" },
    { label: "Wind turbine spare parts", url: "marketplace?type=spareparts" },
  ];

  return (
    <footer className="w-full flex items-center justify-center text-primary mt-4 px-6 min-h-[400px]  mb-8">
      <div className="relative flex justify-center flex-col items-center w-full h-full py-[40px] min-h-[400px] px-6">
        <div className="relative w-full flex justify-between pt-6 z-10">
          <div>
            <Logo />
          </div>
          <div>

            <div className="grid grid-cols-3 gap-12 ">
              <div className="md:grid-cols-1 grid-cols-3">
                <h5 className={subtitle({ colors: "primary" })}>Menu</h5>
                <div className="pt-[30px]">
                  <div className="flex flex-col ">
                    {linksMenu.map((el, i) => (
                      <>
                        {
                          el.child ?
                            <>
                              <div className="text-primary pt-[25px] text-[18px]">{el.label}</div>
                              <div className="flex flex-col pt-[10px] gap-[15px]">
                                {
                                  el.child.map((el2, j) => (
                                    <Link key={j} className="text-primary  text-[14px]" href={el2.url}>
                                      {el2.label}
                                    </Link>

                                  ))
                                }
                              </div>
                            </>
                            :
                            <Link key={i} className="text-primary pt-[25px] text-[18px]" href={el.url}>
                              {el.label}
                            </Link>

                        }
                      </>
                    ))}
                  </div >
                </div>
              </div>
              <div className="md:grid-cols-1 grid-cols-3">
                <h5 className={subtitle({ colors: "primary" })}>Products</h5>
                <div className="pt-[30px]">
                  <div className="flex flex-col">
                    {linksProducts.map((el, i) => (
                      <Link
                        key={i + "pro2"}
                        className="text-primary pt-[25px] text-[18px]"
                        href={el.url}
                      >
                        {el.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="md:grid-cols-1 grid-cols-3">
                <h5 className={subtitle({ colors: "primary" })}>Follow</h5>
                <div className="pt-[60px]">
                  <div className="flex flex-col gap-[30px] ps-6">
                    <Link className="text-primary fill-primary" href="">
                      <LinkedInIcon width={22} height={22} />
                    </Link>
                    <Link className="text-primary fill-primary" href="">
                      <TwitterIcon width={22} height={22} />
                    </Link>
                    <Link className="text-primary fill-primary" href="">
                      <FacebookIcon width={22} height={22} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full relative container z-10 flex justify-end">
          <Link
            href="mailto:info@repowerlab.com"
            className="text-[36px] font-light "
          >
            {" "}
            info@repowerlab.com
          </Link>
        </div>
        <Image
          quality={100}
          fill
          src={"/images/shared/Footer.png"}
          alt="footer"
          className="rounded-[25px] object-cover mx-auto h-full"
        ></Image>
      </div>
    </footer>
  );
}
