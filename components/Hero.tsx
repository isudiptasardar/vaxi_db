import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ForwardIcon } from "lucide-react";
import { AuroraText } from "@/components/magicui/aurora-text";


export default function HeroSection() {
    return (
        <HeroHighlight className="flex items-center flex-col lg:max-w-[60%] space-y-10">
            <h1 className="text-5xl font-semibold">
                Welcome to {" "}
                <Highlight className="text-black dark:text-white font-bold">
                    VaxiDB
                </Highlight>
            </h1>
            <p className="text-center text-3xl">Revolutionizing vaccine development through AI-powered research tools, comprehensive biological databases, and collaborative platforms designed for the future of global health.
            </p>

            <Button className="border rounded-full text-xl cursor-pointer" size={'lg'} asChild>
                <Link href={'/design'}>
                    Start Designing
                    <ForwardIcon />
                </Link>
            </Button>

            <div className="flex gap-6">
                <div className="flex flex-col text-center">
                    <AuroraText className="text-5xl font-bold" speed={0.5}>2M+</AuroraText>
                    <p className="text-xl font-bold">Protein Sequences</p>
                </div>
                <div className="flex flex-col text-center">
                    <AuroraText className="text-5xl font-bold" speed={2}>300+</AuroraText>
                    <p className="text-xl font-bold">Organism Covered</p>
                </div>
            </div>
        </HeroHighlight>
    )
}