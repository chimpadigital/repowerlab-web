"use client"
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'

interface ScrollAcordionI {
  imgPosition?: 'right' | 'left'
  items: { title: string, description: string, img: string }[]
  id: string
}

const fixFirst = 0.3

export default function ScrollAccordion({ items, imgPosition = "left", id }: ScrollAcordionI) {
  const ref = useRef<any>()
  const items2 = items.slice(1)
  const { scrollYProgress } = useScroll({
    target: ref,
  })
  const y = useTransform(scrollYProgress, [0, 1], [0, (items.length)])
  const opacityOfTitle = useTransform(y, [.8, 1.8], [1, 0])
  const scaleOfTitle = useTransform(y, [.8, 1.8], [1, .8])
  const yOfTitle = useTransform(y, [.8, 1.8], [0, -50])


  //Calcular distancia del desplazamiento 
  const elementoRef = useRef<any>(null);
  const [distancia, setDistancia] = useState(0);

  useEffect(() => {
    if (elementoRef.current && ref.current) {
      let actual = elementoRef.current;
      let distanciaTotal = 0;

      // Calcular la distancia acumulada de los elementos padres
      if (actual) {
        distanciaTotal += actual.offsetTop;
        actual = actual.offsetParent;
      }

      // Restar la distancia del contenedor al cuerpo
      const distanciaContenedor = ref.current.offsetTop;
      setDistancia(distanciaTotal);
    }
  }, []);


  return (
    <section id={id} ref={ref} className='mt-4 text-[#000] flex justify-center w-full h-full relative ' style={{ height: `${(items.length * 1.5) * 100}vh` }}>
      <div className="container">

        <div className="grid grid-cols-2 min-h-screen items-center sticky top-0 gap-[20px]">
          <div className={`col-span-1 relative max-h-[700px] h-full ${imgPosition == "right" && "order-last"}`}>
            {
              y &&
              items.map((el, index) => (
                <ImageMotion src={el.img} key={index} y={y} index={index} />
              ))
            }
          </div>
          <div className={`col-span-1 max-h-[700px] p-12 shadow-lg rounded-[20px] h-full flex flex-col relative justify-between`}>
            <motion.div style={{ opacity: opacityOfTitle, scale: scaleOfTitle, y: yOfTitle }}>
              <div className="text-[24px] font-bold text-primary">{items[0].title}</div>
              <div className="text-grey-600 pt-6">{items[0].description}</div>
            </motion.div>

            <div ref={elementoRef}>
              {
                items2.map((el, index) => (
                  <AccordionMotion distancia={distancia} el={el} y={y} index={index} key={index + 'Accoridon'} />
                ))
              }
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

const ImageMotion = ({ index, src, y, rounded = true }: any) => {
  const opacity = useTransform(y, [index - fixFirst, index + 1 - fixFirst], [0, 1])

  return (
    <motion.div key={'image' + index} className='w-full h-full' style={{ zIndex: index, opacity: index == 0 ? 1 : opacity }}>
      <Image src={src} alt="img-bg" fill className={`w-full h-full absolute object-cover ${rounded && "rounded-[20px]"}`} />
    </motion.div>
  )
}
const AccordionMotion = ({ index, el, y, distancia }: any) => {
  const [hidden, setHidden] = useState(true)
  const opacity = useTransform(y, [index + 1 - fixFirst, index + 2 - fixFirst, index + 2 - fixFirst, index + 3 - fixFirst], [0, 1, 1, 0])
  const top = useTransform(y, [index + 1 - fixFirst, index + 2 - fixFirst], [0, -distancia])


  useEffect(() => {
    opacity.on("change", () => {
      if (opacity.get() > 0) setHidden(false)
      if (opacity.get() == 0) setHidden(true)
    })

  }, [])

  return (
    <motion.div key={index} className='relative' style={{ y: top }}>
      <div className='py-2'>
        <div className='rounded-full w-full p-[20px] bg-grey-100 text-primary font-bold'>
          {el.title}
        </div>
      </div>
      <motion.div style={{ opacity, }} className={`pt-2 absolute top-[80px] text-grey-600 px-[20px] ${hidden && "hidden"}`} >{el.description}</motion.div>
    </motion.div>
  )
}