"use client";

import React, { useState, useEffect } from "react";
import { animate, motion, useMotionValue, useTransform } from "motion/react"
import Image from 'next/image';

import Header from "@/Components/Shared/Header";
import Footer from "@/Components/Shared/Footer";
import { projectsNavigation } from "@/Components/Constant";
//import { m } from "framer-motion";

// Color mapping for tools
const toolColors: Record<string, { bg: string; text: string }> = {
    "#React": { bg: "bg-blue-100", text: "text-blue-800" },
    "#TailwindCSS": { bg: "bg-pink-100", text: "text-pink-800" },
    "#NextJS": { bg: "bg-green-100", text: "text-green-800" },
    "#ThreeJS": { bg: "bg-sky-100", text: "text-sky-800" },
    "#NodeJS": { bg: "bg-yellow-100", text: "text-yellow-800" },
    "#Vite": { bg: "bg-orange-100", text: "text-orange-800" },
    "#scss": { bg: "bg-purple-100", text: "text-purple-800" },

    "#Sanity": { bg: "bg-red-100", text: "text-red-800" },
    "#Netlify": { bg: "bg-slate-100", text: "text-slate-800" },

    "#Python": { bg: "bg-cyan-100", text: "text-cyan-800" },
    "#C": { bg: "bg-emerald-100", text: "text-emerald-800" },

    "#Java": { bg: "bg-lime-100", text: "text-lime-800" },
    "#Spring": { bg: "bg-rose-100", text: "text-rose-800" },
    "#intellijIDEA": { bg: "bg-violet-100", text: "text-violet-800" },


};



const ProjectCard: React.FC<{ project: typeof projectsNavigation[0]; onToolClick: (tool: string) => void }> = ({ project, onToolClick }) => (
    <div className="flex flex-col mt-4 border border-dashed border-gray-500/[0.5] rounded p-2 shadow-lg hover:shadow-purple-500/50 transition-shadow duration-400">
        <div className="flex-grow">
            <Image
                src={project.image}
                alt={project.name}
                layout="responsive"
                width={300} // Adjust the value as per your layout needs
                height={100} // Adjust the value as per your layout needs
                className="w-full h-20 object-cover rounded-md mb-4 opacity-80"
            />
            <h2 className="text-base font-bold mb-2 ibm-plex-mono-semibold opacity-80">{project.name}</h2>
            <div className="flex flex-wrap gap-2 mb-2 ">
                {project.category.map((cat, index) => (
                    <span
                        key={index}
                        className="ibm-plex-mono-semibold-italic py-1 text-xs"
                    >
                        {cat}
                    </span>
                ))}
            </div>
            <p className="text-xs mb-4 dancing-script-semibold  text-gray-500 dark:text-gray-400">{project.subcategory}</p>
            <div className="flex flex-wrap gap-3 mb-2">
                {project.tools.map((tool, index) => {
                    const color = toolColors[tool] || { bg: "bg-gray-100", text: "text-gray-800" };
                    return (
                        <button
                            key={index}
                            onClick={() => onToolClick(tool)}
                            className={`px-2 py-1 text-xs rounded ${color.bg} ${color.text} cursor-pointer`}
                        >
                            {tool}
                        </button>
                    );
                })}
            </div>
        </div>
        <div className="flex justify-between mx-2 border-t border-gray-300/[0.5] pt-2">
            {/* GitHub Link */}
            {project.git_href ? (
                <a
                    href={project.git_href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-500 hover:underline font-bold text-sm"
                >
                    Code
                </a>
            ) : (
                <span className="text-gray-400 font-bold text-xs">Code (N/A)</span>
            )}

            {/* Live Site Link */}
            {project.web_href ? (
                <a
                    href={project.web_href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-500 hover:underline font-bold text-xs"
                >
                    Live Site
                </a>
            ) : (
                <span className="text-gray-400 font-bold text-xs">Live Site (N/A)</span>
            )}

            {/* More Info Link */}
            {project.href ? (
                <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-500 hover:underline font-bold text-xs"
                >
                    More Info
                </a>
            ) : (
                <span className="text-gray-400 font-bold text-xs">More Info (N/A)</span>
            )}
        </div>
    </div>
);
// ------------------ Frammer Motion ------------------

const text = {
    fontSize: 64,
    color: "#7E60BF",
}
// ------------------ Frammer Motion END------------------
// ------------------  ------------------- ---------------

const Projects: React.FC = () => {
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [selectedSubcategories, setSelectedSubcategories] = useState<string[]>([]);
    const [selectedTool, setSelectedTool] = useState<string | null>(null);
    const [visibleProjectsCount, setVisibleProjectsCount] = useState(8);

    // ------------------ Frammer Motion ------------------

    const count = useMotionValue(0)
    const rounded = useTransform(() => Math.round(count.get()))

    useEffect(() => {
        const controls = animate(count, 10, { duration: 5 })
        return () => controls.stop()
    }, [])
    // ------------------ Frammer Motion END------------------
    // ------------------  ------------------- ---------------

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
                                Code Chronicles: Projects
                            </span>
                        </h1>
                        <p className="opacity-80 m-8  text-lg ibm">
                            Welcome to - A Journey Through My Projects - You will find a selection of my work right here, each representing
                            the passion and commitment I put into it.
                        </p>
                        <div className="flex justify-center mb-6 ">
                            <motion.pre style={text}>{rounded}</motion.pre>
                        </div>
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
