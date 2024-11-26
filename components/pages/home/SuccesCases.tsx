"use client";
import CardBlog, { BlogI } from "@/components/CardBlog";
import { title } from "@/components/primitives";
import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { IsotipoRepowerlab } from "@/components/icons";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { useTranslations } from "next-intl";

const prueba: BlogI = {
  title: "Wind turbines",
  published_at: "October 22, 2024",
  description: "Lorem ipsum",
  slug: "nuevo-blog",
  id: "1",
  writer: {
    name: "Victoria Galeano",
    img: null,
  },
  images: [],
};

export default function SuccesCases() {
  const [currentPage, setCurrentPage] = useState(1);
  const [blogList, setBlogList] = useState<BlogI[]>([]);
  const [lastPage, setLastPage] = useState(1);
  const t = useTranslations('Home.SuccesCases')
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
    <div className="pb-[0px] lg:pb-[120px] w-full flex justify-center relative z-10">
      <div className="absolute !text-grey-100 z-0 left-[-50px] hidden md:block">
        <IsotipoRepowerlab className="w-[350px] h-auto !fill-grey-100 " />
      </div>
      <div className="container relative z-10">
        <div className="flex flex-col md:items-center justify-center">
          <h2
            className={`${title({ color: "primary" })} px-4 md:text-center w-full`}
          >
            {t("title")}
          </h2>
          <p className="max-w-[680px] pt-6 text-grey-parrafo w-full text-center hidden md:block">
            {t("sub")}
          </p>
          <p className="md:hidden pt-6 w-[90%] leading-7 text-grey-parrafo text-[18px] px-4">
            {t("subM")}
          </p>

          {blogList && (
            <div className="mt-12 hidden md:flex flex-col items-center lg:items-stretch lg:flex-row justify-center gap-[60px] w-full">
              {blogList.map((el, i) => (
                <Fragment key={"fragment" + i}>
                  {el && <CardBlog blog={el} />}
                  {i != blogList.length - 1 && (
                    <div className="min-h-full min-w-[2px] bg-grey-600/40 hidden lg:flex"></div>
                  )}
                </Fragment>
              ))}
            </div>
          )}
          <div className="mt-5 md:hidden relative">
            {
              blogList[0] && blogList[1] && blogList[2] ?
                <Swiper
                  slidesPerView={1.1}
                  spaceBetween={5}
                  grabCursor={true}
                  pagination={{
                    clickable: true,
                    el: ".swiper-pagination-success",
                  }}
                  modules={[Pagination]}
                  className="swiper-blogs"
                >

                  <SwiperSlide>
                    <CardBlog blog={blogList[0]} />
                  </SwiperSlide>



                  <SwiperSlide>
                    <CardBlog blog={blogList[1]} />
                  </SwiperSlide>


                  <SwiperSlide>
                    <CardBlog blog={blogList[2]} />
                  </SwiperSlide>


                  < div className="swiper-pagination-success h-10 flex justify-center gap-2 mt-6"></div>
                </Swiper>
                :
                ""
            }
          </div>
        </div>
      </div >
    </div >
  );
}
