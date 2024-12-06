import Title from '@/atoms/Title'
import HeroBreadcrumb from '@/components/HeroBreadcrumb'
import { title } from '@/components/primitives'
import { useTranslations } from 'next-intl'
import React from 'react'

export default function page() {
    const t = useTranslations("Marketplace")
    return (
        <section className="px-6">
            <HeroBreadcrumb
                objectPosition='bottom'
                img="/images/market/bg-market.png"
                position="left"
            >
                <div className="flex flex-col w-full flex  min-h-[70vh] text-white mt-10">
                    <Title title={t.raw('title')} className={`text-white  pt-[15vh] mr-auto text-left ${title()}`}>
                        
                    </Title>
                </div>
            </HeroBreadcrumb>
        </section>
    )
}
