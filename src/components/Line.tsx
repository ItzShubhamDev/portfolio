export default function Line({
    x1,
    y1,
    x2,
    y2,
}: {
    x1: number;
    x2: number;
    y1: number;
    y2: number;
}) {
    return (
        <>
            <line
                x1={x1 * 76 + 38}
                x2={x2 * 76 + 38}
                y1={y1 * 74 + 37}
                y2={y2 * 74 + 37}
                stroke="#000"
                strokeWidth="10"
            />
            <line
                x1={x1 * 76 + 38}
                x2={x2 * 76 + 38}
                y1={y1 * 74 + 37}
                y2={y2 * 74 + 37}
                stroke="#fff"
                strokeWidth="4"
            />
        </>
    );
}
