"use client"
import React from 'react'
import Image from 'next/image'
import RotateScroll from '@/components/RotateScroll'
import { RepowerIcon } from '@/components/navicons'

export default function MapHome() {
  return (
    <div className="w-full min-h-screen  px-8">
      <div className="relative w-full py-[80px] min-h-screen flex justify-center">
        <Image fill src={"/images/home/mapa-bg.png"} alt="" className='object-cover rounded-[20px]'></Image>
        <div className="container relative">
          <div className="absolute z-10 bottom-12">
            <p className="text-[100px] font-light translate-x-[-150px] -translate-y-[200px] -rotate-90 text-white">Numbers</p>
          </div>
          <p className="absolute z-10 bottom-[120px] left-[160px] text-[26px] w-[440px] text-white">Check out our track record, showcased through the numbers that define our success.</p>
          <div className="w-full flex relative h-full items-center">
            <div className="flex justify-center items-center">
              <div className="w-[400px]"></div>
              <div className="relative">
                <Image width={1500} quality={100} height={900} src={"/images/home/mapa.png"} alt="" className=' w-full h-auto rounded-[20px]'></Image>
                <Card top={"20%"} left={"7%"} title={"WIND TURBINES SOLD"} number={416}/>
                <Card top={"60%"} left={"18%"} title={"FINISHED PROJECTS"} number={45}/>
                <Card top={"25%"} left={"40%"} title={"SATISFIED CLIENTS"} number={29}/>
                <Card top={"50%"} left={"48%"} title={"DISMANTLED WIND FARMS"} number={16}/>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}


const Card = ({ top, left, title, number }: any) => {
  return (
    <article className='p-4 w-[200px] h-[100px] flex justify-center items-center relaative absolute' style={{
      top,
      left,
      borderRadius: "10px",
      border: " 1px solid var(--gris, #F4F4F4)",
      background: "rgba(6, 6, 6, 0.50)",
      backdropFilter: "blur(10px)"
    }}>
      <div className="content text-white">
        <h5 className="text-light text-[14px] uppercase text-center">{title}</h5>
        <h4 className="font-bold text-center text-[32px]">{number}</h4>
      </div>
      <div className="w-[60px] h-[60px] rounded-full absolute right-[-40px] bg-secondary items-center flex justify-center">
        <div>
          <RotateScroll rotateNumber={160}>
            <RepowerIcon />
          </RotateScroll>
        </div>
      </div>
    </article >
  )
}