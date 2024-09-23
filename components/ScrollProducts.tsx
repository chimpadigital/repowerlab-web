"use client"
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import { useScroll, useTransform, motion } from 'framer-motion'
import { PowerIcon, RotorIcon, TowerIcon, WindIcon } from './icons'


export default function ScrollProducts() {

    const ref = useRef<any>()

    const { scrollYProgress } = useScroll()
    const y = useTransform(scrollYProgress, [0, 1], [0, 4.5])
    const images = [
        "/images/our-services/e2.jpg",
        "/images/our-services/e3.jpg",
        "/images/our-services/e4.jpg"
    ]
    useEffect(() => {
        y.on('change', (e: any) => {
            console.log(e)
        })
    }, [])

    return (
        <div className='relative h-[300vh]' ref={ref}>
            <div className="relative  top-0 z-0 w-full">
                <div className="sticky top-0  h-[100vh] z-[1]">
                    <div className="absolute w-full h-full">
                        {
                            images.map((el, i) => (
                                <ImageMotion src={el} key={i} y={y} index={i} rounded={false} />
                            ))
                        }
                    </div>
                    <div className="relative w-full h-full z-[2] flex items-center ps-12 text-[30px] text-white">
                        <Card />
                    </div>
                </div>
                <div className="sticky top-0 w-full h-[100vh] z-[2]">
                    <div className="relative w-full h-full flex items-center ps-12 text-[30px] text-white">
                        <Card top={30} />
                    </div>
                </div>
                <div className="sticky top-0 w-full h-[100vh] z-[3]">
                    <div className="relative w-full h-full  flex items-center ps-12 text-[30px] text-white">
                        <Card top={60} />
                    </div>
                </div>
            </div>
        </div>
    )
}

const Card = ({ top = 0 }: any) => {
    return (

        <div className="bg-grey-background w-[400px] py-8 px-6 border-white relative border rounded-[20px]" style={{ top: `${top}px` }}>
            <div className="flex justify-end">
                <WindIcon />
            </div>

            <h5 className="text-white font-bold text-[18px]" >Wind turbine</h5>
            <p className="pt-2 pb-4 text-[18px]">ECOTECNIA E44</p>

            <hr className="py-4 border-white w-full" />
            <div className="flex gap-4">
                <PowerIcon />
                <h5 className="text-white font-bold text-[18px]" >Power</h5>
            </div>
            <p className="py-2 pb-4 text-[18px]">45 HH tubular steel tower</p>

            <hr className="py-4 border-white w-full" />

            <div className="grid grid-cols-2 gap-[40px] justify-between">
                <div className="cols-span-1">
                    <div className="flex gap-4">
                        <TowerIcon />
                        <h5 className="text-white font-bold text-[18px]" >Tower</h5>
                    </div>
                    <p className="py-2 pb-4 text-[18px]">15/12/2022</p>

                    <hr className="py-4 border-white w-full" />
                </div>
                <div className="cols-span-1">
                    <div className="flex gap-4">
                        <RotorIcon />
                        <h5 className="text-white font-bold text-[18px]" >Rotor</h5>
                    </div>
                    <p className="py-2 pb-4 text-[18px]">44m</p>

                    <hr className="py-4 border-white w-full" />
                </div>
            </div>

            <div className="flex justify-end text-[16px] font-bold">
                <div className="flex gap-2 items-center cursor-pointer">
                    Read more
                    <svg className='transform-y-[10px]' xmlns="http://www.w3.org/2000/svg" width="8" height="17" viewBox="0 0 8 17" fill="none">
                        <path d="M1 15.2104L7 8.26308L1 1.31571" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            </div>
        </div>
    )
}


const ImageMotion = ({ index, src, y, rounded = true }: any) => {
    const opacity = useTransform(y, [index, index + 1], [0, 1])


    return (
        <motion.div className='w-full h-full' style={{ zIndex: index, opacity: index == 0 ? 1 : opacity }}>
            <Image src={src} alt="img-bg" fill className={`w-full h-full absolute object-cover ${rounded && "rounded-[20px]"}`} />
        </motion.div>
    )
}