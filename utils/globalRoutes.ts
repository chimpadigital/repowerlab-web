export interface RoutesWithChildI {
    title: string,
    url?: string,
    child?: Partial<RoutesWithChildI>[]
}


export const globalRoutes: Partial<RoutesWithChildI>[] = [
    {
        title: "Service",
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
            {
                title: "Market place",
                url: "marketplace"
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
        title: "Market place",
        url: "marketplace"
    },
    {
        title: "Resources",
        child: [
            {
                title: "Succes Cases",
                url: "succes-cases"
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
