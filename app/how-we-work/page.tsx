import GreenBanner from '@/components/GreenBanner'
import Hero from '@/components/pages/how-we-work/Hero'
import JoinOurMission from '@/components/pages/how-we-work/JoinOurMission'
import { button, title } from '@/components/primitives'
import React from 'react'
import Link from 'next/link'

export default function page() {
    return (
        <div>
            <Hero />
            <JoinOurMission />
            <div className="px-6 pb-8">
                <GreenBanner>
                    <div className="flex w-full flex-col lg:flex-row md:items-center ">
                        <div className="flex-1 gap-10 text-start flex items-center justify-between">
                            <div className="flex-1">
                                <h4 className={`${title()} !block mb-3 max-w-[20ch] leading-[3rem]`}>
                                    Get in touch{" "}
                                    <span className={`${title()} text-secondary`}>
                                        Sustainable Future
                                    </span>
                                </h4>
                                <p className="max-w-[101ch] font-light mt-6">
                                Join us in making a difference. Contact RepowerLab to explore how we can work together to advance the circular economy in wind energy.
                                </p>
                           
                            </div>
                        </div>
                        <div className="flex relative ml-2 ">
                            <Link
                                href="/about/contact-us"
                                className={`scroll-smooth ${button({
                                    whiteLine: true,
                                })}`}
                            >
                                Connect
                            </Link>
                        </div>
                    </div>

                </GreenBanner>
            </div>
        </div>
    )
}
