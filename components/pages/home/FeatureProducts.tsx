import ScrollProducts from '@/components/ScrollProducts'
import React from 'react'
import { title } from '@/components/primitives'

export default function FeatureProducts() {
    return (
        <div>
            <div>
                <h5 className={title()}>
                    Feature Products
                </h5>
            </div>
            <ScrollProducts />

        </div>
    )
}
