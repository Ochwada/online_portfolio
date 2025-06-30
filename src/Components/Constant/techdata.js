export const techData = [
    {
        title: "Programming Languages",
        type: "single",
        items: [
            { name: "C", value: 0.3 },
            { name: "Java", value: 0.5 },
            { name: "JavaScript", value: 0.5 },
            { name: "Python", value: 0.6 },
            { name: "TypeScript", value: 0.5 },
            { name: "SQL", value: 0.7 },
        ],
    },
    {
        title: "Frameworks & Technologies",
        type: "grouped",
        categories: [
            {
                label: "Frontend",
                items: [
                    { name: "Next.js", value: 0.5 },
                    { name: "Leaflet (GIS)", value: 0.5 },
                    { name: "React", value: 0.5 },
                    { name: "Tailwind", value: 0.6 },
                    { name: "Vue", value: 0.3 },
                    { name: "Vite", value: 0.4 },
                ],
            },
            {
                label: "Backend",
                items: [
                    { name: "Django", value: 0.3 },
                    { name: "Node.js", value: 0.5 },
                    { name: "REST API", value: 0.2},
                    { name: "Spring Boot", value: 0.1 },
                ],
            },
            {
                label: "Cloud / Platforms",
                items: [
                    { name: "AWS", value: 0.3 },
                    { name: "Firebase", value: 0.2 },
                    { name: "Netlify", value: 0.6 },
                    { name: "Render", value: 0.1 },
                ],
            },
        ],
    },
    {
        title: "Dev Tools",
        type: "grouped",
        categories: [
            {
                label: "GIS & Visualization",
                items: [
                    { name: "ArcGIS", value: 0.6 },
                    { name: "QGIS", value: 0.8 },
                ]
            },
            {
                label: "Code Editors & IDEs",
                items: [
                    { name: "VS Code", value: 0.9 },
                    { name: "IntelliJ IDEA", value: 0.7 },
                    { name: "PyCharm", value: 0.7 },
                    { name: "Anaconda", value: 0.7 },
                ]
            },
            {
                label: "Debugging Tools",
                items: [
                    { name: "Chrome DevTools", value: 0.6 },
                    { name: "Postman", value: 0.3 },
                ]
            },
            {
                label: "Testing Frameworks",
                items: [
                    {name: "JUnit (Java)", value: 0.5},
                ]
            },
            {
                label: "Build Tools",
                items: [
                    { name: "Maven", value: 0.5 },
                    { name: "Webpack", value: 0.2 },
                ]
            },
            {
                label: "Linters & Formatters",
                items: [
                    { name: "ESLint", value: 0.5 },
                    { name: "Prettier", value: 0.2 },
                ]
            },
            {
                label: "Version Control & Collaboration",
                items: [
                    { name: "Git", value: 0.5 },
                    { name: "GitHub CLI", value: 0.5 },
                ]
            },
            {
                label: "Other Dev Productivity Tools",
                items: [
                    { name: "Docker", value: 0.2 },
                    { name: "GitHub Actions (CI/CD)", value: 0.5 },
                    { name: "Figma", value: 0.4 },
                ]
            }
        ]
    },
    {
        title: "Databases",
        type: "single",
        items: [
            { name: "PostgreSQL", value: 0.6 },
            { name: "Oracle", value: 0.4 },
            { name: "MongoDB", value: 0.3 },
            { name: "MySQL", value: 0.4 },
        ],
    },
];
