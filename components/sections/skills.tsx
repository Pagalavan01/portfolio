"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";

const skillCategories = [
    {
        title: "Technical",
        skills: ["Python", "Power BI", "n8n", "SQL", "Java", "MS Excel", "MS Word"]
    },
    {
        title: "Machine Learning",
        skills: ["Regression and classification Models", "Data Preprocessing", "Model Evaluation", "explainable AI"]
    },
    {
        title: "Creative Tools",
        skills: ["Adobe Photoshop", "Adobe Premiere Pro", "Canva"]
    }
];

export function Skills() {
    return (
        <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8">
            <div className="mx-auto w-full max-w-7xl">
                <SectionHeading title="Skills" subtitle="What I bring to the table." />

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className="h-full">
                                <h3 className="mb-4 text-lg font-bold text-white">{category.title}</h3>
                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map((skill, i) => (
                                        <span
                                            key={i}
                                            className="rounded-full bg-neutral-800 px-3 py-1 text-sm text-neutral-300"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
