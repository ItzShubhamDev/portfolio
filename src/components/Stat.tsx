export default function name({
    index,
    name,
    value,
}: {
    index: number;
    name: string;
    value: string;
}) {
    return (
        <div
            className={`flex w-xl justify-between text-lg ${
                index % 2 == 0 ? "text-gray-100" : "text-gray-500"
            }`}
        >
            <span>{name}</span>
            <span>{value}</span>
        </div>
    );
}
