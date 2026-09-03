"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";

export function Contact() {
    return (
        <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8">
            <div className="mx-auto w-full max-w-7xl">
                <SectionHeading title="Contact" subtitle="Let's build something together." />

                <div className="grid gap-6 md:grid-cols-2">
                    <Card>
                        <h3 className="mb-6 text-xl font-bold text-white">Get in touch</h3>
                        <div className="space-y-4 text-neutral-300">
                            <div className="flex items-center gap-3">
                                <Phone className="h-5 w-5 text-blue-500" />
                                <span>+91 7010579350</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Mail className="h-5 w-5 text-blue-500" />
                                <a href="mailto:pagalavan0109@gmail.com" className="hover:text-blue-400">pagalavan0109@gmail.com</a>
                            </div>
                            <div className="flex items-center gap-3">
                                <Linkedin className="h-5 w-5 text-blue-500" />
                                <a href="https://www.linkedin.com/in/pagalavan-natarajan" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                                    pagalavan-natarajan
                                </a>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </section>
    );
}
