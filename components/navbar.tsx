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

export const Navbar = () => {
  const [active, setActive] = useState(false)


  return (
    <>
      <NextUINavbar maxWidth="xl" isBlurred={false} classNames={{ base: "mt-[20px] bg-transparent z-50 transition duration-[900ms] text-white w-full top-[0px] ", wrapper: "w-full !px-6 !container" }} position="sticky">
        <NavbarContent className=" sm:basis-full" justify="start">
          <NavbarBrand as="li" className="gap-3 max-w-fit">
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
                <>
                  <button className={`${button({ whiteLine: true })}`}>Connect</button>
                  <Cart />
                  <ProfileIcon />
                  <MenuIcon onClick={() => { setActive(!active) }} className="cursor-pointer"></MenuIcon>
                </>
            }
          </div>
        </NavbarContent>
      </NextUINavbar>
      <Menu active={active} setMenu={() => { setActive(!active) }}></Menu>

    </>
  );
};
