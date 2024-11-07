"use client";
import CardBlog, { BlogI } from "@/components/CardBlog";
import React, { useEffect, useState } from "react";
import { Pagination } from "@nextui-org/react";
import axios from "axios";
import BlogListGrid from "./BlogListGrid";
import BlogListSlider from "./BlogListSlider";

const BlogList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [BlogList, setBlogList] = useState<BlogI[]>([]);
  const [lastPage, setLastPage] = useState(1);

  useEffect(() => {
    const getBlogs = async () => {
      try {
        const response = await axios.get(
          `https://api.repowerlab.chimpance.digital/api/entries?page=${currentPage}&per_page=6&sort=-created_at`
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
    <div>
      <BlogListGrid
        BlogList={BlogList}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        lastPage={lastPage}
      />
      <BlogListSlider
        BlogList={BlogList}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        lastPage={lastPage}
      />
    </div>
  );
};

export default BlogList;
