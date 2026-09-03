"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

const navItems = [
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "C&T", href: "#certificates" },
    { name: "Achievements", href: "#achievements" },
    { name: "Contact", href: "#contact" },
];

export function Navbar() {
    const [activeSection, setActiveSection] = useState("home");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
                threshold: 0,
            }
        );

        const homeSection = document.querySelector("#home");
        if (homeSection) observer.observe(homeSection);

        navItems.forEach((item) => {
            const element = document.querySelector(item.href);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    // Close menu on scroll
    useEffect(() => {
        const handleScroll = () => {
            if (isMobileMenuOpen) setIsMobileMenuOpen(false);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isMobileMenuOpen]);

    return (
        <>
            {/* Top bar */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-[#D9D9D9]">
                <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16 flex items-center justify-between h-14">
                    {/* Wordmark — scrolls to top */}
                    <button
                        onClick={() => {
                            setIsMobileMenuOpen(false);
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="flex flex-col leading-none group text-left"
                        aria-label="Go to top"
                    >
                        <span className="text-[15px] font-bold tracking-tight text-[#111111] group-hover:opacity-70 transition-opacity">
                            N.Pagalavan
                        </span>
                        <span className="text-[10px] text-[#888888] tracking-widest uppercase mt-0.5">
                            Portfolio
                        </span>
                    </button>

                    {/* Desktop nav */}
                    <nav className="hidden md:flex items-center gap-7" aria-label="Main navigation">
                        {navItems.map((item) => {
                            const isActive = activeSection === item.href.substring(1);
                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={cn(
                                        "text-[13px] font-medium transition-colors pb-0.5",
                                        isActive
                                            ? "text-[#111111] border-b border-[#111111]"
                                            : "text-[#888888] hover:text-[#111111] border-b border-transparent"
                                    )}
                                >
                                    {item.name}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Mobile hamburger */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden flex flex-col gap-[5px] p-2 group"
                        aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                    >
                        <motion.span
                            animate={isMobileMenuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                            transition={{ duration: 0.2 }}
                            className="block h-px w-6 bg-[#111111] origin-center"
                        />
                        <motion.span
                            animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                            transition={{ duration: 0.15 }}
                            className="block h-px w-6 bg-[#111111]"
                        />
                        <motion.span
                            animate={isMobileMenuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                            transition={{ duration: 0.2 }}
                            className="block h-px w-6 bg-[#111111] origin-center"
                        />
                    </button>
                </div>
            </header>

            {/* Mobile menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.2 }}
                        className="fixed top-14 left-0 right-0 z-40 bg-white border-b border-[#D9D9D9] md:hidden"
                    >
                        <nav className="flex flex-col px-6 py-4 gap-1" aria-label="Mobile navigation">
                            <Link
                                href="#home"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={cn(
                                    "py-3 text-sm font-medium border-b border-[#F2F2F2] transition-colors",
                                    activeSection === "home" ? "text-[#111111]" : "text-[#888888]"
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
                                            "py-3 text-sm font-medium border-b border-[#F2F2F2] transition-colors last:border-0",
                                            isActive ? "text-[#111111]" : "text-[#888888]"
                                        )}
                                    >
                                        {item.name}
                                    </Link>
                                );
                            })}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
