import HeroBreadcrumb from '@/components/HeroBreadcrumb'
import React from 'react'

export default function page() {
const breadcrumbs = ["Home", "Our services"]
  return (
    <section className='w-full'>
        <HeroBreadcrumb img='/images/our-services/bg-hero.png' breadcrumbs={breadcrumbs}>
            <>Hola mundo</>
        </HeroBreadcrumb>
    </section>
  )
}
