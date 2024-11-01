"use client"
import { button, title } from '@/components/primitives'
import Link from 'next/link'
import React from 'react'

export default function Hero() {
    return (
        <div className="w-full px-8 items-center flex-col w-full flex justify-center relative pb-[150px]">
            <div className="w-full relative flex justify-center overflow-hidden h-full min-h-[90vh] max-h-[1500px]  rounded-[20px] ">
                <div className='object-cover bg-home w-full h-full top-0 left-0 absolute z-[1]'></div>
                <video className='object-cover bg-secondary w-full h-full top-0 left-0 absolute z-0' autoPlay muted playsInline loop>
                    <source src="/video.mp4" type="video/mp4" />
                    Tu navegador no soporta la reproducción de videos.
                </video>
                <div className="container px-6 relative z-10">
                    <div className="grid grid-cols-2 h-full md:ps-[2rem]">
                        <div className="col-span-2 lg:col-span-1 h-full flex flex-col justify-center">
                            <div className="max-w-[600px]">
                                <h1 className={title({ color: "white", size: "md" })}>Rethinking Energy Assets: Leading the Charge in Circular Economy Innovation</h1>
                            </div>
                            <div className="flex gap-[25px] pt-8">
                                <Link href="/products/turbine-parts" className={`${button({ whiteLine: true })} block`}>Products </Link>
                                <Link href="/our-services" className={`${button({ whiteLine: true })} block`}>Services</Link>
                                <Link href="/marketplace" className={`${button({ whiteLine: true })} block`}>Marketplace</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
