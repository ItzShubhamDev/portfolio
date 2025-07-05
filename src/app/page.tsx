import { StartMenu } from "@/components/Menu";

export default function Home() {
    return (
        <div className="flex flex-col items-center min-h-screen bg-gray-100 w-full bg-[url(/background.png)] bg-cover pt-12">
            <img
                src="/portfolio.png"
                alt="Portfolio"
                className="w-96 lg:w-[800px]"
            />
            <img
                src="/desktop_edition.png"
                alt="Desktop Edition"
                className="hidden xl:block"
            />
            <img
                src="/tablet_edition.png"
                alt="Tablet Edition"
                className="hidden sm:block xl:hidden"
            />
            <img
                src="/mobile_edition.png"
                alt="Mobile Edition"
                className="sm:hidden"
            />

            <StartMenu />

            <span className="fixed bottom-0 left-0 text-gray-100 text-sm">
                Portfolio 1.0.0
            </span>
            <span className="fixed bottom-0 right-0 text-gray-100 text-sm">
                Made with ❤️ by Shubham
            </span>
        </div>
    );
}
