import { NextUIProvider } from "@nextui-org/system";
import { ThemeProvider } from "next-themes";
import { Route, Routes, useHref, useNavigate } from "react-router-dom";
import { Home } from "../pages/Home";

export const Router = () => {
    const navigate = useNavigate();

    return (
        <NextUIProvider navigate={navigate} useHref={useHref}>
            <ThemeProvider attribute="class" defaultTheme="dark">
                <Routes>
                    <Route element={<Home />} path="/" />
                </Routes>
            </ThemeProvider>
        </NextUIProvider>
    );
};
