"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";

const skillCategories = [
    {
        title: "Programming",
        skills: ["Python", "C", "C++", "HTML", "CSS", "SQL"],
    },
    {
        title: "ML & Data",
        skills: [
            "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn",
            "Regression", "Classification", "Data Preprocessing",
            "Model Evaluation", "Explainable AI (SHAP & LIME)", "PCA", "Power BI",
        ],
    },
    {
        title: "AI",
        skills: ["LLM Fundamentals", "RAG", "Embeddings", "Vector Search", "Prompt Engineering"],
    },
    {
        title: "Deployment",
        skills: ["Vercel", "Netlify", "Render", "Supabase", "Firebase"],
    },
    {
        title: "Tools",
        skills: ["Git", "GitHub", "Jupyter Notebook", "Google Colab", "Docker", "VS Code", "Antigravity", "n8n", "Notion", "MS Excel", "MS Word"],
    },
    {
        title: "Creative Tools",
        skills: ["Adobe Photoshop", "Adobe Premiere Pro", "Canva"],
    },
];

export function Skills() {
    return (
        <section id="skills" className="px-6 sm:px-10 lg:px-16">
            <div className="mx-auto w-full max-w-7xl">
                <SectionHeading title="Skills" subtitle="What I bring to the table" />

                <div className="divide-y divide-[#D9D9D9] border-b border-[#D9D9D9]">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.07, duration: 0.45 }}
                            className="py-6 sm:py-7 grid sm:grid-cols-[180px_1fr] gap-x-10 gap-y-3 items-start"
                        >
                            {/* Category label */}
                            <span className="label-sm pt-1">{category.title}</span>

                            {/* Skills as inline tags */}
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, i) => (
                                    <span
                                        key={i}
                                        className="px-3 py-1 text-[13px] text-[#555555] border border-[#D9D9D9] bg-[#F7F7F7] hover:bg-[#F2F2F2] hover:border-[#B5B5B5] transition-colors"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
