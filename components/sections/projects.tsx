"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { Share2 } from "lucide-react"; // Using reasonable icon

export function Projects() {
    return (
        <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8">
            <div className="mx-auto w-full max-w-7xl">
                <SectionHeading title="Project" subtitle="Selected work and side projects." />

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <Card className="group relative overflow-hidden hover:border-blue-500/50">
                        <div className="absolute top-0 right-0 p-4 opacity-50 transition-opacity group-hover:opacity-100">
                            <Share2 className="h-6 w-6 text-blue-500" />
                        </div>
                        <h3 className="text-2xl font-bold text-white">n8n Automation</h3>
                        <p className="mt-2 text-neutral-400">
                            College Book Community Workflow
                        </p>
                        <p className="mt-4 text-neutral-300">
                            Built a comprehensive workflow that automatically sends personalised welcome emails to new members joining the college book community. This includes additional workflow automations to streamline communication and engagement.
                        </p>
                        <div className="mt-6 flex flex-wrap gap-2">
                            <span className="rounded bg-blue-500/10 px-2 py-1 text-xs text-blue-400">Workflow Automation</span>
                            <span className="rounded bg-blue-500/10 px-2 py-1 text-xs text-blue-400">Email Marketing</span>
                        </div>
                    </Card>
                </motion.div>
            </div>
        </section>
    );
}
