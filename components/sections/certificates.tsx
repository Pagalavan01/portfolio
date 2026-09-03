"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { Award } from "lucide-react";

const certificates = [
    { name: "Diploma in Computer Application (DCA)", image: "#" },
    { name: "Paper Presentation - IEEE Conference", image: "/certificates/Paper Presentation Certificate - IEEE Conference.png" },
    { name: "2-day IoT Workshop - Senstorent", image: "/certificates/2-day IoT Workshop - Senstorent.png" },
    { name: "AI Fluency - Anthropic", image: "/certificates/AI fluency for students - Anthropic.png" },
    { name: "Paper Presentation - National Conference", image: "/certificates/Paper Presentation Certificate - National Conference.jpg" }
];

export function Certificates() {
    return (
        <section id="certificates" className="py-24 px-4 sm:px-6 lg:px-8">
            <div className="mx-auto w-full max-w-7xl">
                <SectionHeading title="Certificates & Training" subtitle="Continuous learning and professional development." />

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {certificates.slice(0, 3).map((cert, index) => (
                        <CertificateCard key={index} cert={cert} index={index} />
                    ))}
                </div>
                <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:justify-center">
                    {certificates.slice(3).map((cert, index) => (
                        <div key={index + 3} className="w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.33%-0.75rem)]">
                            <CertificateCard cert={cert} index={index + 3} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function CertificateCard({ cert, index }: { cert: { name: string; image: string }; index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="h-full"
        >
            <Card className="flex h-full flex-col items-center justify-between p-6 text-center hover:border-blue-500/50 transition-colors">
                <div>
                    <Award className="mx-auto mb-4 h-8 w-8 text-blue-500" />
                    <p className="font-medium text-neutral-200">{cert.name}</p>
                </div>
                {cert.image !== "#" && (
                    <a
                        href={cert.image}
                        className="mt-6 inline-flex items-center rounded-full bg-blue-600/10 px-4 py-2 text-xs font-medium text-blue-400 hover:bg-blue-600/20 hover:text-blue-300 transition-colors"
                    >
                        View certificate
                    </a>
                )}
            </Card>
        </motion.div>
    );
}
