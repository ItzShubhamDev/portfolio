import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";

const monoCraft = localFont({
    src: [
        {
            path: "../fonts/Monocraft.ttf",
            weight: "400",
            style: "normal",
        },
        {
            path: "../fonts/Monocraft-Bold.ttf",
            weight: "700",
            style: "normal",
        },
        {
            path: "../fonts/Monocraft-Italic.ttf",
            weight: "400",
            style: "italic",
        },
        {
            path: "../fonts/Monocraft-Bold-Italic.ttf",
            weight: "700",
            style: "italic",
        },
        {
            path: "../fonts/Monocraft-Light.ttf",
            weight: "300",
            style: "normal",
        },
        {
            path: "../fonts/Monocraft-SemiBold.ttf",
            weight: "600",
            style: "normal",
        },
    ],
});

export const metadata: Metadata = {
    title: "Shubham | Portfolio",
    description: "A Minecraft Theme Portfolio",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${monoCraft.className} antialiased`}>
                {children}
            </body>
        </html>
    );
}
