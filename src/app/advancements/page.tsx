import Advancement from "@/components/Advancement";
import HomeButton from "@/components/HomeButton";
import Line from "@/components/Line";
import { BiLogoJavascript, BiLogoTypescript } from "react-icons/bi";
import {
    FaCss3,
    FaCss3Alt,
    FaDiscord,
    FaHtml5,
    FaJava,
    FaJs,
    FaNodeJs,
    FaPython,
    FaReact,
    FaSquareJs,
} from "react-icons/fa6";
import { IoLogoCss3, IoLogoHtml5 } from "react-icons/io5";
import {
    RiJavascriptLine,
    RiNextjsFill,
    RiTailwindCssFill,
} from "react-icons/ri";
import { SiAdonisjs, SiExpress, SiMongodb, SiOpenai } from "react-icons/si";
import { TbBrandMinecraft, TbBrandTypescript } from "react-icons/tb";

export default function AdvancementsPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 w-full bg-[url(/background.png)] bg-cover">
            <div className="relative flex items-center bg-[url(/blocks/stone.png)] bg-repeat bg-[length:48px_48px] w-2xl pt-14 h-96 rounded-3xl p-8">
                <div className="relative grid grid-cols-8 grid-rows-4 text-gray-200 w-[608px] z-10 h-full">
                    <svg
                        className="absolute top-0 left-0 w-full h-full pointer-events-none -z-1"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <Line x1={0} y1={2} x2={4} y2={2} />
                        <Line x1={2} y1={1} x2={4} y2={1} />
                        <Line x1={3} y1={3} x2={4} y2={3} />
                        <Line x1={3} y1={0} x2={3} y2={1} />
                        <Line x1={3} y1={2} x2={3} y2={3} />
                        <Line x1={1} y1={1} x2={1} y2={2} />
                        <Line x1={2} y1={1} x2={2} y2={3} />
                        <Line x1={6} y1={1} x2={6} y2={2} />
                        <Line x1={7} y1={2} x2={7} y2={3} />
                    </svg>
                    <div></div>
                    <div></div>
                    <div></div>
                    <Advancement
                        icon={<FaReact className="w-8 h-8 text-gray-500" />}
                        className="m-auto"
                    />
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <Advancement
                        obtained={true}
                        icon={<RiTailwindCssFill className="w-8 h-8" />}
                        className="m-auto"
                    />
                    <Advancement
                        obtained={true}
                        icon={<BiLogoTypescript className="w-9 h-9" />}
                        className="m-auto"
                    />
                    <Advancement
                        obtained={true}
                        icon={<FaReact className="w-8 h-8" />}
                        className="m-auto"
                    />
                    <Advancement
                        icon={
                            <RiNextjsFill className="w-8 h-8 text-gray-500" />
                        }
                        className="m-auto"
                    />
                    <div></div>
                    <Advancement
                        icon={
                            <img
                                src="/minecraft_icon.png"
                                className="w-8 h-8"
                                style={{
                                    filter: "invert(46%) sepia(12%) saturate(533%) hue-rotate(182deg) brightness(92%) contrast(87%)",
                                }}
                            />
                        }
                        className="m-auto"
                    />
                    <div></div>
                    <Advancement
                        obtained={true}
                        icon={<IoLogoHtml5 className="w-8 h-8" />}
                        className="m-auto"
                    />
                    <Advancement
                        obtained={true}
                        icon={<IoLogoCss3 className="w-8 h-8" />}
                        className="m-auto"
                    />
                    <Advancement
                        obtained={true}
                        icon={<FaSquareJs className="w-8 h-8" />}
                        className="m-auto"
                    />
                    <Advancement
                        obtained={true}
                        icon={<FaNodeJs className="w-8 h-8" />}
                        className="m-auto"
                    />
                    <Advancement
                        icon={<SiAdonisjs className="w-8 h-8 text-gray-500" />}
                        className="m-auto"
                    />
                    <div></div>
                    <Advancement
                        icon={<FaJava className="w-8 h-8 text-gray-500" />}
                        className="m-auto"
                    />
                    <Advancement
                        obtained={true}
                        icon={<FaPython className="w-8 h-8" />}
                        className="m-auto"
                    />
                    <div></div>
                    <div></div>
                    <Advancement
                        icon={<FaDiscord className="w-8 h-8 text-gray-500" />}
                        className="m-auto"
                    />
                    <Advancement
                        obtained={true}
                        icon={<SiExpress className="w-8 h-8" />}
                        className="m-auto"
                    />
                    <Advancement
                        icon={<SiMongodb className="w-8 h-8 text-gray-500" />}
                        className="m-auto"
                    />
                    <div></div>
                    <div></div>
                    <Advancement
                        icon={<SiOpenai className="w-8 h-8 text-gray-500" />}
                        className="m-auto"
                    />
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
