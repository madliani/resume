import { AboutCard } from "../components/AboutCard";
import { EduCard } from "../components/EduCard";
import { ExpCard } from "../components/ExpCard";
import { SEO } from "../components/SEO";
import { Layout } from "../layouts/Layout";
import { Main } from "../layouts/Main";

export const Home = () => {
    return (
        <Layout>
            <SEO title="Home" />
            <Main className="flex flex-wrap">
                <section className="mt-8 w-full flex flex-wrap items-center justify-center">
                    <AboutCard className="w-2/3" />
                </section>
                <section className="mt-8 w-full flex flex-col flex-wrap items-center justify-center">
                    <EduCard className="w-2/3" />
                    <ExpCard className="w-2/3 mt-8 mb-8" />
                </section>
            </Main>
        </Layout>
    );
};
