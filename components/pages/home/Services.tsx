import { title } from '@/components/primitives'
import ServicesList from '@/components/ServicesList'
import { useTranslations } from 'next-intl'
import React from 'react'

export default function Services() {
    const t = useTranslations('Home.Services')
    return (
        <div className='py-[60px] md:py-[100px] w-full flex justify-center'>
            <div className="container w-full px-0 md:px-8">
                <div className="w-full px-4 flex justify-start md:justify-center">
                    <h2 className={`${title({ color: "primary" })} text-center`}>{t("title")}</h2>
                </div>
                <div className="pt-6 md:pt-[60px]">
                    <ServicesList />
                </div>
            </div>
        </div>
    )
}
