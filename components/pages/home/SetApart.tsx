import React from 'react'
import Image from 'next/image'
import HorizontalScroll from './HorizontalScroll'
import { title } from '@/components/primitives'

export default function SetApart() {
    return (
        <div className='w-full flex justify-center px-6 py-[40px]'>
            <div className='relative w-full flex justify-center rounded-[20px]'>

                <Image src="/images/home/bg-setapart.png" fill alt="bgsetapart" className='rounded-[20px]'></Image>
                <div className="relative z-1 container pt-[100px]">
                    <div className="min-h-screen">
                        <h3 className={title({ color: "primary" })}>Repowerlab's</h3>
                    </div>
                    <HorizontalScroll />

                </div>
            </div>
        </div>
    )
}
