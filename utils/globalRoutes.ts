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
                url: ""
            },
            {
                title: "Wind turbines spare parts",
                url: ""
            },
            {
                title: "Market place",
                url: ""
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
