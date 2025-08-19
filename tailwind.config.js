/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./*.html",
        "./src/**/*.{js,ts,jsx,tsx,html,css}",
    ],
    theme: {
        extend: {
            colors: {
                // Primary Colors
                "text-primary": "#333F48",
                "text-muted": "#A3A3A3",
                "brand-primary": "#FF5733",
                "white": "#FFFFFF",

                // Background Colors
                "bg-white": "#FFFFFF",

                // Border Colors
                "border-primary": "#333F48",
                "border-text-primary": "#333F48",
            },
            fontFamily: {
                sans: ["Segoe UI Variable", "sans-serif"],
                "segoe": ["Segoe UI Variable", "sans-serif"],
                "inter": ["Inter", "sans-serif"],
            },
            fontSize: {
                // Custom typography scale based on Exeevo Figma specifications
                "hero-desktop": ["62px", {
                    lineHeight: "1.2em",
                    letterSpacing: "-0.02em",
                    fontWeight: "500"
                }],
                "hero-mobile": ["48px", {
                    lineHeight: "1.2em",
                    letterSpacing: "-0.02em",
                    fontWeight: "500"
                }],
                "subtitle-desktop": ["20px", {
                    lineHeight: "1.33em",
                    letterSpacing: "-0.01em",
                    fontWeight: "400"
                }],
                "subtitle-mobile": ["18px", {
                    lineHeight: "1.33em",
                    letterSpacing: "-0.01em",
                    fontWeight: "400"
                }],
                "button": ["16px", {
                    lineHeight: "1.33em",
                    letterSpacing: "-0.01em",
                    fontWeight: "600"
                }],
                "microsoft-text": ["16px", {
                    lineHeight: "1.33em",
                    letterSpacing: "-0.01em",
                    fontWeight: "600"
                }],
            },
            container: {
                center: true,
                padding: "1rem",
                screens: {
                    xl: "1312px",
                },
            },

            backgroundImage: {
                "gradient-built": "url('./src/images/gradient.png)",
            },
        },
    },
    plugins: [],
};
