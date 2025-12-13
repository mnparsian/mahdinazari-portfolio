"use client";

import * as React from "react";
import { useLanguage } from "@/lib/i18n/context";
import { Section } from "@/components/ui/section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { skillCategories } from "@/lib/data/skills";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function Skills() {
    const { t } = useLanguage();
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

            tl.from(headerRef.current, {
                y: 30,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out",
            }).from(
                gridRef.current?.children || [],
                {
                    y: 40,
                    opacity: 0,
                    duration: 0.8,
                    stagger: 0.1,
                    ease: "power3.out",
                },
                "-=0.4"
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    // Helper to get translated category title
    const getCategoryTitle = (key: string) => {
        const parts = key.split(".");
        // @ts-expect-error - Simple nested access for demo
        return t[parts[0]][parts[1]][parts[2]];
    };

    return (
        <Section ref={sectionRef} id="skills">
            <div ref={headerRef} className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
                    {t.skills.title}
                </h2>
            </div>

            <div
                ref={gridRef}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
                {skillCategories.map((category) => {
                    const Icon = category.icon;
                    return (
                        <Card
                            key={category.id}
                            className="hover:border-primary/50 transition-colors duration-300"
                        >
                            <CardHeader className="flex flex-row items-center gap-4 pb-2">
                                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                                    <Icon className="h-6 w-6" />
                                </div>
                                <CardTitle className="text-xl">
                                    {getCategoryTitle(category.titleKey)}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map((skill) => {
                                        const SkillIcon = skill.icon;
                                        return (
                                            <div
                                                key={skill.name}
                                                className="flex items-center gap-2 px-3 py-1.5 rounded-md border bg-card/50 text-sm font-medium transition-all hover:bg-card hover:scale-105"
                                                style={{ borderColor: `${skill.color}30` }}
                                            >
                                                <SkillIcon
                                                    className="h-4 w-4"
                                                    style={{ color: skill.color }}
                                                />
                                                <span>{skill.name}</span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </CardContent>
                        </Card>
                    );
                })}
            </div>
        </Section>
    );
}
