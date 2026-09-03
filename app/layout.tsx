import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/ui/navbar";

export const metadata: Metadata = {
    title: "N.Pagalavan | Portfolio",
    description: "Machine Learning & Data Analyst Portfolio",
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
