import { title } from '@/components/primitives'
import ServicesList from '@/components/ServicesList'
import React from 'react'

export default function Services() {
    return (
        <div className='py-[100px] w-full flex justify-center'>
            <div className="container w-full px-8">
                <div className="w-full flex justify-center">
                    <h2 className={`${title({ color: "primary" })} text-center`}>Services</h2>
                </div>
                <div className="pt-[60px]">
                    <ServicesList />
                </div>
            </div>
        </div>
    )
}
