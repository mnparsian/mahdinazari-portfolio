"use client";

import * as React from "react";
import { useLanguage } from "@/lib/i18n/context";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/data/projects";
import { VideoPlayer } from "@/components/ui/video-player";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function FeaturedProjects() {
    const { t, language } = useLanguage();
    const sectionRef = React.useRef<HTMLElement>(null);
    const headerRef = React.useRef<HTMLDivElement>(null);
    const projectsRef = React.useRef<HTMLDivElement>(null);

    const featuredProjects = projects.filter((p) => p.featured).slice(0, 2);

    React.useEffect(() => {
        const ctx = gsap.context(() => {
            // Header Animation
            gsap.from(headerRef.current, {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                },
                y: 30,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out",
            });

            // Projects Animation
            const projectCards = projectsRef.current?.children;
            if (projectCards) {
                Array.from(projectCards).forEach((card, index) => {
                    gsap.from(card, {
                        scrollTrigger: {
                            trigger: card,
                            start: "top 85%",
                            toggleActions: "play none none reverse",
                        },
                        y: 50,
                        opacity: 0,
                        duration: 1,
                        delay: index * 0.2,
                        ease: "power3.out",
                    });
                });
            }
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <Section ref={sectionRef} id="projects" className="bg-surface/50">
            <div
                ref={headerRef}
                className="flex flex-col md:flex-row items-center justify-between mb-16 gap-6"
            >
                <h2 className="text-3xl md:text-4xl font-bold font-heading">
                    {t.projects.title}
                </h2>
                <Button variant="ghost" asChild className="group">
                    <Link href="/projects">
                        {t.projects.viewAll}
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                </Button>
            </div>

            <div ref={projectsRef} className="space-y-24">
                {featuredProjects.map((project, index) => (
                    <div
                        key={project.slug}
                        className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                            } gap-12 items-center`}
                    >
                        {/* Project Image Placeholder */}
                        <div className="w-full lg:w-3/5 aspect-video bg-muted rounded-xl overflow-hidden relative group shadow-lg">
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />
                            {project.videoUrl ? (
                                <VideoPlayer
                                    src={project.videoUrl}
                                    title={project.title}
                                    className="w-full h-full"
                                />
                            ) : project.image ? (
                                // eslint-disable-next-line @next/next/no-img-element
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center bg-card border border-border">
                                    <span className="text-muted-foreground font-medium">
                                        {project.title} Preview
                                    </span>
                                </div>
                            )}
                        </div>

                        {/* Project Info */}
                        <div className="w-full lg:w-2/5 space-y-6">
                            <h3 className="text-2xl md:text-3xl font-bold font-heading">
                                {project.title}
                            </h3>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                {project.description[language]}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {project.techStack.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-3 py-1 rounded-full bg-background border text-sm font-medium"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="pt-4">
                                <Button asChild>
                                    <Link href={`/projects/${project.slug}`}>
                                        {t.projects.viewCaseStudy}
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
}
