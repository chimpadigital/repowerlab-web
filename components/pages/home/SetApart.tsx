"use client"
import React, { Suspense } from 'react';
import Image from 'next/image'
import { useWindowSize } from '@/utils/useResize'

// Lazy load del componente HorizontalScroll
const HorizontalScroll = React.lazy(() => import('./HorizontalScroll'));

export default function SetApart() {
    const size = useWindowSize()
    return (
        <div className='w-full flex justify-center px-6 py-[40px]'>
            <div className='relative w-full flex justify-center rounded-[20px]'>

                <div className="relative z-[2] w-full pt-[40px] lg:pt-[100px] ">
                    {
                        size[0] > 1000 ?
                            <HorizontalScroll /> :
                            <MobileContainer />
                    }
                </div>
            </div>
        </div>
    )
}


const MobileContainer = () => {
    return (
        <>
        </>
    )
}
