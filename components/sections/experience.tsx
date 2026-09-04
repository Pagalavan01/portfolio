"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";

const experiences = [
    {
        company: "XTROP",
        companyUrl: "https://www.linkedin.com/company/xtrop-research-solutions/",
        role: "Research Intern",
        period: "June 2025 – May 2026",
        description: [
            "Co-authored an IEEE-accepted paper on 'An Interpretable Machine Learning Model for Oral Cancer Survival Rate Prediction'.",
            "Co-authored an IEEE-accepted paper on 'AQIStack An Interpretable Ensemble Learning Framework for Reliable Air Quality Index Prediction'.",
            "Built n8n automation for interns' onboarding process, accelerated onboarding by reducing manual steps and reduced manual follow-ups.",
        ],
    },
    {
        company: "Medyaan",
        companyUrl: "https://www.linkedin.com/company/medyaan/",
        role: "Machine Learning & Power BI Intern",
        period: "Feb 2025 – Jun 2025",
        description: [
            "Built Power BI dashboards to visualise key performance metrics and translated them into insights.",
            "Implemented ML models/data pipelines - Regression, Classification.",
        ],
    },
];

export function Experience() {
    return (
        <section id="experience" className="px-6 sm:px-10 lg:px-16">
            <div className="mx-auto w-full max-w-7xl">
                <SectionHeading title="Experience" subtitle="Where I've worked" />

                <div className="divide-y divide-[#D9D9D9] border-b border-[#D9D9D9]">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.12, duration: 0.5 }}
                            className="py-10 grid sm:grid-cols-[1fr_auto] gap-x-8 gap-y-2"
                        >
                            {/* Left: role + company */}
                            <div>
                                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                                    <h3 className="text-xl font-bold text-[#111111] leading-snug">
                                        {exp.role}
                                    </h3>
                                    <span className="text-sm text-[#888888] font-medium">
                                        @ <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#111111] transition-colors hover:underline">{exp.company}</a>
                                    </span>
                                </div>
                                <ul className="mt-4 space-y-2">
                                    {exp.description.map((item, i) => (
                                        <li key={i} className="flex gap-3 text-[15px] text-[#555555] leading-relaxed">
                                            <span className="mt-[6px] flex-shrink-0 block w-1 h-1 rounded-full bg-[#B5B5B5]" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Right: period */}
                            <div className="sm:text-right">
                                <span className="label-sm whitespace-nowrap">{exp.period}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
