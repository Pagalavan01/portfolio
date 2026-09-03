"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";

const achievements = [
    {
        title: "Gold Medal",
        description: "Research Day 2026, SRMIST",
    },
    {
        title: "Best Paper Award",
        description: "National Conference ‘AI-SDSC’25’ at SRMIST, Ramapuram",
    },
    {
        title: "IEEE Publication",
        description: "Research paper accepted by IEEE",
    },
    {
        title: "Winner",
        description: "Logo design competition, SRMIST",
    },
];

export function Achievements() {
    return (
        <section id="achievements" className="px-6 sm:px-10 lg:px-16">
            <div className="mx-auto w-full max-w-7xl">
                <SectionHeading title="Achievements" subtitle="Recognition & awards" />

                <div className="divide-y divide-[#D9D9D9] border-b border-[#D9D9D9]">
                    {achievements.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -12 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.45 }}
                            className="py-8 grid sm:grid-cols-[40px_1fr] gap-x-8 items-start"
                        >
                            <span className="label-sm text-[#B5B5B5] pt-1">
                                {String(index + 1).padStart(2, "0")}
                            </span>
                            <div>
                                <h3 className="text-lg font-bold text-[#111111]">{item.title}</h3>
                                <p className="mt-1 text-[14px] text-[#555555]">{item.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
