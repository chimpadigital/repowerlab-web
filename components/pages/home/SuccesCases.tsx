import CardBlog, { BlogI } from '@/components/CardBlog'
import { title } from '@/components/primitives'
import React from 'react'
const prueba: BlogI = {
    title: "Wind turbines",
    published_at: "October 22, 2024",
    description: "Lorem ipsum",
    slug: "nuevo-blog",
    id: "1",
    writer: {
        name: "Victoria Galeano",
        img: null
    },
    images: []
}

export default function SuccesCases() {
    return (
        <div className='py-[100px] w-full flex justify-center relative z-10'>
            <div className="container">
                <div className="flex flex-col items-center justify-center">
                    <h2 className={`${title({ color: "primary" })} text-center w-full`}>Success Cases</h2>
                    <p className='max-w-[680px] pt-6 text-grey-600 w-full text-center font-light'>
                        Discover RepowerLab’s success in decommissioning, retrofitting, and reselling refurbished wind turbines, highlighting our circular economy solutions for the energy sector.
                    </p>
                    <div className="mt-12 flex flex-col items-center lg:items-stretch lg:flex-row justify-center gap-[60px] w-full">
                        <CardBlog blog={prueba} />
                        <div className="min-h-full min-w-[2px] bg-grey-600/40 hidden lg:flex"></div>
                        <CardBlog blog={prueba} />
                        <div className="min-h-full min-w-[2px] bg-grey-600/40 hidden lg:flex"></div>
                        <CardBlog blog={prueba} />
                    </div>
                </div>
            </div>
        </div>
    )
}
