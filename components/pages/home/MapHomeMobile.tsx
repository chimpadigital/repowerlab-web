"use client"
import React from 'react'
import { useTranslations } from 'next-intl'

export default function MapHomeMobile() {
    const t = useTranslations('Home.Numbers')
    return (
        <div className=' bg-[url(/images/home/mapa-mob.png)] bg-no-repeat px-6 py-[40px] bg-cover bg-center rounded-[20px]'>
            <h4 className='text-[22px] text-white font-bold'>{t('title')}</h4>
            <p className="pt-2 text-[18px] text-white">{t('subtitle')}</p>
            <div className="flex justify-center items-center pt-12 flex-col gap-4">

                <CardM title={t.raw('card1')} number={416} />
                <CardM title={t.raw('card2')} number={29} />
                <CardM title={t.raw('card4')} number={16} />
                <CardM title={t.raw('card3')} number={45} />
            </div>
        </div>
    )
}


const CardM = ({ title, number }: { title: string, number: number }) => {
    return (
        <article
            className='flex flex-col text-white w-full max-w-[260px] blurRepower items-center justify-center p-4'
            style={{
                borderRadius: "10px",
                border: " 1px solid var(--gris, #F4F4F4)",
                background: "#4B4A4A50",
                backdropFilter: "blur(10px)"
            }}>
            <p className="font-light text-[17px]">{title}</p>
            <p className="font-bold text-[22px]">{number}</p>
        </article>
    )
}