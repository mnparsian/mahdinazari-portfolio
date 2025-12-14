"use client";

import * as React from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useLanguage } from "@/lib/i18n/context";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Menu, X } from "lucide-react";

export function Navbar() {
    const [isScrolled, setIsScrolled] = React.useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
    const { theme, setTheme, resolvedTheme } = useTheme();
    const { language, setLanguage, t } = useLanguage();
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleTheme = () => {
        setTheme(resolvedTheme === "dark" ? "light" : "dark");
    };

    const toggleLanguage = () => {
        setLanguage(language === "en" ? "it" : "en");
    };

    const navLinks = [
        { href: "/#home", label: t.nav.home },
        { href: "/#about", label: t.nav.about },
        { href: "/#skills", label: t.nav.skills },
        { href: "/#projects", label: t.nav.projects },
        { href: "/#services", label: t.nav.services },
        { href: "/#contact", label: t.nav.contact },
    ];

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled || isMobileMenuOpen
                    ? "bg-background/80 backdrop-blur-md shadow-sm border-b"
                    : "bg-transparent"
            )}
        >
            <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="w-8 h-8 bg-foreground text-background flex items-center justify-center rounded-lg font-bold text-xl group-hover:scale-105 transition-transform">
                        M
                    </div>
                    <span className="font-heading font-bold text-lg hidden sm:block">
                        Mahdi Nazari
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                {/* Actions */}
                <div className="hidden md:flex items-center gap-2">
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={toggleLanguage}
                        aria-label="Toggle Language"
                    >
                        <span className="font-bold text-xs">{language.toUpperCase()}</span>
                    </Button>
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={toggleTheme}
                        aria-label="Toggle Theme"
                    >
                        {mounted && resolvedTheme === "dark" ? (
                            <Moon className="h-5 w-5 text-foreground" />
                        ) : (
                            <Sun className="h-5 w-5 text-foreground" />
                        )}
                    </Button>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden flex items-center gap-2">
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={toggleTheme}
                        className="mr-2"
                    >
                        {mounted && resolvedTheme === "dark" ? (
                            <Moon className="h-5 w-5 text-foreground" />
                        ) : (
                            <Sun className="h-5 w-5 text-foreground" />
                        )}
                    </Button>
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? (
                            <X className="h-6 w-6" />
                        ) : (
                            <Menu className="h-6 w-6" />
                        )}
                    </Button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden fixed top-16 left-0 right-0 bottom-0 z-40 bg-background/95 backdrop-blur-xl border-t shadow-lg p-6 flex flex-col gap-6 animate-in slide-in-from-top-5">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-xl font-medium py-3 border-b border-border/50 last:border-0"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <div className="flex items-center justify-between pt-4 mt-auto">
                        <span className="text-base font-medium text-muted-foreground">
                            Language
                        </span>
                        <Button
                            variant="outline"
                            size="lg"
                            onClick={toggleLanguage}
                            className="w-32"
                        >
                            {language === "en" ? "English" : "Italiano"}
                        </Button>
                    </div>
                </div>
            )}
        </header>
    );
}
