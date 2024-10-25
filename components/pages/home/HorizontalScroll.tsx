"use client"
import { title } from '@/components/primitives'
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FifthIcon, FirstIcon, FourdIcon, SecondIcon, ThirdIcon } from './iconsHome'
const array = [
  {
    title: "Value Recovery Assessment",
    description: "Helping sellers assess the value of their turbines and parts to maximize returns.",
    icon: FirstIcon
  },
  {
    title: "Dismantling and Transportation",
    description: "Managing the safe and efficient dismantling and transport of turbines and parts.",
    icon: SecondIcon
  },
  {
    title: "Buyer Support",
    description: "Assisting buyers in selecting the right turbines and parts, ensuring they meet their project requirements and regulatory standards.",
    icon: ThirdIcon
  },
  {
    title: "Inspection and Quality Assurance",
    description: "Providing thorough inspections and quality assurance to ensure all products meet the highest standards.",
    icon: FourdIcon
  },
  {
    title: "Sales Process Management",
    description: "Facilitating the sale from initial consultation through to final delivery and installation.",
    icon: FifthIcon
  },
]
export default function HorizontalScroll() {

  const ref = useRef<any>()
  const { scrollYProgress } = useScroll(
    { target: ref }
  )
  const x = useTransform(scrollYProgress, [0, 1], [0, array.length])

  return (
    <div ref={ref} className='w-full relative bg-[url(/images/home/apart.png)] bg-fixed bg-bottom bg-no-repeat bg-cover' style={{ height: `${array.length * 2 * 100}vh` }}>
      <div className="sticky top-0 h-screen w-full">
        <div className='absolute w-full rounded-[20px] h-full z-[1]' style={{
          background: "linear-gradient(181deg, rgba(75, 100, 128, 0.70) 20.44%, rgba(121, 135, 153, 0.48) 59.9%, rgba(255, 255, 255, 0.00) 77.53%)"
        }}></div>
        {/* <Image src="/images/home/apart.png" width="1500" height="1900" quality={100} alt="bgsetapart" className='bg-fixed absolute w-full z-0 object-cover h-screen w-full rounded-[20px]'></Image> */}

        <div className="flex  flex-col pt-[100px] gap-8 h-full w-full items-center relative z-[3]">
          <div className="w-full flex justify-center">
            <div className="max-w-[800px] flex gap-[40px] pt-[40px]">
              <h3 className={title({ size: "md", color: "white" }) + " min-w-[330px]"}>What sets us apart</h3>
              <p className="text-white">At Repowerlab, we lead in innovation, sustainability, and compliance, setting new standards in the energy sector.</p>
            </div>
          </div>
          <div className="flex px-6 container justify-center gap-6 pt-7">
            {
              array.map((el, index) => (
                <Card {...el} index={index} key={index} x={x} >
                  <el.icon />
                </Card>
              ))
            }
          </div>

        </div>
      </div>
    </div>
  )
}



const Card = ({ index, title, description, x, children }: any) => {
  const width = useTransform(x, [index, index + 1, index + 1.3, index + 2], [128, 380, 380, 128])
  const opacity3 = useTransform(x, [index + .5, index + 1, index + 1.3, index + 1.6], [0, 1, 1, 0])
  const rotate = useTransform(x, [index, index + .8, index + 1.3, index + 2], [-90, 0, 0, -90])
  const bottom = useTransform(x, [index, index + .8, index + 1.3, index + 2], [120, 200, 200, 120])
  const left = useTransform(x, [index, index + .8, index + 1.3, index + 2], [-40, 20, 20, -40])

  return (
    <motion.div className="h-[300px] rounded-[10px] relative bg-[#ddd]  p-6" style={{ width }}>
      <motion.div className='absolute z-10 w-full min-w-[200px] gap-6 text-primary font-bold flex justify-center' style={{ rotate, bottom, left }}>
        <div className="w-[250px] flex justify-between">
          <h5 className="w-[200px] font-normal">
            {title}
          </h5>
          <div>
            {children}
          </div>
        </div>
      </motion.div>
      <motion.div className='absolute z-10 text-primary w-full flex justify-center pb-6 left-[20px]' style={{ top: "130px", left: "0px", opacity: opacity3 }}>
        <p className="w-[200px] ">{description}</p>
      </motion.div>
    </motion.div>
  )
}