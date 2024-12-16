"use client"
import React, { useContext, useEffect, useState } from 'react'
import { CartIcon, CircularIcon, ContactIcon, HomeIcon, MenuICon } from './FixedIcons'
import { usePathname } from 'next/navigation'
import {Link} from '@/i18n/routing';
import MenuMobile from './MenuMobile'
import { MenuContext } from '@/app/[locale]/context/MenuMobileCtx';

export default function FixedMenu() { 
  const menuContext = useContext(MenuContext);

  // Verificar si el contexto es undefined
  if (!menuContext) {
    throw new Error('MenuContext debe ser usado dentro de un MenuProvider');
  }

  const [open, setOpen] = useState<boolean>(false)
  const pathname = usePathname()
  const bgNavStyle = {
    background: " rgba(129, 126, 126, 0.48)",
    backdropFilter: "blur(10px)",
  }

  const { show  } = menuContext


  return (
    <>
    <button
    style={{opacity:show ? 1: 0}}
        className="fixed bottom-[120px] md:bottom-4 right-4 bg-accent z-20 transition duration-[1.2s] rounded-full shadow-xl text-white w-12 h-12 flex items-center justify-center"
        id="backToTop"
      >
        <span>
          <svg
            width="13"
            height="8"
            viewBox="0 0 13 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.5192 7.18652C12.4598 7.3216 12.4087 7.45863 12.2874 7.55604C12.0612 7.73724 11.7489 7.74503 11.5215 7.56319C11.471 7.52292 11.425 7.47746 11.3797 7.43135C9.74064 5.76556 8.10159 4.09976 6.4651 2.43137C6.39101 2.35604 6.35332 2.34759 6.27348 2.42877C4.62868 4.10626 2.98133 5.78114 1.33398 7.45603C1.08551 7.70866 0.807647 7.76581 0.542564 7.61969C0.209772 7.4372 0.115874 6.98974 0.347104 6.6858C0.383514 6.63775 0.42631 6.59358 0.468468 6.55072C2.26529 4.72257 4.06211 2.89507 5.85956 1.06756C6.19683 0.724663 6.54239 0.725312 6.88157 1.07081C8.60302 2.82103 10.3238 4.5706 12.044 6.32082C12.2228 6.50266 12.4215 6.66892 12.5192 6.91765L12.5192 7.18652Z"
              fill="#1C4741"
            />
          </svg>
        </span>
      </button>
      <MenuMobile open={open} setOpen={setOpen} />
      <div className='fixed w-full bottom-6 left-0 px-4 z-[45] flex lg:hidden justify-center transition duration-600' style={{opacity:show ? 1: 0}}>
        <div className="w-full grid grid-cols-4 px-6 gap-4 justify-between rounded-[20px] py-4 text-white blurRepower" style={bgNavStyle}>
          <Link href="/" className='flex flex-col cols-span-1 block items-center gap-1 justify-center'>
            <HomeIcon />
            <small className={`font-bold text-[10px] transition ease duration-[600] ${(pathname == '/en' || pathname == '/es')  ? "block" : "hidden"}`}>Home</small>
          </Link>
          {/* <Link href="/marketplace" className='flex flex-col cols-span-1 block items-center gap-1 justify-center'>
            <CircularIcon />
            <small className={`font-bold text-[10px] transition ease duration-[600] ${pathname == '/circular-economy' ? "block" : "hidden"}`}>Circular</small>
          </Link> */}
          <Link href="/marketplace" className='flex flex-col cols-span-1 block items-center gap-1 justify-center'>
            <CartIcon />
            <small className={`font-bold text-[10px] transition ease duration-[600] ${(pathname == '/en/marketplace'  || pathname == '/es/marketplace') ? "block" : "hidden"}`}>Marketplace</small>
          </Link>
          <Link href="/about/contact-us" className='flex flex-col cols-span-1 block items-center gap-1 justify-center'>
            <ContactIcon />
            <small className={`font-bold text-[10px] transition ease duration-[600] ${(pathname == '/en/about/contact-us' || pathname == '/es/about/contact-us') ? "block" : "hidden"}`}>Contact</small>
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
