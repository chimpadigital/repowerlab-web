import HeroBreadcrumb from '@/components/HeroBreadcrumb'
import { title } from '@/components/primitives'
import React from 'react'
import ScrollAccordion from '@/components/ScrollAccordion'

export default function page() {
  const breadcrumbs = ["Home", "Our services"]

  const array1 = [
    {
      title:"Wind Farm Decommissioning", 
      description:"Repowerlab specializes in the safe and efficient dismantling, relocation, and reassembly of onshore and offshore wind turbines. The company ensures strict adherence to environmental protection, safety standards, and local guidelines, with turbines being reinstalled, used for spare parts, or recycled.",
      img:"/images/our-services/e1.jpg"
    },
    {
      title:"Disassembly of Wind Turbines", 
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos molestiae, nostrum expedita laudantium necessitatibus earum deserunt fuga rerum delectus cumque aliquid eaque animi nesciunt illo fugit tempora pariatur, voluptatem voluptatum.",
      img:"/images/our-services/e2.jpg"
    },
    {
      title:"Onshore & Offshore Decommissioning", 
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos molestiae, nostrum expedita laudantium necessitatibus earum deserunt fuga rerum delectus cumque aliquid eaque animi nesciunt illo fugit tempora pariatur, voluptatem voluptatum.",
      img:"/images/our-services/e3.jpg"
    },
    {
      title:"Planning & Technical Studies", 
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos molestiae, nostrum expedita laudantium necessitatibus earum deserunt fuga rerum delectus cumque aliquid eaque animi nesciunt illo fugit tempora pariatur, voluptatem voluptatum.",
      img:"/images/our-services/e4.jpg"
    },
  ]
  return (
    <>
      <section className='w-full'>
        <HeroBreadcrumb img='/images/our-services/bg-hero.png' breadcrumbs={breadcrumbs}>
          <div className="flex justify-end text-white w-full">
            <div className='max-w-[500px]'>
              <h4 className={title({ size: "md" })}>Our services</h4>
              <p className="mt-6 font-light">RepowerLab offers a full range of services to maximize the value of your energy assets. From wind farm decommissioning and turbine retrofitting to resale, blade recycling, and expert installation support, we ensure precision, sustainability, and optimized performance at every stage.</p>
            </div>
          </div>
        </HeroBreadcrumb>
      </section>
      <ScrollAccordion  items={array1}/>
      <ScrollAccordion  items={array1} imgPosition='right'/>
    </>
  )
}
