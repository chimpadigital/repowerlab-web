"use client"
import { title } from '@/components/primitives'
import React, { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
const array = [
  {
    title: "Value Recovery Assessment",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt unde magni incidunt aliquam minus nisi, magnam tenetur hic. Nesciunt cupiditate fuga porro optio, rem eveniet quas cum ratione sed voluptatibus."
  },
  {
    title: "Dismantling and Transportation",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt unde magni incidunt aliquam minus nisi, magnam tenetur hic. Nesciunt cupiditate fuga porro optio, rem eveniet quas cum ratione sed voluptatibus."
  },
  {
    title: "Buyer Support",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt unde magni incidunt aliquam minus nisi, magnam tenetur hic. Nesciunt cupiditate fuga porro optio, rem eveniet quas cum ratione sed voluptatibus."
  },
  {
    title: "Inspection and Quality Assurance",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt unde magni incidunt aliquam minus nisi, magnam tenetur hic. Nesciunt cupiditate fuga porro optio, rem eveniet quas cum ratione sed voluptatibus."
  },
  {
    title: "Sales Process Management",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt unde magni incidunt aliquam minus nisi, magnam tenetur hic. Nesciunt cupiditate fuga porro optio, rem eveniet quas cum ratione sed voluptatibus."
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
        <div className="flex flex-col justify-center gap-8 h-full w-full items-center">
          <div className="grid grid-cols-2">
            <div className="col-span-1">
              <h4 className={title({ color: "primary" })}>What sets us apart</h4>
            </div>
            <div className="col-span-1">
              <p className='text-primary'>At Repowerlab, we lead in innovation, sustainability, and compliance, setting new standards in the energy sector.</p>
            </div>
          </div>
          <div className="flex gap-6 pt-7">
            {
              array.map((el, index) => (
                <Card {...el} index={index} key={index} x={x} />
              ))
            }
          </div>

        </div>
      </div>
    </div>
  )
}



const Card = ({ index, title, description, x }: any) => {
  const width = useTransform(x, [index, index + 1, index + 1.3, index + 2], [128, 400, 400, 128])
  const opacity = useTransform(x, [index, index + .8, index + 1.3, index + 2], [.7, 0, 0, .7])
  const opacity2 = useTransform(x, [index, index + .8, index + 1.3, index + 2], [0, 1, 1, 0])
  const opacity3 = useTransform(x, [index + .5, index + 1, index + 1.3, index + 1.6], [0, 1, 1, 0])
  const rotate = useTransform(x, [index, index + .8, index + 1.3, index + 2], [-90, 0, 0, -90])
  const bottom = useTransform(x, [index, index + .8, index + 1.3, index + 2], [60, 300, 300, 60])
  const left = useTransform(x, [index, index + .8, index + 1.3, index + 2], [0, 20, 20, 0])



  return (
    <motion.div className="h-[400px] rounded-[10px] relative" style={{ width }}>
      <motion.div className='rounded-[10px] opacity-[0.8] w-full h-full absolute top-0 left-0' style={{ opacity, background: `linear-gradient(180deg, #E1AE16 0%, rgba(238, 220, 164, 0.61) 24.5%, #1C4741 81.5%)` }}></motion.div>
      <motion.div className='rounded-[10px] opacity-[0.8] w-full h-full absolute top-0 left-0' style={{ background: '#fff', opacity: opacity2 }}></motion.div>
      <motion.div className='absolute text-primary font-bold' style={{ rotate, bottom, left }}>{title}</motion.div>
      <motion.div className='absolute text-primary font-bold w-[300px] left-[20px]' style={{ top: "200px", opacity: opacity3 }}>{description}</motion.div>
    </motion.div>
  )
}