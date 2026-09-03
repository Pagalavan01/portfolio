"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";

const projectsData = [
    {
        title: "n8n Automation",
        subtitle: "College Book Community Workflow",
        description:
            "Built a comprehensive workflow that automatically sends personalised welcome emails to new members joining the college book community. Includes additional workflow automations to streamline communication and engagement.",
        tags: ["Workflow Automation", "Email Marketing"],
    },
    {
        title: "Personal Chatbot",
        subtitle: "RAG-based AI Agent",
        description:
            "My personal RAG chatbot using Python, embeddings, and vector-based document retrieval for contextual responses.",
        tags: ["Python", "RAG", "Embeddings", "Vector Search"],
    },
    {
        title: "DataMedic",
        subtitle: "Data Quality Tool",
        description:
            "A data quality tool that automatically analyses CSV datasets for missing values, duplicate rows, data-type mismatches, inconsistent categories, and suspicious outliers.",
        tags: ["Data Analysis", "Python", "CSV"],
    },
    {
        title: "Chennai Restaurants Explorer",
        subtitle: "Restaurant Discovery Web App",
        description:
            "A web application to help users discover top-rated and nearby restaurants in Chennai. Features search and filtering based on location, ratings, and cuisine preferences.",
        tags: ["Web App", "Search & Filtering", "UX"],
    },
];

export function Projects() {
    return (
        <section id="projects" className="px-6 sm:px-10 lg:px-16">
            <div className="mx-auto w-full max-w-7xl">
                <SectionHeading title="Projects" subtitle="Selected work" />

                <div className="divide-y divide-[#D9D9D9] border-b border-[#D9D9D9]">
                    {projectsData.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="py-10 grid sm:grid-cols-[40px_1fr] gap-x-8 gap-y-2"
                        >
                            {/* Index number */}
                            <span className="label-sm pt-1 text-[#B5B5B5]">
                                {String(index + 1).padStart(2, "0")}
                            </span>

                            {/* Content */}
                            <div>
                                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                                    <h3 className="text-xl font-bold text-[#111111] leading-snug">
                                        {project.title}
                                    </h3>
                                    <span className="text-sm text-[#888888]">{project.subtitle}</span>
                                </div>
                                <p className="mt-3 text-[15px] leading-relaxed text-[#555555] max-w-2xl">
                                    {project.description}
                                </p>
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {project.tags.map((tag, tagIndex) => (
                                        <span
                                            key={tagIndex}
                                            className="px-2 py-0.5 text-[11px] tracking-wide border border-[#D9D9D9] text-[#888888]"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
