"use client"
import React from 'react'
import { Link } from '@nextui-org/link'
import Image from 'next/image'
import Logo from '@/atoms/Logo'
import { subtitle } from './primitives'

export default function Footer() {

    const linksMenu = [
        { label: "Services", url: "our-services" },
        { label: "Marketplace", url: "marketplace" },
        { label: "Circular economy", url: "circular-economy" },
        { label: "Success cases", url: "success-cases" },
        { label: "Our company", url: "our-company" },
        { label: "Contact us", url: "about/contact-us" },
    ]

    const linksProducts = [
        { label: "Wind turbines", url: "marketplace?type=windturbines" },
        { label: "Wind turbines spare parts", url: "marketplace?type=spareparts" }
    ]

    return (
        <footer className="w-full flex items-center justify-center  mt-4 px-6 min-h-[400px] text-white mb-8">
            <div className="relative w-full h-full py-[40px] min-h-[400px] px-6">
                <div className="relative flex justify-between pt-6 z-10">
                    <div>
                        <Logo />
                    </div>
                    <div>
                        <Link href="mailto:info@repowerlab.com" className="text-[56px] font-light text-white">  info@repowerlab.com</Link>
                        <div className="grid grid-cols-3 gap-12 pt-16">
                            <div className="md:grid-cols-1 grid-cols-3">
                                <h5 className={subtitle({ colors: 'white' })}>Menu</h5>
                                <div className="pt-[30px]">
                                    <div className="flex flex-col gap-[30px]">
                                        {
                                            linksMenu.map((el, i) => (
                                                <Link key={i} className='text-white' href={el.url}>{el.label}</Link>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="md:grid-cols-1 grid-cols-3">
                                <h5 className={subtitle({ colors: 'white' })}>Products</h5>
                                <div className="pt-[30px]">
                                    <div className="flex flex-col gap-[30px]">
                                        {
                                            linksProducts.map((el, i) => (
                                                <Link key={i+"pro2"} className='text-white' href={el.url}>{el.label}</Link>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="md:grid-cols-1 grid-cols-3">
                                <h5 className={subtitle({ colors: 'white' })}>Follow</h5>
                                <div className="pt-[30px]">
                                    <div className="flex flex-col gap-[30px]">

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Image fill src={'/images/shared/Footer.png'} alt='footer' className='rounded-[20px] object-cover mx-auto h-full'></Image>
            </div>
        </footer>
    )
}
