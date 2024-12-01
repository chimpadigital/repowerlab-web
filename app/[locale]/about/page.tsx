import React from 'react'
import { Metadata } from "next";
import { metadataCompany } from "@/app/getMetaData";
import AboutPage from './AboutPage';

export async function generateMetadata({ params: { locale } }: any): Promise<Metadata> {
  return metadataCompany(locale);
}

export default function page() {
  return (
    <AboutPage />
  )
}
