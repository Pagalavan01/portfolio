import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Navbar } from "@/components/ui/navbar";

export const metadata: Metadata = {
    title: "N.Pagalavan | Portfolio",
    description: "Machine Learning & Data Analyst Portfolio — model development, explainable AI, and data-driven solutions.",
    manifest: "/manifest.json",
    appleWebApp: {
        capable: true,
        statusBarStyle: "default",
        title: "N.Pagalavan",
    },
    formatDetection: {
        telephone: false,
    },
    icons: {
        icon: "/icon-512.png",
        apple: "/icon-192.png",
    },
    openGraph: {
        title: "N.Pagalavan | Portfolio",
        description: "Machine Learning & Data Analyst Portfolio",
        type: "website",
    },
};

export const viewport: Viewport = {
    themeColor: "#111111",
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
            <body>
                <Navbar />
                {children}
            </body>
        </html>
    );
}

