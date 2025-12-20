"use client";

import React from "react";
import { useParams, notFound } from "next/navigation";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/data/projects";
import { useLanguage } from "@/lib/i18n/context";
import { ArrowLeft, Github, ExternalLink, Layers, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import gsap from "gsap";

export default function ProjectDetailPage() {
    const params = useParams();
    const { t, language } = useLanguage();
    const headerRef = React.useRef<HTMLDivElement>(null);

    const project = projects.find(p => p.slug === params.slug);

    React.useEffect(() => {
        if (headerRef.current) {
            gsap.fromTo(headerRef.current,
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power3.out"
                }
            );
        }
    }, [project]);

    if (!project) {
        return notFound();
    }

    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />

            {/* Project Hero - Full Screen */}
            <div className="min-h-screen flex flex-col justify-center relative bg-surface/30 border-b">
                <Section className="py-20 md:py-32">
                    <div ref={headerRef} className="max-w-4xl mx-auto space-y-8 text-center md:text-left">
                        <Button variant="ghost" size="sm" asChild className="mb-8 text-foreground/70 hover:text-primary">
                            <Link href="/projects">
                                <ArrowLeft className="mr-2 h-4 w-4" />
                                {t.projects.viewAll}
                            </Link>
                        </Button>

                        <h1 className="text-4xl md:text-7xl font-bold font-heading leading-tight text-foreground">
                            {project.title}
                        </h1>
                        <p className="text-xl md:text-3xl text-foreground/80 leading-relaxed max-w-2xl">
                            {project.description[language]}
                        </p>

                        <div className="flex flex-wrap gap-4 pt-6 justify-center md:justify-start">
                            {project.liveUrl && (
                                <Button size="lg" className="h-12 px-8 text-lg" asChild>
                                    <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                        {t.projects.liveDemo}
                                        <ExternalLink className="ml-2 h-5 w-5" />
                                    </Link>
                                </Button>
                            )}
                            {project.githubUrl && (
                                <Button size="lg" variant="outline" className="h-12 px-8 text-lg" asChild>
                                    <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                        {t.projects.viewGithub}
                                        <Github className="ml-2 h-5 w-5" />
                                    </Link>
                                </Button>
                            )}
                        </div>
                    </div>
                </Section>

                {/* Scroll Indicator */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground">
                    <div className="flex flex-col items-center gap-2">
                        <span className="text-sm font-medium uppercase tracking-widest opacity-50">Scroll</span>
                        <ArrowLeft className="h-6 w-6 -rotate-90" />
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <Section className="py-20 md:py-32">
                <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">

                    {/* Left Column: Details */}
                    <div className="md:col-span-2 space-y-16">
                        {/* Image Placeholder */}
                        {/* Media Section */}
                        <div className="aspect-video bg-muted rounded-xl border overflow-hidden relative shadow-lg">
                            {project.videoUrl ? (
                                <iframe
                                    src={project.videoUrl}
                                    title={project.title}
                                    className="w-full h-full"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            ) : project.image ? (
                                // eslint-disable-next-line @next/next/no-img-element
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                                    Project Screenshot / Demo Video
                                </div>
                            )}
                        </div>

                        {/* Problem & Solution */}
                        {(project.problem || project.solution) && (
                            <div className="space-y-12">
                                {project.problem && (
                                    <div className="space-y-4">
                                        <h2 className="text-2xl font-bold font-heading">The Challenge</h2>
                                        <p className="text-lg text-muted-foreground leading-relaxed">
                                            {project.problem[language]}
                                        </p>
                                    </div>
                                )}
                                {project.solution && (
                                    <div className="space-y-4">
                                        <h2 className="text-2xl font-bold font-heading">The Solution</h2>
                                        <p className="text-lg text-muted-foreground leading-relaxed">
                                            {project.solution[language]}
                                        </p>
                                    </div>
                                )}
                            </div>
                        )}

                        {/* Key Features */}
                        {project.features && (
                            <div className="space-y-6">
                                <h2 className="text-2xl font-bold font-heading">Key Features</h2>
                                <ul className="grid sm:grid-cols-2 gap-4">
                                    {project.features[language].map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-3 p-4 rounded-lg bg-surface/50 border">
                                            <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                            <span className="text-sm md:text-base">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>

                    {/* Right Column: Sidebar */}
                    <div className="space-y-8">
                        <div className="p-6 rounded-xl border bg-surface/30 space-y-6">
                            <div className="flex items-center gap-2 text-lg font-bold font-heading">
                                <Layers className="h-5 w-5" />
                                Tech Stack
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {project.techStack.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-3 py-1.5 rounded-md bg-background border text-sm font-medium"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </Section>

            <Footer />
        </main>
    );
}
