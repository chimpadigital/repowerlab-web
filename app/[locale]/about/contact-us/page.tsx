import React from 'react'

import { Metadata } from "next";
import { metadataConnect } from '@/app/getMetaData';
import ContactUs from './ContactUs';

export async function generateMetadata({ params: { locale } }: any): Promise<Metadata> {
  return metadataConnect(locale);
}

export default function page() {
  return (
    <ContactUs />
  )
}