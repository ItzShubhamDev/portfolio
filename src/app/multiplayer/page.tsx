"use client";

import Button from "@/components/Button";
import Server from "@/components/Server";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaDiscord, FaGithub } from "react-icons/fa";
import { PiMicrosoftOutlookLogoFill } from "react-icons/pi";

export default function MultiplayerPage() {
    const [selected, setSelected] = useState<string | null>(null);
    const router = useRouter();
    const githubURL = "https://github.com/itzshubhamdev";
    const discordURL = "https://discordapp.com/users/1031766131993743460";
    const emailURL = "mailto:shubhamdev01@outlook.com";

    const handleJoin = () => {
        if (selected === "github") {
            window.open(githubURL, "_blank");
        } else if (selected === "discord") {
            window.open(discordURL, "_blank");
        } else if (selected === "email") {
            window.open(emailURL, "_blank");
        }
    };

    return (
        <div className="flex flex-col items-center min-h-screen bg-gray-100 w-full bg-[url(/blocks/dirt.png)] bg-repeat bg-[length:48px_48px] pt-12">
            <span className="text-xl text-gray-100 mb-2">Play Multiplayer</span>
            <div className="w-full flex-1 flex flex-col items-center bg-black/60 border-black border-y-8  space-y-1">
                <Server
                    name="Github"
                    value="github.com/itzshubhamdev"
                    tagline="Where the world builds software"
                    icon={<FaGithub className="h-20 w-20 text-gray-100" />}
                    selected={selected === "github"}
                    onClick={() => setSelected("github")}
                />
                <Server
                    name="Discord"
                    value="itzshubhamdev"
                    tagline="Your place to talk"
                    icon={<FaDiscord className="h-20 w-20 text-blue-500" />}
                    selected={selected === "discord"}
                    onClick={() => setSelected("discord")}
                />
                <Server
                    name="Email"
                    value="shubhamdev01@outlook.com"
                    tagline="Stay connected. Stay organized."
                    icon={
                        <PiMicrosoftOutlookLogoFill className="h-20 w-20 text-cyan-500" />
                    }
                    selected={selected === "email"}
                    onClick={() => setSelected("email")}
                />
            </div>
            <div className="flex justify-between">
                <div className="flex items-center my-8 space-x-4 w-lg">
                    <Button content="Join Server" onClick={handleJoin} />
                    <Button content="Cancel" onClick={() => router.push("/")} />
                </div>
            </div>
        </div>
    );
}
