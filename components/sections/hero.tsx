"use client";

import { motion } from "framer-motion";

export function Hero() {
    return (
        <section id="home" className="flex min-h-[90vh] flex-col justify-center px-4 pt-20 sm:px-6 lg:px-8">
            <div className="mx-auto w-full max-w-7xl text-left">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="mb-4 block text-lg font-medium text-blue-500">
                        Hi, my name is
                    </span>
                    <h1 className="text-6xl font-bold tracking-tight text-white sm:text-8xl">
                        N. Pagalavan
                    </h1>
                    <h2 className="mt-4 text-4xl font-bold tracking-tight text-neutral-400 sm:text-6xl">
                        Machine Learning Aspirant
                    </h2>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mt-6 max-w-3xl text-lg text-neutral-400"
                >
                    2nd year student at SRMIST and an aspiring Machine Learning intern. I have hands-on experience in model development, explainable AI, and building automation pipelines.
                </motion.p>
            </div>
        </section>
    );
}
