"use client";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/i18n/context";
import Link from "next/link";

export default function NotFound() {
    const { t } = useLanguage();

    return (
        <main className="min-h-screen bg-background flex flex-col">
            <Navbar />
            <div className="flex-grow flex items-center justify-center p-4">
                <div className="text-center space-y-6 max-w-md mx-auto">
                    <h1 className="text-9xl font-bold font-heading text-primary/10 select-none">
                        404
                    </h1>
                    <div className="space-y-2">
                        <h2 className="text-2xl md:text-3xl font-bold font-heading">
                            {t.notFound.title}
                        </h2>
                        <p className="text-muted-foreground">
                            {t.notFound.description}
                        </p>
                    </div>
                    <Button asChild size="lg">
                        <Link href="/">
                            {t.notFound.backHome}
                        </Link>
                    </Button>
                </div>
            </div>
            <Footer />
        </main>
    );
}
