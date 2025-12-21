"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface VideoPlayerProps extends React.HTMLAttributes<HTMLDivElement> {
    src: string;
    poster?: string;
    title?: string;
    autoPlay?: boolean;
}

export function VideoPlayer({
    src,
    poster,
    title = "Video player",
    className,
    autoPlay = false,
    ...props
}: VideoPlayerProps) {
    const getEmbedUrl = (url: string) => {
        // YouTube Regular: youtube.com/watch?v=ID
        const youtubeRegExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&?]*).*/;
        const match = url.match(youtubeRegExp);

        if (match && match[2].length === 11) {
            const videoId = match[2];
            const params = new URLSearchParams({
                autoplay: autoPlay ? '1' : '0',
                rel: '0',
                modestbranding: '1',
                enablejsapi: '1'
            });
            return `https://www.youtube.com/embed/${videoId}?${params.toString()}`;
        }

        return url;
    };

    const isLocalVideo = (url: string) => {
        return /\.(mp4|webm|ogg)$/i.test(url);
    };

    if (isLocalVideo(src)) {
        return (
            <div className={cn("relative w-full h-full bg-black", className)} {...props}>
                <video
                    src={src}
                    poster={poster}
                    controls
                    autoPlay={autoPlay}
                    loop
                    className="w-full h-full object-cover"
                    title={title}
                >
                    Your browser does not support the video tag.
                </video>
            </div>
        );
    }

    // Default to iframe (YouTube or other embeddable sources)
    const embedUrl = getEmbedUrl(src);

    return (
        <div className={cn("relative w-full bg-black", className)} {...props}>
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                    src={embedUrl}
                    title={title}
                    className="absolute top-0 left-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            </div>
        </div>
    );
}
