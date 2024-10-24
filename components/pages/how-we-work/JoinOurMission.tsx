"use client"

import Paragraph from '@/atoms/Paragraph'
import { subtitle, title } from '@/components/primitives'
import { Accordion, AccordionItem } from "@nextui-org/react";
import React from 'react'
import { motion } from 'framer-motion'


export default function JoinOurMission() {
    const defaultContent =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

    const itemClasses = {
        base: "py-0 w-full text-primary !shadow-none",
        title: "font-normal text-[22px] text-primary w-[80%]",
        heading: "shadow-none",
        content: "shadow-none  px-4 py-2",
        trigger: "px-2 py-4 data-[hover=true]:bg-default-100 shadow-none mt-6  font-bold h-14 flex items-center border-none pr4",
        indicator: "text-medium pr5",
    };
 
    return (
        <section className="w-full flex justify-center py-[100px]">
            <div className="container text-primary px-6">
                <div className="grid lg:grid-cols-2 grid cols-1">
                    <div className="col-span-1">
                        <h4 className={title()}>Join Our Mission</h4>
                        <Paragraph className='text-grey-600 pt-[40px] max-w-[450px]' text='At RepowerLab, we are dedicated to **advancing the circular economy in the wind energy sector**. By working together with partners, clients, and talented individuals, we can achieve a more sustainable and efficient future. **Join us in our mission to innovate, transform, and lead the way in renewable energy solutions.**' />

                    </div>
                    <div className="col-span-1">
                        <Accordion variant="splitted" itemClasses={itemClasses}>
                            <AccordionItem indicator={<Indicator />} key="1" aria-label="Accordion 1" title="Are you a business looking to collaborate on 
sustainable energy solutions?">
                                <hr className="w-[80%] border border-grey-600/15" />
                                <div className='pt-4'>
                                    <Paragraph text='Join us in creating a circular economy for wind energy. Together, we can innovate and transform the industry.' className='text-grey-600' />
                                </div>
                            </AccordionItem>
                            <AccordionItem indicator={<Indicator />} key="2" aria-label="Accordion 2" title="Need expert assistance with wind turbine projects?">
                                <hr className="w-[80%] border border-grey-600/15" />
                                <div className='pt-4'>
                                    <Paragraph text='Join us in creating a circular economy for wind energy. Together, we can innovate and transform the industry.' className='text-grey-600' />
                                </div>
                            </AccordionItem>
                            <AccordionItem indicator={<Indicator />} key="3" aria-label="Accordion 3" title="Talent Passionate about renewable energy and sustainability?">
                                <hr className="w-[80%] border border-grey-600/15" />
                                <div className='pt-4'>
                                    <Paragraph text='Join us in creating a circular economy for wind energy. Together, we can innovate and transform the industry.' className='text-grey-600' />
                                </div>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>

                <div className="flex pt-[150px] gap-6 justify-center flex-wrap">
                    <Cards title='Why Partner with Us?' list={['Expertise in wind turbine lifecycle management', 'Proven track record in disassembly, warehousing, and refurbishing', 'Commitment to sustainability and innovation']} />
                    <Cards title='Why Choose RepowerLab?' list={['Comprehensive support from consultation to installation', 'Tailored solutions to meet your specific needs', 'A dedicated team of experts at your service']} />
                    <Cards title='Why Work with Us?' list={['Be part of a pioneering team in renewable energy', 'Opportunities for growth and professional development', 'Contribute to meaningful, impactful projects']} />
                </div>
            </div>
        </section>
    )
}


const Indicator = () => {
    return (
        <div className="w-12 h-12 rounded-full bg-[#C5C5C5]/30">
            <div className="w-full h-full flex justify-center items-center">
                <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.71123e-07 0.594434C0.0676233 0.437527 0.125793 0.278356 0.263946 0.165202C0.521347 -0.0452651 0.87691 -0.0543174 1.13576 0.156904C1.19321 0.203674 1.24556 0.25648 1.29719 0.310039C3.16298 2.24498 5.02877 4.17991 6.89166 6.11787C6.976 6.20537 7.0189 6.21518 7.1098 6.12088C8.98213 4.17237 10.8574 2.22687 12.7326 0.281375C13.0155 -0.0120709 13.3318 -0.0784551 13.6335 0.0912765C14.0124 0.303252 14.1192 0.823007 13.856 1.17605C13.8146 1.23187 13.7659 1.28317 13.7179 1.33296C11.6725 3.45648 9.62709 5.57925 7.58097 7.70203C7.19705 8.10033 6.80368 8.09957 6.41758 7.69825C4.45798 5.66525 2.49912 3.633 0.540979 1.6C0.337385 1.38878 0.11125 1.19566 9.30169e-07 0.906739L9.71123e-07 0.594434Z" fill="#1C4741" />
                </svg>
            </div>

        </div>
    )
}

const Cards = ({ title, list }: { title: string, list: string[] }) => {
    return (
        <article className='text-primary bg-secondary rounded-[20px] px-6 py-4 w-[25%] max-w-[400px] min-w-[300px] shadow'>
            <h5 className={subtitle({ colors: "primary", size: "md" })}>{title}</h5>
            <ul className="pt-8">
                {
                    list.map((el, i) => (
                        <motion.li whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 60 }} key={i} transition={{ delay: 0.2 * i }} className='flex gap-2 items-start'>
                            <span >
                                <svg className='translate-y-[10px]' width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.74678 9.59881L12.5884 0.101307C12.7 -0.0337692 12.8812 -0.0337692 12.9927 0.101307L14.0429 1.37328C14.1545 1.50836 14.1545 1.72714 14.0429 1.86294L4.94832 12.8983C4.83679 13.0334 4.65615 13.0341 4.54403 12.899L0.0841537 7.51633C-0.0279542 7.38125 -0.0279542 7.16175 0.0835729 7.02667L1.15121 5.73359C1.26274 5.59851 1.44397 5.59851 1.5555 5.73359L4.74678 9.59881Z" fill="#1C4741" />
                                </svg>
                            </span>
                            <span className="font-normal">{el}</span>
                        </motion.li>
                    ))
                }
            </ul>

        </article>
    )
}