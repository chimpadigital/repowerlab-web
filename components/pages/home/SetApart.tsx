import React from 'react'
import Image from 'next/image'
import HorizontalScroll from './HorizontalScroll'
import { title } from '@/components/primitives'

export default function SetApart() {
    return (
        <div className='w-full flex justify-center px-6 py-[40px]'>
            <div className='relative w-full flex justify-center rounded-[20px]'>
                
                <div className="relative z-[2] w-full pt-[100px]">
                    <HorizontalScroll />
                </div>
            </div>
        </div>
    )
}
