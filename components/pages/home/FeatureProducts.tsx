"use client";
import ScrollProducts from "@/components/ScrollProducts";
import React from "react";
import { button, title } from "@/components/primitives";
import { Link } from "@/i18n/routing";
import { usePathname } from "next/navigation";
import { ArrowButtonIcon } from '@/components/icons'
import { useTranslations } from "next-intl";

export default function FeatureProducts({ paragraph }: { paragraph: string }) {
  const pathname = usePathname();
  const t = useTranslations('Home.FeaturedProduct')

  return (
    <div className="">
      <div className="flex gap-4 md:gap-0 justify-center items-center flex-col pt-[41px] px-4 pb-8 md:pb-[50px]">
        <h3 className={`${title()} text-primary mr-auto md:mr-0 !block`}>
          {t('title')}
        </h3>
        <p className={`text-grey-parrafo md:pt-6 max-w-[700px] md:text-center md:block ${pathname == "/es" || pathname == "/en" && " hidden"}`}>
          {t(paragraph)}
        </p>

      </div>
      <ScrollProducts />
      <div className="pt-4 mt-4 flex justify-center w-full md:hidden">
        <Link href="/marketplace" className='w-full my-6 max-w-[230px] relative overflow-hidden gap-2 items-center transition-all duration-[600] py-2 px-6 rounded-full  text-white flex justify-between '>
          <div className="w-full absolute h-full top-0 left-0 bg-primary">
          </div>
          <span className='relative text-[18px]'>{t('button')}</span>

          <ArrowButtonIcon className="relative z-10 text-white" />

        </Link>
      </div>
      <div className="w-full py-[60px]  justify-center items-center hidden md:flex">
        <Link
          href="/marketplace"
          className={`${button()} flex gap-2 items-center`}
        >
          {t('button')}
          <svg
            width="21"
            height="11"
            viewBox="0 0 21 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.8231 5.32647C20.7177 5.45589 20.6224 5.59546 20.5047 5.71321C19.0019 7.215 17.4965 8.71374 15.9911 10.213C15.7628 10.4404 15.5117 10.4734 15.3048 10.3074C15.1057 10.1475 15.0659 9.88208 15.2177 9.67703C15.2778 9.59634 15.3502 9.52376 15.422 9.4522C16.6151 8.26254 17.8082 7.07339 19.0029 5.88577C19.0548 5.834 19.119 5.79441 19.1776 5.74924C19.1679 5.72691 19.1588 5.70458 19.1491 5.68225C19.0666 5.68225 18.984 5.68225 18.901 5.68225C12.8341 5.68225 6.76712 5.68225 0.700691 5.68123C0.586576 5.68123 0.469914 5.67514 0.358346 5.6523C0.144891 5.60815 -0.00641355 5.40767 0.000209187 5.19705C0.00683192 4.99048 0.15457 4.80219 0.358856 4.76159C0.470423 4.73925 0.587086 4.73418 0.70171 4.73418C6.76151 4.73316 12.8218 4.73316 18.8816 4.73316H19.1934C19.1048 4.63978 19.0533 4.58243 18.9988 4.52812C17.7777 3.30954 16.5565 2.09044 15.3339 0.873382C15.1693 0.709449 15.068 0.531813 15.1607 0.294288C15.2682 0.019713 15.61 -0.0883911 15.851 0.0811246C15.9335 0.138983 16.0053 0.213083 16.0772 0.284137C17.554 1.75395 19.0314 3.22376 20.5052 4.69713C20.6229 4.81437 20.7177 4.95445 20.8226 5.08387V5.32698L20.8231 5.32647Z"
              fill="currentColor"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
