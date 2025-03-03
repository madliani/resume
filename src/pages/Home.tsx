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
            <Main className="flex flex-col flex-wrap">
                <section className="mt-8 w-full flex flex-col flex-wrap items-center justify-center tablet:flex-row tablet:items-center tablet:justify-center">
                    <AboutCard className="w-11/12 mt-8 tablet:w-5/12 tablet:ml-8" />
                </section>
                <section className="mt-8 mb-8 w-full flex flex-col flex-wrap items-center justify-center">
                    <EduCard className="w-11/12 tablet:w-8/12" />
                    <ExpCard className="w-11/12 mt-8 tablet:w-8/12" />
                </section>
            </Main>
        </Layout>
    );
};
