"use client"
import React, { useEffect, useState } from 'react'
import { CartIcon, CircularIcon, ContactIcon, HomeIcon, MenuICon } from './FixedIcons'
import { usePathname } from 'next/navigation'
import {Link} from '@/i18n/routing';
import MenuMobile from './MenuMobile'

export default function FixedMenu() {

  const [open, setOpen] = useState<boolean>(false)
  const pathname = usePathname()
  const bgNavStyle = {
    background: " rgba(129, 126, 126, 0.48)",
    backdropFilter: "blur(10px)",
  }




  return (
    <>
      <MenuMobile open={open} setOpen={setOpen} />
      <div className='fixed w-full bottom-6 left-0 px-4 z-[999] flex md:hidden justify-center'>
        <div className="w-full grid grid-cols-5 px-6 gap-4 justify-between rounded-[20px] py-4 text-white" style={bgNavStyle}>
          <Link href="/" className='flex flex-col cols-span-1 block items-center gap-1 justify-center'>
            <HomeIcon />
            <small className={`font-bold text-[10px] transition ease duration-[600] ${pathname == '/' ? "block" : "hidden"}`}>Home</small>
          </Link>
          <Link href="/marketplace" className='flex flex-col cols-span-1 block items-center gap-1 justify-center'>
            <CircularIcon />
            <small className={`font-bold text-[10px] transition ease duration-[600] ${pathname == '/marketplace' ? "block" : "hidden"}`}>Circular</small>
          </Link>
          <Link href="/circular-economy" className='flex flex-col cols-span-1 block items-center gap-1 justify-center'>
            <CartIcon />
            <small className={`font-bold text-[10px] transition ease duration-[600] ${pathname == '/circular-economy' ? "block" : "hidden"}`}>Marketplace</small>
          </Link>
          <Link href="/about/contact-us" className='flex flex-col cols-span-1 block items-center gap-1 justify-center'>
            <ContactIcon />
            <small className={`font-bold text-[10px] transition ease duration-[600] ${pathname == '/about/contact-us' ? "block" : "hidden"}`}>Contact</small>
          </Link>
          <div className='flex flex-col cols-span-1 block items-center gap-1 justify-center' onClick={() => { setOpen(!open) }}>
            <MenuICon />
            <small className={`font-bold text-[10px] transition ease duration-[600] ${open ? "block" : "hidden"}`}>Menu</small>
          </div>
        </div>
      </div >
    </>
  )
}
