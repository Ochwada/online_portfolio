"use client";

import React from "react";
import { motion, useScroll } from "framer-motion";
import { ScrollText } from "lucide-react";


import Header from "@/Components/Shared/Header";
import Footer from "@/Components/Shared/Footer";
import { experienceData, educationData, trainingData } from "@/Components/Constant";



// Define TypeScript Interfaces for the data
interface ExperienceItem {
    position: string;
    company: string;
    date: string;
    description?: (string | React.JSX.Element)[];
    companylink?: string;
}

interface EducationItem {
    title: string;
    institution: string | string[];
    date: string;
    description?: string | (string | React.JSX.Element)[];
    project?: (string | React.JSX.Element)[];
}

interface TrainingItem {
    training: string;
    date: string;
    description?: string;
    certificateLink?: string;
}


const Timeline: React.FC = () => {
    const { scrollYProgress } = useScroll();

    const renderExperienceItem = (item: ExperienceItem, index: number): JSX.Element => (
        <li
            key={`experience-${index}`}
            className="mb-4 p-4 border border-gray-500/[0.25] rounded-sm shadow-lg hover:border-transparent hover:shadow-multicolor"
        >
            <span className="flex flex-row items-center justify-between">
                <h3 className="text-base font-bold text-slate-500">{item.position}</h3>
                <p className="text-xs text-gray-400">{item.company}</p>
            </span>
       
                <p className="text-sm text-gray-500">{item.date}</p>
                <ul className="mt-2 list-disc list-inside">
                    {Array.isArray(item.description)
                        ? item.description.map((desc, idx) => (
                            <li key={`desc-${index}-${idx}`} className="text-gray-600 text-sm">
                                {desc}
                            </li>
                        ))
                        : <p className="text-gray-700 text-sm">{item.description}</p>}
                </ul>
            
            {item.companylink && (
                <a
                    href={item.companylink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:underline text-xs mt-2 block"
                >
                    Visit Website
                </a>
            )}
        </li>
    );


    const renderEducationItem = (item: EducationItem, index: number): JSX.Element => (
        <li
            key={`education-${index}`}
            className="mb-4 p-2 border border-gray-500/[0.25] rounded-sm shadow-lg hover:border-transparent hover:shadow-multicolor"
        >
            <span className="flex flex-row items-center justify-between">
                <h3 className="text-base font-bold text-slate-500">{item.title}</h3>
                <p className="text-xs text-gray-400">{item.institution}</p>
            </span>
            <span className="flex flex-row justify-start gap-10 mt-2">
                <p className="text-sm text-gray-500 mt-2">{item.date}</p>
                <p className="text-sm mt-2 text-slate-500">{item.description}</p>
            </span>
            {item.project && (
                <ul className="mt-2 list-disc list-inside">
                    {item.project.map((desc, idx) => (
                        <li key={`desc-${item.title}-${idx}`} className="text-slate-500 text-xs">
                            {desc}
                        </li>
                    ))}
                </ul>
            )}
        </li>
    );


    const renderTrainingItem = (item: TrainingItem, index: number): JSX.Element => (
        <li
            key={`training-${index}`}
            className="mb-4 py-2 border-b border-gray-300/[0.25] rounded-sm shadow-lg hover:border-transparent hover:shadow-multicolor"
        >
            <span className="flex flex-row items-center justify-between">
                <h3 className="text-base font-bold ml-4 text-slate-500">{item.training}</h3>
                <p className="text-xs text-gray-500 mr-6">{item.date}</p>
            </span>
            <span className="flex flex-row justify-start gap-10 mt-2">
                <p className="text-xs ml-6 text-slate-500">{item.description}</p>
                {item.certificateLink && (
                    <a
                        href={item.certificateLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-700 hover:underline text-xs ibm-plex-mono-semibold"
                    >
                        View Certificate
                    </a>
                )}
            </span>


        </li>
    );

    return (
        <div className="flex flex-col min-h-screen experience-background">
            <div className="fixed top-0 left-0 w-full z-50">
                <Header />
            </div>

            <div className="flex-grow pt-16 pb-16 ">
                <motion.div
                    className="progress-bar fixed top-16 left-0 w-full h-1 bg-blue-500"
                    style={{ scaleX: scrollYProgress }}
                />

                <div className="p-4 sm:p-8">
                    <h1 className="text-2xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center">
                        My Journey: Experience, Education & Training
                    </h1>

                    <div className="mb-16">
                        <h2 className="text-slate-500  text-xl sm:text-3xl font-bold mb-4 sm:mb-8 text-center">
                            <span className="underline underline-offset-4 text-mypink">Expe</span>rience
                        </h2>
                        <ul className="list-none pl-0">
                            {experienceData.map((item, index) => renderExperienceItem(item, index))}
                        </ul>
                    </div>


                    <div className="mb-16">
                        <h2 className="text-slate-500 text-xl sm:text-3xl font-bold mb-4 sm:mb-8 text-center">
                            <span className="underline underline-offset-4 text-mypink">Edu</span>cation
                        </h2>
                        <ul className="list-none pl-0">
                            {educationData.map((item, index) => renderEducationItem(item, index))}
                        </ul>
                    </div>


                    <div className="mb-24">
                        <h2 className=" text-slate-500 text-xl sm:text-3xl font-bold mb-4 sm:mb-8 text-center">
                            <span className="underline underline-offset-4 text-mypink">Tra</span>ining
                        </h2>
                        <ul className="list-none pl-0">
                            {trainingData.map((item, index) => renderTrainingItem(item, index))}
                        </ul>
                    </div>

                </div>
            </div>

            <div className="fixed bottom-0 left-0 w-full z-50">
                <Footer />
            </div>
        </div>
    );
};

export default Timeline;
