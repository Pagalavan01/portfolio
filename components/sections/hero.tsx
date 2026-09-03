"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const socialLinks = [
    { name: "LinkedIn", href: "https://www.linkedin.com/in/pagalavan-natarajan" },
    { name: "GitHub", href: "https://github.com/Pagalavan01" },
];

export function Hero() {
    return (
        <section
            id="home"
            className="relative min-h-screen flex flex-col justify-center pt-14 overflow-hidden"
        >
            {/* Vertical social links — left edge, desktop only */}
            <div className="hidden lg:flex fixed left-0 top-1/2 -translate-y-1/2 z-30 flex-col items-center gap-6 pl-5">
                {socialLinks.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="writing-vertical text-[10px] tracking-[0.2em] uppercase text-[#888888] hover:text-[#111111] transition-colors"
                    >
                        {link.name}
                    </a>
                ))}
                <span className="block h-20 w-px bg-[#D9D9D9] mt-2" />
            </div>

            {/* Main content */}
            <div className="mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-16">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center min-h-[calc(100vh-3.5rem)] py-20 lg:py-0">

                    {/* Left: Text */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
                        className="flex flex-col justify-center"
                    >
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="label-sm mb-6 block"
                        >
                        </motion.span>

                        <h1 className="font-display text-[clamp(3rem,8vw,6rem)] font-bold leading-[1.0] tracking-tight text-[#111111]">
                            N.Pagalavan
                        </h1>

                        <motion.p
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.35, duration: 0.6 }}
                            className="mt-6 max-w-lg text-base sm:text-lg leading-relaxed text-[#555555]"
                        >
                            Experience in model development, data preprocessing, and explainable AI.
                            Completed an internship at Medyaan focusing on Machine Learning and Power BI.
                            Contributed to IEEE research on oral cancer survival prediction and Air Quality
                            Index forecasting at XTROP. Developed workflow automations using n8n and
                            projects including &ldquo;Personal Chatbot,&rdquo; &ldquo;Chennai Restaurant Explorer,&rdquo;
                            and &ldquo;DataMedic.&rdquo; Aims to contribute to real-world solutions and deployable AI systems.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                            className="mt-10 flex flex-wrap items-center gap-8"
                        >
                            <Link href="#contact" className="arrow-link text-sm font-semibold">
                                Contact <span aria-hidden>→</span>
                            </Link>
                            <Link href="#projects" className="arrow-link text-sm font-semibold">
                                My Projects <span aria-hidden>→</span>
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* Right: Profile photo */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.96 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                        className="hidden lg:flex justify-center items-center"
                    >
                        <div className="relative w-[420px] h-[520px] overflow-hidden">
                            <Image
                                src="/Pagalavan.png"
                                alt="N.Pagalavan"
                                fill
                                className="object-cover object-top grayscale"
                                priority
                                sizes="420px"
                            />
                        </div>
                    </motion.div>

                </div>
            </div>

            {/* Bottom scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="label-sm">Scroll</span>
                <motion.span
                    animate={{ y: [0, 6, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    className="block h-6 w-px bg-[#B5B5B5]"
                />
            </motion.div>
        </section>
    );
}
