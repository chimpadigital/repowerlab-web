"use client"
import { useWindowSize } from '@/utils/useResize';
import React from 'react'
// Lazy load del componente ProductsSwiper
const Hero = React.lazy(() => import('./Hero'));
const HeroMobile = React.lazy(() => import('./HeroMobile'));

export default function HeroContainer() {
    const size = useWindowSize()
    return (
        <>
            {
                size[0] > 1000 ?
                    <Hero />
                    :
                    <HeroMobile />
            }
        </>
    )
}
