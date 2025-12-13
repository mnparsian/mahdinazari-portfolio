"use client";

import * as React from "react";
import { useLanguage } from "@/lib/i18n/context";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { ArrowRight, Sparkles } from "lucide-react";
import gsap from "gsap";
import Link from "next/link";
import Image from "next/image";

export function Hero() {
    const { t } = useLanguage();
    const heroRef = React.useRef<HTMLDivElement>(null);
    const titleRef = React.useRef<HTMLHeadingElement>(null);
    const subtitleRef = React.useRef<HTMLParagraphElement>(null);
    const ctaRef = React.useRef<HTMLDivElement>(null);
    const avatarRef = React.useRef<HTMLDivElement>(null);
    const shimmerRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

            // Ambient background motion (very slow, continuous)
            gsap.to(".bg-layer", {
                rotation: 360,
                duration: 120,
                repeat: -1,
                ease: "none",
                transformOrigin: "50% 50%"
            });

            // Cinematic Entrance
            tl.from(avatarRef.current, {
                opacity: 0,
                scale: 0.95,
                y: 30,
                duration: 1.5,
                ease: "power2.out"
            })
                .from([titleRef.current, subtitleRef.current, ctaRef.current], {
                    y: 40,
                    opacity: 0,
                    duration: 1.2,
                    stagger: 0.15,
                    ease: "power3.out"
                }, "-=1.0");

            // Subtle Parallax on Mouse Move
            const handleMouseMove = (e: MouseEvent) => {
                const { clientX, clientY } = e;
                const x = (clientX / window.innerWidth - 0.5) * 15;
                const y = (clientY / window.innerHeight - 0.5) * 15;

                gsap.to(avatarRef.current, {
                    x: x * 0.5,
                    y: y * 0.5,
                    duration: 2,
                    ease: "power2.out"
                });

                gsap.to(".parallax-bg", {
                    x: -x,
                    y: -y,
                    duration: 3,
                    ease: "power2.out"
                });
            };
            window.addEventListener("mousemove", handleMouseMove);

            return () => window.removeEventListener("mousemove", handleMouseMove);
        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <Section
            ref={heroRef}
            id="home"
            className="min-h-screen flex items-center justify-center pt-20 md:pt-0 overflow-hidden relative bg-background/5" // Very slight tint
        >
            {/* Cinematic Background System - Apple Style */}
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none select-none">
                {/* Main soft gradients */}
                <div className="parallax-bg absolute top-[-20%] left-[-10%] w-[80vw] h-[80vw] bg-primary/10 rounded-full blur-[180px] opacity-60 mix-blend-screen bg-layer animate-pulse-soft" />
                <div className="parallax-bg absolute bottom-[-20%] right-[-10%] w-[70vw] h-[70vw] bg-accent/10 rounded-full blur-[150px] opacity-50 mix-blend-screen bg-layer animation-delay-2000" />

                {/* Subtle detail layer */}
                <div className="absolute top-[30%] right-[20%] w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[120px] mix-blend-overlay opacity-40 animate-float" />

                {/* Noise overlay for texture */}
                <div className="absolute inset-0 bg-noise opacity-[0.03]" />
            </div>

            <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center w-full max-w-7xl mx-auto relative z-10 px-4 md:px-8">

                {/* Text Content */}
                <div className="flex flex-col gap-8 order-2 md:order-1 text-center md:text-left">
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface/50 border border-white/10 backdrop-blur-md self-center md:self-start w-fit shadow-sm">
                            <Sparkles className="h-3.5 w-3.5 text-accent animate-pulse" />
                            <span className="text-xs font-semibold tracking-wide uppercase text-muted-foreground/90">Available for new projects</span>
                        </div>

                        <h1
                            ref={titleRef}
                            className="text-5xl md:text-7xl lg:text-8xl font-bold font-heading leading-[1.05] tracking-tight text-foreground"
                        >
                            <span className="block mb-2">Creative</span>
                            <span className="bg-gradient-to-r from-foreground via-foreground/80 to-muted-foreground bg-clip-text text-transparent">
                                Developer.
                            </span>
                        </h1>
                    </div>

                    <p
                        ref={subtitleRef}
                        className="text-xl md:text-2xl text-muted-foreground/90 max-w-xl leading-relaxed font-light mx-auto md:mx-0 tracking-wide"
                    >
                        {t.hero.subtitle}
                    </p>

                    <div ref={ctaRef} className="flex flex-col sm:flex-row gap-5 pt-4 justify-center md:justify-start">
                        <Button
                            size="lg"
                            className="h-14 px-8 text-lg rounded-full bg-foreground text-background hover:bg-foreground/90 shadow-xl shadow-black/5 hover:scale-105 transition-all duration-300"
                            asChild
                        >
                            <Link href="#projects">
                                {t.hero.ctaProjects}
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="h-14 px-8 text-lg rounded-full border-muted/20 hover:bg-surface/50 hover:border-muted/40 backdrop-blur-sm transition-all duration-300"
                            asChild
                        >
                            <Link href="#contact">{t.hero.ctaContact}</Link>
                        </Button>
                    </div>
                </div>

                {/* Avatar Section */}
                <div
                    ref={avatarRef}
                    className="order-1 md:order-2 flex justify-center md:justify-end relative perspective-1000"
                >
                    <div className="relative w-72 h-72 md:w-[450px] md:h-[450px]">
                        {/* Soft Glow Behind */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-full blur-[80px] animate-pulse-soft scale-110" />

                        {/* Glass Container */}
                        <div className="relative w-full h-full rounded-full p-2 bg-gradient-to-b from-white/10 to-transparent backdrop-blur-3xl border border-white/10 shadow-2xl flex items-center justify-center overflow-hidden">
                            <div className="absolute inset-0 rounded-full bg-surface/10" />

                            {/* Inner Circle (Image Mask) */}
                            <div className="relative w-[96%] h-[96%] rounded-full overflow-hidden border border-white/5 bg-background shadow-inner">
                                <Image
                                    src="/images/avatar.jpg"
                                    alt="Mahdi Nazari Avatar"
                                    fill
                                    className="object-cover scale-105 hover:scale-110 transition-transform duration-[1.5s] ease-out"
                                    priority
                                    quality={100}
                                />
                                {/* Shimmer Effect overlay */}
                                <div ref={shimmerRef} className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent skew-x-12 translate-x-[-150%] animate-[shimmer_3s_infinite]" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}
