export interface Project {
    slug: string;
    title: string;
    description: {
        en: string;
        it: string;
    };
    shortDescription: {
        en: string;
        it: string;
    };
    techStack: string[];
    featured: boolean;
    image: string; // Placeholder path
    gallery?: string[];
    liveUrl?: string;
    githubUrl?: string;
    problem?: {
        en: string;
        it: string;
    };
    solution?: {
        en: string;
        it: string;
    };
    features?: {
        en: string[];
        it: string[];
    };
}

export const projects: Project[] = [
    {
        slug: "ai-analytics-dashboard",
        title: "AI Analytics Dashboard",
        shortDescription: {
            en: "Real-time AI-powered analytics platform for enterprise data.",
            it: "Piattaforma di analisi in tempo reale basata su IA per dati aziendali.",
        },
        description: {
            en: "A comprehensive dashboard that leverages machine learning to provide predictive analytics and real-time insights for large-scale enterprise datasets.",
            it: "Una dashboard completa che sfrutta il machine learning per fornire analisi predittive e approfondimenti in tempo reale per set di dati aziendali su larga scala.",
        },
        techStack: ["Next.js", "Python", "TensorFlow", "PostgreSQL"],
        featured: true,
        image: "/images/projects/project-1.jpg",
        liveUrl: "https://example.com",
        githubUrl: "https://github.com",
        problem: {
            en: "Enterprises struggle to make sense of vast amounts of unstructured data in real-time.",
            it: "Le aziende faticano a dare un senso a grandi quantità di dati non strutturati in tempo reale.",
        },
        solution: {
            en: "We built a scalable architecture using Next.js for the frontend and Python microservices for AI processing, delivering insights in milliseconds.",
            it: "Abbiamo costruito un'architettura scalabile utilizzando Next.js per il frontend e microservizi Python per l'elaborazione IA, fornendo approfondimenti in millisecondi.",
        },
        features: {
            en: ["Real-time data visualization", "Predictive modeling", "Customizable reporting"],
            it: ["Visualizzazione dati in tempo reale", "Modellazione predittiva", "Reportistica personalizzabile"],
        },
    },
    {
        slug: "ecommerce-platform",
        title: "Modern E-commerce Platform",
        shortDescription: {
            en: "Headless e-commerce solution with high performance.",
            it: "Soluzione e-commerce headless ad alte prestazioni.",
        },
        description: {
            en: "A blazing fast, headless e-commerce platform built with Next.js and Shopify Storefront API, featuring a custom design system.",
            it: "Una piattaforma e-commerce headless velocissima costruita con Next.js e Shopify Storefront API, dotata di un design system personalizzato.",
        },
        techStack: ["Next.js", "Shopify", "Tailwind CSS", "Redis"],
        featured: true,
        image: "/images/projects/project-2.jpg",
        liveUrl: "https://example.com",
        githubUrl: "https://github.com",
    },
    {
        slug: "task-automation-bot",
        title: "Task Automation Bot",
        shortDescription: {
            en: "Discord bot for automating team workflows.",
            it: "Bot Discord per automatizzare i flussi di lavoro del team.",
        },
        description: {
            en: "A sophisticated Discord bot that automates daily standups, task assignments, and integrates with Jira and Trello.",
            it: "Un sofisticato bot Discord che automatizza standup giornalieri, assegnazioni di compiti e si integra con Jira e Trello.",
        },
        techStack: ["Node.js", "Discord.js", "MongoDB"],
        featured: false,
        image: "/images/projects/project-3.jpg",
        liveUrl: "https://example.com",
        githubUrl: "https://github.com",
    },
    {
        slug: "finance-tracker",
        title: "Personal Finance Tracker",
        shortDescription: {
            en: "Mobile-first PWA for tracking expenses.",
            it: "PWA mobile-first per tracciare le spese.",
        },
        description: {
            en: "A privacy-focused personal finance tracker that works offline and syncs across devices using PouchDB and CouchDB.",
            it: "Un tracker di finanza personale incentrato sulla privacy che funziona offline e si sincronizza tra dispositivi utilizzando PouchDB e CouchDB.",
        },
        techStack: ["React", "PWA", "CouchDB"],
        featured: false,
        image: "/images/projects/project-4.jpg",
        liveUrl: "https://example.com",
        githubUrl: "https://github.com",
    },
    {
        slug: "portfolio-v1",
        title: "Legacy Portfolio",
        shortDescription: {
            en: "Previous iteration of my personal website.",
            it: "Iterazione precedente del mio sito personale.",
        },
        description: {
            en: "My first portfolio website built with plain HTML/CSS and JavaScript, showcasing my early growth as a developer.",
            it: "Il mio primo sito portfolio costruito con HTML/CSS e JavaScript puro, che mostra la mia crescita iniziale come sviluppatore.",
        },
        techStack: ["HTML", "SCSS", "JavaScript"],
        featured: false,
        image: "/images/projects/project-5.jpg",
        liveUrl: "https://example.com",
        githubUrl: "https://github.com",
    },
];
