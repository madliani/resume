import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";
import { Router } from "../router/router";

export const App = () => {
    return (
        <HelmetProvider>
            <BrowserRouter>
                <Router />
            </BrowserRouter>
        </HelmetProvider>
    );
};
