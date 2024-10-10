"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from './icons'

export default function ProductCard({ title, img, height, href, description }: { href: string, title: string, img: string, height: string, description?: string }) {
    const [open, setOpen] = useState<boolean>(false)

    const variants = {
        closed: { width: "80%", height: 100, padding: "30px" },
        open: { width: "100%", height, padding: "80px" },
    }
    const variants2 = {
        closed: { bottom: "50px" },
        open: { bottom: "0px" },
    }

    const variantsP = {
        closed: { opacity: 0, display: "hidden" },
        open: { opacity: 1, display: "block" },
    }
    const variantFlecha = {
        closed: { x: 550 },
        open: { x: 50 }
    }
    return (
        <Link href={href}>
            <article onMouseEnter={() => { setOpen(true) }} onMouseLeave={() => { setOpen(false) }} className='w-full relative cursor-pointer overflow-hidden' style={{ height }}>
                <Image quality={100} alt="imagebg" src={img} fill className='object-cover z-0'></Image>
                <motion.div className="absolute flex justify-center w-full " variants={variants2} animate={open ? "open" : "closed"}>
                    <motion.div variants={variants} animate={open ? "open" : "closed"} className="absolute h-full" style={{
                        borderRadius: open ? "0px" : "10px",
                        background: "rgba(197, 197, 197, 0.48)",
                        backdropFilter: "blur(10px)",

                    }}></motion.div>
                    <motion.div className="flex flex-col justify-center relative text-white" variants={variants} animate={open ? "open" : "closed"}>
                        <div className='text-[24px] font-normal relative pe-4 flex' >
                            <h6 dangerouslySetInnerHTML={{ __html: title }}></h6>
                            <motion.div variants={variantFlecha} transition={{ duration: 0.6 }} animate={open ? "open" : "closed"} className="w-12 h-12 bg-[#C5C5C526] right-0 absolute z-10 rounded-full border-white border cursor-pointer" style={{}}>
                                <div className="flex h-full w-full justify-center items-center">
                                    <ArrowRight />
                                </div>
                            </motion.div>
                            {
                                description &&
                                <motion.p variants={variantsP} className='absolute text-[16px] top-[80px]' transition={{ duration: 0.6 }} animate={open ? "open" : "closed"}>
                                    {description}
                                </motion.p>
                            }
                        </div>
                    </motion.div>
                </motion.div>
            </article >
        </Link>
    )
}
