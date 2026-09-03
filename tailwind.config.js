/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                "background-soft": "var(--background-soft)",
                surface: "var(--surface)",
                border: "var(--border)",
                "border-dark": "var(--border-dark)",
                "text-primary": "var(--text-primary)",
                "text-secondary": "var(--text-secondary)",
                "text-muted": "var(--text-muted)",
            },
            fontFamily: {
                sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
                display: ["Playfair Display", "Georgia", "serif"],
            },
        },
    },
    plugins: [],
};
