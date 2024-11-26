import { title } from "@/components/primitives";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import CardBlog, { BlogI } from "@/components/CardBlog";
import { useTranslations } from "next-intl";

const RelatedPosts = ({ categoria }: { categoria: string | null }) => {
  const [blogs, setBlogs] = useState<any>();
  const t = useTranslations("SuccessCases")

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
            <p className="mb-6 text-xl font-light">{t("related")}</p>
            <h4 className={` ${title()}`}>{t("may")}</h4>
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
      <section className="md:hidden mt-10">
        <header className="px-4 text-primary">
          <p className="text-base font-light">{t("related")}</p>
          <h4 className={` ${title()}`}>{t("may")}</h4>
        </header>
        <Swiper
          slidesPerView={1.2}
          spaceBetween={10}
          grabCursor={true}
          pagination={{
            clickable: true,
            el: ".swiper-pagination-blogs",
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
        <div className="swiper-pagination-blogs h-10 flex justify-center gap-2 mt-2"></div>
      </section>
    </div>
  );
};

export default RelatedPosts;
