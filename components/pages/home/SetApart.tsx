import React from 'react'
import Image from 'next/image'
import HorizontalScroll from './HorizontalScroll'
import { title } from '@/components/primitives'

export default function SetApart() {
    return (
        <div className='relative w-full flex justify-center'>
            <Image src="/images/home/bg-setapart.png" fill alt="bgsetapart"></Image>
            <div className="relative z-1 container pt-[100px]">
                <div className="min-h-screen">
                    <h3 className={title({color:"primary"})}>Repowerlab's</h3>
                </div>
                <HorizontalScroll />

            </div>
        </div>
    )
}
