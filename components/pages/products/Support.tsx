"use client"
import { title } from '@/components/primitives'
import React, { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'


export default function Support() {
    return (
        <section className='w-full flex flex-col items-center justify-center py-[80px]'>
            <h2 className={title({ color: "primary" }) + " text-center w-full"}>Comprehensive Support</h2>
            <p className="pb-12 pt-8 max-w-[600px] text-center">To assist our clients further, we offer extensive support in the procurement
                and installation of turbine parts. This includes:</p>

            <div className="w-full flex-col md:flex-row flex gap-[1px] mt-6">
                <Card title="Expert Advice" img={"/images/product/expert.png"} height='600px' description='Guidance on selecting the right parts for your turbines.' />
                <Card title="Logistics" img={"/images/product/logistics.png"} height='600px' description='Coordinating the delivery and installation of parts, ensuring they arrive on time and in perfect condition.' />
                <Card title="After-Sales Support" img={"/images/product/support.png"} height='600px' description='Ongoing support to address any issues and ensure the continued performance of your turbines.' />
            </div>
        </section>
    )
}


function Card({ title, img, height, description }: { title: string, img: string, height: string, description?: string }) {
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
        closed: { opacity: 0 },
        open: { opacity: 1  },
    }
    const variantsT = {
        closed: { opacity: 1 },
        open: { opacity: 0 },
    }

    return (
        <article onMouseEnter={() => { setOpen(true) }} onMouseLeave={() => { setOpen(false) }} className='w-full relative overflow-hidden' style={{ height }}>
            <Image quality={100} alt="imagebg" src={img} fill className='object-cover z-0'></Image>
            <motion.div className="absolute flex justify-center w-full " transition={{ duration: .8 }} variants={variants2} animate={open ? "open" : "closed"}>
                <motion.div variants={variants} transition={{ duration: .8 }} animate={open ? "open" : "closed"} className="absolute h-full" style={{
                    borderRadius: open ? "0px" : "10px",
                    background: "#4B4A4A",
                    opacity: ".48",
                    backdropFilter: "blur(10px)",

                }}></motion.div>
                <motion.h6 variants={variantsT} transition={{ duration: .8 }} animate={open ? "open" : "closed"} className="absolute bottom-[36px] font-bold text-white text-[22px]">{title}</motion.h6>
                <motion.div className="flex flex-col justify-center relative text-white" variants={variants} transition={{ duration: .8 }} animate={open ? "open" : "closed"}>

                        {
                            description &&
                            <motion.div variants={variantsP} className='absolute w-full flex justify-center text-[16px] top-[200px] left-0' transition={{ duration: .8 }} animate={open ? "open" : "closed"}>
                                <p className='max-w-[250px] text-[20px] font-bold'>
                                    {description}
                                </p>
                            </motion.div>
                        }
                </motion.div>
            </motion.div>
        </article >
    )
}
