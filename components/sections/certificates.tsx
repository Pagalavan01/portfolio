"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";

const certificates = [
    { name: "Diploma in Computer Application (DCA)" },
    { name: "Paper Presentation - IEEE Conference" },
    { name: "2-day IoT Workshop - Senstorent" },
    { name: "AI Fluency - Anthropic" },
    { name: "Paper Presentation - National Conference" },
];

export function Certificates() {
    return (
        <section id="certificates" className="px-6 sm:px-10 lg:px-16">
            <div className="mx-auto w-full max-w-7xl">
                <SectionHeading
                    title="Certificates & Training"
                    subtitle="Continuous learning"
                />

                <div className="divide-y divide-[#D9D9D9] border-b border-[#D9D9D9]">
                    {certificates.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -12 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.07, duration: 0.4 }}
                            className="py-4 sm:py-5 grid sm:grid-cols-[40px_1fr] gap-x-8 gap-y-1 items-center"
                        >
                            <span className="label-sm text-[#B5B5B5]">
                                {String(index + 1).padStart(2, "0")}
                            </span>
                            <p className="text-[15px] font-medium text-[#111111]">{cert.name}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
