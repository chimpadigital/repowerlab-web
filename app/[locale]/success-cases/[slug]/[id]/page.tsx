"use client";
import HeroBreadcrumb from "@/components/HeroBreadcrumb";
import { title } from "@/components/primitives";
import React, { use, useEffect, useState } from "react";
import axios from "axios";
import sanitizeHtml from "sanitize-html";
import RelatedPosts from "@/components/pages/success-cases/case/RelatedPosts";
import { useParams } from "next/navigation";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Success cases", href: "/success-cases" },
  { label: "Case", href: "/case" },
];

const replaceOembedWithIframe = (htmlContent: any) => {
  const div = document.createElement("div");
  div.innerHTML = htmlContent;
 
  const oembeds = div.querySelectorAll("oembed");

  oembeds.forEach((oembed) => {
    const url = oembed.getAttribute("url");

    const youtubeRegex =
      /https:\/\/www\.youtube\.com\/watch\?v=([a-zA-Z0-9_-]+)/;
    const match = youtubeRegex.exec(url as string);

    if (match) {
      const videoId = match[1];
      const iframe = document.createElement("iframe");
      iframe.width = "560";
      iframe.height = "315";
      iframe.src = `https://www.youtube.com/embed/${videoId}`;
      iframe.title = "YouTube video player";
      iframe.allow =
        "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
      iframe.referrerPolicy = "strict-origin-when-cross-origin";
      iframe.allowFullscreen = true;

      oembed.replaceWith(iframe);
    }
  });

  return div.innerHTML;
};

const CaseDateail = () => {
  const params = useParams();
  const t = useTranslations("SuccessCases")
  const [blogDetail, setBlogDetail] = useState<any>();

  useEffect(() => {
    const getBlogDetail = async () => {
      try {
        const response = await axios.get(
          `https://api.repowerlab.chimpance.digital/api/entries/${params?.id}`
        );
        if (response?.status === 200) {

          setBlogDetail(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getBlogDetail();
  }, []);

  const cleanContent = blogDetail?.data?.content ? sanitizeHtml(blogDetail?.data?.content, {
    allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img", "oembed", "iframe"]),
    allowedAttributes: {
      oembed: ["url"],
      img: ["src"],
      a: ["href"],
      iframe: ["src"],
      "*": ["class"],
    },
  }) : ""

  const transformedContent = replaceOembedWithIframe(cleanContent);

  if (blogDetail?.data) {
    return (
      <>
        <section className="w-full px-6 ">
          <HeroBreadcrumb
            img="/images/cases/bg-hero.webp"
            breadcrumbs={breadcrumbs}
            position="left"
          >
            <div className="md:hidden mt-4">
              <Link href="/success-cases" className="text-white items-center font-medium flex gap-4">
                <span>
                  <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 7L1 7M1 7L7 1M1 7L7 13" stroke="white" strokeWidth="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </span>
                {t("title")}
                
                </Link>
            </div>
            <div className="flex flex-col text-whit mt-[60px] md:mt-10">
              <h4 className={`text-white mr-auto text-left ${title()}`}>
                {blogDetail?.data?.title ? blogDetail?.data?.title : ""}
              </h4>
            </div>
          </HeroBreadcrumb>
        </section>

        <article
          className="px-14 blog-container container mx-auto"
          dangerouslySetInnerHTML={{ __html: cleanContent?.includes('oembed') ? transformedContent : cleanContent }}
        ></article>

        <RelatedPosts categoria={blogDetail?.data?.category} />
      </>
    );
  }
};

export default CaseDateail;
