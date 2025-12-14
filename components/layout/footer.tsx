"use client";

import { useLanguage } from "@/lib/i18n/context";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export function Footer() {
    const { t } = useLanguage();
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-surface border-t py-12">
            <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex flex-col items-center md:items-start gap-2">
                    <span className="font-heading font-bold text-xl">Mahdi Nazari</span>
                    <p className="text-sm text-muted-foreground">
                        © {currentYear} {t.footer.rights}
                    </p>
                </div>

                <div className="flex items-center gap-6">
                    <Link
                        href="https://github.com/mnparsian"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                        <Github className="h-5 w-5" />
                        <span className="sr-only">GitHub</span>
                    </Link>
                    <Link
                        href="https://www.linkedin.com/in/mahdi-nazari7/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                        <Linkedin className="h-5 w-5" />
                        <span className="sr-only">LinkedIn</span>
                    </Link>
                    <Link
                        href="mailto:support@mahdinazari.net"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                        <Mail className="h-5 w-5" />
                        <span className="sr-only">Email</span>
                    </Link>
                </div>
            </div>
        </footer>
    );
}
