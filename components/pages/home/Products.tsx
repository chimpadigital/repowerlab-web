import { title } from '@/components/primitives'
import ProductCard from '@/components/ProductCard'
import React from 'react'

export default function Products() {
  return (
    <div className='py-[100px] w-full flex-col items-center flex justify-center'>
      <div className="container w-full px-8">
        <div className="w-full flex justify-center items-center flex-col">
          <h2 className={`${title({ color: "primary" })} text-center`}>Products</h2>
          <p className="text-center max-w-[800px] pt-6 text-grey-600">RepowerLab offers high-quality unused and refurbished wind turbines, spare parts, and recycled materials, with a focus on sustainability and comprehensive support from procurement to installation.</p>
        </div>

      </div>
      <div className="pt-[60px] w-full">
        <div className="grid grid-cols-4 gap-[1px]">
          <div className="col-span-1">
            <ProductCard
              description='New turbines from canceled projects, offering top performance at a lower cost'
              href={"marketplace/"}
              height='65vh'
              title='Unused <br/> wind turbines'
              img='/images/home/products/1.webp' />
          </div>
          <div className="col-span-1">
            <ProductCard
              description='New turbines from canceled projects, offering top performance at a lower cost'
              href={"marketplace/"}
              height='65vh'
              title='Refurbished <br/>  wind turbines'
              img='/images/home/products/2.webp' />
          </div>
          <div className="col-span-1">
            <ProductCard
              description='New turbines from canceled projects, offering top performance at a lower cost'
              href={"marketplace/"}
              height='65vh'
              title='Used <br/> wind turbines'
              img='/images/home/products/3.webp' />
          </div>
          <div className="col-span-1">
            <ProductCard
              description='New turbines from canceled projects, offering top performance at a lower cost'
              href={"marketplace/"}
              height='65vh'
              title='Wind turbine <br/> spare parts'
              img='/images/home/products/4.webp' />
          </div>
        </div>
      </div>
    </div>
  )
}
