import { Hero } from "@/components/sections/hero";
import { Experience } from "@/components/sections/experience";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { Certificates } from "@/components/sections/certificates";
import { Achievements } from "@/components/sections/achievements";
import { Contact } from "@/components/sections/contact";

export default function Home() {
    return (
        <main className="bg-neutral-950 min-h-screen text-neutral-200 selection:bg-blue-500/30">
            <Hero />
            <Experience />
            <Skills />
            <Projects />
            <Certificates />
            <Achievements />
            <Contact />
            <footer className="py-8 text-center text-sm text-neutral-600 border-t border-neutral-900">
                &copy; {new Date().getFullYear()} N. Pagalavan. All rights reserved.
            </footer>
        </main>
    );
}
