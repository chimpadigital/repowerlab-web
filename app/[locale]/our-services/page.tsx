import React from 'react'
import { Metadata } from "next";
import {  metadataServices } from "@/app/getMetaData";
import ServicesContainer from './ServicesContainer';

export async function generateMetadata({ params: { locale } }: any): Promise<Metadata> {
  return metadataServices(locale);
}

export default function page() {
  return (
    <ServicesContainer />
  )
}
