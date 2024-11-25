import React from "react";
import { ScrollAcordionI } from "./ScrollAccordion";
import { title } from "./primitives";
import { Accordion, AccordionItem } from "@nextui-org/react";
import Paragraph from "@/atoms/Paragraph";
import { useTranslations } from "next-intl";

export default function AccordionMob({
  items,
  imgPosition = "left",
  titleItems,
  id,
  imgText,
}: ScrollAcordionI) {
  const t = useTranslations()
  const itemClasses = {
    base: "py-0 w-full px-0 text-primary bg-transparent !shadow-none",
    title: "font-bold text-[18px] text-primary w-[80%]",
    heading: "shadow-none",
    content: "shadow-none  px-1",
    trigger:
      "px-0 py-2  shadow-none mt-6  font-bold flex items-center border-none pr4",
    indicator: "text-medium pr5 data-[open=true]:rotate-0 -rotate-90 ",
  };
  const items2 = items.slice(1);
  return (
    <div className="p-4 py-2 w-full" id={id}>
      <article className="bg-grey-100 rounded-[20px] px-4 py-8">
        <h5 className={title({ size: "sm", color: "primary" })}>
          {t(items[0].title)}
        </h5>
        <p className="pt-4 text-grey-parrafo">
          {t(items[0].descriptionMobile.toString())}
        </p>
        {titleItems && (
          <p
            className="mt-4 font-bold text-primary"
          >
            {t(titleItems)}
          </p>
        )}
        <Accordion variant="splitted" itemClasses={itemClasses}>
          {items2.map((el, i) => (
            <AccordionItem
              indicator={<Indicator />}
              key={i}
              aria-label={`Accordion ${i}`}
              title={t.raw(el.title)}
            >
              <hr className="w-full border border-primary/75" />
              <div className="pt-4">
                {Array.isArray(el.descriptionMobile) ? (
                  <ul>
                    {el.descriptionMobile.map((item: any, index: any) => (
                      <li
                        className="list-disc ml-4 text-grey-parrafo"
                        key={index}
                      >
                        <span className="font-bold">{item.title}: </span>
                        {t(item.description)}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <Paragraph
                    text={t.raw(el.descriptionMobile)}
                    className="text-grey-parrafo"
                  />
                )}
              </div>
            </AccordionItem>
          ))}
        </Accordion>
      </article>
    </div>
  );
}

const Indicator = () => {
  return (
    <svg
      width="14"
      height="8"
      viewBox="0 0 14 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.71123e-07 0.594434C0.0676233 0.437527 0.125793 0.278356 0.263946 0.165202C0.521347 -0.0452651 0.87691 -0.0543174 1.13576 0.156904C1.19321 0.203674 1.24556 0.25648 1.29719 0.310039C3.16298 2.24498 5.02877 4.17991 6.89166 6.11787C6.976 6.20537 7.0189 6.21518 7.1098 6.12088C8.98213 4.17237 10.8574 2.22687 12.7326 0.281375C13.0155 -0.0120709 13.3318 -0.0784551 13.6335 0.0912765C14.0124 0.303252 14.1192 0.823007 13.856 1.17605C13.8146 1.23187 13.7659 1.28317 13.7179 1.33296C11.6725 3.45648 9.62709 5.57925 7.58097 7.70203C7.19705 8.10033 6.80368 8.09957 6.41758 7.69825C4.45798 5.66525 2.49912 3.633 0.540979 1.6C0.337385 1.38878 0.11125 1.19566 9.30169e-07 0.906739L9.71123e-07 0.594434Z"
        fill="#1C4741"
      />
    </svg>
  );
};
