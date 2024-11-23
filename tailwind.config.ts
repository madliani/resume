import { nextui } from "@nextui-org/theme";

export default {
    mode: "jit",
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {},
        screens: {
            mobile: "360px",
            tablet: "640px",
            laptop: "1024px",
            desktop: "1280px",
        },
    },
    darkMode: "class",
    plugins: [nextui()],
};
