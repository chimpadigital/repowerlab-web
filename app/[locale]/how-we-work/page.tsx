import GreenBanner from '@/components/GreenBanner'
import JoinOurMission from '@/components/pages/how-we-work/JoinOurMission'
import { button, title } from '@/components/primitives'
import React from 'react'
import { Link } from '@/i18n/routing';
import HeroContainer from '@/components/pages/how-we-work/HeroContainer'
import { useTranslations } from 'next-intl';


import { Metadata } from "next";
import { metadataHowWeWork } from '@/app/getMetaData';

export async function generateMetadata({ params: { locale } }: any): Promise<Metadata> {
    return metadataHowWeWork(locale);
}


export default function page() {
    const t = useTranslations("HowWeWork.Banner")
    return (
        <div>
            <HeroContainer />
            <JoinOurMission />
            <div className="px-4 md:px-6">
                <GreenBanner>
                    <div className="flex w-full flex-col lg:flex-row md:items-center ">
                        <div className="flex-1 gap-10 text-start flex items-center justify-between">
                            <div className="flex-1">
                                <h1 className={`${title()} !block mb-3 max-w-[20ch] leading-[3rem]`}>
                                    {t("title1") +" "}
                                    <span className={`${title()} text-secondary`}>
                                        {t("title2")}
                                    </span>
                                </h1>
                                <div className="max-w-[101ch] font-light mt-6 text-[18px]">
                                    <p className='max-w-[580px]'>
                                        {t("p")}
                                    </p>
                                </div>

                            </div>
                        </div>
                        <div className="flex relative left-10 ml-2 pt-[1.8rem] md:pt-4 w-full md:w-fit justify-center md:justify-start">
                            <Link
                                href="/about/contact-us"
                                className={`scroll-smooth ${button({
                                    whiteLine: true,
                                })}`}
                            >
                                {t("connect")}
                            </Link>
                        </div>
                    </div>

                </GreenBanner>
            </div>
        </div>
    )
}
