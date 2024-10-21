import CardBlog from "@/components/CardBlog";
import { title } from "@/components/primitives";
import axios from "axios";
import React, { useEffect, useState } from "react";

const RelatedPosts = () => {
  // const blogs = await getBlog();

  const [blogs, setBlogs] = useState<any>();

  useEffect(() => {
    const getBlogs = async () => {
      try {
        const response = await axios.get(
          `https://api.repowerlab.chimpance.digital/api/entries?page=1&per_page=3`
        );

        if (response?.status === 200) {
          setBlogs(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getBlogs()
  }, []);

  return (
    <section className="mt-20 py-9 mx-6 rounded-[20px] bg-grey-100 text-primary">
      <header className="px-8">
        <p className="mb-6 text-xl font-light">Related posts</p>
        <h4 className={` ${title()}`}>You may also like</h4>
      </header>
      <div className="mt-10 px-2 flex flex-col items-center lg:items-stretch lg:flex-row justify-between gap-[60px] w-full">
        <CardBlog blog={blogs?.data[0]} />
        <div className="min-h-full min-w-[2px] bg-grey-600/40 hidden lg:flex"></div>

        <CardBlog blog={blogs?.data[1]} />
        <div className="min-h-full min-w-[2px] bg-grey-600/40 hidden lg:flex"></div>

        <CardBlog blog={blogs?.data[2]} />
      </div>
    </section>
  );
};

export default RelatedPosts;
