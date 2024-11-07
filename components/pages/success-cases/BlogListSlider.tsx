"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import CardBlog, { BlogI } from "@/components/CardBlog";

const BlogListSlider = ({
  BlogList,
  setCurrentPage,
  currentPage,
  lastPage,
}: {
  BlogList: BlogI[];
  setCurrentPage: (page: number) => void;
  currentPage: number;
  lastPage: number;
}) => {
  return (
    <div className="md:hidden">
      <Swiper
        slidesPerView={1.2}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="swiper-blogs"
      >
        {BlogList[0] && (
          <SwiperSlide>
            <CardBlog blog={BlogList[0]} />
          </SwiperSlide>
        )}
        {BlogList[1] && (
          <SwiperSlide>
            <CardBlog blog={BlogList[1]} />
          </SwiperSlide>
        )}
        {BlogList[2] && (
          <SwiperSlide>
            <CardBlog blog={BlogList[2]} />
          </SwiperSlide>
        )}
        {BlogList[3] && (
          <SwiperSlide>
            <CardBlog blog={BlogList[3]} />
          </SwiperSlide>
        )}
      </Swiper>
    </div>
  );
};

export default BlogListSlider;
