"use client"
import React, { useState } from 'react'
import { BladeIcon, ComponentIcon, ControlIcon, GearBoxesIcon, GeneratorIcon } from './icons';
import { title } from '@/components/primitives';

export default function SpareParts() {
    return (
        <section className='w-full flex justify-center'>
            <div className="">
                <div className="flex justify-center">
                    <h2 className={title({ color: "primary" }) + " text-center w-full"}>Wind Turbine Spare Parts Include</h2>
                </div>
                <div className="max-w-[1280px] py-[80px] flex justify-center flex-wrap px-6 gap-[40px]">
                    <Card titulo="Blades" svgIcono={<BladeIcon />} texto="New and refurbished blades suitable for a variety of turbine models." />
                    <Card titulo="Gearboxes" svgIcono={<GearBoxesIcon />} texto="High-quality gearboxes that are rigorously tested for reliability and performance." />
                    <Card titulo="Other components" svgIcono={<ComponentIcon />} texto="Including towers, hubs, and more, all sourced from trusted manufacturers." />
                    <Card titulo="Generators" svgIcono={<GeneratorIcon />} texto="Efficient generators to ensure optimal energy production." />
                    <Card titulo="Control systems" svgIcono={<ControlIcon />} texto="Advanced control systems for better performance and reliability." />
                </div>
            </div>
        </section>
    )
}


const Card = ({ titulo, svgIcono, texto }: any) => {
    const [hover, setHover] = useState(false)

    return (
        <div
            onMouseEnter={() => { setHover(true) }}
            onMouseLeave={() => { setHover(false) }}
            className="relative overflow-hidden group shadow-[5px_5px_4px_0px_#0000001A] rounded-[10px] bg-[#F4F4F4] hover:bg-secondary transition-all duration-[1.2s] w-fit text-primary min-h-[280px] px-6"
            style={{
                width: "min(100%, 307px)",
            }}
        >
            <div className="h-full transition-all w-full flex gap-4 flex-col justify-center">
                <div className={"h-[78px] transition-all duration-[1.2s] aspect-square rounded-full grid place-items-center w-fit " + `${hover ? "bg-primary text-secondary" : "bg-secondary text-primary"}`}>
                    {svgIcono}
                </div>
                <h4 className=" text-xl font-bold">{titulo}</h4>
                <p className="font-light">{texto}</p>
            </div>
        </div>
    );
};