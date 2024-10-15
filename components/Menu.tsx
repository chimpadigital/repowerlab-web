"use client"
import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { globalRoutes } from '@/utils/globalRoutes'
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { ArrowMenu } from './icons'


export default function Menu({ active, setMenu }: { active: boolean, setMenu?: any }) {
  const [linkActve, setActive] = useState(0)
  const [isActive, setIsActive] = useState(false)
  const locale = "es"

  return (
    <div className='w-full h-[calc(100dvh)] fixed lg:block hidden bg-menu left-0 top-0 z-40'
      style={{ transform: active ? 'translateX(0%)' : 'translateX(100%)', transition: "1500ms" }}
    >
      <Image fill quality={100} src="/images/bg-menu.png" alt='menu' className='absolute translate-y-[1px] w-full z-10'></Image>
      <section className="w-full h-full flex flex-col justify-between relative items-center">
        <div className="container px-6 mt-[100px] relative z-20 ">
          <div className="grid grid-cols-3 pt-[80px]">
            <div className="grid col-span-2 grid-cols-2">
              <div className="col-span-1 flex flex-col gap-8 pe-8 ">
                <div className="h-full flex items-end">
                  <div className="flex-col">

                    <p className="text-md w-[400px] text-primary">
                      RepowerLab is a pioneering company transforming the wind energy sector by providing innovative solutions for end-of-life.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-span-1 flex flex-col gap-4 ps-8'>
              <div className="overflow-y-auto px-6">
                <div>
                  {globalRoutes.map((item, index) => (
                    <div key={`item-${index}`}> {/* Use descriptive key with 'item' */}
                      {item.child ? (
                        <Accordion
                          className="p-0"
                          key={`first-item-${index}`}
                          itemClasses={{
                            title: "cursor-pointer  select-none text-primary  text-[36px]",
                            trigger: "cursor-pointer  select-none text-primary  text-[36px]"
                          }}
                        >
                          <AccordionItem
                            indicator={<ArrowMenu />}
                            aria-label={`Accordion ${index}`}
                            title={(item.title)}>
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
                                      title={(item2.title)}>
                                      <div className="flex flex-col gap-2">
                                        {
                                          item2.child.map((item3, index) => (
                                            <Link key={`link-${index}`} className='cursor-pointer py-2  select-none text-primary text-[14px]' href={item3.url?.includes("http") ? item3.url : `/${locale}/${item3.url}` || "#"}>
                                              {(item3.title)}
                                            </Link>
                                          ))}
                                      </div>
                                    </AccordionItem>
                                  </Accordion>

                                ) : (

                                  <Link key={`link-${index}`} className='cursor-pointer py-2  select-none text-primary text-[26px]' href={item2.url?.includes("http") ? item2.url : `/${locale}/${item2.url}` || "#"}>
                                    {(item2.title)}
                                  </Link>
                                )
                              ))}
                            </div >
                          </AccordionItem>
                        </Accordion>
                      ) : (
                        <Link key={`link-${index}`} className='cursor-pointer inline-block	 pt-2 select-none text-primary text-[36px]' href={item.url?.includes("http") ? item.url : `/${locale}/${item.url}` || "#"}>
                          {(item.title)}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>

      </section>
    </div>
  )
}
