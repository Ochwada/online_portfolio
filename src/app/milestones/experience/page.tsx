"use client";

import React from "react";
import { experienceData } from "@/Components/Constant";
import Header from "@/Components/Shared/Header";
import Footer from "@/Components/Shared/Footer";

/*
const Experience = () => {
    return (
        <div className="flex flex-col min-h-screen experience-background  ">
            <div className="fixed top-0 left-0 w-full z-50">
                <Header />
            </div>

            <div className="flex-grow pt-16 pb-16 ">
                <div className="p-4 sm:p-8">
                    <h1 className="text-2xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center">
                        My Work Experience
                    </h1>

                    <ul className="list-none pl-0">
                        {experienceData.map((item, index) => (
                            <li key={index} 
                            //className="mb-4 p-4 border border-gray-300 rounded-lg shadow-lg"
                            className="mb-4 p-2 border border-gray-500/[0.25] rounded-sm shadow-lg hover:border-transparent hover:shadow-multicolor"
                            >
                                <h3 className="text-lg font-bold">{item.position} at {item.company}</h3>
                                <p className="text-sm text-gray-600">{item.date}</p>
                                <p className="text-sm">{item.description}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="fixed bottom-0 left-0 w-full z-50">
                <Footer />
            </div>
        </div>
    );
};

export default Experience;
 */

const Experience = () => {
    return (
        <div className="flex flex-col min-h-screen milestone-background ">
            {/* Fixed Header */}
            <div className="fixed top-0 left-0 w-full z-50">
                <Header />
            </div>

            {/* Timeline Content */}
            <div className="flex-grow pt-24 pb-16 px-4 sm:px-8">
                <h1 className="text-2xl sm:text-4xl font-bold mb-12 text-center">
                <span className=" text-mypink"> Work</span> Experience
                </h1>

                {/* Timeline Wrapper */}
                <div className="relative flex flex-col items-center">
                    {/* Vertical Timeline Line */}
                    <div className="absolute w-1 bg-gray-400/[0.25] h-full left-1/2 transform -translate-x-1/2"></div>

                    {experienceData.map((item, index) => (
                        <div
                            key={index}
                            className={`relative flex items-center w-full max-w-8xl my-1/2 ${index % 2 === 0 ? "justify-start pr-10" : "justify-end pl-10"
                                }`}
                        >
                            {/* Timeline Dot - Always Centered */}
                            <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-pink-200 border-1 border-mypurple rounded-full z-10"></div>

                            {/* Training Card - Offset from Dot */}
                            <div className={`relative p-4 rounded-lg shadow-lg w-5/12 border border-gray-400/[0.25] dark:border-gray-600 hover:border-transparent hover:shadow-multicolor ${index % 2 === 0 ? "ml-12" : "mr-12"
                                //mb-4 p-2 border border-gray-500/[0.25] rounded-sm shadow-lg hover:border-transparent hover:shadow-multicolor
                                }`}>
                                <h3 className="text-lg font-bold pb-2">{item.position}</h3>
                                <p className="text-sm font-bold uppercase text-gray-600">{item.company}</p>
                                <p className="text-xs text-gray-500">{item.date}</p>
                                <p className="text-sm">{item.description}</p>
                                <p className="text-xs"> Website: &nbsp;
                                    {item.companylink ? (
                                        <a
                                            href={item.companylink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-xs underline underline-offset-2 italic text-purple-500 hover:text-purple-700"
                                        >
                                            {item.company}
                                        </a>
                                    ) : (
                                        <span className="text-xs italic text-gray-400">N/A</span>
                                    )}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Fixed Footer */}
            <div className="fixed bottom-0 left-0 w-full z-50">
                <Footer />
            </div>
        </div>
    );
};

export default Experience;
