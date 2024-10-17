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
            allowedTags: sanitizeHtml.defaults.allowedTags.concat([
              "img",
              "oembed",
            ]),
            allowedAttributes: {
              "oembed": ["url"],
              "img": ["src"],
              "*": ["class"],
            },
          }),
        }}
      ></article>
      {/* <article>
        <h2>
          <strong>rerumvitae</strong>
        </h2>
        <p>
          <i>Ut corrupti impedit.</i>
        </p>
        <p>
          Nam molestiae perspiciatis dolores molestias et doloremque aperiam.
        </p>
        <p>
          <i>Nobis occaecati dolor placeat qui omnis dicta repellat.</i>
        </p>
        <ul>
          <li>Soluta quo nulla a.</li>
          <li>Ipsa voluptatem.</li>
          <li>Nemo quas.</li>
          <li>Sapiente quos quae.</li>
          <li>Nesciunt.</li>
        </ul>
        <p>
          <a href="https://www.youtube.com/watch?v=JN-nme9oF10&amp;ab_channel=KevinPowell">
            Ex ad sapiente.
          </a>
        </p>
        <ul>
          <li>Maiores quo quam.</li>
        </ul>
        <blockquote>
          <p>
            Rem fugiat sit aspernatur cum ipsam aliquid.
            <a href="example.com">Et sunt molestiae a ratione.</a>
          </p>
        </blockquote>
        <h3>Ipsa labore dolor est minus.</h3>
        <h3>
          Ut consequatur nobis id aperiam nam sunt.<i>Quis sint.</i>
        </h3>
        <h3>&nbsp;</h3>
        <figure className="table">
          <table>
            <tbody>
              <tr>
                <td>jksj</td>
                <td>jdshfkjdsh</td>
                <td>dkjdkfjfjs</td>
              </tr>
              <tr>
                <td>fjskdfjsk</td>
                <td>fkjslsjdflj</td>
                <td>lsjfskfjdksl</td>
              </tr>
            </tbody>
          </table>
        </figure>
        <ul>
          <li>
            <h3>test lista</h3>
          </li>
          <li>
            <h3>
              lista 2<br />
              &nbsp;
            </h3>
          </li>
        </ul>
        <h3>Titulo 2</h3>
        <h4>Titulo 3</h4>
        <p>&nbsp;</p>
        <ol>
          <li>tesad</li>
          <li>teas</li>
        </ol>
        <figure className="media">
          <oembed url="https://www.youtube.com/watch?v=JN-nme9oF10&amp;ab_channel=KevinPowell"></oembed>
        </figure>
        <figure className="image">
          <img
            // style="aspect-ratio:5472/3648;"
            src="https://zonainmo.chimpance.digital/public/storage/images/QbCD94vYsaRw9KgbMqw0H3X1cquEvmeaiBDPi6Dl.jpg"
            width="5472"
            height="3648"
          />
        </figure>
      </article> */}
      <RelatedPosts />
    </>
  );
};

export default CaseDateail;
