"use client";

import { useRouter } from "next/navigation";
import Button from "./Button";

export default function HomeButton({ text }: { text: string }) {
    const router = useRouter();

    return (
        <div className="fixed bottom-3 w-lg left-1/2 transform -translate-x-1/2">
            <Button onClick={() => router.push("/")} content={text} />
        </div>
    );
}
