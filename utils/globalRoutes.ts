export interface RoutesWithChildI {
    title: string,
    url?: string,
    child?: Partial<RoutesWithChildI>[]
}


export const globalRoutes: Partial<RoutesWithChildI>[] = [
    {
        title: "i1",
        url: "our-services"
    },
    {
        title: "i2.title",
        child: [
            {
                title: "i2.j1",
                url: "products/wind-turbines"
            },
            {
                title: "i2.j2",
                url: "products/turbine-parts"
            },
        ]
    },
    {
        title: "i3.title",
        child: [
            {
                title: "i3.j1",
                url: "circular-economy"
            },
            {
                title: "i3.j2",
                url: "how-we-work"
            },
         
        ]
    },
    {
        title: "i4",
        url: "marketplace"
    },
    // {
    //     title: "i5.title",
    //     child: [
    //         {
    //             title: "i5.j1",
    //             url: "success-cases"
    //         },
 
    //     ]
    // },
    {
        title: "i6.title",
        child: [
            {
                title: "i6.j1",
                url: "about"
            },
            {
                title: "i6.j2",
                url: "about/contact-us"
            },
 
        ]
    }

]
