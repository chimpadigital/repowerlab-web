import ScrollAccordion from "@/components/ScrollAccordion";
import {
  circularEconomySolutions,
  recyclingSolutions,
  refurbishmentSolutions,
  repoweringSolutions,
} from "@/utils/circularEconomyAccordeons";
import React from "react";

const SolutionsAccordeon = () => {
  return (
    <section className="px-2 md:px-6 mb-14">
      <ScrollAccordion items={repoweringSolutions} id="repowering-solutions" />
      <ScrollAccordion
        items={circularEconomySolutions}
        id="circular-economy-solution"
        imgPosition="right"
        titleItems={"Key strategies include:"}
      />
      <ScrollAccordion items={refurbishmentSolutions} id="refurbishment" titleItems="Our refurbishment services include:" />
      <ScrollAccordion
        items={recyclingSolutions}
        id="recycling-solution"
        imgPosition="right"
        titleItems=" Our recycling solutions include:"
      />
    </section>
  );
};

export default SolutionsAccordeon;
