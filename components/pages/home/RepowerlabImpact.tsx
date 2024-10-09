"use client"
import { subtitle, title } from '@/components/primitives'
import WordAnimated from '@/components/WordAnimated'
import React, { useState } from 'react'

export default function RepowerlabImpact() {
    return (
        <div className='px-8'>
            <div className="rounded-[10px] bg-primary py-[100px] flex justify-center">
                <div className="container">
                    <div className="flex justify-between">
                        <h5 className={`${title({ color: "white", size: "md" })} max-w-[300px]`}>RepowerLab's Impact</h5>
                        <div className="max-w-[1000px]">
                            <WordAnimated text={"Our commitment to the circular economy and innovative energy solutions delivers measurable results in waste reduction, efficiency, and cost savings."} />
                        </div>
                    </div>
                    <div className="pt-[200px]">
                        <div className="grid grid-cols-4 gap-8 mb-[200px]">
                            <Card title='Waste reduction' percent='85-90%' description='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque aliquam a sapiente, officia at in, culpa odit suscipit eius eos accusantium error vero quasi quidem minus ad cumque ducimus rerum?' />
                            <Card title='Waste avoided' percent='60%' description='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque aliquam a sapiente, officia at in, culpa odit suscipit eius eos accusantium error vero quasi quidem minus ad cumque ducimus rerum?' />
                            <Card title='Increased power output' percent='25-30%' description='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque aliquam a sapiente, officia at in, culpa odit suscipit eius eos accusantium error vero quasi quidem minus ad cumque ducimus rerum?' />
                            <Card title='COST REDUCTION IN DECOMMISSIONING' percent='85-90%' description='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque aliquam a sapiente, officia at in, culpa odit suscipit eius eos accusantium error vero quasi quidem minus ad cumque ducimus rerum?' />
                        </div>
                    </div>
                    <div className='grid lg:grid-cols-2 grid-cols-1'>
                        <div className="col-span-1">
                            <div className="max-w-[400px] text-white">
                                <h3 className={`${title({ color: "white", size: "md" })}`}>This is how <span className='text-secondary'>we work</span></h3>
                                <p className="pt-[50px]">
                                    At RepowerLab, we offer a comprehensive solution
                                    for the lifecycle management of wind turbines.
                                </p>
                                <p className="pt-[50px]">
                                    Whether you're selling or buying wind turbines, we ensure a smooth, efficient, and transparent process.
                                </p>
                                <p className="pt-[50px]">Looking for expert assistance? Please contact us for
                                    an obligation-free introduction.
                                </p>
                                <div className="pt-[60px]">
                                    <button className='w-full max-w-[180px] relative overflow-hidden gap-4 items-center transition-all duration-[600] py-4 px-6 rounded-full  text-white flex justify-between hover:max-w-[200px]'>
                                        <div className="w-full absolute h-full top-0 left-0 bg-[#ffffff]/40">
                                        </div>
                                        <span className='relative text-[18px]'>Read more</span>

                                        <svg width="21" height="14" viewBox="0 0 21 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M20.8231 7.15212C20.7176 7.3202 20.6224 7.50145 20.5047 7.65437C19.0019 9.60468 17.4965 11.551 15.9911 13.498C15.7628 13.7933 15.5117 13.8362 15.3048 13.6206C15.1056 13.413 15.0659 13.0683 15.2177 12.802C15.2778 12.6972 15.3502 12.603 15.422 12.51C16.6151 10.9651 17.8082 9.42078 19.0029 7.87846C19.0548 7.81123 19.119 7.75982 19.1776 7.70116C19.1679 7.67216 19.1588 7.64316 19.1491 7.61416C19.0666 7.61416 18.984 7.61416 18.901 7.61416C12.8341 7.61416 6.76712 7.61416 0.700691 7.61284C0.586576 7.61284 0.469914 7.60493 0.358346 7.57527C0.14489 7.51793 -0.00641355 7.25758 0.000209187 6.98405C0.00683192 6.71579 0.15457 6.47126 0.358856 6.41853C0.470423 6.38953 0.587085 6.38294 0.70171 6.38294C6.76151 6.38162 12.8218 6.38162 18.8816 6.38162H19.1934C19.1048 6.26035 19.0533 6.18587 18.9988 6.11534C17.7777 4.53282 16.5565 2.94963 15.3339 1.36909C15.1693 1.1562 15.0679 0.925506 15.1607 0.617043C15.2682 0.260464 15.61 0.120073 15.851 0.340216C15.9335 0.415355 16.0053 0.511585 16.0772 0.603861C17.554 2.51264 19.0314 4.42143 20.5052 6.33483C20.6229 6.48708 20.7177 6.669 20.8226 6.83707V7.15278L20.8231 7.15212Z" fill="white" />
                                        </svg>


                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

interface CardI {
    title: string,
    percent: string,
    description: string
}

const Card = ({ title, percent, description }: CardI) => {
    const [open, setOpen] = useState<boolean>(false)
    return (
        <article className='border relative text-white border-white rounded-tl-[10px] bg-[#C5C5C526] p-6'>
            <h5 className="font-light uppercase text-[20px] w-[200px]">{title}</h5>
            <h5 className="text-bold text-[32px]">{percent}</h5>
            <svg className='absolute bottom-2 right-2' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 18V5M18 18L2 2M18 18H5" stroke="white" stroke-width="3" />
            </svg>


            <p className='hidden'>{description}</p>
        </article>
    )
}