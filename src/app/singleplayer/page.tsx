import HomeButton from "@/components/HomeButton";

export default function SingleplayerPage() {
    return (
        <div className="flex flex-col min-h-screen bg-gray-100 w-full bg-[url(/blocks/dirt.png)] bg-repeat bg-[length:48px_48px]  pt-12 px-52 text-2xl space-y-8 text-cyan-400">
            <p>Hello, I am Shubham.</p>
            <p className="text-lime-500">
                A student from India, and I love learning about technology and
                it's applications in real life.
            </p>
            <p>
                I am experienced in Javascript and Python, and I am interested
                in web development and machine learning.
            </p>
            <HomeButton text="Continue" />
        </div>
    );
}
