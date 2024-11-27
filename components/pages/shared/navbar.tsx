"use client"

import LogoRepower from "@/atoms/Logo";
import Menu from "./Menu";
import { useEffect, useState } from "react";
import { CloseIcon, MenuIcon, ProfileIcon, Cart } from "./navicons";
import { button } from "../../primitives";
import useScrollTop from "@/utils/useTopCheck";
import { Link } from '@/i18n/routing';
import LangChange from "../../LangChange";
import { useTranslations } from 'next-intl';


export const Navbar = () => {
  const [active, setActive] = useState(false)
  const { isAtTop, isAtBottom } = useScrollTop();



  const bgNavStyle = {
    background: " rgba(129, 126, 126, 0.48)",
    backdropFilter: "blur(10px)",
  }

  const t = useTranslations()

  return (
    <>
      <div className="sticky md:top-[40px] top-[20px] mt-[20px] mb-[-85px] lg:mb-[-100px] z-50 text-white w-full flex justify-center">
        <div className="container px-4 md:px-6">
          <div className="flex justify-center lg:justify-between">
            {
              active ?
                <div className={"gap-3 max-w-fit md:py-4 py-2 px-6 relative  transition-all duration-[600ms] rounded-full "} >
                  <div className="flex justify-between gap-1 items-center">
                    <Link className="flex justify-between md:justify-start block  items-center gap-1" href="/">
                      <LogoRepower className={`${active ? 'text-primary' : 'text-white'} w-[54%] md:w-[193px] transition-all duration-[600]`} />
                    </Link>
                    <div className="md:hidden flex gap-1 items-center">
                      <LangChange />
                      <ProfileIcon />
                    </div>
                  </div>
                </div>

                :
                <div className={`gap-3 max-w-fit md:py-4 py-2 px-6 relative  transition-all duration-[600ms] ${!isAtTop && "blurRepower"} rounded-full ${isAtBottom ? "opacity-0" : ""}`} style={!isAtTop ? bgNavStyle : {}}>
                  <div className="flex justify-between gap-1 items-center">
                    <Link className="flex justify-start justify-between md:justify-start block  items-center gap-1" href="/">
                      <LogoRepower className={`${active ? 'text-primary' : 'text-white'} w-[54%] md:w-[193px]  transition-all duration-[600]`} />
                    </Link>
                    <div className="md:hidden flex gap-1 items-center">
                      <LangChange />
                      <ProfileIcon />
                    </div>
                  </div>
                </div>
            }
            <div className="lg:flex hidden justify-end items-center w-full gap-4">

              {
                active
                  ?
                  <CloseIcon onClick={() => {
                    setActive(false);
                  }} className="cursor-pointer" />
                  :
                  <div className={`py-4 ${!isAtTop && "blurRepower"} px-6 rounded-full flex gap-4 relative transition-all duration-[600ms] overflow-hidden items-center`} style={!isAtTop ? bgNavStyle : {}}>
                    <LangChange />
                    <Link href={"/about/contact-us"} className={`${button({ whiteLine: true })}`}>Connect</Link>
                    <Cart />
                    <ProfileIcon />
                    <MenuIcon onClick={() => { setActive(true); }} className="cursor-pointer"></MenuIcon>
                  </div>
              }
            </div>
          </div>
        </div>

      </div>

      <Menu active={active} setMenu={() => { setActive(false) }}></Menu>

    </>
  );
};
