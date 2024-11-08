"use client";
import CardBlog, { BlogI } from "@/components/CardBlog";
import React, { useEffect, useState } from "react";
import { Pagination } from "@nextui-org/react";
import axios from "axios";
import BlogListGrid from "./BlogListGrid";
import BlogListGridMobile from "./BlogListGridMobile";

const BlogList = () => {
  return (
    <div>
      <BlogListGrid />
      <BlogListGridMobile />
    </div>
  );
};

export default BlogList;
