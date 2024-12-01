import React from 'react'
import { Metadata } from "next";
import { metadataCircularEconomy } from "@/app/getMetaData";
import CircularEconomy from './CircularEconomy';

export async function generateMetadata({ params: { locale } }: any): Promise<Metadata> {
    return metadataCircularEconomy(locale);
}

export default function page() {
    return (
        <CircularEconomy />
    )
}
