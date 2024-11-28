import { Metadata } from "next";

export function metadataHome(locale: string): Metadata {
    const metadata = {
        es: {
            title: "Inicio - RepowerLab",
            description: "RepowerLab lidera la transformación del sector energético con soluciones innovadoras para activos al final de su vida útil. Desde desmantelamiento hasta reciclaje y reventa, impulsamos la economía circular en la energía renovable con tecnologías avanzadas y prácticas sostenibles que maximizan el valor y la eficiencia.",
        },
        en: {
            title: "Home - RepowerLab",
            description: "RepowerLab is transforming the energy sector with innovative solutions for end-of-life energy assets. From decommissioning to recycling and resale, we drive the circular economy in renewable energy with advanced technologies and sustainable practices that maximize value and efficiency.",
        }
    };

    return (metadata as any)[locale] || metadata["en"];
}

export function metadataConnect(locale: string): Metadata {
    const metadata = {
        es: {
            title: "Conecta - RepowerLab",
            description: "Contacta con RepowerLab para descubrir nuestras soluciones de economía circular y maximizar el valor de tus activos energéticos.",
        },
        en: {
            title: "Connect - RepowerLab",
            description: "Contact RepowerLab to explore our circular economy solutions and maximize the value of your energy assets.",
        }
    };

    return (metadata as any)[locale] || metadata["en"];
}

export function metadataCompany(locale: string): Metadata {
    const metadata = {
        es: {
            title: "Nuestra Empresa - RepowerLab",
            description: "RepowerLab es una empresa pionera en la transformación del sector energético, ofreciendo soluciones innovadoras para activos energéticos al final de su vida útil, incluyendo desmantelamiento, repotenciación, reacondicionamiento, reciclaje y reventa de infraestructuras de energía renovable.",
        },
        en: {
            title: "Our Company - RepowerLab",
            description: "RepowerLab is a pioneering company transforming the energy sector by providing innovative solutions for end-of-life energy assets, including decommissioning, repowering, retrofitting, recycling, and resale of renewable energy infrastructure.",
        }
    };

    return (metadata as any)[locale] || metadata["en"];
}

export function metadataCircularEconomy(locale: string): Metadata {
    const metadata = {
        es: {
            title: "Modelo de Negocio de Economía Circular - RepowerLab",
            description: "En RepowerLab, nos dedicamos a impulsar la economía circular en el sector de la energía eólica. Nuestras soluciones integrales cubren todo el ciclo de vida de los aerogeneradores, garantizando un uso eficiente y sostenible de los recursos. Descubre nuestros servicios de repotenciación, reacondicionamiento y reciclaje de activos de energía eólica.",
        },
        en: {
            title: "Circular Economy Business Model - RepowerLab",
            description: "At RepowerLab, we are dedicated to advancing the circular economy in the wind energy sector. Our comprehensive solutions span the entire lifecycle of wind turbines, ensuring that resources are used efficiently and sustainably. Explore our range of services designed to support repowering, refurbishing, and recycling of wind energy assets.",
        }
    };

    return (metadata as any)[locale] || metadata["en"];
}

export function metadataHowWeWork(locale: string): Metadata {
    const metadata = {
        es: {
            title: "Así Trabajamos - RepowerLab",
            description: "Comienza tu viaje con una consulta personalizada. Descubre cómo trabajamos en RepowerLab para ofrecer soluciones innovadoras y sostenibles en el sector de la energía renovable.",
        },
        en: {
            title: "This is How We Work - RepowerLab",
            description: "Start your journey with a personalized consultation. Discover how RepowerLab works to provide innovative and sustainable solutions in the renewable energy sector.",
        }
    };

    return (metadata as any)[locale] || metadata["en"];
}

export function metadataServices(locale: string): Metadata {
    const metadata = {
        es: {
            title: "Servicios - RepowerLab",
            description: "RepowerLab ofrece una gama completa de servicios para maximizar el valor de tus activos energéticos. Desde desmantelamiento de parques eólicos y reacondicionamiento de turbinas hasta reventa, reciclaje de aspas y soporte experto en instalación, garantizamos precisión, sostenibilidad y rendimiento óptimo en cada etapa.",
        },
        en: {
            title: "Services - RepowerLab",
            description: "RepowerLab offers a full range of services to maximize the value of your energy assets. From wind farm decommissioning and turbine retrofitting to resale, blade recycling, and expert installation support, we ensure precision, sustainability, and optimized performance at every stage.",
        }
    };

    return (metadata as any)[locale] || metadata["en"];
}

export function metadataSuccessCases(locale: string): Metadata {
    const metadata = {
        es: {
            title: "Casos de Éxito - RepowerLab",
            description: "Descubre los éxitos de RepowerLab en desmantelamiento, reacondicionamiento y reventa de turbinas eólicas reacondicionadas, destacando nuestras soluciones de economía circular para el sector energético.",
        },
        en: {
            title: "Success Cases - RepowerLab",
            description: "Discover RepowerLab’s success in decommissioning, retrofitting, and reselling refurbished wind turbines, highlighting our circular economy solutions for the energy sector.",
        }
    };

    return (metadata as any)[locale] || metadata["en"];
}

export function metadataWindTurbineParts(locale: string): Metadata {
    const metadata = {
        es: {
            title: "Repuestos para Turbinas Eólicas - RepowerLab",
            description: "RepowerLab ofrece una amplia gama de repuestos para turbinas eólicas para apoyar las operaciones de mantenimiento y reparación. Nuestro inventario incluye componentes nuevos y reacondicionados, asegurando que los clientes tengan acceso a las piezas necesarias para mantener sus turbinas funcionando eficientemente.",
        },
        en: {
            title: "Wind Turbines Spare Parts - RepowerLab",
            description: "RepowerLab supplies a wide range of turbine parts to support maintenance and repair operations. Our inventory includes both new and refurbished components, ensuring that clients have access to the parts they need to keep their turbines running efficiently.",
        }
    };

    return (metadata as any)[locale] || metadata["en"];
}

export function metadataWindTurbines(locale: string): Metadata {
    const metadata = {
        es: {
            title: "Turbinas Eólicas - RepowerLab",
            description: "RepowerLab ofrece turbinas eólicas, tanto **nuevas como reacondicionadas**, junto con **materiales reciclados** de parques desmantelados para apoyar una economía circular. Nuestro **Soporte de Compras** brinda asesoría experta y asistencia regulatoria, mientras que el **Soporte de Instalación** garantiza una configuración fluida con gestión de proyectos y apoyo técnico. Además, ofrecemos servicios de **almacenaje y logística** para un manejo eficiente de los componentes.",
        },
        en: {
            title: "Wind Turbines - RepowerLab",
            description: "RepowerLab provides wind turbines, both **unused and refurbished**, alongside **recycled materials** from decommissioned farms to support a circular economy. Our **Purchasing Support** offers expert advice and regulatory assistance, while **Installation Support** ensures smooth setup with project management and technical aid. Additionally, we offer **warehousing and logistics** services for efficient component handling.",
        }
    };

    return (metadata as any)[locale] || metadata["en"];
}