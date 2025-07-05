export default function Server({
    name,
    value,
    tagline,
    icon,
    selected,
    onClick,
}: {
    name: string;
    value: string;
    tagline: string;
    icon?: React.ReactNode;
    selected?: boolean;
    onClick?: () => void;
}) {
    return (
        <div
            className={`${
                selected && "outline-2 outline-gray-500 bg-black/50"
            } flex w-3xl relative py-1 px-2`}
            onClick={onClick}
        >
            <div className="flex items-center justify-center mr-4">
                {icon ? (
                    icon
                ) : (
                    <img
                        src="/default_icon.svg"
                        alt="Server Icon"
                        className="h-20 w-20"
                    />
                )}
            </div>
            <div className="flex flex-col text-lg">
                <span className="text-white">{name}</span>
                <span className="text-yellow-500">{tagline}</span>
                <span className="text-gray-500">{value}</span>
            </div>
            <div className="absolute right-0 top-0 flex text-base items-center text-gray-100">
                0/20
                <img src="/ping_full.png" alt="Ping" className="h-8 w-8" />
            </div>
        </div>
    );
}
