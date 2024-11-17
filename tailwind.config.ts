import { nextui } from "@nextui-org/theme";

export default {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {},
    },
    darkMode: "class",
    plugins: [nextui()],
};
