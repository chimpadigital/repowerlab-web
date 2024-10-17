"use client"
import React from 'react'
import Image from 'next/image'
import { BreadcrumbItem, Breadcrumbs } from '@nextui-org/react'
import { title } from '@/components/primitives'
import { HowWorkI } from './data'

export default function Hero() {
  const breadcrumbs = [
    {
      label: "Home",
      href: ""
    },
    {
      label: "Circular economy",
      href: ""
    },
    {
      label: "This is how we work",
      href: ""
    }
  ]
  return (
    <div className="w-full px-8 items-center h-[400vh] relative flex-col w-full top-[-160px]">
      <div className="w-full sticky flex justify-center top-[50px] overflow-hidden min-h-[85vh]  bg-primary rounded-[20px] pt-[100px]">
        <Image src="/images/how-we-work/gradiente-radial.png" alt="" width={1500} height={900} className='w-full absolute right-[0px] top-0'></Image>
        <div className="container px-6 relative z-10 top-[-80px]">
          <Breadcrumbs
            itemClasses={{
              base: " pt-[120px]",
              item: "text-white font-bold text-[18px] data-[current=true]:underline underline-offset-4",
              separator: "text-white",
            }}
          >
            {breadcrumbs.map((el, index) => (
              <BreadcrumbItem href={el.href} key={index}>
                {el.label}
              </BreadcrumbItem>
            ))}
          </Breadcrumbs>
          <div className="grid grid-cols-2 h-full">
            <div className="col-span-2 flex justify-center">
              <h5 className={"text-center pt-12 " + title({ color: "white" })}>This is how we work</h5>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

const Circle = ({index, data}: {index:number, data: HowWorkI}) => {
  return  (
    <article className="w-[200px] h-[200px] rounded-full">

    </article>
  )
}

const Vector = () => {
  return (
    <></>

  )
}