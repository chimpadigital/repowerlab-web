import { Metadata } from "next";

export function metadataHome(locale: string): Metadata {
    const metadata = {
        es: {
            title: "Inicio - Soluciones Energéticas Sostenibles | RepowerLab",
            site_name: "RepowerLab",
            image: "https://repowerlab-web.vercel.app/favicon.ico",
            description:
                "RepowerLab transforma el sector energético con soluciones innovadoras para reciclaje, reventa y economía circular en energía renovable.",
        },
        en: {
            title: "Home - Sustainable Energy Solutions | RepowerLab",
            site_name: "RepowerLab",
            image: "https://repowerlab-web.vercel.app/favicon.ico",
            description:
                "RepowerLab drives energy transformation with innovative solutions for recycling, resale, and a circular economy in renewable energy.",
        },
    };

    return (metadata as any)[locale] || metadata["en"];
}

export function metadataConnect(locale: string): Metadata {
    const metadata = {
        es: {
            title: "Conecta con Nosotros - Soluciones Sostenibles | RepowerLab",
            description: "Contacta con RepowerLab para descubrir nuestras soluciones de economía circular y maximizar el valor de tus activos energéticos.",
        },
        en: {
            title: "Connect with Us - Sustainable Solutions | RepowerLab",
            description: "Contact RepowerLab to explore our circular economy solutions and maximize the value of your energy assets.",
        }
    };

    return (metadata as any)[locale] || metadata["en"];
}

export function metadataCompany(locale: string): Metadata {
    const metadata = {
        es: {
            title: "Nuestra Empresa - Innovación en Energía Renovable | RepowerLab",
            description: "RepowerLab lidera la transformación energética con soluciones para desmantelamiento, reacondicionamiento y reciclaje de infraestructuras renovables.",
        },
        en: {
            title: "Our Company - Renewable Energy Innovation | RepowerLab",
            description: "RepowerLab drives energy transformation with solutions for decommissioning, retrofitting, and recycling renewable energy infrastructures.",
        }
    };

    return (metadata as any)[locale] || metadata["en"];
}

export function metadataCircularEconomy(locale: string): Metadata {
    const metadata = {
        es: {
            title: "Economía Circular en Energía Eólica | RepowerLab",
            description: "RepowerLab lidera la economía circular en energía eólica con soluciones sostenibles para repotenciación, reacondicionamiento y reciclaje de aerogeneradores.",
        },
        en: {
            title: "Circular Economy in Wind Energy | RepowerLab",
            description: "RepowerLab leads the circular economy in wind energy with sustainable solutions for repowering, refurbishing, and recycling wind turbines.",
        }
    };

    return (metadata as any)[locale] || metadata["en"];
}

export function metadataHowWeWork(locale: string): Metadata {
    const metadata = {
        es: {
            title: "Nuestro Proceso de Trabajo - Soluciones Sostenibles | RepowerLab",
            description: "Descubre cómo en RepowerLab desarrollamos soluciones sostenibles en energía renovable. Consulta personalizada para transformar tus activos energéticos.",
        },
        en: {
            title: "Our Process - Sustainable Solutions | RepowerLab",
            description: "Learn how RepowerLab delivers sustainable renewable energy solutions. Start with a personalized consultation to transform your energy assets.",
        }
    };

    return (metadata as any)[locale] || metadata["en"];
}

export function metadataServices(locale: string): Metadata {
    const metadata = {
        es: {
            title: "Servicios de Energía Renovable | RepowerLab",
            description: "Soluciones integrales en energía renovable: desmantelamiento, reacondicionamiento, reventa, reciclaje de aspas y soporte experto en instalación. Optimiza el valor de tus activos con RepowerLab.",
        },
        en: {
            title: "Renewable Energy Services | RepowerLab",
            description: "Comprehensive renewable energy solutions: decommissioning, retrofitting, resale, blade recycling, and expert installation support. Maximize the value of your assets with RepowerLab.",
        }
    };

    return (metadata as any)[locale] || metadata["en"];
}

export function metadataSuccessCases(locale: string): Metadata {
    const metadata = {
        es: {
            title: "Casos de Éxito en Energía Renovable | RepowerLab",
            description: "Explora los logros de RepowerLab en desmantelamiento, reacondicionamiento y reventa de turbinas eólicas, promoviendo soluciones sostenibles en economía circular.",
        },
        en: {
            title: "Renewable Energy Success Stories | RepowerLab",
            description: "Explore RepowerLab’s achievements in decommissioning, retrofitting, and reselling wind turbines, driving sustainable circular economy solutions.",
        }
    };

    return (metadata as any)[locale] || metadata["en"];
}

export function metadataWindTurbineParts(locale: string): Metadata {
    const metadata = {
        es: {
            title: "Repuestos de Turbinas Eólicas | Calidad Garantizada - RepowerLab",
            description: "Encuentra repuestos nuevos y reacondicionados para turbinas eólicas en RepowerLab. Garantizamos componentes de calidad para optimizar el mantenimiento y la eficiencia de tus equipos.",
        },
        en: {
            title: "Wind Turbine Spare Parts | Quality Assured - RepowerLab",
            description: "Discover new and refurbished wind turbine parts at RepowerLab. We provide high-quality components to optimize maintenance and ensure peak turbine efficiency.",
        }
    };

    return (metadata as any)[locale] || metadata["en"];
}

export function metadataWindTurbines(locale: string): Metadata {
    const metadata = {
        es: {
            title: "Turbinas Eólicas y Servicios Especializados - RepowerLab",
            description: "En RepowerLab ofrecemos turbinas eólicas nuevas y reacondicionadas, materiales reciclados de parques desmantelados, y servicios de soporte en compras, instalación, logística y almacenaje.",
        },
        en: {
            title: "Wind Turbines & Specialized Services - RepowerLab",
            description: "RepowerLab offers new and refurbished wind turbines, recycled materials from decommissioned farms, and support services in purchasing, installation, logistics, and warehousing.",
        }
    };

    return (metadata as any)[locale] || metadata["en"];
}