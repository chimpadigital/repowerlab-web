import { title } from '@/components/primitives'
import WordAnimated from '@/components/WordAnimated'
import React from 'react'
import Image from 'next/image'

export default function RepowerLabFocus() {
    return (
        <div className="w-full flex justify-center px-10">
            <div className='container'>
                <div className="flex text-primary gap-[90px]" >
                    <h5 className={title({ color: "primary" })}>RepowerLab's Focus</h5>
                    <WordAnimated accentColor='!text-accent' text='--RepowerLab is a pioneering company transforming the energy sector by --providing --innovative --solutions --for --end-of-life --energy --assets, including decommissioning, repowering, retrofitting, recycling, and resale of renewable energy infrastructure.' />
                </div>
                <div className="pt-12 grid grid-cols-1 md:grid-cols-2 ">
                    <div className="col-span-1">
                        <Image quality={100} width={500} height={500} alt="imagen focus" src={'/images/home/home-focus.png'}></Image>
                    </div>
                    <div className="col-span-1 flex flex-col items-center justify-center text-primary text-[22px] font-light">
                        <p>
                            With a strong presence in Europe, the US, and Latin America, we have
                            {" "}
                            <strong className="text-accent">
                                successfully managed numerous decommissioning projects
                            </strong>     {" "}
                            on a global scale. <br />
                            Our expertise ensures     {" "}
                            <strong className="text-accent">
                                maximum value recovery
                            </strong>     {" "}
                            and extended lifespan for energy assets. We offer comprehensive,     {" "}
                            <strong className="text-accent">
                                turnkey circular economy solutions
                            </strong>     {" "}
                            that include strategic planning, asset recovery, and the resale and installation of refurbished equipment.
                        </p>
                        <p className="pt-4">
                            Committed to sustainability, we utilize advanced European recycling technologies to achieve     {" "}
                            <strong className="text-accent">
                                high material recovery rates.
                            </strong>     {" "}
                            By enhancing the performance and efficiency of energy assets, RepowerLab promotes environmental stewardship, driving     {" "}
                            <strong className="text-accent">innovation and sustainability</strong>     {" "}
                            in the renewable energy industry.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
