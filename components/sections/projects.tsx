"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";

const GitHubIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-5 h-5"
        aria-hidden="true"
    >
        <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.216.69.825.573C20.565 21.795 24 17.298 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
);

const projectsData = [
    {
        title: "n8n Automation",
        subtitle: "College Book Community Workflow",
        description:
            "Built a comprehensive workflow that automatically sends personalised welcome emails to new members joining the college book community. Includes additional workflow automations to streamline communication and engagement.",
        tags: ["Workflow Automation", "Email Marketing"],
        url: null,
        github: "https://github.com/Pagalavan01/n8n-Automations",
    },
    {
        title: "Personal Chatbot",
        subtitle: "RAG-based AI Agent",
        description:
            "My personal RAG chatbot using Python, embeddings, and vector-based document retrieval for contextual responses.",
        tags: ["Python", "RAG", "Embeddings", "Vector Search"],
        url: null,
        github: "https://github.com/Pagalavan01/My_Chatbot",
    },
    {
        title: "DataMedic",
        subtitle: "Data Quality Tool",
        description:
            "A data quality tool to automatically analyzes & fix CSV datasets for missing values, duplicate rows, data-type mismatches, inconsistent categories, and suspicious outliers.",
        tags: ["Data Analysis", "Python", "CSV"],
        url: "https://datamedic.vercel.app/",
        github: "https://github.com/Pagalavan01/Data-Medic",
    },
    {
        title: "Chennai Restaurants Explorer",
        subtitle: "Restaurant Discovery Web App",
        description:
            "A web application to help users discover top-rated and nearby restaurants in Chennai. Features search and filtering based on location, ratings, and cuisine preferences.",
        tags: ["Web App", "Search & Filtering", "UX"],
        url: "https://chennairestaurantexplorer.netlify.app/",
        github: "https://github.com/Pagalavan01/Chennai-Restaurant-Explorer",
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
                                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2">
                                    <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                                        {project.url ? (
                                            <a
                                                href={project.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 text-xl font-bold text-[#111111] leading-snug hover:opacity-70 transition-opacity"
                                            >
                                                {project.title} <span aria-hidden className="text-base font-normal text-[#888888]">↗</span>
                                            </a>
                                        ) : (
                                            <h3 className="text-xl font-bold text-[#111111] leading-snug">
                                                {project.title}
                                            </h3>
                                        )}
                                        <span className="text-sm text-[#888888]">{project.subtitle}</span>
                                    </div>

                                    {/* GitHub link */}
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={`View ${project.title} on GitHub`}
                                            className="text-[#888888] hover:text-[#111111] transition-colors duration-200 flex-shrink-0"
                                        >
                                            <GitHubIcon />
                                        </a>
                                    )}
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
