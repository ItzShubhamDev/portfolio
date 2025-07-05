import HomeButton from "@/components/HomeButton";

export default function AdvancementsPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 w-full bg-[url(/background.png)] bg-cover">
            <div className="relative bg-[url(/blocks/stone.png)] bg-repeat bg-[length:48px_48px] w-2xl h-96 rounded-3xl p-8 pt-14">
                <div className="flex justify-center pt-4 text-gray-200">
                    Nothing here yet!
                </div>
                <img
                    src="/advancements/window.png"
                    className="absolute top-0 left-0 w-full h-full"
                    alt="Advancements Window"
                />
                <span className="absolute top-3 left-[22px] text-gray-500 text-lg">
                    Advancements
                </span>
            </div>
            <HomeButton text="Done" />
        </div>
    );
}
