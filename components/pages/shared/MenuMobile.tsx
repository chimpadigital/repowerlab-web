"use client"

import React, { useEffect } from 'react'
import Image from 'next/image'
import { Link } from '@/i18n/routing';
import { globalRoutes } from '@/utils/globalRoutes'
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { ArrowMenu } from '../../icons'
import { usePathname } from 'next/navigation';
import LogoRepower from '@/atoms/Logo'
import { CloseIcon } from './FixedIcons'
export default function MenuMobile({ open, setOpen }: { open: boolean, setOpen?: any }) {

    const pathname = usePathname();

    useEffect(() => {
        setOpen(false);
    }, [pathname]); // Se activa cuando la ruta cambia


    return (
        <div className="fixed w-screen md:hidden left-0 top-0 z-[1000] block h-screen" style={{ transform: open ? 'translateX(0%)' : 'translateX(100%)', transition: "1500ms" }}>
            <Image fill quality={100} src="/images/shared/menudesplegable.png" alt='menu' className='absolute object-cover top-0 bg-secondary w-full z-10'></Image>
            <div className="relative text-primary flex justify-between py-8 px-6 z-10 items-center">
                <LogoRepower />
                <CloseIcon onClick={() => { setOpen(false) }} />
            </div>
            {globalRoutes.map((item, index) => (
                <div key={`item-${index}`} className='z-10 relative mt-6 md:mt-0 px-12'> {/* Use descriptive key with 'item' */}
                    {item.child ? (
                        <Accordion
                            selectionMode="single"
                            className="p-0 gap-4"
                            key={`first-item-${index}`}
                            itemClasses={{
                                title: "cursor-pointer  select-none text-primary   text-[20px]",
                                trigger: "cursor-pointer  select-none text-primary  text-[20px]",
                                indicator: "data-[open=true]:rotate-180"
                            }}
                        >
                            <AccordionItem
                                indicator={<ArrowMenu />}
                                title={(item.title)}>
                                <div className="flex flex-col">
                                    {item.child.map((item2, index) => (
                                        item2.child ? (
                                            <Accordion
                                                key={`item-2+${index}`}
                                                className="p-0"
                                                itemClasses={{
                                                    title: "cursor-pointer  select-none text-primary text-[20px]",
                                                    trigger: "cursor-pointer  select-none text-primary text-[20px]"
                                                }}
                                            >
                                                <AccordionItem
                                                    indicator={<ArrowMenu />}
                                                    aria-label={`Accordion ${index}`}
                                                    title={(item2.title)}>
                                                    <div className="flex flex-col gap-2">
                                                        {
                                                            item2.child.map((item3, index) => (
                                                                <Link key={`link-${index}`} className='block cursor-pointer  select-none text-primary text-[14px]' href={`/${item3.url}`}>
                                                                    {(item3.title)}
                                                                </Link>
                                                            ))}
                                                    </div>
                                                </AccordionItem>
                                            </Accordion>

                                        ) : (

                                            <Link key={`link-${index}`} className='block cursor-pointer   select-none text-primary py-[1rem] text-[20px] ' href={`/${item2.url}`}>
                                                {(item2.title)}
                                            </Link>
                                        )
                                    ))}
                                </div >
                            </AccordionItem>
                        </Accordion>
                    ) : (
                        <Link key={`link-${index}`} className='block cursor-pointer inline-block	select-none text-primary  text-[20px]' href={`/${item.url}`}>
                            {(item.title)}
                        </Link>
                    )}
                </div>
            ))}
        </div>
    )
}
