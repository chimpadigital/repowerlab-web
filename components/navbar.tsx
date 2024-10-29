"use client"
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarBrand,
} from "@nextui-org/navbar";

import NextLink from "next/link";
import LogoRepower from "@/atoms/Logo";
import Menu from "./Menu";
import { useEffect, useState } from "react";
import { CloseIcon, MenuIcon, ProfileIcon, Cart } from "./navicons";
import { button } from "./primitives";
import useScrollTop from "@/utils/useTopCheck";
import { useDisableBodyScroll } from '@/utils/preventScroll'
import Link from "next/link";


export const Navbar = () => {
  const [active, setActive] = useState(false)
  const isTop = useScrollTop()



  const bgNavStyle = {
    background: " rgba(129, 126, 126, 0.48)",
    backdropFilter: "blur(10px)",
  }

  return (
    <>
      <div className="sticky top-[40px] mt-[20px] z-50 text-white w-full flex justify-center">
        <div className="container px-6">
          <div className="flex justify-between">
            <div className="gap-3 max-w-fit py-4 px-6 relative  transition-all duration-[600ms] rounded-full" style={!isTop ? bgNavStyle : {}}>

              <Link className="flex justify-start block  items-center gap-1" href="/">
                <LogoRepower className={`${active ? 'text-primary' : 'text-white'} transition-all duration-[600]`} />
              </Link>
            </div>
            <div className="flex justify-end items-center w-full gap-4">

              {
                active
                  ?
                  <CloseIcon onClick={() => {
                    setActive(!active);
                  }} className="cursor-pointer" />
                  :
                  <div className="py-4 px-6 rounded-full flex gap-4 relative transition-all duration-[600ms] overflow-hidden items-center" style={!isTop ? bgNavStyle : {}}>
                    <button className={`${button({ whiteLine: true })}`}>Connect</button>
                    <Cart />
                    <ProfileIcon />
                    <MenuIcon onClick={() => { setActive(!active); }} className="cursor-pointer"></MenuIcon>
                  </div>
              }
            </div>
          </div>
        </div>

      </div>
     
      <Menu active={active} setMenu={() => { setActive(!active) }}></Menu>

    </>
  );
};
