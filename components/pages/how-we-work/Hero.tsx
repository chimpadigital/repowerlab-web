"use client"
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import { BreadcrumbItem, Breadcrumbs, useDisclosure } from '@nextui-org/react'
import { title } from '@/components/primitives'
import { dataWeWork, HowWorkI } from './data'
import { motion, useScroll, useTransform } from 'framer-motion'
import ModalHowWork from './ModalHowWork'

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

  const ref = useRef<any>(null)

  const { scrollYProgress } = useScroll({
    target: ref
  })


  const x = useTransform(scrollYProgress, [0, 1], [0, -200 * dataWeWork.length])

  const off = useTransform(scrollYProgress, [0, 1], [0, .9])



  useEffect(() => {
    scrollYProgress.on('change', (el) => console.log(el))
  }, [])


  return (
    <div className="w-full px-8 items-center relative flex-col w-full top-[-80px]">
      
      <div className="w-full flex-col items-center  flex justify-center top-[50px]  min-h-[85vh] bg-fixed bg-cover bg-[url(/images/how-we-work/gradiente-radial.png)] bg-primary rounded-[20px] pt-[100px]">
        <div className="container px-6 h-full z-10 top-[-80px] ">
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
          <div className="col-span-2 flex justify-center">
            <h5 className={"text-center pt-12 " + title({ color: "white" })}>This is how we work</h5>
          </div>

        
        </div>
        <div ref={ref} className={`w-full contenidoscroll relative`} style={{ height: `${150 * dataWeWork.length}vh` }}>
            <div className="grid grid-cols-2 sticky h-screen items-center w-full top-0">
              <div className="absolute w-screen left-[-2rem] pointer-events-none  h-screen z-20">
                <div className="absolute h-screen w-[2rem] bg-white left-0"></div>
                <div className="absolute h-screen w-[2.9rem] bg-white right-0"></div>
              </div>
              <motion.div style={{ x }} className='flex gap-[100px] relative w-full no-wrap'>
                {
                  dataWeWork.map((data, index) => (
                    <Circle key={index} index={index} data={data} />
                  ))
                }
                <Vector className="absolute left-0 bottom-0 z-[-1]" scrollYProgress={off} style={{ pathLength: off }} />
              </motion.div>
            </div>

          </div>
      </div>

    </div>
  )
}

const Circle = ({ index, data }: { index: number, data: HowWorkI }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  return (
    <>
      <article onClick={() => { onOpen() }} className="min-w-[200px] min-h-[200px] max-w-[200px] max-h-[200px] border-2 bg-[#7B72724D] cursor-pointer border-grey-100 p-4 flex items-center hover:bg-[linear-gradient(145deg,#B3C5DF_-11.89%,rgba(179,197,223,0.20)_0.1%,#FFF_70.83%)] flex-col text-white hover:text-primary justify-center rounded-full transition-all duration-600 ease " style={{ marginTop: `${index % 2 == 0 ? "0px" : "200px"}`, backdropFilter: "blur(10px)", }}>
        <h6>{index + 1}</h6>
        <div className="pt-4 flex flex-col justify-center items-center">
          <h6 className='text-center'>{data.title}</h6>
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
            <path d="M19.5 12.998H13.5V18.998H11.5V12.998H5.5V10.998H11.5V4.99805H13.5V10.998H19.5V12.998Z" fill="currentColor" />
          </svg>
        </div>
      </article>
      <ModalHowWork
        index={index}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        data={data} />
    </>
  )
}

const Vector = (props: any) => {
  return (
    <motion.svg  {...props}  width="5468" height="478" viewBox="0 0 5468 478" fill="none" xmlns="http://www.w3.org/2000/svg" opacity={0.7}>
      <motion.path strokeDasharray="0 1" style={{ pathLength: props.scrollYProgress }}  d="M12 182.5C498.5 560 492 97.5 742.5 136.5C993 175.5 1039 427 1330 427C1621 427 1726.95 101.919 2055.39 104.721C2377.16 107.465 2403.13 514.896 2719 453.5C2939.09 410.721 3079.49 161.865 3303.5 152.5C3542.63 142.503 3583.65 362.479 3814.89 424.221C4266.8 544.883 4506.02 -108.791 4949.39 40.2209C5184.09 119.1 5453.89 424.221 5453.89 424.221" stroke="white" stroke-width="36" />
    </motion.svg>

  )
}



