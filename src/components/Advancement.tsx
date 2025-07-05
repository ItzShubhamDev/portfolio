import React from "react";

export default function Advancement({
    icon,
    obtained,
    className,
}: {
    icon: React.ReactNode;
    obtained?: boolean;
    className?: string;
}) {
    return (
        <div
            className={`w-[52px] h-[52px] bg-cover flex items-center justify-center ${className}`}
            style={{
                backgroundImage: obtained
                    ? `url(/advancements/obtained.png)`
                    : `url(/advancements/unobtained.png)`,
            }}
        >
            {icon}
        </div>
    );
}
