"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
// Checking previous steps, I used direct imports in card.tsx. I'll stick to that pattern or create the utils file.
// The previous card.tsx defined `cn` internally. I should probably refactor that to a shared utility, but to be speedy I will define it or just use clsx/twMerge directly here.

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

const navItems = [
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Project", href: "#projects" },
    { name: "C&T", href: "#certificates" },
    { name: "Achievements", href: "#achievements" },
    { name: "Get in touch", href: "#contact" },
];

export function Navbar() {
    const [activeSection, setActiveSection] = useState("");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isNavVisible, setIsNavVisible] = useState(true);

    useEffect(() => {
        let timeoutId: NodeJS.Timeout;

        const handleScroll = () => {
            setIsNavVisible(false);
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                setIsNavVisible(true);
            }, 200);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            clearTimeout(timeoutId);
        };
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                rootMargin: "-20% 0px -60% 0px",
                threshold: 0
            }
        );

        // Observe Home section explicitly
        const homeSection = document.querySelector("#home");
        if (homeSection) observer.observe(homeSection);

        navItems.forEach((item) => {
            const element = document.querySelector(item.href);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <>
            <div className="fixed top-6 left-0 right-0 z-50 flex justify-end md:justify-center px-4">
                {/* Desktop Menu */}
                <motion.nav
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="hidden md:flex items-center gap-1 rounded-full border border-white/10 bg-black/60 px-2 py-2 shadow-2xl backdrop-blur-xl supports-[backdrop-filter]:bg-black/30"
                >
                    <Link
                        href="#home"
                        className={cn(
                            "relative rounded-full px-4 py-2 text-sm font-medium transition-all hover:text-white",
                            activeSection === "home"
                                ? "bg-blue-600/20 text-blue-400 shadow-[0_0_20px_-5px_rgba(37,99,235,0.5)] ring-1 ring-blue-500/50"
                                : "text-neutral-400 hover:bg-white/5"
                        )}
                    >
                        Home
                        {activeSection === "home" && (
                            <motion.div
                                layoutId="active-nav"
                                className="absolute inset-0 -z-10 rounded-full bg-blue-500/10"
                                transition={{ type: "spring", stiffness: 380, damping: 30 }}
                            />
                        )}
                    </Link>
                    {navItems.map((item) => {
                        const isActive = activeSection === item.href.substring(1);
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={cn(
                                    "relative rounded-full px-4 py-2 text-sm font-medium transition-all hover:text-white",
                                    isActive
                                        ? "bg-blue-600/20 text-blue-400 shadow-[0_0_20px_-5px_rgba(37,99,235,0.5)] ring-1 ring-blue-500/50"
                                        : "text-neutral-400 hover:bg-white/5"
                                )}
                            >
                                {item.name}
                                {isActive && (
                                    <motion.div
                                        layoutId="active-nav"
                                        className="absolute inset-0 -z-10 rounded-full bg-blue-500/10"
                                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                    />
                                )}
                            </Link>
                        );
                    })}
                </motion.nav>

                {/* Mobile Menu Toggle */}
                <motion.div
                    initial={{ y: -50, opacity: 0 }}
                    animate={{
                        y: isNavVisible ? 0 : -100,
                        opacity: isNavVisible ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="md:hidden"
                >
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="rounded-full border border-white/10 bg-black/60 p-3 text-white shadow-2xl backdrop-blur-xl transition-all hover:bg-white/10"
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </motion.div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-x-4 top-24 z-40 rounded-3xl border border-white/10 bg-black/90 p-4 shadow-2xl backdrop-blur-xl md:hidden"
                    >
                        <div className="flex flex-col gap-2">
                            <Link
                                href="#home"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={cn(
                                    "rounded-xl px-4 py-3 text-base font-medium transition-all",
                                    activeSection === "home"
                                        ? "bg-blue-600/20 text-blue-400"
                                        : "text-neutral-400 hover:bg-white/5 hover:text-white"
                                )}
                            >
                                Home
                            </Link>
                            {navItems.map((item) => {
                                const isActive = activeSection === item.href.substring(1);
                                return (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className={cn(
                                            "rounded-xl px-4 py-3 text-base font-medium transition-all",
                                            isActive
                                                ? "bg-blue-600/20 text-blue-400"
                                                : "text-neutral-400 hover:bg-white/5 hover:text-white"
                                        )}
                                    >
                                        {item.name}
                                    </Link>
                                );
                            })}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
