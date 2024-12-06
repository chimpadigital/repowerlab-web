"use client"

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Link } from '@/i18n/routing';
import { globalRoutes } from '@/utils/globalRoutes'
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { ArrowMenu } from '../../icons'
import { RepowerIcon } from './navicons'
import { usePathname } from 'next/navigation';
import { ScrollShadow } from "@nextui-org/react";
import { useTranslations } from 'next-intl';


export default function Menu({ active, setMenu }: { active: boolean, setMenu?: any }) {
  const [linkActve, setActive] = useState(0)
  const [isActive, setIsActive] = useState(false)
  const t = useTranslations("Navbar");
  const pathname = usePathname();



  useEffect(() => {
    setMenu(false);
  }, [pathname]); // Se activa cuando la ruta cambia

  return (
    <div data-lenis-prevent className='w-full h-[calc(100dvh)] fixed pointer-events lg:block hidden bg-menu bg-secondary left-0 top-0 z-40'
      style={{ transform: active ? 'translateX(0%)' : 'translateX(100%)', transition: "1500ms" }}
    >
      <Image fill quality={100} src="/images/bg-menu.webp" alt='menu' className='absolute top-0 bg-secondary translate-y-[1px] w-full z-10'></Image>
      <section className="w-full h-full flex flex-col justify-between relative z-30 items-center relative">
        <div className="flex justify-center w-full  absolute z-20 bottom-20">
          <div className="container px-6">
            <div className="text-accent">
              <RepowerIcon />
            </div>
            <p className="text-[17px] font-regular w-[300px] pt-4  text-primary">
              {t("paragraph")}
            </p>
          </div>
        </div>
        <div className="container px-6 mt-[100px] relative z-50 ">
          <div className="grid grid-cols-3 pt-[80px]">
            <div className="grid col-span-2 grid-cols-2">
              <div className="col-span-1 flex flex-col gap-8 pe-8 ">
                <div className="h-full flex items-end">
                </div>
              </div>
            </div>
            <div className='col-span-1 flex flex-col gap-4 ps-8 relative z-40 relative' >
              <div className="px-6 pb-10" >
                <ScrollShadow size={100} hideScrollBar className='scroll-smooth max-h-[60vh] min-h-[60vh]'>
                  {globalRoutes.map((item, index) => (
                    <div key={`item-${index}`} > {/* Use descriptive key with 'item' */}
                      {item.child ? (
                        <Accordion
                          selectionMode="single"
                          className="p-0"
                          key={`first-item-${index}`}
                          itemClasses={{
                            base: "pt-2 pb-2",
                            title: "cursor-pointer  select-none text-primary py-0 xl:text-[36px] text-[28px]",
                            trigger: "cursor-pointer  select-none text-primary pt-2 py-0 xl:text-[36px] text-[28px]",
                            indicator: "data-[open=true]:rotate-180"
                          }}
                        >
                          <AccordionItem
                            indicator={<ArrowMenu />}
                            title={t.raw(item.title)}>
                            <div className="flex flex-col gap-2">
                              {item.child.map((item2, index) => (
                                item2.child ? (
                                  <Accordion
                                    key={`item-2+${index}`}
                                    className="p-0"
                                    itemClasses={{
                                      title: "cursor-pointer  select-none text-primary text-[26px]",
                                      trigger: "cursor-pointer  select-none text-primary text-[26px]"
                                    }}
                                  >
                                    <AccordionItem
                                      indicator={<ArrowMenu />}
                                      aria-label={`Accordion ${index}`}
                                      title={t.raw(item2.title)}>
                                      <div className="flex flex-col gap-2">
                                        {
                                          item2.child.map((item3, index) => (
                                            <Link key={`link-${index}`} className='block cursor-pointer select-none text-primary text-[14px]' href={`/${item3.url}`}>
                                              {t(item3.title)}
                                            </Link>
                                          ))}
                                      </div>
                                    </AccordionItem>
                                  </Accordion>

                                ) : (

                                  <Link key={`link-${index}`} className='block cursor-pointer select-none text-primary text-[20px] xl:text-[22px]' href={`/${item2.url}`}>
                                    {t(item2.title)}
                                  </Link>
                                )
                              ))}
                            </div >
                          </AccordionItem>
                        </Accordion>
                      ) : (
                        <Link key={`link-${index}`} className='block leading-[1.2] pt-3 pb-3 cursor-pointer inline-block select-none text-primary xl:text-[36px] text-[28px]' href={`/${item.url}`}>
                          {t(item.title)}
                        </Link>
                      )}
                    </div>
                  ))}
                </ScrollShadow >
              </div >
            </div>

          </div>
        </div>

      </section>
    </div>
  )
}
