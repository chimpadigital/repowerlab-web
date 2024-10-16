import React from 'react'
import { subtitle } from './primitives';
import Image from 'next/image';
import Link from 'next/link';

export interface BlogI {
  title: string;
  published_at: string;
  slug: string;
  writer: {
    name: string;
    img: string | null
  }
  img: string;
  description: string;
}



export default function CardBlog({ blog, }: { blog: BlogI }) {

  return (
    <article className={`w-[400px] p-6`}>
      <div className="flex gap-2 flex-col">

        <h5 className={`${subtitle({ colors: "primary", size: "md" })}`}>{blog.title}</h5>

        <Image width={400} height={200} alt="" className="w-full object-cover rounded-[10px] " src={blog.img} />

        <h5 className={`${subtitle({ colors: "grey" })} font-light`}>{blog.description}</h5>

        <div className="flex justify-between">
          <div className="flex gap-2"></div>
          <p className="text-grey-600">{blog.published_at}</p>
        </div>

        <div className="w-full flex justify-end">
          <Link href={`blog/${blog.slug}`} className='font-bold flex gap-2 items-center text-primary cursor-pointer'>
            Read More
            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="13" viewBox="0 0 8 13" fill="none">
              <path d="M1 12L7 6.5L1 1" stroke="#1C4741" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  )
}
