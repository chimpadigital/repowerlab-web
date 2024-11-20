
"use client"
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Link } from '@/i18n/routing';
import Title from '@/atoms/Title';
import { ArrowRight } from '@/components/icons';

export default function ProductsSwiper() {
    return (
        <Swiper
            slidesPerView={1}
            spaceBetween={20}
            grabCursor={true}
            pagination={{
                clickable: true,
                el: ".swiper-pagination-services",
            }}
            modules={[Pagination]}
            className="swiper-services w-full"
        >
            <SwiperSlide >
                <CardMobile
                    description='Turbines from canceled projects, offering top performance at a lower cost.'
                    href={"/products/wind-turbines#includes"}
                    title='Unused \n wind turbines'
                    img='/images/home/products/1a.png' />
            </SwiperSlide>

            <SwiperSlide>
                <CardMobile
                    description='Remanufactured turbines, providing a cost-effective way to extend wind farm life.'
                    href={"/products/wind-turbines#includes"}
                    title='Refurbished \n wind turbines'
                    img='/images/home/products/2a.png' />
            </SwiperSlide>

            <SwiperSlide>
                <CardMobile
                    description='Budget-friendly turbines sold as-is for installation or refurbishment.'
                    href={"/products/wind-turbines#includes"}
                    title='Used \n wind turbines'
                    img='/images/home/products/3a.png' />

            </SwiperSlide>

            <SwiperSlide>
                <CardMobile
                    description='New and refurbished parts to keep turbines running efficiently.'
                    href={"/products/turbine-parts"}
                    title='Wind turbine \n spare parts'
                    img='/images/home/products/4a.png' />
            </SwiperSlide>

            <div className="swiper-pagination-services h-10 flex justify-center gap-2"></div>
        </Swiper>
    )
}


function CardMobile({
    title,
    img,
    description,
    href
}: {
    title: string;
    img: string;
    description?: string;
    href: string;
}) {
    return (
        <Link href={href} className='w-full flex justify-center'>
            <div
                className="rounded-[20px] max-w-[400px] w-full relative bg-cover w-full bg-bottom h-[395px] overflow-hidden mb-4"
                style={{
                    backgroundImage: `url(${img})`,
                }}
            >

                <article className="absolute w-full bottom-0 pt-10 pb-6 px-6 min-h-[156px] text-white backdrop-blur-lg bg-[#4B4A4A7A]">
                    <div className="flex justify-between">
                        <Title className="text-lg mb-3" title={title} />
                        <div className="w-12 h-12 bg-[#C5C5C526] right-0 relative z-10 text-white rounded-full border-white border cursor-pointer" >
                            <div className="flex h-full w-full justify-center items-center">
                                <div className="h-3 fill-white left-px relative">
                                    <ArrowRight />
                                </div>
                            </div>
                        </div>
                    </div>

                    <p className="text-sm font-light">{description}</p>
                </article>
            </div>
        </Link>
    );
}
