import ScrollProducts from '@/components/ScrollProducts'
import React from 'react'
import { title } from '@/components/primitives'

export default function FeatureProducts() {
    return (
        <div>
            <div className='flex justify-center items-center flex-col pt-8 pb-[80px]'>
                <h3 className={`${title()} text-primary mb-3 !block`}>
                    Feature Products
                </h3>
                <p className="text-grey-600 max-w-[700px] text-center">Welcome to the RepowerLab Marketplace, your destination for high-quality wind turbines, spare parts, and recycled materials, all thoroughly inspected for your energy asset needs.</p>
            </div>
            <ScrollProducts />

        </div >
    )
}
