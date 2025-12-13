export interface Service {
    id: string;
    title: {
        en: string;
        it: string;
    };
    description: {
        en: string;
        it: string;
    };
}

export const services: Service[] = [
    {
        id: "fullstack",
        title: {
            en: "Full-Stack Engineering",
            it: "Ingegneria Full-Stack",
        },
        description: {
            en: "End-to-end web application development using modern frameworks and best practices.",
            it: "Sviluppo di applicazioni web end-to-end utilizzando framework moderni e best practice.",
        },
    },
    {
        id: "webdev",
        title: {
            en: "Web Development",
            it: "Sviluppo Web",
        },
        description: {
            en: "Creating responsive, high-performance websites that look great on any device.",
            it: "Creazione di siti web reattivi e ad alte prestazioni che appaiono fantastici su qualsiasi dispositivo.",
        },
    },
    {
        id: "backend",
        title: {
            en: "API & Backend Development",
            it: "Sviluppo API & Backend",
        },
        description: {
            en: "Building robust, scalable APIs and server-side logic to power your applications.",
            it: "Costruzione di API robuste e scalabili e logica lato server per alimentare le tue applicazioni.",
        },
    },
    {
        id: "ai",
        title: {
            en: "AI Integration",
            it: "Integrazione IA",
        },
        description: {
            en: "Integrating artificial intelligence and machine learning models into your business workflows.",
            it: "Integrazione di intelligenza artificiale e modelli di machine learning nei flussi di lavoro aziendali.",
        },
    },
    {
        id: "automation",
        title: {
            en: "Automation & Bot Development",
            it: "Automazione & Sviluppo Bot",
        },
        description: {
            en: "Automating repetitive tasks and building custom bots to increase efficiency.",
            it: "Automazione di compiti ripetitivi e costruzione di bot personalizzati per aumentare l'efficienza.",
        },
    },
];
