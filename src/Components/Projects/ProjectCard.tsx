import React from "react";
import {projectsNavigation, toolColors} from "@/Components/Constant";
import Image from "next/image";



export const ProjectCard: React.FC<{ project: typeof projectsNavigation[0]; onToolClick: (tool: string) => void }> = ({ project, onToolClick }) => (
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
            <p className="text-xs  space-grotesk-regular text-gray-500" > {project.description}</p>
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