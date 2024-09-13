import HeroBreadcrumb from '@/components/HeroBreadcrumb'
import { title } from '@/components/primitives'
import React from 'react'

export default function page() {
  const breadcrumbs = ["Home", "Our services"]
  return (
    <section className='w-full'>
      <HeroBreadcrumb img='/images/our-services/bg-hero.png' breadcrumbs={breadcrumbs}>
        <div className="flex justify-end text-white w-full">
          <div className='max-w-[500px]'>
            <h4 className={title({size:"md"})}>Our services</h4>
            <p className="mt-6 font-light">RepowerLab offers a full range of services to maximize the value of your energy assets. From wind farm decommissioning and turbine retrofitting to resale, blade recycling, and expert installation support, we ensure precision, sustainability, and optimized performance at every stage.</p>
          </div>
        </div>
      </HeroBreadcrumb>
    </section>
  )
}
