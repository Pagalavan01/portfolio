import withPWA from "next-pwa";

const pwaConfig = withPWA({
    dest: "public",
    disable: process.env.NODE_ENV === "development",
    register: true,
    skipWaiting: true,
    cacheOnFrontEndNav: true,
    reloadOnOnline: true,
    sw: "sw.js",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    images: {
        unoptimized: true,
    },
    turbopack: {},
};

export default pwaConfig(nextConfig);


