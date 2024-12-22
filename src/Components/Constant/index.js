
// src/Components/Constant/index.js
import React from 'react';

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
        name: "Experience",
        href: "/experience",
    },
    {
        id: 3,
        name: "Projects",
        href: "/projects",
    },

];
// -------------------------------------------Projects Navigation --------------------

export const projectsNavigation = [
    {
        id: "ardhiapp",
        name: "Ardhi Project - WebGIS Application",
        git_href: "https://github.com/Ardhi-OWM/ardhi_supabase_clerk_latest",
        //web_href: "https://ardhi.de/",
        href: "https://ardhi.slab.com/posts/what-is-ardhi-project-z0d01cz8?shr=EZiIPCLM0lt9h1C_2osUBQA_",
        image: '/assets/ardhi_app.png',
        category: ["Web Development |", "Project Management"],
        subcategory: "Frontend",
        tools: ["#React", "#TailwindCSS", "#NextJS"],
    },
    {
        id: "ardhi",
        name: "Ardhi Project - Landing Page",
        git_href: "https://github.com/Ardhi-OWM/landing-page",
        web_href: "https://ardhi.de/",
        href: "https://ardhi.slab.com/posts/what-is-ardhi-project-z0d01cz8?shr=EZiIPCLM0lt9h1C_2osUBQA_",
        image: '/assets/ardhi.png',
        category: ["Web Development"],
        subcategory: "Frontend",
        tools: ["#React", "#TailwindCSS", "#Vite"],
    },
    {
        id: 'ProjectsProfile2023',
        name: "Curriculum vitae - Portfolio (May 2023)",
        git_href: "https://github.com/Ochwada/My-Profile-CV-2023/tree/main/Ochwada_Profile_May2023",
        web_href: "https://ochwada-23.netlify.app/",
        //href: "https://medium.com/@ochwada/c-programing-setup-in-visual-studio-code-bd4cb60e58ff",
        image: '/assets/profile0523.png',
        category: ["Web Development"],
        subcategory: "Frontend",
        tools: ["#React", "#Vite", "#ThreeJS", "#TailwindCSS", '#Netlify',],
    },
    {
        id: 'clvprediction',
        name: "Customer Lifetime Value Prediction",
        git_href: "https://github.com/Ochwada/Software_Code_Pytho",
        //web_href: "https://linda-ochwada.netlify.app/",
        //href: "https://medium.com/@ochwada/c-programing-setup-in-visual-studio-code-bd4cb60e58ff",
        image: '/assets/clv.png',
        category: ["Machine Learning"],
        subcategory: "Predictive Analytics",
        tools: ["#Python",],
    },
    {
        id: 'PhotosIntoCartoons1',
        name: "Turn Photos into Cartoons",
        git_href: "https://github.com/Ochwada/Data-Science-2023/blob/main/Photos%20into%20Cartoons/photo_to_catoons.ipynb",
        //web_href: "https://linda-ochwada.netlify.app/",
        href: "https://medium.com/@ochwada/c-programing-setup-in-visual-studio-code-bd4cb60e58ff",
        image: '/assets/catoon.png',
        category: ["Computer Vision"],
        subcategory: "Image Processing and Transformation",
        tools: ["#Python",],
    },
];

// --------------- Experience Page ---------------------------
// ------ Education Section  
export const educationData = [
    {
        title: "Masters in Geodesy and Geoinformation Science",
        date: "2013 - 2018",
        description: "Masters Degree",
        institution: "Technical University of Berlin",
        project: ["Master Thesis: Location Analysis of High Altitude Wind Energy in Germany"],
    },
    {
        title: "Climate-KIC: Climate Change innovation & Entrepreneurship ",
        date: "2014 - 2018",
        description: "Add-On Masters Degree",
        institution: "Technical University of Berlin & EIT"
    },
    {
        title: "Bachelor of Arts in Geography",
        date: "2009 - 2012",
        description: "Bachelors Degree",
        institution: "Moi University, Eldoret (KE)",
        project: ["Thesis: The Effect of Riparian Vegetation on River Delta in the Nzoia River delta, Kenya"],
    },
];
// ------ Training Section  
export const trainingData = [
    {
        training: "Databases and SQL for Data Science with Python",
        date: "July 2024",
        description: "IBM - Coursera",
        certificateLink: "https://www.coursera.org/account/accomplishments/records/ETPRCNMG6BYU"
    },
    {
        training: "Python for Data Science, AI & Development",
        date: "June 2024",
        description: "IBM- Coursera",
        certificateLink: "https://www.coursera.org/account/accomplishments/records/TCQEYSD2BLAV"
    },
    {
        training: "Geospatial Data Visualization using Python and Folium",
        date: "April 2024",
        description: "Deprecated Guided Projects - Coursera",
        certificateLink: "https://www.coursera.org/account/accomplishments/records/W6GNY6XCSWUG"
    },
    {
        training: "Python for Data Science",
        date: "June 2024",
        description: "IBMx - Coursera",
        certificateLink: "https://www.coursera.org/account/accomplishments/records/ETPRCNMG6BYU"
    },
    {
        training: "Fundamentals of of Technology Sales",
        date: "April 2024",
        description: "University of Maryland, College Park - Coursera",
        certificateLink: "https://www.coursera.org/account/accomplishments/records/JX9ZBVJAD3VL"
    },
    {
        training: "Foundations of Project Management",
        date: "August 2023",
        description: "Google- Coursera",
        certificateLink: "https://www.coursera.org/account/accomplishments/records/HFW84NV488JL"
    },

];
// ------ Experience Section  
export const experienceData = [
    {
        position: "GIS Frontend Developer | Project Manager",
        date: "Sept 2024 - Present",
        company: "Ardhi Project - Ongoing (Berlin - DE)",
        description: ["Leading the development of the Ardhi WebGIS application and ensuring optimized geospatial workflows."],
        companylink: "https://ardhi.de/"
    },
    {
        position: "Technical Managing Director",
        date: "Aug 2023 - Present",
        company: "Dakmotion UG (Münich - DE)",
        description: ["Led technical team in delivering innovative products and driving business growth."],
        companylink: "https://dakmotion.com/"
    },
    {
        position: "GIS Lead | Core Member ",
        date: "Jan 23 — Present",
        company: "Napta Playa e.V ( - DE)",
        description: ["Supporting in the GIS and Remote Sensing project analysis."],
        companylink: "https://www.nabtaplaya.de/"
    },
    {
        position: "International Sales Manager ",
        date: "Oct 2023 - Dec 2024",
        company: "Hansa Luftbild AG (Münster - DE)",
        description: ["Driving international sales and business growth."],
    },
    {
        position: "Product Evangelist | Sales ",
        date: "May 2022 - Oct 2023",
        company: "Dealcode GmbH (Hamburg - DE)",
        description: ["Bridged user needs with development, drove market presence, and ensured product alignment with trends while fostering partnerships."],
        companylink: "https://www.dealcode.ai/"
    },
    {
        position: "Remote Sensing Consultant | Managing Director ",
        date: "July 2019 —Aug 2021",
        company: "AfroAI UG (Berlin - DE)",
        description: [
            "Managing Geodata science, web and app development projects, from their initiation to their closure, ensuring quality analysis. ",
            <React.Fragment key="free-geospatial-data-resources">
                Author of <a  className="text-purple-400" href="https://buymeacoffee.com/ochwada/e/203469" target="_blank" rel="noopener noreferrer">
                    <u>Free Geospatial Data Resources (Ebook)</u>
                </a>
            </React.Fragment>
        ],
        //companylink: "https://www.dealcode.ai/"
    },
    {
        position: "GeoData Scientist Consultant  ",
        date: "January 2019 - June 2019",
        company: "Super & Super GmbH (Berlin - DE)",
        description: ["Managing geospatial projects & Sales and Marketing."],
        //companylink: "https://www.dealcode.ai/"
    },
    {
        position: "Geoinformatics Working Student",
        date: "April 15 —September 15",
        company: "GFZ - German Research Centre For Geosciences (Potsdam - DE)",
        description: ["Geo-Enabled City GHG Data in 3D"],
    },
    {
        position: "GIS Intern ",
        date: "May 2012—October 2012",
        company: "Save the Elephants —STE (Nairobi -Kenya)",
        description: ["Producing migratory routes using STE data."],
    },
    {
        position: "GIS & Remote Sensing Intern  ",
        date: "May 2011—July 2011",
        company: "United Nations FAO- SWALIM (Nairobi -Kenya)",
    },
    {
        position: "GIS & Remote Sensing Intern  ",
        date: "May 2010—July 2010",
        company: "United Nations FAO- SWALIM (Nairobi -Kenya)",
    },
];

// -------------------------- Competence page  --------------------------
export const competence = [
    {
        id: 2,
        name: "GIS & Remote Sensing - Analytics",
        description: "Proficient in geospatial analysis, mapping, and remote sensing techniques for impactful insights.",
        href: "/projects",
    },
   /*  {
        id: 3,
        name: "Data Analytics",
        description: "Skilled in extracting meaningful insights from complex datasets to support decision-making.",
        href: "/projects",
    }, */
    {
        id: 4,
        name: "Web Development",
        description: "Creating dynamic, user-focused web applications using modern tools and frameworks.",
        href: "/projects",
    },
    {
        id: 1,
        name: "Project Management",
        description: "Expert in planning, execution, and delivering successful projects on time and within scope.",
        href: "/projects",
    },
    /* {
        id: 5,
        name: "Sales & Strategy",
        description: "Experienced in tailoring solutions, building relationships, and driving business growth.",
        href: "/projects",
    }, */

];

// ----------------- Footer Social Media

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
        name: "Dev.to",
        href: "https://dev.to/ochwada",
        target: "_blank",
        rel: "noopener noreferrer",
        ariaLabel: "Dev.to",
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