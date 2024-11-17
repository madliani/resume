import classNames from "classnames";
import type { ReactNode } from "react";
import { Header } from "../../components/Header";
import { bg } from "./index.module.scss";

type Properties = Readonly<{
    children: ReactNode;
}>;

export const Layout = ({ children }: Properties) => {
    return (
        <section className={classNames(bg, "h-screen")}>
            <Header />
            {children}
        </section>
    );
};
