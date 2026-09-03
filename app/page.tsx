import { Hero } from "@/components/sections/hero";
import { Experience } from "@/components/sections/experience";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { Certificates } from "@/components/sections/certificates";
import { Achievements } from "@/components/sections/achievements";
import { Contact } from "@/components/sections/contact";

export default function Home() {
    return (
        <main className="min-h-screen bg-white text-text-primary selection:bg-black selection:text-white">
            <Hero />
            <Experience />
            <Skills />
            <Projects />
            <Certificates />
            <Achievements />
            <Contact />
            <footer className="py-10 px-6 sm:px-10 lg:px-16 border-t border-[#D9D9D9]">
                <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-2">
                    <span className="text-xs text-[#888888] tracking-wide">
                        &copy; {new Date().getFullYear()} N.Pagalavan
                    </span>
                    <span className="text-xs text-[#888888] tracking-wide">
                        All rights reserved.
                    </span>
                </div>
            </footer>
        </main>
    );
}
