import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarBrand,
} from "@nextui-org/navbar";

import NextLink from "next/link";
import LogoRepower from "@/atoms/Logo";

export const Navbar = () => {
  

  return (
    <NextUINavbar maxWidth="xl" isBlurred={false} classNames={{ base:  "mt-[20px] bg-transparent transition duration-[600ms] text-white w-full top-[0px] ", wrapper:"w-full !container" }} position="sticky">
      <NavbarContent className=" sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <LogoRepower />
          </NextLink>
        </NavbarBrand>
        
      </NavbarContent>

 
    </NextUINavbar>
  );
};
