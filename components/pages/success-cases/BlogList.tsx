"use client";
import CardBlog, { BlogI } from "@/components/CardBlog";
import React, { useEffect, useState } from "react";
import { Pagination } from "@nextui-org/react";
import axios from "axios";

const BlogList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [BlogList, setBlogList] = useState<BlogI[]>([]);
  const [lastPage, setLastPage] = useState(1);

  useEffect(() => {
    const getBlogs = async () => {
      try {
        const response = await axios.get(
          `https://api.repowerlab.chimpance.digital/api/entries?page=${currentPage}&per_page=6`
        );
        console.log(response);

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
    <div>
      <div
        className="grid grid-cols-1 lg:grid-cols-2 max-w-[1380px]  xl:grid-cols-3  justify-items-center 
      mx-auto"
      >
        {BlogList[0] && (
          <div className="lg:border-r border-grey-600 w-full  grid  place-items-center">
            <CardBlog blog={BlogList[0]} />
          </div>
        )}
        {BlogList[1] && (
          <div className="xl:border-r border-grey-600 w-full  grid  place-items-center">
            <CardBlog blog={BlogList[1]} />
          </div>
        )}
        {BlogList[2] && (
          <div className="lg:border-r xl:border-none border-grey-600 w-full  grid  place-items-center">
            <CardBlog blog={BlogList[2]} />
          </div>
        )}
        {BlogList[3] && (
          <div className="xl:border-r border-grey-600 w-full  grid  place-items-center">
            <CardBlog blog={BlogList[3]} />
          </div>
        )}
        {BlogList[4] && (
          <div className="lg:border-r border-grey-600 w-full  grid  place-items-center">
            <CardBlog blog={BlogList[4]} />
          </div>
        )}
        {BlogList[5] && <CardBlog blog={BlogList[5]} />}
      </div>
      <div className="flex justify-center gap-[4px] mt-20 mb-32">
        <button
          aria-label="first page"
          className="h-9 aspect-square rounded-full border-2 border-secondary fill-primary grid place-items-center disabled:border-gray-200 disabled:fill-gray-200"
          onClick={() => setCurrentPage(1)}
          disabled={currentPage === 1}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className="fill-inherit"
          >
            <path d="M11.726 12L12.666 11.06L9.61268 8L12.666 4.94L11.726 4L7.72602 8L11.726 12Z" />
            <path d="M7.33344 12L8.27344 11.06L5.2201 8L8.27344 4.94L7.33344 4L3.33344 8L7.33344 12Z" />
          </svg>
        </button>
        <Pagination
          page={currentPage}
          onChange={setCurrentPage}
          disableCursorAnimation
          showControls
          total={lastPage}
          initialPage={1}
          className="gap-2 text-primary font-bold"
          classNames={{
            item: "data-[active=true]:bg-secondary data-[active=true]:border-none !text-primary border-2 border-secondary",
            prev: "border-2 border-secondary text-primary data-[disabled=true]:border-gray-200",
            next: "border-2 border-secondary text-primary data-[disabled=true]:border-gray-200",
          }}
          radius="full"
          variant="light"
        />
        <button
          aria-label="last page"
          className="h-9 aspect-square rounded-full border-2 border-secondary fill-primary grid place-items-center disabled:border-gray-200 disabled:fill-gray-200"
          onClick={() => setCurrentPage(lastPage)}
          disabled={currentPage === lastPage}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className="fill-inherit"
          >
            <path d="M4.27398 4L3.33398 4.94L6.38732 8L3.33398 11.06L4.27398 12L8.27398 8L4.27398 4Z" />
            <path d="M8.66656 4L7.72656 4.94L10.7799 8L7.72656 11.06L8.66656 12L12.6666 8L8.66656 4Z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default BlogList;
