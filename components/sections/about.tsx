"use client";

import * as React from "react";
import { useLanguage } from "@/lib/i18n/context";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { Download } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function About() {
    const { t } = useLanguage();
    const sectionRef = React.useRef<HTMLElement>(null);
    const contentRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(contentRef.current, {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                },
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <Section ref={sectionRef} id="about" className="bg-surface/50">
            <div ref={contentRef} className="max-w-3xl mx-auto text-center space-y-8">
                <h2 className="text-3xl md:text-4xl font-bold font-heading">
                    {t.about.title}
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                    {t.about.bio}
                </p>
                <div className="flex justify-center">
                    <Button variant="outline" size="lg" className="gap-2" asChild>
                        <a href="/resume.pdf" download="Mahdi_Nazari_CV.pdf">
                            <Download className="h-4 w-4" />
                            {t.about.downloadCv}
                        </a>
                    </Button>
                </div>
            </div>
        </Section>
    );
}
