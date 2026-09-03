"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { Trophy } from "lucide-react";

const achievements = [
    {
        title: "Winner",
        description: "Logo design competition, SRMIST"
    },
    {
        title: "IEEE Publication",
        description: "Research paper accepted by IEEE (pending publication)"
    },
    {
        title: "Best Paper Award",
        description: "National Conference"
    }
];

export function Achievements() {
    return (
        <section id="achievements" className="py-24 px-4 sm:px-6 lg:px-8">
            <div className="mx-auto w-full max-w-7xl">
                <SectionHeading title="Achievements" subtitle="Recognition and awards." />

                <div className="space-y-4">
                    {achievements.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className="flex items-center gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-500/10">
                                    <Trophy className="h-6 w-6 text-yellow-500" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white">{item.title}</h3>
                                    <p className="text-neutral-400">{item.description}</p>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
