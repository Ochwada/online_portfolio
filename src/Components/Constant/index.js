
// src/Components/Constant/index.js

// -------------------------------------------Blogs --------------------

// ------------------------------------------- Blogs --------------------
export { blogPosts } from "./blogPosts";
export {eventsPosts} from "./events";
export { projectsNavigation } from "./projects";
export {toolColors} from "./toolColors";
export {educationData, experienceData, trainingData} from "./milestones";

// -------------------------------------------Skills Section --------------------
export const Skills = [
    { name: "Tailwind", level: 0.9, distance: "orbit-2" },
    { name: "GIS", level: 0.9, distance: "orbit-4" },

    { name: "SQL", level: 0.6, distance: "orbit-1" },
    { name: "React", level: 0.6, distance: "orbit-3" },
    { name: "Python", level: 0.6, distance: "orbit-5" },

    { name: "NextJS", level: 0.5, distance: "orbit-2" },
    { name: "GIT", level: 0.5, distance: "orbit-4" },

    { name: "Java", level: 0.3, distance: "orbit-1" },

    { name: "NodeJS", level: 0.2, distance: "orbit-2" },

  ];

// -------------------------------------------Header Navigation --------------------
export const navigation = [
    {
        id: 1,
        name: "Home",
        href: "/",
        current: true,
    },
    {
        id: 2,
        name: "Competence",
        href: "/competence",
    },
    {
        id: 4,
        name: "Milestones",
        href: "/milestones",
        subLinks: [
            { 
                id: 5, 
                name: "Education", 
                href: "/milestones/education" 
            },
            { 
                id: 6, 
                name: "Experience", 
                href: "/milestones/experience" },
            { 
                id: 7, 
                name: "Trainings", 
                href: "/milestones/trainings" },
        ],
    },
    {
        id: 3,
        name: "Projects",
        href: "/projects",
    },
    {
        id: 8,
        name: "Hub",
        href: "/hub",
        subLinks: [
            {
                id: 9,
                name: "Blogs",
                href: "/hub/blogs",
            },
            {
                id: 11,
                name: "Events",
                href: "/hub/events",
            },
            {
                id: 10,
                name: "Contact Me",
                href: "/hub/contact",
            },
        ],
    },

];



// ----------------- Footer Social Media -----------------------------

export const SocialMedia = [
    {
        id: 3,
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/ochwada-l-66630a36/",
        target: "_blank",
        rel: "noopener noreferrer",
        ariaLabel: "LinkedIn",
    },
    {
        id: 4,
        name: "GitHub",
        href: "https://github.com/Ochwada",
        target: "_blank",
        rel: "noopener noreferrer",
        ariaLabel: "GitHub",
    },
    {
        id: 5,
        name: "Medium",
        href: "https://medium.com/@ochwada",
        target: "_blank",
        rel: "noopener noreferrer",
        ariaLabel: "Medium",
    },
    {
        id: 6,
        name: "Dev",
        href: "https://dev.to/ochwada",
        target: "_blank",
        rel: "noopener noreferrer",
        ariaLabel: "Dev",
    },
    {
        id: 1,
        name: "Facebook",
        href: "https://www.facebook.com/ochwada.linda/",
        target: "_blank",
        rel: "noopener noreferrer",
        ariaLabel: "Facebook",
    },
    {
        id: 2,
        name: "Instagram",
        href: "https://www.instagram.com/ochwada_linda",
        target: "_blank",
        rel: "noopener noreferrer",
        ariaLabel: "Instagram",
    },
];