"use client";

import React from "react";
import { trainingData } from "@/Components/Constant";
import Header from "@/Components/Shared/Header";
import Footer from "@/Components/Shared/Footer";

const Trainings = () => {
    return (
        <div className="flex flex-col min-h-screen milestone-background ">
            {/* Fixed Header */}
            <div className="fixed top-0 left-0 w-full z-50">
                <Header />
            </div>

            {/* Timeline Content */}
            <div className="flex-grow pt-24 pb-16 px-4 sm:px-8">
                <h1 className="text-2xl sm:text-4xl font-bold mb-12 text-center">
                    {/* Trainings & Certifications */}
                    <span className="text-mypink"> Self-Learning</span> Path 
                </h1>

                {/* Timeline Wrapper */}
                <div className="relative flex flex-col items-center">
                    {/* Vertical Timeline Line */}
                    <div className="absolute w-1 bg-gray-400/[0.25] h-full left-1/2 transform -translate-x-1/2"></div>

                    {trainingData.map((item, index) => (
                        <div 
                            key={index} 
                            className={`relative flex items-center w-full max-w-8xl my-1/2 ${ 
                                index % 2 === 0 ? "justify-start pr-10" : "justify-end pl-10"
                            }`}
                        >
                            {/* Timeline Dot - Always Centered */}
                            <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-pink-200 border-1 border-mypurple rounded-full z-10"></div>

                            {/* Training Card - Offset from Dot */}
                            <div className={`relative p-4 rounded-lg shadow-lg w-5/12 border border-gray-400/[0.25] dark:border-gray-600 hover:border-transparent hover:shadow-multicolor ${
                                index % 2 === 0 ? "ml-12" : "mr-12"
                                //mb-4 p-2 border border-gray-500/[0.25] rounded-sm shadow-lg hover:border-transparent hover:shadow-multicolor
                            }`}>
                                <h3 className="text-lg font-bold pb-2">{item.training}</h3>
                                <p className="text-sm text-gray-400 dark:text-gray-300">{item.date}</p>
                                <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
                                {item.certificateLink && (
                                    <a
                                        href={item.certificateLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-purple-500 hover:underline text-xs"
                                    >
                                        View Certificate
                                    </a>
                                )}
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

export default Trainings;
