"use client"
import CardBlog, { BlogI } from '@/components/CardBlog'
import { title } from '@/components/primitives'
import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { IsotipoRepowerlab } from '@/components/icons';

const prueba: BlogI = {
    title: "Wind turbines",
    published_at: "October 22, 2024",
    description: "Lorem ipsum",
    slug: "nuevo-blog",
    id: "1",
    writer: {
        name: "Victoria Galeano",
        img: null
    },
    images: []
}

export default function SuccesCases() {

    const [currentPage, setCurrentPage] = useState(1);
    const [blogList, setBlogList] = useState<BlogI[]>([]);
    const [lastPage, setLastPage] = useState(1);

    useEffect(() => {
        const getBlogs = async () => {
            try {
                const response = await axios.get(
                    `https://api.repowerlab.chimpance.digital/api/entries?page=${currentPage}&per_page=3`
                );

                if (response?.status === 200) {
                    setBlogList(response?.data?.data);
                    setLastPage(response?.data?.last_page);
                }
            } catch (error) {
                console.log(error);
            }
        };

        getBlogs();
    }, [currentPage]);
    return (
        <div className='pb-[120px] w-full flex justify-center relative z-10'>
            <div className="absolute text-grey-100 top-[-100px] z-0 left-[-50px]">
                <IsotipoRepowerlab className="w-[350px] h-auto fill-grey-100 " />
            </div>
            <div className="container relative z-10">
                <div className="flex flex-col items-center justify-center">
                    <h2 className={`${title({ color: "primary" })} text-center w-full`}>Success Cases</h2>
                    <p className='max-w-[680px] pt-6 text-grey-parrafo w-full text-center font-light'>
                        Discover RepowerLab’s success in decommissioning, retrofitting, and reselling refurbished wind turbines, highlighting our circular economy solutions for the energy sector.
                    </p>
                    {
                        blogList &&

                        <div className="mt-12 flex flex-col items-center lg:items-stretch lg:flex-row justify-center gap-[60px] w-full">
                            {
                                blogList.map((el, i) => (
                                    <Fragment key={"fragment" + i}>
                                        {
                                            el &&
                                            (
                                                <CardBlog blog={el} />
                                            )
                                        }
                                        {
                                            i != (blogList.length - 1) &&
                                            (
                                                <div className="min-h-full min-w-[2px] bg-grey-600/40 hidden lg:flex"></div>
                                            )
                                        }
                                    </Fragment>
                                ))
                            }

                        </div>
                    }
                </div>
            </div>
        </div>
    )
}
