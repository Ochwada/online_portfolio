"use client";

import React from "react";
import Header from "@/Components/Shared/Header";
import Footer from "@/Components/Shared/Footer";
import Skills from "@/Components/Competence/Skills";
import TechStack from "@/Components/Competence/TechStack";

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
                    <div>
                        <Skills/>
                    </div>
                    <div className="md:text-3xl text-2xl font-bold text-start mb-8">
                        <h2><span className="text-mypink"> Skills  | </span> Tech Stack </h2>
                        <TechStack/>

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
