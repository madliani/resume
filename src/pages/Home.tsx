import { AboutCard } from "../components/AboutCard";
import { EduCard } from "../components/EduCard";
import { ExpCard } from "../components/ExpCard";
import { Photo } from "../components/Photo";
import { SEO } from "../components/SEO";
import { Layout } from "../layouts/Layout";
import { Main } from "../layouts/Main";

export const Home = () => {
    return (
        <Layout>
            <SEO title="Home" />
            <Main className="flex flex-wrap">
                <section className="mt-8 w-full flex flex-wrap items-center justify-center">
                    <Photo />
                    <AboutCard className="w-1/3 ml-8" />
                </section>
                <section className="mt-8 w-full flex flex-col flex-wrap items-center justify-center">
                    <EduCard className="w-2/3" />
                    <ExpCard className="w-2/3 mt-8 mb-8" />
                </section>
            </Main>
        </Layout>
    );
};
