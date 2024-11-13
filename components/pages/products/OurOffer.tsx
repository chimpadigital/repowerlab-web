"use client";
import Paragraph from "@/atoms/Paragraph";
import { button } from "@/components/primitives";
import { Accordion, AccordionItem, Link } from "@nextui-org/react";
import React, { useEffect } from "react";
import { useParams } from "next/navigation";
import { title } from "process";

export default function OurOffer() {
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
      title: "Unused Wind Turbines:",
      text: "Sourced from canceled or downsized projects, these turbines are essentially new but sold as secondhand, offering excellent value. Each turbine undergoes rigorous inspection and testing to ensure it conserves the highest standards of performance and reliability.",
    },
    {
      title: "Refurbished Wind Turbines:",
      text: "RepowerLab manages the global trade and resale of refurbished turbines, ensuring they meet OEM specifications. These turbines provide a cost-effective solution for extending the life of wind farms, with a focus on markets like Central America and South Korea.",
    },
    {
      title: "Used Wind Turbines:",
      text: "These are turbines sold in as-is condition, providing a budget-friendly option for buyers planning to install them in new projects or refurbish them as needed.",
    },
    {
      title: "Wind Turbine Spare Parts:",
      text: "RepowerLab supplies a wide range of turbine parts to support maintenance and repair operations. Our inventory includes both new and refurbished components, ensuring that clients have access to the parts they need to keep their turbines running efficiently.",
    },
  ];

  const listWindTurbine1Mobile = [
    {
      title: "Unused Turbines",
      text: "Like-new turbines from canceled projects, sold secondhand for great value. Inspected and tested for top performance.",
    },
    {
      title: "Refurbished Turbines",
      text: "Quality refurbished turbines traded globally, extending farm life efficiently in markets like Central America and South Korea. Used Turbines: Budget-friendly turbines sold as-is, ideal for new projects or refurbishment.",
    },
    {
      title: "Spare Parts",
      text: "A wide range of new and refurbished parts to keep turbines running smoothly. Includes: Blades, gearboxes, generators, control systems, and other key components",
    },
  ];

  const listWindTurbine2 = [
    {
      title: "Blades:",
      text: "New and refurbished blades suitable for a variety of turbine models.",
    },
    {
      title: "Gearboxes:",
      text: " High-quality gearboxes that are rigorously tested for reliability and performance.",
    },
    {
      title: "Generators:",
      text: " Efficient generators to ensure optimal energy production.",
    },
    {
      title: "Contol Systems:",
      text: "Advanced control systems for better performance and reliability.",
    },
    {
      title: "Other Components",
      text: "including towers, hubs, and more, all sourced from trusted manufacturers.",
    },
  ];

  const listPurchase = [
    {
      title: "Expert Advice:",
      text: "We work closely with clients to understand their specific needs, recommend the best turbines for their projects, and provide guidance on selecting the right parts for their turbines.",
    },
    {
      title: "Technical Assessments:",
      text: " Detailed evaluations of potential installation sites to ensure optimal turbine performance.",
    },
    {
      title: "Logistics:",
      text: " Coordinating the delivery and installation of parts, ensuring they arrive on time and in perfect condition.",
    },
    {
      title: "Regulatory Assistance:",
      text: " Guidance on meeting all local and international regulatory requirements.",
    },
    {
      title: "Financial Consulting:",
      text: " Support in securing financing options tailored to your project’s needs.",
    },
    {
      title: "After-Sales Support:",
      text: "Ongoing support to address any issues and ensure the continued performance of your turbines.",
    },
  ];

  const listPurchaseMobile = [
    {
      title: "Expert Advice",
      text: "Personalized recommendations for your project.",
    },
    {
      title: "Technical Assessments",
      text: "Site evaluations for best performance.",
    },
    {
      title: "Logistics",
      text: "Smooth delivery and installation",
    },
    {
      title: "Regulatory Help",
      text: "Ensure compliance with all regulations",
    },
    {
      title: "Financial Consulting",
      text: "Help securing financing.",
    },
    {
      title: "After-Sales",
      text: "Ongoing support for turbine performance.",
    },
  ];

  const listSupport = [
    {
      title: "Project Management:",
      text: "Overseeing the installation from start to finish, coordinating with all relevant parties to ensure timely and successful completion.",
    },
    {
      title: "Technical Support:",
      text: " Providing on-site technical assistance during installation to address any issues that arise.",
    },
    {
      title: "Training:",
      text: "Offering comprehensive training programs for your team on the operation and maintenance of the new turbines.",
    },
  ];

  const listSupportMobile = [
    {
      title: "Project Management",
      text: "From start to finish.",
    },
    {
      title: "Technical Support",
      text: "On-site assistance.",
    },
    {
      title: "Training",
      text: "Programs for your team to operate and maintain turbines.",
    },
  ];

  useEffect(() => {
    console.log(params);
  }, [params]);
  return (
    <section className="w-full flex flex-col md:flex-row items-center justify-center text-[22px]">
      <h3 className="text-center text-primary font-bold md:hidden">
        Our offer includes
      </h3>
      <div className="container px-6">
        <Accordion
          variant="splitted"
          itemClasses={itemClasses}
          defaultExpandedKeys={["wind-turbines"]}
        >
          <AccordionItem
            key="wind-turbines"
            aria-label="Wind Turbines"
            title="Wind Turbines"
          >
            <hr className="w-full border border-grey-500" />
            <div className="py-4">
              <article className="hidden md:block">
                <ListComponent list={listWindTurbine1} />
              </article>
              <article className="md:hidden">
                {listWindTurbine1Mobile.map((item, index) => {
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
              <div className="flex flex-wrap gap-4 items-center justify-between">
                <div className="max-w-[600px] hidden md:block">
                  <div className="py-4">
                    <p className="font-bold text-grey-parrafo">
                      Our Wind Turbine Parts Include:
                    </p>
                  </div>
                  <ListComponent list={listWindTurbine2} />
                </div>
                <Link
                  href="products/turbine-parts"
                  className={`${button()} flex gap-2 items-center hidden md:block`}
                >
                  Wind turbine parts
                </Link>

                <Link
                  href="products/turbine-parts"
                  className={`md:hidden text-xs text-end ml-auto mt-2 underline`}
                >
                  Wind turbine spare parts
                </Link>
              </div>
            </div>
          </AccordionItem>

          <AccordionItem key="2" aria-label="Materials" title="Materials">
            <hr className="w-full border border-grey-500" />
            <div className="py-4">
              <article className="hidden md:block">
                <Paragraph
                  text="At RepowerLab, we focus on recovering valuable materials from the dismantling of wind farms, including steel, copper, fiberglass, electronics, concrete, and industrial oils. These materials are meticulously processed and repurposed for a second life in various industries, supporting a circular economy and reducing environmental impact."
                  className="text-grey-parrafo"
                />
              </article>
              <article className="md:hidden">
                <Paragraph
                  text="We recover valuable materials like steel, copper, and fiberglass from dismantled wind farms. These are repurposed to support the circular economy and reduce waste."
                  className="text-grey-parrafo"
                />
              </article>
            </div>
          </AccordionItem>

          <AccordionItem
            key="3"
            aria-label="Purchasing Support"
            title="Purchasing Support"
          >
            <hr className="w-full border border-grey-500" />
            <div className="py-4">
              <article className="md:hidden mb-3">
                <Paragraph
                  text="We offer full support for turbine purchasing and installation:"
                  className="text-grey-parrafo"
                />
              </article>
              <article className="hidden md:block">
                <Paragraph
                  text="At RepowerLab, we understand that purchasing and installing wind turbines is a significant investment. That's why we provide comprehensive support throughout the entire process. Our services include:"
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
                      className="text-[#444444]"
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
            title="Installation Support"
          >
            <hr className="w-full border border-grey-500" />
            <div className="py-4">
              <article className="hidden md:block">
                <Paragraph
                  text="Our involvement doesn’t end with the sale. We offer extensive support during the installation process to ensure a smooth and efficient setup. Our services include:"
                  className="text-grey-parrafo"
                />
              </article>
              <article className="mb-1 md:hidden">
                <Paragraph
                  text="We support you beyond the sale:"
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
                      className="text-[#444444]"
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
        <li key={"list" + i}>
          <strong>{el.title}</strong> {"  "}
          {el.text}
        </li>
      ))}
    </ul>
  );
};
