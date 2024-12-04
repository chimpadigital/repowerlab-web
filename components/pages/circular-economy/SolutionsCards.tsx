import { title } from "@/components/primitives";
import Image from "next/image";
import React from "react";
import iconoLight from "@/public/images/circular-economy/icon-light.svg";
import iconoCiruclarEconomy from "@/public/images/circular-economy/icon-circular-economy.svg";
import iconoRefurbishment from "@/public/images/circular-economy/icon-refurbishment.svg";
import iconoRecycling from "@/public/images/circular-economy/icon-recicle.svg";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

const SolutionsCards = () => {
  const t = useTranslations("CircularEconomy.SolutionsCards");

  const cardLists = [
    {
      title: t("link1"),
      icon: iconoLight,
      href: "/circular-economy#repowering-solutions",
      hrefDesk: "/circular-economy#repowering-solutions-desk",
    },
    {
      title: t("link2"),
      icon: iconoCiruclarEconomy,
      href: "/circular-economy#circular-economy-solution",
      hrefDesk: "/circular-economy#circular-economy-solution-desk",
    },
    {
      title: t("link3"),
      icon: iconoRefurbishment,
      href: "/circular-economy#refurbishment",
      hrefDesk: "/circular-economy#refurbishment-desk",
    },
    {
      title: t("link4"),
      icon: iconoRecycling,
      href: "/circular-economy#recycling-solution",
      hrefDesk: "/circular-economy#recycling-solution-desk",
    },
  ];

  return (
    <section className=" px-6 md:px-8 mx-4 md:mx-6 mb-3 md:mb-0 bg-primary bg-[url(/images/circular-economy/bg-solutions-cards.webp)] bg-fixed bg-no-repeat bg-cover rounded-[20px] py-16 md:pt-32 md:pb-32 md:text-center">
      <h4 className={`${title({ size: "md" })} text-white hidden md:block`}>
        {t("title")}
      </h4>
      <div className=" md:hidden flex flex-col">
        <h4
          className={`${title({ size: "md" })} text-white text-left text-[28px] `}
        >
          {t("sub1")}
        </h4>
        <h4
          className={`${title({ size: "md" })} text-white text-left text-[28px] `}
        >
          {t("sub2")}
        </h4>
      </div>
      <div className="flex gap-[11px] justify-center mt-10 md:mt-24 flex-wrap">
        {cardLists.map((card, i) => {
          return (
            <>
              <Link
                key={i}
                href={card.href}
                className="lg:hidden md:w-[min(100%,_309px)] w-full px-[18px] md:px-8 py-10 md:py-14 text-white bg-white/15 transition-all hover:bg-white/0 border-[0.5px] border-grey-100 rounded-tl-[10px] md:rounded-[10px] text-left flex md:flex-col md:justify-normal md:items-start md:gap-0 items-center gap-6 flex-wrap"
              >
                <div className="w-[62px] h-fit aspect-square rounded-full bg-white grid place-items-center">
                  <Image
                    alt="icon light"
                    src={card.icon}
                    height={35}
                    width={32}
                  />
                </div>
                <h5 className="max-w-[12ch] inline-block text-lg md:text-2xl md:mt-7">
                  {card.title}
                </h5>
              </Link>
              <Link
                key={i}
                href={card.hrefDesk}
                className="hidden lg:flex md:w-[min(100%,_309px)] w-full px-[18px] md:px-8 py-10 md:py-14 text-white bg-white/15 transition-all hover:bg-white/0 border-[0.5px] border-grey-100 rounded-tl-[10px] md:rounded-[10px] text-left  md:flex-col md:justify-normal md:items-start md:gap-0 items-center gap-6 flex-wrap"
              >
                <div className="w-[62px] h-fit aspect-square rounded-full bg-white grid place-items-center">
                  <Image
                    alt="icon light"
                    src={card.icon}
                    height={35}
                    width={32}
                  />
                </div>
                <h5 className="max-w-[12ch] inline-block text-lg md:text-2xl md:mt-7">
                  {card.title}
                </h5>
              </Link>
            </>
          );
        })}
      </div>
    </section>
  );
};

export default SolutionsCards;
