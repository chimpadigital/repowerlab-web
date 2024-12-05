import HeroBreadcrumb from '@/components/HeroBreadcrumb'
import { title } from '@/components/primitives'
import React from 'react'

export default function page() {
    return (
        <section className="px-6">
            <HeroBreadcrumb
                objectPosition='bottom'
                img="/images/market/bg-market.png"
                position="left"
            >
                <div className="flex flex-col w-full flex  min-h-[70vh] text-white mt-10">
                    <h1 className={`text-white  pt-[15vh] mr-auto text-left ${title()}`}>
                        Marketplace <br />
                        under construction
                    </h1>
                </div>
            </HeroBreadcrumb>
        </section>
    )
}
