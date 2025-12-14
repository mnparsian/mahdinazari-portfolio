"use client";

import * as React from "react";
import { useLanguage } from "@/lib/i18n/context";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail, Send, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function Contact() {
    const { t } = useLanguage();
    const sectionRef = React.useRef<HTMLElement>(null);
    const containerRef = React.useRef<HTMLDivElement>(null);
    const formRef = React.useRef<HTMLFormElement>(null);
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const [focusedField, setFocusedField] = React.useState<string | null>(null);

    React.useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%",
                    toggleActions: "play none none reverse",
                },
            });

            tl.from(containerRef.current, {
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
            });

            // Stagger inputs removed to prevent GSAP hydration issues (replaced with CSS)
            // if (formRef.current) {
            //    ...
            // }
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        setIsSubmitting(true);

        const formData = new FormData(form);
        const data = {
            name: formData.get("name"),
            email: formData.get("email"),
            message: formData.get("message"),
        };

        try {
            console.log("API_URL =", process.env.NEXT_PUBLIC_API_URL);
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/contact`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                alert(t.contact.success);
                form.reset();
            } else {
                alert("Something went wrong. Please try again.");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("Failed to connect to the server.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Section ref={sectionRef} id="contact" className="relative py-24 lg:py-32 overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute inset-0 bg-surface/30 -z-20" />
            <div className="absolute -left-[10%] bottom-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

            <div ref={containerRef} className="max-w-6xl mx-auto px-4">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">

                    {/* Left Column: Info */}
                    <div className="lg:col-span-5 space-y-10">
                        <div className="space-y-4">
                            <h2 className="text-4xl md:text-5xl font-bold font-heading tracking-tight text-foreground">
                                {t.contact.title}
                            </h2>
                            <p className="text-xl text-muted-foreground leading-relaxed">
                                {t.contact.intro}
                            </p>
                        </div>

                        <div className="space-y-6">
                            <a
                                href="mailto:mnparsians@gmail.com"
                                className="group relative flex items-center gap-6 p-6 rounded-2xl bg-surface/50 border border-white/5 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-primary/20 hover:shadow-lg"
                            >
                                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                <div className="relative p-4 rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-300">
                                    <Mail className="h-6 w-6" />
                                </div>
                                <div className="relative">
                                    <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest">{t.contact.email}</p>
                                    <p className="text-lg font-semibold text-foreground mt-1 group-hover:text-primary transition-colors">mnparsians@gmail.com</p>
                                </div>
                                <ArrowUpRight className="ml-auto h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                            </a>

                            <div className="grid grid-cols-2 gap-4">
                                <Button variant="outline" size="lg" className="h-16 text-lg border-white/10 hover:border-primary/20 hover:bg-surface/80" asChild>
                                    <Link href="https://github.com/mnparsian" target="_blank">
                                        <Github className="mr-2 h-5 w-5" />
                                        GitHub
                                    </Link>
                                </Button>
                                <Button variant="outline" size="lg" className="h-16 text-lg border-white/10 hover:border-primary/20 hover:bg-surface/80" asChild>
                                    <Link href="https://www.linkedin.com/in/mahdi-nazari7/" target="_blank">
                                        <Linkedin className="mr-2 h-5 w-5" />
                                        LinkedIn
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Form */}
                    <div className="lg:col-span-7">
                        <div className="relative p-1 rounded-3xl bg-gradient-to-br from-white/10 to-transparent shadow-2xl">
                            <Card className="border-0 bg-background/80 backdrop-blur-xl rounded-[22px] overflow-hidden shadow-none">
                                <CardContent className="p-8 md:p-10">
                                    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                                        <div className="space-y-2 group animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both" style={{ animationDelay: '100ms' }}>
                                            <label htmlFor="name" className={`text-sm font-medium transition-colors ${focusedField === 'name' ? 'text-primary' : 'text-muted-foreground'}`}>
                                                {t.contact.name}
                                            </label>
                                            <input
                                                id="name"
                                                name="name"
                                                required
                                                onFocus={() => setFocusedField('name')}
                                                onBlur={() => setFocusedField(null)}
                                                className="flex h-12 w-full rounded-xl border border-input/50 bg-surface/50 px-4 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:border-primary transition-all duration-300"
                                                placeholder="John Doe"
                                            />
                                        </div>
                                        <div className="space-y-2 group animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both" style={{ animationDelay: '200ms' }}>
                                            <label htmlFor="email" className={`text-sm font-medium transition-colors ${focusedField === 'email' ? 'text-primary' : 'text-muted-foreground'}`}>
                                                {t.contact.email}
                                            </label>
                                            <input
                                                id="email"
                                                name="email"
                                                type="email"
                                                required
                                                onFocus={() => setFocusedField('email')}
                                                onBlur={() => setFocusedField(null)}
                                                className="flex h-12 w-full rounded-xl border border-input/50 bg-surface/50 px-4 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:border-primary transition-all duration-300"
                                                placeholder="john@example.com"
                                            />
                                        </div>
                                        <div className="space-y-2 group animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both" style={{ animationDelay: '300ms' }}>
                                            <label htmlFor="message" className={`text-sm font-medium transition-colors ${focusedField === 'message' ? 'text-primary' : 'text-muted-foreground'}`}>
                                                {t.contact.message}
                                            </label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                required
                                                rows={5}
                                                onFocus={() => setFocusedField('message')}
                                                onBlur={() => setFocusedField(null)}
                                                className="flex w-full rounded-xl border border-input/50 bg-surface/50 px-4 py-3 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:border-primary disabled:cursor-not-allowed disabled:opacity-50 resize-none transition-all duration-300"
                                                placeholder="Tell me about your project..."
                                            />
                                        </div>

                                        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both" style={{ animationDelay: '400ms' }}>
                                            <Button
                                                type="submit"
                                                size="lg"
                                                className="w-full h-12 text-lg font-medium rounded-xl bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-200 shadow-lg shadow-zinc-500/20 transition-all duration-300 transform hover:-translate-y-0.5"
                                                disabled={isSubmitting}
                                            >
                                                {isSubmitting ? (
                                                    <span className="flex items-center gap-2">
                                                        <span className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                        Sending...
                                                    </span>
                                                ) : (
                                                    <>
                                                        {t.contact.send}
                                                        <Send className="ml-2 h-5 w-5" />
                                                    </>
                                                )}
                                            </Button>
                                        </div>
                                    </form>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}
