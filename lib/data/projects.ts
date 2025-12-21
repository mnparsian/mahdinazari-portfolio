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
            en: "A comprehensive SaaS platform that leverages advanced AI models to generate high-quality text, images, and creative assets instantly.",
            it: "Una piattaforma SaaS completa che sfrutta modelli IA avanzati per generare istantaneamente testo, immagini e asset creativi di alta qualità.",
        },
        techStack: ["Next.js", "TypeScript", "OpenAI API", "Tailwind CSS", "Supabase"],
        featured: true,

        // تغییر مهم اینجاست:
        // image: "/images/projects/creator-ai.jpg", // اگر خواستی عکس کاور داشته باشی این خط را نگه دار
        videoUrl: "https://youtu.be/l2kFyr_fMbs", // Valid YouTube video for demo

        liveUrl: "https://creatorai.mahdinazari.net",
        githubUrl: "#",
        problem: {
            en: "Content creators struggle to maintain consistency...",
            it: "I content creator faticano a mantenere coerenza...",
        },
        solution: {
            en: "We developed a centralized dashboard...",
            it: "Abbiamo sviluppato una dashboard centralizzata...",
        },
        features: {
            en: ["AI Text Generation", "Image Synthesis", "Multi-language Support"],
            it: ["Generazione Testo IA", "Sintesi Immagini", "Supporto Multilingua"],
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
