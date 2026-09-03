"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { Mail, Phone, Linkedin, Github } from "lucide-react";

const contactItems = [
    {
        icon: Phone,
        label: "Phone",
        value: "+91 7010579350",
        href: "tel:+917010579350",
    },
    {
        icon: Mail,
        label: "Email",
        value: "pagalavan0109@gmail.com",
        href: "mailto:pagalavan0109@gmail.com",
    },
    {
        icon: Linkedin,
        label: "LinkedIn",
        value: "pagalavan-natarajan",
        href: "https://www.linkedin.com/in/pagalavan-natarajan",
    },
    {
        icon: Github,
        label: "GitHub",
        value: "Pagalavan01",
        href: "https://github.com/Pagalavan01",
    },
];

export function Contact() {
    return (
        <section id="contact" className="px-6 sm:px-10 lg:px-16">
            <div className="mx-auto w-full max-w-7xl">
                <SectionHeading title="Contact" subtitle="Let's build something together" />

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-0 divide-y sm:divide-y-0 sm:divide-x divide-[#D9D9D9] border border-[#D9D9D9] mb-16">
                    {contactItems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.08, duration: 0.4 }}
                            className="p-6 sm:p-8 group"
                        >
                            <item.icon className="h-4 w-4 text-[#B5B5B5] mb-4 group-hover:text-[#111111] transition-colors" />
                            <span className="label-sm block mb-2">{item.label}</span>
                            <a
                                href={item.href}
                                target={item.href.startsWith("http") ? "_blank" : undefined}
                                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                className="text-[14px] font-medium text-[#111111] hover:text-[#555555] transition-colors break-all"
                            >
                                {item.value}
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
