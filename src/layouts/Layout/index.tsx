import type { ReactNode } from "react";
import { Header } from "../../components/Header";
import { bg } from "./index.module.scss";

type Properties = Readonly<{
    children: ReactNode;
}>;

export const Layout = ({ children }: Properties) => {
    return (
        <section className={bg}>
            <Header />
            {children}
        </section>
    );
};
