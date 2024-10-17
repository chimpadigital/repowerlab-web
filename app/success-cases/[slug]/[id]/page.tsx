import HeroBreadcrumb from "@/components/HeroBreadcrumb";
import { title } from "@/components/primitives";
import React from "react";
import axios from "axios";
import sanitizeHtml from "sanitize-html";
import RelatedPosts from "@/components/pages/success-cases/case/RelatedPosts";

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Success cases", href: "/success-cases" },
  { label: "Case", href: "/case" },
];

const getBlog = async (id: string) => {
  try {
    const response = await axios.get(
      `https://api.repowerlab.chimpance.digital/api/entries/${id}`
    );

    if (response?.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
};

const CaseDateail = async ({
  params,
}: {
  params: { slug: string; id: string };
}) => {
  const blog = await getBlog(params.id);

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
              {blog?.data?.title}
            </h4>
          </div>
        </HeroBreadcrumb>
      </section>
      <article
        className="px-14 blog-container"
        dangerouslySetInnerHTML={{
          __html: sanitizeHtml(blog?.data?.content, {
            allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img"]),
          }),
        }}
      />
      <RelatedPosts />
    </>
  );
};

export default CaseDateail;
