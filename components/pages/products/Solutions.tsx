"use client"
import React from 'react'
import SolutionsCarrusel from './solutions-carrusel/SolutionsCarrusel';
import { useTranslations } from 'next-intl';

export default function Solutions() {
    const t = useTranslations("TurbineParts.Solutions")
    const services = [
        { id: 1, title: t.raw("titles.title1"), href: "/our-services#decommissioning" },
        { id: 2, title: t.raw("titles.title2"), href: "/our-services#repowering" },
        { id: 3, title: t.raw("titles.title3"), href: "/our-services#retrofitting" },
        { id: 4, title: t.raw("titles.title4"), href: "/our-services/#blade-recycling" },
        { id: 5, title: t.raw("titles.title5"), href: "/our-services#inspection" },
        { id: 6, title: t.raw("titles.title6"), href: "/our-services#resale-parts" },
        { id: 7, title: t.raw("titles.title7"), href: "/our-services#resale-materials" },
        { id: 8, title: t.raw("titles.title8"), href: "/our-services#warehousing" }
    ];
    return (
        <SolutionsCarrusel cards={services} />
    )
}
