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
    <section className="px-4 md:px-6 mb-3 md:mb-14">
      <ScrollAccordion
        items={repoweringSolutions}
        id="repowering-solutions"
        idDesktop="repowering-solutions-desk"
        imgPosition="right"
        imgText="CircularEconomy.SolutionsCards.imgText1"
      />
      <ScrollAccordion
        items={circularEconomySolutions}
        id="circular-economy-solution"
        idDesktop="circular-economy-solution-desk"
        titleItems="CircularEconomy.SolutionsCards.itemTitle2"
        imgText="CircularEconomy.SolutionsCards.imgText2"
      />
      <ScrollAccordion
        items={refurbishmentSolutions}
        id="refurbishment"
        idDesktop="refurbishment-desk"
        titleItems="CircularEconomy.SolutionsCards.itemTitle3"
        imgText="CircularEconomy.SolutionsCards.imgText3"
        imgPosition="right"
      />
      <ScrollAccordion
        items={recyclingSolutions}
        id="recycling-solution"
        idDesktop="recycling-solution-desk"
        titleItems="CircularEconomy.SolutionsCards.itemTitle4"
        imgText="CircularEconomy.SolutionsCards.imgText4"
      />
    </section>
  );
};

export default SolutionsAccordeon;
