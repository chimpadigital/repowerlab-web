"use client"
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'

interface ScrollAcordionI {
  imgPosition?: 'right' | 'left'
  items: { title: string, description: string, img: string }[]
}


export default function ScrollAccordion({ items, imgPosition = "left" }: ScrollAcordionI) {
  const ref = useRef<any>()
  const items2 = items.slice(1)
  const { scrollYProgress } = useScroll({
    target: ref,
  })
  const y = useTransform(scrollYProgress, [0, 1], [0, (items.length)])
  const opacityOfTitle = useTransform(y, [1, 1.8], [1, 0])
  const scaleOfTitle = useTransform(y, [1, 1.8], [1, .8])
  const yOfTitle = useTransform(y, [1, 1.8], [0, -50])


  return (
    <section ref={ref} className='mt-4 text-[#000] flex justify-center w-full h-full relative ' style={{ height: `${(items.length * 1.5) * 100}vh` }}>
      <div className="container">

        <div className="grid grid-cols-2 min-h-screen items-center sticky top-0 ">
          <div className={`col-span-1 relative max-h-[700px] h-full ${imgPosition == "right" && "order-last"}`}>
            {
              y &&
              items.map((el, index) => (
                <ImageMotion src={el.img} key={index} y={y} index={index} />
              ))
            }
          </div>
          <div className={`col-span-1 max-h-[700px] p-12  h-full flex flex-col justify-between`}>
            <motion.div style={{ opacity: opacityOfTitle, scale: scaleOfTitle, y: yOfTitle }}>
              <div className="text-[24px] font-bold text-primary">{items[0].title}</div>
              <div className="text-grey-600 pt-6">{items[0].description}</div>
            </motion.div>

            <div>
              {
                items2.map((el, index) => (
                  <AccordionMotion el={el} y={y} index={index} key={index + 'Accoridon'} />
                ))
              }
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

const ImageMotion = ({ index, src, y }: any) => {
  const opacity = useTransform(y, [index, index + 1], [0, 1])

  return (
    <motion.div key={'image' + index} className='w-full h-full' style={{ zIndex: index, opacity: index == 0 ? 1 : opacity }}>
      <Image src={src} alt="img-bg" fill className='w-full h-full absolute rounded-[20px] object-cover' />
    </motion.div>
  )
}
const AccordionMotion = ({ index, el, y }: any) => {
  const [hidden, setHidden] = useState(true)
  const opacity = useTransform(y, [index + 1, index + 2], [0, 1])

  useEffect(() => {
    opacity.on("change", () => {
      if(opacity.get() > 0)  setHidden(false)
      if(opacity.get() == 0)  setHidden(true)
    })
 
  }, [])

  return (
    <div key={index}>
      <div className='py-2'>
        <div className='rounded-full w-full p-[20px] bg-grey-100 text-primary font-bold'>
          {el.title}
        </div>
      </div>
      <motion.div style={{ opacity, }} className={`pt-2 text-grey-600 px-[20px] ${hidden && "hidden"}`} >{el.description}</motion.div>
    </div>
  )
}