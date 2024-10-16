"use client"
import { title } from '@/components/primitives'
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FifthIcon, FirstIcon, FourdIcon, SecondIcon, ThirdIcon } from './iconsHome'
const array = [
  {
    title: "Value Recovery Assessment",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt unde magni incidunt aliquam minus nisi, magnam tenetur hic. Nesciunt cupiditate fuga porro optio, rem eveniet quas cum ratione sed voluptatibus.",
    icon: FirstIcon
  },
  {
    title: "Dismantling and Transportation",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt unde magni incidunt aliquam minus nisi, magnam tenetur hic. Nesciunt cupiditate fuga porro optio, rem eveniet quas cum ratione sed voluptatibus.",
    icon: SecondIcon
  },
  {
    title: "Buyer Support",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt unde magni incidunt aliquam minus nisi, magnam tenetur hic. Nesciunt cupiditate fuga porro optio, rem eveniet quas cum ratione sed voluptatibus.",
    icon: ThirdIcon
  },
  {
    title: "Inspection and Quality Assurance",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt unde magni incidunt aliquam minus nisi, magnam tenetur hic. Nesciunt cupiditate fuga porro optio, rem eveniet quas cum ratione sed voluptatibus.",
    icon: FourdIcon
  },
  {
    title: "Sales Process Management",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt unde magni incidunt aliquam minus nisi, magnam tenetur hic. Nesciunt cupiditate fuga porro optio, rem eveniet quas cum ratione sed voluptatibus.",
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
    <div ref={ref} className='w-full relative' style={{ height: `${array.length * 2 * 100}vh` }}>
      <div className="sticky top-0 h-screen w-full">
        <div className='absolute w-full rounded-[20px] h-full z-[1]' style={{
          background: "linear-gradient(181deg, rgba(75, 100, 128, 0.70) 20.44%, rgba(121, 135, 153, 0.48) 59.9%, rgba(255, 255, 255, 0.00) 77.53%)"
        }}></div>
        <Image src="/images/home/apart.png" width="1500" height="1900" quality={100} alt="bgsetapart" className='bg-fixed absolute w-full z-0 object-cover h-screen w-full rounded-[20px]'></Image>

        <div className="flex  flex-col pt-[100px] gap-8 h-full w-full items-center relative z-[3]">
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
  const width = useTransform(x, [index, index + 1, index + 1.3, index + 2], [128, 400, 400, 128])
  const opacity = useTransform(x, [index, index + .8, index + 1.3, index + 2], [.7, 0, 0, .7])
  const opacity2 = useTransform(x, [index, index + .8, index + 1.3, index + 2], [0, 1, 1, 0])
  const opacity3 = useTransform(x, [index + .5, index + 1, index + 1.3, index + 1.6], [0, 1, 1, 0])
  const weight = useTransform(x, [index + .5, index + 1, index + 1.3, index + 1.6], [400, 800, 800, 400])
  const rotate = useTransform(x, [index, index + .8, index + 1.3, index + 2], [-90, 0, 0, -90])
  const bottom = useTransform(x, [index, index + .8, index + 1.3, index + 2], [140, 300, 300, 140])
  const left = useTransform(x, [index, index + .8, index + 1.3, index + 2], [-60, 20, 20, -60])

  return (
    <motion.div className="h-[400px] rounded-[10px] relative bg-secondary" style={{ width }}>
      <motion.div className='absolute w-[80%] min-w-[250px] gap-6 text-primary font-bold flex justify-between' style={{ rotate, bottom, left }}>
        <h5 className="w-[250px]">
          {title}
        </h5>
        <div>
          {children}
        </div>

      </motion.div>
      <motion.div className='absolute text-primary w-[300px] left-[20px]' style={{ top: "200px", opacity: opacity3 }}>{description}</motion.div>
    </motion.div>
  )
}