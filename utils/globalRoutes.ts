export interface RoutesWithChildI {
    title: string,
    url?: string,
    child?: Partial<RoutesWithChildI>[]
}


export const globalRoutes: Partial<RoutesWithChildI>[] = [
    {
        title: "Services",
        url: "our-services"
    },
    {
        title: "Products",
        child: [
            {
                title: "Wind turbines",
                url: "products/wind-turbines"
            },
            {
                title: "Wind turbines spare parts",
                url: "products/turbine-parts"
            },
        ]
    },
    {
        title: "Circular economy",
        child: [
            {
                title: "Our Bussines Model",
                url: "circular-economy"
            },
            {
                title: "This is how we work",
                url: "how-we-work"
            },
         
        ]
    },
    {
        title: "Marketplace",
        url: "marketplace"
    },
    {
        title: "Resources",
        child: [
            {
                title: "Succes Cases",
                url: "success-cases"
            },
 
        ]
    },
    {
        title: "About",
        child: [
            {
                title: "Our Company",
                url: "about"
            },
            {
                title: "Contact Us",
                url: "about/contact-us"
            },
 
        ]
    }

]
