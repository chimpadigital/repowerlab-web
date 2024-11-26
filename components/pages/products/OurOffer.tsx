"use client";
import Paragraph from "@/atoms/Paragraph";
import { button } from "@/components/primitives";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { Link } from "@/i18n/routing";
import React, { useEffect } from "react";
import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";

export default function OurOffer() {
  const t = useTranslations("WindTurbines.OurOffer")
  const params = useParams();
  const itemClasses = {
    base: "py-0 w-full text-primary my-[20px] mb-0 md:my-[20px] bg-custom-gradient shadow-none md:shadow",
    title: "font-bold text-[16px] md:text-[24px] text-primary w-[80%]",
    heading: "shadow-none",
    content: "shadow-none text-[14px] md:text-base px-4 py-2",
    trigger:
      "px-2 py-[40px] shadow-none font-bold h-14 flex items-center border-none pr4",
    indicator: "text-primary text-[18px] md:text-[40px] -rotate-90",
  };

  const listWindTurbine1 = [
    {
      title: t.raw("accordions.ac1.list.l1.title"),
      text: t.raw("accordions.ac1.list.l1.text"),
    },
    {
      title: t.raw("accordions.ac1.list.l2.title"),
      text: t.raw("accordions.ac1.list.l2.text"),
    },
    {
      title: t.raw("accordions.ac1.list.l3.title"),
      text: t.raw("accordions.ac1.list.l3.text"),
    },
    {
      title: t.raw("accordions.ac1.list.l4.title"),
      text: t.raw("accordions.ac1.list.l4.text"),
    },

  ];



  const listWindTurbine2 = [
    {
      title: t.raw("accordions.ac1.list2.l1.title"),
      text: t.raw("accordions.ac1.list2.l1.text"),
    },
    {
      title: t.raw("accordions.ac1.list2.l2.title"),
      text: t.raw("accordions.ac1.list2.l2.text"),
    },
    {
      title: t.raw("accordions.ac1.list2.l3.title"),
      text: t.raw("accordions.ac1.list2.l3.text"),
    },
    {
      title: t.raw("accordions.ac1.list2.l4.title"),
      text: t.raw("accordions.ac1.list2.l4.text"),
    },
    {
      title: t.raw("accordions.ac1.list2.l5.title"),
      text: t.raw("accordions.ac1.list2.l5.text"),
    },
  ];

  const listPurchase = [
    {
      title: t.raw("accordions.ac3.list.l1.title"),
      text: t.raw("accordions.ac3.list.l1.text"),
    },
    {
      title: t.raw("accordions.ac3.list.l2.title"),
      text: t.raw("accordions.ac3.list.l2.text"),
    },
    {
      title: t.raw("accordions.ac3.list.l3.title"),
      text: t.raw("accordions.ac3.list.l3.text"),
    },
    {
      title: t.raw("accordions.ac3.list.l4.title"),
      text: t.raw("accordions.ac3.list.l4.text"),
    },
    {
      title: t.raw("accordions.ac3.list.l5.title"),
      text: t.raw("accordions.ac3.list.l5.text"),
    },
    {
      title: t.raw("accordions.ac3.list.l6.title"),
      text: t.raw("accordions.ac3.list.l6.text"),
    }

  ];

  const listPurchaseMobile = [
    {
      title: t.raw("accordions.ac3.listM.l1.title"),
      text: t.raw("accordions.ac3.listM.l1.text"),
    },
    {
      title: t.raw("accordions.ac3.listM.l2.title"),
      text: t.raw("accordions.ac3.listM.l2.text"),
    },
    {
      title: t.raw("accordions.ac3.listM.l3.title"),
      text: t.raw("accordions.ac3.listM.l3.text"),
    },
    {
      title: t.raw("accordions.ac3.listM.l4.title"),
      text: t.raw("accordions.ac3.listM.l4.text"),
    },
    {
      title: t.raw("accordions.ac3.listM.l5.title"),
      text: t.raw("accordions.ac3.listM.l5.text"),
    },
    {
      title: t.raw("accordions.ac3.listM.l6.title"),
      text: t.raw("accordions.ac3.listM.l6.text"),
    }
  ];

  const listSupport = [
    {
      title: t.raw("accordions.ac4.list.l1.title"),
      text: t.raw("accordions.ac4.list.l1.text"),
    },
    {
      title: t.raw("accordions.ac4.list.l2.title"),
      text: t.raw("accordions.ac4.list.l2.text"),
    },
    {
      title: t.raw("accordions.ac4.list.l3.title"),
      text: t.raw("accordions.ac4.list.l3.text"),
    },
  ];

  const listSupportMobile = [
    {
      title: t.raw("accordions.ac4.listM.l1.title"),
      text: t.raw("accordions.ac4.listM.l1.text"),
    },
    {
      title: t.raw("accordions.ac4.listM.l2.title"),
      text: t.raw("accordions.ac4.listM.l2.text"),
    },
    {
      title: t.raw("accordions.ac4.listM.l3.title"),
      text: t.raw("accordions.ac4.listM.l3.text"),
    },
  ];

  useEffect(() => {
    console.log(params);
  }, [params]);
  return (
    <section className="w-full flex flex-col md:flex-row items-center justify-center text-[22px]">
      <h3 className="text-center text-primary font-bold md:hidden">
        {t("title")}
      </h3>
      <div className="container px-6">
        <h3 className="text-[32px] text-primary font-bold hidden md:block">
          {t("title")}
        </h3>
        <Accordion
          variant="splitted"
          itemClasses={itemClasses}
          defaultExpandedKeys={["wind-turbines"]}
        >
          <AccordionItem
            key="wind-turbines"
            aria-label="Wind Turbines"
            title={t.raw("accordions.ac1.title")}
          >
            <hr className="w-full border border-grey-500" />
            <div className="py-4">
              <article className="hidden md:block">
                <ListComponent list={listWindTurbine1} />
              </article>
              <article className="md:hidden">
                <Paragraph className="text-[#444444] mb-3" text={t.raw("accordions.ac1.list.l1.textM")}></Paragraph>
                <br />
                <Paragraph className="text-[#444444] mb-3" text={t.raw("accordions.ac1.list.l2.textM")}></Paragraph>
                <br />

                <Paragraph className="text-[#444444] mb-3" text={t.raw("accordions.ac1.list.l4.textM")} />


                <Link href="/turbine-parts" className="underline text-sm text-end w-full justify-end">
                  {t.raw("accordions.ac1.link")}
                </Link>
              </article>
              <div className="flex flex-wrap gap-4 items-center justify-between">
                <div className="max-w-[725px] hidden md:block">
                  <div className="py-4">
                    <p className="font-bold text-grey-parrafo">
                      {t("accordions.ac1.title2")}
                    </p>
                  </div>
                  <ListComponent list={listWindTurbine2} />
                </div>
                <Link
                  href="/products/turbine-parts"
                  className={`${button()}  gap-2 items-center hidden md:flex`}
                >
                  {t("accordions.ac1.link2")}

                </Link>
              </div>
            </div>
          </AccordionItem>

          <AccordionItem key="2" aria-label="Materials" title={t.raw("accordions.ac2.title")}>
            <hr className="w-full border border-grey-500" />
            <div className="py-4">
              <article className="hidden md:block">
                <Paragraph
                  text={t.raw("accordions.ac2.text")}
                  className="text-grey-parrafo"
                />
              </article>
              <article className="md:hidden">
                <Paragraph
                  text={t.raw("accordions.ac2.textM")}
                  className="text-grey-parrafo"
                />
              </article>
            </div>
          </AccordionItem>

          <AccordionItem
            key="3"
            aria-label="Purchasing Support"
            title={t.raw("accordions.ac3.title")}
          >
            <hr className="w-full border border-grey-500" />
            <div className="py-4">
              <article className="md:hidden mb-3">
                <Paragraph
                  text={t.raw("accordions.ac3.textM")}
                  className="text-grey-parrafo"
                />
              </article>
              <article className="hidden md:block">
                <Paragraph
                  text={t.raw("accordions.ac3.text")}
                  className="text-grey-parrafo"
                />
              </article>
              <article className="hidden md:block">
                <ListComponent list={listPurchase} />
              </article>
              <article className="md:hidden">
                {listPurchaseMobile.map((item, index) => {
                  return (
                    <p
                      key={index.toString() + item.title}
                      className="text-[#444444]  mb-3"
                    >
                      <span className="font-bold">{item.title}:</span>{" "}
                      {item.text}
                      <br />
                    </p>
                  );
                })}
              </article>
            </div>
          </AccordionItem>

          <AccordionItem
            key="4"
            aria-label="Installation Support"
            title={t.raw("accordions.ac4.title")}
          >
            <hr className="w-full border border-grey-500" />
            <div className="py-4">
              <article className="hidden md:block">
                <Paragraph
                  text={t.raw("accordions.ac4.text")}
                  className="text-grey-parrafo"
                />
              </article>
              <article className="mb-1 md:hidden">
                <Paragraph
                  text={t.raw("accordions.ac4.textM")}
                  className="text-grey-parrafo"
                />
              </article>
              <article className="hidden md:block">
                <ListComponent list={listSupport} />
              </article>
              <article className="md:hidden">
                {listSupportMobile.map((item, index) => {
                  return (
                    <p
                      key={index.toString() + item.title}
                      className="text-[#444444] mb-3"
                    >
                      <span className="font-bold">{item.title}:</span>{" "}
                      {item.text}
                      <br />
                    </p>
                  );
                })}
              </article>
            </div>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}

const ListComponent = ({
  list,
}: {
  list: { title: string; text: string }[];
}) => {
  return (
    <ul className="list-disc pl-6 text-grey-parrafo">
      {list.map((el, i) => (
        <li key={"list" + i + el.title}>
          <strong>{el.title}</strong> {"  "}
          {el.text}
        </li>
      ))}
    </ul>
  );
};
