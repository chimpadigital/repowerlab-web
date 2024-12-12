import ScrollAccordion from "@/components/ScrollAccordion";
import {
  circularEconomySolutions,
  recyclingSolutions,
  refurbishmentSolutions,
  repoweringSolutions,
} from "@/utils/circularEconomyAccordeons";
import { useWindowSize } from "@/utils/useResize";
import React, { useEffect } from "react";

const SolutionsAccordeon = () => {
  const isDesktop = useWindowSize({});

  
  useEffect(() => {
    if (isDesktop !== null) {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  }, [isDesktop]);

  return (
    <section className="px-4 md:px-6 mb-3 md:mb-14">
      <ScrollAccordion
        items={repoweringSolutions}
        id="repowering-solutions"
        idDesktop="repowering-solutions-desk"
        imgPosition="right"
        imgText="CircularEconomy.SolutionsCards.imgText1"
        isDesktop
      />
      <ScrollAccordion
        items={circularEconomySolutions}
        id="circular-economy-solution"
        idDesktop="circular-economy-solution-desk"
        titleItems="CircularEconomy.SolutionsCards.itemTitle2"
        imgText="CircularEconomy.SolutionsCards.imgText2"
        isDesktop
      />
      <ScrollAccordion
        items={refurbishmentSolutions}
        id="refurbishment"
        idDesktop="refurbishment-desk"
        titleItems="CircularEconomy.SolutionsCards.itemTitle3"
        imgText="CircularEconomy.SolutionsCards.imgText3"
        imgPosition="right"
        isDesktop
      />
      <ScrollAccordion
        items={recyclingSolutions}
        id="recycling-solution"
        idDesktop="recycling-solution-desk"
        titleItems="CircularEconomy.SolutionsCards.itemTitle4"
        imgText="CircularEconomy.SolutionsCards.imgText4"
        isDesktop
      />
    </section>
  );
};

export default SolutionsAccordeon;
