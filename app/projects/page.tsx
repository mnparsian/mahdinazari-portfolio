"use client";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Section } from "@/components/ui/section";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/data/projects";
import { VideoPlayer } from "@/components/ui/video-player";
import { useLanguage } from "@/lib/i18n/context";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ProjectsPage() {
    const { t, language } = useLanguage();

    return (
        <main className="min-h-screen bg-background">
            <Navbar />
            <div className="pt-24 pb-12">
                <Section>
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">
                            {t.projects.title}
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            {language === 'en'
                                ? "A collection of my work, ranging from web applications to AI experiments."
                                : "Una raccolta dei miei lavori, dalle applicazioni web agli esperimenti di IA."}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project) => (
                            <Card key={project.slug} className="flex flex-col overflow-hidden hover:shadow-lg transition-shadow border-border/50">
                                <div className="aspect-video bg-muted relative group overflow-hidden">
                                    {project.videoUrl ? (
                                        <div className="w-full h-full pointer-events-none" tabIndex={-1}>
                                            <VideoPlayer
                                                src={project.videoUrl}
                                                title={project.title}
                                                className="w-full h-full"
                                            />
                                        </div>
                                    ) : project.image ? (
                                        // eslint-disable-next-line @next/next/no-img-element
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                    ) : (
                                        <div className="absolute inset-0 flex items-center justify-center text-muted-foreground font-medium">
                                            {project.title} Preview
                                        </div>
                                    )}
                                    <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                                </div>
                                <CardHeader>
                                    <CardTitle className="line-clamp-1">{project.title}</CardTitle>
                                    <div className="flex flex-wrap gap-2 mt-2">
                                        {project.techStack.slice(0, 3).map(tech => (
                                            <span key={tech} className="text-xs px-2 py-1 bg-secondary text-secondary-foreground rounded-full font-medium">
                                                {tech}
                                            </span>
                                        ))}
                                        {project.techStack.length > 3 && (
                                            <span className="text-xs px-2 py-1 bg-secondary text-secondary-foreground rounded-full font-medium">
                                                +{project.techStack.length - 3}
                                            </span>
                                        )}
                                    </div>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                    <CardDescription className="line-clamp-3 text-sm">
                                        {project.shortDescription[language]}
                                    </CardDescription>
                                </CardContent>
                                <CardFooter>
                                    <Button asChild className="w-full group">
                                        <Link href={`/projects/${project.slug}`}>
                                            {t.projects.viewCaseStudy}
                                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                        </Link>
                                    </Button>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </Section>
            </div>
            <Footer />
        </main>
    );
}
