"use client";

import React, { useState, useEffect } from "react";
import { animate } from "motion/react"
import Header from "@/Components/Shared/Header";
import Footer from "@/Components/Shared/Footer";
import { projectsNavigation } from "@/Components/Constant";
import {ProjectCard} from "@/Components/Projects/ProjectCard"


// -------------------------------------- New Constant Projects FC --------------------------------------

const Projects: React.FC = () => {
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [selectedSubcategories, setSelectedSubcategories] = useState<string[]>([]);
    const [selectedTool, setSelectedTool] = useState<string | null>(null);
    const [visibleProjectsCount, setVisibleProjectsCount] = useState(8);

// ----------------------------- Count the number of Projects -------------------------------

    const [count, setCount] = useState(0);

    useEffect(() => {
        const totalProjects = projectsNavigation.length;

        const controls = animate(0, totalProjects, {
            duration: 5,
            onUpdate(value) {
                setCount(Math.floor(value));
            },
        });

        return () => controls.stop();
    }, []);
// ----------------------------- --------------------  -------------------------------

    // Deduplicate categories using flatMap and Set
    const categories = Array.from(
        new Set(projectsNavigation.flatMap((project) => project.category))
    );

    const subcategories = selectedCategories.length
        ? Array.from(
            new Set(
                projectsNavigation
                    .filter((project) =>
                        project.category.some((cat) => selectedCategories.includes(cat))
                    )
                    .map((project) => project.subcategory)
            )
        )
        : [];

    const toggleSelection = (item: string, setState: React.Dispatch<React.SetStateAction<string[]>>) => {
        setState((prev) =>
            prev.includes(item) ? prev.filter((current) => current !== item) : [...prev, item]
        );
    };

    const filteredProjects = projectsNavigation.filter((project) => {
        return (
            (!selectedCategories.length ||
                project.category.some((cat) => selectedCategories.includes(cat))) &&
            (!selectedSubcategories.length || selectedSubcategories.includes(project.subcategory)) &&
            (!selectedTool || project.tools.includes(selectedTool))
        );
    });

    const handleToolClick = (tool: string) => {
        setSelectedTool(tool === selectedTool ? null : tool);
    };

    const handleLoadMore = () => {
        setVisibleProjectsCount((prevCount) => prevCount + 8);
    };

    return (
        <div className="flex flex-col min-h-screen experience-background">
            <div className="fixed top-0 left-0 w-full z-50">
                <Header />
            </div>
            <div className="flex-grow pt-16 pb-16">
                <div>
                    <div className="p-4 mb-14">
                        <h1 className="text-2xl mb-4">
                            <span className="ibm-plex-mono-bold md:text-4xl text-2xl">
                            Code Chronicles: <span className="text-mypink"> Projects </span>  
                            </span>
                            
                        </h1>
                        <p className="opacity-80 m-8  text-lg ibm">
                            Welcome to - A Journey Through My Projects - You will find a selection of my work right here, each representing
                            the passion and commitment I put into it.
                        </p>
                        <span className="flex justify-center my-10 text-4xl text-gray-500 dark:text-gray-400 ">
                            No. of Projects: &nbsp; <span className="font-bold text-purple-500"> {count} </span>
                        </span>
                        {/* <div className="flex justify-center mb-6 ">
                            <motion.pre style={text}>{rounded}</motion.pre>
                        </div> */}
                        {/* Category Tabs */}
                        <div className="flex flex-wrap gap-2 sm:gap-4 mb-4 justify-start sm:justify-center overflow-x-auto">
                            <button
                                onClick={() => {
                                    setSelectedCategories([]);
                                    setSelectedSubcategories([]);
                                    setSelectedTool(null);
                                }}
                                className={`px-4 py-2 text-sm font-medium rounded ${!selectedCategories.length ? "bg-purple-600 text-white" : "bg-gray-200 text-gray-800"
                                    }`}
                            >
                                All Categories
                            </button>
                            {categories.map((category, index) => (
                                <button
                                    key={index}
                                    onClick={() => toggleSelection(category, setSelectedCategories)}
                                    className={`px-4 py-2 text-sm font-medium rounded ${selectedCategories.includes(category)
                                        ? "bg-purple-300 text-white"
                                        : "bg-gray-200 text-gray-800"
                                        }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>

                        {/* Subcategory Tabs */}
                        {selectedCategories.length > 0 && (
                            <div className="flex flex-wrap gap-2 sm:gap-4 mb-4 justify-start sm:justify-center overflow-x-auto">
                                <button
                                    onClick={() => setSelectedSubcategories([])}
                                    className={`px-4 py-2 text-sm font-medium rounded ${!selectedSubcategories.length
                                        ? "bg-pink-500 text-white"
                                        : "bg-gray-200 text-gray-800"
                                        }`}
                                >
                                    All Subcategories
                                </button>
                                {subcategories.map((subcategory, index) => (
                                    <button
                                        key={index}
                                        onClick={() => toggleSelection(subcategory, setSelectedSubcategories)}
                                        className={`px-4 py-2 text-sm font-medium rounded ${selectedSubcategories.includes(subcategory)
                                            ? "bg-mypink text-white"
                                            : "bg-gray-200 text-gray-800"
                                            }`}
                                    >
                                        {subcategory}
                                    </button>
                                ))}
                            </div>
                        )}


                        {/* Filter Info */}
                        {selectedTool && (
                            <div className="mb-4 text-sm text-gray-600 dark:text-gray-400">
                                Filtering by Tool: <span className="font-bold">{selectedTool}</span>{" "}
                                <button
                                    onClick={() => setSelectedTool(null)}
                                    className="text-purple-500 hover:underline ml-2"
                                >
                                    Clear Filter
                                </button>
                            </div>
                        )}

                        {/* Projects Grid */}
                        <div className="grid gap-4 grid-cols-1 sm:grid-cols-3 lg:grid-cols-4">
                            {filteredProjects.slice(0, visibleProjectsCount).map((project) => (
                                <ProjectCard key={project.id} project={project} onToolClick={handleToolClick} />
                            ))}
                        </div>

                        {/* Load More and Show Less Buttons */}
                        <div className="flex justify-center mt-6 gap-4 mb-6">
                            {visibleProjectsCount < filteredProjects.length && (
                                <button
                                    onClick={handleLoadMore}
                                    className="px-6 py-2 text-sm font-medium bg-purple-500 text-white rounded hover:bg-purple-700"
                                >
                                    Load More
                                </button>
                            )}
                            {visibleProjectsCount > 8 && (
                                <button
                                    onClick={() => setVisibleProjectsCount(8)}
                                    className="px-6 py-2 text-sm font-medium bg-gray-500 text-white rounded hover:bg-gray-700"
                                >
                                    Show Less
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className="fixed bottom-0 left-0 w-full z-50">
                <Footer />
            </div>
        </div>
    );
};

export default Projects;
