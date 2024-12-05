"use client"
import React from 'react'
import { Select, SelectItem, Avatar } from "@nextui-org/react";
import { useRouter, usePathname } from '@/i18n/routing';
import { useLocale } from 'next-intl';


export default function LangChange() {
    const langs = [{ label: "EN", value: 'en' }, { label: 'ES', value: 'es' }]
    const locale = useLocale()
    const path = usePathname()
    const router = useRouter()
    return (
        <>
         {/*Desocultar cuando activemos español*/}
         {/* <Select
            items={langs}
            aria-labelledby='change language'
            className="max-w-xs"
            variant="bordered"
            classNames={{
                base: "border-none w-[72px]",
                label: "group-data-[filled=true]:-translate-y-5 border-none",
                trigger: "border-none rounded-none shadow-none data-[open=true]:border !data-[open=true]:border-b-white !data-[open=true]:border-b",
                listboxWrapper: "max-h-[400px]",
            }}
            defaultSelectedKeys={[locale]}
            onSelectionChange={(value)=>{router.push(path, {locale:value.anchorKey})}}
            listboxProps={{
                itemClasses: {
                    base: [
                        "rounded-md",
                        "text-default-500",
                        "transition-opacity",
                        "data-[hover=true]:text-foreground",
                        "data-[hover=true]:bg-default-100",
                        "dark:data-[hover=true]:bg-default-50",
                        "data-[selectable=true]:focus:bg-default-50",
                        "data-[pressed=true]:opacity-70",
                        "data-[focus-visible=true]:ring-default-500",
                    ],
                },
            }}
            popoverProps={{
                classNames: {
                    base: "before:bg-default-200",
                    content: "p-0 border-small border-divider bg-background",
                },
            }}
            renderValue={(items) => {
                return items.map((item, i) => (
                    <div key={i} className="flex items-center uppercase text-white gap-2">
                        {item.textValue}
                    </div>
                ));
            }}
        >
            {(lang) => (
                <SelectItem key={lang.value} textValue={lang.value}>
                    <div className="flex gap-2 items-center">
                        <div className="flex flex-col">
                            <span className="text-small">{lang.label}</span>
                        </div>
                    </div>
                </SelectItem>
            )}
        </Select>  */}
        </>

    )
}
