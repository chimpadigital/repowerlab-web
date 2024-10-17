"use client"
import { button, title } from '@/components/primitives'
import React from 'react'

export default function Hero() {
    return (
        <div className="w-full px-8 items-center flex-col w-full flex justify-center relative top-[-80px]">
            <div className="w-full relative flex justify-center overflow-hidden h-full min-h-[90vh] max-h-[1500px]  rounded-[20px] pt-[100px]">
                <div className='object-cover bg-home w-full h-full top-0 left-0 absolute z-[1]'></div>
                <video className='object-cover bg-secondary w-full h-full top-0 left-0 absolute z-0' autoPlay muted playsInline loop>
                    <source src="/video.mp4" type="video/mp4" />
                    Tu navegador no soporta la reproducción de videos.
                </video>
                <div className="container px-6 relative z-10 top-[-80px]">
                    <div className="grid grid-cols-2 h-full">
                        <div className="col-span-1 h-full flex flex-col justify-center">
                            <div className="max-w-[600px]">
                                <h1 className={title({ color: "white", size: "md" })}>{'"'}Rethinking Energy Assets: Leading the Charge in Circular Economy Innovation{'"'}</h1>
                            </div>
                            <div className="flex gap-[25px] pt-8">
                                <button className={`${button({ whiteLine: true })}`}>Products </button>
                                <button className={`${button({ whiteLine: true })}`}>Services</button>
                                <button className={`${button({ whiteLine: true })}`}>Marketplace</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
