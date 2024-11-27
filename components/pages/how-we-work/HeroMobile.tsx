import React from 'react'
import { dataWeWork, HowWorkI } from './data'
import { ArrowRight } from '@/components/icons'
import { useDisclosure } from '@nextui-org/react'
import ModalHowWork from './ModalHowWork'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { useTranslations } from 'next-intl'
import { RepowerIcon } from '../shared/navicons'

export default function HeroMobile() {
    const t = useTranslations("HowWeWork.Hero")
    return (
        <div className="px-4">
            <div className="h-[466px] mb-[120px] w-full bg-secondary relative rounded-[20px]">
                <div className="pt-[110px] px-6 text-primary relative z-10">
                    <h1 className='text-[26px] font-bold'>{t("title")}</h1>
                    <p className="pt-4 text-[18px]">{t("sub1") + " " + t("sub2")}
                    </p>
                </div>
                <div className="absolute top-0 left-0 w-full h-full bg-[url(/images/how-we-work/mask.png)] rounded-[20px] bg-no-repeat bg-cover"></div>
                <div className="relative">
                    <Swiper
                        slidesPerView={1.2}
                        spaceBetween={20}
                        grabCursor={true}
                        pagination={{
                            clickable: true,
                            el: ".swiper-pagination-blogs",
                        }}
                        modules={[Pagination]}
                        className="swiper-blogs swiper-how-we-work mt-[50px]"
                    >
                        {
                            dataWeWork.map((el, i) => (
                                <SwiperSlide key={i}>
                                    <CardMobile index={i} data={el} />
                                </SwiperSlide>

                            ))
                        }

                    </Swiper>
                    <div className="swiper-pagination-blogs h-10 mt-[25px] flex justify-center gap-2"></div>
                </div>
            </div>
        </div>
    )
}


const CardMobile = ({ index, data }: { index: number, data: HowWorkI }) => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure()
    const t = useTranslations("HowWeWork.Hero.data")
    return (
        <>
            <article onClick={() => { onOpen() }} style={{ backdropFilter: "blur(10px)" }} className='p-6 relative overflow-hidden blurRepower  w-[80vw] max-w-[400px] h-[300px] rounded-[20px] bg-[#2F2E2E]/40'>
                <h3 className='text-accent text-[90px]'>{index + 1}</h3>
                <RepowerIcon preserveAspectRatio="xMidYMid slice" className="absolute fill-grey-100/10 text-grey-100/10 -top-4 -right-4 h-[120px] w-[120px]"/>
                <h4 className='text-white font-bold text-[22px] relative z-10'>{t(data.title)}</h4>
                <div className="flex justify-end gap-2 w-full z-10 items-center pe-4 absolute bottom-4 left-0 text-white">
                    <p className='font-bold'>{t("read")}</p>
                    <div className="w-4 h-4 fill-white">
                        <ArrowRight />
                    </div>
                </div>
            </article>
            <ModalHowWork
                index={index}
                isOpen={isOpen}

                onOpenChange={onOpenChange}
                data={data} />
        </>
    )
}