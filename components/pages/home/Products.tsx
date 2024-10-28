import { ArrowButtonIcon } from '@/components/icons'
import { title } from '@/components/primitives'
import ProductCard from '@/components/ProductCard'
import Link from 'next/link'
import React from 'react'

export default function Products() {
  return (
    <div className='py-[100px] w-full flex-col items-center flex justify-center'>
      <div className="container relative z-10 w-full px-8">
        <div className="w-full flex justify-center items-center flex-col">
          <h2 className={`${title({ color: "primary" })} text-center`}>Products</h2>
          <p className="text-center max-w-[800px] pt-6 text-grey-600">RepowerLab offers high-quality unused and refurbished wind turbines, spare parts, and recycled materials, with a focus on sustainability and comprehensive support from procurement to installation.</p>
        </div>

      </div>
      <div className="pt-[60px] w-full">
        <div className="grid grid-cols-4">
          <div className="col-span-1">
            <ProductCard
              description='Turbines from canceled projects, offering top performance at a lower cost'
              href={"marketplace/"}
              height='65vh'
              title='Unused <br/> wind turbines'
              img='/images/home/products/1a.png' />
          </div>
          <div className="col-span-1">
            <ProductCard
              description='Remanufactured turbines, providing a cost-effective way to extend wind farm life'
              href={"marketplace/"}
              height='65vh'
              title='Refurbished <br/>  wind turbines'
              img='/images/home/products/2a.png' />
          </div>
          <div className="col-span-1">
            <ProductCard
              description='Budget-friendly turbines sold as-is for installation or refurbishment.'
              href={"marketplace/"}
              height='65vh'
              title='Used <br/> wind turbines'
              img='/images/home/products/3a.png' />
          </div>
          <div className="col-span-1">
            <ProductCard
              description='New and refurbished parts to keep turbines running efficiently.'
              href={"marketplace/"}
              height='65vh'
              title='Wind turbine <br/> spare parts'
              img='/images/home/products/4a.png' />
          </div>
        </div>
        <div className="py-4 mt-4 flex justify-center w-full">
          <Link href="products/wind-turbines" className='w-full mt-6 max-w-[180px] relative overflow-hidden gap-4 items-center transition-all duration-[600] py-2 px-6 rounded-full  text-white flex justify-between hover:max-w-[190px]'>
            <div className="w-full absolute h-full top-0 left-0 bg-primary">
            </div>
            <span className='relative text-[18px]'>Read more</span>

            <ArrowButtonIcon className="relative z-10 text-white" />

          </Link>
        </div>
      </div>
    </div>
  )
}
