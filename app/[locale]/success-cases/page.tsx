import Paragraph from "@/atoms/Paragraph";
import HeroBreadcrumb from "@/components/HeroBreadcrumb";
import BlogList from "@/components/pages/success-cases/BlogList";
import CasedSection from "@/components/pages/success-cases/CasedSection";
import { title } from "@/components/primitives";
import { useTranslations } from "next-intl";
import React from "react";

import { Metadata } from "next";
import { metadataSuccessCases } from "@/app/getMetaData";
import SuccessCasesPage from "./SuccessCasesPage";

export async function generateMetadata({
  params: { locale },
}: any): Promise<Metadata> {
  return metadataSuccessCases(locale);
}

const SuccessCases = () => {
  return <SuccessCasesPage />;
};

export default SuccessCases;
