import Button from "@/components/Button";
import Stat from "@/components/Stat";

interface Statistic {
    data: {
        status: string;
        languages: {
            name: string;
            text: string;
        }[];
    };
}

export default async function MultiplayerPage() {
    const data = await fetch(
        "https://hackatime.hackclub.com/api/v1/users/U07FW3J47ME/stats"
    );
    const stats: Statistic = await data.json();
    return (
        <div className="flex flex-col items-center min-h-screen bg-gray-100 w-full bg-[url(/blocks/dirt.png)] bg-repeat bg-[length:48px_48px] pt-12">
            <span className="text-xl text-gray-100 mb-2">Statistics</span>
            <div className="w-full flex-1 flex justify-center bg-black/60 border-black border-y-8 space-y-1">
                <div
                    className="flex flex-col px-4 overflow-y-scroll overflow-x-hidden"
                    style={{
                        maxHeight: "calc(100vh - 215px)",
                    }}
                >
                    {stats.data.status === "ok" &&
                        stats.data.languages.map((lang, index) => (
                            <Stat
                                key={index}
                                name={lang.name}
                                value={lang.text}
                                index={index}
                            />
                        ))}
                </div>
            </div>
            <div className="flex justify-between">
                <div className="flex items-center my-8 space-x-4 w-lg">
                    <Button content="Done" route="/" />
                </div>
            </div>
        </div>
    );
}
