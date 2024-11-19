import { title } from '@/components/primitives'
import WordAnimated from '@/components/WordAnimated'
import React from 'react'
import Image from 'next/image'
import RotateScroll from '@/components/RotateScroll'

export default function RepowerLabFocus() {
    return (
        <div className="w-full flex justify-center px-10 overflow-x-hidden">
            <div className='container'>
                <div className="flex flex-col lg:flex-row text-primary gap-[30px] lg:gap-[90px] text-[30px]" >
                    <h5 className={title({ color: "primary" })+ " whitespace-nowrap"}>Our Focus</h5>
                    <WordAnimated accentColor='!text-accent' text='--RepowerLab is a pioneering company transforming the energy sector by --providing --innovative --solutions --for --end-of-life --energy --assets, including decommissioning, repowering, retrofitting, recycling, and resale of renewable energy infrastructure.' />
                </div>
                <div className="pt-12 md:grid grid-cols-2 hidden">
                    <div className="lg:col-span-1 col-span-2 flex justify-center">
                            <Image quality={100} width={500} height={500} alt="imagen focus" src={'/images/home/CircularEconomy.webp'}></Image>
                    </div>
                    <div className="lg:col-span-1 col-span-2 flex flex-col items-center justify-center text-primary text-[22px] font-light">
                        <p>
                            With a strong presence in Europe, the US, and Latin America, we have
                            {" "}
                            <strong className="text-accent font-bold">
                                successfully managed numerous decommissioning projects
                            </strong>     {" "}
                            on a global scale. <br />
                            Our expertise ensures     {" "}
                            <strong className="text-accent font-bold">
                                maximum value recovery
                            </strong>     {" "}
                            and extended lifespan for energy assets. We offer comprehensive,     {" "}
                            <strong className="text-accent font-bold">
                                turnkey circular economy solutions
                            </strong>     {" "}
                            that include strategic planning, asset recovery, and the resale and installation of refurbished equipment.
                        </p>
                        <p className="pt-2">
                            Committed to sustainability, we utilize advanced European recycling technologies to achieve     {" "}
                            <strong className="text-accent font-bold">
                                high material recovery rates.
                            </strong>     {" "}
                            By enhancing the performance and efficiency of energy assets, RepowerLab promotes environmental stewardship, driving     {" "}
                            <strong className="text-accent font-bold">innovation and sustainability</strong>     {" "}
                            in the renewable energy industry.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
