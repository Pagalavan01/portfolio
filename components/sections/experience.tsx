"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";

const experiences = [
    {
        company: "XTROP",
        role: "Research Intern",
        period: "June 2025 - Present",
        description: [
            "Currently writing a second research paper focused on Air Quality Index (AQI) prediction.",
            "Co-authored an IEEE-accepted paper on 'An Interpretable Machine Learning Model for Oral Cancer Survival Rate Prediction'.",
            "Built n8n automation for interns' onboarding process, accelerated onboarding by reducing manual steps and reduced manual follow-ups."
        ]
    },
    {
        company: "Medyaan",
        role: "Machine Learning & Power BI Intern",
        period: "Feb 2025 - Jun 2025",
        description: [
            "Built Power BI dashboards to visualise key performance metrics and translated them into insights.",
            "Implemented ML models/data pipelines [Regression, classification]."
        ]
    }
];

export function Experience() {
    return (
        <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8">
            <div className="mx-auto w-full max-w-7xl">
                <SectionHeading title="Experience" subtitle="Where I've worked and what I've done." />

                <div className="space-y-8">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card>
                                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
                                    <div>
                                        <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                                        <p className="text-blue-400">{exp.company}</p>
                                    </div>
                                    <span className="mt-2 text-sm text-neutral-500 sm:mt-0">{exp.period}</span>
                                </div>
                                <ul className="mt-4 list-inside list-disc space-y-2 text-neutral-400">
                                    {exp.description.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
