"use client";

import React from "react";
import dynamic from 'next/dynamic';
import Header from "@/Components/Shared/Header";
import Footer from "@/Components/Shared/Footer";
import Skills from "@/Components/Competence/Skills";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/Components/ui/accordion"
//import DonutChart from "@/Components/Competence/DonutChart";
const DonutChart = dynamic(() => import('@/Components/Competence/DonutChart'), {
    ssr: false,
});

const Competence: React.FC = () => {

    return (

        <div className="flex flex-col min-h-screen competence-background mt-16">
            {/* Fixed Header */}
            <div className="fixed top-0 left-0 w-full z-50">
                <Header/>
            </div>

            {/* Page Content */}
            {/* <div className="flex-grow pt-16 pb-16 place-content-center"> */}
            <div className="flex-grow  place-content-center">

                {/* Main Content */}
                <div className="p-4 sm:p-8 pb-2 mx-8 ">
                    <h1 className=" md:text-4xl text-2xl font-bold text-start mb-2">
                        What are areas of my<span className="text-mypink"> expertise </span>?
                    </h1>
                    <div>
                        <p className="text-base mb-1 md:mx-16 text-justify">
                            My expertise spans diverse fields. Each area represents a cornerstone of my professional
                            journey,
                            reflecting my commitment to mastering tools, technologies, and strategies that drive
                            innovation and
                            create meaningful solutions tailored to complex challenges. I am dedicated to continuous
                            learning
                            and growth, ensuring that I stay at the forefront of industry trends and best
                            practices. &nbsp;
                            <a href="/projects" target="_blank"
                               className="text-purple-500 text-xs font-bold underline underline-offset-1"> LEARN
                                MORE </a>
                        </p>

                    </div>

                    {/* Competence Cards */}
                    {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6  md:h-72 ">
                        {competence.map((item) => (
                            <div
                                key={item.id}
                                className="bg-gray-300/[0.25] comp-img h-48 w-full border border-dashed border-gray-500/[0.50] rounded
                                flex flex-col justify-between p-4 "
                            >
                                <h2 className="text-lg font-bold uppercase">{item.name}</h2>
                                <p className="text-sm ">{item.description}</p>
                                <a
                                    href={item.href}
                                    className=" mt-4 font-bold hover:underline  underline-offset-4 text-xs uppercase "
                                >
                                    More info...
                                </a>
                            </div>
                        ))}
                    </div> */}
                    <div>
                        <Skills/>
                    </div>
                    <div className="md:text-3xl text-2xl font-bold text-start mb-8">
                        <h2><span className="text-mypink"> Skills  | </span> Tech Stack </h2>
                        <Accordion
                            type="single"
                            collapsible
                            className="w-full"
                            defaultValue="item-1">
                            <AccordionItem value="item-1">
                                <AccordionTrigger className="ibm-plex-mono-regular text-purple-600"> Programming Languages</AccordionTrigger>
                                <AccordionContent>
                                    <div className="grid grid-cols-2 gap-3 items-center">
                                        <div className="grid grid-cols-2 gap-3 items-center">
                                            <div>Java</div>
                                            <div className="flex items-center gap-2">
                                                <DonutChart  value={0.4} />
                                                <span className="text-sm">0.4</span>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-2 gap-3 items-center">
                                            <div>Python</div>
                                            <div className="flex items-center gap-2">
                                                <DonutChart  value={0.6} />
                                                <span className="text-sm">0.6</span>
                                            </div>
                                        </div>
                                    </div>
                                </AccordionContent>

                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger className="ibm-plex-mono-regular text-purple-600"> Frameworks & Technologies</AccordionTrigger>
                                <AccordionContent>
                                    <div className="grid grid-cols-2 gap-3 items-center">
                                        <div className="grid grid-cols-2 gap-3 items-center">
                                            <div>Java</div>
                                            <div className="flex items-center gap-2">
                                                <DonutChart  value={0.4} />
                                                <span className="text-sm">0.4</span>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-2 gap-3 items-center">
                                            <div>Python</div>
                                            <div className="flex items-center gap-2">
                                                <DonutChart  value={0.6} />
                                                <span className="text-sm">0.6</span>
                                            </div>
                                        </div>
                                    </div>
                                </AccordionContent>

                            </AccordionItem>

                        </Accordion>
                    </div>
                </div>

            </div>

            {/* Fixed Footer */}
            <div className="fixed bottom-0 left-0 w-full z-50">
                <Footer/>
            </div>
        </div>

    );
};

export default Competence;
