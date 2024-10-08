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
      <ScrollAccordion
        items={repoweringSolutions}
        id="repowering-solutions"
        imgText="Our expertise ensures that your wind farm achieves maximum efficiency and profitability while contributing to a sustainable energy future."
      />
      <ScrollAccordion
        items={circularEconomySolutions}
        id="circular-economy-solution"
        imgPosition="right"
        titleItems={"Key strategies include:"}
        imgText="By integrating these strategies, RepowerLab helps reduce environmental impact and promotes sustainable energy practices."
      />
      <ScrollAccordion
        items={refurbishmentSolutions}
        id="refurbishment"
        titleItems="Our refurbishment services include:"
        imgText="RepowerLab’s refurbishment solutions provide 
a cost-effective way to maintain high performance and reliability in your wind energy assets."
      />
      <ScrollAccordion
        items={recyclingSolutions}
        id="recycling-solution"
        imgPosition="right"
        titleItems=" Our recycling solutions include:"
        imgText="Our recycling solutions help reduce waste and conserve resources, supporting the overall sustainability of the wind energy sector."
      />
    </section>
  );
};

export default SolutionsAccordeon;
