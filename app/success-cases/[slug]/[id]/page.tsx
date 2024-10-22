"use client";
import HeroBreadcrumb from "@/components/HeroBreadcrumb";
import { title } from "@/components/primitives";
import React, { use, useEffect, useState } from "react";
import axios from "axios";
import sanitizeHtml from "sanitize-html";
import RelatedPosts from "@/components/pages/success-cases/case/RelatedPosts";
import { useParams } from "next/navigation";

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

  const [blogDetail, setBlogDetail] = useState<any>();
  console.log(blogDetail);

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

  const cleanContent = sanitizeHtml(blogDetail?.data?.content, {
    allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img", "oembed"]),
    allowedAttributes: {
      oembed: ["url"],
      img: ["src"],
      a: ["href"],
      "*": ["class"],
    },
  });

  const transformedContent = replaceOembedWithIframe(cleanContent);

  return (
    <>
      <section className="w-full px-6">
        <HeroBreadcrumb
          img="/images/cases/bg-hero.webp"
          breadcrumbs={breadcrumbs}
          position="left"
        >
          <div className="flex flex-col text-white mt-10">
            <h4 className={`text-white mr-auto text-left ${title()}`}>
              {blogDetail?.data?.title}
            </h4>
          </div>
        </HeroBreadcrumb>
      </section>

      <article
        className="px-14 blog-container container mx-auto"
        dangerouslySetInnerHTML={{ __html: transformedContent }}
      ></article>

      <RelatedPosts />
    </>
  );
};

export default CaseDateail;
