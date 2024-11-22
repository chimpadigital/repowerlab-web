"use client"
import { ArrowButtonIcon } from '@/components/icons'
import { title } from '@/components/primitives'
import ProductCard from '@/components/ProductCard'
import { Link } from '@/i18n/routing';
import { useWindowSize } from '@/utils/useResize';
import { useTranslations } from 'next-intl';
import React from 'react'

// Lazy load del componente ProductsSwiper
const ProductsSwiper = React.lazy(() => import('./ProductsSwiper'));

export default function Products() {
  const t = useTranslations('Home.Products')
  const resize = useWindowSize()

  return (
    <div className='pt-0 md:py-[100px] w-full flex-col items-center flex justify-center'>
      <div className="container relative z-10 w-full px-4 md:px-8">
        <div className="w-full flex justify-center md:items-center flex-col">
          <h2 className={`${title({ color: "primary" })} md:text-center`}>{t('title')}</h2>
          <p className="text-center max-w-[800px] pt-6 text-grey-parrafo hidden md:block">{t('paragraph')}</p>
        </div>
      </div>
      {
        resize[0] > 1000 ?
          <div className="pt-[60px] w-full hidden md:block">
            <div className="grid grid-cols-4">
              <div className="col-span-1">
                <ProductCard
                  href={"/products/wind-turbines#includes"}
                  description={t.raw('cards.card1.description')}
                  title={t.raw('cards.card1.title')}
                  height='65vh'
                  img='/images/home/products/1a.png' />
              </div>
              <div className="col-span-1">
                <ProductCard
                  href={"/products/wind-turbines#includes"}
                  description={t.raw('cards.card2.description')}
                  title={t.raw('cards.card2.title')}
                  height='65vh'
                  img='/images/home/products/2a.png' />
              </div>
              <div className="col-span-1">
                <ProductCard
                  description={t.raw('cards.card3.description')}
                  title={t.raw('cards.card3.title')}
                  href={"/products/wind-turbines#includes"}
                  height='65vh'
                  img='/images/home/products/3a.png' />
              </div>
              <div className="col-span-1">
                <ProductCard
                  description={t.raw('cards.card4.description')}
                  title={t.raw('cards.card4.title')}
                  href={"/products/turbine-parts"}
                  height='65vh'
                  img='/images/home/products/4a.png' />
              </div>
            </div>
            <div className="py-4 mt-4 flex justify-center w-full">
              <Link href="/products/wind-turbines" className='w-full mt-6 max-w-[180px] relative overflow-hidden gap-4 items-center transition-all duration-[600] py-2 px-6 rounded-full  text-white flex justify-between hover:max-w-[190px]'>
                <div className="w-full absolute h-full top-0 left-0 bg-primary">
                </div>
                <span className='relative text-[18px]'>{t('read')}</span>

                <ArrowButtonIcon className="relative z-10 text-white" />

              </Link>
            </div>
          </div>

          :
          <div className="container px-4 pt-8">
            <ProductsSwiper />
            <div className="py-4 mt-4 flex justify-center w-full">
              <Link href="/products/wind-turbines" className='w-full mt-6 max-w-[180px] relative overflow-hidden gap-4 items-center transition-all duration-[600] py-2 px-6 rounded-full  text-white flex justify-between hover:max-w-[190px]'>
                <div className="w-full absolute h-full top-0 left-0 bg-primary">
                </div>
                <span className='relative text-[18px]'>{t('read')}</span>

                <ArrowButtonIcon className="relative z-10 text-white" />

              </Link>
            </div>
          </div>
      }
    </div>
  )
}
