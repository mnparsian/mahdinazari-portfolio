"use client";

import * as React from "react";
import { useLanguage } from "@/lib/i18n/context";
import { Section } from "@/components/ui/section";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { services } from "@/lib/data/services";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export function Services() {
    const { t, language } = useLanguage();
    const sectionRef = React.useRef<HTMLElement>(null);
    const headerRef = React.useRef<HTMLDivElement>(null);
    const gridRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                },
            });

            if (headerRef.current) {
                tl.fromTo(headerRef.current,
                    { y: 30, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
                );
            }

            if (gridRef.current && gridRef.current.children.length > 0) {
                tl.fromTo(
                    gridRef.current.children,
                    { y: 40, opacity: 0, scale: 0.95 },
                    {
                        y: 0,
                        opacity: 1,
                        scale: 1,
                        duration: 0.6,
                        stagger: 0.1,
                        ease: "power2.out",
                    },
                    "-=0.5"
                );
            }
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <Section ref={sectionRef} id="services" className="relative overflow-hidden py-24 lg:py-32">
            {/* Ambient Background Gradient */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-7xl -z-10 opacity-30 pointer-events-none">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] mix-blend-screen animate-pulse-soft" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] mix-blend-screen animate-float" />
            </div>

            <div ref={headerRef} className="text-center mb-20 max-w-2xl mx-auto space-y-4 opacity-0">
                <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-accent uppercase bg-accent/10 rounded-full border border-accent/20">
                    My Expertise
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading tracking-tight leading-tight">
                    {t.services.title}
                </h2>
                <p className="text-lg text-muted-foreground/80 leading-relaxed">
                    Crafting digital experiences with precision, performance, and passion.
                </p>
            </div>

            <div
                ref={gridRef}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 px-4 md:px-0"
            >
                {services.map((service, index) => (
                    <Card
                        key={service.id}
                        className="group relative h-full flex flex-col justify-between overflow-hidden border-white/5 bg-surface/40 hover:bg-surface/60 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/5 hover:border-primary/20"
                    >
                        {/* Gradient Border Overlay on Hover */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                        <CardHeader className="relative z-10 pb-2">
                            <div className="mb-4 w-12 h-12 rounded-xl bg-background/50 border border-white/10 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 shadow-sm">
                                {/* We can wire up real icons here if available in the service object, otherwise default generic */}
                                <span className="text-lg font-bold">{index + 1}</span>
                            </div>
                            <CardTitle className="text-2xl font-bold tracking-tight group-hover:text-primary transition-colors duration-300">
                                {service.title[language]}
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="relative z-10 pt-4 flex-grow">
                            <CardDescription className="text-base leading-relaxed text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                                {service.description[language]}
                            </CardDescription>

                            <div className="mt-6 flex items-center text-sm font-medium text-primary opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                                Learn more <ArrowUpRight className="ml-1 h-3 w-3" />
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </Section>
    );
}
