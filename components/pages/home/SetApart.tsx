"use client"
import React, { Fragment, Suspense } from 'react';
import Image from 'next/image'
import { useWindowSize } from '@/utils/useResize'
import { arraySetApart } from './arraySetApart';

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
            <div className="h-[350px] bg-[url(/images/home/apart.webp)] bg-no-repeat bg-cover bg-center rounded-[20px] w-full relative">
                <div className="relative p-6 z-10">
                    <h4 className="text-white font-bold text-[22px]">Our Edge</h4>
                    <p className='font-normal text-[18px] leading-6 pt-4 text-white max-w-[240px]'>We lead in innovation, sustainability, and setting
                        new energy standards.</p>
                </div>
                <div className="absolute top-0 left-0 w-full h-full rounded-[20px]" style={{
                    background: "linear-gradient(181deg, rgba(75, 100, 128, 0.70) 20.44%, rgba(121, 135, 153, 0.48) 59.9%, rgba(255, 255, 255, 0.00) 77.53%)"
                }}></div>
            </div>
            <div className='pt-4 flex flex-col gap-4'>
                {
                    arraySetApart.map((el, i) => (
                        <CardMobile key={i} Icon={el.icon} {...el} />
                    ))
                }
            </div>
        </>
    )
}

const CardMobile = ({ title, description, Icon }: { title: string, description: string, Icon: () => JSX.Element }) => {
    return (
        <article className="rounded-[20px] bg-grey-100 text-primary p-6">
            <div className="flex justify-between items-center">
                <h5 className="w-[200px] text-[20px] font-bold">{title}</h5>
                <Icon />
            </div>
            <div className="pt-4">
                <p className="text-[18px]">{description}</p>
            </div>
        </article>
    )
}