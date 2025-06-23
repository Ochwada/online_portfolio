// competence/TechStack.tsx
"use client";

import React from "react";
import dynamic from 'next/dynamic';
import {techData} from "@/Components/Constant";

import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/Components/ui/accordion"

const DonutChart =
    dynamic(() => import('@/Components/Competence/DonutChart'),
        {
            ssr: false,
        });

const BarChart =
    dynamic(() => import('@/Components/Competence/BarChart'),
        {
            ssr: false,
        });

const TechStack = () => {
    return (

        <Accordion
            type="single" collapsible
            className="w-full" defaultValue="item-1"
        >
            {techData.map((section, index) => (
                <AccordionItem key={index} value={`item-${index + 1}`}>
                    <AccordionTrigger className="ibm-plex-mono-regular text-purple-600">
                        {section.title}
                    </AccordionTrigger>

                    <AccordionContent>
                        {section.type === "single" && section.items && (
                            <div className="grid grid-cols-2 gap-3 items-center">
                                {section.items.map((item, idx) => (
                                    <div key={idx} className="grid grid-cols-2 gap-3 items-center">
                                        <div>{item.name}</div>
                                        <div className="flex items-center gap-2">
                                            <BarChart value={item.value}/>
                                            <span className="text-xs">{item.value}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {section.type === "grouped" && section.categories && section.categories.map((cat, catIdx) => (
                            <div key={catIdx} className="grid grid-cols-3 gap-3 items-center mt-4">
                                <div>
                                    <h3 className="ibm-plex-mono-semibold underline underline-offset-2">
                                        {cat.label}
                                    </h3>
                                </div>
                                {cat.items.slice(0, 2).map((item, i) => (
                                    <div key={i} className="grid grid-cols-2 gap-3 items-center">
                                        <div>{item.name}</div>
                                        <div className="flex items-center gap-2">
                                            <BarChart value={item.value}/>
                                            <span className="text-xs">{item.value}</span>
                                        </div>
                                    </div>
                                ))}
                                {cat.items.length > 2 && (
                                    <>
                                        <div></div>
                                        {cat.items.slice(2, 4).map((item, i) => (
                                            <div key={i} className="grid grid-cols-2 gap-3 items-center">
                                                <div>{item.name}</div>
                                                <div className="flex items-center gap-2">
                                                    <BarChart value={item.value}/>
                                                    <span className="text-xs">{item.value}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </>
                                )}

                                {cat.items.length > 2 && (
                                    <>
                                        <div></div>
                                        {cat.items.slice(4, 6).map((item, i) => (
                                            <div key={i} className="grid grid-cols-2 gap-3 items-center">
                                                <div>{item.name}</div>
                                                <div className="flex items-center gap-2">
                                                    <BarChart value={item.value}/>
                                                    <span className="text-xs">{item.value}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </>
                                )}
                            </div>
                        ))}
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    );
};

export default TechStack;