"use client"

import Paragraph from '@/atoms/Paragraph'
import { subtitle, title } from '@/components/primitives'
import { Accordion, AccordionItem } from "@nextui-org/react";
import React from 'react'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl';


export default function JoinOurMission() {
    const t = useTranslations("HowWeWork.JoinMission")
    const itemClasses = {
        base: "py-0 w-full text-primary px-2 md:px-4 md:border-0 md:bg-transparent bg-grey-100 !shadow-none",
        title: "font-normal data-[open=true]:font-bold text-[16px] md:text-[22px] text-primary w-[90%] md:w-[80%]",
        heading: "shadow-none data-[open]=true:font-bold md:bg-transparent bg-grey-100",
        content: "shadow-none md:px-4 py-2",
        trigger: "md:px-2 py-4  shadow-none md:mt-6  font-bold flex items-center border-none pr4",
        indicator: "text-medium pr5",
    };

    return (
        <section className="w-full flex justify-center py-12 md:py-[100px]">
            <div className="container text-primary px-4 md:px-6">
                <div className="grid lg:grid-cols-2 grid cols-1">
                    <div className="col-span-1">
                        <h4 className={title()}>{t("title")}</h4>
                        <Paragraph className='text-grey-parrafo hidden md:block text-[20px] pt-[40px] max-w-[450px]' text={t.raw('p')} />
                        <Paragraph className='text-grey-parrafo md:hidden text-[20px] pt-[40px] max-w-[450px]' text={t.raw('pM')} />

                    </div>
                    <div className="col-span-1 mt-6 md:mt-0 hidden md:block">
                        <Accordion variant="splitted" itemClasses={itemClasses}>
                            <AccordionItem indicator={<Indicator />} key="1" aria-label="Accordion 1" title={t.raw("accordion.ac1.title")}>
                                <hr className="w-full border border-grey-600/15" />
                                <div className='pt-4'>
                                    <Paragraph text={t.raw("accordion.ac1.p")} className='text-grey-parrafo' />
                                </div>
                            </AccordionItem>
                            <AccordionItem indicator={<Indicator />} key="2" aria-label="Accordion 2" title={t("accordion.ac2.title")}>
                                <hr className="w-full border border-grey-600/15" />
                                <div className='pt-4'>
                                <Paragraph text={t.raw("accordion.ac2.p")} className='text-grey-parrafo' />
                                </div>
                            </AccordionItem>
                            <AccordionItem indicator={<Indicator />} key="3" aria-label="Accordion 3" title={t.raw("accordion.ac3.title")}>
                                <hr className="w-full border border-grey-600/15" />
                                <div className='pt-4'>
                                <Paragraph text={t.raw("accordion.ac3.p")} className='text-grey-parrafo' />
                                </div>
                            </AccordionItem>
                        </Accordion>
                    </div>
                    <div className="col-span-1 mt-6 md:mt-0 md:hidden">
                        <Accordion variant="splitted" itemClasses={itemClasses}>
                            <AccordionItem indicator={<Indicator />} key="1" aria-label="Accordion 1" title={t.raw("accordion.ac1.titleM")}>
                                <hr className="w-full border border-grey-600/15" />
                                <div className='pt-4'>
                                    <Paragraph text={t.raw("accordion.ac1.pM")} className='text-grey-parrafo' />
                                </div>
                            </AccordionItem>
                            <AccordionItem indicator={<Indicator />} key="2" aria-label="Accordion 2" title={t("accordion.ac2.titleM")}>
                                <hr className="w-full border border-grey-600/15" />
                                <div className='pt-4'>
                                <Paragraph text={t.raw("accordion.ac2.pM")} className='text-grey-parrafo' />
                                </div>
                            </AccordionItem>
                            <AccordionItem indicator={<Indicator />} key="3" aria-label="Accordion 3" title={t.raw("accordion.ac3.titleM")}>
                                <hr className="w-full border border-grey-600/15" />
                                <div className='pt-4'>
                                <Paragraph text={t.raw("accordion.ac3.pM")} className='text-grey-parrafo' />
                                </div>
                            </AccordionItem>
                        </Accordion>
                    </div>
                  
                </div>

                <div className="flex pt-[60px] md:pt-[150px] gap-6 justify-center flex-wrap">
                    <Cards image="i2" title='Why Partner with Us?' list={['Expertise in wind turbine lifecycle management', 'Proven track record in disassembly, warehousing, and refurbishing', 'Commitment to sustainability and innovation']} />
                    <Cards image="i1" title='Why Choose RepowerLab?' list={['Comprehensive support from consultation to installation', 'Tailored solutions to meet your specific needs', 'A dedicated team of experts at your service']} />
                    <Cards image="i3" title='Why Work with Us?' list={['Be part of a pioneering team in renewable energy', 'Opportunities for growth and professional development', 'Contribute to meaningful, impactful projects']} />
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

const Cards = ({ title, list, image }: { title: string, list: string[], image:string }) => {
    return (
        <article className='text-primary bg-secondary rounded-[20px] px-8 pt-6 pb-8 w-[25%] w-full max-w-[400px] min-w-[300px]' style={{ boxShadow: "4px 4px 4px 0px rgba(0, 0, 0, 0.10)" }}>
            <img className='w-[40px] h-[40px] mb-4 md:hidden' src={`/images/how-we-work/${image}.png`} alt="" />
            <h5 className={subtitle({ colors: "primary", size: "sm" })}>{title}</h5>
            <ul className="pt-4 md:pt-6">
                {
                    list.map((el, i) => (
                        <motion.li whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 60 }} key={i} transition={{ delay: 0.2 * i, duration: .6, ease: "linear" }} className='flex gap-2  py-1 px-0 items-start'>
                            <span >
                                <svg className='translate-y-[10px]' width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M4.74678 9.59881L12.5884 0.101307C12.7 -0.0337692 12.8812 -0.0337692 12.9927 0.101307L14.0429 1.37328C14.1545 1.50836 14.1545 1.72714 14.0429 1.86294L4.94832 12.8983C4.83679 13.0334 4.65615 13.0341 4.54403 12.899L0.0841537 7.51633C-0.0279542 7.38125 -0.0279542 7.16175 0.0835729 7.02667L1.15121 5.73359C1.26274 5.59851 1.44397 5.59851 1.5555 5.73359L4.74678 9.59881Z" fill="#1C4741" />
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