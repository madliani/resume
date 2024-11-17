import type { ReactNode } from "react";

type Properties = Readonly<{
    children: ReactNode;
    className?: string;
}>;

export const Main = ({ className, children }: Properties) => (
    <main className={className}>{children}</main>
);
