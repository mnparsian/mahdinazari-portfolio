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
    image?: string; // Placeholder path
    videoUrl?: string; // YouTube Embed URL
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
        slug: "creator-ai",
        title: "CreatorAi",
        shortDescription: {
            en: "All-in-one AI platform to supercharge content creation for digital marketers.",
            it: "Piattaforma IA all-in-one per potenziare la creazione di contenuti per il digital marketing.",
        },
        description: {
            en: `CreatorAI is a full-stack web application developed to demonstrate practical experience in building AI-powered platforms.
The project focuses on designing a centralized dashboard that integrates AI text generation, image synthesis, and multilingual support into a single workflow.

The main goal of the project is to address common challenges in content production such as tool fragmentation, inconsistency, and time inefficiency.
From an engineering perspective, the application emphasizes clean architecture, scalability, and maintainability.`,
            it: `CreatorAI è un’applicazione web full-stack sviluppata come progetto dimostrativo per mostrare competenze reali nella creazione di piattaforme basate su intelligenza artificiale.
Il progetto si concentra sulla progettazione di una dashboard centralizzata che integra generazione di testi AI, sintesi di immagini e supporto multilingua in un unico flusso di lavoro.

L’obiettivo principale è affrontare problemi comuni nella produzione di contenuti, come la frammentazione degli strumenti, la mancanza di coerenza e l’inefficienza temporale.
Dal punto di vista tecnico, l’applicazione è progettata con attenzione a architettura pulita, scalabilità e manutenibilità.`,
        },
        techStack: ["Next.js", "TypeScript", "OpenAI API", "Tailwind CSS", "PostgresSQL", "Spring Boot"],
        featured: true,

        // تغییر مهم اینجاست:
        // image: "/images/projects/creator-ai.jpg", // اگر خواستی عکس کاور داشته باشی این خط را نگه دار
        videoUrl: "https://youtu.be/l2kFyr_fMbs", // Valid YouTube video for demo

        liveUrl: "https://creatorai.mahdinazari.net",
        githubUrl: "https://github.com/mnparsian/creator-ai-frontend",
        problem: {
            en: `Content creators often rely on multiple disconnected tools for writing, visuals, and localization.
This fragmentation leads to inconsistent output, repetitive workflows, and wasted time, making it difficult to maintain quality and focus on the creative process.`,
            it: `I content creator utilizzano spesso strumenti separati per testi, immagini e localizzazione.
Questa frammentazione provoca incoerenza nei contenuti, flussi di lavoro ridondanti e perdita di tempo, riducendo l’efficienza del processo creativo.`,
        },
        solution: {
            en: `A centralized AI-powered dashboard that brings text generation, image synthesis, and multilingual support into a single workflow.
The solution simplifies content production, improves consistency, and demonstrates a structured approach to designing scalable, maintainable AI-driven applications.`,
            it: `I content creator utilizzano spesso strumenti separati per testi, immagini e localizzazione.
Questa frammentazione provoca incoerenza nei contenuti, flussi di lavoro ridondanti e perdita di tempo, riducendo l’efficienza del processo creativo.`,
        },
        features: {
            en: ["AI Text Generation", "Multi-language Support"],
            it: ["Generazione Testo IA", "Supporto Multilingua"],
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
