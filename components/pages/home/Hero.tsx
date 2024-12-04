"use client"
import Title from '@/atoms/Title';
import { button, title } from '@/components/primitives'
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import React from 'react'

export default function Hero() {
    const t = useTranslations()
    const tH = useTranslations('Home.Hero')
    return (
        <div className="w-full px-4 lg:px-8 items-center flex-col flex justify-center relative pb-[41px] md:pb-[150px]">
            <div className="w-full relative flex justify-center overflow-hidden h-full min-h-[90vh] max-h-[1500px]  rounded-[20px] ">
                <div className='object-cover bg-[#000]/60 w-full h-full top-0 left-0 absolute z-[1]'></div>
                <video className='object-cover bg-secondary md:object-center object-[-150px] w-full h-full top-0 left-0 absolute z-0' autoPlay muted playsInline loop>
                    <source src="/video.mp4" type="video/mp4" />
                    Tu navegador no soporta la reproducción de videos.
                </video>
                <div className="container px-6 relative z-10">
                    <div className="grid grid-cols-2 h-full md:ps-[2rem]">
                        <div className="col-span-2 lg:col-span-1 h-full flex flex-col justify-center">
                            <div className="max-w-[600px]">
                                <Title  className={title({ color: "white", size: "md" }) + " hidden leading-[1.2] md:block"} title={tH.raw('title')}></Title>
                                <Title h1 className={title({ color: "white", size: "md" }) + " md:hidden w-[80%]"} title={tH.raw('titleMob')}></Title>
                            </div>
                            <div className="hidden md:flex gap-[25px] pt-8">
                                <Link href="#products" className={`${button({ whiteLine: true })} block`}>{tH('btn1')} </Link>
                                <Link href="/our-services" className={`${button({ whiteLine: true })} block`}>{tH('btn2')}</Link>
                                <Link href="/marketplace" className={`${button({ whiteLine: true })} block`}>{tH('btn3')}</Link>
                            </div>
                            <div className="flex md:hidden flex-col gap-[25px] pt-8">
                                <Link href="#products" className={`text-white text-[1.2rem] items-center font-bold flex gap-2 block`}>{tH('btn1')}  <Arrow /></Link>
                                <Link href="/our-services" className={`text-white text-[1.2rem] items-center font-bold flex gap-2 block`}>{tH('btn2')} <Arrow /></Link>
                                <Link href="/marketplace" className={`text-white text-[1.2rem] items-center font-bold flex gap-2 block`}>{tH('btn3')} <Arrow /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

const Arrow = () => (
    <svg width="6" height="10" viewBox="0 0 6 10" className="translate-y-[2px]" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M5.76144 5.55547L1.15212 10L0 8.88906L4.03325 5L0 1.11094L1.15212 0L5.76144 4.44453C5.91419 4.59187 6 4.79167 6 5C6 5.20833 5.91419 5.40813 5.76144 5.55547Z" fill="white" />
    </svg>
)