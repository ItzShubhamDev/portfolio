"use client";

import { useEffect, useRef, useState } from "react";
import Button from "./Button";
import { useRouter } from "next/navigation";

export function StartMenu() {
    const [creeper, setCreeper] = useState(false);
    const imageRef = useRef<HTMLImageElement | null>(null);
    const [sound, setSound] = useState<HTMLAudioElement | null>(null);

    useEffect(() => {
        const audio = new Audio("/sounds/creeper.mp3");
        audio.volume = 0.5;
        setSound(audio);
    }, []);

    const handleQuit = () => {
        setCreeper(true);
        if (imageRef.current) {
            imageRef.current.src = "/creeper.gif";
        }
        if (sound) {
            sound
                .play()
                .catch((error) => console.error("Audio play error:", error));
        }

        setTimeout(() => {
            imageRef.current!.src = "";
            setCreeper(false);
        }, 4800);
    };

    const router = useRouter();
    return (
        <>
            <div className="flex flex-col items-center mt-16 space-y-4 w-lg">
                <>
                    <Button
                        content="Singleplayer"
                        onClick={() => router.push("/singleplayer")}
                    />
                    <Button
                        content="Multiplayer"
                        onClick={() => router.push("/multiplayer")}
                    />
                    <div className="flex space-x-4 w-full mb-8">
                        <Button
                            content="Advancements"
                            onClick={() => router.push("/advancements")}
                        />
                        <Button
                            content="Statistics"
                            onClick={() => router.push("/statistics")}
                        />
                    </div>
                    <div className="flex mt-8 space-x-4 w-full">
                        <Button content="Quit Game" onClick={handleQuit} />
                    </div>
                </>
            </div>
            <div
                className="fixed left-12 top-1/2 transform -translate-y-1/2"
                style={{
                    display: creeper ? "block" : "none",
                }}
            >
                <img
                    src="/creeper.gif"
                    alt="creeper"
                    className="h-96 w-96"
                    ref={imageRef}
                />
            </div>
        </>
    );
}
