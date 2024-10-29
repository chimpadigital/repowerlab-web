"use client"
import React from 'react'
import SolutionsCarrusel from './solutions-carrusel/SolutionsCarrusel';

export default function Solutions() {
    const services = [
        { id: 1, title: "Wind farm decommissioning", href: "/our-services#decommissioning" },
        { id: 2, title: "Wind farm repowering", href: "/our-services#repowering" },
        { id: 3, title: "Wind turbine retrofitting & refurbishing", href: "/our-services#retrofitting" },
        { id: 4, title: "Blade recycling", href: "/our-services/#blade-recycling" },
        { id: 5, title: "Inspection & value recovery", href: "/our-services#inspection" },
        { id: 6, title: "Resale of wind turbines & spare parts", href: "/our-services#resale-parts" },
        { id: 7, title: "Resale of materials", href: "/our-services#resale-materials" },
        { id: 8, title: "Warehousing & transportation", href: "/our-services#warehousing" }
      ]
    return (
        <SolutionsCarrusel cards={services} />
    )
}
