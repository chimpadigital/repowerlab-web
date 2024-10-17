"use client"
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarBrand,
} from "@nextui-org/navbar";

import NextLink from "next/link";
import LogoRepower from "@/atoms/Logo";
import Menu from "./Menu";
import { useState } from "react";
import { CloseIcon, MenuIcon, ProfileIcon, Cart } from "./navicons";
import { button } from "./primitives";
import useScrollTop from "@/utils/useTopCheck";

export const Navbar = () => {
  const [active, setActive] = useState(false)
  const isTop = useScrollTop()

  const bgNavStyle= {
    background: " rgba(129, 126, 126, 0.48)",
    backdropFilter: "blur(10px)",
  }

  return (
    <>
      <NextUINavbar maxWidth="xl" isBlurred={false} classNames={{ base: "mt-[20px] bg-transparent z-50 transition duration-[900ms] text-white w-full top-[40px] ", wrapper: "w-full !px-6 !container" }} position="sticky">
        <NavbarContent className=" sm:basis-full" justify="start">
          <NavbarBrand as="li" className="gap-3 max-w-fit py-4 px-6  transition-all duration-[600ms] rounded-full" style={!isTop ? bgNavStyle : {}}>
            <NextLink className="flex justify-start items-center gap-1" href="/">

              <LogoRepower className={`${active ? 'text-primary' : 'text-white'} transition-all duration-[600]`} />
            </NextLink>
          </NavbarBrand>
          <div className="flex justify-end items-center w-full gap-4">

            {
              active
                ?
                <CloseIcon onClick={() => { setActive(!active) }} className="cursor-pointer" />
                :
                <div className="py-4 px-6 rounded-full flex gap-4 relative transition-all duration-[600ms] overflow-hidden items-center" style={!isTop ? bgNavStyle : {}}>
                  <button className={`${button({ whiteLine: true })}`}>Connect</button>
                  <Cart />
                  <ProfileIcon />
                  <MenuIcon onClick={() => { setActive(!active) }} className="cursor-pointer"></MenuIcon>
                </div>
            }
          </div>
        </NavbarContent>
      </NextUINavbar>
      <Menu active={active} setMenu={() => { setActive(!active) }}></Menu>

    </>
  );
};
