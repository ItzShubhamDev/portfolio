import React from "react";

export default function Advancement({
    obtained,
    icon,
}: {
    obtained: boolean;
    icon: React.ReactNode;
}) {
    return (
        <div
            className="w-[52px] h-[52px] bg-cover flex items-center justify-center"
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
