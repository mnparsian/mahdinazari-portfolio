import { Code, Server, Database, Cloud, Cpu, Wrench } from "lucide-react";
import React from "react";
import {
    SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiGreensock, SiThreedotjs,
    SiNodedotjs, SiExpress, SiPython, SiSpringboot, SiGraphql,
    SiPostgresql, SiMongodb, SiRedis, SiSupabase, SiPrisma,
    SiDocker, SiKubernetes, SiGithubactions, SiVercel,
    SiTensorflow, SiPytorch, SiOpenai, SiHuggingface,
    SiGit, SiFigma, SiJira, SiPostman
} from "react-icons/si";
import { FaJava, FaAws } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { TbLink } from "react-icons/tb";

export interface SkillItem {
    name: string;
    icon: React.ElementType;
    color: string;
}

export interface SkillCategory {
    id: string;
    titleKey: string;
    icon: React.ElementType;
    skills: SkillItem[];
}

export const skillCategories: SkillCategory[] = [
    {
        id: "frontend",
        titleKey: "skills.categories.frontend",
        icon: Code,
        skills: [
            { name: "React", icon: SiReact, color: "#61DAFB" },
            { name: "Next.js", icon: SiNextdotjs, color: "#000000" }, // Black/White
            { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
            { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
            { name: "GSAP", icon: SiGreensock, color: "#88CE02" },
            { name: "Three.js", icon: SiThreedotjs, color: "#000000" },
        ],
    },
    {
        id: "backend",
        titleKey: "skills.categories.backend",
        icon: Server,
        skills: [
            { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
            { name: "Express", icon: SiExpress, color: "#000000" },
            { name: "Python", icon: SiPython, color: "#3776AB" },
            { name: "Java", icon: FaJava, color: "#007396" },
            { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },
            { name: "GraphQL", icon: SiGraphql, color: "#E10098" },
        ],
    },
    {
        id: "database",
        titleKey: "skills.categories.database",
        icon: Database,
        skills: [
            { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
            { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
            { name: "Redis", icon: SiRedis, color: "#DC382D" },
            { name: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
            { name: "Prisma", icon: SiPrisma, color: "#2D3748" },
        ],
    },
    {
        id: "devops",
        titleKey: "skills.categories.devops",
        icon: Cloud,
        skills: [
            { name: "AWS", icon: FaAws, color: "#FF9900" },
            { name: "Docker", icon: SiDocker, color: "#2496ED" },
            { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
            { name: "CI/CD", icon: SiGithubactions, color: "#2088FF" },
            { name: "Vercel", icon: SiVercel, color: "#000000" },
        ],
    },
    {
        id: "ai",
        titleKey: "skills.categories.ai",
        icon: Cpu,
        skills: [
            { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00" },
            { name: "PyTorch", icon: SiPytorch, color: "#EE4C2C" },
            { name: "OpenAI API", icon: SiOpenai, color: "#412991" },
            { name: "LangChain", icon: TbLink, color: "#1C3C3C" },
            { name: "Hugging Face", icon: SiHuggingface, color: "#FFD21E" },
        ],
    },
    {
        id: "tools",
        titleKey: "skills.categories.tools",
        icon: Wrench,
        skills: [
            { name: "Git", icon: SiGit, color: "#F05032" },
            { name: "Figma", icon: SiFigma, color: "#F24E1E" },
            { name: "Jira", icon: SiJira, color: "#0052CC" },
            { name: "Postman", icon: SiPostman, color: "#FF6C37" },
            { name: "VS Code", icon: VscVscode, color: "#007ACC" },
        ],
    },
];
