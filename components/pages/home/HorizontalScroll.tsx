"use client"
import { title } from '@/components/primitives'
import React, { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { arraySetApart } from './arraySetApart'
import { useTranslations } from 'next-intl'

export default function HorizontalScroll() {
  const array = arraySetApart
  const t = useTranslations('Home.SetApart')
  const ref = useRef<any>()
  const { scrollYProgress } = useScroll(
    { target: ref }
  )
  const x = useTransform(scrollYProgress, [0, 1], [0, array.length])

  return (
    <div ref={ref} className='w-full relative bg-[url(/images/home/apart.png)] bg-fixed bg-bottom bg-no-repeat bg-cover' style={{ height: `${array.length * 100}vh` }}>
      <div className="sticky top-0 h-screen w-full">
        <div className='absolute w-full rounded-[20px] h-full z-[1]' style={{
          background: "linear-gradient(181deg, rgba(75, 100, 128, 0.70) 20.44%, rgba(121, 135, 153, 0.48) 59.9%, rgba(255, 255, 255, 0.00) 77.53%)"
        }}></div>
        {/* <Image src="/images/home/apart.png" width="1500" height="1900" quality={100} alt="bgsetapart" className='bg-fixed absolute w-full z-0 object-cover h-screen w-full rounded-[20px]'></Image> */}

        <div className="flex  flex-col pt-[100px] gap-8 h-full w-full items-center relative z-[3]">
          <div className="w-full flex justify-center">
            <div className="max-w-[800px] flex gap-[40px] pt-[40px]">
              <h3 className={title({ size: "md", color: "white" }) + " min-w-[330px]"}>
                {t("title")}
              </h3>
              <p className="text-white">
                {t("subtitle")}
              </p>
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
  const left = useTransform(x, [index, index + .8, index + 1.3, index + 2], [-40, 0, 0, -40])

  const t = useTranslations('Home.SetApart.cards')

  return (
    <motion.div className="h-[300px] rounded-[10px] relative bg-[#ddd]  p-6" style={{ width }}>
      <motion.div className='absolute z-10 w-full min-w-[200px] gap-6 text-primary font-bold flex justify-center' style={{ rotate, bottom, left }}>
        <div className="w-[250px] flex justify-between items-center gap-6">
          <h5 className="w-[190px] text-[22px] font-normal" style={{ lineHeight: 1 }}>
            {t(title)}
          </h5>
          <div>
            {children}
          </div>
        </div>
      </motion.div>
      <motion.div className='absolute z-10 text-primary w-full flex justify-center pb-6 left-[20px]' style={{ top: "130px", left: "0px", opacity: opacity3 }}>
        <p className="w-[250px] ">{t(description)}</p>
      </motion.div>
    </motion.div>
  )
}