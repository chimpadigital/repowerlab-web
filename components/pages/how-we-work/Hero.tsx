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
      href: "/circular-economy"
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


  const x = useTransform(scrollYProgress, [0, 1], [0, -220 * dataWeWork.length])

  const off = useTransform(scrollYProgress, [0, 1], [0, .9])



  useEffect(() => {
    scrollYProgress.on('change', (el) => console.log(el))
  }, [])


  return (
    <div className="w-full px-8 items-center relative flex-col w-full pb-[65px] md:pb-[150px]">
      <div className="w-full flex-col items-center  flex justify-center top-[50px]  min-h-[85vh] bg-fixed bg-cover bg-[url(/images/how-we-work/gradiente-radial.png)] bg-primary rounded-[20px] pt-[100px]">
        <div className="absolute inset-0 bg-[url(/images/how-we-work/gradiente-radial.png)] bg-cover opacity-50"></div>
        <div className="container px-6 h-full z-10">
          <Breadcrumbs
            itemClasses={{
              base: " pt-[90px] ps-6",
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
        <div ref={ref} className={`w-full contenidoscroll relative`} style={{ height: `${60 * dataWeWork.length}vh` }}>
          <div className="grid grid-cols-2 sticky h-screen items-center w-full top-0">
            <div className="absolute w-screen left-[-2rem] pointer-events-none  h-screen z-20">
              <div className="absolute h-screen w-[2rem] bg-white left-0"></div>
              <div className="absolute h-screen w-[2.9rem] bg-white right-0"></div>
            </div>
            <motion.div style={{ x }} className='flex gap-[7.5vw] ps-[40px] relative w-full no-wrap'>
              <div className="flex-grow flex items-end justify-center relative z-10">
                <h5 className={title({ color: "white" }) + " w-[360px] leading-relaxed"}> <span className='text-secondary'>Start your journey</span> with a personalized consultation.</h5>
              </div>
              {
                dataWeWork.map((data, index) => (
                  <Circle key={index} index={index} data={data} />
                ))
              }
              <Vector opacity={0.9} className="absolute left-0 bottom-0 z-[-1]" scrollYProgress={off} style={{ pathLength: off }} />

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

    // <motion.svg {...props}  width="5367" height="478" viewBox="0 0 5367 478" fill="none">
    //   <motion.path strokeDasharray="0 1" style={{ pathLength: props.scrollYProgress }} d="M9 104.721C402 -102 590 506.5 744 342.5C898 178.5 1017 103.5 1236 342.5C1455 581.5 1625.95 101.92 1954.39 104.721C2276.16 107.466 2302.13 514.896 2618 453.5C2838.09 410.721 2978.49 161.865 3202.5 152.5C3441.63 142.503 3482.65 362.479 3713.89 424.221C4165.8 544.883 4405.02 -108.79 4848.39 40.221C5083.09 119.1 5352.89 424.221 5352.89 424.221" stroke="white" stroke-width="36" />
    // </motion.svg>

    <motion.svg {...props} width="5363" height="478" viewBox="0 0 5363 478" fill="none" xmlns="http://www.w3.org/2000/svg">
      <motion.path strokeDasharray="0 1" style={{ pathLength: props.scrollYProgress }} d="M5 104.721C422 0.499939 654.5 65.4999 654.5 65.4999C654.5 65.4999 843 101.5 1174 363C1505 624.5 1621.95 101.919 1950.39 104.721C2272.16 107.465 2298.13 514.896 2614 453.5C2834.09 410.721 2974.49 161.865 3198.5 152.5C3437.63 142.503 3478.65 362.479 3709.89 424.221C4161.8 544.883 4401.02 -108.791 4844.39 40.2209C5079.09 119.1 5348.89 424.221 5348.89 424.221" stroke="url(#paint0_linear_2_2)" stroke-width="36" />
      <defs>
        <linearGradient id="paint0_linear_2_2" x1="5" y1="238.9" x2="5348.89" y2="238.9" gradientUnits="userSpaceOnUse">
          <stop offset="0.0805917" stop-color="white" />
          <stop offset="0.254579" stop-color="#BACCE6" />
          <stop offset="0.440081" stop-color="white" />
          <stop offset="0.65217" stop-color="#BACCE6" />
          <stop offset="0.748585" stop-color="#DDE6F3" />
          <stop offset="0.844999" stop-color="white" />
          <stop offset="0.9225" stop-color="#DDE6F3" />
          <stop offset="1" stop-color="#BACCE6" />
        </linearGradient>
      </defs>
    </motion.svg>



  )
}



