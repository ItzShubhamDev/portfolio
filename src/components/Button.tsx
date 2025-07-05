"use client";

import { useRouter } from "next/navigation";

export default function Button({
    content,
    onClick,
    route,
}: {
    content: string;
    onClick?: () => void;
    route?: string;
}) {
    const router = useRouter();
    return (
        <button
            className={`w-full h-12 text-lg minecraft-btn text-center text-white truncate p-1 border-2 border-b-4 hover:text-yellow-300 focus:outline-none`}
            onClick={onClick || (route ? () => router.push(route) : undefined)}
        >
            {content}
        </button>
    );
}
