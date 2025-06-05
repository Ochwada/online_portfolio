"use client";

import React from "react";
import Header from "@/Components/Shared/Header";
import Footer from "@/Components/Shared/Footer";
import {awardsData} from "@/Components/Constant";
import Skills from "@/Components/Competence/Skills";


const Awards: React.FC = () => {

    return (
        <div className="flex flex-col min-h-screen competence-background mt-16">
            {/* Fixed Header */}
            <div className="fixed top-0 left-0 w-full z-50">
                <Header />
            </div>

            {/* Page Content */}
            {/* <div className="flex-grow pt-16 pb-16 place-content-center"> */}
            <div className="flex-grow  place-content-center">

                {/* Main Content */}
                <div className="p-4 sm:p-8 pb-2 mx-8 ">
                    <h1 className=" md:text-4xl text-2xl font-bold text-start mb-6">
                        Awards <span className="text-mypink">  & Recognition </span>
                    </h1>
                    <div>
                        <p className="text-base mb-1 md:mx-16 text-justify">
                            This page showcases the honors and accolades received in recognition of impactful contributions to technology, innovation,
                            and leadership. Each award reflects a milestone in advancing open-source geospatial solutions, promoting diversity in tech,
                            and driving user-centered innovation across industries. Explore the stories behind these achievements and the esteemed
                            organizations that made them possible. &nbsp;
                        </p>
                    </div>
                    <div className="space-y-6 my-6">
                        {awardsData.map((award, index) => (
                            <div
                                key={index}
                                className="p-6 rounded-2xl shadow-lg bg-white dark:bg-gray-800 transition flex flex-col md:flex-row items-center md:items-start gap-6"
                            >
                                <img
                                    src={award.image}
                                    alt={`${award.title} logo`}
                                    className="w-28 h-28 object-contain rounded-xl shadow-md"
                                />
                                <div>
                                    <h2 className="text-2xl font-semibold">
                                        {award.title}
                                    </h2>
                                    <p className="mt-2 text-gray-700 dark:text-gray-300">{award.description}</p>
                                    <p className="mt-1 text-sm text-gray-500 italic">
                                        Awarded by : {award.awardingParty}
                                    </p>
                                    <p className="mt-1 text-sm text-gray-500">
                                        Year Awarded : <span className="italic">{award.year}</span>
                                    </p>
                                    <a
                                        href={award.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-3 inline-block text-blue-600 hover:text-blue-800 underline text-sm"
                                    >
                                        Learn more about this award →
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>

            </div>

            {/* Fixed Footer */}
            <div className="fixed bottom-0 left-0 w-full z-50">
                <Footer />
            </div>
        </div>

    );
};

export default Awards;