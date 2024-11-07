import { title } from "@/components/primitives";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import CardBlog, { BlogI } from "@/components/CardBlog";

const RelatedPosts = ({ categoria }: { categoria: string | null }) => {
  const [blogs, setBlogs] = useState<any>();

  useEffect(() => {
    const getBlogs = async () => {
      try {
        const response = await axios.get(
          `https://api.repowerlab.chimpance.digital/api/entries?${categoria && `filter[category])=${categoria}&`}page=1&per_page=3&sort=-created_at`
        );

        if (response?.status === 200) {
          setBlogs(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getBlogs();
  }, []);
  console.log(blogs?.data);

  return (
    <div>
      <section className="mt-20 py-9 hidden md:block mx-6 rounded-[20px] bg-grey-100 text-primary">
        <div className=" container mx-auto">
          <header className="px-8">
            <p className="mb-6 text-xl font-light">Related posts</p>
            <h4 className={` ${title()}`}>You may also like</h4>
          </header>
          {blogs?.data?.length > 0 && (
            <div className="mt-10 px-2 flex flex-col items-center lg:items-stretch lg:flex-row justify-between gap-[60px] w-full">
              {blogs?.data[0] && <CardBlog blog={blogs?.data[0]} />}
              {blogs?.data?.length > 1 && (
                <div className="blog-pos1 min-h-full min-w-[2px] bg-grey-600/40 hidden lg:flex"></div>
              )}

              {blogs?.data[1] && <CardBlog blog={blogs?.data[1]} />}
              {blogs?.data[1] && (
                <div className="blog-pos2 min-h-full min-w-[2px] bg-grey-600/40 hidden lg:flex"></div>
              )}

              {blogs?.data[2] ? (
                <CardBlog blog={blogs?.data[2]} />
              ) : (
                <div className="w-[400px]"></div>
              )}
            </div>
          )}
        </div>
      </section>
      <section className=" md:hidden">
        <Swiper
          slidesPerView={1.2}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="swiper-blogs"
        >
          {blogs?.data[0] && (
            <SwiperSlide>
              <CardBlog blog={blogs?.data[0]} />
            </SwiperSlide>
          )}

          {blogs?.data[1] && (
            <SwiperSlide>
              <CardBlog blog={blogs?.data[1]} />
            </SwiperSlide>
          )}
          {blogs?.data[2] && (
            <SwiperSlide>
              <CardBlog blog={blogs?.data[2]} />
            </SwiperSlide>
          )}
        </Swiper>
      </section>
    </div>
  );
};

export default RelatedPosts;
